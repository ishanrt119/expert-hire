from fastapi import APIRouter, Depends, status
from app.schemas.user import UserCreate, UserResponse
from app.schemas.token import Token, LoginRequest
from app.services.user import UserService
from app.services.auth import AuthService

router = APIRouter(prefix="/api/auth", tags=["auth"])

@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register(user_in: UserCreate):
    user_service = UserService()
    return await user_service.create_user(user_in)

@router.post("/login", response_model=Token)
async def login(login_data: LoginRequest):
    auth_service = AuthService()
    user = await auth_service.authenticate_user(login_data)
    return auth_service.create_tokens_for_user(user.id)

@router.post("/logout")
async def logout():
    # In a fully implemented JWT system with revocation, we'd add the token to a blacklist.
    # For now, it's mostly handled client-side by dropping the token.
    return {"message": "Successfully logged out"}
