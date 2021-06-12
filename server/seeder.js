import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'

import users from './data/users.js'
import products from './data/products.js'
import UserModel from './models/userModel.js'
import ProductModel from './models/productModel.js'
import OrderModel from './models/orderModel.js'
import ConnectDB from './config/db.js'

dotenv.config()

ConnectDB()

const importData = async () => {

    try {
        
        await UserModel.deleteMany()
        await ProductModel.deleteMany()
        await OrderModel.deleteMany()

        const createdUsers = await UserModel.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = await products.map((product) => {
            return { ... product, user: adminUser }
        })

        await ProductModel.insertMany(sampleProducts)

        console.log('Data Transmitted!'.green.inverse)
        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }   
}

const destroyData = async () => {

    try {
        
        await UserModel.deleteMany()
        await ProductModel.deleteMany()
        await OrderModel.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }   
}

if(process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}