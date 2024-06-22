import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import Modal__loginContent from './components/ModalContentComponents/Modal__loginContent'
import Header from './components/Header'

function App() {
  const [isModalActive, setModalActive] = useState(false)

  return (
    <>
      <Modal active={isModalActive} setActive={setModalActive}>
        <Modal__loginContent />
      </Modal>
      <Header isModalActive={isModalActive} setModalActive={setModalActive}/>
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
