import { useState, useEffect } from "react";

function Greeting() {
  const [hour, setHour] = useState(null);
  const [username] = useState("Andrea");

  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  return (
    <p className="text-lg">
      {hour < 12 ? "Godmorgon" : "Godkväll"}, {username}
    </p>
  );
}

export default Greeting;