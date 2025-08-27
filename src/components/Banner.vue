<template>
  <section class="banner">
    <div class="container">
      <div class="banner-content">
        <div class="banner-logo">
          <div style="display:none" class="logo-circle">
            <svg viewBox="0 0 100 100" class="logo-svg">
              <circle cx="50" cy="50" r="45" fill="#A7D9F7" stroke="#0774B3" stroke-width="2"/>
              <path d="M30 50 L45 35 L70 60 M45 65 L60 50" stroke="#115C8D" stroke-width="3" fill="none"/>
              <circle cx="50" cy="50" r="8" fill="#0774B3"/>
            </svg>
          </div>
          <div style="display:none" class="logo-text">
            <h1>{{ translations.name }}</h1>
            <p class="title">{{ translations.title }}</p>
          </div>
          <div style="
          margin-left: 81px;
          ">
            <img src="/src/assets/logo-gems-sem-fundo.png" width="360" height="180"/>
          </div>
          
        </div>
        
        <div class="contact-info">
          <div class="contact-item">
            <svg viewBox="0 0 24 24" class="icon">
              <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <div>
              <span class="label">{{ translations.location }}</span>
              <span class="value">Teresina, PI - Brasil</span>
            </div>
          </div>
          
          <div class="contact-item">
            <svg viewBox="0 0 24 24" class="icon">
              <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <div>
              <span class="label">{{ translations.phone }}</span>
              <span class="value">+55 86 99999-0004</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'

const currentLanguage = inject('currentLanguage', ref('pt'))

const translations = computed(() => {
  const texts = {
    pt: {
      name: 'Gabriel Ferreira',
      title: 'Pesquisador em Biotecnologia',
      location: 'Localização',
      phone: 'Telefone'
    },
    en: {
      name: 'Gabriel Ferreira',
      title: 'Biotechnology Researcher',
      location: 'Location',
      phone: 'Phone'
    },
    es: {
      name: 'Gabriel Ferreira',
      title: 'Investigador en Biotecnología',
      location: 'Ubicación',
      phone: 'Teléfono'
    }
  }
  return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})
</script>

<style scoped>
.banner {
  background: linear-gradient(45deg, #E5EEF3FF 0%, #A4BCD4 100%);
  padding: 60px 0;
  position: relative;
  overflow: hidden;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: rgba(7, 116, 179, 0.1);
  border-radius: 50%;
  transform: translate(100px, -100px);
}

.banner-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.banner-logo {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  padding: 8px;
  box-shadow: 0 8px 24px rgba(7, 116, 179, 0.2);
}

.logo-svg {
  width: 100%;
  height: 100%;
}

.logo-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #115C8D;
  margin: 0;
  margin-bottom: 8px;
}

.title {
  font-size: 1.2rem;
  color: #5E99B8;
  font-weight: 500;
  margin: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-right: 120px
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
}

.icon {
  width: 24px;
  height: 24px;
  color: #0774B3;
  flex-shrink: 0;
}

.contact-item div {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: #5E99B8;
  margin-bottom: 4px;
}

.value {
  font-size: 16px;
  font-weight: 600;
  color: #115C8D;
}

@media (max-width: 768px) {
  .banner {
    padding: 40px 0;
  }
  
  .banner-content {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }
  
  .banner-logo {
    flex-direction: column;
    gap: 16px;
  }
  
  .logo-text h1 {
    font-size: 2rem;
  }
  
  .contact-info {
    gap: 16px;
  }
  
  .contact-item {
    padding: 16px;
  }
}
</style>