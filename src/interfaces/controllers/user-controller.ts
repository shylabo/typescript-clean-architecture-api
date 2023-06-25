import { Request, Response } from 'express'
import UserRepositoryImpl from '../gateways/user-repository'
import { ApiResponse } from '../common/api/api-response'
import UserInteractor from '../../use-cases/user-interactor'
import { User } from '../../entities/user'
import { Meta } from '../common/api/meta'

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
      const response: ApiResponse<User[]> = ApiResponse.success(users)
      res.json(response)
    } catch (err: any) {
      const response: ApiResponse<unknown> = ApiResponse.error(
        Meta.STATUS_INTERNAL_SERVER_ERROR.code,
        err.message
      )
      res.json(response)
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
