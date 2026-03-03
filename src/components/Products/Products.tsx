import { useEffect, useRef } from 'react';
import { products } from '../../constants';
import './Products.css';

const Products = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="products-section">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="product-card fade-in"
            style={{ transitionDelay: `${(index % 4) * 100}ms` }}
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
