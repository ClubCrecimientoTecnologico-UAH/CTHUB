from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.codelink.course import CourseOut
from app.services.codelink.course import CourseRepository
from app.db.session import get_db

router = APIRouter()

@router.get("/", response_model=List[CourseOut])
async def read_courses(
    db: AsyncSession = Depends(get_db),
    skip: int = 0,
    limit: int = 100
):
    repo = CourseRepository(db)
    return await repo.get_courses(skip, limit)

@router.get("/active", response_model=List[CourseOut])
async def read_active_courses(db: AsyncSession = Depends(get_db)):
    repo = CourseRepository(db)
    return await repo.get_active_courses()

@router.get("/{course_code}", response_model=CourseOut)
async def read_course(course_code: str, db: AsyncSession = Depends(get_db)):
    repo = CourseRepository(db)
    course = await repo.get_course(course_code)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return course