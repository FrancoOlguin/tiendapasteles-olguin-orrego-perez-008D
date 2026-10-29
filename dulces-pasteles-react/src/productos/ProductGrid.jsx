import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/productos')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className="text-center py-5">Cargando los pasteles de la tienda...</p>;
  }

  return (
    <div className="container py-4">
      <h2 className="text-center text-chocolate fw-bold mb-4">
        🎂 Dulces Pasteles
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {productos.map((prod) => (
          <div className="col" key={prod.id}>
            <ProductCard producto={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}