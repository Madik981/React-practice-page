import "./Header.css"

const Header = ({isModalActive, setModalActive}) => {
    return(
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
            <div onClick={() => {setModalActive(true)}} className="menu-right__link">
              <img src="https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp" alt="profile" className="menu-right__img" />
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header