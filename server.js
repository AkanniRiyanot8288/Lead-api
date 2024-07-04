const express = require("express")
const app = express()

require("dotenv").config()
require("./Config/dbConnect")



const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server running on port ${PORT}`))