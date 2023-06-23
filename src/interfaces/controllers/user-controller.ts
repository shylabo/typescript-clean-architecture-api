import { Request, Response } from 'express'
import UserRepositoryImpl from '../gateways/user-repository'
import UserInteractor from '../../use-cases/user-interactor'
import { CreateUserInputData } from '../../use-cases/input-data/user-input-data'

class UserController {
  private userRepository: UserRepositoryImpl
  private userInteractor: UserInteractor

  constructor() {
    this.userRepository = new UserRepositoryImpl()
    this.userInteractor = new UserInteractor(this.userRepository)

    this.getAllUsers = this.getAllUsers.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  public getAllUsers(req: Request, res: Response): void {
    const users = this.userInteractor.getAllUsers()
    res.json(users)
  }

  public createUser(req: Request, res: Response): void {
    const inputData: CreateUserInputData = req.body
    const newUser = this.userInteractor.createUser(inputData)
    res.status(201).json(newUser)
  }
}

export default UserController
