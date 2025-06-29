import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Rocket, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendStartNowEmail, type StartNowFormData } from "@/lib/emailjs";

interface StartNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMessage?: string;
}

export const StartNowModal = ({ isOpen, onClose, prefilledMessage }: StartNowModalProps) => {
  const [formData, setFormData] = useState<StartNowFormData>({
    name: "",
    company: "",
    companySize: "",
    position: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Efeito para preencher a mensagem quando o modal abrir
  useEffect(() => {
    if (isOpen && prefilledMessage) {
      setFormData(prev => ({
        ...prev,
        message: prefilledMessage
      }));
    }
  }, [isOpen, prefilledMessage]);

  // Função para formatar o WhatsApp
  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (xx) xxxx-xxxx
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  // Função para validar WhatsApp
  const validateWhatsApp = (whatsapp: string) => {
    // Remove caracteres não numéricos
    const numbers = whatsapp.replace(/\D/g, '');
    // Verifica se tem 10 ou 11 dígitos (formato brasileiro)
    return numbers.length === 10 || numbers.length === 11;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validações
      if (!formData.name || !formData.email || !formData.whatsapp || !formData.message) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, preencha nome, email, WhatsApp e mensagem.",
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

      if (!validateWhatsApp(formData.whatsapp)) {
        toast({
          title: "WhatsApp inválido",
          description: "Por favor, insira um número de WhatsApp válido no formato (xx) xxxx-xxxx.",
          variant: "destructive"
        });
        return;
      }

      const result = await sendStartNowEmail(formData);

      if (result.success) {
        toast({
          title: "🚀 Solicitação enviada com sucesso!",
          description: "Recebemos sua solicitação e entraremos em contato em breve para iniciarmos seu projeto!"
        });
        
        // Resetar formulário e fechar modal
        setFormData({
          name: "",
          company: "",
          companySize: "",
          position: "",
          email: "",
          whatsapp: "",
          message: ""
        });
        onClose();
      } else {
        toast({
          title: "❌ Erro ao enviar solicitação",
          description: result.error || "Ocorreu um erro ao enviar sua solicitação. Tente novamente ou entre em contato via WhatsApp.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "❌ Erro ao enviar solicitação",
        description: "Ocorreu um erro inesperado. Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'whatsapp') {
      // Aplica formatação automática para WhatsApp
      const formattedValue = formatWhatsApp(value);
      setFormData({
        ...formData,
        [name]: formattedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      companySize: value
    });
  };

  const handleClose = () => {
    // Resetar formulário ao fechar
    setFormData({
      name: "",
      company: "",
      companySize: "",
      position: "",
      email: "",
      whatsapp: "",
      message: ""
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="glass border-cyan-400/20 max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl">
        <DialogHeader className="relative">
          <div className="absolute -top-2 -right-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <DialogTitle className="text-3xl font-bold text-center">
            <span className="holographic-text">Começar Agora</span>
          </DialogTitle>
          <p className="text-white/70 text-center mt-2">
            Conte-nos sobre seu projeto e vamos transformar sua ideia em realidade!
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-white/80 text-sm font-medium mb-2 block">
                Nome *
              </label>
              <Input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
              />
            </div>
            <div>
              <label className="text-white/80 text-sm font-medium mb-2 block">
                Empresa
              </label>
              <Input
                type="text"
                name="company"
                placeholder="Nome da sua empresa"
                value={formData.company}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-white/80 text-sm font-medium mb-2 block">
                Tamanho da Empresa
              </label>
              <Select onValueChange={handleSelectChange} disabled={isSubmitting} value={formData.companySize}>
                <SelectTrigger className="glass border-white/20 text-white focus:border-cyan-400/50">
                  <SelectValue placeholder="Selecione o tamanho" />
                </SelectTrigger>
                <SelectContent className="glass border-white/20 bg-slate-900/95 backdrop-blur-xl">
                  <SelectItem value="1-10" className="text-white hover:bg-white/10">1-10 funcionários</SelectItem>
                  <SelectItem value="11-50" className="text-white hover:bg-white/10">11-50 funcionários</SelectItem>
                  <SelectItem value="51-200" className="text-white hover:bg-white/10">51-200 funcionários</SelectItem>
                  <SelectItem value="201-500" className="text-white hover:bg-white/10">201-500 funcionários</SelectItem>
                  <SelectItem value="501+" className="text-white hover:bg-white/10">501+ funcionários</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-white/80 text-sm font-medium mb-2 block">
                Cargo
              </label>
              <Input
                type="text"
                name="position"
                placeholder="Seu cargo na empresa"
                value={formData.position}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-white/80 text-sm font-medium mb-2 block">
                E-mail *
              </label>
              <Input
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
              />
            </div>
            <div>
              <label className="text-white/80 text-sm font-medium mb-2 block">
                WhatsApp *
              </label>
              <Input
                type="tel"
                name="whatsapp"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                maxLength={15}
                className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
              />
              <p className="text-xs text-white/50 mt-1">
                Formato: (xx) xxxx-xxxx ou (xx) xxxxx-xxxx
              </p>
            </div>
          </div>

          <div>
            <label className="text-white/80 text-sm font-medium mb-2 block">
              Mensagem *
            </label>
            <Textarea
              name="message"
              placeholder="Como podemos ajudá-lo?"
              value={formData.message}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50 h-32"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
              className="glass border-white/30 text-white hover:bg-white/10 flex-1"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="futuristic-btn bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Rocket className="mr-2 h-5 w-5" />
                  Começar Agora
                </>
              )}
            </Button>
          </div>

          <p className="text-sm text-white/50 text-center">
            * Campos obrigatórios
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};