
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Zap, Shield, Users, Bike, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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

      {/* Features Section */}
      <section id="sobre" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Por que MotoSpeed?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mais de 15 anos dominando as estradas com tecnologia de ponta
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  Performance Extrema
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Motores de alta performance que entregam adrenalina pura em cada acelerada
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  Segurança Total
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Sistemas avançados de freios ABS e controle de tração para máxima proteção
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Suporte VIP
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Assistência técnica 24/7 e rede de concessionárias em todo o Brasil
                </p>
              </CardContent>
            </Card>
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
      <footer id="contato" className="bg-black border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Bike className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  MotoSpeed
                </h3>
              </div>
              <p className="text-gray-400">
                Transformando sonhos em realidade sobre duas rodas.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Produtos</h4>
              <ul className="space-y-2">
                <li><Link to="/catalogo" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Catálogo</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Motos Urbanas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Adventure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Esportivas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Central de Ajuda</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Garantia</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 MotoSpeed. Dominando as estradas com estilo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
