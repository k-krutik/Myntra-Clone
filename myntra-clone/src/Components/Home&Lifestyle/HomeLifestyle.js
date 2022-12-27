import React from 'react'
import Content from '../../Utility/Content/Content'
import Footer from '../../Utility/Footer/Footer'
import Navbar from '../../Utility/Navbar/Navbar'

const imgLifestyle = [
  {
    id: 1,
    src: "./Images/h1.png",
    brand:"Buddha Idol"
  },
  {
    id: 2,
    src: "./Images/h2.png",
    brand:"Abtract Wall CLock"
  },
  {
    id: 3,
    src: "./Images/h3.png",
    brand:"Glass Lamp"
  },
  {
    id: 4,
    src: "./Images/h4.png",
    brand:"Wall Piece"
  },
  {
    id: 5,
    src: "./Images/h5.png",
    brand:"Max"
  },
  {
    id: 6,
    src: "./Images/h6.png",
    brand:"Abstract Painting"
  },
  {
    id: 7,
    src: "./Images/h7.png",
    brand:"Classic Clock"
  },
  {
    id: 8,
    src: "./Images/h8.png",
    brand:"Table Piece"
  },
  {
    id: 9,
    src: "./Images/h9.png",
    brand:"Cute Couple"
  },
  {
    id: 10,
    src: "./Images/h10.png",
    brand:"Clear Vase"
  },
  {
    id: 11,
    src: "./Images/h11.png",
    brand:"Artifical Plant"
  },
  {
    id: 12,
    src: "./Images/h12.png",
    brand:"Krishna Wall Painting"
  },
  {
    id: 13,
    src: "./Images/h13.png",
    brand:"Ganesha Clock"
  },
  {
    id: 14,
    src: "./Images/h14.png",
    brand:"Adiyogi"
  },
  {
    id: 15,
    src: "./Images/h15.png",
    brand:"Aesthetic  Clock"
  },
  {
    id: 16,
    src: "./Images/h16.png",
    brand:"Love"
  },  
];

function HomeLifestyle() {
  function lifestyleImg(imgLifestyle){
    return <div className="menCard">
    <img
  height={"280px"}
  width={"210px"}
    style={{ margin: "2px 5px", padding: "1px 5px" }}
    src={imgLifestyle.src}
    alt=""
  />
  <div style={{marginLeft:"10px",marginTop:"4px"}}>
  <h4 style={{fontSize:"16px",lineHeight:"1"}}><b>{imgLifestyle.brand}</b> </h4>
  <h3 style={{color:"#535766",fontSize:"14px",marginTop:"0"}}>Men polo color tshirt</h3>
  <span style={{fontSize: "14px",lineHeight: "15px",color: "#282c3f"}}>Rs 200</span>
  <p style={{fontSize:"12px",color:"#ff5722",fontWeight: 500}}>Only few left!</p>
  </div>
  
  </div>
  }

  return (
    <>
    <Navbar/>
    <Content List={imgLifestyle.map(lifestyleImg)} store=" Home & Lifestyle Store-"/>
    <Footer/>
    </>
  )
}

export default HomeLifestyle