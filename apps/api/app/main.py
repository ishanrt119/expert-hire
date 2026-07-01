from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.database import connect_to_mongo, close_mongo_connection
from app.routes import auth, users
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="ExpertHire AI Backend",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    logger.info("Connecting to MongoDB...")
    await connect_to_mongo()
    logger.info("Connected to MongoDB.")

@app.on_event("shutdown")
async def shutdown_db_client():
    logger.info("Closing MongoDB connection...")
    await close_mongo_connection()
    logger.info("Closed MongoDB connection.")

app.include_router(auth.router)
app.include_router(users.router)

@app.get("/")
async def root():
    return {"message": "Welcome to ExpertHire AI API"}
