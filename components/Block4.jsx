import React from 'react'
import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic'

function Block4(){
    return(
        <div id='block4'>
            <div className='row'>
                <div className="col-12 col-md-6  title-inicio">
                    <div className='title-div'>
                        <h4>¡QUIERO APRENDER</h4><br />
                        <span>A HACERLO!</span>
                        <p>Dale play al video, <br /> <strong>TAMBIEN TE ENSEÑAMOS A HACERLO</strong></p>
                        <a className='title-button' href='https://www.youtube.com/watch?v=NMlUxBkjiOU&t=4s'>
                            <i className="bi bi-hand-index"></i> Me interesa
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 video">
                        <ReactPlayer url='imgs/Lenticular.mp4' controls="true" />
                </div>
            </div>
        </div>
    )
}

export default dynamic(()=> Promise.resolve(Block4), {ssr: false});