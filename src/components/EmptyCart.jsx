import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'

function EmptyCart () {
  const navigate = useNavigate()

  return (
    <div className='d-flex gap-3 flex-column justify-content-center align-items-center mt-5'>
      <h2>No tienes productos en el carrito 😔</h2>
      <Button onClick={() => navigate('/')}>Ver productos</Button>
    </div>
  )
}

export default EmptyCart
