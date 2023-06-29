# typescript-clean-architecture-api

It is my attempt to create Clean Architecture based application in Typescript.

## Architecture draft

```
src
├── core
│  ├── common
│  │  ├── ApiResponse.ts
│  │  ├── Entity.ts
│  │  ├── Exception.ts
│  │  ├── StatusCodes.ts
│  │  ├── Type.ts
│  │  └── Usecase.ts
│  ├── domain
│  │  ├── message
│  │  │  ├── entity
│  │  │  │  ├── Message.ts
│  │  │  │  └── type
│  │  │  │     └── CreateMessageEntityPayload.ts
│  │  │  ├── port
│  │  │  │  ├── persistence
│  │  │  │  │  └── MessageRepository.ts
│  │  │  │  └── usecase
│  │  │  │     └── GetMessagePort.ts
│  │  │  └── usecase
│  │  │     ├── dto
│  │  │     │  └── MessageUseCaseDto.ts
│  │  │     └── GetMessagesUseCase.ts
│  │  └── user
│  │     ├── entity
│  │     │  ├── type
│  │     │  │  └── CreateUserEntityPayload.ts
│  │     │  └── User.ts
│  │     ├── port
│  │     │  ├── persistence
│  │     │  │  └── UserRepository.ts
│  │     │  └── usecase
│  │     │     ├── CreateUserPort.ts
│  │     │     └── GetUserPort.ts
│  │     └── usecase
│  │        ├── CreateUserUsecase.ts
│  │        ├── dto
│  │        │  └── UserUseCaseDto.ts
│  │        └── GetUserUseCase.ts
│  └── service
│     ├── message
│     │  └── GetMessagesInteractor.ts
│     └── user
│        ├── CreateUserInteractor.ts
│        └── GetUserInteractor.ts
├── infrastructure
│  ├── config
│  │  ├── ApiServerConfig.ts
│  │  └── DatabaseConfig.ts
│  ├── database
│  │  ├── mongodb
│  │  │  └── DbClient.ts
│  │  ├── NosqlDatabaseClient.ts
│  │  ├── postgresql
│  │  │  └── DbClient.ts
│  │  └── SqlDatabaseClient.ts
│  ├── Logger.ts
│  ├── routers
│  │  ├── MessageRouter.ts
│  │  ├── Router.ts
│  │  └── UserRouter.ts
│  └── Server.ts
├── interfaces
│  ├── adapters
│  │  ├── CreateMessageAdapter.ts
│  │  ├── CreateUserAdapter.ts
│  │  └── GetUserAdapter.ts
│  ├── controllers
│  │  ├── MessageController.ts
│  │  └── UserController.ts
│  └── gateways
│     ├── database
│     │  └── DbClient.ts
│     ├── mappers
│     │  ├── MessageMapper.ts
│     │  └── UserMapper.ts
│     ├── MessageRepository.ts
│     └── UserRepository.ts
└── Main.ts
```
