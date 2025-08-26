import React from 'react';
import { 
  Grid3X3, 
  Armchair, 
  Palette, 
  Lightbulb, 
  ChefHat, 
  Bath, 
  Shirt,
  Filter
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { categories } from '../data/products';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';

const iconMap = {
  Grid3X3,
  Armchair,
  Palette,
  Lightbulb,
  ChefHat,
  Bath,
  Shirt
};

const Sidebar = () => {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    priceRange, 
    setPriceRange,
    filteredProducts 
  } = useStore();

  console.log('Sidebar rendered, selected category:', selectedCategory);
  console.log('Price range:', priceRange);
  console.log('Filtered products count:', filteredProducts.length);

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Categorías
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const isSelected = selectedCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant={isSelected ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setSelectedCategory(category.id)}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle>Rango de Precio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              max={1000}
              min={0}
              step={10}
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <Badge variant="secondary" className="text-sm">
              {filteredProducts.length} productos encontrados
            </Badge>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;