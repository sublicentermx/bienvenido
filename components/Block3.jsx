import React from 'react'
import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic'

function Block3(){
    return(
        <div id="block3">
            <div className="row text-center title">
                <h1 className=''>DESCUBRE UN MUNDO DE POSIBILIDADES POR PERSONALIZAR</h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 video">
                    <ReactPlayer controls="true" url='imgs/24-STORY_LENTICULAR.mp4' />
                </div>
                <div className="col-12 col-md-7 inversion">
                    <h3>Inversión baja: LENTICULARES</h3>
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
        </div>
    )
}

export default dynamic(()=> Promise.resolve(Block3), {ssr: false});