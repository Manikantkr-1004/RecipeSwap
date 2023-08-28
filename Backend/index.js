const express = require("express");
const { connectToDB } = require("./db");
const { userRouter } = require("./routes/userRoutes");
const { recipeRouter } = require("./routes/recipeRouters");
const cors = require("cors");
const path = require("path");
const { adminRouter } = require("./routes/adminRouters");
const app = express();
app.use(cors());

app.use(express.json());
app.use('/users', userRouter);
app.use("/admin", adminRouter);
app.use('/recipe', recipeRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));

})


app.listen(8080, async () => {
    try {
        await connectToDB;
        console.log("server is running...");
    } catch (err) {
        console.error(err);
    }
})


