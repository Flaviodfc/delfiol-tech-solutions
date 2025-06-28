
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, Facebook, Instagram, Linkedin, Code, Bot, Globe, Users, Briefcase, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da DelFiol Tech.", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              DelFiol Tech
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#team" className="text-slate-700 hover:text-blue-600 transition-colors">Equipe</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contato</a>
          </nav>
          <Button onClick={openWhatsApp} className="bg-green-500 hover:bg-green-600">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
            Tecnologia <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Acessível</span> para
            <br />
            Pequenas e Médias Empresas
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Soluções profissionais em desenvolvimento web, inteligência artificial e consultoria tecnológica. 
            Democratizando o acesso às tecnologias que antes eram exclusivas das grandes corporações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-lg px-8 py-6">
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={openWhatsApp}>
              Falar no WhatsApp
              <MessageCircle className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-slate-600">Soluções completas para acelerar o crescimento do seu negócio</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Desenvolvimento Web</CardTitle>
                <CardDescription className="text-base">
                  Sites modernos, responsivos e otimizados para conversão
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Landing Pages</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />E-commerce</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Aplicações Web</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />SEO Otimizado</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Agentes de IA</CardTitle>
                <CardDescription className="text-base">
                  Automatize processos e melhore a experiência do cliente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Chatbots Inteligentes</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Automação de Vendas</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Análise de Dados</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Suporte 24/7</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-500">
                  Descobrir IA
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Consultoria Tech</CardTitle>
                <CardDescription className="text-base">
                  Estratégia e orientação para sua transformação digital
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Diagnóstico Tecnológico</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Planejamento Digital</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Otimização de Processos</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Treinamento da Equipe</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-500">
                  Consultoria
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Por que escolher a DelFiol Tech?</h2>
            <p className="text-xl text-slate-600 mb-12">
              Somos uma empresa familiar focada em democratizar o acesso às melhores tecnologias. 
              Nossa missão é oferecer soluções profissionais e acessíveis que antes eram exclusivas das grandes corporações.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Atendimento Familiar</h3>
                <p className="text-slate-600">Relacionamento próximo e personalizado com cada cliente</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Soluções Premium</h3>
                <p className="text-slate-600">Qualidade profissional com preços acessíveis</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expertise Técnica</h3>
                <p className="text-slate-600">Equipe especializada em tecnologias modernas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nossa Equipe</h2>
            <p className="text-xl text-slate-600">Conheça os profissionais por trás da DelFiol Tech</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  FC
                </div>
                <CardTitle className="text-xl">Flavio Del Fiol Costa</CardTitle>
                <CardDescription className="text-blue-600 font-medium">CTO & Freelancer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Experiência full stack com foco na solução de problemas através da tecnologia. 
                  Formado em engenharia, pós-graduado em análise e auditoria de sistemas e em psicologia transpessoal.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  LC
                </div>
                <CardTitle className="text-xl">Lucas Del Fiol Costa</CardTitle>
                <CardDescription className="text-purple-600 font-medium">Engenheiro de Software</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Formado em engenharia eletrônica pela POLI e técnico em mecatrônica pela ETEC. 
                  Especialista em desenvolvimento de soluções tecnológicas inovadoras.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  PC
                </div>
                <CardTitle className="text-xl">Paula Del Fiol Costa</CardTitle>
                <CardDescription className="text-green-600 font-medium">Creative Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Mente criativa responsável pela criação e execução de projetos. 
                  Cosplay e prop maker, marketing manager formada em administração.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares com tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6" onClick={openWhatsApp}>
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
              <Mail className="mr-2 w-5 h-5" />
              Enviar E-mail
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Entre em Contato</h2>
              <p className="text-xl text-slate-600">Vamos conversar sobre seu projeto</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                    <span className="text-slate-700">WhatsApp: (11) 99999-9999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-500" />
                    <span className="text-slate-700">contato@delfioltech.com</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Sua Empresa"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Como podemos ajudar você?"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full h-32"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">DelFiol Tech</span>
          </div>
          <p className="text-slate-400 mb-6">
            Democratizando o acesso à tecnologia para pequenas e médias empresas
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 DelFiol Tech. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openWhatsApp}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
