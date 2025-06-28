import emailjs from '@emailjs/browser';

// Configurações do EmailJS
const EMAILJS_SERVICE_ID = 'service_aqdpaal';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'fy_n9bAfr-NsCGl-Q'; // Será configurado posteriormente

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Não informado',
      message: formData.message,
      to_email: 'flaviodfc@gmail.com',
      reply_to: formData.email,
      // Adicionar parâmetros adicionais para garantir compatibilidade
      user_name: formData.name,
      user_email: formData.email,
      user_company: formData.company || 'Não informado',
      user_message: formData.message,
    };

    console.log('Enviando email com parâmetros:', templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email enviado com sucesso:', response);
    return { success: response.status === 200 };
  } catch (error: any) {
    console.error('Erro ao enviar email:', error);
    
    // Melhor tratamento de erros específicos do EmailJS
    let errorMessage = 'Erro desconhecido ao enviar email';
    
    if (error.status === 422) {
      errorMessage = 'Configuração do template EmailJS incorreta. Verifique se o campo "To Email" está configurado no template.';
    } else if (error.status === 400) {
      errorMessage = 'Dados inválidos enviados para o EmailJS';
    } else if (error.status === 401) {
      errorMessage = 'Chave de API do EmailJS inválida';
    } else if (error.status === 404) {
      errorMessage = 'Template ou serviço EmailJS não encontrado';
    } else if (error.text) {
      errorMessage = `Erro do EmailJS: ${error.text}`;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};