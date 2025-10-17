<template>
  <section class="post-detail-section">
    <div class="container">
      <div class="post-detail-container">
        <!-- Header do Post -->
        <div class="post-header">
          <div class="post-category">{{ post.category }}</div>
          <div class="post-meta">
            <div class="meta-item">
              <svg viewBox="0 0 24 24" class="meta-icon">
                <path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              <span>{{ translations.publishedOn }} {{ post.publishedDate }}</span>
            </div>
            <div class="meta-item">
              <svg viewBox="0 0 24 24" class="meta-icon">
                <path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4V6C15 7.66 13.66 9 12 9S9 7.66 9 6V4L3 7V9H21M21 10H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10Z"/>
              </svg>
              <span>{{ translations.writtenBy }} {{ post.author }}</span>
            </div>
          </div>
        </div>

        <!-- Título Principal -->
        <h1 class="post-title">{{ post.title }}</h1>

        <!-- Imagem Principal -->
        <div class="post-featured-image">
          <img :src="post.featuredImage" :alt="post.title" />
          <div class="image-caption">{{ post.imageCaption }}</div>
        </div>

        <!-- Conteúdo do Post -->
        <div class="post-content">
          <div v-for="(section, index) in post.content" :key="index" class="content-section">
            <p v-if="section.type === 'paragraph'" v-html="section.text"></p>
            <div v-else-if="section.type === 'image'" class="content-image">
              <img :src="section.src" :alt="section.alt" />
              <div class="image-caption">{{ section.caption }}</div>
            </div>
            <h3 v-else-if="section.type === 'subtitle'" class="content-subtitle">{{ section.text }}</h3>
          </div>
        </div>

        <!-- Tags -->
        <div class="post-tags">
          <h3>{{ translations.tags }}</h3>
          <div class="tags-list">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Parcerias -->
        <div class="partnerships-section" v-if="post.partnerships">
          <h3>{{ translations.partnerships }}</h3>
          <div class="partnerships-grid">
            <div v-for="(partnership, index) in post.partnerships" :key="index" class="partnership-item">
              <img :src="partnership.logo" :alt="partnership.name" />
            </div>
          </div>
        </div>

        <!-- Ações -->
        <div class="post-actions">
          <button class="action-btn share" @click="sharePost">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/>
            </svg>
            {{ translations.share }}
          </button>
        </div>

        <!-- Botão Voltar -->
        <div class="back-section">
          <router-link to="/GEMS/noticias/" class="btn-back">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            {{ translations.backToNews }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'

import seminarioImg from '../assets/publicacoes/imagem1.jpg'
import apresentacaoImg from '../assets/publicacoes/imagem2.jpg'
import laboratorioImg from '../assets/publicacoes/imagem3.jpg'
import estagioImg from '../assets/publicacoes/imagem4.jpg'
import francaBrasil from '../assets/publicacoes/parceiro1.png'
import ids from '../assets/publicacoes/parceiro2.jpg'
import anrs from '../assets/publicacoes/parceiro3.png'

const props = defineProps<{
  postId: number
}>()

const currentLanguage = inject('currentLanguage', ref('pt'))

const sharePost = () => {
  if (navigator.share) {
    navigator.share({
      title: post.value.title,
      text: post.value.excerpt,
      url: window.location.href
    })
  } else {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copiado para a área de transferência!')
  }
}

const translations = computed(() => {
  const texts = {
    pt: {
      publishedOn: 'Publicado em',
      writtenBy: 'Escrito por:',
      tags: 'Tags',
      partnerships: 'Parcerias',
      share: 'Compartilhar',
      backToNews: 'Voltar às Notícias'
    },
    en: {
      publishedOn: 'Published on',
      writtenBy: 'Written by:',
      tags: 'Tags',
      partnerships: 'Partnerships',
      share: 'Share',
      backToNews: 'Back to News'
    },
    es: {
      publishedOn: 'Publicado en',
      writtenBy: 'Escrito por:',
      tags: 'Etiquetas',
      partnerships: 'Alianzas',
      share: 'Compartir',
      backToNews: 'Volver a Noticias'
    }
  }
  return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})

// Dados expandidos dos posts
const postsData = [
  {
    id: 1,
    title: 'Apresentação de Gabriel Ferreira na 9º Jornada Científica Brasil-França 2025 reforça a integração entre pesquisa e políticas públicas de saúde',
    excerpt: 'A Temporada França-Brasil 2025 celebra dois séculos de amizade e cooperação entre as duas nações.',
    publishedDate: '08/10/2025',
    author: 'Redação',
    category: 'Pesquisa Internacional',
    tags: ['HIV', 'Brasil-França', 'Cooperação Científica', 'Diagnóstico'],
    featuredImage: seminarioImg,
    imageCaption: 'Fonte: Laudemiro Bezerra/MS',
    content: [
      {
        type: 'paragraph',
        text: 'A Temporada França-Brasil 2025, nascida da vontade conjunta dos presidentes Luiz Inácio Lula da Silva e Emmanuel Macron, celebra dois séculos de amizade e cooperação entre as duas nações. São duzentos anos de relações oficiais, mas também de histórias, trocas e impulsos compartilhados entre dois povos que a História insiste em aproximar. Nesse contexto, a cooperação científica na área da saúde ganhou novo fôlego com a realização do 31º Seminário Técnico-Científico e da 9ª Jornada Científica da ANRS MIE Brasil-França, realizados entre os dias 1º e 3 de outubro de 2025, em Fortaleza (CE).'
      },
      {
        type: 'image',
        src: apresentacaoImg,
        alt: 'Seminário Brasil-França',
        caption: 'Fonte: Transmissão Secretaria de Vigilância e Saúde e ambiente'
      },
      {
        type: 'paragraph',
        text: 'Promovido pelo Ministério da Saúde do Brasil, em parceria com a Agência Nacional Francesa de Pesquisa sobre HIV, Hepatites Virais e Doenças Infecciosas Emergentes (ANRS | MIE), o evento reuniu pesquisadores, gestores públicos, profissionais de saúde, representantes da sociedade civil e organismos internacionais. O objetivo foi ampliar o diálogo científico e fortalecer ações conjuntas nas áreas de vigilância em saúde, destacando o papel da ciência e da inovação como instrumentos estratégicos para políticas públicas mais eficazes e sustentáveis.'
      },
      {
        type: 'image',
        src: laboratorioImg,
        alt: 'Apresentação científica',
        caption: 'Fonte: Transmissão Secretaria de Vigilância e Saúde e ambiente'
      },
      {
        type: 'paragraph',
        text: 'Durante o seminário, o Dr. Gabriel Ferreira apresentou o trabalho "Nova modalidade de diagnóstico de HIV e falha imunológica em pacientes com carga viral indetectável", resultado de sua colaboração com Faculdade de Medicina da Universidade de Paris VI, trabalho que pretende encontrar a cura do HIV. Essa pesquisa visa descobrir novos caminhos para alcançar a cura funcional do HIV, ou seja, controlar o vírus sem precisar eliminá-lo completamente do corpo. O objetivo é entender por que as células de defesa (CD4⁺) continuam morrendo ou enfraquecendo mesmo quando o vírus está sob controle com os medicamentos.'
      },
      {
        type: 'paragraph',
        text: 'Para isso, a equipe francesa, liderada pelo Dr. Jérôme Estaquier, estuda amostras de primatas infectados, enquanto no Brasil, sob coordenação do Dr. Gabriel Ferreira, são analisados tecidos humanos de pessoas que vivem com HIV. A comparação entre esses dois modelos permite compreender o que realmente acontece dentro dos órgãos mais afetados pelo vírus. Com base nessas descobertas, o projeto testa novas estratégias terapêuticas que possam proteger e restaurar o sistema imunológico, buscando fazer com que o próprio organismo seja capaz de controlar o HIV naturalmente, sem depender continuamente dos medicamentos.'
      },
      {
        type: 'paragraph',
        text: 'A pesquisa visa descobrir novos caminhos para alcançar a cura funcional do HIV, ou seja, controlar o vírus sem precisar eliminá-lo completamente do corpo. O objetivo é entender por que as células de defesa (CD4⁺) continuam morrendo ou enfraquecendo mesmo quando o vírus está controlado pelos medicamentos, comprometendo a recuperação do sistema imunológico. Para responder a essas questões, a equipe francesa, liderada pelo Dr. Jérôme Estaquier, estuda amostras de primatas infectados, enquanto no Brasil, sob coordenação do Dr. Gabriel Ferreira, são analisados tecidos humanos de pessoas que vivem com HIV.'
      },
      {
        type: 'paragraph',
        text: 'A comparação entre esses dois modelos permite compreender o que realmente ocorre nos órgãos mais afetados pelo vírus e validar, em humanos, os mecanismos observados em primatas. Em situações graves e refratárias, a retirada do baço (esplenectomia) tem sido considerada uma terapia de salvamento, possibilitando análises únicas de amostras de baço, pele e linfonodos mesentéricos. A partir desse material, foi desenvolvido um modelo de pesquisa colaborativo com o Prof. Jérôme Estaquier, unindo experiência clínica e tecnologia laboratorial de ponta.'
      },
      {
        type: 'paragraph',
        text: 'O estudo utiliza equipamentos capazes de produzir microlâminas dos tecidos coletados e gerar imagens tridimensionais (3D), oferecendo uma visualização detalhada das interações celulares e dos processos imunológicos. Essa inovação abre caminhos promissores para compreender como o HIV afeta o sistema imune em nível tecidual e para testar novas estratégias terapêuticas capazes de proteger e restaurar as células CD4⁺, permitindo que o próprio organismo controle o vírus naturalmente, com menor dependência dos medicamentos.'
      },
      {
        type: 'image',
        src: estagioImg,
        alt: 'Pesquisa laboratorial',
        caption: 'Fonte: Transmissão Secretaria de Vigilância e Saúde e ambiente'
      },
      {
        type: 'paragraph',
        text: 'A colaboração foi além da pesquisa translacional, incluindo um estágio clínico no Hospital Saint-Louis, referência mundial em doenças infecciosas e palco de importantes estudos clínicos internacionais. Sob a liderança do Dr. Jean-Michel Molina, uma das maiores autoridades globais no tratamento e na prevenção do HIV, a experiência proporcionou uma imersão em protocolos clínicos avançados e em estratégias inovadoras de manejo da infecção.'
      },
      {
        type: 'paragraph',
        text: 'Essa vivência serviu de inspiração para o desenvolvimento de projetos voltados à profilaxia pré-exposição (PrEP) contra o HIV no Piauí. Durante o período no hospital, Gabriel teve a oportunidade de acompanhar diariamente o Dr. Willy Rozenbaum, responsável pela co-descoberta do vírus HIV e um verdadeiro ícone da medicina. Com mais de 80 anos de idade, o Dr. Rozenbaum continua atendendo pacientes no ambulatório e participando ativamente de estudos clínicos sobre novas terapias e vacinas.'
      },
      {
        type: 'paragraph',
        text: 'Dr. Gabriel também apresentou seus estudos desenvolvidos no Brasil, com ampla difusão entre os hospitais de Paris, o que promoveu discussões científicas enriquecedoras e abriu novas oportunidades de colaboração internacional.'
      },
      {
        type: 'paragraph',
        text: 'Durante a conferência, sua atuação foi elogiada pela Dra. Nathalie, coordenadora francesa do programa, e reconhecida pela equipe do Hospital Saint-Louis, que destacou a relevância de sua contribuição científica e o impacto de sua experiência como exemplo da cooperação entre Brasil e França. Sua participação no evento simboliza o espírito da Temporada França-Brasil 2025: a ciência como ponte entre países e instrumento de transformação social, capaz de unir conhecimento, inovação e compromisso humano em favor da saúde pública global.'
      }
    ],
    partnerships: [
      {
        name: 'Ministério da Saúde',
        logo: francaBrasil
      },
      {
        name: 'IDS',
        logo: ids
      },
      {
        name: 'ANRS MIE',
        logo: anrs
      }
    ]
  }
]

const post = computed(() => {
  return postsData.find(p => p.id === props.postId) || postsData[0]
})
</script>

<style scoped>
.post-detail-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
  padding: 80px 0;
}

.post-detail-container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(7, 116, 179, 0.15);
  overflow: hidden;
}

.post-header {
  background: linear-gradient(135deg, #0774B3 0%, #115C8D 100%);
  color: white;
  padding: 32px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
}

.post-category {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.9rem;
}

.post-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: right;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}

.meta-icon {
  width: 16px;
  height: 16px;
}

.post-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #115C8D;
  line-height: 1.3;
  margin: 0;
  padding: 40px 40px 32px;
}

.post-featured-image {
  margin-bottom: 32px;
}

.post-featured-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.image-caption {
  background: #f8fbff;
  padding: 12px 40px;
  font-size: 0.85rem;
  color: #5E99B8;
  font-style: italic;
  border-left: 4px solid #A7D9F7;
}

.post-content {
  padding: 0 40px 32px;
}

.content-section {
  margin-bottom: 24px;
}

.content-section p {
  line-height: 1.8;
  color: #5E99B8;
  font-size: 1.05rem;
  text-align: justify;
  margin-bottom: 20px;
}

.content-subtitle {
  font-size: 1.4rem;
  font-weight: 600;
  color: #115C8D;
  margin: 32px 0 16px 0;
}

.content-image {
  margin: 32px 0;
}

.content-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.content-image .image-caption {
  margin-top: 8px;
  padding: 8px 0;
  background: transparent;
  border-left: none;
  text-align: center;
}

.post-tags {
  padding: 32px 40px;
  border-top: 1px solid #f0f7ff;
}

.post-tags h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #115C8D;
  margin-bottom: 16px;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  background: linear-gradient(135deg, #A7D9F7 0%, #0774B3 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.partnerships-section {
  padding: 32px 40px;
  border-top: 1px solid #f0f7ff;
}

.partnerships-section h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #115C8D;
  margin-bottom: 24px;
}

.partnerships-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px;
}

.partnership-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f8fbff;
  border-radius: 12px;
  border: 1px solid #e0e7ff;
}

.partnership-item img {
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
}

.post-actions {
  padding: 32px 40px;
  border-top: 1px solid #f0f7ff;
  text-align: center;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.action-btn.share {
  background: #A7D9F7;
  color: #115C8D;
}

.action-btn.share:hover {
  background: #5E99B8;
  color: white;
  transform: translateY(-2px);
}

.action-btn svg {
  width: 18px;
  height: 18px;
}

.back-section {
  padding: 32px 40px;
  text-align: center;
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
  .post-detail-section {
    padding: 60px 0;
  }
  
  .post-header {
    padding: 24px 20px;
    flex-direction: column;
    text-align: center;
  }
  
  .post-meta {
    text-align: center;
  }
  
  .post-title {
    font-size: 1.8rem;
    padding: 32px 20px 24px;
  }
  
  .post-featured-image img {
    height: 250px;
  }
  
  .image-caption {
    padding: 12px 20px;
  }
  
  .post-content {
    padding: 0 20px 24px;
  }
  
  .content-section p {
    font-size: 1rem;
  }
  
  .post-tags,
  .partnerships-section,
  .post-actions,
  .back-section {
    padding: 24px 20px;
  }
  
  .partnerships-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 16px;
  }
  
  .partnership-item {
    padding: 16px;
  }
}
</style>