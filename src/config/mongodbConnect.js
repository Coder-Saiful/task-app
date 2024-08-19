import mongoose from "mongoose";

let isConnected = false;

export const mongodbConnect = async () => {
    if (isConnected) {
        return;  // If already connected, return
      }
    try {
        await mongoose.connect(process.env.CONNECTION_STRING, {dbName: "next-task-app"});
        console.log("MongodbDB Database Connection Successfully.")
        isConnected = true;
    } catch (error) {
        console.log(error)
        console.log("mongodb connection failed")
    }
};
