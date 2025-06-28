import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, Facebook, Instagram, Linkedin, Code, Bot, Globe, Users, Briefcase, Star, ArrowRight, CheckCircle, Loader2, Zap, Rocket, Shield, Cpu, Database, Cloud } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type ContactFormData } from "@/lib/emailjs";

const Index = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, preencha nome, email e mensagem.",
          variant: "destructive"
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Email inválido",
          description: "Por favor, insira um email válido.",
          variant: "destructive"
        });
        return;
      }

      const result = await sendContactEmail(formData);

      if (result.success) {
        toast({
          title: "✅ Mensagem enviada com sucesso!",
          description: "Recebemos sua mensagem e entraremos em contato em breve. Obrigado pelo interesse!"
        });
        
        setFormData({
          name: "",
          email: "",
          company: "",
          message: ""
        });
      } else {
        toast({
          title: "❌ Erro ao enviar mensagem",
          description: result.error || "Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato via WhatsApp.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "❌ Erro ao enviar mensagem",
        description: "Ocorreu um erro inesperado. Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5511919776155?text=Olá! Gostaria de saber mais sobre os serviços da DelFiol Tech.", "_blank");
  };

  const openLinkedIn = (url: string) => {
    window.open(url, "_blank");
  };

  const openEmail = () => {
    window.open("mailto:flaviodfc@gmail.com?subject=Contato DelFiol Tech&body=Olá! Gostaria de saber mais sobre os serviços da DelFiol Tech.", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Partículas de fundo */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="glass fixed top-0 w-full z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse-glow">
              <Code className="w-7 h-7 text-white animate-hologram" />
            </div>
            <span className="text-3xl font-bold holographic-text animate-neon">
              DelFiol Tech
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:glow">Serviços</a>
            <a href="#about" className="text-white/80 hover:text-cyan-400 transition-all duration-300">Sobre</a>
            <a href="#team" className="text-white/80 hover:text-cyan-400 transition-all duration-300">Equipe</a>
            <a href="#contact" className="text-white/80 hover:text-cyan-400 transition-all duration-300">Contato</a>
          </nav>
          <Button onClick={openWhatsApp} className="futuristic-btn bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-float">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Tecnologia <span className="holographic-text animate-gradient">Acessível</span> para
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                Pequenas e Médias Empresas
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Soluções profissionais em <span className="text-cyan-400 font-semibold">desenvolvimento web</span>, 
            <span className="text-purple-400 font-semibold"> inteligência artificial</span> e 
            <span className="text-pink-400 font-semibold"> consultoria tecnológica</span>. 
            Democratizando o acesso às tecnologias que antes eram exclusivas das grandes corporações.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="futuristic-btn bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-xl px-12 py-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
              <Rocket className="mr-3 w-6 h-6" />
              Começar Agora
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="glass border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 text-xl px-12 py-8 rounded-2xl" onClick={openWhatsApp}>
              <MessageCircle className="mr-3 w-6 h-6" />
              Falar no WhatsApp
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 modern-hover">
              <div className="text-4xl font-bold holographic-text">100+</div>
              <div className="text-white/70">Projetos Entregues</div>
            </div>
            <div className="glass rounded-2xl p-6 modern-hover">
              <div className="text-4xl font-bold holographic-text">24/7</div>
              <div className="text-white/70">Suporte Disponível</div>
            </div>
            <div className="glass rounded-2xl p-6 modern-hover">
              <div className="text-4xl font-bold holographic-text">99%</div>
              <div className="text-white/70">Satisfação Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nossos <span className="holographic-text">Serviços</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Soluções completas para acelerar o crescimento do seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Desenvolvimento Web */}
            <Card className="group glass border-cyan-400/20 hover:border-cyan-400/50 modern-hover bg-gradient-to-br from-cyan-500/10 to-blue-600/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Desenvolvimento Web - Programador trabalhando em código moderno"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">
                  Desenvolvimento Web
                </CardTitle>
                <CardDescription className="text-white/70 text-base">
                  Sites modernos, responsivos e otimizados para conversão
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-white/80 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />Landing Pages</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />E-commerce</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />Aplicações Web</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />SEO Otimizado</li>
                </ul>
                <Button className="w-full futuristic-btn bg-gradient-to-r from-cyan-500 to-blue-600">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            {/* IA */}
            <Card className="group glass border-purple-400/20 hover:border-purple-400/50 modern-hover bg-gradient-to-br from-purple-500/10 to-pink-600/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Inteligência Artificial - Robot futurístico e neural networks"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Bot className="w-6 h-6 text-white animate-hologram" />
                  </div>
                </div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                  Agentes de IA
                </CardTitle>
                <CardDescription className="text-white/70 text-base">
                  Automatize processos e melhore a experiência do cliente
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-white/80 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-3" />Chatbots Inteligentes</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-3" />Automação de Vendas</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-3" />Análise de Dados</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-3" />Suporte 24/7</li>
                </ul>
                <Button className="w-full futuristic-btn bg-gradient-to-r from-purple-500 to-pink-600">
                  Descobrir IA
                </Button>
              </CardContent>
            </Card>

            {/* Consultoria */}
            <Card className="group glass border-emerald-400/20 hover:border-emerald-400/50 modern-hover bg-gradient-to-br from-emerald-500/10 to-teal-600/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Consultoria Tecnológica - Executivos em reunião estratégica com tecnologia"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-white group-hover:text-emerald-400 transition-colors">
                  Consultoria Tech
                </CardTitle>
                <CardDescription className="text-white/70 text-base">
                  Estratégia e orientação para sua transformação digital
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-white/80 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />Diagnóstico Tecnológico</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />Planejamento Digital</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />Otimização de Processos</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />Treinamento da Equipe</li>
                </ul>
                <Button className="w-full futuristic-btn bg-gradient-to-r from-emerald-500 to-teal-600">
                  Consultoria
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
              Por que escolher a <span className="holographic-text">DelFiol Tech</span>?
            </h2>
            <p className="text-xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed">
              Somos uma empresa familiar focada em democratizar o acesso às melhores tecnologias. 
              Nossa missão é oferecer soluções profissionais e acessíveis que antes eram exclusivas das grandes corporações.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="glass rounded-2xl p-8 modern-hover group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow group-hover:animate-float">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  Atendimento Familiar
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Relacionamento próximo e personalizado com cada cliente
                </p>
              </div>
              
              <div className="glass rounded-2xl p-8 modern-hover group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow group-hover:animate-float">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  Soluções Premium
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Qualidade profissional com preços acessíveis
                </p>
              </div>
              
              <div className="glass rounded-2xl p-8 modern-hover group">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow group-hover:animate-float">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  Expertise Técnica
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Equipe especializada em tecnologias modernas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nossa <span className="holographic-text">Equipe</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Conheça os profissionais por trás da DelFiol Tech
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Flavio */}
            <Card className="glass border-cyan-400/20 hover:border-cyan-400/50 modern-hover group overflow-hidden">
              <CardHeader className="text-center relative">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold animate-pulse-glow group-hover:animate-float">
                  FC
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">
                  Flavio Del Fiol Costa
                </CardTitle>
                <CardDescription className="text-cyan-400 font-semibold text-lg">
                  CTO Freelancer
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/80 mb-6 leading-relaxed">
                  Experiência full stack com foco na solução de problemas através da tecnologia. 
                  Formado em engenharia, pós-graduado em análise e auditoria de sistemas e em psicologia transpessoal.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full glass border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                  onClick={() => openLinkedIn("https://www.linkedin.com/in/flaviodfc/")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </CardContent>
            </Card>

            {/* Lucas */}
            <Card className="glass border-purple-400/20 hover:border-purple-400/50 modern-hover group overflow-hidden">
              <CardHeader className="text-center relative">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold animate-pulse-glow group-hover:animate-float">
                  LC
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                  Lucas Del Fiol Costa
                </CardTitle>
                <CardDescription className="text-purple-400 font-semibold text-lg">
                  Engenheiro de Software
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/80 mb-6 leading-relaxed">
                  Formado em engenharia eletrônica pela POLI e técnico em mecatrônica pela ETEC. 
                  Especialista em desenvolvimento de soluções tecnológicas inovadoras.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full glass border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
                  onClick={() => openLinkedIn("https://www.linkedin.com/in/lucasdelfiol/")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </CardContent>
            </Card>

            {/* Paula */}
            <Card className="glass border-emerald-400/20 hover:border-emerald-400/50 modern-hover group overflow-hidden">
              <CardHeader className="text-center relative">
                <div className="w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold animate-pulse-glow group-hover:animate-float">
                  PC
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-emerald-400 transition-colors">
                  Paula Del Fiol Costa
                </CardTitle>
                <CardDescription className="text-emerald-400 font-semibold text-lg">
                  Creative Director
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/80 mb-6 leading-relaxed">
                  Mente criativa responsável pela criação e execução de projetos. 
                  Cosplay e prop maker, marketing manager formada em administração.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full glass border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10"
                  onClick={() => openLinkedIn("https://www.linkedin.com/in/pauladelfiol/")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Pronto para Transformar seu <span className="holographic-text">Negócio</span>?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares com tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="futuristic-btn bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-xl px-12 py-8 rounded-2xl" onClick={openWhatsApp}>
              <MessageCircle className="mr-3 w-6 h-6" />
              Falar no WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="glass border-white/30 text-white hover:bg-white/10 text-xl px-12 py-8 rounded-2xl" onClick={openEmail}>
              <Mail className="mr-3 w-6 h-6" />
              Enviar E-mail
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Entre em <span className="holographic-text">Contato</span>
              </h2>
              <p className="text-xl text-white/70">Vamos conversar sobre seu projeto</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-white mb-8">Fale Conosco</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={openWhatsApp}>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse-glow">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold group-hover:text-green-400 transition-colors">WhatsApp</div>
                      <div className="text-white/70">(11) 91977-6155</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={openEmail}>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">E-mail</div>
                      <div className="text-white/70">contato@delfioltech.com</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-xl font-bold text-white mb-6">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" className="glass border-blue-400/50 text-blue-400 hover:bg-blue-400/10">
                      <Facebook className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" className="glass border-pink-400/50 text-pink-400 hover:bg-pink-400/10">
                      <Instagram className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                <h3 className="text-3xl font-bold text-white mb-8">Envie sua Mensagem</h3>
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu Nome *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu E-mail *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Sua Empresa (opcional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Como podemos ajudar você? *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50 h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full futuristic-btn bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Rocket className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
                <p className="text-sm text-white/50 text-center">
                  * Campos obrigatórios
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass border-t border-white/10 py-12 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse-glow">
              <Code className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold holographic-text">DelFiol Tech</span>
          </div>
          <p className="text-white/70 mb-8 text-lg">
            Democratizando o acesso à tecnologia para pequenas e médias empresas
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" className="text-white/60 hover:text-cyan-400">
              <Facebook className="w-6 h-6" />
            </Button>
            <Button variant="ghost" className="text-white/60 hover:text-pink-400">
              <Instagram className="w-6 h-6" />
            </Button>
          </div>
          <p className="text-white/50">
            © 2025 DelFiol Tech. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={openWhatsApp}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 animate-pulse-glow group"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default Index;