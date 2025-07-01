import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useCart } from '../context/useCart'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

function Checkout () {
  const { cart } = useCart()

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const nombre = form.nombre.value
    const telefono = form.telefono.value

    createOrder({
      email,
      nombre,
      telefono,
      products: cart,
      time: serverTimestamp()
    })
  }

  return (
    <div className='d-flex justify-content-center mt-5'>
      <Form className='w-50' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="pepo@example.com" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Pepo Perez" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="+5491123434565" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Finalizar compra 😄
        </Button>
      </Form>
    </div>
  )
}

export default Checkout
