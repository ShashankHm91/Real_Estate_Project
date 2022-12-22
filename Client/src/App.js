import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Property from "./Components/property/Property";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/property" element={<Property/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
