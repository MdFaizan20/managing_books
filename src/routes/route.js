const express = require("express")
const router = express.Router()

const bookController = require("../controller/bookController")

router.post("/addBooks",bookController.addBook)
router.get("/getBooks",bookController.getBooks)
router.get("/getBookById/:bookId",bookController.getBookById)
router.put("/updateBook/:bookId",bookController.updateBook)
router.delete("/deleteBook/:bookId",bookController.deleteBook)



module.exports=router