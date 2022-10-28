import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SliderBanner from "./components/SliderBanner";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Search from "./pages/aboutmenus/Search";
// import Mypage from "./pages/aboutmenus/Mypage";
// import Cart from "./pages/aboutmenus/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <SliderBanner />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        {/* <Route path="/search">
          <Search />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
