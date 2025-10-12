<template>
  <section class="youtube-section">
    <div class="container">
      <div class="youtube-header">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" class="youtube-icon">
            <path fill="currentColor"
              d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
        <h1>{{ translations.title }}</h1>
        <p class="youtube-subtitle">{{ translations.subtitle }}</p>
      </div>

      <div class="videos-grid">
        <div v-for="video in videos" :key="video.id" class="video-card">
          <div class="video-thumbnail">
            <img :src="video.thumbnail" :alt="video.title" />
            <div class="play-overlay">
              <svg viewBox="0 0 24 24" class="play-icon">
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div class="video-duration">{{ video.duration }}</div>
          </div>

          <div class="video-info">
            <h3 class="video-title">{{ video.title }}</h3>
            <div class="descricao">
              <p class="video-description">{{ video.description }}</p>
            </div>
            <div class="video-meta">
              <div class="video-stats">
                <svg viewBox="0 0 24 24" class="meta-icon">
                  <path fill="currentColor"
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                <span>{{ video.views }}</span>
              </div>
              <div class="video-date">
                <svg viewBox="0 0 24 24" class="meta-icon">
                  <path fill="currentColor"
                    d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
                <span>{{ video.publishedAt }}</span>
              </div>
            </div>
            <a :href="video.url" target="_blank" class="watch-btn">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              {{ translations.watchVideo }}
            </a>
          </div>
        </div>
      </div>

      <div class="back-to-home">
        <router-link to="/GEMS/" class="btn-back">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
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
      title: 'Vídeos',
      subtitle: '',
      watchVideo: 'Assistir no YouTube',
      backToHome: 'Voltar ao Início'
    },
    en: {
      title: 'Videos',
      subtitle: '',
      watchVideo: 'Watch on YouTube',
      backToHome: 'Back to Home'
    },
    es: {
      title: 'Videos',
      subtitle: '',
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
  },
  {
    id: 2,
    title: 'AO VIVO: NOTÍCIAS DO DIA | 29/09/25 | JORNAL DE TV',
    description: 'Bem-vindo ao Notícias do Dia, o seu canal de informação direto ao ponto com Cinthia Lages. Todos os dias, ao vivo, você acompanha os principais acontecimentos que impactam o Brasil e o mundo, com atenção especial ao que movimenta o Piauí e o Nordeste. Aqui você encontra jornalismo com credibilidade, análises precisas, bastidores do poder, denúncias exclusivas e prestação de contas com a população. Com uma linguagem acessível e abordagem responsável, o Notícias do Dia vai além da manchete e entrega conteúdo relevante, útil e indispensável para quem quer começar o dia bem informado. De segunda a sexta, nas primeiras horas da manhã, Cinthia Lages te atualiza com tudo que você precisa saber. Inscreva-se, ative o sininho e faça parte da nossa comunidade que valoriza a notícia séria, transparente e com compromisso com a verdade. Informação que move o país, aqui no Notícias do Dia!',
    thumbnail: 'data:image/jpeg;base64,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',
    duration: '1:50:50',
    views: '93 visualizações',
    publishedAt: '29 de set, 2025',
    url: 'https://www.youtube.com/live/7yuvn4Zbruw'
  },
])
</script>

<style scoped>
.youtube-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
  padding: 80px 0;
}

.descricao {
  max-height: 150px;
  overflow-y: auto;
  min-height: 120px;
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