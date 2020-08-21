import React from 'react'
import NavBar from '@components/Navbar/Navbar'
//import style from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    //<div className={style.contaner}>
    <div className="">
      <NavBar />
      {children}
      <footer className="contaner">This is the footer</footer>

      <style jsx>{`
        .contaner {
          background-color: red;
        }
      `}</style>
    </div>
  )
}

export default Layout
