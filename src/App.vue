<template>
  <div id="app">
    <Header @language-change="changeLanguage" />
    <Banner/>
    <router-view />
    <Footer />
    <BackToTop />


  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
import Banner from './components/Banner.vue'

const currentLanguage = ref('pt')


const changeLanguage = (lang: string) => {
  currentLanguage.value = lang
}

provide('currentLanguage', currentLanguage)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #115C8D;
  background-color: #ffffff;
}

#app {
  min-height: 100vh;
  width: 100%;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 40px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.btn-primary {
  background-color: #0774B3;
  color: white;
}

.btn-primary:hover {
  background-color: #115C8D;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #A7D9F7;
  color: #115C8D;
}

.btn-secondary:hover {
  background-color: #5E99B8;
  color: white;
}

.btn-outline {
  background-color: transparent;
  color: #0774B3;
  border: 2px solid #0774B3;
}

.btn-outline:hover {
  background-color: #0774B3;
  color: white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #115C8D;
  margin-bottom: 16px;
}

.fade-in {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .btn {
    padding: 10px 20px;
    font-size: 13px;
  }
}
</style>