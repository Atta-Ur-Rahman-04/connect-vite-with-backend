import express from "express";
const app = express();

// Express work is to listen & serve the route
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

// Serving 5 jokes -->
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "first joke",
      content: "This is a first joke",
    },
    {
      id: 2,
      title: "Second joke",
      content: "This is the second joke",
    },
    {
      id: 3,
      title: "Third joke",
      content: "This is the third joke",
    },
    {
      id: 4,
      title: "Fourth Joke",
      content: "This is the fourth joke",
    },
    {
      id: 5,
      title: "Fifth Joke",
      content: "This is the fifth joke",
    },
  ];
  res.send(jokes);
});

// Port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
