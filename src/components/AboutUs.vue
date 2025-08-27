<template>
  <section class="about-sections">
    <!-- Quem Somos -->
    <div class="about-section who-we-are">
      <div class="container">
        <div class="section-content">
          <div class="text-content">
            <h2>{{ translations.whoWeAre.title }}</h2>
            <p v-for="paragrafo in translations.whoWeAre.description" key="paragrafo">{{ paragrafo }}</p>
            <div class="highlights">
              <div class="highlight-item" v-for="item in translations.whoWeAre.highlights" :key="item">
                <svg viewBox="0 0 24 24" class="check-icon">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
          <div class="image-content">
            <img src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Equipe de pesquisa" />
          </div>
        </div>
      </div>
    </div>

    <!-- Nossa Missão -->
    <div class="about-section mission">
      <div class="container">
        <div class="section-content reverse">
          <div class="image-content">
            <img src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Missão científica" />
          </div>
          <div class="text-content">
            <div class="icon-wrapper">
              <svg viewBox="0 0 24 24" class="section-icon">
                <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h2>{{ translations.mission.title }}</h2>
            <p>{{ translations.mission.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Nossa Visão -->
    <div class="about-section vision">
      <div class="container">
        <div class="section-content">
          <div class="text-content">
            <div class="icon-wrapper">
              <svg viewBox="0 0 24 24" class="section-icon">
                <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <h2>{{ translations.vision.title }}</h2>
            <p>{{ translations.vision.description }}</p>
          </div>
          <div class="image-content">
            <img src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Visão científica" />
          </div>
        </div>
      </div>
    </div>

    <!-- Nossos Valores -->
    <div class="about-section values">
      <div class="container">
        <div class="values-header">
          <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" class="section-icon">
              <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h2>{{ translations.values.title }}</h2>
          <p class="values-intro">{{ translations.values.intro }}</p>
        </div>
        
        <div class="values-grid">
          <div class="value-card" v-for="value in translations.values.items" :key="value.title">
            <div class="value-icon">
              <component :is="value.icon" />
            </div>
            <h2>{{ value.title }}</h2>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HandHeart, PersonStanding, Shapes } from 'lucide-vue-next'
import { computed, inject, ref, h } from 'vue'

const currentLanguage = inject('currentLanguage', ref('pt'))

// Ícones para os valores
const IntegrityIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z' })
])

const InnovationIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z' })
])

const ExcellenceIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })
])

const CollaborationIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3 4v7h2v7h3v-7h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4z' })
])

const translations = computed(() => {
  const texts = {
    pt: {
      whoWeAre: {
        title: 'Quem Somos',
        description: [
            'Fundada em 2024 por Gabriel Ferreira, a GEMS Biotec nasceu da necessidade de integrar inteligência epidemiológica, inovação biomédica e ações concretas nos territórios. Orgulhosamente piauiense, a empresa é comprometida com a ciência, a saúde pública e a transformação social.',
            'Nosso nome carrega os pilares que norteiam nossa atuação: Genética, Epidemiologia, Medicina e Saúde. Atuamos com o propósito de promover avanços científicos que transformem radicalmente a vida das pessoas, colocando a inovação a serviço da vida.',
            'Acreditamos que ciência, ética e responsabilidade social devem caminhar juntas. Por isso, firmamos parcerias transdisciplinares, aplicamos tecnologias de ponta e orientamos nossas ações por dados, sempre com foco em soluções sustentáveis e impacto positivo nos territórios.'
        ],
        highlights: [
          'Equipe multidisciplinar especializada',
          'Parcerias com instituições internacionais',
          'Foco em inovação e impacto social'
        ]
      },
      mission: {
        title: 'Nossa Missão',
        description: 'A nossa missão é promover inovações científicas que transformem a saúde e a qualidade de vida das pessoas. Buscamos constantemente avanços em medicina, com o compromisso de utilizar a melhor ciência disponível e tecnologias de ponta para impactar positivamente a sociedade. Por meio de parcerias estratégicas e políticas pró-vida, nossa missão é liderar a evolução de soluções que atendam aos desafios de saúde globais, colocando a vida e o bem-estar humano em primeiro plano.'
      },
      vision: {
        title: 'Nossa Visão',
        description: 'Queremos transformar o mundo por meio da inovação científica, revolucionando a prática médica e tornando a saúde mais inclusiva e equitativa. Buscamos construir um futuro onde todos, independentemente de sua origem ou condição, tenham acesso a soluções de saúde de alta qualidade. Nosso compromisso é impactar positivamente as vidas das pessoas e das comunidades, promovendo um sistema de saúde mais resiliente, acessível e sustentável. Acreditamos que, ao refletir a diversidade das comunidades e integrar a ciência ao cotidiano das pessoas, podemos criar um mundo mais saudável e justo para todos.'
      },
      values: {
        title: 'Nossos Valores',
        intro: 'Com esses princípios, construímos um ambiente onde a ciência lidera a mudança e inspira decisões que colocam a vida em primeiro lugar:',
        items: [
          {
            title: 'Excelência',
            description: 'Compromisso em oferecer soluções de alta qualidade, pautadas em rigor técnico e inovação contínua.',
            icon: ExcellenceIcon
          },
          {
            title: 'Coragem',
            description: 'Atuar com determinação para enfrentar desafios complexos e propor mudanças transformadoras.',
            icon: IntegrityIcon
          },
          {
            title: 'Equidade',
            description: 'Garantir que nossas ações beneficiem todas as comunidades de forma justa e imparcial.',
            icon: Shapes
          },
          {
            title: 'Ética',
            description: 'Conduzir todas as relações com integridade, transparência e responsabilidade social.',
            icon: HandHeart
          },
          {
            title: 'Colaboração',
            description: 'Trabalhar em conjunto com parceiros, gestores e comunidades para alcançar resultados sustentáveis.',
            icon: CollaborationIcon
          },
          {
            title: 'Inclusão',
            description: 'Valorizar e integrar diferentes perspectivas, garantindo participação ampla e representativa',
            icon: PersonStanding
          }
        ]
      }
    },
    en: {
      whoWeAre: {
        title: 'Who We Are',
        description: 'We are a research group dedicated to advancing biotechnology and molecular medicine. Our multidisciplinary team combines expertise in genetics, epidemiology, and public health to develop innovative solutions that positively impact society.',
        highlights: [
          'Over 15 years of research experience',
          'Specialized multidisciplinary team',
          'Partnerships with international institutions',
          'Focus on innovation and social impact'
        ]
      },
      mission: {
        title: 'Our Mission',
        description: 'To develop excellence in biotechnology, genetics, and epidemiology research, contributing to the advancement of scientific knowledge and improving population quality of life through innovative and sustainable health solutions.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To be recognized as a reference center for biotechnological research in Latin America, leading scientific discoveries that transform modern medicine and contribute to a healthier and more sustainable future for all.'
      },
      values: {
        title: 'Our Values',
        intro: 'The principles that guide our research and scientific conduct',
        items: [
          {
            title: 'Integrity',
            description: 'We conduct our research with ethics, transparency, and scientific rigor, maintaining the highest quality standards.',
            icon: IntegrityIcon
          },
          {
            title: 'Innovation',
            description: 'We constantly seek new approaches and technologies to solve complex challenges in healthcare.',
            icon: InnovationIcon
          },
          {
            title: 'Excellence',
            description: 'We commit to superior quality in all aspects of our research and development.',
            icon: ExcellenceIcon
          },
          {
            title: 'Collaboration',
            description: 'We value teamwork and strategic partnerships to maximize the impact of our discoveries.',
            icon: CollaborationIcon
          }
        ]
      }
    },
    es: {
      whoWeAre: {
        title: 'Quiénes Somos',
        description: 'Somos un grupo de investigación dedicado al avance de la biotecnología y medicina molecular. Nuestro equipo multidisciplinario combina experiencia en genética, epidemiología y salud pública para desarrollar soluciones innovadoras que impacten positivamente la sociedad.',
        highlights: [
          'Equipo multidisciplinario especializado',
          'Alianzas con instituciones internacionales',
          'Enfoque en innovación e impacto social'
        ]
      },
      mission: {
        title: 'Nuestra Misión',
        description: 'Desarrollar investigación de excelencia en biotecnología, genética y epidemiología, contribuyendo al avance del conocimiento científico y la mejora de la calidad de vida de la población a través de soluciones innovadoras y sostenibles en salud.'
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'Ser reconocido como un centro de referencia en investigación biotecnológica en América Latina, liderando descubrimientos científicos que transformen la medicina moderna y contribuyan a un futuro más saludable y sostenible para todos.'
      },
      values: {
        title: 'Nuestros Valores',
        intro: 'Los principios que guían nuestra investigación y conducta científica',
        items: [
          {
            title: 'Integridad',
            description: 'Conducimos nuestra investigación con ética, transparencia y rigor científico, manteniendo los más altos estándares de calidad.',
            icon: IntegrityIcon
          },
          {
            title: 'Innovación',
            description: 'Buscamos constantemente nuevos enfoques y tecnologías para resolver desafíos complejos en el área de la salud.',
            icon: InnovationIcon
          },
          {
            title: 'Excelencia',
            description: 'Nos comprometemos con la calidad superior en todos los aspectos de nuestra investigación y desarrollo.',
            icon: ExcellenceIcon
          },
          {
            title: 'Colaboración',
            description: 'Valoramos el trabajo en equipo y las alianzas estratégicas para maximizar el impacto de nuestros descubrimientos.',
            icon: CollaborationIcon
          }
        ]
      }
    }
  }
  return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})
</script>

<style scoped>
.about-sections {
  width: 100%;
}

.about-section {
  padding: 80px 0;
  position: relative;
}

.about-section:nth-child(odd) {
  background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
}

.about-section:nth-child(even) {
  background: white;
}

.section-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.section-content.reverse {
  direction: rtl;
}

.section-content.reverse > * {
  direction: ltr;
}

.text-content {
  padding: 20px 0;
}

.text-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #115C8D;
  margin-bottom: 24px;
  line-height: 1.2;
}

.text-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #5E99B8;
  margin-bottom: 32px;
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #A7D9F7 0%, #0774B3 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.section-icon {
  width: 30px;
  height: 30px;
  color: white;
}

.highlights {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  color: #115C8D;
}

.check-icon {
  width: 20px;
  height: 20px;
  color: #0774B3;
  background: #A7D9F7;
  border-radius: 50%;
  padding: 4px;
  flex-shrink: 0;
}

.image-content {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(7, 116, 179, 0.15);
}

.image-content img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-content:hover img {
  transform: scale(1.05);
}

/* Seção de Valores */
.values {
  background: linear-gradient(135deg, #115C8D 0%, #0774B3 100%);
  color: white;
}

.values-header {
  text-align: center;
  margin-bottom: 60px;
}

.values .icon-wrapper {
  background: rgba(255, 255, 255, 0.2);
  margin: 0 auto 24px;
}

.values h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.values-intro {
  font-size: 1.2rem;
  color: #115C8D;
  max-width: 600px;
  margin: 0 auto;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.value-card {
  background: rgba(255, 255, 255, 0.1);
  background-color: #A7D9F7;
  padding: 40px 32px;
  border-radius: 16px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
  background-color: #5E99B8;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.value-icon {
  width: 60px;
  height: 60px;
  background: #115C8D;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}


.value-icon svg {
  width: 30px;
  height: 30px;
  color: #f0f7ff;
}

.value-card h2 {
  font-size: xx-large;
  color: #115C8D;
}
.value-card:hover h2 {
  font-size: xx-large;
  color: #f0f7ff;
}
.value-card:hover .value-icon {
  background: #A7D9F7;
}
.value-card:hover .value-icon svg {
  color: #115C8D;
}

.value-card p {
  color: #5E99B8;
  line-height: 1.6;
  margin: 0;
}
.value-card:hover p {
  color: #f0f7ff;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .about-section {
    padding: 60px 0;
  }
  
  .section-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .text-content h2 {
    font-size: 2rem;
  }
  
  .text-content p {
    font-size: 1rem;
  }
  
  .image-content img {
    height: 300px;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .value-card {
    padding: 32px 24px;
  }
  
  .values h2 {
    font-size: 2rem;
  }
  
  .values-intro {
    font-size: 1.1rem;
  }
}
</style>