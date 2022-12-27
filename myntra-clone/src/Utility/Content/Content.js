import React from 'react'
import "./Content.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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



function Content(props) {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <>
    <div style={{marginTop:"90px"}}>
    <div className='address'>
        <h6 style={{fontSize:"small"}}>Home/Clothing/Men Clothing/Tshirts/Roadster Tshirts{'>'}More By Roadster</h6>
        <h6><b>{props.store}</b> <span>80965 items found</span></h6>
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
        {props.List}
      </div>
      <hr />
      
    </div>
    <div className='pagination'>
      <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
      </div>
    </div>
    

    </>
  )
}

export default Content