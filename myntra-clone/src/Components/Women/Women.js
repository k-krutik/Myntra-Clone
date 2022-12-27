import React from 'react'
import Content from '../../Utility/Content/Content'
import Footer from '../../Utility/Footer/Footer'
import Navbar from '../../Utility/Navbar/Navbar'

const imgWomen = [
  {
    id: 1,
    src: "./Images/dress1.png",
    brand:"Angrakha kurti"
  },
  {
    id: 2,
    src: "./Images/dress2.png",
    brand:"Printed kurti"
  },
  {
    id: 3,
    src: "./Images/dress3.png",
    brand:"Line kurti"
  },
  {
    id: 4,
    src: "./Images/dress4.png",
    brand:"Flard kurti"
  },
  {
    id: 5,
    src: "./Images/dress5.png",
    brand:"Line kurti"
  },
  {
    id: 6,
    src: "./Images/dres6.png",
    brand:"White Top"
  },
  {
    id: 7,
    src: "./Images/dress7.png",
    brand:"Angrakha Top"
  },
  {
    id: 8,
    src: "./Images/dress8.png",
    brand:"Flard lignt blue Top"
  },
  {
    id: 9,
    src: "./Images/dress9.png",
    brand:"Yellow kurti"
  },
  {
    id: 10,
    src: "./Images/dress10.png",
    brand:"Pink Printed kurti"
  },
  {
    id: 11,
    src: "./Images/dress11.png",
    brand:"Flard kurti"
  },
  {
    id: 12,
    src: "./Images/dress12.png",
    brand:"Black Top"
  },
  {
    id: 13,
    src: "./Images/dress13.png",
    brand:"Plain dark blue kurti"
  },
  {
    id: 14,
    src: "./Images/dress14.png",
    brand:"Black printed kurti"
  },
  {
    id: 15,
    src: "./Images/dress15.png",
    brand:"Printed kurti"
  },
  {
    id: 16,
    src: "./Images/dress16.png",
    brand:"Printed dress"
  },

  
];

function Women() {
  function womenImg(imgWomen){
    return <div className="menCard">
    <img
  height={"280px"}
  width={"210px"}
    style={{ margin: "2px 5px", padding: "1px 5px" }}
    src={imgWomen.src}
    alt=""
  />
  <div style={{marginLeft:"10px",marginTop:"4px"}}>
  <h4 style={{fontSize:"16px",lineHeight:"1"}}><b>{imgWomen.brand}</b> </h4>
  <h3 style={{color:"#535766",fontSize:"14px",marginTop:"0"}}>Men polo color tshirt</h3>
  <span style={{fontSize: "14px",lineHeight: "15px",color: "#282c3f"}}>Rs 200</span>
  <p style={{fontSize:"12px",color:"#ff5722",fontWeight: 500}}>Only few left!</p>
  </div>
  
  </div>
  }



  return (
    <>
    <Navbar/>
    <Content List={imgWomen.map(womenImg)} store="Women's Fashion Store-" />
    <Footer/>
    </>
  )
}

export default Women