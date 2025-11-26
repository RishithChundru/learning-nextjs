import { serverSideFunction } from "../utils/server-utils"
import React from 'react';
import { ImageSlider } from "../components/ImageSlider";
import { clientSideFunction } from "../utils/client-utils";

export default function ServerRoutePage(){
    const result=clientSideFunction();
    return(
    <>
    <h1>{result}</h1>
    </>
    )
}