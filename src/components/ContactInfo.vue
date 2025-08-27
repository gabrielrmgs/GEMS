<template>
    <section class="contact-info">

        <div class="contact-text">
            <h2>Em caso de dúvidas entre em contato conosco</h2>
            <h4>Tire suas dúvidas conosco atráves de nossas redes socias</h4>
            <div class="redes-sociais">
                <span class="contact-item">
                    <svg viewBox="0 0 24 24" class="icon">
                        <path fill="currentColor"
                            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <a href="#">Instagram - gemsbiotech</a>
                </span>
                <span class="contact-item">
                    <svg viewBox="0 0 24 24" class="icon">
                        <path fill="currentColor"
                            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <a href="#">Siga nosso canal no WhatsApp</a>
                </span>
                <span class="contact-item">
                    <svg viewBox="0 0 24 24" class="icon">
                        <path fill="currentColor"
                            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <a href="#">Acesse nosso canal no YouTube</a>
                </span>
                <span class="contact-item">
                    <svg viewBox="0 0 24 24" class="icon">
                        <path fill="currentColor"
                            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <a href="#">Acesse nosso perfil no X</a>
                </span>
            </div>

        </div>
        <div class="contact-image">
            <img src="/src/assets/pesquisadores.jpg"/>
        </div>

    </section>


</template>
<script setup lang="ts">

</script>
<style scoped>
.contact-info {
    width: 100%;
    background-color: aqua;
    display: flex;
    flex-direction: row;
    margin-bottom: 54px;

}

.contact-text {
    width: 50%;
    background-color: wheat;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 57px;
}

.contact-image {
    height: 450px;
    width: 50%;
    background-color: red;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.contact-item svg {
    width: 36px;
    height: 36px;
}

.redes-sociais {
    gap: 15px;
    display: flex;
    flex-direction: column;
}
</style>