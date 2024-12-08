import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import SearchBar from './component/searchBar/SearchBar'
import AllFood from './component/allFood/AllFood'

function App() {
  const [searchFood, setSearchFood] = useState();
  const [allFoodData, setAllFoodData] = useState([]);
  const [loading, setLoading] = useState(false);

const APP_ID = "b3972793";
const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0";

  const fetchData=async()=>{
    try {
      setLoading(true);
      const res=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchFood}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data=await res.json();
      setAllFoodData(data.hits);
      console.log(data.hits);
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <div>
      <Navbar/>
     
     <SearchBar searchFood={searchFood} setSearchFood={setSearchFood} fetchData={fetchData} />
     <AllFood loading={loading} allFoodData={allFoodData}/>
     
    </div>
  )
}

export default App
