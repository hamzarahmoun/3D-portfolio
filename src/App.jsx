import { BrowserRouter } from 'react-router-dom'
import {Hero, Navbar, About,Tech,Experience,Works,Feedbacks,Contact,EarthCanvas, BallCanvas, ComputersCanvas, 
  StarsCanvas} from './components'
const  App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>

        {/*............navbar.........*/}

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>

        {/*............section.........*/}

        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>

        {/*............Contact.........*/}

        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
