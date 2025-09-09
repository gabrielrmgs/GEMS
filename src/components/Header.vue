<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <h2 style="display:none">Gabriel Ferreira</h2>
          <span style="display:none">Research Portfolio</span>
        </div>

        <nav class="main-nav">
          <div class="nav-items">
            <router-link to="/GEMS/" class="nav-link">{{ translations.about }}</router-link>
            <router-link to="/GEMS/" class="nav-link">{{ translations.equipe }}</router-link>
            <div class="dropdown">
              <button class="dropbtn nav-link">{{ translations.certificates }}</button>
              <div class="dropdown-content">
                <a href="#">Política interna (PDF)</a>
                <a href="#">Alvará de funcionamento (PDF)</a>
                <a href="#">Corpo de bombeiros(PDF)</a>
                <a href="#">Certificado de Boas Práticas (PDF)</a>
              </div>
            </div>
            <router-link to="/GEMS/cadastro" class="nav-link">{{ translations.register }}</router-link>
            <router-link to="/GEMS/atendimento" class="nav-link" >{{ translations.atendimento }}</router-link>
            <div class="dropdown">
              <button class="dropbtn nav-link">{{ translations.projetos }}</button>
              <div class="dropdown-content">
                <a href="http://mapa.gemsbiotec.com.br/BomJesus/">Dengue</a>
                <a href="#">Covid</a>
                <a href="#">Leishmania</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn nav-link">{{ translations.noticias }}</button>
              <div class="dropdown-content">
                <a href="#">{{ translations.videos }}</a>
                <a href="#">{{ translations.conferencias }}</a>
                <a href="#">{{ translations.artigos }}</a>
              </div>
            </div>
          </div>

          <div class="nav-controls">
            <div class="language-selector">
              <select @change="onLanguageChange" :value="currentLang" class="lang-select">
                <option value="pt">🇧🇷 PT</option>
                <option value="en">🇺🇸 EN</option>
                <option value="es">🇪🇸 ES</option>
              </select>
            </div>
            <button class="mobile-menu-btn" @click="toggleMobileMenu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </div>

    <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
      <a href="#about" class="mobile-nav-link" @click="closeMobileMenu">{{ translations.about }}</a>
      <a href="#certificates" class="mobile-nav-link" @click="closeMobileMenu">{{ translations.certificates }}</a>
      <a href="#register" class="mobile-nav-link" @click="closeMobileMenu">{{ translations.register }}</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'

const emit = defineEmits(['language-change'])

const currentLanguage = inject('currentLanguage', ref('pt'))
const mobileMenuOpen = ref(false)

const currentLang = computed(() => currentLanguage.value)

const translations = computed(() => {
  const texts = {
    pt: {
      about: 'Sobre',
      equipe: 'Equipe',
      certificates: 'Certificados',
      register: 'Cadastro',
      atendimento: 'Atendimento',
      projetos: 'Projetos',
      noticias: 'Notícias',
      videos: 'Vídeos',
      conferencias: 'Conferências',
      artigos: 'Artigos'

    },
    en: {
      about: 'About',
      equipe: 'Team',
      certificates: 'Certificates',
      register: 'Register',
      atendimento: 'Support',
      projetos: 'Projects',
      noticias: 'News',
      videos: 'Videos',
      conferencias: 'Conferences',
      artigos: 'Articles'

    },
    es: {
      about: 'Acerca',
      equipe: 'Equipo',
      certificates: 'Certificados',
      register: 'Registro',
      atendimento: 'Soporte',
      projetos: 'Proyectos',
      noticias: 'Noticias',
      videos: 'Vídeos',
      conferencias: 'Conferencias',
      artigos: 'Artículos'
    }
  }
  return texts[currentLang.value as keyof typeof texts] || texts.pt
})

const onLanguageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('language-change', target.value)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = document.querySelector('.dropbtn');

  dropbtn!.addEventListener('click', function (event) {
    dropdown!.classList.toggle('show');
    event.stopPropagation(); // Impede que o clique no botão feche o menu
  });

  // Fecha o dropdown se o usuário clicar fora dele
  document.addEventListener('click', function () {
    if (dropdown!.classList.contains('show')) {
      dropdown!.classList.remove('show');
    }
  });
});
</script>

<style scoped>
/* Estilo para o contêiner principal */
.dropdown {
  position: relative;
  /* Essencial para que o dropdown apareça abaixo do botão */
  display: inline-block;
  vertical-align: middle;
  /* Add this line */
}

/* Estilo para o botão */
.dropbtn {
  border: none;
  background: none;
  cursor: pointer;
}

/* Estilo para a lista de links (inicialmente escondida) */
.dropdown-content {
  display: none;
  /* Esconde a lista por padrão */
  position: absolute;
  border-radius: 4px;
  background-color: #A7D9F7;
  min-width: 90px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
  /* Garante que o dropdown fique acima de outros elementos */
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Estilo para cada link do dropdown */
.dropdown-content a {
  border-radius: 4px;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  /* Remove o sublinhado dos links */
  display: block;
  /* Faz com que cada link ocupe toda a largura */
}

/* Efeito de hover nos links */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Mostra o dropdown quando a classe 'show' é adicionada ao contêiner principal */
.dropdown.show .dropdown-content {
  display: block;
}

.header {
  background: linear-gradient(135deg, #0774B3 0%, #115C8D 100%);
  color: white;
  padding: 16px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h2 {
  color: white;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

.logo span {
  font-size: 12px;
  opacity: 0.9;
  display: block;
  margin-top: -4px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-items {
  display: flex;
  gap: 24px;
  align-items: center;
  /* Add this line */
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-select {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.lang-select option {
  background-color: #115C8D;
  color: white;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  background-color: #115C8D;
  padding: 20px;
  gap: 16px;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}

.mobile-menu.active {
  transform: translateY(0);
}

.mobile-nav-link {
  color: white;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.mobile-nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .nav-items {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }

  .logo h2 {
    font-size: 20px;
  }

  .main-nav {
    gap: 16px;
  }
}
</style>