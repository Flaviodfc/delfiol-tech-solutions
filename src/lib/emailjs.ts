import emailjs from '@emailjs/browser';

// Configurações do EmailJS
const EMAILJS_SERVICE_ID = 'service_aqdpaal';
const EMAILJS_TEMPLATE_CONTACT = 'template_contact';
const EMAILJS_TEMPLATE_START_NOW = 'template_start_now';
const EMAILJS_PUBLIC_KEY = 'fy_n9bAfr-NsCGl-Q';

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface StartNowFormData {
  name: string;
  company: string;
  companySize: string;
  position: string;
  email: string;
  whatsapp: string;
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
      subject: 'Contato Site DelFiol Tech',
      user_name: formData.name,
      user_email: formData.email,
      user_company: formData.company || 'Não informado',
      user_message: formData.message,
    };

    console.log('Enviando email de contato com parâmetros:', templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_CONTACT,
      templateParams
    );

    console.log('Email de contato enviado com sucesso:', response);
    return { success: response.status === 200 };
  } catch (error: any) {
    console.error('Erro ao enviar email de contato:', error);
    return { success: false, error: getErrorMessage(error) };
  }
};

export const sendStartNowEmail = async (formData: StartNowFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Não informado',
      company_size: formData.companySize || 'Não informado',
      position: formData.position || 'Não informado',
      whatsapp: formData.whatsapp || 'Não informado',
      message: formData.message,
      to_email: 'flaviodfc@gmail.com',
      reply_to: formData.email,
      subject: 'Contato Site DelFiol Tech - Começar Agora',
      // Campos adicionais para compatibilidade
      user_name: formData.name,
      user_email: formData.email,
      user_company: formData.company || 'Não informado',
      user_company_size: formData.companySize || 'Não informado',
      user_position: formData.position || 'Não informado',
      user_whatsapp: formData.whatsapp || 'Não informado',
      user_message: formData.message,
    };

    console.log('Enviando email "Começar Agora" com parâmetros:', templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_START_NOW,
      templateParams
    );

    console.log('Email "Começar Agora" enviado com sucesso:', response);
    return { success: response.status === 200 };
  } catch (error: any) {
    console.error('Erro ao enviar email "Começar Agora":', error);
    return { success: false, error: getErrorMessage(error) };
  }
};

const getErrorMessage = (error: any): string => {
  if (error.status === 422) {
    return 'Configuração do template EmailJS incorreta. Verifique se o campo "To Email" está configurado no template.';
  } else if (error.status === 400) {
    return 'Dados inválidos enviados para o EmailJS';
  } else if (error.status === 401) {
    return 'Chave de API do EmailJS inválida';
  } else if (error.status === 404) {
    return 'Template ou serviço EmailJS não encontrado';
  } else if (error.text) {
    return `Erro do EmailJS: ${error.text}`;
  } else if (error.message) {
    return error.message;
  }
  return 'Erro desconhecido ao enviar email';
};