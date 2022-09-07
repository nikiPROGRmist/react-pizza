import { Header } from "./components/Header";
import "./scss/app.scss";
import { Basket } from "./components/basket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basket" element={<Basket />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
