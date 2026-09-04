import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  // As joke will be served here so lets make a state
  const [jokes, setJokes] = useState([]);

  // As we get the data then we will have to set that jokes in our jokesArray
  useEffect(() => {
    axios
      // most of the time we run wrote our api like the given instead of long "http://localhost:3000/api/jokes"
      .get("/api/jokes")
      .then((responce) => {
        setJokes(responce.data);
      })
      // now we will face an error 404 that url not exist so here the proxy concept comes that how we can set it
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Full Stack Connection</h1>
      <p>Jokes {jokes.length}</p>

      <br />
      <br />
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2># {joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
