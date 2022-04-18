import moon from './images/icon-moon.svg'
import sun from './images/icon-sun.svg'
import { useState } from 'react'

const Header = () => {
  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    const toggle = theme === 'light' ? 'dark' : 'light'
    document.body.setAttribute('data-theme', toggle)
    setTheme(toggle)
  }

  return (
    <header className='header__container'>
        <h1>Where in the world?</h1>

        <div className='header__theme'>
          <button onClick={handleTheme}>
            <img src={theme === 'light' ? moon : sun} alt="theme icon" />
          </button>
            
          <span>Dark Mode</span>
        </div>
      </header>
  )
}

export default Header