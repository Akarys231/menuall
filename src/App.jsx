import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BranchPage from "./pages/BranchPage.jsx";
import BranchesPage from "./pages/BranchesPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BranchesPage />} />
                <Route path="/branch/:id" element={<BranchPage />} />
                <Route path="/branch/:id/menu" element={<MenuPage />} />
            </Routes>
        </Router>
    );
}

export default App;