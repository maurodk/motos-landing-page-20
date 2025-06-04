import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, Users, Wrench, Star, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ServicesBlock from "@/components/ServicesBlock";
import ScrollToTop from "@/components/ScrollToTop";

const testimonials = [
  {
    id: 1,
    name: "Ricardo Oliveira",
    title: "Entusiasta de Motos",
    testimonial: "A MotoSpeed me ajudou a encontrar a moto dos meus sonhos. O atendimento foi excelente e a variedade de modelos é impressionante!",
    rating: 5,
  },
  {
    id: 2,
    name: "Fernanda Souza",
    title: "Motociclista Urbana",
    testimonial: "Serviço de manutenção impecável! Minha moto está sempre pronta para rodar com segurança e desempenho.",
    rating: 4,
  },
  {
    id: 3,
    name: "Carlos Pereira",
    title: "Aventureiro Off-Road",
    testimonial: "Equipe especializada e peças de alta qualidade. Confio na MotoSpeed para preparar minha moto para as trilhas mais desafiadoras.",
    rating: 5,
  },
];

const services = [
  {
    id: 1,
    title: "Manutenção Preventiva",
    description: "Mantenha sua moto sempre em dia com nossos serviços de manutenção preventiva. Troca de óleo, filtros, fluidos e muito mais.",
    icon: Wrench,
  },
  {
    id: 2,
    title: "Customização",
    description: "Deixe sua moto com a sua cara! Oferecemos serviços de customização para todos os estilos e modelos.",
    icon: Star,
  },
  {
    id: 3,
    title: "Revisão Completa",
    description: "Diagnóstico completo da sua moto com equipamentos de última geração. Identificamos e corrigimos qualquer problema.",
    icon: Clock,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-blue-600 dark:text-blue-400 animate-fade-in">
            ENCONTRE A MOTO IDEAL
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Acelere seus sonhos com a MotoSpeed. As melhores motos e os melhores serviços em um só lugar.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-3 px-8 transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/30 animate-slide-in-left" asChild>
            <Link to="/catalogo">
              Ver Catálogo <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="relative py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 animate-fade-in">
              Nossos Serviços
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg animate-fade-in-up">
              Oferecemos uma ampla gama de serviços para cuidar da sua moto.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-in-right">
            {services.map((service) => (
              <ServicesBlock key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 animate-fade-in">
              O que nossos clientes dizem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg animate-fade-in-up">
              Confira os depoimentos de quem já experimentou a MotoSpeed.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-in-left">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {testimonial.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {testimonial.testimonial}
                  </p>
                  <div className="flex items-center">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star key={index} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 animate-fade-in">
              Entre em contato
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg animate-fade-in-up">
              Estamos prontos para atender você.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 animate-slide-in-left">
              <p className="text-gray-700 dark:text-gray-300">
                Estamos localizados em São Paulo, prontos para receber você e sua moto.
              </p>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                <p className="text-gray-700 dark:text-gray-300">
                  Av. das Motos, 1500 - São Paulo, SP
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <p className="text-gray-700 dark:text-gray-300">
                  (11) 9999-8888
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <p className="text-gray-700 dark:text-gray-300">
                  contato@motospeed.com.br
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Formulário de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                        Nome:
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                        Email:
                      </label>
                      <input
                        type="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                        placeholder="Seu email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                        Mensagem:
                      </label>
                      <textarea
                        rows={4}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                        placeholder="Sua mensagem"
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-3 px-6 transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
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
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
