import HomePage from "./pages/homepage/homepage";
import Header from "./component/header/header.component";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/footer/footer.component";
import Restaurant from "./pages/restaurant/restaurant";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="restaurant">
          <Route path=":id" element={<Restaurant />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
