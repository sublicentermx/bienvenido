import React from 'react'
import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic'

function Block2(){
    return(
        <div id='block2'>
            <div className='row'>
                <div className="col-12 col-md-6  title-inicio">
                    <div className='title-div'>
                        <h4>QUIERO INICIAR,</h4><br />
                        <span>PERO NO SÉ COMO SUBLIMAR CARCASAS</span>
                        <p>Dale play al video, <br /> <strong>¡NOSTROS TE ENSEÑAMOS A HACERLO!</strong></p>
                        <a className='title-button' href="https://walink.co/1c9239">
                            <i className="bi bi-cash-coin"></i> Quiero aumentar mis ingresos
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 video">
                        <ReactPlayer url='https://youtu.be/yFWmFT8nLrc' />
                </div>
            </div>
        </div>
    )
}

export default dynamic(()=> Promise.resolve(Block2), {ssr: false});