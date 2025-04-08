import { useTranslations } from 'next-intl'
import React from 'react'

const Skills = () => {
  const t = useTranslations("Skills")
  return (
    <section id="skills" className="section skills" aria-label="our skills">
    <div className="containers">
      <p className="section-subtitle">{t("skills_subtitle")}</p>
      <h2 className="h2 section-title">{t("skills_title")}</h2>
      <div className="skills-wrapper">
        <div>
          <p className="section-text">{t("skills_massage")}</p>
          <p className="section-text">{t("skills_info")}</p>
          <a href="mailto:barnoyevbexruz140@gmail.com" className="btn has-before">info@bexruz.com</a>
        </div>

        <div>
          <ul className="skills-list">
            <li>
              <div className="progress-wrapper">
                <p className="progress-label">HTML</p>
                <data className="progress-value" value="80">80%</data>
              </div>
              <div className="progress-bg">
                <div className="progress w-[70%]"></div>
              </div>
            </li>

            <li>
              <div className="progress-wrapper">
                <p className="progress-label">TalwindCSS</p>
                <data className="progress-value" value="60">60%</data>
              </div>
              <div className="progress-bg">
                <div className="progress w-[60%]"></div>
              </div>
            </li>

            <li>
              <div className="progress-wrapper">
                <p className="progress-label">SCSS</p>
                <data className="progress-value" value="70">70%</data>
              </div>
              <div className="progress-bg">
                <div className="progress w-[65%]"></div>
              </div>
            </li>

            <li>
              <div className="progress-wrapper">
                <p className="progress-label">JAVASCRIPT</p>
                <data className="progress-value" value="50">50%</data>
              </div>
              <div className="progress-bg">
                <div className="progress w-[50%]"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills