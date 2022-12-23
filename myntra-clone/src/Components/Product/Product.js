import React from 'react'
import Navbar from '../../Utility/Navbar/Navbar'
import Footer from '../../Utility/Footer/Footer'
import "./Product.css"
import TextField from '@mui/material/TextField';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const productImg = [
    {
      
      img: 'https://m.media-amazon.com/images/I/81eFa1HhNVS._UL1500_.jpg?w=242&h=484&fit=crop&auto=format&dpr=2' ,
      id: 1,
     
    },
    {
      img: 'https://m.media-amazon.com/images/I/916wN4Adl5S._UL1500_.jpg?w=242&h=484&fit=crop&auto=format' ,
      id: 2,
    },
    {
      img: 'https://m.media-amazon.com/images/I/61X80-NlwJS._UL1500_.jpg?w=242&h=605&fit=crop&auto=format' ,
      id: 3,
    },
    {
      img: 'https://m.media-amazon.com/images/I/71ggf+RR4XS._UL1500_.jpg?w=242&h=363&fit=crop&auto=format',
      id: 4,
    },
    {
      img: 'https://m.media-amazon.com/images/I/71wSIU6PSGS._UL1500_.jpg?w=242&h=181.5&fit=crop&auto=format',
      id: 5,
    },
    

  ];

function Product() {

    function productTemp(productImg){
        return <div className='productImg'>
            <img height={"612px"} width={"457px"} src={productImg.img} alt="" />
        </div>
    }









  return (
    <>
    <Navbar/>
    <div className='address'>
        <h6 style={{fontSize:"small"}}>Home/Clothing/Men Clothing/Tshirts/Roadster Tshirts{'>'}More By Roadster</h6>
    </div>
    <div className='headDiv'>
        <div className='leftArea'>
            <div>
              {productImg.map(productTemp)}  
            </div>
        </div>

        <div className='rightArea'>
            <div>
                <h4> <b>PropBrand NAme</b> </h4>
                <h5>Men Olive Green Raw Edge Cotton Pure Cotton T-shirt</h5>
                <hr />
                <h4><b>Rs. 900</b></h4>
                <p style={{color:"#03A685"}}><b>inclusive all taxes</b></p>
                <h6><b>Select Size</b></h6>
                <div>
                    <button className='btn1'><img height={"26px"} width={"26px"} src="./Images/icons8-shopping-bag-48.png" alt="" />&nbsp;&nbsp; <b>Add to Bag</b> </button>
                    <button className='btn2'><FavoriteBorderOutlinedIcon/>&nbsp;<b>Wishlist</b></button>
                </div>
                <hr />
                <h6 ><b>Delivery Options <img style={{marginTop:"-1px"}} src="./Images/icons8-in-transit-25.png" alt="" /></b></h6>
                <TextField  id="" label="Enter Pincode" variant="outlined" />
                <p style={{fontSize:"small",marginTop:"2px"}}>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                <div>
                  <p>100% Original Products <br />
                  Pay on delivery might be available <br />
                  Easy 30 days returns and exchanges <br />
                  Try & Buy might be available</p>
                </div>
                <p><b>BEST OFFERS</b></p>
                
                <p><b>Best Price: Rs 399</b> </p>
                <ul className='bullet'>
                  <li>Applicable on: Orders above Rs. 599 (only on first purchase)</li>
                  <li>Coupon code: MYNTRA200</li>
                  <li>Coupon Discount: Rs. 200 off (check cart for final savings)</li>
                </ul>
                <p><b>EMI option available</b></p>
                <ul className='bullet'>
                  <li>EMI starting from Rs.28/month</li>
                </ul>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Product