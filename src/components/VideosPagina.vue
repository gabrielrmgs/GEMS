<template>
  <section class="youtube-section">
    <div class="container">
      <div class="youtube-header">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" class="youtube-icon">
            <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
        <h1>{{ translations.title }}</h1>
        <p class="youtube-subtitle">{{ translations.subtitle }}</p>
      </div>

      <div class="videos-grid">
        <div 
          v-for="video in videos" 
          :key="video.id"
          class="video-card"
        >
          <div class="video-thumbnail">
            <img :src="video.thumbnail" :alt="video.title" />
            <div class="play-overlay">
              <svg viewBox="0 0 24 24" class="play-icon">
                <path fill="currentColor" d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div class="video-duration">{{ video.duration }}</div>
          </div>
          
          <div class="video-info">
            <h3 class="video-title">{{ video.title }}</h3>
            <p class="video-description">{{ video.description }}</p>
            <div class="video-meta">
              <div class="video-stats">
                <svg viewBox="0 0 24 24" class="meta-icon">
                  <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
                <span>{{ video.views }}</span>
              </div>
              <div class="video-date">
                <svg viewBox="0 0 24 24" class="meta-icon">
                  <path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                <span>{{ video.publishedAt }}</span>
              </div>
            </div>
            <a :href="video.url" target="_blank" class="watch-btn">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              {{ translations.watchVideo }}
            </a>
          </div>
        </div>
      </div>

      <div class="back-to-home">
        <router-link to="/GEMS/#navegacao" class="btn-back">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          {{ translations.backToHome }}
        </router-link>
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
      title: 'Vídeos no YouTube',
      subtitle: 'Acompanhe as apresentações e discussões científicas de Gabriel Ferreira',
      watchVideo: 'Assistir no YouTube',
      backToHome: 'Voltar ao Início'
    },
    en: {
      title: 'YouTube Videos',
      subtitle: 'Follow Gabriel Ferreira\'s scientific presentations and discussions',
      watchVideo: 'Watch on YouTube',
      backToHome: 'Back to Home'
    },
    es: {
      title: 'Videos de YouTube',
      subtitle: 'Sigue las presentaciones y discusiones científicas del Gabriel Ferreira',
      watchVideo: 'Ver en YouTube',
      backToHome: 'Volver al Inicio'
    }
  }
  return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})

const videos = ref([
  {
    id: 1,
    title: 'Piauiense faz Phd no Canadá e fala sobre a importância das vacinas contra Covid-19 | Notícias da Boa',
    description: 'Discussão sobre a importância das vacinas contra Covid-19.',
    thumbnail: 'https://i.ytimg.com/vi_webp/uQhM1PKJC00/maxresdefault.webp',
    duration: '16:29',
    views: '217 visualizações',
    publishedAt: '26 de Jan, 2021',
    url: 'https://www.youtube.com/watch?v=uQhM1PKJC00'
  }
])
</script>

<style scoped>
.youtube-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
  padding: 80px 0;
}

.youtube-header {
  text-align: center;
  margin-bottom: 60px;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.youtube-icon {
  width: 40px;
  height: 40px;
  color: white;
}

.youtube-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #115C8D;
  margin-bottom: 16px;
}

.youtube-subtitle {
  font-size: 1.2rem;
  color: #5E99B8;
  max-width: 600px;
  margin: 0 auto;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.video-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(7, 116, 179, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.video-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(7, 116, 179, 0.2);
}

.video-thumbnail {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.video-card:hover .video-thumbnail img {
  transform: scale(1.05);
}

.play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 0, 0, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.video-card:hover .play-overlay {
  background: rgba(255, 0, 0, 1);
  transform: translate(-50%, -50%) scale(1.1);
}

.play-icon {
  width: 24px;
  height: 24px;
  color: white;
  margin-left: 2px;
}

.video-duration {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.video-info {
  padding: 24px;
}

.video-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #115C8D;
  margin-bottom: 12px;
  line-height: 1.4;
}

.video-description {
  color: #5E99B8;
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.video-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.85rem;
  color: #A4BCD4;
}

.video-stats,
.video-date {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-icon {
  width: 16px;
  height: 16px;
}

.watch-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.watch-btn:hover {
  background: linear-gradient(135deg, #cc0000 0%, #990000 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
}

.watch-btn svg {
  width: 16px;
  height: 16px;
}

.back-to-home {
  text-align: center;
  margin-top: 60px;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  background: #0774B3;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: #115C8D;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(7, 116, 179, 0.3);
}

.btn-back svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .youtube-section {
    padding: 60px 0;
  }
  
  .youtube-header h1 {
    font-size: 2rem;
  }
  
  .youtube-subtitle {
    font-size: 1.1rem;
  }
  
  .videos-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .video-thumbnail {
    height: 200px;
  }
  
  .video-info {
    padding: 20px;
  }
  
  .video-title {
    font-size: 1.1rem;
  }
  
  .video-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>