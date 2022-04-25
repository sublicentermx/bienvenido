import React from 'react'
import Image from 'next/image'

export default function Block9(){
    return(
        <div id='block9'>
            <div className='row'>
                <div className="col-12 col-md-6 gray">
                    <div className="col-12 col-md-6 text-center mx-auto">
                        <a href="https://www.sublicenter.mx/blogs/subliblog/aprende-a-cerrar-ventas-en-3-pasos">
                            <Image src="/imgs/22-cerrar-ventas-pc.jpg" className="d-block w-100 h-100 mx-auto mt-5" width={635} height={396} alt="algo" />
                            <h4>Aprende a cerrar ventas en 3 pasos</h4>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 text-center mx-auto">
                        <a href="https://www.sublicenter.mx/blogs/subliblog/evaluacion-de-proveedores-un-factor-de-exito-para-tu-negocio-de-personalizacion">
                            <Image src="/imgs/Banner-blog_proveedores.jpg" className="d-block w-100 h-100 mx-auto mt-5" width={635} height={396} alt="algo" />
                            <h4>Evaluación de proveedores. Un factor de éxito para tu negocio de personalización.</h4>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 text text-center">
                    <h2>Blogs para ti</h2>
                    <p>Te apoyamos en todo tu camino como emprendedor con contenido de alto valor especializado en negocios</p>
                </div>
            </div>
        </div>
    )
}