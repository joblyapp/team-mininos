import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        const pathStorage = `${__dirname}/../../public/tmp/uploads`;
        cb(null, pathStorage);
    },
    filename: function (req: any, file: any, cb: any) {
        const extension = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${extension}`;
        cb(null, filename);
    }
});

const upload = multer({storage});
export {upload};