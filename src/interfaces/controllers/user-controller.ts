import { Request, Response } from 'express';
import UserRepositoryImpl from '../gateways/user-repository';
import { ApiResponse } from '../common/api/api-response';
import UserInteractor from '../../use-cases/user/user-interactor';
import { User } from '../../entities/user';
import { StatusCodes } from '../../shared/status-codes';
import { SQLDatabaseClient } from '../gateways/database/db_client';
import Logger from '../../infrastructure/logger';
import { CreateUserAdapter } from '../adapters/CreateUserAdapter';
import { UserUseCaseDto } from '../../use-cases/user/user-usecase-dto';

class UserController {
  private userRepository: UserRepositoryImpl;
  private userInteractor: UserInteractor;

  constructor(dbClient: SQLDatabaseClient) {
    this.userRepository = new UserRepositoryImpl(dbClient);
    this.userInteractor = new UserInteractor(this.userRepository);

    this.getUsers = this.getUsers.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  async getUsers(req: Request, res: Response) {
    const users = await this.userInteractor.getAll();
    const response: ApiResponse<UserUseCaseDto[]> = ApiResponse.success(users);
    res.json(response);
  }

  async createUser(req: Request, res: Response) {
    const adapter: CreateUserAdapter = await CreateUserAdapter.new({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const createdUser: UserUseCaseDto = await this.userInteractor.createUser(adapter);
    const response: ApiResponse<UserUseCaseDto> = ApiResponse.success(createdUser);
    res.json(response);
  }
}

export default UserController;
