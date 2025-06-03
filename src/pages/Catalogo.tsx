
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const motos = [
  {
    id: 1,
    nome: "Thunder 300",
    marca: "SpeedBike",
    categoria: "Urbana",
    preco: "R$ 18.500",
    cilindrada: "300cc",
    potencia: "28 HP",
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    nome: "Adventure Pro 650",
    marca: "RoadMaster",
    categoria: "Adventure",
    preco: "R$ 35.900",
    cilindrada: "650cc",
    potencia: "68 HP",
    imagem: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    nome: "Sport R1",
    marca: "VelocityBikes",
    categoria: "Esportiva",
    preco: "R$ 42.000",
    cilindrada: "600cc",
    potencia: "95 HP",
    imagem: "https://images.unsplash.com/photo-1558264673-3dad0b3d5b85?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    nome: "Cruiser Classic",
    marca: "Heritage",
    categoria: "Cruiser",
    preco: "R$ 28.900",
    cilindrada: "500cc",
    potencia: "48 HP",
    imagem: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    nome: "Enduro 250",
    marca: "TrailRider",
    categoria: "Off-Road",
    preco: "R$ 22.500",
    cilindrada: "250cc",
    potencia: "32 HP",
    imagem: "https://images.unsplash.com/photo-1558663836-ec5b2cf50c9e?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    nome: "City Commuter",
    marca: "UrbanRide",
    categoria: "Urbana",
    preco: "R$ 12.900",
    cilindrada: "150cc",
    potencia: "18 HP",
    imagem: "https://images.unsplash.com/photo-1568772585531-50dca7643651?w=400&h=300&fit=crop"
  }
];

const Catalogo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Bike className="h-8 w-8 text-orange-600 mr-2" />
              <Link to="/" className="text-2xl font-bold text-gray-900">MotoSpeed</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Início</Link>
              <Link to="/catalogo" className="text-orange-600 font-medium">Catálogo</Link>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sobre</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contato</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Entrar</Button>
              <Button>Contato</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nosso Catálogo
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Descubra a moto perfeita para seu estilo. Temos opções para todos os perfis de motociclistas.
          </p>
        </div>
      </section>

      {/* Filters and Catalog */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 mb-8 items-center">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" size="sm">Todas</Button>
            <Button variant="outline" size="sm">Urbana</Button>
            <Button variant="outline" size="sm">Adventure</Button>
            <Button variant="outline" size="sm">Esportiva</Button>
            <Button variant="outline" size="sm">Cruiser</Button>
            <Button variant="outline" size="sm">Off-Road</Button>
          </div>

          {/* Motorcycles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motos.map((moto) => (
              <Card key={moto.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={moto.imagem} 
                    alt={moto.nome}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{moto.nome}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">
                        {moto.marca} • {moto.categoria}
                      </CardDescription>
                    </div>
                    <span className="text-lg font-bold text-orange-600">{moto.preco}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{moto.cilindrada}</span>
                    <span>{moto.potencia}</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to={`/moto/${moto.id}`}>
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalogo;
