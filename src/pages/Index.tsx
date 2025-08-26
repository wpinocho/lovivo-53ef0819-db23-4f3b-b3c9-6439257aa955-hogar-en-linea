import React, { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { products } from '../data/products';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
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
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Productos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección cuidadosamente elegida de muebles y decoración 
            para transformar cada rincón de tu hogar.
          </p>
        </div>
        
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