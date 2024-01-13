import { React, useState } from 'react';
import getJoke from '../api/jokeData';

function Jokes() {
  const [joke, setJoke] = useState('Welcome to Joke-Generator!');
  // const [punchline, setPunchline] = useState({ joke });

  const handleJoke = () => {
    const setup = getJoke().then((object) => (object.setup));

    setJoke((prevState) => prevState + { setup });

    console.warn(getJoke().then((object) => object.setup));
  };

  // const handlePunchline = () => {
  //   const punchline = getJoke().then((object) => (object.delivery));

  //   setJoke((prevState) => prevState + { punchline });

  //   console.warn(getJoke().then((object) => object.delivery));
  // };

  // const getAnotherJoke = () => {
  //   setJoke((prevState) => prevState + joke.setup);
  // };

  return (
    <>
      <h1>{joke}</h1>
      {/* <h2>{punchline}</h2> */}

      { joke === 'Welcome to Joke-Generator!'
        ? <button type="button" onClick={(handleJoke)}>Get A Joke!</button>
        : ('')}

      {/* { punchline === ('')} */}

      {/* { joke === joke.setup
        ? (<button type="button" onClick={(handlePunchline)}>Get Punchline!</button>) : (getJoke()) }

      { joke === joke.punchline
        ? (<button type="button" onClick={(getAnotherJoke)}>Get Another Joke!</button>)
        : (getJoke()) } */}
    </>
  );
}

// Jokes.propTypes = {
//   joke.
// }

export default Jokes;
