"use client"
import { GitIcon, InsatgramIcon, TelegramIcon, TelephoneIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React from 'react'

const Footer = () => {
  const t = useTranslations("Footer")
  return (
    <footer id='contact' className="footer">
    <div className="containers">
      <ul className="footer-list">
        <li>
          <p className="h4 footer-list-title">{t("footer_touch")}</p>
        </li>

        <li>
          <a href="mailto:barnoyevbexruz140@gmail.com" className="footer-link">barnoyevbexruz140@gmail.com</a>
          <a href="tel:+998938744408" className="footer-link">+998 93 874 44 08</a>
        </li>

      </ul>
      <ul className="footer-list">
        <li>
          <p className="h4 footer-list-title">{t("footer_location")}</p>
        </li>

        <li>
          <a target="_blank" href="https://www.google.com/maps/place/%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2824799,69.1145594,11z/data=!3m1!4b1!4m6!3m5!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!8m2!3d41.2994958!4d69.2400734!16zL20vMGZzbXk?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" className="footer-link">{t("footer_tashkent")}</a>
          <a target="_blank" href="https://www.google.com/maps/place/%D0%97%D0%B0%D1%80%D0%B0%D1%84%D1%88%D0%B0%D0%BD,+%D0%9D%D0%B0%D0%B2%D0%BE%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.5742121,64.1506805,13z/data=!3m1!4b1!4m6!3m5!1s0x3f582507a6f69129:0xf44ad82cb3da335!8m2!3d41.5684281!4d64.2025495!16s%2Fm%2F0466r18?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" className="footer-link">{t("footer_navai")}</a>
        </li>
      </ul>

      <ul className="social-list">
        <li>
          <a target="_blank" href="https://github.com/Bexruz00" className="social-link">
            <GitIcon/>
          </a>
        </li>

        <li>
          <a target="_blank" href="https://www.instagram.com/b.beka_me/" className="social-link">
            <InsatgramIcon/>
          </a>
        </li>

        <li>
          <a target="_blank" href="https://t.me/Bexruz58" className="social-link">
            <TelegramIcon/>
          </a>
        </li>

        <li>
          <a href="tel:+998934735299" className="social-link">
            <TelephoneIcon/>
          </a>
        </li>
      </ul>

    </div>
  </footer>
  )
}

export default Footer