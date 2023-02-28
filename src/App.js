import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" category="general"apikey="7b1f3a9137a84daca62c9e0e0d45f803"/> } />
            <Route exact path="/business" element={<News key="business" category="business"apikey="7b1f3a9137a84daca62c9e0e0d45f803"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"apikey="7b1f3a9137a84daca62c9e0e0d45f803"/>} />
            <Route exact path="/general" element={<News key="general" category="general"apikey="7b1f3a9137a84daca62c9e0e0d45f803"/>} />
            <Route exact path="/health" element={<News key="health" category="health"apikey="7b1f3a9137a84daca62c9e0e0d45f803"/>} />
            <Route exact path="/science" element={<News key="science" category="science"apikey="7b1f3a9137a84daca62c9e0e0d45f803"/>} />
            <Route exact path="/sports" element={<News key="sports" category="sports"apikey="7b1f3a9137a84daca62c9e0e0d45f803"/>} />
            <Route exactpath="/technology" element={<News key="technology" category="technology"apikey="7b1f3a9137a84daca62c9e0e0d45f803"/>} />
            <Route exact path="/about" element={<News key="about" category="about"apikey="7b1f3a9137a84daca62c9e0e0d45f803"/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
