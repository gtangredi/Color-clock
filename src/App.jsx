import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css"; // <-- Make sure this is at the top

function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const time = format(now, "hh:mm:ss a");
  const date = format(now, "MMMM dd, yyyy");

  return (
    <div className="wrapper">
      <p className="clock">{time}</p>
    </div>
  );
}

export default App;

