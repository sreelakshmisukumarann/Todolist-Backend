//import the schema in created in model for give logic approprite collections
const todolists = require('../Model/todoSchema')

//to add todolist
exports.addTodoList = async(req,res)=>{
    console.log('inside the addtotolist controller');
    //take datas from body in request
    const {title, description}=req.body

    try{
        //add the data
        const newtodo = new todolists({
            title,
            description
        })
        //save in mongodb
        await newtodo.save()
        //response
        res.status(200).json(newtodo)
    }
    catch(err){
        res.status(401).json('register request faied due to',err)
    }

}

//to get all todolist
exports.getAllTodolist = async(req,res)=>{
    console.log('inside the get all todolist');
    try{
        const alltodolist = await todolists.find()
        res.status(200).json(alltodolist)
      } catch (err){
        res.status(401).json(`Request failed due to ${err}`)
      }
}