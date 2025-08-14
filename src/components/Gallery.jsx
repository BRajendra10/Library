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
            <div className="col-start-1 col-end-16 sm:col-start-2 sm:col-end-15 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 p-3 sm:p-5 shadow-2xl">
                {
                    books.map((el, inedx) => {
                        return (
                            <div className="shadow-lg p-3" key={inedx}>
                                <h2 className="text-lg font-semibold my-2">Title: {el.title}</h2>
                                <span className="block text-sm font-semibold">Author: {el.author}</span>
                                <span className="block text-sm font-semibold">publisher: {el.publisher}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery