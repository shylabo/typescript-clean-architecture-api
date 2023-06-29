# typescript-clean-architecture-api

It is my attempt to create Clean Architecture based application in Typescript.

## Architecture draft

```
src
├── core
│  ├── common
│  │  ├── api-response.ts
│  │  ├── entity.ts
│  │  ├── exception.ts
│  │  ├── status-codes.ts
│  │  ├── type.ts
│  │  └── usecase.ts
│  ├── domain
│  │  ├── message
│  │  │  ├── entity
│  │  │  │  ├── message.ts
│  │  │  │  └── type
│  │  │  │     └── create-message-entity-payload.ts
│  │  │  ├── port
│  │  │  │  ├── persistence
│  │  │  │  │  └── message-repository.ts
│  │  │  │  └── usecase
│  │  │  │     └── get-message-port.ts
│  │  │  └── usecase
│  │  │     ├── dto
│  │  │     │  └── message-usecase-dto.ts
│  │  │     └── get-messages-usecase.ts
│  │  └── user
│  │     ├── entity
│  │     │  ├── type
│  │     │  │  └── create-user-entity-payload.ts
│  │     │  └── user.ts
│  │     ├── port
│  │     │  ├── persistence
│  │     │  │  └── user-repository.ts
│  │     │  └── usecase
│  │     │     ├── create-user-port.ts
│  │     │     └── get-user-port.ts
│  │     └── usecase
│  │        ├── create-user-usecase.ts
│  │        ├── dto
│  │        │  └── user-usecase-dto.ts
│  │        └── get-user-usecase.ts
│  └── service
│     ├── message
│     │  └── get-messages-interactor.ts
│     └── user
│        ├── create-user-interactor.ts
│        └── get-user-interactor.ts
├── infrastructure
│  ├── config
│  │  ├── api-server-config.ts
│  │  └── database-config.ts
│  ├── database
│  │  ├── mongodb
│  │  │  └── db-client.ts
│  │  ├── nosql-database-client.ts
│  │  ├── postgresql
│  │  │  └── db-client.ts
│  │  └── sql-database-client.ts
│  ├── logger.ts
│  ├── routers
│  │  ├── message-router.ts
│  │  ├── router.ts
│  │  └── user-router.ts
│  └── server.ts
├── interfaces
│  ├── adapters
│  │  ├── CreateMessageAdapter.ts
│  │  ├── CreateUserAdapter.ts
│  │  └── GetUserAdapter.ts
│  ├── controllers
│  │  ├── message-controller.ts
│  │  └── user-controller.ts
│  └── gateways
│     ├── database
│     │  └── db_client.ts
│     ├── mappers
│     │  ├── message-mapper.ts
│     │  └── user-mapper.ts
│     ├── message-repository.ts
│     └── user-repository.ts
└── main.ts
```
