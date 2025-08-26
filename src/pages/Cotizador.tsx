import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Calculator, 
  Home, 
  Ruler, 
  Palette, 
  DollarSign, 
  FileText,
  CheckCircle,
  Download,
  Mail,
  Phone
} from 'lucide-react';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { toast } from 'sonner';

const cotizacionSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(10, 'Teléfono debe tener al menos 10 dígitos'),
  tipoMueble: z.string().min(1, 'Selecciona un tipo de mueble'),
  material: z.string().min(1, 'Selecciona un material'),
  dimensiones: z.object({
    largo: z.number().min(0.1, 'Largo debe ser mayor a 0'),
    ancho: z.number().min(0.1, 'Ancho debe ser mayor a 0'),
    alto: z.number().min(0.1, 'Alto debe ser mayor a 0'),
  }),
  acabado: z.string().min(1, 'Selecciona un acabado'),
  cantidad: z.number().min(1, 'Cantidad debe ser al menos 1'),
  descripcion: z.string().optional(),
});

type CotizacionForm = z.infer<typeof cotizacionSchema>;

const Cotizador = () => {
  const [cotizacion, setCotizacion] = useState<number | null>(null);
  const [mostrarResumen, setMostrarResumen] = useState(false);

  console.log('Cotizador page rendered');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<CotizacionForm>({
    resolver: zodResolver(cotizacionSchema),
    defaultValues: {
      cantidad: 1,
      dimensiones: {
        largo: 0,
        ancho: 0,
        alto: 0
      }
    }
  });

  const watchedValues = watch();

  const tiposMueble = [
    { value: 'sofa', label: 'Sofá', precio: 800 },
    { value: 'mesa', label: 'Mesa', precio: 400 },
    { value: 'silla', label: 'Silla', precio: 150 },
    { value: 'cama', label: 'Cama', precio: 600 },
    { value: 'armario', label: 'Armario', precio: 1200 },
    { value: 'estanteria', label: 'Estantería', precio: 300 },
    { value: 'escritorio', label: 'Escritorio', precio: 500 },
    { value: 'comoda', label: 'Cómoda', precio: 450 }
  ];

  const materiales = [
    { value: 'madera-pino', label: 'Madera de Pino', multiplicador: 1.0 },
    { value: 'madera-roble', label: 'Madera de Roble', multiplicador: 1.5 },
    { value: 'madera-cedro', label: 'Madera de Cedro', multiplicador: 1.3 },
    { value: 'mdf', label: 'MDF', multiplicador: 0.7 },
    { value: 'melamina', label: 'Melamina', multiplicador: 0.6 },
    { value: 'metal', label: 'Metal', multiplicador: 1.2 }
  ];

  const acabados = [
    { value: 'natural', label: 'Natural', multiplicador: 1.0 },
    { value: 'barnizado', label: 'Barnizado', multiplicador: 1.2 },
    { value: 'lacado', label: 'Lacado', multiplicador: 1.4 },
    { value: 'pintado', label: 'Pintado', multiplicador: 1.1 },
    { value: 'tapizado', label: 'Tapizado', multiplicador: 1.6 }
  ];

  const calcularCotizacion = (data: CotizacionForm) => {
    console.log('Calculating quote with data:', data);
    
    const tipoMueble = tiposMueble.find(t => t.value === data.tipoMueble);
    const material = materiales.find(m => m.value === data.material);
    const acabado = acabados.find(a => a.value === data.acabado);

    if (!tipoMueble || !material || !acabado) return 0;

    const precioBase = tipoMueble.precio;
    const volumen = data.dimensiones.largo * data.dimensiones.ancho * data.dimensiones.alto;
    const factorTamaño = Math.max(1, volumen / 1000); // Factor basado en m³
    
    const precioUnitario = precioBase * material.multiplicador * acabado.multiplicador * factorTamaño;
    const precioTotal = precioUnitario * data.cantidad;

    return Math.round(precioTotal);
  };

  const onSubmit = (data: CotizacionForm) => {
    console.log('Form submitted:', data);
    const precio = calcularCotizacion(data);
    setCotizacion(precio);
    setMostrarResumen(true);
    toast.success('¡Cotización generada exitosamente!');
  };

  const enviarCotizacion = () => {
    console.log('Sending quote via email');
    toast.success('Cotización enviada por email');
  };

  const descargarCotizacion = () => {
    console.log('Downloading quote PDF');
    toast.success('Descargando cotización en PDF');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=800&fit=crop&q=80"
            alt="Taller de carpintería profesional"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              <Calculator className="h-4 w-4 mr-2" />
              Cotizador Profesional
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Cotiza tus Muebles
              <span className="text-primary block">a Medida</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Obtén una cotización personalizada para tus muebles. Especifica dimensiones, 
              materiales y acabados para recibir un presupuesto detallado al instante.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-background/80 backdrop-blur border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Ruler className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Medidas Exactas</h3>
                  <p className="text-muted-foreground">Especifica las dimensiones precisas para tu mueble</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/80 backdrop-blur border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Palette className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Materiales Premium</h3>
                  <p className="text-muted-foreground">Elige entre una amplia gama de materiales de calidad</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/80 backdrop-blur border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Precio Instantáneo</h3>
                  <p className="text-muted-foreground">Recibe tu cotización al momento sin esperas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Detalles de la Cotización
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Información Personal */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Información de Contacto</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre Completo</Label>
                        <Input
                          id="nombre"
                          {...register('nombre')}
                          placeholder="Tu nombre completo"
                        />
                        {errors.nombre && (
                          <p className="text-sm text-destructive mt-1">{errors.nombre.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder="tu@email.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        {...register('telefono')}
                        placeholder="+1 234 567 8900"
                      />
                      {errors.telefono && (
                        <p className="text-sm text-destructive mt-1">{errors.telefono.message}</p>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Especificaciones del Mueble */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Especificaciones del Mueble
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="tipoMueble">Tipo de Mueble</Label>
                        <Select onValueChange={(value) => setValue('tipoMueble', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            {tiposMueble.map((tipo) => (
                              <SelectItem key={tipo.value} value={tipo.value}>
                                {tipo.label} - Desde ${tipo.precio}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.tipoMueble && (
                          <p className="text-sm text-destructive mt-1">{errors.tipoMueble.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="cantidad">Cantidad</Label>
                        <Input
                          id="cantidad"
                          type="number"
                          min="1"
                          {...register('cantidad', { valueAsNumber: true })}
                        />
                        {errors.cantidad && (
                          <p className="text-sm text-destructive mt-1">{errors.cantidad.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Dimensiones */}
                    <div>
                      <Label className="flex items-center gap-2 mb-2">
                        <Ruler className="h-4 w-4" />
                        Dimensiones (cm)
                      </Label>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="largo" className="text-sm">Largo</Label>
                          <Input
                            id="largo"
                            type="number"
                            step="0.1"
                            min="0.1"
                            {...register('dimensiones.largo', { valueAsNumber: true })}
                            placeholder="100"
                          />
                        </div>
                        <div>
                          <Label htmlFor="ancho" className="text-sm">Ancho</Label>
                          <Input
                            id="ancho"
                            type="number"
                            step="0.1"
                            min="0.1"
                            {...register('dimensiones.ancho', { valueAsNumber: true })}
                            placeholder="50"
                          />
                        </div>
                        <div>
                          <Label htmlFor="alto" className="text-sm">Alto</Label>
                          <Input
                            id="alto"
                            type="number"
                            step="0.1"
                            min="0.1"
                            {...register('dimensiones.alto', { valueAsNumber: true })}
                            placeholder="80"
                          />
                        </div>
                      </div>
                      {(errors.dimensiones?.largo || errors.dimensiones?.ancho || errors.dimensiones?.alto) && (
                        <p className="text-sm text-destructive mt-1">Todas las dimensiones son requeridas</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="material">Material</Label>
                        <Select onValueChange={(value) => setValue('material', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el material" />
                          </SelectTrigger>
                          <SelectContent>
                            {materiales.map((material) => (
                              <SelectItem key={material.value} value={material.value}>
                                {material.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.material && (
                          <p className="text-sm text-destructive mt-1">{errors.material.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="acabado" className="flex items-center gap-2">
                          <Palette className="h-4 w-4" />
                          Acabado
                        </Label>
                        <Select onValueChange={(value) => setValue('acabado', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el acabado" />
                          </SelectTrigger>
                          <SelectContent>
                            {acabados.map((acabado) => (
                              <SelectItem key={acabado.value} value={acabado.value}>
                                {acabado.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.acabado && (
                          <p className="text-sm text-destructive mt-1">{errors.acabado.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="descripcion">Descripción Adicional (Opcional)</Label>
                      <Textarea
                        id="descripcion"
                        {...register('descripcion')}
                        placeholder="Describe cualquier detalle especial o requerimiento adicional..."
                        rows={3}
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    <Calculator className="h-5 w-5 mr-2" />
                    {isSubmitting ? 'Calculando...' : 'Generar Cotización'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Resumen y Cotización */}
          <div className="space-y-6">
            {/* Vista Previa */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Vista Previa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {watchedValues.tipoMueble && (
                  <div className="flex justify-between">
                    <span>Tipo:</span>
                    <Badge variant="secondary">
                      {tiposMueble.find(t => t.value === watchedValues.tipoMueble)?.label}
                    </Badge>
                  </div>
                )}
                
                {watchedValues.material && (
                  <div className="flex justify-between">
                    <span>Material:</span>
                    <Badge variant="outline">
                      {materiales.find(m => m.value === watchedValues.material)?.label}
                    </Badge>
                  </div>
                )}
                
                {watchedValues.acabado && (
                  <div className="flex justify-between">
                    <span>Acabado:</span>
                    <Badge variant="outline">
                      {acabados.find(a => a.value === watchedValues.acabado)?.label}
                    </Badge>
                  </div>
                )}

                {watchedValues.dimensiones?.largo > 0 && watchedValues.dimensiones?.ancho > 0 && watchedValues.dimensiones?.alto > 0 && (
                  <div className="flex justify-between">
                    <span>Dimensiones:</span>
                    <span className="text-sm">
                      {watchedValues.dimensiones.largo} × {watchedValues.dimensiones.ancho} × {watchedValues.dimensiones.alto} cm
                    </span>
                  </div>
                )}

                {watchedValues.cantidad > 0 && (
                  <div className="flex justify-between">
                    <span>Cantidad:</span>
                    <Badge>{watchedValues.cantidad}</Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Resultado de Cotización */}
            {mostrarResumen && cotizacion && (
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                    Cotización Generada
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${cotizacion.toLocaleString()}
                    </div>
                    <p className="text-muted-foreground">Precio estimado total</p>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Precio por unidad:</span>
                      <span>${Math.round(cotizacion / (watchedValues.cantidad || 1)).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cantidad:</span>
                      <span>{watchedValues.cantidad}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>${cotizacion.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button onClick={enviarCotizacion} className="w-full" variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar por Email
                    </Button>
                    
                    <Button onClick={descargarCotizacion} className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar PDF
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground text-center">
                    * Precio estimado. La cotización final puede variar según especificaciones adicionales.
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Información de Contacto */}
            <Card>
              <CardHeader>
                <CardTitle>¿Necesitas Ayuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">cotizaciones@casashop.com</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Nuestros expertos están disponibles de lunes a viernes de 9:00 AM a 6:00 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotizador;