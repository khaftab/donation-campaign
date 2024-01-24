import { useEffect, useState } from "react"
import Donation from "./Donation"
import { toast } from "react-toastify"
import axios from 'axios';

export default function Donations({ search }) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const getData = () => {
    axios.get('https://api.jsonbin.io/v3/b/65afc24f266cfc3fde7ebaac')
      .then(res => setData(res.data.record))
      .catch(err => {
        toast.error(err.message)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const filteredData = data.filter(d => d.category.toLowerCase().includes(search.toLowerCase()));
    setFilteredData(prevData => [...filteredData]);
  }, [search]);

  if (filteredData.length === 0 && search !== '') {
    return (
      <div className="flex justify-center items-center h-12 flex-col">
        <h1>No Category Found named <b className="font-bold">{search}</b></h1>
        <button className="bg-btn-red rounded-sm mt-3 py-1 px-3 text-white text-sm" type="button" onClick={() => setFilteredData(data)}>Clear</button>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 px-3 sm:px-0 justify-items-center">
        {search === '' ? data.map(d => (
          <Donation key={d.id} {...d} />
        ))
          :
          filteredData.map(d => (
            <Donation key={d.id} {...d} />
          ))
        }
      </div>

    </>
  )
}
