"use client"

import { serverSideFunction } from "../utils/server-utils"
import { clientSideFunction } from "../utils/client-utils";

export default function ClientRoutePage(){
   
    // const result=serverSideFunction();
    // return <h1>Client Route {result}</h1>
    const result=clientSideFunction();
    return <p>{result}</p>
}