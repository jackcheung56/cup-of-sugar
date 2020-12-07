import React from 'react'
import '../styles/Landing.css'
import Logo from '../assets/coslogo.png'



export default () => {
    return (
        <div className="branding">


            <div className="object">
                <img src={Logo} alt="app logo"></img>
                <div className="welcome"><h2>cup of sugar</h2></div>
            </div>

            {/* <div className="footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L60,213.3C120,235,240,277,360,282.7C480,288,600,256,720,229.3C840,203,960,181,1080,181.3C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            </div> */}

            {/* <div className="footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,240C640,256,800,224,960,197.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div> */}



        </div>
    )
}




