.PHONY: install dev build preview clean help

help: ## Показать список команд
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Установить зависимости (pnpm)
	pnpm install

dev: ## Запустить dev-сервер (localhost)
	pnpm dev

build: ## Production-сборка в dist/
	pnpm build

preview: ## Preview production-сборки
	pnpm preview

clean: ## Очистить dist/ и node_modules/
	rm -rf dist node_modules