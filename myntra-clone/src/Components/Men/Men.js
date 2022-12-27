import React from 'react'
// import imgMen from "./../../Utility/Content/Content"
// import menImg from "./../../Utility/Content/Content"
import Content from '../../Utility/Content/Content'
import Footer from '../../Utility/Footer/Footer'
import Navbar from '../../Utility/Navbar/Navbar'

const imgMen = [
    {
      id: 1,
      src: "./Images/m1.png",
      brand:"Roadster"
    },
    {
      id: 2,
      src: "./Images/m2.png",
      brand:"Levi"
    },
    {
      id: 3,
      src: "./Images/m3.png",
      brand:"U.S Polo"
    },
    {
      id: 4,
      src: "./Images/m4.png",
      brand:"H&M"
    },
    {
      id: 5,
      src: "./Images/m5.png",
      brand:"Max"
    },
    {
      id: 6,
      src: "./Images/m6.png",
      brand:"Roadster"
    },
    {
      id: 7,
      src: "./Images/m7.png",
      brand:"Jack&Jones"
    },
    {
      id: 8,
      src: "./Images/m8.png",
      brand:"Max"
    },
    {
      id: 9,
      src: "./Images/m9.png",
      brand:"U.S Polo"
    },
    {
      id: 10,
      src: "./Images/m10.png",
      brand:"H&M"
    },
    {
      id: 11,
      src: "./Images/m11.png",
      brand:"U.S Polo"
    },
    {
      id: 12,
      src: "./Images/m12.png",
      brand:"H&M"
    },
    {
      id: 13,
      src: "./Images/m13.png",
      brand:"U.S Polo"
    },
    {
      id: 14,
      src: "./Images/m14.png",
      brand:"Roadster"
    },
    {
      id: 15,
      src: "./Images/m15.png",
      brand:"H&M"
    },
    {
      id: 16,
      src: "./Images/m16.png",
      brand:"U.S Polo"
    },
    {
      id: 17,
      src: "./Images/m17.png",
      brand:"Jack&Jones"
    },
    {
      id: 18,
      src: "./Images/m18.png",
      brand:"U.S Polo"
    },
    {
      id: 19,
      src: "./Images/m19.png",
      brand:"Jack&Jones"
    },   
  ];

function Men() {
    function menImg(imgMen){
        return <div className="menCard">
        <img
      height={"280px"}
      width={"210px"}
        style={{ margin: "2px 5px", padding: "1px 5px" }}
        src={imgMen.src}
        alt=""
      />
      <div style={{marginLeft:"10px",marginTop:"4px"}}>
      <h4 style={{fontSize:"16px",lineHeight:"1"}}><b>{imgMen.brand}</b> </h4>
      <h3 style={{color:"#535766",fontSize:"14px",marginTop:"0"}}>Men polo color tshirt</h3>
      <span style={{fontSize: "14px",lineHeight: "15px",color: "#282c3f"}}>Rs 200</span>
      <p style={{fontSize:"12px",color:"#ff5722",fontWeight: 500}}>Only few left!</p>
      </div>
      
      </div>
      }

    
  return (
    <>
    <Navbar/>
    <Content List={imgMen.map(menImg)} store=" Men's Fashion Store-"/>
    <Footer/>  
    </>
  )
}

export default Men