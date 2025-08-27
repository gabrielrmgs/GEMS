<template>
  <section class="registration-section">
    <div class="container">
      <div class="registration-container">
        <div class="registration-header">
          <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" class="registration-icon">
              <path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4V6C15 7.66 13.66 9 12 9S9 7.66 9 6V4L3 7V9H21M21 10H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10Z"/>
            </svg>
          </div>
          <h1>{{ translations.title }}</h1>
          <p class="subtitle">{{ translations.subtitle }}</p>
        </div>

        <form @submit.prevent="handleSubmit" class="registration-form">
          <div class="form-group">
            <label for="nome" class="form-label">
              {{ translations.name }}
              <span class="required">*</span>
            </label>
            <input
              id="nome"
              v-model="formData.nome"
              type="text"
              class="form-input"
              :class="{ error: errors.nome }"
              :placeholder="translations.namePlaceholder"
              required
            />
            <span v-if="errors.nome" class="error-message">{{ errors.nome }}</span>
          </div>

          <div class="form-group">
            <label for="email" class="form-label">
              {{ translations.email }}
              <span class="required">*</span>
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="form-input"
              :class="{ error: errors.email }"
              :placeholder="translations.emailPlaceholder"
              required
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label for="senha" class="form-label">
              {{ translations.password }}
              <span class="required">*</span>
            </label>
            <div class="password-input-wrapper">
              <input
                id="senha"
                v-model="formData.senha"
                :type="showPassword ? 'text' : 'password'"
                class="form-input"
                :class="{ error: errors.senha }"
                :placeholder="translations.passwordPlaceholder"
                required
              />
              <button
                type="button"
                class="password-toggle"
                @click="togglePassword"
                :title="showPassword ? translations.hidePassword : translations.showPassword"
              >
                <svg v-if="showPassword" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.09L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.76,7.13 11.37,7 12,7Z"/>
                </svg>
                <svg v-else viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                </svg>
              </button>
            </div>
            <span v-if="errors.senha" class="error-message">{{ errors.senha }}</span>
            <div class="password-strength">
              <div class="strength-bar">
                <div 
                  class="strength-fill" 
                  :class="passwordStrength.class"
                  :style="{ width: passwordStrength.width }"
                ></div>
              </div>
              <span class="strength-text">{{ passwordStrength.text }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="cargoId" class="form-label">
              {{ translations.position }}
              <span class="required">*</span>
            </label>
            <select
              id="cargoId"
              v-model="formData.cargoId"
              class="form-select"
              :class="{ error: errors.cargoId }"
              required
            >
              <option value="">{{ translations.selectPosition }}</option>
              <option 
                v-for="cargo in cargos" 
                :key="cargo.id" 
                :value="cargo.id"
              >
                {{ cargo.nome }}
              </option>
            </select>
            <span v-if="errors.cargoId" class="error-message">{{ errors.cargoId }}</span>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-submit" :disabled="isSubmitting">
              <svg v-if="isSubmitting" class="loading-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
              </svg>
              <svg v-else viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
              </svg>
              {{ isSubmitting ? translations.submitting : translations.register }}
            </button>
            
            <button type="button" class="btn-cancel" @click="resetForm">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
              </svg>
              {{ translations.cancel }}
            </button>
          </div>
        </form>

        <div v-if="successMessage" class="success-message">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.5,8L11,13.5L7.5,10L6,11.5L11,16.5Z"/>
          </svg>
          {{ successMessage }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, inject, reactive } from 'vue'

const currentLanguage = inject('currentLanguage', ref('pt'))
const isSubmitting = ref(false)
const showPassword = ref(false)
const successMessage = ref('')

interface FormData {
  nome: string
  email: string
  senha: string
  cargoId: string
}

interface Errors {
  nome?: string
  email?: string
  senha?: string
  cargoId?: string
}

const formData = reactive<FormData>({
  nome: '',
  email: '',
  senha: '',
  cargoId: ''
})

const errors = reactive<Errors>({})

const translations = computed(() => {
  const texts = {
    pt: {
      title: 'Cadastro de Usuário',
      subtitle: 'Preencha os dados abaixo para criar sua conta',
      name: 'Nome Completo',
      namePlaceholder: 'Digite seu nome completo',
      email: 'E-mail',
      emailPlaceholder: 'Digite seu e-mail',
      password: 'Senha',
      passwordPlaceholder: 'Digite sua senha',
      position: 'Cargo',
      selectPosition: 'Selecione seu cargo',
      register: 'Cadastrar',
      cancel: 'Cancelar',
      submitting: 'Cadastrando...',
      showPassword: 'Mostrar senha',
      hidePassword: 'Ocultar senha',
      weak: 'Fraca',
      medium: 'Média',
      strong: 'Forte',
      veryStrong: 'Muito Forte'
    },
    en: {
      title: 'User Registration',
      subtitle: 'Fill in the details below to create your account',
      name: 'Full Name',
      namePlaceholder: 'Enter your full name',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      password: 'Password',
      passwordPlaceholder: 'Enter your password',
      position: 'Position',
      selectPosition: 'Select your position',
      register: 'Register',
      cancel: 'Cancel',
      submitting: 'Registering...',
      showPassword: 'Show password',
      hidePassword: 'Hide password',
      weak: 'Weak',
      medium: 'Medium',
      strong: 'Strong',
      veryStrong: 'Very Strong'
    },
    es: {
      title: 'Registro de Usuario',
      subtitle: 'Complete los datos a continuación para crear su cuenta',
      name: 'Nombre Completo',
      namePlaceholder: 'Ingrese su nombre completo',
      email: 'Correo Electrónico',
      emailPlaceholder: 'Ingrese su correo electrónico',
      password: 'Contraseña',
      passwordPlaceholder: 'Ingrese su contraseña',
      position: 'Cargo',
      selectPosition: 'Seleccione su cargo',
      register: 'Registrar',
      cancel: 'Cancelar',
      submitting: 'Registrando...',
      showPassword: 'Mostrar contraseña',
      hidePassword: 'Ocultar contraseña',
      weak: 'Débil',
      medium: 'Media',
      strong: 'Fuerte',
      veryStrong: 'Muy Fuerte'
    }
  }
  return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})

const cargos = ref([
  { id: 1, nome: 'Pesquisador Sênior' },
  { id: 2, nome: 'Pesquisador Júnior' },
  { id: 3, nome: 'Analista de Laboratório' },
  { id: 4, nome: 'Técnico em Biotecnologia' },
  { id: 5, nome: 'Coordenador de Projetos' },
  { id: 6, nome: 'Especialista em Genética' },
  { id: 7, nome: 'Bioinformata' },
  { id: 8, nome: 'Estudante de Pós-graduação' }
])

const passwordStrength = computed(() => {
  const password = formData.senha
  let score = 0
  
  if (password.length >= 8) score++
  if (/[a-z]/.test(password)) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  
  const strengthLevels = {
    0: { width: '0%', class: '', text: '' },
    1: { width: '20%', class: 'weak', text: translations.value.weak },
    2: { width: '40%', class: 'weak', text: translations.value.weak },
    3: { width: '60%', class: 'medium', text: translations.value.medium },
    4: { width: '80%', class: 'strong', text: translations.value.strong },
    5: { width: '100%', class: 'very-strong', text: translations.value.veryStrong }
  }
  
  return strengthLevels[score as keyof typeof strengthLevels] || strengthLevels[0]
})

const validateForm = (): boolean => {
  const newErrors: Errors = {}
  
  if (!formData.nome.trim()) {
    newErrors.nome = 'Nome é obrigatório'
  } else if (formData.nome.trim().length < 2) {
    newErrors.nome = 'Nome deve ter pelo menos 2 caracteres'
  }
  
  if (!formData.email.trim()) {
    newErrors.email = 'E-mail é obrigatório'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = 'E-mail inválido'
  }
  
  if (!formData.senha) {
    newErrors.senha = 'Senha é obrigatória'
  } else if (formData.senha.length < 6) {
    newErrors.senha = 'Senha deve ter pelo menos 6 caracteres'
  }
  
  if (!formData.cargoId) {
    newErrors.cargoId = 'Cargo é obrigatório'
  }
  
  Object.assign(errors, newErrors)
  return Object.keys(newErrors).length === 0
}

const handleSubmit = async () => {
  // Limpar erros anteriores
  Object.keys(errors).forEach(key => {
    delete errors[key as keyof Errors]
  })
  
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Simular chamada para API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Criar objeto DTO conforme o Java record
    const usuarioDTO = {
      nome: formData.nome.trim(),
      email: formData.email.trim(),
      senha: formData.senha,
      cargoId: parseInt(formData.cargoId)
    }
    
    console.log('Dados para envio:', usuarioDTO)
    
    successMessage.value = 'Usuário cadastrado com sucesso!'
    resetForm()
    
    // Limpar mensagem de sucesso após 5 segundos
    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
    
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error)
    errors.email = 'Erro ao cadastrar usuário. Tente novamente.'
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  formData.nome = ''
  formData.email = ''
  formData.senha = ''
  formData.cargoId = ''
  Object.keys(errors).forEach(key => {
    delete errors[key as keyof Errors]
  })
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
.registration-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
  padding: 80px 0;
  display: flex;
  align-items: center;
}

.registration-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(7, 116, 179, 0.15);
  overflow: hidden;
}

.registration-header {
  background: linear-gradient(135deg, #0774B3 0%, #115C8D 100%);
  color: white;
  padding: 40px;
  text-align: center;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.registration-icon {
  width: 40px;
  height: 40px;
  color: white;
}

.registration-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: white;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}

.registration-form {
  padding: 40px;
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #115C8D;
  margin-bottom: 8px;
  font-size: 14px;
}

.required {
  color: #e74c3c;
  margin-left: 4px;
}

.form-input,
.form-select {
  width: 100%;
  padding: 16px;
  border: 2px solid #A4BCD4;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
  color: #115C8D;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #0774B3;
  box-shadow: 0 0 0 3px rgba(7, 116, 179, 0.1);
}

.form-input.error,
.form-select.error {
  border-color: #e74c3c;
}

.password-input-wrapper {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #5E99B8;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: #0774B3;
}

.password-toggle svg {
  width: 20px;
  height: 20px;
}

.password-strength {
  margin-top: 8px;
}

.strength-bar {
  width: 100%;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 4px;
}

.strength-fill {
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.strength-fill.weak {
  background: #e74c3c;
}

.strength-fill.medium {
  background: #f39c12;
}

.strength-fill.strong {
  background: #27ae60;
}

.strength-fill.very-strong {
  background: #0774B3;
}

.strength-text {
  font-size: 12px;
  color: #5E99B8;
  font-weight: 500;
}

.error-message {
  display: block;
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
}

.form-actions {
  display: flex;
  gap: 16px;
  margin-top: 32px;
}

.btn-submit,
.btn-cancel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit {
  background: #0774B3;
  color: white;
}

.btn-submit:hover:not(:disabled) {
  background: #115C8D;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(7, 116, 179, 0.3);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-cancel {
  background: #A4BCD4;
  color: #115C8D;
}

.btn-cancel:hover {
  background: #5E99B8;
  color: white;
}

.btn-submit svg,
.btn-cancel svg {
  width: 20px;
  height: 20px;
}

.loading-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.success-message {
  background: #d4edda;
  color: #155724;
  padding: 16px;
  border-radius: 8px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
}

.success-message svg {
  width: 24px;
  height: 24px;
  color: #28a745;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .registration-section {
    padding: 40px 0;
  }
  
  .registration-container {
    margin: 0 20px;
  }
  
  .registration-header {
    padding: 32px 24px;
  }
  
  .registration-header h1 {
    font-size: 1.75rem;
  }
  
  .registration-form {
    padding: 32px 24px;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .icon-wrapper {
    width: 60px;
    height: 60px;
  }
  
  .registration-icon {
    width: 30px;
    height: 30px;
  }
}
</style>