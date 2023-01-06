import "dotenv/config";
import express from "express";
import cors from "cors";
import dbConnect from "./config/mongo";
import routes from "./routes";
import swaggerUI from "swagger-ui-express";
import openApiConfiguration from "./docs/swagger";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

//url swagger docs
app.use("/docs",swaggerUI.serve, swaggerUI.setup(openApiConfiguration))
//url all endpoints
app.use("/api", routes);

app.listen(port, () => {
    console.log(`App: http://localhost:${port}`);
})

dbConnect().then(()=>{
    console.log('*** CONEXION CORRECTA ***');
}) 

export default app;