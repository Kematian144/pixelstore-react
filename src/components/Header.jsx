// componente de cabecera con el boton del carrito
function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header">
      <h1 className="logo">PixelStore</h1>
      <button className="btn-cart" onClick={onOpenCart}>
        Carrito <span key={cartCount} className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
}

export default Header;
