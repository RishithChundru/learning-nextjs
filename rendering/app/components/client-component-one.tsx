"use client";
import { useState } from "react";
export const ClientComponentOne=()=>{
    const [name, setname]=useState("Batman");
    return <h1>Client Component One</h1>
}