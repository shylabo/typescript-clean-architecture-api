```sh
# Setup
$ npm i express

$ npm i -D typescript ts-node @types/node @types/express supertest @types/supertest @types/node jest @types/jest ts-jest

```

```sh
$ npx tsc --init
# Configure in tsconfig.json
# "outDir": "./dist",
# "rootDir": "./"
```

```sh
# Init Jest
$ npx ts-jest config:init
```

```
# Add scripts in package.json
"scripts": {
    "test": "jest --watchAll --collectCoverage",
}
```
