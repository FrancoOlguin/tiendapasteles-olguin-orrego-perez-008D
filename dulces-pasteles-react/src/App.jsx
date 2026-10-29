import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductGrid } from './productos/ProductGrid';
import { CarritoVista } from './carrito/CarritoVista';

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh', backgroundColor: '#fff8fa' }}>
      <Header />
      
      <div className="container mb-5">
        <div className="p-5 text-center bg-white rounded shadow-sm border" style={{ minHeight: '220px', backgroundColor: '#fff0f3', borderColor: '#e2d2c1' }}>
          <h2 className="text-chocolate fw-bold">Nuevos Lanzamientos</h2>
          <p className="text-muted">Descubre los últimos pasteles disponibles en nuestra tienda.</p>
        </div>
      </div>

      <main className="container pb-5 flex-grow-1">
        <ProductGrid />
        <hr className="my-5" style={{ borderColor: '#e2d2c1' }} />
        <CarritoVista />
      </main>

      <Footer />
    </div>
  );
}

export default App;