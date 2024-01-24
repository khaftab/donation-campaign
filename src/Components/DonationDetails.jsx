import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function DonationDetails() {
  const { donationId } = useParams();
  const [data, setData] = useState({})
  useEffect(() => {
      axios.get('https://api.jsonbin.io/v3/b/65afc24f266cfc3fde7ebaac')
      .then(({data: {record}}) => setData(record.find(d => d.id === Number(donationId))))
      .catch(err => {
        toast.error(err.message)
      });
  }, [])

  const handleDonate = () => {
    var existingEntries = JSON.parse(localStorage.getItem("donations")) || [];
    const isDataExists = existingEntries.some(entry => JSON.parse(entry).id === data.id);
    if (!isDataExists) {
      existingEntries.push(JSON.stringify(data));
      localStorage.setItem("donations", JSON.stringify(existingEntries));
      toast.success('Donation Added Successfully');
    } else {
      toast.error('Donation Already Exists');
    }
  }

  return (
    <>
      <div className="mx-auto flex flex-col justify-center my-20 max-w-[640px] px-3 sm:px-0">
        <div className="mx-auto relative">
          <img src={data.image} alt="Image" style={{ width: '100%', height: '100%' }} />
          <div style={{ backgroundColor: '#0b0b0b80' }} className="h-20 w-full absolute bottom-0">
            <button style={{ backgroundColor: data.cardTextColor }} className="rounded-sm mt-4 ml-5 py-2 px-4 text-white text-sm" onClick={handleDonate}>Donate ${data.price}</button>
          </div>
        </div>
        <h2 className="font-bold text-3xl mt-8">{data.title}</h2>
        <p className="mt-5 font-light text-justify">
          {data.description}
        </p>
      </div>
    </>
  )
}