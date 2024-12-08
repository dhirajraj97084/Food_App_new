import React from 'react'

function AllFood({ loading, allFoodData }) {
    return (
        <div>
            <div className="main px-4 flex flex-wrap">
                {allFoodData.map((item, index) => {
                    const {image,label, calories, dishType, cuisineType }=item.recipe;
                    return (
                        <div key={index} className="child lg:w-1/4 w-full p-2">
                            <div className="sub_child shadow-md bg-[rgb(54,171,85)] p-2 rounded-xl">
                                <img className='w-full rounded-xl' src={image} alt="img" />
                                <h1 className='font-bold text-xl text-white'>{label}</h1>
                                <p className=' text-lg text-white flex gap-3'><p className='font-bold text-xl text-white'> Rs :</p>{calories}</p>
                                <p className=' text-lg text-white flex gap-3'><p className='font-bold text-xl text-white'>DishType :</p> {dishType}</p>
                                <p className=' text-lg text-white flex gap-3'><p className='font-bold text-xl text-white'>CuisineType : </p> {cuisineType}</p>
                                <div className="div flex justify-between items-center py-2">
                                    <button className='px-4 py-1.5 text-white bg-[#fbbf24] rounded-xl'>Add to card</button>
                                    <button className='px-4 py-1.5 text-white bg-red-600 rounded-xl'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllFood
