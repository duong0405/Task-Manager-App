const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Mike',
    email: 'mike@example.com',
    password: 'what!124bg'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Angela',
        email: 'angela@example.com',
        password: 'MyPassw777!'
    }).expect(201)
})

test('Login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Login failure', async () => {
    await request(app).post('/users/login').send({
        email: 'notexist@example.com',
        password: '123445pass!'
    }).expect(400)
})