# DelFiol Tech - Website Corporativo

Website corporativo da DelFiol Tech, empresa especializada em desenvolvimento web, inteligência artificial e consultoria tecnológica.

## 🚀 Funcionalidades

- **Design Responsivo**: Interface moderna e adaptável para todos os dispositivos
- **Formulário de Contato Funcional**: Envio de emails direto para flaviodfc@gmail.com
- **Integração WhatsApp**: Botão flutuante para contato direto
- **Seções Completas**: Serviços, Sobre, Equipe e Contato
- **Links LinkedIn**: Perfis profissionais da equipe
- **Animações Suaves**: Transições e efeitos visuais modernos

## 📧 Configuração do EmailJS

Para que o formulário de contato funcione corretamente, é necessário configurar o EmailJS:

### 1. Criar Conta no EmailJS
- Acesse [EmailJS](https://www.emailjs.com/)
- Crie uma conta gratuita

### 2. Configurar Serviço de Email
- No dashboard, vá em "Email Services"
- Adicione um serviço (Gmail recomendado)
- Configure com o email `flaviodfc@gmail.com`

### 3. Criar Template de Email
- Vá em "Email Templates"
- Crie um novo template com ID: `template_contact`
- Configure o template com as seguintes variáveis:
  ```
  De: {{from_name}} ({{from_email}})
  Empresa: {{company}}
  
  Mensagem:
  {{message}}
  
  ---
  Enviado através do site DelFiol Tech
  ```

### 4. Obter Chaves de API
- Vá em "Account" > "General"
- Copie sua Public Key
- No arquivo `src/lib/emailjs.ts`, substitua:
  - `EMAILJS_SERVICE_ID`: ID do seu serviço
  - `EMAILJS_TEMPLATE_ID`: `template_contact`
  - `EMAILJS_PUBLIC_KEY`: Sua chave pública

## 🛠️ Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **Shadcn/ui** para componentes
- **EmailJS** para envio de emails
- **Lucide React** para ícones

## 📱 Contatos

- **WhatsApp**: (11) 91977-6155
- **Email**: flaviodfc@gmail.com
- **LinkedIn**: 
  - [Flavio Del Fiol Costa](https://www.linkedin.com/in/flaviodfc/)
  - [Paula Del Fiol Costa](https://www.linkedin.com/in/pauladelfiol/)
  - [Lucas Del Fiol Costa](https://www.linkedin.com/in/lucasdelfiol/)

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📝 Estrutura do Projeto

```
src/
├── components/ui/     # Componentes reutilizáveis
├── lib/              # Utilitários e configurações
├── pages/            # Páginas da aplicação
├── hooks/            # Hooks customizados
└── index.css         # Estilos globais
```

---

**DelFiol Tech** - Democratizando o acesso à tecnologia para pequenas e médias empresas.