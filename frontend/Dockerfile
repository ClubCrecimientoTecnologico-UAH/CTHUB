# Dockerfile para Desarrollo
# frontend/Dockerfile

FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos de dependencias
COPY package.json package-lock.json* ./

# Instala dependencias
RUN npm install

# Copia todo el código fuente (incluidas las páginas y estilos)
COPY . .

# Expone el puerto
EXPOSE 3000

# Inicia en modo desarrollo
CMD ["npm", "run", "dev"]

# Dockerfile para Producción
# # Usa una imagen oficial de Node.js como base
# FROM node:20-alpine AS builder

# # Establece el directorio de trabajo
# WORKDIR /app

# # Copia los archivos de dependencias
# COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# # Instala las dependencias
# RUN npm install

# # Copia el resto del código fuente
# COPY . .

# # Construye la aplicación Next.js
# RUN npm run build

# # Producción: usa una imagen más ligera
# FROM node:20-alpine AS runner

# WORKDIR /app

# # Copia los archivos necesarios desde el builder
# COPY --from=builder /app/package.json ./
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/next.config.mjs ./
# COPY --from=builder /app/next-env.d.ts ./
# COPY --from=builder /app/styles ./styles

# # Expone el puerto por defecto de Next.js
# EXPOSE 3000

# # Comando para iniciar la app
# CMD ["npm", "start"]