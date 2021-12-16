import HomePage from "./pages/homepage/homepage";
import Header from "./component/header/header.component";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/footer/footer.component";
import Restaurant from "./pages/restaurant/restaurant";
import Member from "./pages/member/member.component";
import Cart from "./pages/cart/cart";
import AboutUs from "./pages/about-us/about-us.component";

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
        <Route path="/members" element={<Member />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
