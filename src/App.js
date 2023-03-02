import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";



export default class App extends Component {
  render() {
    const apikey = "80a22bdfb6b54506848fe2360d814652"
    return (
      <div className="container">
        
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" category="general"apikey={`${apikey}`}/> } />
            <Route exact path="/business" element={<News key="business" category="business"apikey={`${apikey}`}/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"apikey={`${apikey}`}/>} />
            <Route exact path="/general" element={<News key="general" category="general"apikey={`${apikey}`}/>} />
            <Route exact path="/health" element={<News key="health" category="health"apikey={`${apikey}`}/>} />
            <Route exact path="/science" element={<News key="science" category="science"apikey={`${apikey}`}/>} />
            <Route exact path="/sports" element={<News key="sports" category="sports"apikey={`${apikey}`}/>} />
            <Route exactpath="/technology" element={<News key="technology" category="technology"apikey={`${apikey}`}/>} />
            <Route exact path="/about" element={<News key="about" category="about"apikey={`${apikey}`}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
