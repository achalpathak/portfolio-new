import { Header, Footer } from "./components";
import { Experience, Home, NotFound } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const spinners = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      if (count === spinners.length - 1) {
        setCount(0); //reset spinner
      }
      document.title = `Achal Pathak ${spinners[count]}`;
    }, 100);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [count]);

  return (
    <Router>
      <div className="container max-w-5xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );

}

export default App;
