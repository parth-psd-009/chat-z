import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.component";
import Home from "./routes/Home";
import Authentication from "./routes/Authentication";

function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Authentication />} />
            </Routes>
        </div>
    );
}

export default App;
