const app =require('./app')
const dotenv=require("dotenv")
const connectDatabase =require("./config/database")
const cloudinary=require("cloudinary")
//Handling uncaught Exception
process.on("uncaughtException",(err)=>{
console.log(`Error:${err.message}`);
console.log(`Shutting down the server due to uncaught Exception`);
process.exit(1)
})


//Config
dotenv.config({path:"./config/config.env"})
//Connect Database
connectDatabase()
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})
const server=app.listen(process.env.PORT,()=>{
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
})
//Unhandled Promise Rejection
process.on("unhandleRejection",err=>{
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to unhandled Promise Rejection`);
  server.close(()=>{
    process.exit(1)
  })
})