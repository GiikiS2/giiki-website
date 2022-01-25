var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get("*", async function (req, res) {
    res.render("/home.ejs", {});
});

const server = app.listen(process.env.PORT || 1370, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});