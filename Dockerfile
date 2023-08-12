# Используем официальный образ Node.js
FROM node:alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение для продакшн
RUN npm run build

# Второй этап: создание образа для продакшн
FROM node:alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/package.json .
COPY --from=build /app/next.config.js .
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules

# Запускаем Next.js приложение
CMD ["npm", "start"]