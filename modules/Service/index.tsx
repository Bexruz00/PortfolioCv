"use client"
import { ServiceNavListType } from '@/types/ServiceType'
import React, { useEffect, useRef } from 'react'
import {BasketIcon, ChatIcon, DesctopIcon, ListIcon, MegaphoneIcon, StatisticsIcon} from "../../assets/icons"
import { useTranslations } from 'next-intl'

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

const Service = () => {
  const t = useTranslations("Services") 

  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sliderRef.current) {
      initSlider(sliderRef.current)
    }
  }, [])

  const navList:ServiceNavListType[] = [
    {
      id:1,
      icon: <DesctopIcon/>,
      title: t("service_sitetitle"),
      path: "/website"
    },
    {
      id:2,
      icon: <StatisticsIcon/>,
      title: t("service_markettitle"),
      path: "/about-us"
    },
    {
      id:3,
      icon: <BasketIcon/>,
      title: t("service_commercetitle"),
      path: "/products"
    },
    {
      id:4,
      icon: <ListIcon/>,
      title: t("service_developertitle"),
      path: "/contacts"
    },
    {
      id:5,
      icon: <MegaphoneIcon/>,
      title: t("service_digitaltitle"),
      path: "/contacts"
    },
    {
      id:6,
      icon: <ChatIcon/>,
      title: t("service_mediatitle"),
      path: "/contacts"
    }
  ]

  return (
    <section id='service' className="service" aria-labelledby="service-label">
      <div className="containers">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">{t("service_subtitle")}</p>
            <h2 className="h2 section-title" id="service-label">{t("service_title")}</h2>
          </div>
          <p className="section-text">{t("service_about")}</p>
        </div>
        <div className="slider" data-slider ref={sliderRef}>
          <ul className="slider-container service-list" data-slider-container>
            {navList.map( (item:ServiceNavListType) => (
              <li className="slider-item" data-slider-item key={item.id}>
                <div className="service-card">
                  <div className="card-icon">{item.icon}</div>
                  <h3 className="h3 card-title">{item.title}</h3>
                  <p className="card-text">{t("service_card_subtitle")}</p>
                  <span className="text-lg card-number">{String(item.id + 1).padStart(2, '0')}</span>
                  <a href={item.path} className="layer-link" aria-label={`More about ${item.title}`}></a>
                </div>
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

      </div>
    </section>
  )
}

export default Service
