from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.codelink.course import CourseOut
from app.services.codelink.course import CourseRepository
from app.db.session import get_db

router = APIRouter(
    tags=["Courses"],
    responses={404: {"description": "Course not found"}}
)

@router.get("/", response_model=List[CourseOut], summary="List all courses")
async def read_courses(
    db: AsyncSession = Depends(get_db),
    skip: int = 0,
    limit: int = 100
):
    """
    Retrieve paginated list of courses with all details including:
    - Instructor name
    - Course image URL
    - Duration and student count
    """
    repo = CourseRepository(db)
    courses = await repo.get_courses(skip, limit)
    return courses

@router.get("/active", response_model=List[CourseOut], summary="List active courses")
async def read_active_courses(db: AsyncSession = Depends(get_db)):
    """
    Get all currently active courses with complete frontend-ready data
    """
    repo = CourseRepository(db)
    return await repo.get_active_courses()

@router.get("/{course_code}", response_model=CourseOut, summary="Get course details")
async def read_course(course_code: str, db: AsyncSession = Depends(get_db)):
    """
    Get full course details including:
    - Instructor display name
    - Course image
    - Formatted duration and student count
    """
    repo = CourseRepository(db)
    course = await repo.get_course(course_code)
    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found",
            headers={"X-Error": "Invalid course code"}
        )
    return course