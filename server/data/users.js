import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Shahnewaz Tameem',
    email: 'shahnewaztamim@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Faruque',
    email: 'faruque@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tameem',
    email: 'tameemcse@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
