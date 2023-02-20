import React from 'react'

export default function Iframe({keyVideo}) {
    return (
        <div>
            <iframe width="100%" height="390" src={`https://www.youtube.com/embed/${keyVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
