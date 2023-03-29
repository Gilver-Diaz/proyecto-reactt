import CartWidget from '../cardWidget/CardWidget'
import './nav.css'


const  Navbar = () =>{
  return(
    <nav className="Navbar">
      <h3>E-commerce</h3>
    
    <div className='tarjetas'>
      <button>Calzado</button>
      <button>Ropa</button>
      <button>Bolsos</button>
      <button>Carrito</button>
    </div>

        <CartWidget/>    
     </nav>
  )
}

export default Navbar