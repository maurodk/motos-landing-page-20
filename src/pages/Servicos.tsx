
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ServicesBlock from "@/components/ServicesBlock";
import Navbar from "@/components/Navbar";

const Servicos = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-black dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block text-blue-600 dark:text-blue-400">
                SERVIÇOS
              </span>
              <span className="block text-blue-600 dark:text-blue-400">
                ESPECIALIZADOS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Manutenção profissional para sua motocicleta com 
              <span className="text-blue-600 font-semibold"> qualidade garantida e técnicos especializados.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
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
      <footer className="relative bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
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
            
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6 text-lg">Produtos</h4>
              <ul className="space-y-3">
                <li><a href="/catalogo" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Catálogo Completo</a></li>
                <li><a href="/catalogo?categoria=urbana" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Motos Urbanas</a></li>
                <li><a href="/catalogo?categoria=adventure" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Adventure</a></li>
                <li><a href="/catalogo?categoria=esportiva" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Esportivas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6 text-lg">Empresa</h4>
              <ul className="space-y-3">
                <li><a href="/#sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Blog</a></li>
                <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Carreiras</a></li>
                <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Investidores</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6 text-lg">Suporte</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Central de Ajuda</a></li>
                <li><a href="/#contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Contato</a></li>
                <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Garantia</a></li>
                <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 dark:text-gray-400 text-base">
                &copy; 2024 MotoSpeed. Dominando as estradas com estilo.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">
                  Termos de Serviço
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-base">
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
