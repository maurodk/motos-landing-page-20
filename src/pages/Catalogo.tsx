import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, ArrowRight, Filter, Search, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMotos = motos.filter(moto => {
    const matchesCategory = selectedCategory === "Todas" || moto.categoria === selectedCategory;
    const matchesSearch = moto.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         moto.marca.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["Todas", ...Array.from(new Set(motos.map(moto => moto.categoria)))];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,81,160,0.1),transparent_70%)]"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center group">
              <div className="relative">
                <Bike className="h-10 w-10 text-red-500 group-hover:text-red-400 transition-all duration-300 group-hover:rotate-12" style={{ color: '#DE0039' }} />
                <div className="absolute -inset-2 bg-red-500/20 rounded-full blur group-hover:bg-red-400/30 transition-all duration-300" style={{ backgroundColor: 'rgba(222, 0, 57, 0.2)' }}></div>
              </div>
              <Link to="/" className="ml-3 text-3xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0351A0, #1976D2)' }}>
                MotoSpeed
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#0351A0' }}></span>
              </Link>
              <Link to="/catalogo" className="text-blue-400 font-semibold relative group" style={{ color: '#0351A0' }}>
                Catálogo
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500" style={{ backgroundColor: '#0351A0' }}></span>
              </Link>
              <Link to="/servicos" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#0351A0' }}></span>
              </Link>
              <a href="/#sobre" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#0351A0' }}></span>
              </a>
              <a href="/#contato" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#0351A0' }}></span>
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300">
                Entrar
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50" style={{ background: 'linear-gradient(to right, #0351A0, #1976D2)' }}>
                Contato
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600/20 via-black to-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0351A0, #1976D2, #0351A0)' }}>
              NOSSO ARSENAL
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Cada moto é uma obra de arte em movimento. Encontre sua próxima paixão.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por modelo ou marca..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black/50 border border-blue-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Filters and Catalog */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                    : "border-blue-500/30 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10"
                }`}
                style={selectedCategory === category ? { background: 'linear-gradient(to right, #0351A0, #1976D2)' } : {}}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Motorcycles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMotos.map((moto, index) => (
              <Card 
                key={moto.id} 
                className="group bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 hover:border-blue-500/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={moto.imagem} 
                    alt={moto.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button size="sm" variant="ghost" className="bg-black/50 backdrop-blur-sm text-white hover:bg-red-500/80 rounded-full w-10 h-10 p-0" style={{ backgroundColor: 'rgba(222, 0, 57, 0.8)' }}>
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-black/50 backdrop-blur-sm text-white hover:bg-blue-500/80 rounded-full w-10 h-10 p-0" style={{ backgroundColor: 'rgba(3, 81, 160, 0.8)' }} asChild>
                      <Link to={`/moto/${moto.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(to right, #0351A0, #1976D2)' }}>
                    {moto.categoria}
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300" style={{ color: 'white' }}>
                        {moto.nome}
                      </CardTitle>
                      <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {moto.marca}
                      </CardDescription>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0351A0, #1976D2)' }}>
                      {moto.preco}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" style={{ backgroundColor: '#0351A0' }}></span>
                      {moto.cilindrada}
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2" style={{ backgroundColor: '#DE0039' }}></span>
                      {moto.potencia}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group" 
                    style={{ background: 'linear-gradient(to right, #0351A0, #1976D2)' }}
                    asChild
                  >
                    <Link to={`/moto/${moto.id}`}>
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredMotos.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏍️</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">Nenhuma moto encontrada</h3>
              <p className="text-gray-500">Tente ajustar os filtros ou termo de busca</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 border-t border-blue-500/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center mb-6">
                <Bike className="h-8 w-8 text-red-500 mr-3" style={{ color: '#DE0039' }} />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0351A0, #1976D2)' }}>
                  MotoSpeed
                </h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Transformando sonhos em realidade sobre duas rodas há mais de 15 anos.
              </p>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <span className="text-red-400 mr-2" style={{ color: '#DE0039' }}>📍</span>
                  Av. das Motos, 1500 - São Paulo, SP
                </p>
                <p className="flex items-center">
                  <span className="text-red-400 mr-2" style={{ color: '#DE0039' }}>📞</span>
                  (11) 9999-8888
                </p>
                <p className="flex items-center">
                  <span className="text-red-400 mr-2" style={{ color: '#DE0039' }}>✉️</span>
                  contato@motospeed.com.br
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0351A0, #1976D2)' }}>
                Serviços
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/servicos" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Manutenção
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Reparos
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Trocas de pneus
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0351A0, #1976D2)' }}>
                Contato
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/#sobre" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/#contato" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0351A0, #1976D2)' }}>
                Redes Sociais
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              © 2023 MotoSpeed. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalogo;
