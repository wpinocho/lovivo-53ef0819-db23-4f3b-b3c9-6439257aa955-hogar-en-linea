import { create } from 'zustand';
import { Product, CartItem } from '../types/product';

interface StoreState {
  // Cart state
  cartItems: CartItem[];
  cartOpen: boolean;
  
  // Products state
  products: Product[];
  filteredProducts: Product[];
  selectedCategory: string;
  searchQuery: string;
  priceRange: [number, number];
  
  // Cart actions
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  
  // Product actions
  setProducts: (products: Product[]) => void;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setPriceRange: (range: [number, number]) => void;
  filterProducts: () => void;
  
  // Computed values
  cartTotal: () => number;
  cartItemsCount: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  // Initial state
  cartItems: [],
  cartOpen: false,
  products: [],
  filteredProducts: [],
  selectedCategory: 'all',
  searchQuery: '',
  priceRange: [0, 1000],
  
  // Cart actions
  addToCart: (product) => {
    console.log('Adding to cart:', product.name);
    const { cartItems } = get();
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      set({
        cartItems: cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({
        cartItems: [...cartItems, { ...product, quantity: 1 }]
      });
    }
  },
  
  removeFromCart: (productId) => {
    console.log('Removing from cart:', productId);
    set({
      cartItems: get().cartItems.filter(item => item.id !== productId)
    });
  },
  
  updateQuantity: (productId, quantity) => {
    console.log('Updating quantity:', productId, quantity);
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    
    set({
      cartItems: get().cartItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    });
  },
  
  clearCart: () => {
    console.log('Clearing cart');
    set({ cartItems: [] });
  },
  
  toggleCart: () => {
    set({ cartOpen: !get().cartOpen });
  },
  
  // Product actions
  setProducts: (products) => {
    console.log('Setting products:', products.length);
    set({ products, filteredProducts: products });
  },
  
  setSelectedCategory: (category) => {
    console.log('Setting category:', category);
    set({ selectedCategory: category });
    get().filterProducts();
  },
  
  setSearchQuery: (query) => {
    console.log('Setting search query:', query);
    set({ searchQuery: query });
    get().filterProducts();
  },
  
  setPriceRange: (range) => {
    console.log('Setting price range:', range);
    set({ priceRange: range });
    get().filterProducts();
  },
  
  filterProducts: () => {
    const { products, selectedCategory, searchQuery, priceRange } = get();
    console.log('Filtering products with:', { selectedCategory, searchQuery, priceRange });
    
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    console.log('Filtered products count:', filtered.length);
    set({ filteredProducts: filtered });
  },
  
  // Computed values
  cartTotal: () => {
    return get().cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  cartItemsCount: () => {
    return get().cartItems.reduce((count, item) => count + item.quantity, 0);
  }
}));