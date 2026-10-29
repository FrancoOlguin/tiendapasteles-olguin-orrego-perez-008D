import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductGrid } from './productos/ProductGrid';
import { CarritoVista } from './carrito/CarritoVista';
import { Nosotros } from './paginas/Nosotros';
import { Contacto } from './paginas/Contacto';

function Inicio() {
  return (
    <>
      <div className="container mb-5">
        <div className="p-5 text-center bg-white rounded shadow-sm border" style={{ minHeight: '220px', backgroundColor: '#fff0f3', borderColor: '#e2d2c1' }}>
          <h2 className="text-chocolate fw-bold">Nuevos Lanzamientos</h2>
          <p className="text-muted">Descubre los últimos pasteles disponibles en nuestra tienda.</p>
        </div>
      </div>

      <main className="container pb-5 flex-grow-1">
        <ProductGrid />
      </main>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <BrowserRouter>
          <div className="d-flex flex-column" style={{ minHeight: '100vh', backgroundColor: '#fff8fa' }}>
            <Header />
            
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/carrito" element={<div className="container pb-5 flex-grow-1"><CarritoVista /></div>} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;