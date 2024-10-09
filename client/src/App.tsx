import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateCharacter } from "./components/CreateCharacter/CreateCharacter";

const App = () => {
  return (
    <div>
      <Router>

        <Routes>
          <Route path="/create-character" element={<CreateCharacter />} />
        </Routes>
      </Router>
    </div>
  );
};

export { App };
