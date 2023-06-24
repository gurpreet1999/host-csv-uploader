const express=require("express")
const { uploadFile, parsingCSV, deleteFile, showTableData, sorting, searching } = require("../controllers/fileController.js")


const fileRoute=express.Router()


//all file releated routes are here

//to upload file
fileRoute.post('/upload',uploadFile)
//to parse the particular file
fileRoute.get('/open',parsingCSV)
//to show data in table format 
fileRoute.get('/showdata/:id',showTableData)
//to sort data in a particular file
fileRoute.get('/sort/:val/:field',sorting)

//to delete a particular file
fileRoute.get('/delete',deleteFile)
//to search data in a particular file
fileRoute.post('/search',searching)


module.exports=fileRoute



