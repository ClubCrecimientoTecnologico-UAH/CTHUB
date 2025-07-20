from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging
from app.routers import router
from app.db.session import engine
from app.db.base import Base


logger = logging.getLogger(__name__)

app = FastAPI()
app.include_router(router)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.on_event("startup")
async def on_startup():
    logger.info("Creating database tables...")
    await init_db()
    logger.info("Database tables created successfully!")

@app.get("/")
def read_root():
    return {"message": "¡CTHub Backend funcionando!"}

''' 
Por hacer
1. Configurar alembic
2. Cambiar el 'on_event' por lifespan
'''