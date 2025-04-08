import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  const t = useTranslations("Blog")
  return (
    <section id="blog" className="section blog" aria-labelledby="blog-label">
    <div className="containers">
      <p className="section-subtitle" id="blog-label">{t("blog-subtitle")}</p>
      <h2 className="h2 section-title">{t("blog-title")}</h2>
      <ul className="blog-list">
        <li>
          <div className="blog-card">
            <figure className="card-banner img-holder">
              <Image src={"/blog-1.jpg"} alt='Get Started With Tiktok Ads.' width={700} height={470} className="img-cover" loading="lazy"/>
            </figure>
            <div className="card-content">
              <time className="time" >
                <span className="span text-lg">20</span>
                May 2023
              </time>
              <div>
                <h3 className="h3 card-title">{t("blog-infoTitle")}</h3>
                <p className="card-text">{t("blog-info")}</p>
                <a href="#blog" className="btn has-before">
                  <span className="span">{t("blog-btn")}</span>
                </a>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="blog-card">
            <figure className="card-banner img-holder">
                  <Image src={"/blog-2.jpg"} alt='UX in Ecommerce – 5 things to avoid.' width={700} height={470} className="img-cover" loading="lazy"/>
            </figure>
            <div className="card-content">
              <time className="time flex items-center flex-col">
                <span className="span text-lg">12</span>
                 <span className='whitespace-nowrap'>Oct 2024</span>
              </time>
              <div>
                <h3 className="h3 card-title">{t("blog-informationTitle")}</h3>
                <p className="card-text">{t("blog-information")}</p>
                <a href="#blog" className="btn has-before">
                  <span className="span">{t("blog-btn")}</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </section>
  )
}

export default Blog