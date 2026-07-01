from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    MONGODB_URL: str = "mongodb://localhost:27017"
    DATABASE_NAME: str = "experthire"
    SECRET_KEY: str = "your-super-secret-key-change-in-production"
    JWT_SECRET: str = "your-jwt-secret-key-change-in-production"
    JWT_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    FRONTEND_URL: str = "http://localhost:3000"

    model_config = SettingsConfigDict(env_file="../../.env", env_file_encoding="utf-8", extra="ignore")

settings = Settings()
