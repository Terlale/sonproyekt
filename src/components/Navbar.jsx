import React, {forwardRef, useRef} from 'react'
import {RiSearchEyeLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'

const Navbar = () => {

    const closeBtnRef = forwardRef()
    const overlayRef = useRef()

    const searchIconRef = forwardRef()

    const closeOverlay = e => {
        const kliklenenElement = e.target
       if (kliklenenElement.classList.contains('cross-icon')){
              overlayRef.current.classList.remove('active')
    }
 }

     const openOverlay = e => {
        const kliklenenElement = e.target
         if (kliklenenElement.classList.contains('s-icon')){
             overlayRef.current.classList.add('active')
         }
     }


  return (
    <>
    <div className="overlay" ref={overlayRef}>
        <ImCross className='cross-icon' ref={closeBtnRef} onClick={closeOverlay} />
        <input className='overlay-search-input' type="search" placeholder='Search in IT Brains Search' />
    </div>
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <img src="https://www.bakuelectronics.az/assets/img/logo.svg" alt="" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="s-input">
        <input type="text" />
        <RiSearchEyeLine className='s-icon' ref={searchIconRef} onClick={openOverlay} />

      </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mx-auto">
            <a class="nav-link active text-danger" aria-current="page" href="#">Kampanyalar</a>
            <a class="nav-link" href="#">Magazalar</a>
            <a class="nav-link" href="#">Balans</a>
            <a class="nav-link" href="#">143 <AiOutlinePhone /></a>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar
