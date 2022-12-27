import React from 'react'
import Content from '../../Utility/Content/Content'
import Footer from '../../Utility/Footer/Footer'
import Navbar from '../../Utility/Navbar/Navbar'

const imgBeauty = [
    {
      id: 1,
      src: "./Images/a1.png",
      brand:"Hairdryer"
    },
    {
      id: 2,
      src: "./Images/a2.png",
      brand:"Hair Straightner"
    },
    {
      id: 3,
      src: "./Images/a3.png",
      brand:"Cream"
    },
    {
      id: 4,
      src: "./Images/a4.png",
      brand:"Perfume"
    },
    {
      id: 5,
      src: "./Images/a5.png",
      brand:"Denver Deo"
    },
    {
      id: 6,
      src: "./Images/a6.png",
      brand:"Lip Stick"
    },
    {
      id: 7,
      src: "./Images/a7.png",
      brand:"Brush"
    },
    {
      id: 8,
      src: "./Images/a8.png",
      brand:"Pencil"
    },
    {
      id: 9,
      src: "./Images/a9.png",
      brand:"Perfume"
    },
    {
      id: 10,
      src: "./Images/a10.png",
      brand:"Perfume"
    },
    {
      id: 11,
      src: "./Images/a11.png",
      brand:"Pencil"
    },
    {
      id: 12,
      src: "./Images/a12.png",
      brand:"Trimmer"
    },   
  ];

function Beauty() {

    
        function beautyImg(imgBeauty){
            return <div className="menCard">
            <img
          height={"280px"}
          width={"210px"}
            style={{ margin: "2px 5px", padding: "1px 5px" }}
            src={imgBeauty.src}
            alt=""
          />
          <div style={{marginLeft:"10px",marginTop:"4px"}}>
          <h4 style={{fontSize:"16px",lineHeight:"1"}}><b>{imgBeauty.brand}</b> </h4>
          <h3 style={{color:"#535766",fontSize:"14px",marginTop:"0"}}>Men polo color tshirt</h3>
          <span style={{fontSize: "14px",lineHeight: "15px",color: "#282c3f"}}>Rs 200</span>
          <p style={{fontSize:"12px",color:"#ff5722",fontWeight: 500}}>Only few left!</p>
          </div>
          
          </div>
          
        }

  return (
    <>
    <Navbar/>
    <Content  List={imgBeauty.map(beautyImg)} store=" Beauty Fashion Store-"/>
    <Footer/>
    </>
  )
}

export default Beauty