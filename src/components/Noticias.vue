<template>
    <section class="news-section">
        <div class="container">
            <div class="news-header">
                <div class="icon-wrapper">
                    <svg viewBox="0 0 24 24" class="news-icon">
                        <path fill="currentColor"
                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                </div>
                <h1>{{ translations.title }}</h1>
                <p class="news-subtitle">{{ translations.subtitle }}</p>
            </div>

            <div class="news-grid">
                <article v-for="post in posts" :key="post.id" class="news-card" @click="openPostDetail(post.id)">
                    <router-link :to="{ name: 'NoticiaDetalhe', params: { id: post.id } }">
                        <div class="news-image">
                            <img :src="post.thumbnail" :alt="post.title" />
                            <div class="news-category">{{ post.category }}</div>
                        </div>

                        <div class="news-content">
                            <div class="news-meta">
                                <div class="news-date">
                                    <svg viewBox="0 0 24 24" class="meta-icon">
                                        <path fill="currentColor"
                                            d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                    </svg>
                                    <span>{{ post.publishedDate }}</span>
                                </div>
                                <div class="news-author">
                                    <svg viewBox="0 0 24 24" class="meta-icon">
                                        <path fill="currentColor"
                                            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4V6C15 7.66 13.66 9 12 9S9 7.66 9 6V4L3 7V9H21M21 10H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10Z" />
                                    </svg>
                                    <span>{{ post.author }}</span>
                                </div>
                            </div>

                            <h3 class="news-title">{{ post.title }}</h3>

                            <p class="news-excerpt">{{ post.excerpt }}</p>

                            <div class="news-tags">
                                <span v-for="tag in post.tags" :key="tag" class="tag">
                                    {{ tag }}
                                </span>
                            </div>

                            <div class="read-more">
                                <span>{{ translations.readMore }}</span>
                                <svg viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                                </svg>
                            </div>
                        </div>
                    </router-link>
                </article>
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

import seminarioImg from '../assets/publicacoes/imagem1.jpg'

const currentLanguage = inject('currentLanguage', ref('pt'))
const showPostDetail = inject('showPostDetail', (_id: number) => { })


const openPostDetail = (postId: number) => {
    showPostDetail(postId)
}

const translations = computed(() => {
    const texts = {
        pt: {
            title: 'Conferências',
            subtitle: 'Acompanhe as últimas novidades e atualizações sobre pesquisas e eventos científicos',
            readMore: 'Ler mais',
            backToHome: 'Voltar ao Início'
        },
        en: {
            title: 'Conferences',
            subtitle: 'Follow the latest news and updates on scientific research and events',
            readMore: 'Read more',
            backToHome: 'Back to Home'
        },
        es: {
            title: 'Conferencias',
            subtitle: 'Sigue las últimas noticias y actualizaciones sobre investigación y eventos científicos',
            readMore: 'Leer más',
            backToHome: 'Volver al Inicio'
        }
    }
    return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})

const posts = ref([
    {
        id: 1,
        title: 'Apresentação de Gabriel Ferreira na 9º Jornada Científica Brasil-França 2025 reforça a integração entre pesquisa e políticas públicas de saúde',
        excerpt: 'A Temporada França-Brasil 2025 celebra dois séculos de amizade e cooperação entre as duas nações. Durante o seminário, o Dr. Gabriel Ferreira apresentou trabalho sobre nova modalidade de diagnóstico de HIV.',
        thumbnail: seminarioImg,
        publishedDate: '08/10/2025',
        author: 'Redação',
        category: 'Pesquisa Internacional',
        tags: ['HIV', 'Brasil-França', 'Cooperação Científica', 'Diagnóstico']
     },
    // {
    //     id: 2,
    //     title: 'Nova Descoberta em Biotecnologia Promete Revolucionar Tratamentos',
    //     excerpt: 'Pesquisadores brasileiros desenvolvem nova técnica que pode transformar o tratamento de doenças infecciosas através de nanotecnologia avançada.',
    //     thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    //     publishedDate: '15/09/2025',
    //     author: 'Dr. Gabriel Ferreira',
    //     category: 'Biotecnologia',
    //     tags: ['Nanotecnologia', 'Tratamento', 'Inovação']
    // },
    // {
    //     id: 3,
    //     title: 'Congresso Internacional de Leishmanioses Destaca Pesquisas Brasileiras',
    //     excerpt: 'Trabalhos desenvolvidos no Brasil ganham reconhecimento internacional no principal evento mundial sobre leishmanioses.',
    //     thumbnail: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
    //     publishedDate: '02/09/2025',
    //     author: 'Equipe GEMS',
    //     category: 'Eventos Científicos',
    //     tags: ['Leishmanioses', 'Congresso', 'Reconhecimento']
    // }
])
</script>

<style scoped>
.news-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
    padding: 80px 0;
}

.news-header {
    text-align: center;
    margin-bottom: 60px;
}

.icon-wrapper {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #A7D9F7 0%, #0774B3 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
}

.news-icon {
    width: 40px;
    height: 40px;
    color: white;
}

.news-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #115C8D;
    margin-bottom: 16px;
}

.news-subtitle {
    font-size: 1.2rem;
    color: #5E99B8;
    max-width: 600px;
    margin: 0 auto;
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 32px;
    max-width: 1200px;
    margin: 0 auto;
}

.news-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(7, 116, 179, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.news-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(7, 116, 179, 0.2);
}

.news-image {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
}

.news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.news-card:hover .news-image img {
    transform: scale(1.05);
}

.news-category {
    position: absolute;
    top: 16px;
    left: 16px;
    background: linear-gradient(135deg, #0774B3 0%, #115C8D 100%);
    color: white;
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
}

.news-content {
    padding: 24px;
}

.news-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-size: 0.85rem;
    color: #5E99B8;
}

.news-date,
.news-author {
    display: flex;
    align-items: center;
    gap: 6px;
}

.meta-icon {
    width: 16px;
    height: 16px;
}

.news-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #115C8D;
    line-height: 1.4;
    margin-bottom: 16px;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-excerpt {
    color: #5E99B8;
    line-height: 1.6;
    margin-bottom: 20px;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.tag {
    background: #f0f7ff;
    color: #0774B3;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

.read-more {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #0774B3;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.news-card:hover .read-more {
    color: #115C8D;
    transform: translateX(4px);
}

.read-more svg {
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
    .news-section {
        padding: 60px 0;
    }

    .news-header h1 {
        font-size: 2rem;
    }

    .news-subtitle {
        font-size: 1.1rem;
    }

    .news-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .news-image {
        height: 200px;
    }

    .news-content {
        padding: 20px;
    }

    .news-title {
        font-size: 1.1rem;
    }

    .news-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
}
</style>