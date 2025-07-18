from contextlib import asynccontextmanager
from fastapi import FastAPI
from app.db.session import engine, Base
from app.routers import router
import logging

logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Intenta conectar a la base de datos
    max_retries = 3
    retry_delay = 2
    
    for attempt in range(max_retries):
        try:
            async with engine.begin() as conn:
                logger.info("Conexión a PostgreSQL establecida")
                await conn.run_sync(Base.metadata.create_all)
                break
        except Exception as e:
            if attempt == max_retries - 1:
                logger.error(f"Error al conectar a PostgreSQL: {str(e)}")
                raise
            logger.warning(f"Intento {attempt + 1} fallido. Reintentando...")
            import asyncio
            await asyncio.sleep(retry_delay)
    
    yield
    
    # Cierre seguro del engine
    await engine.dispose()

app = FastAPI(
    title="CTHub API",
    description="API para el Club Universitario",
    version="1.0.0",
    lifespan=lifespan
)

app.include_router(router)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "database": "connected"}