# Dockerfile para frontend Next.js
FROM node:20-slim

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de Next.js
EXPOSE 3000

# Comando por defecto (puedes sobreescribirlo en docker-compose)
CMD ["npm", "run", "dev"]
