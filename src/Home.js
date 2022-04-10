import React from 'react'
import'./Home.css'
import Product from './Product';

function Home() {
  return (
      <div className='home'>
    <div className="home_container">
<img
          className="home__image"
          src=
          "https://m.media-amazon.com/images/I/71OHWlch4cL._SX3000_.jpg"
          // "https://m.media-amazon.com/images/I/61ifUfP4r3L._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
           id="12321341"
           title="PYTHON PROGRAMMING FOR BEGINNERS"
           price={17.65}
           rating={5}
           image="https://m.media-amazon.com/images/I/61sIhMNZHsS._AC_UY218_.jpg"
         
         
          />
           <Product
            id="49538094"
            title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Gray"
            price={1749.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UY218_.jpg"
        
          />
          <Product
            id="49538096"
            title="Frigidaire FFHB2750TS 36 Inch French Door Refrigerator with 26.8 cu. ft. Total Capacity, in Stainless Steel"
            price={1900}
            rating={5}
            image="https://m.media-amazon.com/images/I/51YPqijFe3L._AC_UY218_.jpg"
          />
           {/* <Product
            id="49538095"
            title="Dish Drying Rack, 2 Tier Stainless Steel Dish Rack with Drainboard,Large Rust-Proof Dish Drainer for Kitchen Counter, Black"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71okF+onijL._AC_UL320_.jpg"
            /> */}
            {/* <Product
            id="49538090"
            title="HaloTeam Men's Soccer Shoes Cleats Professional High-Top Breathable Athletic Football Boots for Outdoor Indoor TF/AG"
            price={60.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61xRv7viPML._AC_UL320_.jpg"
          
          /> */}
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Video Camera Camcorder Ultra HD 2.7K 30FPS 36.0 MP IR Night Vision YouTube Vlogging Camera 3.0 Touch Screen 16X Digital Zoom with Remote Control Microphone Handheld Stabilizer 2 Batteries"
            price={1229.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81MmafymTES._AC_SX425_.jpg"
          />
          <Product
            id="23445930"
            title="
            Certified Refurbished Ring Spotlight Cam Battery HD Security Camera with Built Two-Way Talk and a Siren Alarm, White, Works with Alexa"
            price={51.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/51YtTAuAqRL._SL1000_.jpg"
          />
          {/* <Product
            id="3254354345"
            title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray (Renewed)"
            price={999.97}
            rating={4}
            image="https://m.media-amazon.com/images/I/61is5y-+MeL._AC_SY606_.jpg"
          /> */}
            {/* <Product
            id="23445930"
            title="Veryhome Artificial Red Flowers Silk Roses Fake Bridal Wedding Bouquet for Home Garden Party Floral Decor 10 Pcs (Rose Bud - Red)"
            price={20.95}
            rating={3}
            image="https://m.media-amazon.com/images/I/71-QsHz6SwL._AC_UL320_.jpg"
          /> */}
           <Product
            id="90829332"
            title="Yves Saint Laurent Eau De Parfum Spray for Women, Black Opium, 3 Ounce"
            price={130.77}
            rating={4}
            image="https://m.media-amazon.com/images/I/61unznkw2IL._SY550_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="LG 38WK95C-W 38-Inch Class 21:9 Curved UltraWide WQHD+ Monitor with HDR 10 (2018)"
            price={1229.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71uXi9iYLLL._AC_UY218_.jpg"
          />
         <Product
            id="90829332"
            title="Belffin Velvet Convertible Futon Sofa Bed Memory Foam Futon Couch Sleeper Sofa Yellow"
            price={400}
            rating={5}
            image="https://m.media-amazon.com/images/I/71wpiMTpEKL._AC_UL320_.jpg"
          />
           {/* <Product
            id="90829332"
            title="LG UP8770 86-in 4K UHD 4K UHD 120Hz Smart TV 86UP8770PUA (2021))"
            price={1400.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/A1Mm-w0rDnS._AC_UY218_.jpg"
          /> */}
           {/* <Product
            id="90829332"
            title="2 Pieces Fluffy Faux Sheepskin Area Rug Heart Shaped Rug Fluffy Room Carpet for Home Living Room Sofa Floor Bedroom, 12 x 16 Inch (Purple, Blue, Pink)"
            price={18.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81iq8cLHAgL._AC_UL320_.jpg"
          /> */}
        </div>
    </div>
    </div>
  )
}

export default Home;