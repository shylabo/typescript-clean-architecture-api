import { Request, Response } from 'express';

import UserRepositoryImpl from '../gateways/user-repository';
import { ApiResponse } from '../common/api/api-response';
import { SQLDatabaseClient } from '../gateways/database/db_client';
import { CreateUserAdapter } from '../adapters/CreateUserAdapter';
import { GetUserAdapter } from '../adapters/GetUserAdapter';
import { UserUseCaseDto } from '../../use-cases/user/user-usecase-dto';
import GetUserInteractor from '../../use-cases/user/get-user-interactor';
import CreateUserInteractor from '../../use-cases/user/create-user-interactor';

class UserController {
  private userRepository: UserRepositoryImpl;
  private getUserService: GetUserInteractor;
  private createUserService: CreateUserInteractor;

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
    const user = await this.getUserService.getUserById(adapter);
    const response: ApiResponse<UserUseCaseDto> = ApiResponse.success(user);
    res.json(response);
  }

  async createUser(req: Request, res: Response) {
    const adapter: CreateUserAdapter = await CreateUserAdapter.new({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const createdUser: UserUseCaseDto = await this.createUserService.createUser(adapter);
    const response: ApiResponse<UserUseCaseDto> = ApiResponse.success(createdUser);
    res.json(response);
  }
}

export default UserController;
