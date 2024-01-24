import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

export default function DonationPage() {
  const [donations, setDonations] = useState([])
  const [pagination, setPagination] = useState(null)
  useEffect(() => {
    // get donations from local storage
    const donations = JSON.parse(localStorage.getItem("donations")) || [];
    setDonations(donations)
    if (donations.length > 4) setPagination(4)
  }, [])

  if (donations.length === 0) return (
    <div className="container mx-auto flex justify-center items-center mt-36  my-10">
      <h1 className="text-3xl font-bold col-span-2">You have not donated anything yet</h1>
    </div>
  )

  return (
    <>
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 gap-5 mt-14  my-10 px-3 md:px-0">
        {donations.slice(0, pagination || (donations.length)).map(donation => {
          const { image, title, category, cardBgColor, cardTextColor, cardCategoryBgColor, id, price } = JSON.parse(donation)
          return (
            <div className="flex rounded-md" key={title + (Math.random() * 10)} style={{ backgroundColor: cardBgColor }}>
              <img src={image} alt="Donation" className="rounded-md" width={230} />
              <div className="p-3 ml-1">
                <p className="text-sm px-2 rounded-sm w-min" style={{ color: cardTextColor, backgroundColor: cardCategoryBgColor }}>{category}</p>
                <h3 className="font-semibold mt-1 text-xl">{title}</h3>
                <p className="mt-2 font-semibold" style={{ color: cardTextColor }}>${price}</p>
                <NavLink to={`/donation-details/${id}`}>
                  <button style={{ backgroundColor: cardTextColor }} className="rounded-sm mt-3 py-1 px-3 text-white text-sm">View Details</button>
                </NavLink>
              </div>
            </div>
          )
        })}
      </div>
      {pagination && (
        <div className="flex justify-center mb-6">
          <button style={{ backgroundColor: '#009444' }} className="py-2 px-3 text-sm text-white w-max rounded-md" onClick={() => setPagination(null)}>See All</button>
        </div>
      )}
    </>
  )
}
