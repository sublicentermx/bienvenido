import React from 'react'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export default function Block1(){
    return(
        <div id="block1" className=''>
            <div className="row">
                <div className="col-2 col-md-2">
                    <Image src="/imgs/Grupo8.png" className="d-block w-100 h-100 " width={264} height={252} alt="algo" />
                    <Parallax speed={-5}>
                        <Image src="/imgs/SOPORTE-AIRPODS.png" className="d-block w-100 h-100 " width={200} height={200} alt="algo" />
                    </Parallax>
                </div>
                <div className="col-8 col-md-8 text-center mt-5">
                    <h1>EL NEGOCIO <br/> PARA EMPRENDEDORES</h1>
                    <span className='m-3 ingresos'>que buscan <strong>mejorar</strong> sus <strong>ingresos inmediatamente</strong></span>
                </div>
                <div className="col-2 col-md-2">
                    <Parallax speed={-5}>
                        <Image src="/imgs/POPSOCKET.png" className="d-block w-100 h-100" width={200} height={200} alt="algo" />
                    </Parallax>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-md-8">
                    <span className='d-block ask'>¿Así que quieres ser tu propio jefe, pero no has encontrado ese negocio que te haga dar el salto?</span>
                </div>
                <div className="col-2 col-md-1 align-self-start corchete">
                    <Image src="/imgs/}.png" className="d-block w-100 h-100" width={100} height={250} alt="algo" />
                </div>
                <div className="col-4 col-md-3 negocio">
                    <h4>Para ambos casos, <br /><span>el negocio de la personalización de carcasas es para ti.</span></h4>
                </div>
            </div>
        </div>
    )
}