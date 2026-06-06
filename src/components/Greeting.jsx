import { useState, useEffect } from "react";

function Greeting() {
  const [hour, setHour] = useState(null);
  const [username] = useState("Andrea");

  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  let greeting = "";

  if (hour < 12) {
    greeting = "God morgon!"
  } else if (hour < 18) {
    greeting = "God eftermiddag!"
  } else {
    greeting = "God kväll!"
  }

  return (
    <h1 className="text-2xl">
      {greeting}, {username}
    </h1>
  );
}

export default Greeting;