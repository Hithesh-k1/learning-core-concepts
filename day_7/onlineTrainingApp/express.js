const express = require("express");
const path = require("path");
let courses = require("./models/course.model");

let app = express();

app.use(express.static(path.join(__dirname, "static")));
app.use(express.json());
app.get("/", (req, res) => {
  //   res.send("<h1>Hello Express !</h1>");
  res.sendFile("Index.html", { root: __dirname });
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.delete("/course/:id", (req, res) => {
  let theCourseId = +req.params.id;

  // functional programming (immutable)
  courses = courses.filter((course) => course.id != theCourseId);
  //   console.log(courses.length);
  res.json({ msg: "success" });
});

app.post("/newcourse", (req, res) => {
  // get the data
  // add it to courses
  let courseToBeAdded = req.body;
  console.log(courseToBeAdded);
  courses = [...courses, courseToBeAdded];

  res.json({ msg: "success" });
});

app.listen(5000, () => console.log("Server running at 5000 !"));
