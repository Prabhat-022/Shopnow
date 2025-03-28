const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

export const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Be Happy, DB connected!!')
    } catch (error) {
        console.log('Ooo DB is not connected??')
    }
}

