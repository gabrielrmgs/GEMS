<template>
  <nav class="secondary-nav">
    <div class="container">
      <div class="nav-buttons">
        <button 
          v-for="item in navItems" 
          :key="item.id"
          class="nav-button"
          :class="{ active: activeItem === item.id }"
          @click="setActive(item.id)"
        >
          <component :is="item.icon" class="nav-icon" />
          <span>{{ item.label }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, inject, h } from 'vue'

const currentLanguage = inject('currentLanguage', ref('pt'))
const activeItem = ref('reagents')

const setActive = (id: string) => {
  activeItem.value = id
}

// Ícones SVG como componentes
const FlaskIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M9 2v6l-4 6v6c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-6l-4-6V2H9zm2 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z' })
])

const SupportIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M21 12.22C21 6.73 16.74 3 12 3s-9 3.73-9 9.22c0 4.04 2.57 7.44 6.13 8.57.5.09.67-.22.67-.48 0-.24-.01-.87-.01-1.71-2.5.54-3.02-1.2-3.02-1.2-.41-1.02-1-1.29-1-1.29-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.1.98 2.61.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.78.93-2.41-.09-.23-.4-1.14.09-2.38 0 0 .76-.24 2.48.92.72-.2 1.49-.3 2.25-.3.76 0 1.53.1 2.25.3 1.72-1.16 2.48-.92 2.48-.92.49 1.24.18 2.15.09 2.38.58.63.93 1.43.93 2.41 0 3.46-2.1 4.22-4.1 4.45.32.28.61.83.61 1.67 0 1.2-.01 2.17-.01 2.47 0 .26.17.58.67.48A9.999 9.999 0 0021 12.22z' })
])

const ProjectIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' })
])

const NewsIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' })
])

const navItems = computed(() => {
  const texts = {
    pt: [
      { id: 'reagents', label: 'Reagentes', icon: FlaskIcon },
      { id: 'support', label: 'Atendimento', icon: SupportIcon },
      { id: 'projects', label: 'Projetos', icon: ProjectIcon },
      { id: 'news', label: 'Notícias', icon: NewsIcon }
    ],
    en: [
      { id: 'reagents', label: 'Reagents', icon: FlaskIcon },
      { id: 'support', label: 'Support', icon: SupportIcon },
      { id: 'projects', label: 'Projects', icon: ProjectIcon },
      { id: 'news', label: 'News', icon: NewsIcon }
    ],
    es: [
      { id: 'reagents', label: 'Reactivos', icon: FlaskIcon },
      { id: 'support', label: 'Soporte', icon: SupportIcon },
      { id: 'projects', label: 'Proyectos', icon: ProjectIcon },
      { id: 'news', label: 'Noticias', icon: NewsIcon }
    ]
  }
  return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})
</script>

<style scoped>
.secondary-nav {
  background: white;
  border-bottom: 1px solid #A4BCD4;
  padding: 20px 0;
  position: sticky;
  top: 0px;
  z-index: 50;
}

.nav-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
}

.nav-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background: #A7D9F7;
  color: #115C8D;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.nav-button:hover::before {
  left: 100%;
}

.nav-button:hover {
  background: #5E99B8;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(7, 116, 179, 0.3);
}

.nav-button.active {
  background: #0774B3;
  color: white;
}

.nav-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .secondary-nav {
    padding: 16px 0;
    top: 70px;
  }
  
  .nav-buttons {
    gap: 6px;
  }
  
  .nav-button {
    padding: 12px 16px;
    font-size: 13px;
  }
  
  .nav-button span {
    display: none;
  }
  
  .nav-icon {
    width: 18px;
    height: 18px;
  }
}
</style>