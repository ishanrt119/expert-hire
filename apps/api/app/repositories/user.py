from typing import Optional
from bson import ObjectId
from app.core.database import get_database
from app.models.user import UserInDB

class UserRepository:
    def get_collection(self):
        db = get_database()
        return db.users

    async def get_by_email(self, email: str) -> Optional[UserInDB]:
        user_doc = await self.get_collection().find_one({"email": email})
        if user_doc:
            user_doc["_id"] = str(user_doc["_id"])
            return UserInDB(**user_doc)
        return None

    async def get_by_id(self, user_id: str) -> Optional[UserInDB]:
        try:
            obj_id = ObjectId(user_id)
        except Exception:
            return None
        user_doc = await self.get_collection().find_one({"_id": obj_id})
        if user_doc:
            user_doc["_id"] = str(user_doc["_id"])
            return UserInDB(**user_doc)
        return None

    async def create(self, user: UserInDB) -> UserInDB:
        user_dict = user.model_dump(by_alias=True, exclude={"id"})
        result = await self.get_collection().insert_one(user_dict)
        user_dict["_id"] = str(result.inserted_id)
        return UserInDB(**user_dict)

    async def update(self, user_id: str, update_data: dict) -> Optional[UserInDB]:
        try:
            obj_id = ObjectId(user_id)
        except Exception:
            return None
        
        await self.get_collection().update_one(
            {"_id": obj_id},
            {"$set": update_data}
        )
        return await self.get_by_id(user_id)
