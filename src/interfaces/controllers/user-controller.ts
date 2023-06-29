import { Request, Response } from 'express';

import UserRepositoryImpl from '../gateways/user-repository';
import { ApiResponse } from '../../core/common/api-response';
import { SQLDatabaseClient } from '../gateways/database/db_client';
import { CreateUserAdapter } from '../adapters/CreateUserAdapter';
import { GetUserAdapter } from '../adapters/GetUserAdapter';
import { UserUseCaseDto } from '../../core/domain/user/usecase/dto/user-usecase-dto';
import CreateUserInteractor from '../../core/service/user/create-user-interactor';
import { GetUserUseCase } from '../../core/domain/user/usecase/get-user-usecase';
import GetUserInteractor from '../../core/service/user/get-user-interactor';
import { CreateUserUseCase } from '../../core/domain/user/usecase/create-user-usecase';

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
