"use client"
import LangConfig from "@/components/LangConfig"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { HeaderNavListType } from "@/types/HeaderTypes"
import { Link } from "@/i18n/navigation"
import { useEffect, useRef, useState } from "react"

const Header = () => {
  
  const t = useTranslations("Header")

  const navbarRef = useRef<HTMLElement>(null)
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(prev => !prev)
    if (navbarRef.current) {
      navbarRef.current.classList.toggle("active")
    }
  }

  useEffect(() => {
    const preloader = document.querySelector("[data-preloader]") as HTMLElement | null
    if (preloader) preloader.classList.add("loaded")
    document.body.classList.add("loaded")

    const header = document.querySelector("[data-header]") as HTMLElement | null;

    window.addEventListener("scroll", () => {
      if (!header) return;
      if (window.scrollY >= 100) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    });
  }, [])

  const navList:HeaderNavListType[] = [
    {
      id:1,
      title: t("home"),
      path: "#home"
    },
    {
      id:2,
      title: t("resume"),
      path: "#skills"
    },
    {
      id:3,
      title: t("service"),
      path: "#service"
    },
    {
      id:4,
      title: t("portfolio"),
      path: "#portfolio"
    },
    {
      id:5,
      title: t("blog"),
      path: "#blog"
    },
    {
      id:6,
      title: t("contact"),
      path: "#contact"
    }
  ]

  return (
    
    <>
      <div className="preloader" data-preloader>
        <div className="circle"></div>
      </div>
      <header id="#home" className="header" data-header>
    <div className="containers">

      <a href="/" className="logo">
        <Image className="w-[170px]" src={"/logo.svg"} alt="Logo" width={170} height={50} priority/>
      </a>

      <div className="flex items-center gap-[10px]">  
        <LangConfig/>
        <button  onClick={handleToggle} className={`nav-toggle-btn ${isActive ? "active" : ""}`} data-nav-toggler data-nav-toggle-btn aria-label="Toggle menu ">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>
      </div>

      <nav className="navbar" data-navbar ref={navbarRef}>
        <ul className="navbar-list">
        {navList.map((item:HeaderNavListType) => 
          <li key={item.id}> <Link className='navbar-link' key={item.id} href={item.path}>{item.title}</Link> </li>
        )}
        </ul>
      </nav>


    </div>
      </header>
    </>
  )

}

export default Header