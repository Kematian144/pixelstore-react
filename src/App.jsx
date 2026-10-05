import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // funcion de carga de productos desde el json
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/products.json`)
      .then((res) => res.json())
      .then(setProducts)
      .catch((error) => console.error('Error al cargar productos', error));
  }, []);

  // funcion para cerrar el carrito con la tecla Escape
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && setIsCartOpen(false);
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // funcion de agregar al carrito
  const addToCart = (product) => {
    setCart((prev) =>
      prev.some((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  // funcion de eliminar del carrito
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <Header cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
      />

      <main>
        <section className="hero">
          <h2>Descubre los Mejores Videojuegos</h2>
          <p>Juegos de todas las plataformas a los mejores precios.</p>
        </section>

        <section className="catalog-section">
          <h2 className="section-title">Productos Destacados</h2>
          <div className="grid-container">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                isInCart={cart.some((item) => item.id === product.id)}
                onAdd={addToCart}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 PixelStore. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
