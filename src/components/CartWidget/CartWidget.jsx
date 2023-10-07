import  carrito from './assets/carrito.png'

const CartWidget = ()=>{
    return
    <>
      <div>
        <img src={carrito} alt="carrito-wdiget" />
      </div>
        <button>
            carrito : 0
        </button>
    </>
}
export default CartWidget