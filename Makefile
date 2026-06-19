.PHONY: install build run frontend backend clean

install:
	cd backend && mvn clean install -DskipTests
	cd frontend && npm install

build:
	cd backend && mvn clean package -DskipTests
	cd frontend && npm run build

run: frontend backend

frontend:
	cd frontend && npm start

backend:
	cd backend && mvn spring-boot:run

clean:
	cd backend && mvn clean
	cd frontend && rm -rf node_modules dist
