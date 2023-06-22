import { Request, Response } from 'express'
import UserRepositoryImpl from '../repositories/user-repository'
import UserInteractor from '../../use-cases/user-interactor'

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
    const { name, email, password } = req.body
    const newUser = this.userInteractor.createUser(name, email, password)
    res.status(201).json(newUser)
  }
}

export default UserController
