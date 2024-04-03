import express from "express"
import Calculo from "./domain/calculadora"

const app = express();
app.disable("x-powered-by");

app.get("/api/soma",(req,res)=>{
    let calculadora = new Calculo();
    console.log(req.params);
    console.log(req.query);
    let x = Number.parseInt(req.query.x?.toString()!);
    let y = Number.parseInt(req.query.y?.toString()!);
    calculadora.soma(x,y);
    return res.status(200).json({resultado:calculadora.getResultado()});
})

app.listen(3000, () => {
    console.log("Server is running");
})