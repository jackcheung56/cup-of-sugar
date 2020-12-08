const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const AppRouter = require("./routes/AppRouter");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 3001;

io.on("connection", (socket) => {
  console.log("USER CONNECTED");
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Server Works" }));
app.use("/api", AppRouter);
http.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
