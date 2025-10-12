<template>
    <section class="article-detail-section">
        <div class="container">
            <div class="article-detail-container">
                <!-- Header do Artigo -->
                <div class="article-header">
                    <div class="journal-badge">
                        <span class="journal-name">{{ article.journal }}</span>
                        <div class="journal-metrics">
                            <span class="impact-factor">IF: {{ article.impactFactor }}</span>
                            <span class="quartile">Q{{ article.quartile }}</span>
                        </div>
                    </div>
                    <div class="article-year">{{ article.year }}</div>
                </div>

                <!-- Título Principal -->
                <h1 class="article-title">{{ article.title }}</h1>

                <!-- Autores -->
                <div class="authors-section">
                    <h3>{{ translations.authors }}</h3>
                    <p class="authors-list">{{ article.authors }}</p>
                </div>

                <!-- Métricas do Artigo -->
                <div class="article-metrics">
                    <div class="metric-item">
                        <svg viewBox="0 0 24 24" class="metric-icon">
                            <path fill="currentColor"
                                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" />
                        </svg>
                        <div>
                            <span class="metric-value">{{ article.citations }}</span>
                            <span class="metric-label">{{ translations.citations }}</span>
                        </div>
                    </div>

                    <div class="metric-item">
                        <svg viewBox="0 0 24 24" class="metric-icon">
                            <path fill="currentColor"
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <div>
                            <span class="metric-value">{{ article.impactFactor }}</span>
                            <span class="metric-label">{{ translations.impactFactor }}</span>
                        </div>
                    </div>

                    <div class="metric-item">
                        <svg viewBox="0 0 24 24" class="metric-icon">
                            <path fill="currentColor"
                                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                        <div>
                            <span class="metric-value">Q{{ article.quartile }}</span>
                            <span class="metric-label">{{ translations.quartile }}</span>
                        </div>
                    </div>
                </div>

                <!-- Tags -->
                <div class="tags-section">
                    <h3>{{ translations.keywords }}</h3>
                    <div class="tags-list">
                        <span v-for="tag in article.tags" :key="tag" class="tag">
                            {{ tag }}
                        </span>
                    </div>
                </div>

                <!-- Abstract -->
                <div class="abstract-section">
                    <h3>{{ translations.abstract }}</h3>
                    <div class="abstract-content">
                        <p>{{ article.fullAbstract }}</p>
                    </div>
                </div>

                <!-- Metodologia -->
                <div class="methodology-section" v-if="article.methodology">
                    <h3>{{ translations.methodology }}</h3>
                    <div class="methodology-content">
                        <p>{{ article.methodology }}</p>
                    </div>
                </div>

                <!-- Resultados Principais -->
                <div class="results-section" v-if="article.keyResults">
                    <h3>{{ translations.keyResults }}</h3>
                    <div class="results-content">
                        <ul>
                            <li v-for="result in article.keyResults" :key="result">{{ result }}</li>
                        </ul>
                    </div>
                </div>

                <!-- Conclusões -->
                <div class="conclusions-section" v-if="article.conclusions">
                    <h3>{{ translations.conclusions }}</h3>
                    <div class="conclusions-content">
                        <p>{{ article.conclusions }}</p>
                    </div>
                </div>

                <!-- Informações de Publicação -->
                <div class="publication-info">
                    <h3>{{ translations.publicationInfo }}</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">{{ translations.journal }}:</span>
                            <span class="info-value">{{ article.journal }}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">{{ translations.volume }}:</span>
                            <span class="info-value">{{ article.volume || 'N/A' }}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">{{ translations.pages }}:</span>
                            <span class="info-value">{{ article.pages || 'N/A' }}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">{{ translations.publishedDate }}:</span>
                            <span class="info-value">{{ article.publishedDate || article.year }}</span>
                        </div>
                    </div>
                </div>

                <!-- Ações -->
                <div class="article-actions">
                    <a :href="article.doi" target="_blank" class="action-btn primary">
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                        </svg>
                        {{ translations.viewDOI }}
                    </a>

                    <a :href="article.pdfUrl" target="_blank" class="action-btn secondary">
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                        {{ translations.downloadPDF }}
                    </a>

                    <button class="action-btn tertiary" @click="shareArticle">
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
                        </svg>
                        {{ translations.share }}
                    </button>
                </div>

                <!-- Botão Voltar -->
                <div class="back-section">
                    <router-link to="/GEMS/artigos/" class="btn-back">
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                        </svg>
                        {{ translations.backToArticles }}
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { useRoute } from 'vue-router';


const currentLanguage = inject('currentLanguage', ref('pt'))

const route = useRoute();


const shareArticle = () => {
    if (navigator.share) {
        navigator.share({
            title: article.value.title,
            text: article.value.abstract,
            url: article.value.doi
        })
    } else {
        // Fallback para navegadores que não suportam Web Share API
        navigator.clipboard.writeText(article.value.doi)
        alert('Link copiado para a área de transferência!')
    }
}

const translations = computed(() => {
    const texts = {
        pt: {
            authors: 'Autores',
            citations: 'Citações',
            impactFactor: 'Fator de Impacto',
            quartile: 'Quartil',
            keywords: 'Palavras-chave',
            abstract: 'Resumo',
            methodology: 'Metodologia',
            keyResults: 'Principais Resultados',
            conclusions: 'Conclusões',
            publicationInfo: 'Informações de Publicação',
            journal: 'Revista',
            volume: 'Volume',
            pages: 'Páginas',
            publishedDate: 'Data de Publicação',
            viewDOI: 'Ver DOI',
            downloadPDF: 'Baixar PDF',
            share: 'Compartilhar',
            backToArticles: 'Voltar aos Artigos'
        },
        en: {
            authors: 'Authors',
            citations: 'Citations',
            impactFactor: 'Impact Factor',
            quartile: 'Quartile',
            keywords: 'Keywords',
            abstract: 'Abstract',
            methodology: 'Methodology',
            keyResults: 'Key Results',
            conclusions: 'Conclusions',
            publicationInfo: 'Publication Information',
            journal: 'Journal',
            volume: 'Volume',
            pages: 'Pages',
            publishedDate: 'Published Date',
            viewDOI: 'View DOI',
            downloadPDF: 'Download PDF',
            share: 'Share',
            backToArticles: 'Back to Articles'
        },
        es: {
            authors: 'Autores',
            citations: 'Citas',
            impactFactor: 'Factor de Impacto',
            quartile: 'Cuartil',
            keywords: 'Palabras clave',
            abstract: 'Resumen',
            methodology: 'Metodología',
            keyResults: 'Resultados Principales',
            conclusions: 'Conclusiones',
            publicationInfo: 'Información de Publicación',
            journal: 'Revista',
            volume: 'Volumen',
            pages: 'Páginas',
            publishedDate: 'Fecha de Publicación',
            viewDOI: 'Ver DOI',
            downloadPDF: 'Descargar PDF',
            share: 'Compartir',
            backToArticles: 'Volver a Artículos'
        }
    }
    return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})

// Dados expandidos dos artigos (simulando uma base de dados mais completa)
const articlesData = [
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
        tags: ['Leishmania infantum', 'Nanopore direct RNA sequencing', 'Illumina RNA-Seq', 'trans-splicing', 'Polyadenylation', 'Alternative RNA processing'],
        abstract: 'Leishmania relies on posttranscriptional control to regulate gene expression. Protein-coding genes are synthesised as polycistronic precursors that are processed into individual mRNAs by trans-splicing adding the spliced leader (SL) RNA to the 5’-end and 3’ cleavage-polyadenylation. Here, we employ Nanopore direct RNA sequencing (DRS) combined with Illumina RNA-Seq to comprehensively interrogate the transcriptomes of Leishmania infantum developmental stages at single-molecule resolution',
        fullAbstract: 'Protozoan parasites from the Leishmania genus cause leishmaniasis, a complex vector-borne disease with an estimate of 700 000 to 1 million new cases annually encompassing a large spectrum of clinical manifestations depending on the species, ranging from self-healing cutaneous lesions to lethal visceral infections [1]. Visceral leishmaniasis (VL) caused by L. infantum and L. donovani species is the second most lethal tropical and subtropical disease [2]. Leishmania spp. are transmitted to the mammalian host as metacyclic promastigotes through the bite of infected sandflies and once inside the macrophage phagolysosome they differentiate into amastigote forms, which are responsible for establishing the disease. Unlike most other eukaryotes, Leishmania and related trypanosomatids lack individual control of transcription initiation, and regulation of gene expression relies heavily on posttranscriptional regulation (PTR) (reviewed in [3, 4]). All mRNAs are synthesised as polycistronic precursors that are co-transcriptionally processed into individual mRNAs by trans-splicing and polyadenylation [5,6,7,8,9,10,11]. Trans-splicing catalyzed by the spliceosome cuts the polycistronic precursor and adds to the 5′-end of all mRNAs a 39-nt miniexon (spliced leader; SL) containing a highly modified 5′-cap structure [12,13,14]. Similarly to 3′ cis splice acceptor sites in other eukaryotes, trans-splicing sites in trypanosomatids consist of the consensus AG dinucleotide splice acceptor site preceded by a polypyrimidine tract of variable length [9, 15,16,17,18,19]. Unlike other eukaryotes (reviewed in [13]), no conserved motifs recognized for cleavage and polyadenylation at the 3′-end of mRNAs were found in Leishmania transcripts. Previous reports in Leishmania [10] and Trypanosoma brucei [9, 11, 20] have shown that trans-splicing and polyadenylation are temporally and mechanistically coupled, such that the SL acceptor site of the downstream gene determines the location of the polyadenylation site of the upstream gene. Since the first sequenced genome of L. major in 2005 [8], the development of next generation sequencing (NGS) technologies led to a continuously growing number of Leishmania species that have their genome sequenced (https://tritrypdb.org/) with several full transcriptomes being already characterized [15, 21,22,23,24,25]. Following the first draft of the L. infantum (strain JPCM5) genome sequencing [26] and its improved genome assembly [27], genome-wide expression analysis [28] and full transcriptomes using NGS tools [22, 25] have been reported. Previous studies in L. major [15, 23] and L. donovani [24] have provided insights into the 5′- and 3′-untranslated region (3’UTR) boundaries of mRNAs and detected widespread alternative processing events.Long non-coding RNAs (lncRNAs), a class of transcripts longer than 200 nt without protein-coding activity, have emerged in recent years as essential components of various biological processes across all domains of life regulating gene expression at the levels of transcription, pre-mRNA processing, mRNA stability and translation [29,30,31]. In addition, lncRNAs have been found to sequester miRNAs, control epigenetic processes, form biomolecular condensates, regulate organelles and encode micropeptides [32,33,34,35,36]. Similarly to mRNAs, lncRNAs usually harbor a 5’ cap and are polyadenylated at their 3’-end [30, 31]. LncRNAs can be intergenic, antisense or intronic and can also include circular RNAs and trans-acting regulatory RNAs derived from 3’UTRs of mRNAs [29, 37, 38]. LncRNAs are often highly cell-specific [39, 40], they affect several cellular functions of great physiological relevance, and changes in their expression are inherent to numerous diseases, notably cancer [31, 41, 42]. Statistics from Human GENCODE release 47 report that the human genome contains 35,934 lncRNA genes and 191,106 loci transcripts, which is twice the amount of protein-coding genes, with other estimates exceeding 100,000 lncRNAs [43]. LncRNAs have also been described in the transcriptomes of Leishmania [21, 44, 45] and related Trypanosoma species [17, 46, 47]. However, despite some progress, lncRNAs are still not well characterized in Leishmania, and little is known about their molecular functions and regulatory roles throughout the parasite development. In this study, we provide the first comprehensive transcriptomic analysis of L. infantum developmental stages at single-molecule resolution using Nanopore direct RNA sequencing (DRS). This analysis enabled us to accurately define the 5’- and 3’-ends of L. infantum transcripts, thereby determining the length of UTRs, and to gain further insights into the genomic context favoring pre-mRNA processing and the extent of alternative splicing and polyadenylation during the parasite development. Moreover, DRS analysis substantially advanced our knowledge of the non-coding transcriptome of L. infantum developmental stages. We showed that L. infantum expresses a rich repertoire of previously unreported lncRNAs that are processed mostly from 3’UTRs through trans-spicing and polyadenylation, and several are developmentally regulated or specific to the L. infantum transcriptome. Altogether, these findings provide important novel insights into the transcriptome complexity and expression dynamics of protein-coding and non-coding sequences in both stages of L. infantum development.',
        methodology: 'L. infantum (MHOM/MA/67/ITMAP-263) promastigotes were cultured at 25 °C in SDM‐79 medium supplemented with 5 µg/ml hemin at pH 7.0 and 10% heat‐inactivated Fetal Calf Serum (FCS) (Multicell Wisent Inc., Canada). Differentiation of L. infantum promastigotes into amastigote differentiating forms in culture (axenic amastigotes; AxeAMA) was induced by growing 1 × 106 log-phase promastigotes in MAA/20 medium [48] in 25 cm2 flasks at 37 °C in the presence of 5% CO2 for three sub-passages prior to RNA and protein extractions.',
        keyResults: [
            'This is the first comprehensive transcriptomic analysis of L. infantum developmental stages using single-molecule Nanopore DRS. Our findings advance knowledge on existing Leishmania expression datasets and provide new insights into the transcriptome complexity and dynamics of both protein-coding and non-coding sequences throughout the parasite development',
            'Oxford Nanopore direct RNA sequencing of L. infantum promastigote and amastigote developmental stages',
            'Defining primary polyadenylation and spliced leader addition sites of L. infantum transcripts based on aligned poly(A) and full-length ONT-DRS reads',
            'Alternative splicing and polyadenylation of L. infantum transcripts in promastigote and amastigote developmental stages',
            'Revisiting the genomic context favoring tran-splicing and polyadenylation based on full-length ONT-DRS reads',
            'The L. infantum transcriptome expresses a rich repertoire of long non-coding RNAs derived mostly from 3’UTRs'
        ],
        conclusions: 'This study provides the first comprehensive transcriptomic analysis of Leishmania infantum developmental stages at single-molecule resolution using Nanopore direct RNA sequencing (DRS). Sequencing full-length native RNA molecules enabled us to accurately define the 5’- and 3’-end boundaries of Leishmania transcripts and the length of UTRs. Considering, the central role 3′UTRs play in regulating gene expression in Leishmania, delimiting 3′UTRs would be pivotal for understanding post-transcriptional control in these parasites. Moreover, DRS analysis provided further insights into the genomic context favoring pre-mRNA processing and the extent of alternative splicing and polyadenylation depending on the stage of development, thus emphasizing the dynamics of gene regulation across both parasite life stages. In addition, this study substantially advanced our knowledge of the non-coding transcriptome of L. infantum developmental stages by providing novel insights into the rich repertoire of previously unannotated lncRNAs, their level of expression during development and species-specificity. Of importance, we showed that lncRNAs are processed mostly from 3’UTRs through trans-splicing and polyadenylation, like mRNAs, and exhibit generally distinct expression profiles from their normally associated mRNA, suggesting a different mode of regulation from the 3’UTRs they derived. Several of these lncRNAs are developmentally regulated, representing more than a quarter of the L. infantum stage-regulated transcriptome, hence highlighting their importance in parasite development. Overall, these findings not only improve our knowledge of existing Leishmania expression datasets, but also provide new important insights into the transcriptome complexity and dynamics of protein-coding and non-coding sequences in both stages of parasite development and pave the way for future investigations of new regulatory pathways.',
        doi: 'https://bmcgenomics.biomedcentral.com/articles/10.1186/s12864-025-11767-8',
        pdfUrl: 'https://bmcgenomics.biomedcentral.com/counter/pdf/10.1186/s12864-025-11767-8.pdf',
        volume: '',
        pages: '',
        publishedDate: '01 July 2025'
    },
    {
        id: 2,
        title: 'Immune–Pathological Correlates of Disease Severity in New-World Kala-Azar: The Role of Parasite Load and Cytokine Profiles',
        authors: 'SENE, INGRIDI DE SOUZA ; COSTA, DORCAS LAMOUNIER ; ZACARIAS, DANIELE ALVES ; DOS SANTOS, JAILTHON CARLOS ; FERREIRA, GABRIEL REIS ; ANDRADE, DANIELA RODRIGUES ; ANDRADE, JORGE CLARÊNCIO DE SOUSA ; COSTA, CARLOS HENRIQUE NERY',
        journal: 'Pathogens',
        year: 2025,
        impactFactor: '3.3',
        quartile: 1,
        citations: 89,
        category: 'leishmaniasis',
        tags: ['visceral leishmaniasis', 'Leishmania infantum', 'hemorrhage', 'sepsis', 'HIV-coinfection', 'mortality', 'bone marrow', 'innate immune response', 'adaptative', 'immunity'],
        abstract: 'Kala-azar is a protracted disease caused by the protozoan Leishmania infantum (zoonotic) or L. donovani (anthroponotic), transmitted by sandflies. Patients present with fever, anemia, and hepatosplenomegaly, potentially progressing to hemorrhaging, secondary infections, and death. Its pathogenesis is linked to an exaggerated cytokine response. We studied 72 hospitalized patients, analyzing clinical data and outcomes in relation to L. infantum DNA loads in blood and bone marrow, and plasma concentrations of IL-1β, IL-6, IL-8, IL-10, IL-12, TNF-α, and TGF-β.',
        fullAbstract: 'Kala-azar is a protracted disease caused by the protozoan Leishmania infantum (zoonotic) or L. donovani (anthroponotic), transmitted by sandflies. Patients present with fever, anemia, and hepatosplenomegaly, potentially progressing to hemorrhaging, secondary infections, and death. Its pathogenesis is linked to an exaggerated cytokine response. We studied 72 hospitalized patients, analyzing clinical data and outcomes in relation to L. infantum DNA loads in blood and bone marrow, and plasma concentrations of IL-1β, IL-6, IL-8, IL-10, IL-12, TNF-α, and TGF-β. Cytokine levels were found to be elevated. L. infantum kDNA loads in blood and bone marrow were strongly correlated and increased with disease duration. Higher parasite loads were observed in men, adults, and HIV-infected patients, and they were significantly associated with mortality. IL-6 was independently linked to sepsis. In multivariate analysis, IL-12 was the only cytokine inversely associated with blood parasite load. Parasite load, but not cytokine levels, correlated with disease severity, suggesting additional mechanisms drive progression. IL-12 appears to limit parasitemia, indicating a weak, persistent adaptive immune response that is ultimately overwhelmed by a progressive, inefficient, and inflammatory innate response.',
        methodology: 'All kala-azar patients were treated at the “Natan Portella” Tropical Disease Institute in Teresina, Brazil, and kala-azar cases confirmed through the presence of L. infantum amastigotes on bone marrow smears or the presence of promastigotes in culture were included in this study. This study was performed on a sample of 72 patients, sequentially admitted with available clinical information obtained by a single physician and with cryopreserved plasma, blood, and bone marrow samples obtained before treatment.',
        keyResults: [
            'Quantity of Parasite Load and Cytokines',
            'Plasma and Bone Marrow L. infantum Loads',
            'Time of Disease, Plasma and Bone Marrow L. infantum Loads, Plasma Cytokines, and Severity',
            'Plasma and Bone Marrow L. infantum Loads, Age, Sex, HIV Infection, and Kala-Azar Severity'
        ],
        conclusions: 'This study found that patients with kala-azar have a high inflammatory status and show signs of a substantial risk of death. On the other hand, the data also shows that children, women, and persons living with HIV have a more prominent regulatory immune response. Markedly, however, IL-1β, IL-6, IL-8, IL-10, IL-12, TNF-α, and TGF-β were not or only poorly associated with the risk of death. Moreover, while the levels of the studied cytokines did not increase with the duration of the disease, plasma and bone marrow L. infantum loads increased progressively. Additionally, plasma and bone marrow L. infantum loads were highly correlated, and parasite loads were higher among men, adults, and HIV-infected patients. Finally, higher plasma and bone marrow kDNA loads were associated with increased severity. Most plasma cytokines were not related to plasma or bone marrow L. infantum load, but higher plasma IL-12 levels were independently associated with lower L. infantum loads.',
        doi: 'https://doi.org/10.3390/pathogens14070615',
        pdfUrl: 'https://www.mdpi.com/2076-0817/14/7/615/pdf?version=1750417460',
        volume: '',
        pages: '',
        publishedDate: '20 June 2025'
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
        tags: ['Leishmanioses', 'Visceral leishmaniasis', 'Kala-azar', 'Leishmania infantum', 'Hypersplenism', 'AIDS', 'T-lymphocytes', 'CD4+', 'CD8+'],
        abstract: 'Visceral leishmaniasis (VL), or kala-azar, is a common comorbidity in patients with AIDS in endemic areas. Many patients continue to experiences relapses of VL despite virological control, but with immunological failure. These patients remain chronically symptomatic with hypersplenism, for example with anemia, leukopenia, and thrombocytopenia, and are at risk of severe co-infection due to low CD4+ count. Therefore, in this study, splenectomized patients with VL and HIV infection were investigated to understand why the CD4+ count fails to recover in these patients, evaluating the importance of spleen mass for hypersplenism and immunological failure.',
        fullAbstract: 'Visceral leishmaniasis (VL), or kala-azar, is responsible for significant morbidity in tropical and subtropical areas. The viscerotropic protozoa Leishmania infantum and Leishmania donovani are intracellular parasites of the mononuclear lineage called amastigotes. They are transmitted by sand flies and distributed mainly in the vertebrate host\'s spleen, liver, and bone marrow [1]. VL is also a common comorbidity in patients with HIV in endemic regions. Patients with low CD4+ cell counts in the first episode of VL develop frequent relapses that, despite the use of appropriate medications [2], persist chronically, with VL symptoms such as anemia, cachexia, hepatosplenomegaly, and decreased blood cell counts [3]. Importantly, even patients with virological control of HIV experience immunological failure, with very low CD4+ cell counts, and are at increased risk of opportunistic infections, successive hospitalizations, and death.Splenectomy rescue therapy was previously performed in 13 patients with VL, with and without HIV infection, who were not responsive to secondary prophylaxis to VL as a salvage therapy, as splenectomy may be curative for patients with relapsing VL without immunosuppression [4]. This communication adds information but is now restricted to the 11 patients with HIV infection who underwent the surgical procedure. The study aims to describe the relationships between pre- and post-splenectomy complete blood count (CBC), and in particular CD4+ and CD8+ cell counts, with respect to the spleen mass as a way to understand the role of an enlarged spleen in relapses and immunological failure in co-infected patients.',
        methodology: 'From a retrospective open cohort of 13 patients who had previously undergone splenectomy as salvage therapy for relapsing VL, 11 patients with HIV infection were investigated. This study compared the patients’ complete blood cell count (CBC) and CD4+ and CD8+ cell counts before and after splenectomy with respect to spleen weight.',
        keyResults: [
            'CBC was substantially improved after splenectomy, indicating hypersplenism. However, to the best of our knowledge, this is the first study to show that spleen mass is strongly and negatively correlated with CD4+ cell count (ρ = −0.71, P = 0.015).',
            'Pearson’s correlation coefficient of CD4+ and CD8+ lymphocytes, hemoglobin, leucocytes, and platelets',
            'Characteristics and blood tests of 11 patients with relapsing visceral leishmaniasis and AIDS who underwent splenectomy',
            'Spearman’s correlation coefficients between spleen weight and CD4+ and CD8+ counts, hemoglobin, leukocytes, platelets, before and after splenectomy, and C-reactive protein levels in patients who underwent splenectomy with relapsing visceral leishmaniasis and AIDS'
        ],
        conclusions: 'Despite the small sample and the lack of sophisticated analysis and pathology data for this study, the observations described herein shed light on immunological failure and relapsing VL. Initially unnoticed HIV infection likely drives low CD4+ count, allowing the development of VL. After that, amastigote proliferation inside macrophages increases the spleen size and splenic inflammation. Meanwhile, the host\'s inflammatory immune response to the parasite depletes CD4+ cells, establishing a positive feedback loop that allows parasite replication despite HIV control. In later stages, CD8+ depletion could weaken the control of infected macrophages, driving the disease to severe immunological failure at its final stage. These hypotheses, however, need to be tested with appropriate molecular and histopathological studies. Our stored spleen and serum samples will help to clarify these crucial issues for patients with a poor prognosis and without a consolidated treatment strategy, providing hope for new treatments and approaches.',
        doi: 'https://parasitesandvectors.biomedcentral.com/articles/10.1186/s13071-024-06151-6',
        pdfUrl: 'https://parasitesandvectors.biomedcentral.com/counter/pdf/10.1186/s13071-024-06151-6.pdf',
        volume: '17',
        pages: '132',
        publishedDate: '15 March 2024'
    }
]

const article = computed(() => {

    const artigoId = Number(route.params.id);

    if (!isNaN(artigoId)) {
        return articlesData.find(a => a.id === artigoId) || articlesData[0]
    }

    return articlesData[0]
})


</script>

<style scoped>
.article-detail-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
    padding: 80px 0;
}

.article-detail-container {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(7, 116, 179, 0.15);
    overflow: hidden;
}

.article-header {
    background: linear-gradient(135deg, #0774B3 0%, #115C8D 100%);
    color: white;
    padding: 32px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.journal-badge {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.journal-name {
    font-size: 1.2rem;
    font-weight: 600;
}

.journal-metrics {
    display: flex;
    gap: 16px;
}

.impact-factor,
.quartile {
    background: rgba(255, 255, 255, 0.2);
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 500;
}

.article-year {
    background: #A7D9F7;
    color: #115C8D;
    padding: 8px 16px;
    border-radius: 16px;
    font-weight: 600;
    font-size: 1.1rem;
}

.article-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #115C8D;
    line-height: 1.3;
    margin: 0;
    padding: 40px 40px 32px;
}

.authors-section,
.tags-section,
.abstract-section,
.methodology-section,
.results-section,
.conclusions-section,
.publication-info {
    padding: 0 40px 32px;
}

.authors-section h3,
.tags-section h3,
.abstract-section h3,
.methodology-section h3,
.results-section h3,
.conclusions-section h3,
.publication-info h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #115C8D;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.authors-list {
    font-size: 1.1rem;
    color: #5E99B8;
    font-weight: 500;
    margin: 0;
}

.article-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    padding: 32px 40px;
    background: #f8fbff;
    border-top: 1px solid #e0e7ff;
    border-bottom: 1px solid #e0e7ff;
}

.metric-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(7, 116, 179, 0.1);
}

.metric-icon {
    width: 32px;
    height: 32px;
    color: #0774B3;
    flex-shrink: 0;
}

.metric-value {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #115C8D;
}

.metric-label {
    display: block;
    font-size: 0.9rem;
    color: #5E99B8;
    font-weight: 500;
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

.abstract-content,
.methodology-content,
.conclusions-content {
    background: #f8fbff;
    padding: 24px;
    border-radius: 12px;
    border-left: 4px solid #0774B3;
}

.abstract-content p,
.methodology-content p,
.conclusions-content p {
    line-height: 1.8;
    color: #5E99B8;
    font-size: 1.05rem;
    margin: 0;
    text-align: justify;
}

.results-content {
    background: #f8fbff;
    padding: 24px;
    border-radius: 12px;
    border-left: 4px solid #0774B3;
}

.results-content ul {
    margin: 0;
    padding-left: 20px;
}

.results-content li {
    line-height: 1.6;
    color: #5E99B8;
    font-size: 1.05rem;
    margin-bottom: 12px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}

.info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #f8fbff;
    border-radius: 8px;
    border: 1px solid #e0e7ff;
}

.info-label {
    font-weight: 600;
    color: #115C8D;
}

.info-value {
    color: #5E99B8;
    font-weight: 500;
}

.article-actions {
    display: flex;
    gap: 16px;
    padding: 32px 40px;
    background: #f8fbff;
    border-top: 1px solid #e0e7ff;
    flex-wrap: wrap;
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.action-btn.primary {
    background: #0774B3;
    color: white;
}

.action-btn.primary:hover {
    background: #115C8D;
    transform: translateY(-2px);
}

.action-btn.secondary {
    background: #e74c3c;
    color: white;
}

.action-btn.secondary:hover {
    background: #c0392b;
    transform: translateY(-2px);
}

.action-btn.tertiary {
    background: #A7D9F7;
    color: #115C8D;
}

.action-btn.tertiary:hover {
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
    .article-detail-section {
        padding: 60px 0;
    }

    .article-header {
        padding: 24px 20px;
        flex-direction: column;
        gap: 16px;
    }

    .journal-metrics {
        justify-content: center;
    }

    .article-title {
        font-size: 1.8rem;
        padding: 32px 20px 24px;
    }

    .authors-section,
    .tags-section,
    .abstract-section,
    .methodology-section,
    .results-section,
    .conclusions-section,
    .publication-info {
        padding: 0 20px 24px;
    }

    .article-metrics {
        grid-template-columns: 1fr;
        padding: 24px 20px;
        gap: 16px;
    }

    .metric-item {
        padding: 16px;
    }

    .article-actions {
        padding: 24px 20px;
        flex-direction: column;
    }

    .action-btn {
        justify-content: center;
    }

    .back-section {
        padding: 24px 20px;
    }

    .info-grid {
        grid-template-columns: 1fr;
    }

    .info-item {
        flex-direction: column;
        gap: 8px;
        text-align: center;
    }
}
</style>