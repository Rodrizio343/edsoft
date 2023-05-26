import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section class="about-us section-container">
      <h1>¿Quienes somos?</h1>
      <div class="content-wrapper">

        <article class="about-item">
          <div class="image-container">
            <Image src="/images/about-1.jpg" alt="Sobre nosotros" width={300} height={200} placeholder='/images/about-1.jpg'/>
          </div>
          <div>
            <h2>Sobre nosotros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam, neque id tempus consequat, mi nibh luctus nibh, sit amet auctor enim ligula nec arcu. Nulla efficitur elementum euismod. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          </div>
        </article>

        <article class="about-item">
          <div class="image-container">
            <Image src="/images/about-2.jpg" alt="Sobre nosotros" width={300} height={200} placeholder='/images/about-2.jpg'/>
          </div>
          <div>
            <h2>Misión</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam, neque id tempus consequat, mi nibh luctus nibh, sit amet auctor enim ligula nec arcu. Nulla efficitur elementum euismod. In hac habitasse platea dictumst. Pellentesque habitant egestas.</p>
          </div>
        </article>

        <article class="about-item">
          <div class="image-container">
            <Image src="/images/about-3.jpg" alt="Sobre nosotros" width={300} height={200} placeholder='/images/about-3.jpg'/>
          </div>
          <div>
            <h2>Visión</h2>
            <p>Neque id tempus consequat, mi nibh luctus nibh, sit amet auctor enim ligula nec arcu. Nulla efficitur elementum euismod. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          </div>
        </article>

      </div>
    </section>
  )
}

export default AboutUs