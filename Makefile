setup:
	docker-compose build
	docker-compose run node npm install

start:
	docker-compose up -d

stop:
	docker-compose down

shell:
	docker-compose exec node bash
