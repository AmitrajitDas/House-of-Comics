import bcrypt from 'bcryptjs'

const users = [

    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        name: 'Amitrajit Das',
        email: 'amitrajit@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },

    {
        name: 'Anish Das',
        email: 'anish@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }

]

export default users