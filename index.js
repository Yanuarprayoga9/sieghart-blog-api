import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send({status:"OK",message:"API SERVICE RUNNING"})
});
app.get("/*", (req, res) => {
    res.send({status:"OK",message:"NOT FOUND"})
});

app.listen(3000, () => console.log("Server ready on port 3000."));

