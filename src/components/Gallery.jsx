import React from 'react'
import { useState, useEffect } from 'react'

function Gallery() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://book-server-ahrs.onrender.com/books")
            .then((res) => res.json())
            .then((data) => setBooks(data))
    }, [])


    return (
        <div className="w-full min-h-screen grid grid-cols-15 gap-3 py-5">
            <div className="col-start-1 col-end-16 sm:col-start-2 sm:col-end-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 p-3 sm:p-5 shadow-2xl">
                {
                    books.map((el, inedx) => {
                        return (
                            <div className="shadow-lg grid grid-cols-12 p-3" key={inedx}>
                                <img className="w-full h-full object-contain col-span-4" src={el.image} alt="" />
                                <div className="col-span-8 p-2">
                                    <h2 className="text-lg font-semibold">Title: {el.title}</h2>
                                    <p className="text-lg">{el.description}</p>

                                    <span className="block text-sm font-semibold">genre: {el.genre}</span>
                                    <span className="block text-sm font-semibold">Author: {el.author}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery