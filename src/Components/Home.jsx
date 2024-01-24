import { useState } from "react";
import Donations from "./Donations";
export default function Home() {
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(input.trim())
    setInput('')
  }
  return (
    <>
      <div className="flex min-h-[500px] justify-center items-center flex-col">
        <div
          className="w-full h-full bg-hero-bg bg-cover bg-center">
          <div className="w-full min-h-[500px] flex justify-center items-center flex-col bg-banner-white backdrop-brightness-50">
            <h1 className="font-bold text-3xl text-center">I Grow By Helping People In Need</h1>
            <form className="mt-8" onSubmit={handleSubmit}>
              <input type="text" placeholder="Search here..." className="py-2 px-2 outline-none border-gray-500 text-sm rounded-sm w-30 sm:w-72" value={input} onChange={e => setInput(e.target.value)} />
              <button className="bg-btn-red px-3 py-2 text-white text-sm" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-16 md:my-28">
        <Donations search={search} />
      </div>
    </>
  )
}