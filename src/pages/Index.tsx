import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Zap, Play, ChevronDown, TrendingUp, Award, Globe, Clock, Users, Bike, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesBlock from "@/components/ServicesBlock";

// Motos populares do catálogo
const motosPopulares = [
  {
    id: 2,
    nome: "Adventure Pro 650",
    marca: "RoadMaster",
    categoria: "Adventure",
    preco: "R$ 35.900",
    cilindrada: "650cc",
    potencia: "68 HP",
    imagem: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
    descricao: "A aventura te chama"
  },
  {
    id: 3,
    nome: "Sport R1",
    marca: "VelocityBikes",
    categoria: "Esportiva",
    preco: "R$ 42.000",
    cilindrada: "600cc",
    potencia: "95 HP",
    imagem: "https://images.unsplash.com/photo-1558264673-3dad0b3d5b85?w=400&h=300&fit=crop",
    descricao: "Velocidade pura"
  },
  {
    id: 1,
    nome: "Thunder 300",
    marca: "SpeedBike",
    categoria: "Urbana",
    preco: "R$ 18.500",
    cilindrada: "300cc",
    potencia: "28 HP",
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    descricao: "Perfeita para cidade"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,100,0,0.1),transparent_70%)]"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center group">
              <div className="relative">
                <Bike className="h-10 w-10 text-orange-500 group-hover:text-orange-400 transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur group-hover:bg-orange-400/30 transition-all duration-300"></div>
              </div>
              <h1 className="ml-3 text-3xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                MotoSpeed
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-orange-400 font-semibold relative group">
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/catalogo" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                Catálogo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <a href="#sobre" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#servicos" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contato" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-orange-500/20 transition-all duration-300">
                Entrar
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50" asChild>
                <Link to="/catalogo">Ver Motos</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop')",
            filter: "brightness(0.3) contrast(1.2)"
          }}
        ></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-orange-200 to-red-400 bg-clip-text text-transparent">
                VELOCIDADE
              </span>
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
                É LIBERDADE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra a adrenalina pura com nossa coleção exclusiva de motocicletas. 
              <span className="text-orange-400 font-semibold"> Cada curva é uma nova aventura.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50" 
              asChild
            >
              <Link to="/catalogo">
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explorar Motos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 bg-black/50 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Ver em Ação
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">4.9</span>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Avaliação dos Clientes</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">500+</div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Motos Vendidas</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">15+</div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Anos de Experiência</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-orange-400" />
        </div>
      </section>

      {/* Services Block Section */}
      <div id="servicos">
        <ServicesBlock />
      </div>

      {/* Motos Populares Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Motos Populares
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Os modelos mais procurados pelos nossos clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {motosPopulares.map((moto, index) => (
              <Card key={moto.id} className="group bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 hover:border-orange-500/50 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:transform hover:scale-105">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={moto.imagem} 
                    alt={moto.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button size="sm" variant="ghost" className="bg-black/50 backdrop-blur-sm text-white hover:bg-orange-500/80 rounded-full w-10 h-10 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-black/50 backdrop-blur-sm text-white hover:bg-orange-500/80 rounded-full w-10 h-10 p-0" asChild>
                      <Link to={`/moto/${moto.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {moto.categoria}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mb-1">
                      {moto.nome}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{moto.marca}</p>
                    <p className="text-orange-300 text-sm italic">{moto.descricao}</p>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      {moto.cilindrada}
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      {moto.potencia}
                    </span>
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                      {moto.preco}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 group" 
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
        </div>
      </section>

      {/* Market Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Mercado em Movimento
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              O mercado de motocicletas no Brasil continua em crescimento acelerado
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl p-6 border border-orange-500/30 group-hover:border-orange-500/60 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-2">+23%</div>
                <p className="text-gray-400 text-sm">Crescimento anual</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30 group-hover:border-green-500/60 transition-all duration-300">
                <Globe className="h-8 w-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-2">2.1M</div>
                <p className="text-gray-400 text-sm">Vendas no país</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300">
                <Award className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-2">#1</div>
                <p className="text-gray-400 text-sm">Em satisfação</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300">
                <Users className="h-8 w-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-2">50K+</div>
                <p className="text-gray-400 text-sm">Clientes ativos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  15 Anos Dominando as Estradas
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Desde 2009, a MotoSpeed tem sido pioneira em trazer as melhores motocicletas para o mercado brasileiro. 
                Nossa paixão por duas rodas nos move a buscar constantemente a excelência.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">Atendimento 24/7 em todo território nacional</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">Certificação ISO 9001 em qualidade</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">Mais de 50.000 motociclistas satisfeitos</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-3xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1558264673-3dad0b3d5b85?w=600&h=400&fit=crop" 
                alt="Motociclista na estrada" 
                className="relative rounded-3xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600/10 via-black to-red-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Tecnologia de Ponta
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Nossas motocicletas incorporam as mais avançadas tecnologias do mercado mundial, 
            proporcionando uma experiência de pilotagem incomparável.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Injeção Eletrônica</h3>
              <p className="text-gray-400 text-sm">Sistema avançado para máximo desempenho e economia</p>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Freios ABS</h3>
              <p className="text-gray-400 text-sm">Segurança máxima em todas as condições</p>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GPS Integrado</h3>
              <p className="text-gray-400 text-sm">Navegação inteligente e conectividade total</p>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Controle de Tração</h3>
              <p className="text-gray-400 text-sm">Estabilidade e controle em qualquer terreno</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Pronto para a Aventura?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Explore nosso catálogo e encontre a moto que vai mudar sua vida
          </p>
          <Button 
            size="lg" 
            className="group bg-black text-white hover:bg-gray-900 font-bold px-10 py-4 rounded-full text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl" 
            asChild
          >
            <Link to="/catalogo">
              Ver Catálogo Completo
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="relative bg-gray-900 border-t border-orange-500/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center mb-6">
                <Bike className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  MotoSpeed
                </h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Transformando sonhos em realidade sobre duas rodas há mais de 15 anos.
              </p>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <span className="text-orange-400 mr-2">📍</span>
                  Av. das Motos, 1500 - São Paulo, SP
                </p>
                <p className="flex items-center">
                  <span className="text-orange-400 mr-2">📞</span>
                  (11) 9999-8888
                </p>
                <p className="flex items-center">
                  <span className="text-orange-400 mr-2">✉️</span>
                  contato@motospeed.com.br
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Produtos</h4>
              <ul className="space-y-3">
                <li><Link to="/catalogo" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Catálogo Completo</Link></li>
                <li><a href="/catalogo?categoria=urbana" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Motos Urbanas</a></li>
                <li><a href="/catalogo?categoria=adventure" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Adventure</a></li>
                <li><a href="/catalogo?categoria=esportiva" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Esportivas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Empresa</h4>
              <ul className="space-y-3">
                <li><a href="#sobre" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Carreiras</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Investidores</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Suporte</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Central de Ajuda</a></li>
                <li><a href="#contato" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Contato</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Garantia</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-base">
                &copy; 2024 MotoSpeed. Dominando as estradas com estilo.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-base">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-base">
                  Termos de Serviço
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-base">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
