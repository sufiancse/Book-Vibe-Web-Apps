import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([])

    // 1. useEffect diye data fetch.
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // },[])

    

    return (
        <div>
            <h1>Hello im books</h1>
        </div>
    );
};

export default Books;