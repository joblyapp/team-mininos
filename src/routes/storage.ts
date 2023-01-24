import express from "express";
import {upload} from "../utils/handleStorage";
const router = express.Router();

router.post("/", upload.single("myfile"), (req, res, next) => {
    res.send({data: "funciona la carga, darle un contexto para luego usar la url"})
})

export {router};