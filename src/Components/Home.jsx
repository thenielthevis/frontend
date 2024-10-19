import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="landing-page">
      <Carousel interval={3000} className="full-screen-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/burger-banner.jpg"
            alt="Burgerbanner"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/sizzling-banner.jpg"
            alt="Sizzlingbanner"
          />
        </Carousel.Item>
      </Carousel>

      <div className="menu-container">
        <div className="menu-item">
          <img
            className="menu"
            src="./images/RiceMeal.jpg"
            alt="RiceMeal"
          />
          <div className="menu-details">
            <h1>RICE MEALS MENU</h1>
            <h3>Indulge in our mouthwatering rice meals, crafted to satisfy your cravings and warm your heart.</h3>
            <button>Order Now!</button>
          </div>
        </div>
        <div className="menu-item">
          <img
            className="menu"
            src="./images/SandwichMenu.jpg"
            alt="SandwichMenu"
          />
          <div className="menu-details">
            <h1>SANDWICHES MENU</h1>
            <h3>Experience the perfect blend of fresh ingredients and flavors that will take your taste buds on a delightful journey.</h3>
            <button>Order Now!</button>
          </div>
        </div>
        <div className="menu-item">
          <img
            className="menu"
            src="./images/DrinkMenu.jpg"
            alt="DrinkMenu"
          />
          <div className="menu-details">
            <h1>DRINKS MENU</h1>
            <h3>Quench your thirst with our selection of refreshing drinks, each sip is a burst of flavor you won't forget.</h3>
            <button>Order Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
