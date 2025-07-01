import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router'

function CartWidget () {
  const { getCantidad } = useContext(CartContext)
  const navigate = useNavigate()
  const cantidad = getCantidad()

  return (
    <Button onClick={() => navigate('/cart')}>
      Cart 🛒 {cantidad}
    </Button>
  )
}

export default CartWidget
