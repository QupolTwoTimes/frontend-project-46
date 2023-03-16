install: 
	npm ci
publish:
	npm publish --dry-run
gendiff:
	node bin/gendiff.js
make lint: 
	npx eslint .
test-coverage:   	
	npm test -- --coverage --coverageProvider=v8