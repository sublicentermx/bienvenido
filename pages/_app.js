import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Template.css'
import '../styles/mainSlide.css'
import '../styles/Block1.css'
import '../styles/Block2.css'
import '../styles/Block3.css'
import '../styles/Block4.css'
import '../styles/Block5.css'
import '../styles/Block6.css'
import '../styles/Block7.css'
import '../styles/Block8.css'
import '../styles/Block9.css'
import '../styles/Block10.css'
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
