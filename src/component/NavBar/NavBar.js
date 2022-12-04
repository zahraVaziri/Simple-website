import React from 'react'
import { UserProduct } from '../provider/ProductProvider'

import style from './NavBar.module.css'
const NavBar = () => {
  const products = UserProduct()
  const totalItems=products.filter(p=> p.quantity > 0 ).length
  return (
    <header className={style.navBar}>
      <h2>Fornt Web Hook</h2>
      <span>{totalItems}</span>
    </header>
  )
}

export default NavBar
