import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Filter, Search, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-blue-600 dark:text-blue-400 animate-fade-in">
            NOSSO ARSENAL
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Cada moto é uma obra de arte em movimento. Encontre sua próxima paixão.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative animate-slide-in-left">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por modelo ou marca..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Filters and Catalog */}
      <section className="relative py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center animate-slide-in-right">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
                    : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Motorcycles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {filteredMotos.map((moto, index) => (
              <Card 
                key={moto.id} 
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in"
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
                    <Button size="sm" variant="ghost" className="bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 p-0" asChild>
                      <Link to={`/moto/${moto.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {moto.categoria}
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {moto.nome}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {moto.marca}
                      </CardDescription>
                    </div>
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {moto.preco}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {moto.cilindrada}
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      {moto.potencia}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group" 
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
            <div className="text-center py-16 animate-fade-in">
              <div className="text-6xl mb-4">🏍️</div>
              <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">Nenhuma moto encontrada</h3>
              <p className="text-gray-500 dark:text-gray-500">Tente ajustar os filtros ou termo de busca</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                MotoSpeed
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                Transformando sonhos em realidade sobre duas rodas há mais de 15 anos.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p className="flex items-center">
                  <span className="text-red-600 mr-2">📍</span>
                  Av. das Motos, 1500 - São Paulo, SP
                </p>
                <p className="flex items-center">
                  <span className="text-red-600 mr-2">📞</span>
                  (11) 9999-8888
                </p>
                <p className="flex items-center">
                  <span className="text-red-600 mr-2">✉️</span>
                  contato@motospeed.com.br
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Serviços
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/servicos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Manutenção
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Reparos
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Trocas de pneus
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Contato
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/#sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/#contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Redes Sociais
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-gray-300 dark:border-gray-600">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              © 2023 MotoSpeed. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Catalogo;
