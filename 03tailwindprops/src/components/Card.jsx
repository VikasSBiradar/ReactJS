import React from 'react'

function Card({name='Bela hadid', description = 'Fashion model exuding grace, confidence, and trendsetting style, walking runways, fronting campaigns, and shaping the fashion industry’s future.', imgsrc="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"}) {
  return (
    <>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full h-48 object-cover" src={imgsrc} alt="Image description" />
              <div className="px-6 py-4">
                  <h2 className="font-bold text-xl mb-2">{name}</h2>
                  <p className="text-gray-700 text-base">
                      {description}
                  </p>
              </div>
              <div className="px-6 py-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Posted 2 hours ago</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Read More</button>
              </div>
          </div>
    </>
  )
}

export default Card