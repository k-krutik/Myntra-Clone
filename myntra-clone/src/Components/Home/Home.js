import React from "react";
import "./Home.css";
import Navbar from "./../../Utility/Navbar/Navbar"
import Footer from "./../../Utility/Footer/Footer"

// import imgData from "./../../RawJson.js"

function Home() {
  const imgData = [
    {
      id: 1,
      src: "./Images/d1.png",
    },
    {
      id: 2,
      src: "./Images/d2.png",
    },
    {
      id: 3,
      src: "./Images/d3.png",
    },
    {
      id: 4,
      src: "./Images/d4.png",
    },
    {
      id: 5,
      src: "./Images/d5.png",
    },
    {
      id: 6,
      src: "./Images/d2.png",
    },
  ];

  const imgBudget = [
    {
      id: 1,
      src: "./Images/b1.png",
    },
    {
      id: 2,
      src: "./Images/b2.png",
    },
    {
      id: 3,
      src: "./Images/b3.png",
    },
    {
      id: 4,
      src: "./Images/b4.png",
    },
    {
      id: 5,
      src: "./Images/b5.png",
    },
    {
      id: 6,
      src: "./Images/b6.png",
    },
    {
      id: 7,
      src: "./Images/b7.png",
    },
    {
      id: 8,
      src: "./Images/b8.png",
    },
    {
      id: 9,
      src: "./Images/b9.png",
    },
    {
      id: 10,
      src: "./Images/b10.png",
    },
  ];

  const imgCategory = [
    {
      id: 1,
      src: "./Images/r1.png",
    },
    {
      id: 2,
      src: "./Images/r2.png",
    },
    {
      id: 3,
      src: "./Images/r3.png",
    },
    {
      id: 4,
      src: "./Images/r4.png",
    },
    {
      id: 5,
      src: "./Images/r5.png",
    },
    {
      id: 6,
      src: "./Images/r6.png",
    },
    {
      id: 7,
      src: "./Images/r7.png",
    },
    {
      id: 8,
      src: "./Images/r8.png",
    },
    {
      id: 9,
      src: "./Images/r9.png",
    },
    {
      id: 10,
      src: "./Images/r10.png",
    },
    {
      id: 11,
      src: "./Images/r11.png",
    },
    {
      id: 12,
      src: "./Images/r12.png",
    },    
  ];


  const imgBrand = [
    {
      id: 1,
      src: "./Images/f1.png",
    },
    {
      id: 2,
      src: "./Images/f2.png",
    },
    {
      id: 3,
      src: "./Images/f3.png",
    },
    {
      id: 4,
      src: "./Images/f4.png",
    },
    {
      id: 5,
      src: "./Images/f5.png",
    },
    {
      id: 6,
      src: "./Images/f6.png",
    },
    {
      id: 7,
      src: "./Images/f7.png",
    },
    {
      id: 8,
      src: "./Images/f8.png",
    },
    {
      id: 9,
      src: "./Images/f9.png",
    },
    {
      id: 10,
      src: "./Images/f10.png",
    },
  ];

  function brandDeals(imgBrand){
    return <div className="imgLayout">
    <img
  height={"440px"}
  width={"280px"}
    style={{ margin: "2px 5px", padding: "1px 5px" }}
    src={imgBrand.src}
    alt=""
  />
  </div>
  }


  function bagCategory(imgCategory){
    return <div className="imgLayout">
    <img
  height={"290px"}
  width={"240px"}
    style={{ margin: "2px 4px", padding: "1px 5px" }}
    src={imgCategory.src}
    alt=""
  />
  </div>
  }

  function budgetBuy(imgBudget){
    return (
    <div className="imgLayout">
    <img
  height={"360px"}
  width={"285px"}
    style={{ margin: "2px 5px", padding: "1px 5px" }}
    src={imgBudget.src}
    alt=""
  />
  </div>);

  }


  function crackDeal(imgData) {
    return (
      <div className="imgLayout">
        <img
      height={"360px"}
      width={"285px"}
        style={{ margin: "2px 5px", padding: "1px 5px" }}
        src={imgData.src}
        alt=""
      />
      </div>
    );
  }

  return (
    <>
      <Navbar/>
      <div style={{marginTop:"78px"}}>
      <div>
        <img
          style={{ width: "100%", margin: "2px 0px" }}
          src="./Images/home Img1.png"
          alt=""
        />
        <img
          style={{ width: "100%", margin: "2px 0px" }}
          src="./Images/offer.png"
          alt=""
        />
        <img
          style={{ width: "100%", margin: "2px 0px" }}
          src="./Images/home Img2.png"
          alt=""
        />
        <img
          style={{ width: "100%", margin: "2px 0px" }}
          src="./Images/home Img6.png"
          alt=""
        />
      </div>
      <div>{imgData.map(crackDeal)}</div>
      <div>
      <img
          style={{ width: "100%", margin: "2px 0px" }}
          src="./Images/home7.png"
          alt=""
        />
      </div>
      <div>
      {imgBudget.map(budgetBuy)}
      </div>
      
      <hr className="breakk" />

      <div >
      <h3 className="heading" ><b>CATEGORIES TO BAG</b> </h3>
      </div>
      <div>
      {imgCategory.map(bagCategory)}
      </div>

      <hr className="breakk" />
      <div>
      <h3 className="heading" ><b>BIGGEST DEALS ON TOP BRANDS</b> </h3>
      </div>
      <div>
      {imgBrand.map(brandDeals)}
      </div>
      </div>
      
      <Footer/>
    </>
  );
}

export default Home;
