import { Link } from "react-router-dom";

export default function Donation({ image, title, category, cardBgColor, cardTextColor, cardCategoryBgColor, id }) {
  return (
    <Link to={`/donation-details/${id}`}>
      <div style={{ backgroundColor: cardBgColor }} className="rounded-md max-w-[312px]">
        <img src={image} alt="Card image" width={312} />
        <div className="p-3">
          <p className="text-sm px-2 rounded-sm w-min" style={{ color: cardTextColor, backgroundColor: cardCategoryBgColor }}>{category}</p>
          <h3 className="font-semibold mt-1" style={{ color: cardTextColor }}>{title}</h3>
        </div>
      </div>
    </Link>
  )
}