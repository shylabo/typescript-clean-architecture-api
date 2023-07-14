# typescript-clean-architecture-api

It is my attempt to create Clean Architecture based application in Typescript.

![TypeScript-clean-architecture-api](https://github.com/shylabo/typescript-clean-architecture-api/assets/41677855/959d1b24-aee8-4547-91a7-5061342af258)


# About this project (Private Chat API with Clean Architecture)

The Private Chat API is a software development project aimed at providing users with a reliable and scalable platform for sending messages in a private chat room. Unlike traditional applications, this project focuses solely on providing the API backend without any frontend user interface.

The API has been developed using the Clean Architecture approach, ensuring a separation of concerns and maintainability. TypeScript, a statically-typed superset of JavaScript, has been chosen as the primary programming language for its strong typing and enhanced tooling support.

To ensure the application's scalability and portability, Docker has been utilized for containerization. This allows for easy deployment and management of the application across different environments, reducing dependency issues and streamlining the deployment process.

For storing basic user information, PostgreSQL has been employed as the database. PostgreSQL is known for its reliability, scalability, and extensive feature set, making it an excellent choice for storing critical user data.

To handle the storage of messages, MongoDB has been chosen. MongoDB is a NoSQL database known for its flexibility and scalability, making it particularly suitable for scenarios where message volume is expected to grow rapidly. By leveraging MongoDB's document-oriented nature, the application can efficiently handle the storage and retrieval of chat messages.

An interesting aspect of this project is the minimal use of libraries. While libraries can provide shortcuts and pre-built functionalities, this project aims to develop custom implementations wherever possible. By doing so, the development team gains a deeper understanding of the underlying concepts and retains full control over the application's behavior.

## Architecture tree

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
