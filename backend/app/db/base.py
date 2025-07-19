# Declaración de Base de modelos
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import declarative_base

Base = declarative_base()

async def init_db(session: AsyncSession):
    # Puedes añadir lógica de inicialización aquí si es necesario
    pass