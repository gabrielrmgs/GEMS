<template>
  <section class="carousel-section">
    <div style="padding: 0" class="container">
      <h2 class="section-title">{{ translations.title }}</h2>
      
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div 
            class="carousel-track" 
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="(image, index) in images" 
              :key="index"
              class="carousel-slide"
            >
              <div class="image-container">
                <img :src="image.src" :alt="image.alt" />
                <div class="image-overlay">
                  <h3>{{ image.title }}</h3>
                  <p>{{ image.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button class="carousel-btn prev" @click="prevSlide">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <button class="carousel-btn next" @click="nextSlide">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
        
        <div class="carousel-indicators">
          <button 
            v-for="(_, index) in images" 
            :key="index"
            class="indicator"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, inject, onMounted, onUnmounted } from 'vue'

const currentLanguage = inject('currentLanguage', ref('pt'))
const currentSlide = ref(0)
let autoplayInterval: number | null = null

const translations = computed(() => {
  const texts = {
    pt: {
      title: 'Pesquisas e Projetos'
    },
    en: {
      title: 'Research and Projects'
    },
    es: {
      title: 'Investigación y Proyectos'
    }
  }
  return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})

const images = computed(() => {
  const imageData = {
    pt: [
      {
        src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Laboratório de pesquisa',
        title: 'Laboratório de Biotecnologia',
        description: 'Equipamentos de última geração para pesquisa em biotecnologia'
      },
      {
        src: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Microscópio em uso',
        title: 'Análise Microscópica',
        description: 'Estudos detalhados de estruturas celulares e moleculares'
      },
      {
        src: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Experimentos químicos',
        title: 'Síntese de Compostos',
        description: 'Desenvolvimento de novos compostos para aplicações médicas'
      },
      {
        src: 'https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Análise de dados',
        title: 'Análise de Resultados',
        description: 'Processamento e interpretação de dados experimentais'
      }
    ],
    en: [
      {
        src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Research laboratory',
        title: 'Biotechnology Laboratory',
        description: 'State-of-the-art equipment for biotechnology research'
      },
      {
        src: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Microscope in use',
        title: 'Microscopic Analysis',
        description: 'Detailed studies of cellular and molecular structures'
      },
      {
        src: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Chemical experiments',
        title: 'Compound Synthesis',
        description: 'Development of new compounds for medical applications'
      },
      {
        src: 'https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Data analysis',
        title: 'Results Analysis',
        description: 'Processing and interpretation of experimental data'
      }
    ],
    es: [
      {
        src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Laboratorio de investigación',
        title: 'Laboratorio de Biotecnología',
        description: 'Equipos de última generación para investigación en biotecnología'
      },
      {
        src: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Microscopio en uso',
        title: 'Análisis Microscópico',
        description: 'Estudios detallados de estructuras celulares y moleculares'
      },
      {
        src: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Experimentos químicos',
        title: 'Síntesis de Compuestos',
        description: 'Desarrollo de nuevos compuestos para aplicaciones médicas'
      },
      {
        src: 'https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Análisis de datos',
        title: 'Análisis de Resultados',
        description: 'Procesamiento e interpretación de datos experimentales'
      }
    ]
  }
  return imageData[currentLanguage.value as keyof typeof imageData] || imageData.pt
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? images.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  autoplayInterval = window.setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.carousel-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #115C8D;
  margin-bottom: 48px;
}

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(7, 116, 179, 0.15);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(17, 92, 141, 0.9));
  color: white;
  padding: 40px 32px 32px;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.carousel-slide:hover .image-overlay {
  transform: translateY(0);
}

.image-overlay h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: white;
}

.image-overlay p {
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.5;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  color: #115C8D;
  transition: all 0.3s ease;
  z-index: 10;
}

.carousel-btn:hover {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn svg {
  width: 24px;
  height: 24px;
}

.carousel-btn.prev {
  left: 20px;
}

.carousel-btn.next {
  right: 20px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.indicator {
  border-radius: 12px;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator:hover,
.indicator.active {
  background: white;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .carousel-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 32px;
  }
  
  .carousel-wrapper {
    height: 400px;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
  }
  
  .carousel-btn svg {
    width: 20px;
    height: 20px;
  }
  
  .carousel-btn.prev {
    left: 16px;
  }
  
  .carousel-btn.next {
    right: 16px;
  }
  
  .image-overlay {
    padding: 24px 20px 20px;
  }
  
  .image-overlay h3 {
    font-size: 1.25rem;
  }
  
  .image-overlay p {
    font-size: 0.9rem;
  }
}
</style>