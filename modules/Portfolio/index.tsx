"use client"
import { Link } from '@/i18n/navigation'
import { PortfolioNavListType } from '@/types/PortfolioType'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const initSlider = function (currentSlider: HTMLElement) {
  const sliderContainer = currentSlider.querySelector("[data-slider-container]") as HTMLElement
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]") as HTMLElement
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]") as HTMLElement

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"))
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems

  let currentSlidePos = 0

  const moveSliderItem = () => {
    sliderContainer.style.transform = `translateX(-${(sliderContainer.children[currentSlidePos] as HTMLElement).offsetLeft}px)`
  }

  const slideNext = () => {
    const slideEnd = currentSlidePos >= totalSlidableItems
    currentSlidePos = slideEnd ? 0 : currentSlidePos + 1
    moveSliderItem()
  }

  const slidePrev = () => {
    currentSlidePos = currentSlidePos <= 0 ? totalSlidableItems : currentSlidePos - 1
    moveSliderItem()
  }

  sliderNextBtn.addEventListener("click", slideNext)
  sliderPrevBtn.addEventListener("click", slidePrev)

  if (totalSlidableItems <= 0) {
    sliderNextBtn.style.display = 'none'
    sliderPrevBtn.style.display = 'none'
  }

  currentSlider.addEventListener("wheel", function (event: WheelEvent) {
    if (event.shiftKey && event.deltaY > 0) slideNext()
    if (event.shiftKey && event.deltaY < 0) slidePrev()
  })

  window.addEventListener("resize", () => {
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"))
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems
    moveSliderItem()
  })
}

const Portfolio = () => {
  const t = useTranslations("Portfolio")
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sliderRef.current) {
      initSlider(sliderRef.current)
    }
  }, [])

  const navList:PortfolioNavListType[] = [
    {
      id:1,
      image: <Image src={"/portfolio-1.jpg"} alt='portfolio' width={600} height={600} className="img-cover" loading="lazy"/>,
      title: "Ashyo. 001",
      path: "https://ashiyo.vercel.app/"
    },
    {
      id:2,
      image: <Image src={"/portfolio-2.jpg"} alt='portfolio' width={600} height={600} className="img-cover" loading="lazy"/>,
      title: "Intex. 002",
      path: "https://intex-three.vercel.app/"
    },
    {
      id:3,
      image: <Image src={"/portfolio-3.jpg"} alt='portfolio' width={600} height={600} className="img-cover" loading="lazy"/>,
      title: "Admin Panel. 003",
      path: "https://admin-panel-eight-eosin.vercel.app/"
    },
    {
      id:4,
      image: <Image src={"/portfolio-4.jpg"} alt='portfolio' width={600} height={600} className="img-cover" loading="lazy"/>,
      title: "Twitter. 004",
      path: "https://twitter-gamma-five.vercel.app/"
    },
    {
      id:5,
      image: <Image src={"/portfolio-5.jpg"} alt='portfolio' width={600} height={600} className="img-cover" loading="lazy"/>,
      title: "Moon. 005",
      path: "https://moon-two-theta.vercel.app/"
    },
    {
      id:6,
      image: <Image src={"/portfolio-6.jpg"} alt='portfolio' width={600} height={600} className="img-cover" loading="lazy"/>,
      title: "Students. 006",
      path: "https://students-rouge.vercel.app/"
    }
  ]

  return (
    <section id='portfolio' className="portfolio" aria-labelledby="portfolio-label">
    <div className="title-wrapper containers">
      <div>
        <p className="section-subtitle" id="portfolio-label">{t("portfolio_subtitle")}</p>
        <h2 className="h2 section-title">{t("portfolio_title")}</h2>
      </div>

      <p className="section-text">{t("portfolio_info")}</p>
    </div>

    <div className="slider" data-slider ref={sliderRef}>
      <ul className="slider-container" data-slider-container>
      {navList.map( (item:PortfolioNavListType) => (
          <li className="slider-item" key={item.id}>
            <Link href={item.path} target="_blank" rel="noopener noreferrer">
              <div className="portfolio-card img-holder">
                {item.image}
                <div className="card-content">
                  <h3 className="h3 card-title">{item.title}</h3>
                  <p className="card-text">Website Developer</p>
                </div>
              </div>
            </Link>
          </li>
      ))}
      </ul>

      <div className="slider-controls">
        <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item">
          <div className="line"></div>
          <div className="arrow"></div>
        </button>

        <button className="slider-control next" data-slider-next aria-label="Slide to next item">
          <div className="line"></div>
          <div className="arrow"></div>
        </button>
      </div>

    </div>

  </section>
  )
}

export default Portfolio