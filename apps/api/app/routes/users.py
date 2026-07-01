from fastapi import APIRouter, Depends
from app.schemas.user import UserResponse, UserUpdate, ChangePassword
from app.models.user import UserInDB
from app.dependencies.auth import get_current_user
from app.services.user import UserService
from app.core.security import verify_password, get_password_hash
from fastapi import HTTPException, status

router = APIRouter(prefix="/api/users", tags=["users"])

@router.get("/me", response_model=UserResponse)
async def read_users_me(current_user: UserInDB = Depends(get_current_user)):
    return current_user

@router.put("/me", response_model=UserResponse)
async def update_user_me(
    user_in: UserUpdate,
    current_user: UserInDB = Depends(get_current_user)
):
    user_service = UserService()
    updated_user = await user_service.update_user(current_user.id, user_in)
    return updated_user

@router.patch("/change-password")
async def change_password(
    password_data: ChangePassword,
    current_user: UserInDB = Depends(get_current_user)
):
    if not verify_password(password_data.old_password, current_user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect old password"
        )
    
    user_service = UserService()
    new_hash = get_password_hash(password_data.new_password)
    await user_service.repository.update(current_user.id, {"password_hash": new_hash})
    
    return {"message": "Password updated successfully"}
