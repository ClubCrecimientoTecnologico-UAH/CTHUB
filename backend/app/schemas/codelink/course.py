from pydantic import BaseModel, HttpUrl
from datetime import date, datetime
from typing import Optional

class CourseBase(BaseModel):
    code: str
    title: str
    description: str
    start_date: date
    end_date: date
    status: str
    instructor_name: Optional[str] = None  # Nuevo campo
    image: Optional[str] = None  # Nuevo campo (usar HttpUrl si quieres validación de URL)

class CourseOut(CourseBase):
    instructor_id: Optional[int] = None
    professor_id: Optional[int] = None
    created_at: datetime
    updated_at: Optional[datetime] = None
    duration: Optional[int] = None
    students: Optional[int] = None

    class Config:
        from_attributes = True