from datetime import datetime, timezone
from enum import Enum
from typing import Optional
from pydantic import BaseModel, EmailStr, Field

class Role(str, Enum):
    USER = "USER"
    ADMIN = "ADMIN"

class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    role: Role = Role.USER
    profile_picture: Optional[str] = None
    is_verified: bool = False
    is_active: bool = True

class UserInDB(UserBase):
    id: str = Field(alias="_id")
    password_hash: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    last_login: Optional[datetime] = None

    class Config:
        populate_by_name = True
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }
