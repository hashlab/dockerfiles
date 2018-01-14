setup:
	@script/setup
.PHONY: setup

lint:
	@script/lint
.PHONY: lint

build:
	@docker-compose build --force-rm app
.PHONY: build

start:
	@docker-compose up app
.PHONY: start

console:
	@docker-compose exec app /bin/bash
.PHONY: console

teardown:
	@docker-compose down --volumes --remove-orphans --rmi local
.PHONY: teardown
