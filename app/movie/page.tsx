import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Props = {}
type MovieType = {
    adult: boolean
    backdrop_path: string,
    genre_ids: [number],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

async function getMovies() {
    const key = process.env.API_KEY
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error('cannot fetch data')
    }
    return res.json()
}

export default async function page() {
    const movies = await getMovies()
    console.log(movies)

    return (
        <div>Movie
            {/* {res.results.map((mov: MovieType) => <i>{mov.original_title}</i>)} */}



            <div className='grid gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {movies.results.map((mov: MovieType) =>
                    <Card key={mov.id}>
                        <CardActionArea href={`/movie/${mov.id}`}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
                                alt={mov.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {mov.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {mov.overview}
                                    {mov.release_date}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>


                )}
            </div>

        </div>
    )
}
