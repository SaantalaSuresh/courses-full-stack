const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Video = require('./models/videos');
const cors = require('cors');
const router = require("./routes/routes")



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors())
app.use("/api",router)


mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Database is connected successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((e) => {
    console.error('Error in Database connection: ' + e);
});



