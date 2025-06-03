import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, ArrowLeft, Heart, Share2, Phone, Mail } from "lucide-react";
import { Link, useParams } from "react-router-dom";

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

  if (!moto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Moto não encontrada</h1>
          <Button asChild>
            <Link to="/catalogo">Voltar ao Catálogo</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Bike className="h-8 w-8 text-orange-600 mr-2" />
              <Link to="/" className="text-2xl font-bold text-gray-900">MotoSpeed</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Início</Link>
              <Link to="/catalogo" className="text-gray-600 hover:text-gray-900">Catálogo</Link>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sobre</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contato</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Entrar</Button>
              <Button>Contato</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" asChild className="pl-0">
            <Link to="/catalogo">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Catálogo
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Images Section */}
          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
              <img 
                src={moto.imagens[0]} 
                alt={moto.nome}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {moto.imagens.slice(1).map((imagem, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src={imagem} 
                    alt={`${moto.nome} ${index + 2}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{moto.nome}</h1>
                  <p className="text-lg text-gray-600">{moto.marca} • {moto.categoria} • {moto.ano}</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="text-3xl font-bold text-orange-600 mb-6">{moto.preco}</div>

              <p className="text-gray-700 mb-6">{moto.descricao}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-lg">{moto.especificacoes.motor.cilindrada}</div>
                  <div className="text-sm text-gray-600">Cilindrada</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-lg">{moto.especificacoes.motor.potencia}</div>
                  <div className="text-sm text-gray-600">Potência</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-lg">{moto.especificacoes.performance.consumo}</div>
                  <div className="text-sm text-gray-600">Consumo</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-lg">{moto.especificacoes.dimensoes.peso}</div>
                  <div className="text-sm text-gray-600">Peso</div>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Agendar Test Drive
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Solicitar Proposta
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Especificações Técnicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Motor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Cilindrada:</span>
                  <span className="font-medium">{moto.especificacoes.motor.cilindrada}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Potência:</span>
                  <span className="font-medium">{moto.especificacoes.motor.potencia}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Torque:</span>
                  <span className="font-medium">{moto.especificacoes.motor.torque}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Combustível:</span>
                  <span className="font-medium">{moto.especificacoes.motor.combustivel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Arrefecimento:</span>
                  <span className="font-medium">{moto.especificacoes.motor.arrefecimento}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Vel. Máxima:</span>
                  <span className="font-medium">{moto.especificacoes.performance.velocidadeMaxima}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Consumo:</span>
                  <span className="font-medium">{moto.especificacoes.performance.consumo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tanque:</span>
                  <span className="font-medium">{moto.especificacoes.performance.tanque}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Autonomia:</span>
                  <span className="font-medium">{moto.especificacoes.performance.autonomia}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dimensões</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Comprimento:</span>
                  <span className="font-medium">{moto.especificacoes.dimensoes.comprimento}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Largura:</span>
                  <span className="font-medium">{moto.especificacoes.dimensoes.largura}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Altura:</span>
                  <span className="font-medium">{moto.especificacoes.dimensoes.altura}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Entre-eixos:</span>
                  <span className="font-medium">{moto.especificacoes.dimensoes.entreEixos}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Peso:</span>
                  <span className="font-medium">{moto.especificacoes.dimensoes.peso}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Outros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Freios Diant.:</span>
                  <span className="font-medium">{moto.especificacoes.outros.freiosDianteiros}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Freios Tras.:</span>
                  <span className="font-medium">{moto.especificacoes.outros.freiosTraseiros}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ABS:</span>
                  <span className="font-medium">{moto.especificacoes.outros.abs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pneu Diant.:</span>
                  <span className="font-medium">{moto.especificacoes.outros.pneuDianteiro}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pneu Tras.:</span>
                  <span className="font-medium">{moto.especificacoes.outros.pneuTraseiro}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotoDetalhes;
