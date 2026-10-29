import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { useCarrito } from '../context/CarritoContext';

export function ProductGrid() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [searchParams] = useSearchParams();
  const categoriaUrl = searchParams.get('cat');
  
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const { busqueda } = useCarrito();

  useEffect(() => {
    if (categoriaUrl) {
      setCategoriaSeleccionada(categoriaUrl);
    }
  }, [categoriaUrl]);

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

  const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))];

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda =
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada;

    return coincideBusqueda && coincideCategoria;
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
    <>
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm px-3 rounded-pill fw-bold ${
              categoriaSeleccionada === cat
                ? 'btn-warning text-white'
                : 'btn-outline-secondary'
            }`}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <div key={producto.id} className="col">
              <ProductCard producto={producto} onSelect={setProductoSeleccionado} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted fs-5">
              No se encontraron pasteles para los criterios seleccionados.
            </p>
          </div>
        )}
      </div>

      <ProductModal 
        producto={productoSeleccionado} 
        onClose={() => setProductoSeleccionado(null)} 
      />
    </>
  );
}