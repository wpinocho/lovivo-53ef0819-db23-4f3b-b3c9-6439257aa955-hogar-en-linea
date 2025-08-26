import React from 'react';
import { useStore } from '../store/useStore';
import ProductCard from './ProductCard';
import { Card, CardContent } from './ui/card';
import { Package } from 'lucide-react';

const ProductGrid = () => {
  const { filteredProducts } = useStore();

  console.log('ProductGrid rendered with', filteredProducts.length, 'products');

  if (filteredProducts.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Package className="h-16 w-16 mx-auto text-muted-foreground" />
              <div>
                <h3 className="text-lg font-semibold">No se encontraron productos</h3>
                <p className="text-muted-foreground">
                  Intenta ajustar tus filtros de búsqueda
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;