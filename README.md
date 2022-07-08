{
  "name": "typescript-ddd-skeleton",
  "version": "1.0.0",
  "description": "",
  "repository": {
    "url": "https://github.com/CodelyTV/typescript-ddd-skeleton"
  },
  "license": "",
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.14.0"
  },
  "scripts": {
    "dev:mooc:backend": "NODE_ENV=dev ts-node-dev --ignore-watch node_modules  ./src/apps/mooc/backend/start.ts",
    "lint": "tslint src/**/*.ts{,x}",
    "test": "npm run test:unit && npm run test:features",
    "test:unit": "NODE_ENV=test jest",
    "start:mooc:backend": "NODE_ENV=production node dist/src/apps/mooc/backend/start",
    "test:features": "npm run test:mooc:backend:features",
    "test:mooc:backend:features": "NODE_ENV=test cucumber-js -p mooc_backend",
    "build": "npm run build:clean && npm run build:tsc && npm run build:di",
    "build:tsc": "tsc -p tsconfig.prod.json",
    "build:di": "copy 'src/**/*.{json,yaml,html,png}' dist/src",
    "build:clean": "rm -r dist; exit 0"
  },
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "cookie-session": "^2.0.0",
    "express-validator": "^6.14.2",
    "glob": "^8.0.3",
    "helmet": "^5.1.0",
    "http-status": "^1.5.2",
    "node-dependency-injection": "^3.0.2",
    "nunjucks": "^3.2.3",
    "ts-node": "^10.8.2",
    "typescript": "^4.7.4",
    "winston": "^3.8.1"
  },
  "devDependencies": {
    "@types/bson": "^4.0.5",
    "@types/compression": "^1.7.2",
    "@types/errorhandler": "1.5.0",
    "@types/express": "^4.17.13",
    "@types/glob": "^7.2.0",
    "@types/helmet": "0.0.48",
    "@types/node": "^18.0.3",
    "@types/connect-flash": "0.0.37",
    "@types/cookie-parser": "^1.4.3",
    "@types/cookie-session": "^2.0.44",
    "@types/cucumber": "^6.0.1",
    "@types/faker": "^6.6.8",
    "@types/jest": "^28.1.4",
    "@types/nunjucks": "^3.2.1",
    "@types/supertest": "^2.0.12",
    "cucumber": "^6.0.5",
    "faker": "^6.6.6",
    "husky": "^8.0.1",
    "jest": "^28.1.2",
    "lint-staged": "13.0.3",
    "prettier": "^2.7.1",
    "supertest": "^6.2.4",
    "ts-jest": "^28.0.5",
    "ts-node-dev": "^2.0.0",
    "tslint": "^6.1.3",
    "tslint-config-prettier": "~1.18.0",
    "tslint-eslint-rules": "^5.4.0"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "{src,tests}/**/*.ts": [
      "prettier --write",
      "tslint --fix",
      "git add"
    ]
  }
}
