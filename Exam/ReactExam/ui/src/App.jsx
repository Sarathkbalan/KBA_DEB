import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItem from "../src/pages/AddItem.jsx";
import ItemList from "../src/pages/ItemList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddItem />} />
        <Route path="/items" element={<ItemList />} />
      </Routes>
    </Router>
  );
}

export default App;
