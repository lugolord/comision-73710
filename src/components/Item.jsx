import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router'

function Item ({ item }) {
  const navigate = useNavigate()

  return (
    <Card>
      <Card.Img variant="top" src={item.imagen} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          {item.descripcion}
        </Card.Text>
        <Button 
          variant="primary"
          onClick={() => navigate(`/item/${item.id}`)}
        >
          ver mas
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Item
