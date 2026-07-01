from fastapi import HTTPException, status
from app.schemas.token import LoginRequest
from app.services.user import UserService
from app.core.security import verify_password, create_access_token
from datetime import datetime, timezone

class AuthService:
    def __init__(self):
        self.user_service = UserService()

    async def authenticate_user(self, login_data: LoginRequest):
        user = await self.user_service.get_by_email(login_data.email)
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect email or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        if not verify_password(login_data.password, user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect email or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        # Update last login
        await self.user_service.repository.update(user.id, {"last_login": datetime.now(timezone.utc)})
        
        return user

    def create_tokens_for_user(self, user_id: str):
        access_token = create_access_token(subject=user_id)
        # refresh_token = create_refresh_token(subject=user_id)
        return {
            "access_token": access_token,
            "token_type": "bearer"
        }
