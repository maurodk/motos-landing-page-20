import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Zap, Play, ChevronDown, TrendingUp, Award, Globe, Clock, Users, Bike, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-white/90 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-900/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,81,160,0.05),transparent_70%)]"></div>
      </div>

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white/80 dark:from-gray-900/20 dark:via-gray-900/60 dark:to-gray-900/80"></div>
        
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop')",
            filter: "brightness(0.8) contrast(1.1)"
          }}
        ></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="block text-blue-600 dark:text-blue-400">
                VELOCIDADE
              </span>
              <span className="block text-blue-700 dark:text-blue-300">
                É LIBERDADE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra a adrenalina pura com nossa coleção exclusiva de motocicletas. 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> Cada curva é uma nova aventura.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-600/40" 
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
              className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Ver em Ação
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current mr-1" />
                <span className="text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">4.9</span>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Avaliação dos Clientes</p>
            </div>
            <div className="text-center group cursor-pointer bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300 mb-2">500+</div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Motos Vendidas</p>
            </div>
            <div className="text-center group cursor-pointer bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300 mb-2">15+</div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Anos de Experiência</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
            Serviços Especializados
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Manutenção profissional para sua motocicleta com qualidade garantida e técnicos especializados
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 group-hover:rotate-12 transition-all duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">Revisão Preventiva</h3>
              <p className="text-gray-600 text-sm">Verificação completa para máximo desempenho</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 group-hover:rotate-12 transition-all duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">Sistema Elétrico</h3>
              <p className="text-gray-600 text-sm">Diagnóstico e reparo especializado</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 group-hover:rotate-12 transition-all duration-300">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">Motor</h3>
              <p className="text-gray-600 text-sm">Manutenção e ajustes de motor</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 group-hover:rotate-12 transition-all duration-300">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">Sistema de Freios</h3>
              <p className="text-gray-600 text-sm">Segurança e performance garantidas</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="group bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-600/40" 
            asChild
          >
            <Link to="/servicos">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Motos Populares Section */}
      <section className="relative py-24 bg-gradient-to-b from-white/80 to-blue-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
              Motos Populares
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Os modelos mais procurados pelos nossos clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {motosPopulares.map((moto, index) => (
              <Card key={moto.id} className="group bg-white/80 backdrop-blur-sm border border-blue-200 hover:border-blue-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-500 hover:transform hover:scale-105">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={moto.imagem} 
                    alt={moto.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button size="sm" variant="ghost" className="bg-white/80 backdrop-blur-sm text-red-600 hover:bg-red-600 hover:text-white rounded-full w-10 h-10 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-white/80 backdrop-blur-sm text-blue-600 hover:bg-blue-600 hover:text-white rounded-full w-10 h-10 p-0" asChild>
                      <Link to={`/moto/${moto.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {moto.categoria}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300 mb-1">
                      {moto.nome}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{moto.marca}</p>
                    <p className="text-blue-700 text-sm italic">{moto.descricao}</p>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {moto.cilindrada}
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      {moto.potencia}
                    </span>
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {moto.preco}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/30 group" 
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
      <section className="relative py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-blue-600">
              Mercado em Movimento
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              O mercado de motocicletas no Brasil continua em crescimento acelerado
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200 group-hover:border-red-300 group-hover:shadow-lg transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-blue-600 mb-2">+23%</div>
                <p className="text-gray-600 text-sm">Crescimento anual</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-blue-600 mb-2">2.1M</div>
                <p className="text-gray-600 text-sm">Vendas no país</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-blue-600 mb-2">#1</div>
                <p className="text-gray-600 text-sm">Em satisfação</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200 group-hover:border-red-300 group-hover:shadow-lg transition-all duration-300">
                <Users className="h-8 w-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-blue-600 mb-2">50K+</div>
                <p className="text-gray-600 text-sm">Clientes ativos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative py-20 bg-gradient-to-b from-blue-50/60 to-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
                15 Anos Dominando as Estradas
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Desde 2009, a MotoSpeed tem sido pioneira em trazer as melhores motocicletas para o mercado brasileiro. 
                Nossa paixão por duas rodas nos move a buscar constantemente a excelência.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Atendimento 24/7 em todo território nacional</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Certificação ISO 9001 em qualidade</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Mais de 50.000 motociclistas satisfeitos</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1558264673-3dad0b3d5b85?w=600&h=400&fit=crop" 
                alt="Motociclista na estrada" 
                className="relative rounded-3xl w-full h-auto shadow-2xl border border-blue-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="relative py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
            Tecnologia de Ponta
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Nossas motocicletas incorporam as mais avançadas tecnologias do mercado mundial, 
            proporcionando uma experiência de pilotagem incomparável.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 group-hover:rotate-12 transition-all duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">Injeção Eletrônica</h3>
              <p className="text-gray-600 text-sm">Sistema avançado para máximo desempenho e economia</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 group-hover:rotate-12 transition-all duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">Freios ABS</h3>
              <p className="text-gray-600 text-sm">Segurança máxima em todas as condições</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 group-hover:rotate-12 transition-all duration-300">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">GPS Integrado</h3>
              <p className="text-gray-600 text-sm">Navegação inteligente e conectividade total</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 group-hover:rotate-12 transition-all duration-300">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-2">Controle de Tração</h3>
              <p className="text-gray-600 text-sm">Estabilidade e controle em qualquer terreno</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-red-600">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Pronto para a Aventura?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore nosso catálogo e encontre a moto que vai mudar sua vida
          </p>
          <Button 
            size="lg" 
            className="group bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-full text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl" 
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
      <footer id="contato" className="relative bg-white/90 backdrop-blur-sm border-t border-blue-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center mb-6">
                <Bike className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-600">
                  MotoSpeed
                </h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Transformando sonhos em realidade sobre duas rodas há mais de 15 anos.
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center">
                  <span className="text-blue-600 mr-2">📍</span>
                  Av. das Motos, 1500 - São Paulo, SP
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-2">📞</span>
                  (11) 9999-8888
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-2">✉️</span>
                  contato@motospeed.com.br
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-blue-600 mb-6 text-lg">Produtos</h4>
              <ul className="space-y-3">
                <li><Link to="/catalogo" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Catálogo Completo</Link></li>
                <li><a href="/catalogo?categoria=urbana" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Motos Urbanas</a></li>
                <li><a href="/catalogo?categoria=adventure" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Adventure</a></li>
                <li><a href="/catalogo?categoria=esportiva" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Esportivas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-blue-600 mb-6 text-lg">Empresa</h4>
              <ul className="space-y-3">
                <li><a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Blog</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Carreiras</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Investidores</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-blue-600 mb-6 text-lg">Suporte</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Central de Ajuda</a></li>
                <li><a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Contato</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Garantia</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 text-base">
                &copy; 2024 MotoSpeed. Dominando as estradas com estilo.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-base">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-base">
                  Termos de Serviço
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-base">
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
