import { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const agregarAlCarrito = (prod) => {
    const isInCart = cart.some(item => item.id === prod.id)

    if (isInCart) {
      const productoRepetido = cart.find(item => item.id === prod.id)
      const cartSinElProductoRepetido = cart.filter(item => item.id !== prod.id) 
      
      setCart([...cartSinElProductoRepetido, {...productoRepetido, count: productoRepetido.count + 1}])
    } else {
      setCart([...cart, prod])
    }
  }

  const eliminarDelCarrito = (id) => {
    const carritoActualizado = cart.filter(prod => prod.id !== id)
    setCart(carritoActualizado)
  }

  const vaciarCarrito = () => setCart([])

  const getCantidad = () => {
    const cantidades = cart.map(prod => prod.count)
    const cantidad = cantidades.reduce((acc, current) => acc + current, 0)
    
    return cantidad
  }

  const getTotal = () => {
    const totales = cart.map(prod => prod.count*prod.precio)
    const total = totales.reduce((acc, current) => acc + current, 0)
    
    return total
  }

  return (
    <CartContext.Provider 
      value={{ cart, agregarAlCarrito, getCantidad, getTotal, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
