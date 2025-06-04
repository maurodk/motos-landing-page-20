
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wrench, 
  Zap, 
  Settings, 
  Disc3, 
  Check, 
  Clock, 
  Shield, 
  MessageCircle,
  Calendar
} from 'lucide-react';

const ServicesBlock = () => {
  const [activeService, setActiveService] = useState('preventiva');

  const services = {
    preventiva: {
      title: 'Revisão Preventiva',
      icon: Wrench,
      price: 'R$ 150',
      duration: '2-3 horas',
      warranty: '6 meses',
      items: [
        'Verificação completa do motor',
        'Análise do sistema de freios',
        'Checagem de fluidos e filtros',
        'Inspeção de pneus e suspensão',
        'Teste da bateria e sistema elétrico',
        'Relatório detalhado de condições'
      ]
    },
    eletrica: {
      title: 'Sistema Elétrico',
      icon: Zap,
      price: 'R$ 120',
      duration: '1-2 horas',
      warranty: '3 meses',
      items: [
        'Diagnóstico computadorizado',
        'Teste de bateria e alternador',
        'Verificação de fusíveis',
        'Inspeção de chicotes elétricos',
        'Teste de sistema de ignição',
        'Calibração de sensores'
      ]
    },
    motor: {
      title: 'Motor',
      icon: Settings,
      price: 'R$ 250',
      duration: '3-4 horas',
      warranty: '12 meses',
      items: [
        'Análise de compressão',
        'Troca de óleo e filtros',
        'Limpeza de bicos injetores',
        'Verificação de correias e tensores',
        'Ajuste de válvulas',
        'Teste de performance'
      ]
    },
    freios: {
      title: 'Sistema de Freios',
      icon: Disc3,
      price: 'R$ 180',
      duration: '2 horas',
      warranty: '6 meses',
      items: [
        'Inspeção de pastilhas e discos',
        'Verificação do fluido de freio',
        'Teste do sistema ABS',
        'Ajuste de freio de mão',
        'Sangria do sistema',
        'Teste de frenagem'
      ]
    }
  };

  const currentService = services[activeService as keyof typeof services];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos manutenção completa para sua motocicleta com qualidade profissional e garantia estendida
          </p>
        </div>

        <Card className="bg-gray-800/50 shadow-xl border border-gray-700 overflow-hidden relative z-20 backdrop-blur-sm">
          <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800/80 border-b border-gray-600 rounded-none h-auto p-0 relative z-30">
              {Object.entries(services).map(([key, service]) => {
                const IconComponent = service.icon;
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex flex-col items-center py-6 px-4 rounded-none border-r border-gray-600 last:border-r-0 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-800 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-gray-700 cursor-pointer relative z-40 text-gray-300"
                    style={{
                      '--tw-gradient-from': '#0351A0',
                      '--tw-gradient-to': '#1976D2'
                    } as React.CSSProperties}
                  >
                    <IconComponent className="h-8 w-8 mb-2" style={{ color: '#DE0039' }} />
                    <span className="font-semibold text-sm">{service.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(services).map(([key, service]) => (
              <TabsContent key={key} value={key} className="mt-0 relative z-20">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Conteúdo Principal */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-6">
                        <service.icon className="h-10 w-10 mr-4" style={{ color: '#DE0039' }} />
                        <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                      </div>
                      
                      <p className="text-gray-300 text-lg mb-8">
                        Serviço especializado em {service.title.toLowerCase()} com técnicos certificados e equipamentos de última geração.
                      </p>

                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white mb-4">O que está incluso:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {service.items.map((item, index) => (
                            <div key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Box Lateral */}
                    <div className="lg:col-span-1">
                      <Card className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 border-gray-600 sticky top-8 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="text-center mb-6">
                            <div className="text-3xl font-bold mb-1" style={{ color: '#0351A0' }}>
                              A partir de {service.price}
                            </div>
                            <p className="text-gray-400">Preço pode variar conforme modelo</p>
                          </div>

                          <div className="space-y-4 mb-8">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Clock className="h-5 w-5 text-gray-400 mr-2" />
                                <span className="text-gray-300">Tempo:</span>
                              </div>
                              <span className="font-semibold text-white">{service.duration}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Shield className="h-5 w-5 text-gray-400 mr-2" />
                                <span className="text-gray-300">Garantia:</span>
                              </div>
                              <span className="font-semibold text-white">{service.warranty}</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <Button 
                              className="w-full text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative z-50"
                              style={{ 
                                backgroundColor: '#DE0039',
                                borderColor: '#DE0039'
                              }}
                              onClick={() => window.open('https://wa.me/5511999998888?text=Gostaria de solicitar um orçamento para ' + service.title, '_blank')}
                            >
                              <MessageCircle className="mr-2 h-5 w-5" />
                              Solicitar Orçamento
                            </Button>
                            
                            <Button 
                              variant="outline"
                              className="w-full font-semibold py-3 rounded-lg transition-all duration-300 relative z-50 text-white border-2 hover:text-white"
                              style={{ 
                                borderColor: '#0351A0',
                                color: '#0351A0',
                                backgroundColor: 'transparent'
                              }}
                              onClick={() => window.open('https://wa.me/5511999998888?text=Gostaria de agendar o serviço de ' + service.title, '_blank')}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#0351A0';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              <Calendar className="mr-2 h-5 w-5" />
                              Agendar Serviço
                            </Button>
                          </div>

                          <div className="mt-6 pt-6 border-t border-gray-600">
                            <p className="text-sm text-gray-400 text-center">
                              <Shield className="h-4 w-4 inline mr-1" />
                              Garantia de satisfação ou seu dinheiro de volta
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default ServicesBlock;
