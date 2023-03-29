 import Logo from '../card/imagenes/logo-de-app.jpeg' // asi se importa estatico



  

const prueba = () =>{
  return(
    <div className="container">
      <div className="card">
       <h2>Hola es una prueba</h2>
        <p>Hola esto es una prueba</p>
        <img className='logo1'
          src={Logo}
          />

        
        
       </div>
    </div>
    
  )
}

export default prueba