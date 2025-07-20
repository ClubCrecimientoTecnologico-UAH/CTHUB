from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models.codelink.course import Course

class CourseRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_course(self, course_code: str):
        result = await self.db.execute(select(Course).where(Course.code == course_code))
        return result.scalar_one_or_none()

    async def get_courses(self, skip: int = 0, limit: int = 100):
        result = await self.db.execute(select(Course).offset(skip).limit(limit))
        return result.scalars().all()

    async def get_active_courses(self):
        result = await self.db.execute(
            select(Course)
            .where(Course.status.in_(["upcoming", "active"]))
            .order_by(Course.start_date)
        )
        return result.scalars().all()