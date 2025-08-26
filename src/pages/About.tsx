import React from 'react';
import { 
  Users, 
  Award, 
  Heart, 
  Truck, 
  Shield, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const About = () => {
  console.log('About page rendered');

  const stats = [
    { number: '50K+', label: 'Clientes Satisfechos' },
    { number: '15+', label: 'Años de Experiencia' },
    { number: '1000+', label: 'Productos Premium' },
    { number: '98%', label: 'Satisfacción Cliente' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Pasión por el Diseño',
      description: 'Cada producto es seleccionado cuidadosamente por nuestro equipo de expertos en diseño de interiores.'
    },
    {
      icon: Shield,
      title: 'Calidad Garantizada',
      description: 'Trabajamos solo con las mejores marcas y ofrecemos garantía extendida en todos nuestros productos.'
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Nuestro equipo de asesores está disponible para ayudarte a crear el hogar de tus sueños.'
    },
    {
      icon: Truck,
      title: 'Entrega Confiable',
      description: 'Envíos seguros y puntuales a toda la región, con instalación profesional incluida.'
    }
  ];

  const team = [
    {
      name: 'María González',
      role: 'Directora de Diseño',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&q=80',
      description: '15 años de experiencia en diseño de interiores'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Gerente de Producto',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80',
      description: 'Especialista en tendencias y calidad de productos'
    },
    {
      name: 'Ana Martínez',
      role: 'Atención al Cliente',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80',
      description: 'Comprometida con la satisfacción del cliente'
    }
  ];

  const achievements = [
    'Mejor Tienda de Decoración 2023',
    'Certificación de Calidad ISO 9001',
    'Premio a la Excelencia en Servicio',
    'Reconocimiento Ambiental Sostenible'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto">
              Sobre CasaShop
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              Creamos hogares que
              <span className="text-primary block">inspiran vida</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Desde 2008, hemos ayudado a miles de familias a transformar sus espacios 
              en hogares únicos y funcionales, combinando diseño excepcional con calidad superior.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Nuestra Historia
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CasaShop nació de la pasión por crear espacios que reflejen la personalidad 
                  y estilo de vida de cada familia. Fundada por un equipo de diseñadores y 
                  expertos en decoración, comenzamos como una pequeña tienda local con un 
                  gran sueño.
                </p>
                
                <p>
                  Hoy, somos líderes en el mercado de decoración y mobiliario para el hogar, 
                  reconocidos por nuestra cuidadosa selección de productos, atención 
                  personalizada y compromiso con la calidad.
                </p>
                
                <p>
                  Cada producto en nuestra tienda es elegido pensando en durabilidad, 
                  funcionalidad y belleza, porque creemos que tu hogar merece lo mejor.
                </p>
              </div>

              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&q=80"
                alt="Nuestra tienda"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              <Card className="absolute -bottom-6 -left-6 bg-background shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Premio 2023</p>
                      <p className="text-sm text-muted-foreground">Mejor Servicio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y nos mantienen comprometidos 
              con la excelencia en todo lo que hacemos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profesionales apasionados dedicados a hacer realidad la visión de tu hogar ideal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Listo para transformar tu hogar?
            </h2>
            
            <p className="text-xl opacity-90">
              Descubre nuestra colección completa y encuentra todo lo que necesitas 
              para crear el espacio perfecto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Ver Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contactar Asesor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;