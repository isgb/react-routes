import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <p>Está página no existe</p>
        <Link to='/inicio'>Vuelve al inicio</Link>
    </div>
  )
}
