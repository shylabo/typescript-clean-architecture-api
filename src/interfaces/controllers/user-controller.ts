import { Request, Response } from 'express'
import UserRepositoryImpl from '../gateways/user-repository'
import UserInteractor from '../../use-cases/user-interactor'

class UserController {
  private userRepository: UserRepositoryImpl
  private userInteractor: UserInteractor

  constructor(userDataSource: any) {
    this.userRepository = new UserRepositoryImpl(userDataSource)
    this.userInteractor = new UserInteractor(this.userRepository)

    this.getAll = this.getAll.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await this.userInteractor.getAll()
      res.json(users)
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Error fetching data' })
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const inputData = req.body
      const newUser = this.userInteractor.createUser(inputData)
      res.status(201).json(newUser)
    } catch (err) {
      res.status(500).json({ message: 'Error Creating data' })
    }
  }
}

export default UserController
