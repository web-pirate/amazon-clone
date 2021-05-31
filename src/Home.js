import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
          alt="Home"
        />
        <div className="home__row">
          <Product
            id="234567"
            title="The lean startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />

          <Product
            id="234787"
            title="SPRINT MIXER GRINDER 4 JAR GREY 600 W"
            price={450.99}
            rating={4}
            image="https://freepngimg.com/download/technology/51154-8-mixer-grinder-download-hd-png.png"
          />
        </div>
        <div className="home__row">
          <Product
            id="489456"
            title="Tobo PS5 Controller Charging Station Compatible with PS5 Controller,Playstation 5 PS5 Controller Charger Dock Station with Fast Charging Speed in 2 Hours,PS5 Remote Charger Station with Charigng Cable"
            price={1450.99}
            rating={3}
            image="http://assets.stickpng.com/images/585ea27bcb11b227491c350b.png"
          />

          <Product
            id="789456"
            title="Borges Extra Virgin Olive Oil -1L Glass"
            price={50.99}
            rating={5}
            image="https://pngimg.com/uploads/olive_oil/olive_oil_PNG28.png"
          />

          <Product
            id="125896"
            title="Vaio Z NZ14V3IN001P 14 inch/35.56 cm(Intel Core i7-11375H/32GB/2TB SSD/ Intel Iris Xe Graphics/Fingerprint Reader/UHD(4K)/win10 pro) 1.06kg, Signature Black"
            price={145.99}
            rating={3}
            image="https://i.pinimg.com/originals/28/b6/9f/28b69f7781076b155ec54a4dd364b579.png"
          />
        </div>
        <div className="home__row">
        <Product
            id="325896"
            title="Redmi 164 cm (65 inches) 4K Ultra HD Android Smart LED TV X65|L65M6-RA (Black) (2021 Model)"
            price={14500.99}
            rating={5}
            image="https://static.wixstatic.com/media/a27d24_6e7e1f850d8e4a4ba03ca232a0b2621d~mv2.png/v1/fill/w_1000,h_666,al_c/a27d24_6e7e1f850d8e4a4ba03ca232a0b2621d~mv2.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
