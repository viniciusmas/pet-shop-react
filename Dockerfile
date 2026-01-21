# Build da aplicação
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Servir com Nginx
FROM nginx:alpine

# Remove config padrão
RUN rm /etc/nginx/conf.d/default.conf

# Copia config customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build do React
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
