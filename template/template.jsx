import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/imgs/logo-animado.gif'

export default function Template({ children }){
    return(
        <div>
            <div>
                <nav className='navbar navbar-dark bg-dark navbar-expand justify-content-center align-items-center align-content-center custom-navbar py-2'>
                    <div className='container-fluid'>
                        <ul className="navbar-nav mx-auto first-nav-top">
                            <li className='nav-item oferta'><span>Oferta por tiempo limitado</span><strong>KIT DE INICIO PARA SUBLIMAR ¡AL 15% DE DESCUENTO!</strong></li>
                            <li className='nav-item lo-quiero-li'><a href="https://www.sublicenter.mx/collections/kits-de-inicio" className='lo-quiero'>¡LO QUIERO!</a></li>
                        </ul>
                    </div>
                </nav>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg custom-navbar-main'>
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <Image src="/imgs/logo-animado.gif" width={150} height={50} alt='Sublicenter MX' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto ">
                                <a className="nav-link active mx-3" href="https://www.sublicenter.mx/">Tienda en línea</a>
                                <a className="nav-link active mx-3" href="https://www.sublicenter.mx/collections/todos-los-productos">Productos</a>
                                <a className="nav-link active mx-3" href="https://www.sublicenter.mx/blogs/subliblog">Contenido</a>
                                <a className="nav-link active mx-3" href="https://walink.co/1c9239">Asesoría</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}