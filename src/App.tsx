import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Daily from "./components/pages/Daily";
import Monthly from "./components/pages/Monthly";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
