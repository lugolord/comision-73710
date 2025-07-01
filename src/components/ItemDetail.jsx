import ItemCount from './ItemCount'

function ItemDetail ({ detail }) {
  return (
    <div>
      <p>{detail.nombre}</p>
      <p>{detail.descripcion}</p>
      <ItemCount item={detail} />
    </div>
  )
}

export default ItemDetail
