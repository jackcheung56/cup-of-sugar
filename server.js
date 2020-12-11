const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const AppRouter = require("./routes/AppRouter");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require('path')

const PORT = process.env.PORT || 3001;

io.on("connection", (socket) => {
  console.log("USER CONNECTED");
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api", AppRouter);
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
)
http.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
