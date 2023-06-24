const { exportFile } = require("./fileController");
let array=exportFile()

//function to render hoempage with all the files
async function home(req,res){

return res.render('home',{
    files:array
})

}


module.exports=home