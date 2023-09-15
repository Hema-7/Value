import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="Webpage">
      <img className="symbol" src="src/Images/symbol.png" alt="" />
      <h1>Welcome to mother's gift, life saver for infants</h1>
      <a href="#">Home</a>
      <a href="#">Contibute milk</a>
      <a href="#">Request milk</a>
      <a href="#">contact</a>
      <img className="login" src="src/Images/login.png" alt="" />
      <button>
        <a href="#">Offer Mother's Milk</a>
      </button>
      <button>
        <a href="#">Nourish your child</a>
      </button>
      <button>
        <a href="#">Login</a>
      </button>
    </div>
  );
};

export default App;
