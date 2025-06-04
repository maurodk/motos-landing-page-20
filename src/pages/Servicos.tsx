
import { Button } from "@/components/ui/button";
import { ArrowRight, Bike } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesBlock from "@/components/ServicesBlock";

const Servicos = () => {
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
              <h1 className="ml-3 text-3xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0351A0, #4FC3F7)' }}>
                MotoSpeed
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#0351A0' }}></span>
              </Link>
              <Link to="/catalogo" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                Catálogo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#0351A0' }}></span>
              </Link>
              <Link to="/servicos" className="text-blue-400 font-semibold relative group" style={{ color: '#0351A0' }}>
                Serviços
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500" style={{ backgroundColor: '#0351A0' }}></span>
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
              <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50" style={{ background: 'linear-gradient(to right, #0351A0, #1976D2)' }} asChild>
                <Link to="/catalogo">Ver Motos</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                SERVIÇOS
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0351A0, #1976D2, #0351A0)' }}>
                ESPECIALIZADOS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Manutenção profissional para sua motocicleta com 
              <span className="text-blue-400 font-semibold" style={{ color: '#0351A0' }}> qualidade garantida e técnicos especializados.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
              style={{ background: 'linear-gradient(to right, #0351A0, #1976D2)' }}
              onClick={() => window.open('https://wa.me/5511999998888?text=Gostaria de saber mais sobre os serviços especializados', '_blank')}
            >
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Block */}
      <ServicesBlock />

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
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Produtos</h4>
              <ul className="space-y-3">
                <li><Link to="/catalogo" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Catálogo Completo</Link></li>
                <li><Link to="/catalogo?categoria=urbana" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Motos Urbanas</Link></li>
                <li><Link to="/catalogo?categoria=adventure" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Adventure</Link></li>
                <li><Link to="/catalogo?categoria=esportiva" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Esportivas</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Empresa</h4>
              <ul className="space-y-3">
                <li><Link to="/#sobre" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Sobre Nós</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Carreiras</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Investidores</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Suporte</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Central de Ajuda</a></li>
                <li><Link to="/#contato" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Contato</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Garantia</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-base">
                &copy; 2024 MotoSpeed. Dominando as estradas com estilo.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base">
                  Termos de Serviço
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base">
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

export default Servicos;
