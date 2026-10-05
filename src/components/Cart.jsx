// componente del panel del carrito
function Cart({ cart, isOpen, onClose, onRemove }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />

      <aside className={`cart-sidebar ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button className="btn-close" onClick={onClose}>Cerrar</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart-msg">Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                </div>
                <button className="btn-remove" onClick={() => onRemove(item.id)}>
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="btn-checkout">Pagar</button>
          </div>
        )}
      </aside>
    </>
  );
}

export default Cart;
