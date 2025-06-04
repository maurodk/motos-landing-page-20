import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Share2, Phone, Mail, Star, Shield, Zap, Settings, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";

// Dados simulados das motos (em um app real, isso viria de uma API)
const motosData = {
  1: {
    id: 1,
    nome: "Thunder 300",
    marca: "SpeedBike",
    categoria: "Urbana",
    preco: "R$ 18.500",
    ano: 2024,
    descricao: "A Thunder 300 é perfeita para o uso urbano, combinando economia de combustível com performance adequada para o dia a dia na cidade.",
    imagens: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558663836-ec5b2cf50c9e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop"
    ],
    especificacoes: {
      motor: {
        cilindrada: "300cc",
        potencia: "28 HP",
        torque: "25 Nm",
        combustivel: "Flex",
        arrefecimento: "Líquido"
      },
      performance: {
        velocidadeMaxima: "140 km/h",
        consumo: "32 km/l",
        tanque: "15 litros",
        autonomia: "480 km"
      },
      dimensoes: {
        comprimento: "2.050 mm",
        largura: "760 mm",
        altura: "1.080 mm",
        entreEixos: "1.350 mm",
        peso: "145 kg"
      },
      outros: {
        freiosDianteiros: "Disco 300mm",
        freiosTraseiros: "Disco 240mm",
        abs: "Sim",
        pneuDianteiro: "110/70-17",
        pneuTraseiro: "140/70-17"
      }
    }
  },
  2: {
    id: 2,
    nome: "Adventure Pro 650",
    marca: "RoadMaster", 
    categoria: "Adventure",
    preco: "R$ 35.900",
    ano: 2024,
    descricao: "Desenvolvida para grandes aventuras, a Adventure Pro 650 oferece conforto e robustez para longas viagens e terrenos variados.",
    imagens: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558663836-ec5b2cf50c9e?w=800&h=600&fit=crop"
    ],
    especificacoes: {
      motor: {
        cilindrada: "650cc",
        potencia: "68 HP",
        torque: "65 Nm",
        combustivel: "Gasolina",
        arrefecimento: "Líquido"
      },
      performance: {
        velocidadeMaxima: "180 km/h",
        consumo: "22 km/l",
        tanque: "20 litros",
        autonomia: "440 km"
      },
      dimensoes: {
        comprimento: "2.200 mm",
        largura: "890 mm",
        altura: "1.350 mm",
        entreEixos: "1.450 mm",
        peso: "210 kg"
      },
      outros: {
        freiosDianteiros: "Disco duplo 320mm",
        freiosTraseiros: "Disco 260mm",
        abs: "Sim",
        pneuDianteiro: "110/80-19",
        pneuTraseiro: "150/70-17"
      }
    }
  }
};

const MotoDetalhes = () => {
  const { id } = useParams();
  const motoId = parseInt(id || '0', 10);
  const moto = motosData[motoId as keyof typeof motosData];
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!moto) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏍️</div>
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Moto não encontrada</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Esta moto pode ter sido removida ou o link está incorreto.</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link to="/catalogo">Voltar ao Catálogo</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="pl-0 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <Link to="/catalogo">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Catálogo
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black border border-blue-200 dark:border-blue-500/20">
              <img 
                src={moto.imagens[selectedImage]} 
                alt={moto.nome}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {moto.imagens.map((imagem, index) => (
                <div 
                  key={index} 
                  className={`aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                    selectedImage === index 
                      ? "border-blue-600 shadow-lg shadow-blue-500/30" 
                      : "border-gray-300 dark:border-gray-700 hover:border-blue-500/50"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={imagem} 
                    alt={`${moto.nome} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-2xl p-8 border border-blue-200 dark:border-blue-500/20 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-black text-black dark:text-white mb-3">
                    {moto.nome}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{moto.marca}</span> • {moto.categoria} • {moto.ano}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`rounded-full border-blue-300 dark:border-blue-500/30 hover:border-blue-500 transition-all duration-300 ${
                      isFavorite ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full border-blue-300 dark:border-blue-500/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-all duration-300">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-8">
                {moto.preco}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">{moto.descricao}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-500/10 dark:to-blue-500/10 rounded-xl border border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all duration-300 group">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="font-bold text-lg text-black dark:text-white">{moto.especificacoes.motor.cilindrada}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cilindrada</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-500/10 dark:to-blue-500/10 rounded-xl border border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all duration-300 group">
                  <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="font-bold text-lg text-black dark:text-white">{moto.especificacoes.motor.potencia}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Potência</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-500/10 dark:to-green-500/10 rounded-xl border border-green-200 dark:border-green-500/20 hover:border-green-300 dark:hover:border-green-500/40 transition-all duration-300 group">
                  <Star className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="font-bold text-lg text-black dark:text-white">{moto.especificacoes.performance.consumo}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Consumo</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-500/10 dark:to-purple-500/10 rounded-xl border border-purple-200 dark:border-purple-500/20 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300 group">
                  <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="font-bold text-lg text-black dark:text-white">{moto.especificacoes.dimensoes.peso}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Peso</div>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 group" size="lg">
                  <Phone className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                  Agendar Test Drive
                </Button>
                <Button variant="outline" className="w-full border-blue-300 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-bold py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 group" size="lg">
                  <Mail className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Solicitar Proposta
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-20">
          <h2 className="text-4xl font-black text-center mb-12 text-blue-600 dark:text-blue-400">
            Especificações Técnicas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Motor Card */}
            <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Motor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Cilindrada:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.motor.cilindrada}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Potência:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.motor.potencia}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Torque:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.motor.torque}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Combustível:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.motor.combustivel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Arrefecimento:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.motor.arrefecimento}</span>
                </div>
              </CardContent>
            </Card>

            {/* Performance Card */}
            <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-green-200 dark:border-green-500/20 hover:border-green-300 dark:hover:border-green-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-green-600 dark:text-green-400">Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Vel. Máxima:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.performance.velocidadeMaxima}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Consumo:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.performance.consumo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tanque:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.performance.tanque}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Autonomia:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.performance.autonomia}</span>
                </div>
              </CardContent>
            </Card>

            {/* Dimensões Card */}
            <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-purple-200 dark:border-purple-500/20 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-600 dark:text-purple-400">Dimensões</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Comprimento:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.dimensoes.comprimento}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Largura:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.dimensoes.largura}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Altura:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.dimensoes.altura}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Entre-eixos:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.dimensoes.entreEixos}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Peso:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.dimensoes.peso}</span>
                </div>
              </CardContent>
            </Card>

            {/* Outros Card */}
            <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-orange-200 dark:border-orange-500/20 hover:border-orange-300 dark:hover:border-orange-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-orange-600 dark:text-orange-400">Outros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Freios Diant.:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.outros.freiosDianteiros}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Freios Tras.:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.outros.freiosTraseiros}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">ABS:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.outros.abs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Pneu Diant.:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.outros.pneuDianteiro}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Pneu Tras.:</span>
                  <span className="font-medium text-black dark:text-white">{moto.especificacoes.outros.pneuTraseiro}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Motorcycles */}
        <div className="mt-20 mb-16">
          <h2 className="text-4xl font-black text-center mb-12 text-blue-600 dark:text-blue-400">
            Outras Motos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(motosData)
              .filter(m => m.id !== moto.id)
              .slice(0, 3)
              .map((relatedMoto) => (
                <Card 
                  key={relatedMoto.id} 
                  className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={relatedMoto.imagens[0]} 
                      alt={relatedMoto.nome}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {relatedMoto.categoria}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {relatedMoto.nome}
                        </CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {relatedMoto.marca}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {relatedMoto.preco}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group" 
                      asChild
                    >
                      <Link to={`/moto/${relatedMoto.id}`}>
                        Ver Detalhes
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotoDetalhes;
