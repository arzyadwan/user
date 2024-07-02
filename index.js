const express = require("express");
require('@google-cloud/debug-agent').start()
const app = express();
const port = 8081;


//import variable
const userRouter = require('./routes/routeUser');


app.get("/", (req, res) => {
    return res.status(200).send("Hai there");
  });

app.use(express.json())

// router
app.use('/users', userRouter);
  //server start
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });



  
app.get("/tes",(req,res)=>{
  console.log(req.headers)
})
