import mongoose from "mongoose";

//funcrion to connect to MongoDB database

const connectDB = async () => {
    mongoose.connection.on('connected',() => console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/job`)
}

export default connectDB