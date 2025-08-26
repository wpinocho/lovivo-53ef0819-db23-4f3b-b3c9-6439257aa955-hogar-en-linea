import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { toast } from 'sonner';

const Cart = () => {
  const { 
    cartItems, 
    cartOpen, 
    toggleCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    cartTotal 
  } = useStore();

  console.log('Cart rendered, items:', cartItems.length);
  console.log('Cart open:', cartOpen);
  console.log('Cart total:', cartTotal());

  const handleCheckout = () => {
    console.log('Proceeding to checkout');
    toast.success('Redirigiendo al checkout...');
    // Aquí iría la lógica de checkout
  };

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={toggleCart}>
      <div 
        className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="h-full rounded-none border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Carrito de Compras
              <Badge variant="secondary">{cartItems.length}</Badge>
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={toggleCart}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-full">
            {cartItems.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Tu carrito está vacío</p>
                  <Button onClick={toggleCart}>
                    Continuar Comprando
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      
                      <div className="flex-1 space-y-2">
                        <h4 className="font-medium text-sm line-clamp-2">
                          {item.name}
                        </h4>
                        
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-primary">
                            ${item.price}
                          </span>
                          
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            
                            <span className="w-8 text-center text-sm">
                              {item.quantity}
                            </span>
                            
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Cart Summary */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-primary">
                      ${cartTotal().toFixed(2)}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Button onClick={handleCheckout} className="w-full" size="lg">
                      Proceder al Checkout
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={clearCart} 
                      className="w-full"
                    >
                      Vaciar Carrito
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;