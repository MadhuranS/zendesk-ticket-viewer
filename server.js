const express = require("express");

//initialize express app
const app = express();

//Define Routes
app.use("/api/tickets", require("./routes/routing/tickets"));

//Use port 5000 for server
const PORT = 5000;

//listen on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
