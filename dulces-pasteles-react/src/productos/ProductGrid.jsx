import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { useCarrito } from '../context/CarritoContext';

export function ProductGrid() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { busqueda } = useCarrito();

  useEffect(() => {
    fetch('http://localhost:4000/productos')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error al cargar productos:', err);
        setCargando(false);
      });
  }, []);

  const productosFiltrados = productos.filter((producto) => {
    const termino = busqueda.toLowerCase();
    return (
      producto.nombre.toLowerCase().includes(termino) ||
      producto.categoria.toLowerCase().includes(termino)
    );
  });

  if (cargando) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((producto) => (
          <div key={producto.id} className="col">
            <ProductCard producto={producto} />
          </div>
        ))
      ) : (
        <div className="col-12 text-center py-5">
          <p className="text-muted fs-5">
            No se encontraron pasteles que coincidan con "<strong>{busqueda}</strong>".
          </p>
        </div>
      )}
    </div>
  );
}