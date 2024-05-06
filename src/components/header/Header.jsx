import React from 'react'
import { SiSamsung } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import "./Header.scss"
import { NAV_ITEMS } from '../../static';

const Header = () => {

  let items = NAV_ITEMS?.map((item, id) => (
    <li className='nav__item' key={id}>
        <button href="#" className='nav__link'>{item.title}</button>
    </li>
  ))

  return (
    <header className='header'>
        <nav className='nav'>
            <div className="container nav__container">
                <div className="nav__left">
                    <div>
                        <a href="#">
                            <SiSamsung  className='nav__logo'/>
                        </a>
                    </div>
                    <ul className='nav__list'>
                        {items}
                    </ul>
                </div>
                <div className="nav__right">
                    <ul className='nav__list nav__right-list'>
                        <li className='nav__item'>
                            <button href="#" className='nav__link'>Explore</button>
                        </li>
                        <li className='nav__item'>
                            <button href="#" className='nav__link'>Support</button>
                        </li>
                        <li className='nav__item'>
                            <button href="#" className='nav__link'>For Business</button>
                        </li>
                    </ul>
                    <div className="nav__btns">
                        <button className='nav__btn'>
                            <IoSearchOutline />
                        </button>
                        <button className='nav__btn'>
                            <BsCart2 />
                        </button>
                        <button className='nav__btn'>
                            <CiUser />
                        </button>
                        <button className='nav__bar-btn'>
                            <FaBars />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header