import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="header__box-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/2560px-Binance_logo.svg.png" alt="Binance" className="main-icon" />
            <div className="header__menu-left">
              <p href="" className="menu-left__text">Futures</p>
              <p href="" className="menu-left__text">Options</p>
              <p href="" className="menu-left__text">Trading Bots</p>
              <p href="" className="menu-left__text">Data</p>
              <p href="" className="menu-left__text">More</p>
            </div>
          </div>
          <div className="header__box-right">
            <a href="" className="menu-right__link">
              <img src="https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp" alt="profile" className="menu-right__img" />
            </a>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="cover">
          <div className="cover__slider">
            <a href="" className="cover__slider__link">
              <img src="https://media.istockphoto.com/id/483658563/photo/world-currency-rates.jpg?s=612x612&w=0&k=20&c=lI-pobOjAx82xBF_yRDTyYeuUgKRb1WybaL5YGUEt9I=" alt="" className="cover__slider__img" />
            </a>
           </div>
        </section>
      </main>
    </>
  )
}

export default App
