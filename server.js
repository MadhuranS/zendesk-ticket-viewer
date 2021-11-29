const express = require("express");

const app = express();

//Define Routes
app.use("/api/tickets", require("./routes/routing/tickets"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
