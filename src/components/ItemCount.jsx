import { useState } from 'react'
import { useCart } from '../context/useCart'

function ItemCount ({ item }) {
  const [count, setCount] = useState(1)
  const { agregarAlCarrito } = useCart()

  const handleSumar  = () => setCount(count + 1)
  const handleRestar  = () => setCount(count - 1)
  const handleAgregar = () => agregarAlCarrito({...item, count}) 

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>{count}</p>
      <div>
        <button onClick={handleSumar}> + </button>
        <button onClick={handleRestar}> - </button>
        <button onClick={handleAgregar} disabled={count <= 0}>agregar al carrito</button>   
      </div>
    </div>
  )
}

export default ItemCount
