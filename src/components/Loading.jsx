import React from 'react'
import ReactLoading from "react-loading";
import './Loading.css';
import { Helmet } from "react-helmet";


export default function Loading() {
    return (
    <>
        <div>
      <Helmet>
        <style>{"body { background-color: black; }"}</style>
      </Helmet>
    </div>
        <div>
          <h1 className='loadingText'>Disabato Ecommerce</h1>
          <h2 className='loadingText'>La tienda se está cargando</h2>
          <h3 className='loadingText'>Gracias por elegirnos.</h3>
          </div>
          <div className='loadingspin'>
          <ReactLoading type="spin" color="red" 
            height={100} width={80} />
            </div>
        </>);
    }
