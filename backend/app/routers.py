# Incluye todos los routers
from fastapi import APIRouter
from app.api.v1.codelink.courses import router as courses_router

router = APIRouter()

router.include_router(
    courses_router,
    prefix="/api/v1/courses",
    tags=["courses"]
)


    