import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

    res.send("✅ NexVora BharatPe Backend Running");

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("Server Running On Port " + PORT);

});
