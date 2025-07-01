import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItemList ({ items }) {
  return (
    <Container className='mt-5'>
      <Row>
        {items.map(item => (
          <Col lg={3} key={item.id} className='mb-3'>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ItemList
