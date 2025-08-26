import React from 'react';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const HeroSection = () => {
  console.log('HeroSection rendered');

  const features = [
    {
      icon: Shield,
      title: 'Garantía de Calidad',
      description: 'Productos certificados'
    },
    {
      icon: Truck,
      title: 'Envío Gratis',
      description: 'En compras +$500'
    },
    {
      icon: Star,
      title: 'Mejor Valorado',
      description: '4.8/5 estrellas'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                ✨ Nueva Colección 2024
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforma tu
                <span className="text-primary block">
                  Hogar Ideal
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Descubre nuestra exclusiva colección de muebles y decoración 
                para crear espacios únicos que reflejen tu personalidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Explorar Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8">
                Ver Catálogo
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-4 text-center">
                    <feature.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80"
                alt="Sala de estar moderna y elegante"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay Card */}
              <Card className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Sala Premium</h3>
                      <p className="text-sm text-muted-foreground">Desde $899</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">4.9</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;