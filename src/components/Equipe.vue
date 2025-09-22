<template>
    <section class="team-section">
        <div class="container">
            <div class="team-header">
                <div class="icon-wrapper">
                    <svg viewBox="0 0 24 24" class="team-icon">
                        <path fill="currentColor"
                            d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3 4v7h2v7h3v-7h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4z" />
                    </svg>
                </div>
                <h1>{{ translations.title }}</h1>
                <p class="team-subtitle">{{ translations.subtitle }}</p>
            </div>

            <div class="founder-section">
                <div class="founder-card">
                    <div class="fundador">
                        <div class="founder-image">
                            <img src="../assets/cnpq-gabriel-reis.jpeg" width="600" alt="Gabriel Ferreira" />
                            <div class="founder-badge">
                                <svg viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span>{{ translations.founder }}</span>
                            </div>
                        </div>

                        <div class="founder-info">
                            <div class="founder-header">
                                <h2>Gabriel Ferreira</h2>
                                <p class="founder-title">{{ translations.founderTitle }}</p>
                                <div class="founder-location">
                                    <svg viewBox="0 0 24 24" class="location-icon">
                                        <path fill="currentColor"
                                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    <span>Floriano, Piauí - Brasil</span>
                                </div>
                            </div>

                            <div class="founder-achievements">
                                <div class="achievement-item">
                                    <svg viewBox="0 0 24 24" class="achievement-icon">
                                        <path fill="currentColor"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span>{{ translations.achievements.phd }}</span>
                                </div>
                                <div class="achievement-item">
                                    <svg viewBox="0 0 24 24" class="achievement-icon">
                                        <path fill="currentColor"
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span>{{ translations.achievements.award }}</span>
                                </div>
                                <div class="achievement-item">
                                    <svg viewBox="0 0 24 24" class="achievement-icon">
                                        <path fill="currentColor"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span>{{ translations.achievements.scholarship }}</span>
                                </div>
                                <div class="achievement-item">
                                    <svg viewBox="0 0 24 24" class="achievement-icon">
                                        <path fill="currentColor"
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span>{{ translations.achievements.medal }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="biografia">
                        <div class="founder-bio">
                            <h3>{{ translations.biography }}</h3>
                            <div class="bio-content">
                                <p>{{ translations.bioText }}</p>
                            </div>
                        </div>

                        <div class="founder-specialties">
                            <h3>{{ translations.specialties }}</h3>
                            <div class="specialties-grid">
                                <div class="specialty-tag" v-for="specialty in translations.specialtyList"
                                    :key="specialty">
                                    {{ specialty }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="back-to-home">
                <router-link to="/GEMS/#navegacao" class="btn-back">
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
            title: 'Nossa Equipe',
            subtitle: 'Conheça os profissionais que lideram nossa pesquisa científica',
            founder: 'Fundador',
            founderTitle: 'Biomédico, PhD em Infectologia e Imunologia',
            biography: 'Biografia',
            specialties: 'Especialidades',
            backToHome: 'Voltar ao Início',
            achievements: {
                phd: 'PhD pela Universidade Laval, Canadá',
                award: 'Prêmio "Iniciativa Jovens Pesquisadores" 2017',
                scholarship: 'Bolsa Pierre-Durant da Universidade Laval',
                medal: 'Medalha do Mérito Legislativo do Piauí'
            },
            specialtyList: [
                'Microbiologia Médica',
                'Leishmanioses',
                'HIV/AIDS',
                'Infectologia',
                'Imunologia',
                'Biotecnologia',
                'Epidemiologia',
                'Desenvolvimento de Vacinas'
            ],
            bioText: 'Gabriel Ferreira é biomédico, nascido em Floriano, Piauí. Formado em 2011 pela Faculdade de Saúde, Ciências Humanas e Tecnológicas do Piauí, onde iniciou na pesquisa em microbiologia médica. Trabalhou com patologia no Instituto de Medicina Legal, além de analista microbiologista de empresa privada até ingressar no Mestrado em Ciências e Saúde, na Universidade Federal do Piauí em 2015. Na linha de pesquisa em Doenças Infeciosas e Parasitárias, vinculou-se ao Laboratório de Pesquisa em Leishmanioses (LabLeish), no Instituto de Doenças Tropicais Natan Portella. Trabalhou em diferentes projetos no domínio das leishmanioses e HIV/AIDS. Por meio do Instituto Doenças do Sertão, venceu o prêmio "inciativa jovens pesquisadores" no congresso mundial de Leishmanioses, em 2017. Através deste, visitou centros de pesquisa em mais de 10 países da Europa. Em 2018, foi aceito no programa de PhD no Departamento de Infectologia e Imunologia na Faculdade de Medicina na Universidade Laval, em Quebec, no Canadá. Destaca-se como o único brasileiro a conquistar a prestigiosa Bolsa Pierre-Durant da Faculdade de Medicina da Universidade Laval, além da Bolsa para inovação, ciência e tecnologia da Fundação Desjardins e Bolsa de excelência para estudantes estrangeiros. Fez mentoria com Jack Szostak, Prêmio Nobel de Medicina de 2009, e outros com renomados líderes da ciência mundial, incluindo outros laureados com o Nobel. Trabalhou na pandemia de COVID-19 ajudando a desenvolver métodos de testagem baseados em RNA e planos epidemiológicos de contenção das ondas de infecção. Foi designado cientista sênior para uma missão de contenção da transmissão viral no Polo Norte pela empresa GUARDX. Participou da organização do "International Society for Vaccines", em 2022 e acompanhou os estudos na produção de vacinas. Sua tese de PhD foi reconhecida com a "Dean\'s List", a mais alta honra acadêmica das instituições norte-americanas. No Piauí, foi reconhecido com a Medalha do Mérito Legislativo, sendo a primeira vez concedida a um cientista. Recentemente, ficou em primeiro lugar no Brasil na seleção da Organização Mundial da Saúde, do Ministério da Saúde do Brasil e do Governo da França, participando de um estágio clinico avançado de alto nível científico no Departamento de Doenças Infecciosas do Hospital Saint-Louis em Paris e como pos-doc na Universidade de Paris-Citè. Tem projetos vigentes no CIATEN/UFPI, Universidade Laval, Universidade Paris-Cité, e na Universidade de New South Walles. Fundador da empresa GEMS-biotec. (Texto informado pelo autor)'
        },
        en: {
            title: 'Our Team',
            subtitle: 'Meet the professionals leading our scientific research',
            founder: 'Founder',
            founderTitle: 'Biomedical Scientist, PhD in Infectology and Immunology',
            biography: 'Biography',
            specialties: 'Specialties',
            backToHome: 'Back to Home',
            achievements: {
                phd: 'PhD from Université Laval, Canada',
                award: '"Young Researchers Initiative" Award 2017',
                scholarship: 'Pierre-Durant Scholarship from Université Laval',
                medal: 'Legislative Merit Medal of Piauí'
            },
            specialtyList: [
                'Medical Microbiology',
                'Leishmaniasis',
                'HIV/AIDS',
                'Infectology',
                'Immunology',
                'Biotechnology',
                'Epidemiology',
                'Vaccine Development'
            ],
            bioText: 'Gabriel Ferreira is a biomedical scientist, born in Floriano, Piauí. Graduated in 2011 from the Faculty of Health, Human Sciences and Technology of Piauí, where he began research in medical microbiology. He worked with pathology at the Institute of Legal Medicine, as well as a microbiologist analyst in a private company until entering the Master\'s in Science and Health at the Federal University of Piauí in 2015. In the research line on Infectious and Parasitic Diseases, he joined the Leishmaniasis Research Laboratory (LabLeish) at the Natan Portella Institute of Tropical Diseases. He worked on different projects in the field of leishmaniasis and HIV/AIDS. Through the Sertão Diseases Institute, he won the "young researchers initiative" award at the world congress of Leishmaniasis in 2017. Through this, he visited research centers in more than 10 European countries. In 2018, he was accepted into the PhD program in the Department of Infectology and Immunology at the Faculty of Medicine at Université Laval, in Quebec, Canada. He stands out as the only Brazilian to win the prestigious Pierre-Durant Scholarship from the Faculty of Medicine at Université Laval, in addition to the Innovation, Science and Technology Scholarship from the Desjardins Foundation and Excellence Scholarship for foreign students. He mentored with Jack Szostak, Nobel Prize in Medicine 2009, and others with renowned world science leaders, including other Nobel laureates. He worked on the COVID-19 pandemic helping to develop RNA-based testing methods and epidemiological plans to contain infection waves. He was designated senior scientist for a viral transmission containment mission at the North Pole by GUARDX company. He participated in organizing the "International Society for Vaccines" in 2022 and followed vaccine production studies. His PhD thesis was recognized with the "Dean\'s List", the highest academic honor of North American institutions. In Piauí, he was recognized with the Legislative Merit Medal, being the first time awarded to a scientist. Recently, he placed first in Brazil in the selection by the World Health Organization, the Ministry of Health of Brazil and the Government of France, participating in an advanced clinical internship of high scientific level in the Department of Infectious Diseases at Saint-Louis Hospital in Paris and as a post-doc at the University of Paris-Cité. He has ongoing projects at CIATEN/UFPI, Université Laval, University of Paris-Cité, and the University of New South Wales. Founder of GEMS-biotec company. (Text provided by the author)'
        },
        es: {
            title: 'Nuestro Equipo',
            subtitle: 'Conoce a los profesionales que lideran nuestra investigación científica',
            founder: 'Fundador',
            founderTitle: 'Biomédico, PhD en Infectología e Inmunología',
            biography: 'Biografía',
            specialties: 'Especialidades',
            backToHome: 'Volver al Inicio',
            achievements: {
                phd: 'PhD por la Universidad Laval, Canadá',
                award: 'Premio "Iniciativa Jóvenes Investigadores" 2017',
                scholarship: 'Beca Pierre-Durant de la Universidad Laval',
                medal: 'Medalla del Mérito Legislativo de Piauí'
            },
            specialtyList: [
                'Microbiología Médica',
                'Leishmaniasis',
                'VIH/SIDA',
                'Infectología',
                'Inmunología',
                'Biotecnología',
                'Epidemiología',
                'Desarrollo de Vacunas'
            ],
            bioText: 'Gabriel Ferreira es biomédico, nacido en Floriano, Piauí. Graduado en 2011 por la Facultad de Salud, Ciencias Humanas y Tecnológicas de Piauí, donde comenzó la investigación en microbiología médica. Trabajó con patología en el Instituto de Medicina Legal, además de analista microbiólogo de empresa privada hasta ingresar en la Maestría en Ciencias y Salud, en la Universidad Federal de Piauí en 2015. En la línea de investigación en Enfermedades Infecciosas y Parasitarias, se vinculó al Laboratorio de Investigación en Leishmaniasis (LabLeish), en el Instituto de Enfermedades Tropicales Natan Portella. Trabajó en diferentes proyectos en el dominio de las leishmaniasis y VIH/SIDA. Por medio del Instituto Enfermedades del Sertão, ganó el premio "iniciativa jóvenes investigadores" en el congreso mundial de Leishmaniasis, en 2017. A través de este, visitó centros de investigación en más de 10 países de Europa. En 2018, fue aceptado en el programa de PhD en el Departamento de Infectología e Inmunología en la Facultad de Medicina en la Universidad Laval, en Quebec, Canadá. Se destaca como el único brasileño en conquistar la prestigiosa Beca Pierre-Durant de la Facultad de Medicina de la Universidad Laval, además de la Beca para innovación, ciencia y tecnología de la Fundación Desjardins y Beca de excelencia para estudiantes extranjeros. Hizo mentoría con Jack Szostak, Premio Nobel de Medicina de 2009, y otros con renombrados líderes de la ciencia mundial, incluyendo otros laureados con el Nobel. Trabajó en la pandemia de COVID-19 ayudando a desarrollar métodos de testeo basados en RNA y planes epidemiológicos de contención de las ondas de infección. Fue designado científico senior para una misión de contención de la transmisión viral en el Polo Norte por la empresa GUARDX. Participó de la organización del "International Society for Vaccines", en 2022 y acompañó los estudios en la producción de vacunas. Su tesis de PhD fue reconocida con la "Dean\'s List", el más alto honor académico de las instituciones norteamericanas. En Piauí, fue reconocido con la Medalla del Mérito Legislativo, siendo la primera vez concedida a un científico. Recientemente, quedó en primer lugar en Brasil en la selección de la Organización Mundial de la Salud, del Ministerio de Salud de Brasil y del Gobierno de Francia, participando de una pasantía clínica avanzada de alto nivel científico en el Departamento de Enfermedades Infecciosas del Hospital Saint-Louis en París y como pos-doc en la Universidad de París-Cité. Tiene proyectos vigentes en CIATEN/UFPI, Universidad Laval, Universidad París-Cité, y en la Universidad de New South Wales. Fundador de la empresa GEMS-biotec. (Texto informado por el autor)'
        }
    }
    return texts[currentLanguage.value as keyof typeof texts] || texts.pt
})
</script>

<style scoped>
.team-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
    padding: 80px 0;
}

.team-header {
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

.team-icon {
    width: 40px;
    height: 40px;
    color: white;
}

.team-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #115C8D;
    margin-bottom: 16px;
}

.team-subtitle {
    font-size: 1.2rem;
    color: #5E99B8;
    max-width: 600px;
    margin: 0 auto;
}

.founder-section {
    max-width: 1200px;
    margin: 0 auto;
}

.founder-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 12px 32px rgba(7, 116, 179, 0.15);
    overflow: hidden;
}

.founder-image {
    position: relative;
    width: 400px;
    height: 400px;
    flex-shrink: 0;
}

.founder-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.founder-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    background: linear-gradient(135deg, #0774B3 0%, #115C8D 100%);
    color: white;
    padding: 12px 20px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(7, 116, 179, 0.3);
}

.founder-badge svg {
    width: 16px;
    height: 16px;
}

.founder-info {
    padding: 40px;
    display: flex;
    flex-direction: column;
}

.founder-header h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #115C8D;
    margin-bottom: 8px;
}

.founder-title {
    font-size: 1.2rem;
    color: #0774B3;
    font-weight: 600;
    margin-bottom: 16px;
}

.founder-location {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #5E99B8;
    font-weight: 500;
}

.location-icon {
    width: 18px;
    height: 18px;
}

.founder-achievements {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
}

.achievement-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: linear-gradient(135deg, #A7D9F7 0%, rgba(167, 217, 247, 0.3) 100%);
    border-radius: 12px;
    font-weight: 500;
    color: #115C8D;
    transition: transform 0.3s ease;
}

.achievement-item:hover {
    transform: translateY(-2px);
}

.achievement-icon {
    width: 20px;
    height: 20px;
    color: #0774B3;
    flex-shrink: 0;
}

.fundador {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 0;
}

.biografia {
    padding: 24px;
}

.biografia h3 {
    text-align: center;
}

.founder-bio h3,
.founder-specialties h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #115C8D;
    margin-bottom: 16px;
}

.bio-content {
    background: #f8fbff;
    padding: 24px;
    border-radius: 12px;
    border-left: 4px solid #0774B3;
}

.bio-content p {
    line-height: 1.8;
    color: #5E99B8;
    font-size: 1rem;
    text-align: justify;
}

.specialties-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.specialty-tag {
    background: linear-gradient(135deg, #0774B3 0%, #115C8D 100%);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    transition: transform 0.3s ease;
}

.specialty-tag:hover {
    transform: translateY(-2px);
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

@media (max-width: 1024px) {
    .founder-card {
        grid-template-columns: 1fr;
    }

    .founder-image {
        width: 300px;
        height: 300px;
        margin: 0 auto;
    }

    .founder-info {
        padding: 32px;
    }
}

@media (max-width: 768px) {
    .team-section {
        padding: 60px 0;
    }

    .team-header h1 {
        font-size: 2rem;
    }

    .team-subtitle {
        font-size: 1.1rem;
    }

    .founder-header h2 {
        font-size: 1.8rem;
    }

    .founder-title {
        font-size: 1.1rem;
    }

    .founder-info {
        padding: 24px;
        gap: 24px;
    }

    .founder-achievements {
        grid-template-columns: 1fr;
    }

    .achievement-item {
        padding: 12px;
    }

    .bio-content {
        padding: 20px;
    }

    .bio-content p {
        font-size: 0.95rem;
    }

    .founder-image {
        width: 250px;
        height: 250px;
        margin: 0 auto;
    }
}
</style>