import React from 'react'
import Image from 'next/image'

export default function MainSlide(){
    return(
        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image src="/imgs/SLIDE-1.png" className="d-block w-100 h-100" width={1920} height={920} alt="..." layout='intrinsic' />
                </div>
                <div className="carousel-item">
                    <Image src="/imgs/SLIDE-2.png" className="d-block w-100 h-100" width={1920} height={920} alt="..." layout='intrinsic' />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}