import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import EmptyCart from './EmptyCart'

function CartContainer () {
  const { cart, getTotal, eliminarDelCarrito, vaciarCarrito } = useCart()
  const total = getTotal()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <ListGroup className='w-75'>
        {cart.map(prod => (
          <ListGroup.Item key={prod.id} className='d-flex justify-content-between'>
            <p>{prod.nombre} x {prod.count}</p>
            <Button variant='danger' onClick={() => eliminarDelCarrito(prod.id)}>X</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2 className='mt-3'>TOTAL: {total}</h2>
      <Button 
        className='w-75 mt-5'
        onClick={() => vaciarCarrito()}
        variant='danger'
      >
        Vaciar carrito
      </Button>
      <Button 
        className='w-75 mt-3'
        onClick={() => navigate('/checkout')}
      >
        ir al checkout
      </Button>
    </div>
  )
}

export default CartContainer
