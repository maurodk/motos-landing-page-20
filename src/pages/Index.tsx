import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Zap, Play, ChevronDown, TrendingUp, Award, Globe, Clock, Users, Bike, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ServicesBlock from "@/components/ServicesBlock";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-800/30 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-red-100 to-pink-200 dark:from-red-900/30 dark:to-pink-800/30 rounded-full opacity-25 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-yellow-900/30 dark:to-orange-800/30 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Background Image with Enhanced Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop')",
            filter: "brightness(0.15) contrast(1.2)"
          }}
        ></div>
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-800/70 to-purple-900/80 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-900/90"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="block text-white drop-shadow-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                VELOCIDADE
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
                É LIBERDADE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg backdrop-blur-sm">
              Descubra a adrenalina pura com nossa coleção exclusiva de motocicletas. 
              <span className="text-cyan-300 font-semibold"> Cada curva é uma nova aventura.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-10 py-5 rounded-full text-lg transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-red-600/50 border-2 border-red-500/20" 
              asChild
            >
              <Link to="/catalogo" className="transition-all duration-500 ease-in-out">
                <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse transition-all duration-300" />
                Ver Motos
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-3 border-white/80 text-white hover:bg-white hover:text-blue-700 font-bold px-10 py-5 rounded-full text-lg transform hover:scale-110 transition-all duration-500 bg-white/10 backdrop-blur-md shadow-2xl hover:shadow-white/30"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-500" />
              Ver em Ação
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer bg-white/15 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-yellow-400 fill-current mr-2 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-4xl font-black text-white group-hover:text-yellow-300 transition-colors duration-300">4.9</span>
              </div>
              <p className="text-gray-200 group-hover:text-white transition-colors duration-300 font-semibold">Avaliação dos Clientes</p>
            </div>
            <div className="text-center group cursor-pointer bg-white/15 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <div className="text-4xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300 mb-4">500+</div>
              <p className="text-gray-200 group-hover:text-white transition-colors duration-300 font-semibold">Motos Vendidas</p>
            </div>
            <div className="text-center group cursor-pointer bg-white/15 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <div className="text-4xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300 mb-4">15+</div>
              <p className="text-gray-200 group-hover:text-white transition-colors duration-300 font-semibold">Anos de Experiência</p>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </div>
      </section>

      {/* Enhanced Motos Populares Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-slate-100 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 dark:from-blue-800/30 dark:to-indigo-700/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-red-200/30 to-pink-300/30 dark:from-red-800/30 dark:to-pink-700/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              <h2 className="text-4xl md:text-5xl font-black">
                Motos Populares
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              Os modelos mais procurados pelos nossos clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {motosPopulares.map((moto, index) => (
              <Card key={moto.id} className="group bg-white/80 dark:bg-gray-800/80 border-2 border-gray-200/50 dark:border-gray-700 hover:border-blue-300/70 dark:hover:border-blue-600 overflow-hidden hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-700 hover:transform hover:scale-105 backdrop-blur-sm rounded-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src={moto.imagem} 
                    alt={moto.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced Hover Actions */}
                  <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button size="sm" variant="ghost" className="bg-white/90 backdrop-blur-md text-red-600 hover:bg-red-600 hover:text-white rounded-full w-12 h-12 p-0 border-2 border-white/50 shadow-lg hover:scale-110 transition-all duration-300">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-white/90 backdrop-blur-md text-blue-600 hover:bg-blue-600 hover:text-white rounded-full w-12 h-12 p-0 border-2 border-white/50 shadow-lg hover:scale-110 transition-all duration-300" asChild>
                      <Link to={`/moto/${moto.id}`}>
                        <Eye className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Enhanced Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-white/20 backdrop-blur-sm">
                    {moto.categoria}
                  </div>
                </div>
                
                <CardContent className="p-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300 mb-2">
                      {moto.nome}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-3">{moto.marca}</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm italic font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">{moto.descricao}</p>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-6 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                    <span className="flex items-center font-medium">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 shadow-sm"></span>
                      {moto.cilindrada}
                    </span>
                    <span className="flex items-center font-medium">
                      <span className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 shadow-sm"></span>
                      {moto.potencia}
                    </span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {moto.preco}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/40 py-3 text-base group border border-red-500/20" 
                    asChild
                  >
                    <Link to={`/moto/${moto.id}`}>
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="sobre" className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-40 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 dark:from-blue-800/20 dark:to-indigo-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-40 w-96 h-96 bg-gradient-to-br from-red-200/20 to-pink-300/20 dark:from-red-800/20 dark:to-pink-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  15 Anos Dominando as Estradas
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mb-8 rounded-full"></div>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                Desde 2009, a MotoSpeed tem sido pioneira em trazer as melhores motocicletas para o mercado brasileiro. 
                Nossa paixão por duas rodas nos move a buscar constantemente a excelência.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center bg-white/60 dark:bg-gray-800/60 p-4 rounded-2xl backdrop-blur-sm border border-blue-200/50 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Atendimento 24/7 em todo território nacional</span>
                </div>
                <div className="flex items-center bg-white/60 dark:bg-gray-800/60 p-4 rounded-2xl backdrop-blur-sm border border-blue-200/50 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Certificação ISO 9001 em qualidade</span>
                </div>
                <div className="flex items-center bg-white/60 dark:bg-gray-800/60 p-4 rounded-2xl backdrop-blur-sm border border-blue-200/50 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Mais de 50.000 motociclistas satisfeitos</span>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 dark:from-blue-600/20 dark:to-indigo-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative bg-white/20 dark:bg-gray-800/20 p-2 rounded-3xl backdrop-blur-sm border border-white/30 dark:border-gray-600/30">
                <img 
                  src="https://images.unsplash.com/photo-1558264673-3dad0b3d5b85?w=600&h=400&fit=crop" 
                  alt="Motociclista na estrada" 
                  className="relative rounded-2xl w-full h-auto shadow-2xl border-4 border-white/50 dark:border-gray-700/50 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Market Stats Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-slate-100 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-cyan-300/30 dark:from-blue-800/30 dark:to-cyan-700/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-red-200/30 to-orange-300/30 dark:from-red-800/30 dark:to-orange-700/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Mercado em Movimento
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              O mercado de motocicletas no Brasil continua em crescimento acelerado
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-200/50 dark:border-red-800/50 group-hover:border-red-300/70 dark:group-hover:border-red-600/70 group-hover:shadow-2xl group-hover:shadow-red-500/20 transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">+23%</div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Crescimento anual</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-200/50 dark:border-blue-800/50 group-hover:border-blue-300/70 dark:group-hover:border-blue-600/70 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3">2.1M</div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Vendas no país</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-200/50 dark:border-green-800/50 group-hover:border-green-300/70 dark:group-hover:border-green-600/70 group-hover:shadow-2xl group-hover:shadow-green-500/20 transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-3">#1</div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Em satisfação</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-200/50 dark:border-purple-800/50 group-hover:border-purple-300/70 dark:group-hover:border-purple-600/70 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-3">50K+</div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Clientes ativos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Innovation Section */}
      <section className="relative py-24 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/70 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-300/20 dark:from-blue-800/20 dark:to-cyan-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-br from-red-200/20 to-pink-300/20 dark:from-red-800/20 dark:to-pink-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Tecnologia de Ponta
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Nossas motocicletas incorporam as mais avançadas tecnologias do mercado mundial, 
              proporcionando uma experiência de pilotagem incomparável.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200/50 dark:border-red-800/50 rounded-3xl p-8 hover:border-red-300/70 dark:hover:border-red-600/70 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-4">Injeção Eletrônica</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Sistema avançado para máximo desempenho e economia</p>
            </div>
            
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-blue-200/50 dark:border-blue-800/50 rounded-3xl p-8 hover:border-blue-300/70 dark:hover:border-blue-600/70 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-4">Freios ABS</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Segurança máxima em todas as condições</p>
            </div>
            
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-green-200/50 dark:border-green-800/50 rounded-3xl p-8 hover:border-green-300/70 dark:hover:border-green-600/70 group-hover:shadow-2xl group-hover:shadow-green-500/20 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">GPS Integrado</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Navegação inteligente e conectividade total</p>
            </div>
            
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-200/50 dark:border-purple-800/50 rounded-3xl p-8 hover:border-purple-300/70 dark:hover:border-purple-600/70 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-700 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-4">Controle de Tração</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Estabilidade e controle em qualquer terreno</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Moved after Innovation Section */}
      <section id="servicos">
        <ServicesBlock />
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-60 right-1/3 w-5 h-5 bg-white/25 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10 w-full py-24">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 drop-shadow-lg">
            Pronto para a Aventura?
          </h2>
          <p className="text-xl text-white/95 mb-12 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Explore nosso catálogo e encontre a moto que vai mudar sua vida
          </p>
          <Button 
            size="lg" 
            className="group bg-white text-blue-700 hover:bg-gray-100 font-black px-12 py-6 rounded-full text-xl transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-white/30 border-4 border-white/20" 
            asChild
          >
            <Link to="/catalogo">
              Ver Catálogo Completo
              <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contato" className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t-4 border-gradient-to-r from-blue-500 to-red-500 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 dark:from-blue-800/20 dark:to-indigo-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-red-200/20 to-pink-300/20 dark:from-red-800/20 dark:to-pink-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-xl mr-4 shadow-lg">
                  <Bike className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  MotoSpeed
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-medium">
                Transformando sonhos em realidade sobre duas rodas há mais de 15 anos.
              </p>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="flex items-center bg-white/60 dark:bg-gray-800/60 p-3 rounded-xl backdrop-blur-sm">
                  <span className="text-2xl mr-3">📍</span>
                  <span className="font-medium">Av. das Motos, 1500 - São Paulo, SP</span>
                </p>
                <p className="flex items-center bg-white/60 dark:bg-gray-800/60 p-3 rounded-xl backdrop-blur-sm">
                  <span className="text-2xl mr-3">📞</span>
                  <span className="font-medium">(11) 9999-8888</span>
                </p>
                <p className="flex items-center bg-white/60 dark:bg-gray-800/60 p-3 rounded-xl backdrop-blur-sm">
                  <span className="text-2xl mr-3">✉️</span>
                  <span className="font-medium">contato@motospeed.com.br</span>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 text-xl">Produtos</h4>
              <ul className="space-y-4">
                <li><Link to="/catalogo" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Catálogo Completo</Link></li>
                <li><a href="/catalogo?categoria=urbana" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Motos Urbanas</a></li>
                <li><a href="/catalogo?categoria=adventure" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Adventure</a></li>
                <li><a href="/catalogo?categoria=esportiva" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Esportivas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 text-xl">Empresa</h4>
              <ul className="space-y-4">
                <li><a href="#sobre" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Blog</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Carreiras</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Investidores</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 text-xl">Suporte</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Central de Ajuda</a></li>
                <li><a href="#contato" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Contato</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Garantia</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg block">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-2 border-gray-200/50 dark:border-gray-700/50 mt-16 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <p className="text-gray-500 dark:text-gray-400 text-base font-medium">
                &copy; 2024 MotoSpeed. Dominando as estradas com estilo.
              </p>
              <div className="flex flex-wrap gap-8">
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1 rounded-lg">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1 rounded-lg">
                  Termos de Serviço
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1 rounded-lg">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
