import './App.css'
import NavBar from './components/Navbar/Navbar'
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a la Tienda de Shimmer Bags"}/>
    </>
      
  )
}

export default App
