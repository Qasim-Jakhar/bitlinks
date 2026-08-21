"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shortURL, setShortURL] = useState("")
  const [generated, setGenerated] = useState("")

  const handleSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortURL
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortURL}`)
        setUrl("")
        setShortURL("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }


  return (
    <div className='mx-auto max-w-lg flex flex-col rounded-lg gap-6 bg-purple-100 my-16 p-8 shadow-2xl'>
      <h1 className='font-bold text-2xl'>Here you will generate your short URLs</h1>
      <div className='flex flex-col gap-3' action="submit">
        <input className='px-4 py-2 bg-purple-50 rounded-md focus:outline-purple-600' type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder='Enter your URL' />

        <input className='px-4 py-2 bg-purple-50 rounded-md focus:outline-purple-600' type="text"
          value={shortURL}
          onChange={e => setShortURL(e.target.value)}
          placeholder='Enter your preferred short URL text' />

        <button onClick={handleSubmit} className='bg-violet-400 text-white p-3 py-1 shadow-lg rounded-lg'>Generate</button>
        {generated && <> <span className='font-bold text-lg'>
              Your Link</span><code> <Link target={"_blank"} href={generated} >{generated}</Link>
          </code></>}
      </div>
    </div>
  )
}

export default Shorten
