// componente de tarjeta de producto
function ProductCard({ product, index, isInCart, onAdd }) {
  return (
    <article className="product-card" style={{ '--i': index }}>
      <div
        className="product-image"
        style={{ background: `linear-gradient(145deg, ${product.color}, #0f172a)` }}
      />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="platform">{product.platform}</p>
        <p className="price">${product.price}</p>

        {isInCart ? (
          <button className="btn-add in-cart" disabled>
            En el carrito
          </button>
        ) : (
          <button className="btn-add" onClick={() => onAdd(product)}>
            Añadir al carrito
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
