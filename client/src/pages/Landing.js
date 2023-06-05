import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.png'

const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt="labeka" className='logo' />
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    Finances <span>tracking</span> app
                </h1>
                <p>
                    I'm baby yuccie authentic lomo church-key wolf gorpcore, woke trust fund williamsburg. Normcore wolf tumeric ramps, next level cupping hexagon waistcoat 8-bit blackbird spyplane. Hella pok pok selvage leggings raclette helvetica hot chicken taiyaki retro yr palo santo. 90's heirloom bodega boys affogato tbh pickled polaroid 8-bit listicle taiyaki.
                </p>
                <button className='btn btn-hero'>Login/Register</button>
            </div>
        </div>
        <img src={main} alt='metrics/main' className='img mian-img'/>
    </main>
  )
}

export default Landing