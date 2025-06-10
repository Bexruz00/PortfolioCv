"use client"
import { useTranslations } from "next-intl"
import Image from "next/image"

const Hero = () => {
  const t = useTranslations("Hero")
  return (
    <section className="section hero" aria-label="home">
    <div className="containers">
      <div className="hero-content">
        <h1 className="h1 hero-title">{t("name")}</h1>
        <p className="hero-subtitle">{t("name_title")}</p>
        <div className="hero-banner bg-red-200">
          <Image priority src="/hero-banner.jpg" width={800} height={800} alt={"Bexruz Barnoyev"}/>
        </div>
        <p className="section-text">{t("name_subtitle")}</p>
          <a href="/ResumesCv.pdf" className="btn has-before" download={"ResumesCv.pdf"}>
          <span className="span">{t("hero_btn")}</span>
        </a>
      </div>
    </div>
    </section>
  )
}

export default Hero