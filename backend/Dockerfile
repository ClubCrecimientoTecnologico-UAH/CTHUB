
# Dockerfile para backend FastAPI
FROM python:3.13-slim

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y build-essential && rm -rf /var/lib/apt/lists/*

# Copiar archivos de requerimientos
COPY requirements.txt ./

# Instalar dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del código
COPY . .

# Exponer el puerto de FastAPI
EXPOSE 8000

# Comando por defecto (puedes sobreescribirlo en docker-compose)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
