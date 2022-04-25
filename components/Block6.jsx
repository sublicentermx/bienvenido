import React from 'react'
import Image from 'next/image'

export default function Block6(){
    return(
        <div id="block6">
            <div className="row">
                <div className="col-12 col-md-4">
                    <Image src="/imgs/Grupo-134.png" className="d-block w-100 h-100 mx-auto mt-5" width={406} height={793} alt="algo" />
                </div>
                <div className="col-12 col-md-4">
                    <div className="col-12 col-md-7 inversion">
                        <h3>Inversión media: <br />  Cases sublimadas</h3>
                        <div className='text-lg-start complementos mt-5'>
                            <span>Solo necesitas:</span>
                            <ul>
                                <li>Cases</li>
                                <li>Hojas lenticulares</li>
                                <li>Adhesivo doble cara</li>
                                <li>Laminadora (opcional)</li>
                                <li>Impresora</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <Image src="/imgs/Banner_Productos_novedosos-2.png" className="d-block w-100 h-100 mx-auto mt-5" width={440} height={705} alt="algo" />
                </div>
            </div>
            <div className='row'>
                <div className="col-12 mx-auto text-center mb-4">
                    <a className='button' href='https://walink.co/1c9239'>
                        <i className="bi bi-whatsapp"></i> Suena bien pero quiero hablar con un asesor
                    </a>
                </div>
            </div>
        </div>
    )
}