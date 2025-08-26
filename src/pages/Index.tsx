import React, { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { products } from '../data/products';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';

const Index = () => {
  const { setProducts } = useStore();

  useEffect(() => {
    console.log('Index component mounted, loading products');
    setProducts(products);
  }, [setProducts]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Cart />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Sidebar />
          </div>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;