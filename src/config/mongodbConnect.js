import { SendResponse } from "@/helper/SendResponse";
import mongoose from "mongoose";

let isConnected = false;

export const mongodbConnect = async () => {
    if (isConnected) {
        return;  // If already connected, return
      }
      mongoose.connect(process.env.CONNECTION_STRING, {dbName: "next-task-app"})
      .then(() => {
        console.log("MongodbDB Database Connection Successfully.")
        isConnected = true;
        return SendResponse({message: "MonggoDB Database Connection Problem."})
      })
      .catch(error => {
        console.log(error);
        console.log("mongodb connection failed.");
      });
      // mongoose.set("debug", true);
};
