import { Request, Response } from 'express';

import UserRepositoryImpl from '../gateways/UserRepository';
import { ApiResponse } from '../../core/common/ApiResponse';
import { SQLDatabaseClient } from '../gateways/database/DbClient';
import { CreateUserAdapter } from '../adapters/CreateUserAdapter';
import { GetUserAdapter } from '../adapters/GetUserAdapter';
import { UserUseCaseDto } from '../../core/domain/user/usecase/dto/UserUseCaseDto';
import CreateUserInteractor from '../../core/service/user/CreateUserInteractor';
import { GetUserUseCase } from '../../core/domain/user/usecase/GetUserUseCase';
import GetUserInteractor from '../../core/service/user/GetUserInteractor';
import { CreateUserUseCase } from '../../core/domain/user/usecase/CreateUserUsecase';

class UserController {
  private userRepository: UserRepositoryImpl;
  private getUserService: GetUserUseCase;
  private createUserService: CreateUserUseCase;

  constructor(dbClient: SQLDatabaseClient) {
    this.userRepository = new UserRepositoryImpl(dbClient);
    this.getUserService = new GetUserInteractor(this.userRepository);
    this.createUserService = new CreateUserInteractor(this.userRepository);

    this.getUser = this.getUser.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  async getUser(req: Request, res: Response) {
    const adapter: GetUserAdapter = await GetUserAdapter.new({
      id: parseInt(req.query.id as string, 10),
    });
    const user: UserUseCaseDto = await this.getUserService.execute(adapter);
    const response: ApiResponse<UserUseCaseDto> = ApiResponse.success(user);
    res.json(response);
  }

  async createUser(req: Request, res: Response) {
    const adapter: CreateUserAdapter = await CreateUserAdapter.new({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const createdUser: UserUseCaseDto = await this.createUserService.execute(adapter);
    const response: ApiResponse<UserUseCaseDto> = ApiResponse.success(createdUser);
    res.json(response);
  }
}

export default UserController;
