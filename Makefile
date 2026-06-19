# SAVE FOOD
# Reducing food waste by connecting bakeries with customers
#
# WHAT IT DOES:
#   Bakeries and food stores can list unsold items at discounted prices in "food boxes"
#   Customers search for available boxes nearby and reserve them for pickup
#   Stores manage boxes and reservations through a simple dashboard
#
# WHY IT MATTERS:
#   Reduces food waste
#   Helps customers save money on quality food
#   Creates new revenue stream for bakeries
#
# TARGET USERS:
#   Bakeries and food stores looking to reduce waste
#   Budget-conscious customers seeking discounted food
#
# STATUS: In progress - core features working, more coming soon

.PHONY: help install build run backend frontend clean test logs

help:
	@echo ""
	@echo "SAVE FOOD - Food Waste Reduction Platform"
	@echo "========================================="
	@echo ""
	@echo "WHAT IT DOES:"
	@echo "  - Bakeries create boxes with unsold items at discounts"
	@echo "  - Customers search and reserve boxes nearby"
	@echo "  - Store dashboard manages boxes and pickups"
	@echo ""
	@echo "AVAILABLE COMMANDS:"
	@echo ""
	@echo "  Setup:"
	@echo "    make install          - Install all dependencies"
	@echo "    make build            - Build the app"
	@echo ""
	@echo "  Running:"
	@echo "    make run              - Start both backend and frontend"
	@echo "    make backend          - Start backend only (port 8080)"
	@echo "    make frontend         - Start frontend only (port 4200)"
	@echo ""
	@echo "  Testing:"
	@echo "    make test             - Run all tests"
	@echo ""
	@echo "  Cleanup:"
	@echo "    make clean            - Remove build files"
	@echo ""

install: install-backend install-frontend
	@echo "Dependencies installed"

install-backend:
	@echo "Installing backend dependencies..."
	cd backend && mvn clean install -DskipTests

install-frontend:
	@echo "Installing frontend dependencies..."
	cd frontend && npm install

build: build-backend build-frontend
	@echo "Build complete"

build-backend:
	@echo "Building backend..."
	cd backend && mvn clean package -DskipTests

build-frontend:
	@echo "Building frontend..."
	cd frontend && npm run build

run: backend frontend

backend:
	@echo "Starting backend server (http://localhost:8080)..."
	cd backend && mvn spring-boot:run

frontend:
	@echo "Starting frontend (http://localhost:4200)..."
	cd frontend && npm start

test: test-backend test-frontend
	@echo "Tests complete"

test-backend:
	@echo "Running backend tests..."
	cd backend && mvn test

test-frontend:
	@echo "Running frontend tests..."
	cd frontend && npm test -- --watch=false

clean: clean-backend clean-frontend
	@echo "Cleanup complete"

clean-backend:
	@echo "Cleaning backend..."
	cd backend && mvn clean
	rm -rf backend/target

clean-frontend:
	@echo "Cleaning frontend..."
	cd frontend && rm -rf node_modules dist
