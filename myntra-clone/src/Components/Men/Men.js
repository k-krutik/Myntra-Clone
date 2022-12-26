import React from 'react'
import "./Men.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Navbar from '../../Utility/Navbar/Navbar'
import Footer from '../../Utility/Footer/Footer'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const filters = [
  {
    id:1,
    category:"Shirts",
    brands:"U.S Polo",
    price:"Rs. 99 to Rs. 239",
    disc:"10% and above"

  },
  {
    id:2,
    category:"TShirts",
    brands:"Max",
    price:"Rs. 239 to Rs. 1079",
    disc:"30% and above"
  },
  {
    id:3,
    category:"Jeans",
    brands:"H&M",
    price:"Rs. 1079 to Rs. 1919",
    disc:"40% and above"
  },
  {
    id:4,
    category:"Trouser",
    brands:"Jack&Jones",
    price:"Rs. 1919 to Rs. 2759",
    disc:"60% and above"
  },
  {
    id:5,
    category:"Hoodies",
    brands:"Roadster",
    price:"Rs. 2759 to Rs. 3599",
    disc:"80% and above"
  },
]


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

function categorie(filters){
  return <div>
  <label class="container">{filters.category}
   <input type="checkbox" />
  <span class="checkmark"></span>
  </label>
  </div>
}
function brand(filters){
  return <div>
  <label class="container">{filters.brands}
   <input type="checkbox" />
  <span class="checkmark"></span>
  </label>
  </div>
}
function price(filters){
  return <div>
  <label class="container">{filters.price}
   <input type="checkbox" />
  <span class="checkmark"></span>
  </label>
  </div>
}
function discount(filters){
  return <div>
  <label class="container">{filters.disc}
   <input type="checkbox" />
  <span class="checkmark"></span>
  </label>
  </div>
}



function Men() {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
  <p style={{fontSize:"12px",color:"#ff5722",fontWeight: 500}}>okkok!</p>
  </div>
  
  </div>
  }


  return (
    <>
    <Navbar/>
    <div className='address'>
        <h6 style={{fontSize:"small"}}>Home/Clothing/Men Clothing/Tshirts/Roadster Tshirts{'>'}More By Roadster</h6>
        <h6><b> Men's Fashion Store-</b> <span>80965 items found</span></h6>
    </div>
    <div className='filterStrip'>
      <div style={{margin:"1% 9%"}} >
        <h6><b>FILTERS</b></h6>
      </div>

      <div>
       
      </div>

      <div className='dropDown'>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value={1}>Recommended</MenuItem>
          <MenuItem value={2}>What's New</MenuItem>
          <MenuItem value={3}>Popularity</MenuItem>
          <MenuItem value={3}>Price: High to Low</MenuItem>
          <MenuItem value={3}>Price: Low to High</MenuItem>
          <MenuItem value={3}>Better Discount</MenuItem>
          <MenuItem value={3}>Customer Rating</MenuItem>
        </Select>
      </FormControl>
      </div>
    </div>
    <hr style={{marginTop:"0.2%",marginLeft:"7.8%"}}/>
    <div className='midContent'>
      <div className='lContent'>
         <div style={{margin:"2.5% 5.5%",padding:"5px"}}>
          <h6><b>Category</b> </h6>
          {filters.map(categorie)}
        </div>

        <div style={{margin:"2.5% 5.5%",padding:"5px"}}>
          <h6><b>Brands</b> </h6>
          {filters.map(brand)}
        </div>

        <div style={{margin:"2.5% 5.5%",padding:"5px"}}>
          <h6><b>PRICE</b> </h6>
          {filters.map(price)}
        </div>

        <div style={{margin:"2.5% 5.5%",padding:"5px"}}>
          <h6><b>DISCOUNT</b> </h6>
          {filters.map(discount)}
        </div>
      </div>

      <div className='rContent'>
        {imgMen.map(menImg)}
      </div>
      <hr />
      
    </div>
    <div className='pagination'>
      <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
      </div>
      <Footer/>
    </>
  )
}

export default Men