const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv');
const authRoute = require('./routes/Auth');
const userRoute = require('./routes/Users');
const postRoute = require('./routes/Posts');
const categoriesRoute = require('./routes/Categories');
const cors = require('cors');
const multer = require('multer');


//CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

// In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
// app.use(cors({
//     origin: "*"
// }));
app.use(cors());

dotenv.config();
app.use(express.json()); //Imp for testing of API

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log('Connected to Database Successfully'))
    .catch((err) => console.log(err));

//Upload file restAPI
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
})

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoriesRoute);

app.listen(port, () => {
    console.log(`Server is Running at port http://localhost:${port}`);
})