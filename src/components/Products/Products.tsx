import { products } from '../../constants';
import './Products.css';

const Products = () => {
  return (
    <section id="products" className="products-section">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
          >
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                loading="lazy"
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
