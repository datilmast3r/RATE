import { Link } from 'react-router-dom'

/* Logo */
import logo from '../../assets/images/logo.png'
/* CSS */
import './TitlePage.css'

const TitlePage = () => {
  return (
    <main className='main-titlePage'>
        <div className="logo-container">
            <img className='logo' src={logo} alt="logo" />
            <h1 className='logo-title'>RATE</h1>
            <span className='subtitle'>Valora a los jugadores</span>
        </div>


        <div className='acountBtn-container'>
            <Link className='signUp-link' to='sign-up'>
              <button className='createAccount-btn'>Create an account</button>
            </Link>
            
            <Link className='login-link' to='login'>
              <span className='login-span'>I already have an account</span>
            </Link>
        </div>
    </main>
  )
}

export default TitlePage