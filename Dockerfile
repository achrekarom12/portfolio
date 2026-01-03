# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
# This will generate the 'out' directory due to output: 'export' in next.config.ts
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine AS runner

# Copy the build output to Nginx's default html directory
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom Nginx configuration if needed (optional, using default for now)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
