import request from 'supertest'
import app from '../../src/main'

describe('UserController', () => {
  describe('GET /users', () => {
    it('should return an array of users', async () => {
      const response = await request(app).get('/users')

      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
    })
  })

  describe('POST /users', () => {
    it('should create a new user', async () => {
      const user = {
        name: 'Shuya',
        email: 'shuya@text.com',
        password: 'password123',
      }

      const response = await request(app).post('/users').send(user)

      expect(response.status).toBe(201)
      expect(response.body.name).toBe(user.name)
      expect(response.body.email).toBe(user.email)
    })
  })
})
