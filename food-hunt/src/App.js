import React from 'react';
import './index.css';

const Header = () => {
  return (
    <div className='header'>
      <img src='https://pngtree.com/freepng/natural-food-logo-stamp_1848758.html'></img>
      <div>
        <ul className='header-ul'>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>);
}
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
