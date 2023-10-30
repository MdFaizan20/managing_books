const bookModel=require("../model/bookModel")
const mongoose=require("mongoose")


const isValidObjectId = function (Id) {
     return mongoose.Types.ObjectId.isValid(Id)
     } 

   module.exports={
    
 addBook :async (req,res)=>{

try{

      const requestBody = req.body
      let { title,author,summary} = requestBody
      if (!title) {
        return res.status(400).send({ status: false, msg: "title of book is mandatory " })
    }
    let usedTitle = await bookModel.findOne({ title:title,isDeleted:false })
    if (usedTitle) {
        return res.status(400).send({ status: false, msg: " title is already taken, pls provide unique title" })
    }
    if (!author) {
        return res.status(400).send({ status: false, msg: "author's name require " })
    }
    if (!summary) {
        return res.status(400).send({ status: false, msg: "Please Provide Summary of the Book " })
    }
      const bookDetails = await bookModel.create(requestBody)
  return res.status(201).send({status:true,msg:"book created successfully",data:bookDetails})


}
catch (err) {
    return res.status(500).send({ status: false, msg: err.message })
}

},



 getBooks  :async (req,res)=>{
try{

const fetchBooks = await bookModel.find({isDeleted:false})
return res.status(201).send({status:true,msg:"Fetching all books successfully",data:fetchBooks})


}catch(err){
    return res.status(500).send({ status: false, msg: err.message })
}

},


 getBookById  : async (req,res)=>{
try{

    const bookId = req.params.bookId

   
    if (!isValidObjectId(bookId)) {
        return res.status(400).send({ status: false, msg: "invalid bookId" })
    }
    let bookInfo = await bookModel.findOne({ _id: bookId, isDeleted: false })
    if (!bookInfo) {
        return res.status(404).send({ status: false, msg: "book not found" })
    }
    return res.status(200).send({ status: true, msg: "Details of Book", data: bookInfo })

}catch(err){
    return res.status(500).send({ status: false, msg: err.message })
}

},


 updateBook :async (req,res)=>{
try{
      const bookId= req.params.bookId
      const requestBody = req.body
      let {title,author,summary}=requestBody
      
    if (!isValidObjectId(bookId)) {
        return res.status(400).send({ status: false, msg: "invalid bookId" })
    }
    let bookDetails= await bookModel.findOne({ _id: bookId, isDeleted: false })
    if (!bookDetails) {
        return res.status(404).send({ status: false, msg: "book not found" })
    }

    

    if(bookDetails ){
        const updatingBook = await bookModel.findOneAndUpdate({ _id: bookId, isDeleted: false }, 
     {  title:title,author:author,summary:summary}, { new: true })
     return res.status(200).send({ status: true, msg: "book updated successfully", data: updatingBook })
        }else{
            return res.status(400).send({status:false,msg:"book is already deleted"})
        }
}catch(err){
    return res.status(500).send({ status: false, msg: err.message })
}
},




 deleteBook: async (req,res)=>{
    const  bookId = req.params.bookId
   
    if (!isValidObjectId(bookId)) {
        return res.status(400).send({ status: false, msg: "invalid bookId" })
    }
    if(bookId){
        const check= await bookModel.findOne({_id:bookId,isDeleted:false})
        if(!check)
        return res.status(404).send({status:false,msg:"book not found "})
        
      }

       await bookModel.findByIdAndUpdate({ _id: bookId }, { $set: { isDeleted: true } }, { new: true })
      return res.status(200).send({status:true,msg:"book deleted successfull"})
        
     
}
   }

