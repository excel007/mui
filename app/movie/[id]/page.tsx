import React from 'react'
import Image from 'next/image'

export default async function Page({ params }: any) {
    const { id } = params
    const key = process.env.API_KEY
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
    const data = await fetch(url)
    const mov = await data.json()

    return (
        <div>
            <p className='text-center text-2xl '>{mov.title}</p>
            <Image src={`https://image.tmdb.org/t/p/original${mov.backdrop_path}`} width={800} height={800} alt={mov.title} className='my-12 w-full' />
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                {mov.overview}
            </p>
        </div>
    )
}
