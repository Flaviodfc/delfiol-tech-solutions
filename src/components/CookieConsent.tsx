import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Cookie, Shield, X } from "lucide-react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Mostrar o aviso após 2 segundos
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const dismissConsent = () => {
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-full duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl border border-white/20 p-6 shadow-2xl backdrop-blur-xl bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Ícone */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-2">
                  🍪 Consentimento de Cookies
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. 
                  Ao continuar navegando, você concorda com nossa{" "}
                  <button 
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors"
                  >
                    Política de Privacidade
                  </button>.
                </p>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={dismissConsent}
                  className="glass border-white/30 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-4 h-4 mr-2" />
                  Dispensar
                </Button>
                <Button
                  onClick={acceptCookies}
                  className="futuristic-btn bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all"
                >
                  <Cookie className="w-4 h-4 mr-2" />
                  Aceitar Cookies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Política de Privacidade */}
      <Dialog open={showPrivacyModal} onOpenChange={setShowPrivacyModal}>
        <DialogContent className="glass border-cyan-400/20 max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <DialogTitle className="text-2xl font-bold text-white">
                Política de Privacidade
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="space-y-6 text-white/80 leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">1. Informações que Coletamos</h3>
              <p className="mb-3">
                A DelFiol Tech coleta informações quando você visita nosso site, entra em contato conosco ou utiliza nossos serviços:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informações de contato (nome, e-mail, telefone, empresa)</li>
                <li>Dados de navegação (páginas visitadas, tempo de permanência, dispositivo utilizado)</li>
                <li>Informações fornecidas em formulários de contato</li>
                <li>Cookies e tecnologias similares para melhorar a experiência do usuário</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">2. Como Utilizamos suas Informações</h3>
              <p className="mb-3">Utilizamos as informações coletadas para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder às suas solicitações e fornecer suporte</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Enviar informações relevantes sobre nossos serviços (com seu consentimento)</li>
                <li>Analisar o desempenho do site e otimizar o conteúdo</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">3. Cookies e Tecnologias Similares</h3>
              <p className="mb-3">
                Utilizamos cookies para melhorar sua experiência em nosso site. Os cookies são pequenos arquivos de texto 
                armazenados em seu dispositivo que nos ajudam a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lembrar suas preferências e configurações</li>
                <li>Analisar como você utiliza nosso site</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Fornecer funcionalidades de redes sociais</li>
              </ul>
              <p className="mt-3">
                Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">4. Compartilhamento de Informações</h3>
              <p className="mb-3">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                <li>Para proteger nossos direitos e segurança</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">5. Segurança dos Dados</h3>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações 
                contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia, controles 
                de acesso e monitoramento contínuo para garantir a segurança dos seus dados.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">6. Seus Direitos</h3>
              <p className="mb-3">Você tem o direito de:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados incorretos ou incompletos</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Solicitar a portabilidade dos seus dados</li>
                <li>Apresentar reclamações às autoridades competentes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">7. Retenção de Dados</h3>
              <p>
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas 
                nesta política, atender a requisitos legais ou resolver disputas. Quando não precisarmos mais de suas 
                informações, elas serão excluídas ou anonimizadas de forma segura.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">8. Alterações nesta Política</h3>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas 
                através do nosso site ou por e-mail. A versão mais atual estará sempre disponível em nosso site.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">9. Contato</h3>
              <p className="mb-3">
                Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, 
                entre em contato conosco:
              </p>
              <div className="bg-white/5 rounded-lg p-4 space-y-2">
                <p><strong>E-mail:</strong> contato@delfioltech.com</p>
                <p><strong>WhatsApp:</strong> (11) 91977-6155</p>
              </div>
            </section>

            <section className="border-t border-white/20 pt-6">
              <p className="text-sm text-white/60">
                <strong>Última atualização:</strong> Julho de 2025
              </p>
              <p className="text-sm text-white/60 mt-2">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
              </p>
            </section>
          </div>

          <div className="flex justify-end mt-8 pt-6 border-t border-white/20">
            <Button
              onClick={() => setShowPrivacyModal(false)}
              className="futuristic-btn bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              Entendi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
