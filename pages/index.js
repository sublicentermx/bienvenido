import Head from 'next/head'
import Image from 'next/image'
import Template from '../template/template'
import MainSlide from '../components/mainSlide'
import Block1 from '../components/Block1'
import Block2 from '../components/Block2'
import Block3 from '../components/Block3'
import Block4 from '../components/Block4'
import Block5 from '../components/Block5'
import Block6 from '../components/Block6'
import Block7 from '../components/Block7'
import Block8 from '../components/Block8'
import Block9 from '../components/Block9'
import Block10 from '../components/Block10'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Emprende personalizando carcasas telefónicas. || sublicenter.mx
        </title>
        <meta name="description" content="El negocio que estabas buscando ¡ya está aquí! Mejora tus ingresos tanto como quieras, nosotros te enseñamos." />
        <link rel="icon" href="imgs/ISOTIPO.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
      </Head>
      <Template>
        <MainSlide />
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Block7 />
        <Block8 />
        <Block9 />
        <Block10 />
      </Template>
    </div>
  )
}
