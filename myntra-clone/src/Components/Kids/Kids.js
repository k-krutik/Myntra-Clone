import React from 'react'
import Content from '../../Utility/Content/Content'
import Footer from '../../Utility/Footer/Footer'
import Navbar from '../../Utility/Navbar/Navbar'

const imgKid = [
    {
      id: 1,
      src: "./Images/k1.png",
      brand:"Flard lignt Mask"
    },
    {
      id: 2,
      src: "./Images/k2.png",
      brand:"Cartoon Mask"
    },
    {
      id: 3,
      src: "./Images/k3.png",
      brand:"Cartoon Mask"
    },
    {
      id: 4,
      src: "./Images/k4.png",
      brand:"Flard Mask"
    },
    {
      id: 5,
      src: "./Images/k5.png",
      brand:"Printed Mask"
    },
    {
      id: 6,
      src: "./Images/k6.png",
      brand:"Angrakha frock"
    },
    {
      id: 7,
      src: "./Images/k7.png",
      brand:"Pink dress"
    },
    {
      id: 8,
      src: "./Images/k8.png",
      brand:"Printed kurta"
    },
    {
      id: 9,
      src: "./Images/k9.png",
      brand:"Flard frock"
    },
    {
      id: 10,
      src: "./Images/k10.png",
      brand:"Line frock"
    },
    {
      id: 11,
      src: "./Images/k11.png",
      brand:"Flard kurta"
    },
    {
      id: 12,
      src: "./Images/k12.png",
      brand:"Line frock"
    },
    {
      id: 13,
      src: "./Images/k13.png",
      brand:"plain dark frock"
    },
    {
      id: 14,
      src: "./Images/k14.png",
      brand:"plain dark frock"
    },
    {
      id: 15,
      src: "./Images/k15.png",
      brand:"Rainbow printed"
    },
    {
      id: 16,
      src: "./Images/k16.png",
      brand:"Magenta Printed frock"
    },  
  ];

function Kids() {
    function kidImg(imgKid){
        return <div className="menCard">
        <img
      height={"280px"}
      width={"210px"}
        style={{ margin: "2px 5px", padding: "1px 5px" }}
        src={imgKid.src}
        alt=""
      />
      <div style={{marginLeft:"10px",marginTop:"4px"}}>
      <h4 style={{fontSize:"16px",lineHeight:"1"}}><b>{imgKid.brand}</b> </h4>
      <h3 style={{color:"#535766",fontSize:"14px",marginTop:"0"}}>Men polo color tshirt</h3>
      <span style={{fontSize: "14px",lineHeight: "15px",color: "#282c3f"}}>Rs 200</span>
      <p style={{fontSize:"12px",color:"#ff5722",fontWeight: 500}}>Only few left!</p>
      </div>
      
      </div>
      }
  return (
    <>
    <Navbar/>
    <Content List={imgKid.map(kidImg)} store=" Kids's Fashion Store-" />
    <Footer/>
    </>
  )
}

export default Kids