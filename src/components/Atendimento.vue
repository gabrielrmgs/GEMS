<template>
  <section class="atendimento-section">
    <div class="container">
      <div class="atendimento-content fade-in">
        <!-- Cabeçalho -->
        <div class="header-section">
          <h1>Atendimento</h1>
          <p class="subtitle">Entre em contato conosco. Estamos aqui para ajudar!</p>
        </div>

        <!-- Layout Principal -->
        <div class="main-layout">
          <!-- Informações de Contato -->
          <div class="contact-info">
            <h3>Informações de Contato</h3>
            <div class="info-item">
              <div class="info-icon">📧</div>
              <div>
                <strong>Email</strong>
                <p>contato@empresa.com</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">📞</div>
              <div>
                <strong>Telefone</strong>
                <p>(11) 9999-9999</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">🕒</div>
              <div>
                <strong>Horário</strong>
                <p>Seg - Sex: 8h às 18h</p>
              </div>
            </div>
          </div>

          <!-- Formulário -->
          <div class="form-container">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="nome">Nome Completo *</label>
                <input
                  id="nome"
                  v-model="form.nome"
                  type="text"
                  :class="{ 'error': errors.nome }"
                  placeholder="Digite seu nome completo"
                />
                <span v-if="errors.nome" class="error-message">{{ errors.nome }}</span>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="telefone">Telefone *</label>
                  <input
                    id="telefone"
                    v-model="form.telefone"
                    type="tel"
                    :class="{ 'error': errors.telefone }"
                    placeholder="(11) 99999-9999"
                  />
                  <span v-if="errors.telefone" class="error-message">{{ errors.telefone }}</span>
                </div>

                <div class="form-group">
                  <label for="email">Email *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    :class="{ 'error': errors.email }"
                    placeholder="seu@email.com"
                  />
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="mensagem">Mensagem *</label>
                <textarea
                  id="mensagem"
                  v-model="form.mensagem"
                  :class="{ 'error': errors.mensagem }"
                  placeholder="Digite sua mensagem..."
                  rows="5"
                ></textarea>
                <span v-if="errors.mensagem" class="error-message">{{ errors.mensagem }}</span>
              </div>

              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                <span v-if="isSubmitting">Enviando...</span>
                <span v-else>Enviar Mensagem</span>
              </button>
            </form>

            <!-- Mensagem de Sucesso -->
            <div v-if="showSuccess" class="success-message fade-in">
              <div class="success-icon">✅</div>
              <h4>Mensagem enviada com sucesso!</h4>
              <p>Entraremos em contato em breve.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  nome: '',
  telefone: '',
  email: '',
  mensagem: ''
})

const errors = reactive({
  nome: '',
  telefone: '',
  email: '',
  mensagem: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const validateForm = () => {
  // Limpar erros
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })

  let isValid = true

  // Validar nome
  if (!form.nome.trim()) {
    errors.nome = 'Nome é obrigatório'
    isValid = false
  }

  // Validar telefone
  if (!form.telefone.trim()) {
    errors.telefone = 'Telefone é obrigatório'
    isValid = false
  } else if (!/^(55)?(?:([1-9]{2})?)(\d{4,5})(\d{4})$/.test(form.telefone)) {
    errors.telefone = 'Formato inválido. Use: (11) 99999-9999'
    isValid = false
  }

  // Validar email
  if (!form.email.trim()) {
    errors.email = 'Email é obrigatório'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email inválido'
    isValid = false
  }

  // Validar mensagem
  if (!form.mensagem.trim()) {
    errors.mensagem = 'Mensagem é obrigatória'
    isValid = false
  } else if (form.mensagem.trim().length < 10) {
    errors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Limpar formulário
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    // Mostrar sucesso
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Erro ao enviar:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Máscara para telefone
const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, '')
  if (numbers.length <= 11) {
    return numbers.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3')
  }
  return value
}

// Aplicar máscara no telefone
const handlePhoneInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  form.telefone = formatPhone(target.value)
}
</script>

<style scoped>
.atendimento-section {
  min-height: 80vh;
  padding: 60px 0;
  background-color: #ffffff;
}

.atendimento-content {
  max-width: 1200px;
  margin: 0 auto;
}

.header-section {
  text-align: center;
  margin-bottom: 48px;
}

.header-section h1 {
  font-size: 2.5rem;
  color: #115C8D;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 1.1rem;
  color: #5E99B8;
  margin-bottom: 0;
}

.main-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  align-items: start;
}

.contact-info {
  background-color: #f8f9fa;
  padding: 32px;
  border-radius: 6px;
  border-left: 4px solid #0774B3;
}

.contact-info h3 {
  color: #115C8D;
  margin-bottom: 24px;
  font-size: 1.3rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
}

.info-icon {
  font-size: 1.2rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #A7D9F7;
  border-radius: 50%;
  flex-shrink: 0;
}

.info-item strong {
  color: #115C8D;
  display: block;
  margin-bottom: 4px;
}

.info-item p {
  color: #5E99B8;
  margin: 0;
  font-size: 0.95rem;
}

.form-container {
  position: relative;
}

.contact-form {
  background-color: #ffffff;
  padding: 32px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  color: #115C8D;
  font-weight: 500;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0774B3;
  box-shadow: 0 0 0 3px rgba(7, 116, 179, 0.1);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #dc2626;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  color: #dc2626;
  font-size: 0.85rem;
  margin-top: 4px;
  display: block;
}

.success-message {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  border-radius: 6px;
  border: 2px solid #10b981;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.success-message h4 {
  color: #10b981;
  margin-bottom: 8px;
  font-size: 1.3rem;
}

.success-message p {
  color: #5E99B8;
  margin: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  .atendimento-section {
    padding: 40px 0;
  }

  .header-section h1 {
    font-size: 2rem;
  }

  .main-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .contact-info,
  .contact-form {
    padding: 24px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .info-item {
    margin-bottom: 16px;
  }
}

@media (max-width: 480px) {
  .header-section h1 {
    font-size: 1.8rem;
  }

  .contact-info,
  .contact-form {
    padding: 20px;
  }
}
</style>