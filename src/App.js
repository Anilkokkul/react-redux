import "./App.css";
import Navbar from "./Components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/cart" Component={Cart} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
