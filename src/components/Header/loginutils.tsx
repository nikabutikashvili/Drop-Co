import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

function loginutils(email: string, password: string) {
    console.log(email, password);
    return (
        <Redirect to="/"/>
    )
}

const user1 = {
    name: "Nika",
    email: "Nick@yahoo.com",
    password: "react123"
}
const user2 = {
    name: "Luka",
    email: "Luka887@yahoo.com",
    password: "react123"
}
const user3 = {
    name: "Sandro",
    email: "Sandro887@yahoo.com",
    password: "react123"
}
const user4 = {
    name: "Sam",
    email: "Sam887@yahoo.com",
    password: "react123"
}

const users = [user1, user2, user3, user4];

export default loginutils;
