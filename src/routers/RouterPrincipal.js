import React from 'react'
import {Routes, Route, Link, BrowserRouter, NavLink} from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

        <hr/>

        <nav>
            <ul>
                <li>
                    <NavLink 
                        to="/inicio"
                        className={({isActive}) => isActive ? "activado" : ""}>
                            Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/articulos"
                       className={({isActive}) => isActive ? "activado" : ""}>
                            Articulos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contacto" 
                       className={({isActive}) => isActive ? "activado" : ""}>
                            Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>

        <hr/>
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/inicio' element={<Inicio />}/>
            <Route path='/articulos' element={<Articulos />}/>
            <Route path='/contacto' element={<Contacto />}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}
