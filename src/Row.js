import React, { useEffect, useState } from 'react'
import axios from "./axios";
import "./Row.css";
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer';
import Iframe from './Iframe';

const baseURL = "https://image.tmdb.org/t/p/original";

export default function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    // const [trailerUrl, setTrailerUrl] = useState("");
    const [key, setKey] = useState("");
    const [showIframe, setShowIframe] = useState(false);

    // setTrailerUrl("57817accc3a368592500392e");
    // setTrailerUrl("0vxOhd4qlnA");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchURL]);

    // const opts = {
    //     height: "390",
    //     width: "100%",
    //     playerVars: {
    //         autoplay: 1,
    //     },
    // };

    const handleClick = (movie) => {
        // if(trailerUrl) {
        //     setTrailerUrl("");
        // } else {
        //     movieTrailer(movie?.title || "")
        //         .then((url) => {
        //             const urlParams = new URLSearchParams(new URL(url).search);
        //             setTrailerUrl(urlParams.get("v"));
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //             console.log("Gagal...");
        //         });
        // }

        const fetchURLVideos = `/movie/${movie?.id}?api_key=71d455a75e2aba04b717bdbb1b9fbbc5&append_to_response=videos`;
        axios.get(fetchURLVideos)
            .then((response) => {
                setKey(response.data.videos.results[0].key);
                setShowIframe(true);
                console.log(response.data.videos.results);
                console.log(response.data.videos.results[0]);
                console.log(response.data.videos.results[0].key);
            })
            .catch((error) => console.log(error));
    }

    // console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        src={`${baseURL}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>

            {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}

            {showIframe && <Iframe keyVideo={key} /> }

        </div>
    )
}
