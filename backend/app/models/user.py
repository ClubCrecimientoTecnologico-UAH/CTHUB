# Modelo de usuario
from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime, timezone

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    bio = Column(Text)
    avatar_url = Column(String(255))
    role = Column(String(255), nullable=False)
    is_featured = Column(Boolean, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, onupdate=lambda: datetime.now(timezone.utc))
    is_active = Column(Boolean)

    # Relaciones
    blog_posts = relationship("BlogPost", back_populates="author")
    comments = relationship("Comment", back_populates="user")
    user_skills = relationship("UserSkill", back_populates="user")
    course_instructors = relationship("CourseInstructor", back_populates="instructor")
    course_students = relationship("CourseStudent", back_populates="student")
    evaluation_results = relationship("EvaluationResult", back_populates="student")
