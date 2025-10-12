<template>
  <section class="carousel-section">
    <div style="padding: 0" class="container">
      <h2 class="section-title">{{ translations.title }}</h2>

      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(article, index) in articles" :key="index" class="carousel-slide">
              <router-link :to="{ name: 'ArtigoDetalhe', params: { id: article.id } }">
                <div class="article-container">
                  <img :src="article.thumbnail" :alt="article.title" />
                  <div class="article-overlay">
                    <div class="article-header">
                      <span class="journal-name">{{ article.journal }}</span>
                      <span class="article-year">{{ article.year }}</span>
                    </div>
                    <h3>{{ article.title }}</h3>
                    <p class="article-abstract">{{ article.abstract }}</p>
                    <div class="article-metrics">
                      <div class="metric">
                        <svg viewBox="0 0 24 24" class="metric-icon">
                          <path fill="currentColor"
                            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" />
                        </svg>
                        <span>{{ article.citations }}</span>
                      </div>
                      <div class="metric">
                        <svg viewBox="0 0 24 24" class="metric-icon">
                          <path fill="currentColor"
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span>IF: {{ article.impactFactor }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <button class="carousel-btn prev" @click="prevSlide">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <button class="carousel-btn next" @click="nextSlide">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>

        <div class="carousel-indicators">
          <button v-for="(article, index) in articles" :key="index" class="indicator"
            :class="{ active: currentSlide === index }" @click="goToSlide(index)"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, inject, onMounted, onUnmounted } from 'vue'

const currentLanguage = inject('currentLanguage', ref('pt'))
const showArticleDetail = inject('showArticleDetail', (id: number) => { })
const currentSlide = ref(0)
let autoplayInterval: number | null = null

const translations = computed(() => {
  const texts = {
    pt: {
      title: 'Artigos Publicados'
    },
    en: {
      title: 'Published Articles'
    },
    es: {
      title: 'Artículos Publicados'
    }
  }
  return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})

const articles = ref([
  {
    id: 1,
    title: 'Novel insights into the Leishmania infantum transcriptome diversity of protein-coding and non-coding sequences in both stages of parasite development using nanopore direct RNA sequencing',
    authors: 'FERREIRA, G. R.; Emond-Rheault, JG ; Lavoie-Ouellet, C ; SMITH, M. A. ; PAPADOPOULOU, B',
    journal: 'BMC Genomics',
    year: 2025,
    impactFactor: '3.7',
    quartile: 1,
    citations: 127,
    category: 'biotechnology',
    tags: ['Biotecnologia', 'Leishmanioses', 'Tratamento'],
    abstract: 'Leishmania relies on posttranscriptional control to regulate gene expression. Protein-coding genes are synthesised as polycistronic precursors that are processed into individual mRNAs by trans-splicing adding the spliced leader (SL) RNA to the 5’-end and 3’ cleavage-polyadenylation. Here, we employ Nanopore direct RNA sequencing (DRS) combined with Illumina RNA-Seq to comprehensively interrogate the transcriptomes of Leishmania infantum developmental stages at single-molecule resolution',
    doi: 'https://bmcgenomics.biomedcentral.com/articles/10.1186/s12864-025-11767-8',
    pdfUrl: 'https://bmcgenomics.biomedcentral.com/counter/pdf/10.1186/s12864-025-11767-8.pdf',
    thumbnail: 'https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2Fs12864-025-11767-8/MediaObjects/12864_2025_11767_Fig2_HTML.png?as=webp'
  },
  {
    id: 2,
    title: 'Immune–Pathological Correlates of Disease Severity in New-World Kala-Azar: The Role of Parasite Load and Cytokine Profiles ',
    authors: 'SENE, INGRIDI DE SOUZA ; COSTA, DORCAS LAMOUNIER ; ZACARIAS, DANIELE ALVES ; DOS SANTOS, JAILTHON CARLOS ; FERREIRA, GABRIEL REIS ; ANDRADE, DANIELA RODRIGUES ; ANDRADE, JORGE CLARÊNCIO DE SOUSA ; COSTA, CARLOS HENRIQUE NERY',
    journal: 'Pathogens',
    year: 2025,
    impactFactor: '3.3',
    quartile: 1,
    citations: 89,
    category: 'leishmaniasis',
    tags: ['Leishmanioses', 'Diagnóstico', 'RNA'],
    abstract: 'Kala-azar is a protracted disease caused by the protozoan Leishmania infantum (zoonotic) or L. donovani (anthroponotic), transmitted by sandflies. Patients present with fever, anemia, and hepatosplenomegaly, potentially progressing to hemorrhaging, secondary infections, and death. Its pathogenesis is linked to an exaggerated cytokine response. We studied 72 hospitalized patients, analyzing clinical data and outcomes in relation to L. infantum DNA loads in blood and bone marrow, and plasma concentrations of IL-1β, IL-6, IL-8, IL-10, IL-12, TNF-α, and TGF-β. Cytokine levels were found to be elevated. L. infantum kDNA loads in blood and bone marrow were strongly correlated and increased with disease duration. Higher parasite loads were observed in men, adults, and HIV-infected patients, and they were significantly associated with mortality. IL-6 was independently linked to sepsis. In multivariate analysis, IL-12 was the only cytokine inversely associated with blood parasite load. Parasite load, but not cytokine levels, correlated with disease severity, suggesting additional mechanisms drive progression. IL-12 appears to limit parasitemia, indicating a weak, persistent adaptive immune response that is ultimately overwhelmed by a progressive, inefficient, and inflammatory innate response.',
    doi: 'https://doi.org/10.3390/pathogens14070615',
    pdfUrl: 'https://www.mdpi.com/2076-0817/14/7/615/pdf?version=1750417460',
    thumbnail: 'https://pub.mdpi-res.com/pathogens/pathogens-14-00615/article_deploy/html/images/pathogens-14-00615-ag-550.jpg?1750417621'
  },
  {
    id: 3,
    title: 'The spleen is the graveyard of CD4+ cells in patients with immunological failure of visceral leishmaniasis and AIDS',
    authors: 'REINALDO, LUIS GUSTAVO CAVALCANTE ; ARAÚJO JÚNIOR, RAIMUNDO JOSÉ CUNHA ; DINIZ, THIAGO MELO ; MOURA, RAFAEL DE DEUS ; MENESES FILHO, ANTÔNIO JOSÉ ; FURTADO, CAIO VICTOR VERÇOSA DE MACEDO ; DOS SANTOS, WASHINGTON LUIS CONRADO ; COSTA, DORCAS LAMOUNIER ; EULÁLIO, KELSEN DANTAS ; FERREIRA, GABRIEL R. ; COSTA, CARLOS HENRIQUE NERY',
    journal: 'Parasites Vectors',
    year: 2024,
    impactFactor: '3.5',
    quartile: 1,
    citations: 3,
    category: 'leishmaniasis',
    tags: ['Leishmanioses', 'Visceral leishmaniasis', 'Kala-azar', 'Leishmania infantum'],
    abstract: 'Visceral leishmaniasis (VL), or kala-azar, is a common comorbidity in patients with AIDS in endemic areas. Many patients continue to experiences relapses of VL despite virological control, but with immunological failure. These patients remain chronically symptomatic with hypersplenism, for example with anemia, leukopenia, and thrombocytopenia, and are at risk of severe co-infection due to low CD4+ count. Therefore, in this study, splenectomized patients with VL and HIV infection were investigated to understand why the CD4+ count fails to recover in these patients, evaluating the importance of spleen mass for hypersplenism and immunological failure.',
    doi: 'https://parasitesandvectors.biomedcentral.com/articles/10.1186/s13071-024-06151-6',
    pdfUrl: 'https://parasitesandvectors.biomedcentral.com/counter/pdf/10.1186/s13071-024-06151-6.pdf',
    thumbnail: 'https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2Fs13071-024-06151-6/MediaObjects/13071_2024_6151_Figa_HTML.png?as=webp'
  }
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % articles.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? articles.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const openArticleDetail = (articleId: number) => {
  showArticleDetail(articleId)
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
  cursor: pointer;
}

.article-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.article-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-container:hover img {
  transform: scale(1.05);
}

.article-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(17, 92, 141, 0.9));
  color: white;
  padding: 32px;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.carousel-slide:hover .article-overlay {
  transform: translateY(0);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.journal-name {
  background: rgba(167, 217, 247, 0.9);
  color: #115C8D;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.article-year {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.article-overlay h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: white;
  line-height: 1.3;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-abstract {
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
  margin-bottom: 16px;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 120px;
  overflow-y: auto;
}

.article-metrics {
  display: flex;
  gap: 16px;
}

.metric {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 500;
}

.metric-icon {
  width: 16px;
  height: 16px;
  opacity: 0.8;
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
  width: 12px;
  height: 12px;
  border-radius: 50%;
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

  .article-overlay {
    padding: 20px;
  }

  .article-overlay h3 {
    font-size: 1.1rem;
  }

  .article-abstract {
    font-size: 0.85rem;
    line-clamp: 2;
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
}
</style>