import React from 'react'

function SearchBar({searchFood,setSearchFood,fetchData}) {
  return (
    <div>
      <div className="main">
        <div className="child my-6 flex justify-center items-center px-4">
            <input type="text" value={searchFood} onChange={(e)=>setSearchFood(e.target.value)} placeholder='Seach here' className='py-2 rounded-l-md outline-none w-full md:w-96  border-y-2 border-l-2 bg-gray-300 border-gray-400 px-4' />
            <button onClick={fetchData} className='px-4 py-2 rounded-r-md bg-[rgb(54,171,85)] border-y-2 border-r-2 border-gray-400 text-white font-bold'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
