import mongoose from "mongoose"

export const ConnectDB = async() => {
  await mongoose.connect('mongodb+srv://todonextapp:qBHDjqE6DYvswJWt@cluster0.7orfsex.mongodb.net/todo-app')
  console.log("DB Connected");
}