import express from "express";
const APP = express()

APP.get("/api/users", function (req, res) {
    res.send(["nandini", "shwetali", "chirag"])
    
})
APP.listen(4002, function () {
    console.log("Applictaion started");
    
});

APP.post("/api/users/add", function (req, res) {
    res.send({msg:"user added in DB"}) 
})

APP.put("/api/users/update", function (req, res) {
    res.send({msg:"user updated in DB"}) 
})
APP.delete("/api/users/delete", function (req, res) {
    res.send({msg:"user deleted in DB"}) 
})
