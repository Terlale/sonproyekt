import React from 'react'
import MovingText from 'react-moving-text'

const header = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.bakuelectronics.az/assets/cache_image/products/61074/apple-airpods-2-white-1_260x220_172.jpg" />
      <MovingText
      type="fadeInFromTop"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
      <p>Paltaryuyan</p>
    </MovingText>
    <MovingText
      type="fadeInFromBottom"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
      <small>1550 AZN | Razilasma yolu ile</small>
    </MovingText>
    </div>
    <div className="carousel-item">
      <img src="https://www.bakuelectronics.az/assets/cache_image/products/96837/6905-terra-1_260x220_172.jpg" />
    </div>
    <div className="carousel-item">
      <img src="https://www.bakuelectronics.az/assets/cache_image/products/7685/1_260x220_172.jpg" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default header