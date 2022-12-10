import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HotelListPage from "./pages/HotelListPage";
import SingleHotelPage from "./pages/SingleHotelPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelListPage />} />
          <Route path="/hotels/:id" element={<SingleHotelPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
