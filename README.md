# typescript-clean-architecture-api

It is my attempt to create Clean Architecture based application in Typescript.

## Architecture draft

```
.
├── database
│  ├── mongodb
│  │  ├── Dockerfile
│  │  └── init-scripts
│  │     └── init.js
│  └── postgres
│     ├── Dockerfile
│     └── init-scripts
│        ├── 00_init.sql
│        ├── 01_create_conceptual_users.sql
│        └── 02_create_external_users.sql
├── docker-compose.yml
├── Dockerfile
├── env
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
├── src
│  ├── entities
│  │  ├── entity.ts
│  │  └── user.ts
│  ├── infrastructure
│  │  ├── config
│  │  │  ├── api-server-config.ts
│  │  │  └── database-config.ts
│  │  ├── database
│  │  │  ├── postgresql
│  │  │  │  └── db-client.ts
│  │  │  └── sql-database-client.ts
│  │  ├── logger.ts
│  │  ├── routers
│  │  │  ├── router.ts
│  │  │  └── user-router.ts
│  │  └── server.ts
│  ├── interfaces
│  │  ├── common
│  │  │  ├── api
│  │  │  │  ├── api-response.ts
│  │  │  │  └── meta.ts
│  │  │  └── type.ts
│  │  ├── controllers
│  │  │  └── user-controller.ts
│  │  └── gateways
│  │     ├── database
│  │     │  └── db_client.ts
│  │     ├── mappers
│  │     │  └── user-mapper.ts
│  │     └── user-repository.ts
│  ├── main.ts
│  └── use-cases
│     ├── user-interactor.ts
│     └── user-repository.ts
└── tsconfig.json
```
