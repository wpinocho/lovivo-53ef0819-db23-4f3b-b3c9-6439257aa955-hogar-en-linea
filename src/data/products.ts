import { Product, Category } from '../types/product';
import { v4 as uuidv4 } from 'uuid';

export const categories: Category[] = [
  { id: 'all', name: 'Todos', icon: 'Grid3X3' },
  { id: 'furniture', name: 'Muebles', icon: 'Armchair' },
  { id: 'decoration', name: 'Decoración', icon: 'Palette' },
  { id: 'lighting', name: 'Iluminación', icon: 'Lightbulb' },
  { id: 'kitchen', name: 'Cocina', icon: 'ChefHat' },
  { id: 'bathroom', name: 'Baño', icon: 'Bath' },
  { id: 'textiles', name: 'Textiles', icon: 'Shirt' }
];

export const products: Product[] = [
  {
    id: uuidv4(),
    name: 'Sofá Moderno 3 Plazas',
    price: 899.99,
    originalPrice: 1199.99,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop',
    category: 'furniture',
    description: 'Sofá cómodo y elegante perfecto para tu sala de estar. Tapizado en tela de alta calidad.',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    discount: 25
  },
  {
    id: uuidv4(),
    name: 'Mesa de Centro Cristal',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
    category: 'furniture',
    description: 'Mesa de centro moderna con superficie de cristal templado y base de acero inoxidable.',
    rating: 4.2,
    reviews: 89,
    inStock: true
  },
  {
    id: uuidv4(),
    name: 'Lámpara de Pie LED',
    price: 159.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop',
    category: 'lighting',
    description: 'Lámpara de pie con tecnología LED, regulable y con diseño minimalista.',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    discount: 20
  },
  {
    id: uuidv4(),
    name: 'Cojines Decorativos Set x4',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
    category: 'textiles',
    description: 'Set de 4 cojines decorativos en diferentes texturas y colores neutros.',
    rating: 4.3,
    reviews: 156,
    inStock: true
  },
  {
    id: uuidv4(),
    name: 'Espejo Decorativo Redondo',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
    category: 'decoration',
    description: 'Espejo redondo con marco dorado, perfecto para ampliar espacios.',
    rating: 4.4,
    reviews: 92,
    inStock: true
  },
  {
    id: uuidv4(),
    name: 'Juego de Sartenes Antiadherentes',
    price: 189.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop',
    category: 'kitchen',
    description: 'Set de 3 sartenes con recubrimiento antiadherente de cerámica.',
    rating: 4.6,
    reviews: 267,
    inStock: true,
    discount: 24
  },
  {
    id: uuidv4(),
    name: 'Toallas de Baño Premium',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=400&fit=crop',
    category: 'bathroom',
    description: 'Set de toallas de algodón 100% egipcio, ultra absorbentes.',
    rating: 4.8,
    reviews: 189,
    inStock: true
  },
  {
    id: uuidv4(),
    name: 'Planta Artificial Monstera',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=400&fit=crop',
    category: 'decoration',
    description: 'Planta artificial de monstera con maceta incluida, muy realista.',
    rating: 4.1,
    reviews: 74,
    inStock: false
  },
  {
    id: uuidv4(),
    name: 'Silla de Oficina Ergonómica',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
    category: 'furniture',
    description: 'Silla ergonómica con soporte lumbar y reposabrazos ajustables.',
    rating: 4.5,
    reviews: 145,
    inStock: true
  },
  {
    id: uuidv4(),
    name: 'Lámpara Colgante Industrial',
    price: 199.99,
    originalPrice: 279.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop',
    category: 'lighting',
    description: 'Lámpara colgante estilo industrial con acabado en negro mate.',
    rating: 4.3,
    reviews: 98,
    inStock: true,
    discount: 29
  },
  {
    id: uuidv4(),
    name: 'Alfombra Persa Moderna',
    price: 259.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
    category: 'textiles',
    description: 'Alfombra con diseño persa moderno, 200x300cm, resistente y fácil de limpiar.',
    rating: 4.4,
    reviews: 112,
    inStock: true
  },
  {
    id: uuidv4(),
    name: 'Organizador de Cocina Bambú',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop',
    category: 'kitchen',
    description: 'Organizador de utensilios de cocina hecho de bambú sostenible.',
    rating: 4.2,
    reviews: 87,
    inStock: true
  }
];