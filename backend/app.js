const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

app.use(cors());
app.options("*", cors());

//middleware
app.use(express.json());
app.use(morgan("tiny"));

//Routers

// const categoriesRoutes = require('./routes/categories')
const productsRouters = require("./routers/products");
// const usersRoutes = require('./routes/users')

const api = process.env.API_URL;

app.use(`${api}/products`, productsRouters);

//Database connection
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "qapohajm",
  })
  .then(() => {
    console.log("Database Connecting Success");
  })
  .catch((err) => {
    console.log("Connecting lost...");
  });

//Server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is started now");
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});