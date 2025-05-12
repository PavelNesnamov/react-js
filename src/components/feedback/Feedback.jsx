import { useState } from "react";
import MyButton from "../myButton/MyButton";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const handleLike = () => setLikes((prev) => prev + 1);

  const [dislikes, setDislikes] = useState(0);

  const handleDislike = () => setDislikes((prev) => prev + 1);

  const reset = () => {
    setLikes(0);
    setDislikes(0);

    console.log(likes);
  };

  return (
    <>
      <h1>Homework 4: </h1>
      <h2>Feedback 👍 or 👎</h2>
      <span>{likes}</span>
      <MyButton text="👍" func={handleLike} />
      <MyButton text="👎" func={handleDislike} />
      <span>{dislikes}</span>
      <div></div>
      <MyButton text="Reset Results" func={reset} />
    </>
  );
}

export default Feedback;
