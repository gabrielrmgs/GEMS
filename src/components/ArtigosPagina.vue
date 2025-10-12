<template>
    <section class="articles-section">
        <div class="container">
            <div id="sectionArtigos" class="articles-header">
                <div class="icon-wrapper">
                    <svg viewBox="0 0 24 24" class="articles-icon">
                        <path fill="currentColor"
                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                </div>
                <h1>{{ translations.title }}</h1>
                <p class="articles-subtitle">{{ translations.subtitle }}</p>
            </div>

            <div class="filter-section">
                <div class="filter-buttons">
                    <button v-for="category in categories" :key="category.id" class="filter-btn"
                        :class="{ active: activeFilter === category.id }" @click="setFilter(category.id)">
                        {{ category.name }}
                    </button>
                </div>
            </div>

            <div class="articles-grid">
                <article v-for="article in filteredArticles" :key="article.id" class="article-card">
                    <router-link :to="{name: 'ArtigoDetalhe', params: { id: article.id} }">
                        <div class="article-header">
                            <div class="journal-info">
                                <span class="journal-name">{{ article.journal }}</span>
                                <span class="impact-factor">IF: {{ article.impactFactor }}</span>
                            </div>
                            <div class="article-year">{{ article.year }}</div>
                        </div>

                        <h3 class="article-title">{{ article.title }}</h3>

                        <div class="authors">
                            <span class="authors-label">{{ translations.authors }}:</span>
                            <span class="authors-list">{{ article.authors }}</span>
                        </div>

                        <div class="article-abstract">
                            <p>{{ article.abstract }}</p>
                        </div>

                        <div class="article-tags">
                            <span v-for="tag in article.tags" :key="tag" class="tag">
                                {{ tag }}
                            </span>
                        </div>

                        <div class="article-footer">
                            <div class="article-stats">
                                <div class="stat-item">
                                    <svg viewBox="0 0 24 24" class="stat-icon">
                                        <path fill="currentColor"
                                            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" />
                                    </svg>
                                    <span>{{ article.citations }}</span>
                                </div>
                                <div class="stat-item">
                                    <svg viewBox="0 0 24 24" class="stat-icon">
                                        <path fill="currentColor"
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span>Q{{ article.quartile }}</span>
                                </div>
                            </div>

                            <!-- <div class="article-actions">
                                <a :href="article.doi" target="_blank" class="action-btn doi-btn">
                                    <svg viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                    </svg>
                                    DOI
                                </a>
                                <a :href="article.pdfUrl" target="_blank" class="action-btn pdf-btn">
                                    <svg viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                    </svg>
                                    PDF
                                </a>
                            </div> -->
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

const currentLanguage = inject('currentLanguage', ref('pt'))
const activeFilter = ref('all')


const setFilter = (categoryId: string) => {
    activeFilter.value = categoryId
}

const translations = computed(() => {
    const texts = {
        pt: {
            title: 'Artigos Publicados',
            subtitle: 'Publicações científicas e contribuições para o avanço da ciência',
            authors: 'Autores',
            backToHome: 'Voltar ao Início',
            all: 'Todos',
            biotechnology: 'Biotecnologia',
            leishmaniasis: 'Leishmanioses',
            covid19: 'COVID-19',
            vaccines: 'Vacinas',
            microbiology: 'Microbiologia'
        },
        en: {
            title: 'Published Articles',
            subtitle: 'Scientific publications and contributions to the advancement of science',
            authors: 'Authors',
            backToHome: 'Back to Home',
            all: 'All',
            biotechnology: 'Biotechnology',
            leishmaniasis: 'Leishmaniasis',
            covid19: 'COVID-19',
            vaccines: 'Vaccines',
            microbiology: 'Microbiology'
        },
        es: {
            title: 'Artículos Publicados',
            subtitle: 'Publicaciones científicas y contribuciones al avance de la ciencia',
            authors: 'Autores',
            backToHome: 'Volver al Inicio',
            all: 'Todos',
            biotechnology: 'Biotecnología',
            leishmaniasis: 'Leishmaniasis',
            covid19: 'COVID-19',
            vaccines: 'Vacunas',
            microbiology: 'Microbiología'
        }
    }
    return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})

const categories = computed(() => [
    { id: 'all', name: translations.value.all },
    { id: 'biotechnology', name: translations.value.biotechnology },
    { id: 'leishmaniasis', name: translations.value.leishmaniasis },
    { id: 'covid19', name: translations.value.covid19 },
    { id: 'vaccines', name: translations.value.vaccines },
    { id: 'microbiology', name: translations.value.microbiology }
])

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
        pdfUrl: 'https://bmcgenomics.biomedcentral.com/counter/pdf/10.1186/s12864-025-11767-8.pdf'
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
        pdfUrl: 'https://www.mdpi.com/2076-0817/14/7/615/pdf?version=1750417460'
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
        pdfUrl: 'https://parasitesandvectors.biomedcentral.com/counter/pdf/10.1186/s13071-024-06151-6.pdf'
    }
])

const filteredArticles = computed(() => {
    if (activeFilter.value === 'all') {
        return articles.value
    }
    return articles.value.filter(article => article.category === activeFilter.value)
})
</script>

<style scoped>
.articles-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
    padding: 80px 0;
}

.articles-header {
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

.articles-icon {
    width: 40px;
    height: 40px;
    color: white;
}

.articles-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #115C8D;
    margin-bottom: 16px;
}

.articles-subtitle {
    font-size: 1.2rem;
    color: #5E99B8;
    max-width: 600px;
    margin: 0 auto;
}

.filter-section {
    margin-bottom: 40px;
}

.filter-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
}

.filter-btn {
    padding: 10px 20px;
    background: white;
    color: #5E99B8;
    border: 2px solid #A4BCD4;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
    background: #0774B3;
    color: white;
    border-color: #0774B3;
}

.articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 32px;
    max-width: 1200px;
    margin: 0 auto;
}

.article-card {
    background: white;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 8px 24px rgba(7, 116, 179, 0.1);
    transition: all 0.3s ease;
    border-left: 4px solid #A7D9F7;
}

.article-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(7, 116, 179, 0.2);
    border-left-color: #0774B3;
}

.article-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
}

.journal-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.journal-name {
    font-weight: 600;
    color: #0774B3;
    font-size: 0.9rem;
}

.impact-factor {
    font-size: 0.8rem;
    color: #5E99B8;
    font-weight: 500;
}

.article-year {
    background: #A7D9F7;
    color: #115C8D;
    padding: 4px 12px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.85rem;
}

.article-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #115C8D;
    line-height: 1.4;
    margin-bottom: 16px;
}

.authors {
    margin-bottom: 16px;
    font-size: 0.9rem;
}

.authors-label {
    font-weight: 600;
    color: #5E99B8;
}

.authors-list {
    color: #115C8D;
}

.article-abstract {
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 20px;
}

.article-abstract p {
    color: #5E99B8;
    line-height: 1.6;
    font-size: 0.95rem;
}

.article-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
}

.tag {
    background: #f0f7ff;
    color: #0774B3;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

.article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #f0f7ff;
}

.article-stats {
    display: flex;
    gap: 16px;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #5E99B8;
    font-size: 0.85rem;
    font-weight: 500;
}

.stat-icon {
    width: 16px;
    height: 16px;
}

.article-actions {
    display: flex;
    gap: 12px;
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.doi-btn {
    background: #0774B3;
    color: white;
}

.doi-btn:hover {
    background: #115C8D;
}

.pdf-btn {
    background: #e74c3c;
    color: white;
}

.pdf-btn:hover {
    background: #c0392b;
}

.action-btn svg {
    width: 14px;
    height: 14px;
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
    .articles-section {
        padding: 60px 0;
    }

    .articles-header h1 {
        font-size: 2rem;
    }

    .articles-subtitle {
        font-size: 1.1rem;
    }

    .articles-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .article-card {
        padding: 24px;
    }

    .article-header {
        flex-direction: column;
        gap: 12px;
    }

    .article-footer {
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
    }

    .filter-buttons {
        gap: 8px;
    }

    .filter-btn {
        padding: 8px 16px;
        font-size: 0.9rem;
    }
}
</style>