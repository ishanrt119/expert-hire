from fastapi import HTTPException, status
from app.repositories.user import UserRepository
from app.schemas.user import UserCreate, UserUpdate
from app.models.user import UserInDB
from app.core.security import get_password_hash
from datetime import datetime, timezone

class UserService:
    def __init__(self):
        self.repository = UserRepository()

    async def get_by_email(self, email: str):
        return await self.repository.get_by_email(email)

    async def get_by_id(self, user_id: str):
        user = await self.repository.get_by_id(user_id)
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
        return user

    async def create_user(self, user_in: UserCreate):
        existing_user = await self.repository.get_by_email(user_in.email)
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered"
            )

        user_db = UserInDB(
            _id="", # Will be set by mongo
            first_name=user_in.first_name,
            last_name=user_in.last_name,
            email=user_in.email,
            password_hash=get_password_hash(user_in.password),
        )
        return await self.repository.create(user_db)

    async def update_user(self, user_id: str, update_data: UserUpdate):
        user = await self.get_by_id(user_id)
        update_dict = update_data.model_dump(exclude_unset=True)
        if update_dict:
            update_dict["updated_at"] = datetime.now(timezone.utc)
            return await self.repository.update(user_id, update_dict)
        return user
