#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Starting Chatnal with Docker...${NC}"

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed${NC}"
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}❌ Docker Compose is not installed${NC}"
    exit 1
fi

# Build and start containers
echo -e "${BLUE}📦 Building images...${NC}"
docker-compose build

echo -e "${BLUE}🐳 Starting containers...${NC}"
docker-compose up -d

# Wait for backend to be ready
echo -e "${BLUE}⏳ Waiting for backend to be ready...${NC}"
sleep 10

# Check status
echo -e "${BLUE}📊 Container status:${NC}"
docker-compose ps

echo -e "${GREEN}✅ Chatnal is running!${NC}"
echo -e "${GREEN}📍 Frontend: http://localhost:3000${NC}"
echo -e "${GREEN}📍 Backend: http://localhost:3001${NC}"
echo -e "${GREEN}📍 PostgreSQL: localhost:5432${NC}"

echo -e "\n${BLUE}Commands:${NC}"
echo "  docker-compose logs -f     # View logs"
echo "  docker-compose down        # Stop containers"
echo "  docker-compose restart     # Restart"