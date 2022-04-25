import React from 'react'
import Image from 'next/image'

export default function Block7(){
    return(
        <div id='block7'>
            <div className="row">
                <div className="col-12 col-md-6">
                    <Image src="/imgs/Grupo-135.png" className="d-block w-100 h-100 mx-auto mt-5" width={993} height={1043} alt="algo" />
                </div>
                <div className="col-12 col-md-6 text-center title">
                    <span className=''>
                        <strong>El futuro de los negocios está en la personalización</strong> de productos y servicios
                    </span>
                    <br />
                    <a className='button' href='https://www.sublicenter.mx/'>
                        <i className="bi bi-cart4"></i> ¡Quiero conocer la tienda en línea!
                    </a>
                </div>
            </div>
        </div>
    )
}