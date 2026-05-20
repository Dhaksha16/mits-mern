import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Service from "./component/Service";

const App = () => {
  return (
    <>
      <h1>MERN</h1>
      <h2>React.js</h2>

      <Header />
      <Home />
      <About />
      <Contact />
      <Service />
    </>
  );
};

export default App;