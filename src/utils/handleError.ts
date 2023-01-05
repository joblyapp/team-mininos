const handleHttpError = (res: any, message = "Error happened", code = 403) => {
    res.status(code);
    res.send({error: message});
}

export default handleHttpError;