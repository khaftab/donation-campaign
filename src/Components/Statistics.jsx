import { useState } from "react"

export default function Statistics() {
  const TOTAL_DONATIONS = 12
  const [data, setData] = useState(JSON.parse(localStorage.getItem("donations")) || [])
  const YOUR_DONATIONS = data.length / TOTAL_DONATIONS * 100
  const TOTAL_DONATIONS_PERCENTAGE = 100 - YOUR_DONATIONS



  return (
    <div className="flex flex-col justify-center items-center mt-20 mb-10">

      <div className="block w-[350px] h-[350px] rounded-full relative" style={{ backgroundImage: `conic-gradient(#00C49F ${YOUR_DONATIONS}%, #FF444A 0)` }}>
        <p className="absolute bg-btn-red px-1 py-1 rounded-sm text-white text-xl top-[50px] left-[35%]">{Math.floor(TOTAL_DONATIONS_PERCENTAGE)}%</p>
        <p className={`absolute bg-[#00C49F] px-1 py-1 rounded-sm text-white text-xl top-[50px] right-[35%]`}>
          {Math.ceil(YOUR_DONATIONS)}%
        </p>
      </div>

      <div className="flex flex-col sm:flex-row mt-14">
        <div className="flex items-center mr-7">
          <p>Your Donation</p>
          <div className="bg-[#00C49F] w-20 h-2 rounded-sm ml-3"></div>
        </div>
        <div className="flex items-center">
          <p>Total Donation</p>
          <div className="bg-[#FF444A] w-20 h-2 rounded-sm ml-3"></div>
        </div>
      </div>
    </div>
  )
} 