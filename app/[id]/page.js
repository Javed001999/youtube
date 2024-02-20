"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const page = ({ params }) => {
    const { id } = params;
    const [users, setusers] = useState([])
    const getUsers = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)
        const data = res.data
        setusers(data);
    }

    // Hamare function ko automatically call karne ke liye iska use karte hain ....
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <h1>{JSON.stringify(users)}</h1>
        </>
    );
};

export default page;























