// Espera todo o HTML ser carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Aqui é onde ativamos o carrossel
    const swiper = new Swiper('.cause-carousel', {
        
        // --- Configurações Principais ---
        
        // Quantos slides devem ser visíveis de uma vez
        slidesPerView: 3, 
        
        // Espaço em pixels entre cada slide
        spaceBetween: 30, 
        
        // (Opcional) Faz o carrossel andar em loop
        loop: true,

        // --- Navegação (Setas) ---
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // --- Responsividade ---
        // Aqui dizemos como o carrossel deve se comportar
        // em diferentes tamanhos de tela
        breakpoints: {
            // Quando a tela for 0px ou maior (Mobile)
            0: {
                slidesPerView: 1, // Mostrar 1 slide
                spaceBetween: 20
            },
            // Quando a tela for 768px ou maior (Tablet)
            768: {
                slidesPerView: 2, // Mostrar 2 slides
                spaceBetween: 30
            },
            // Quando a tela for 1024px ou maior (Desktop)
            1024: {
                slidesPerView: 3, // Mostrar 3 slides
                spaceBetween: 30
            }
        }
    });

    const swiperPartners = new Swiper('.partner-carousel', {
        
        // --- Configurações Principais ---
        
        // Faz o carrossel andar em loop, sem parar
        loop: true,
        loopedSlides:6,
        
        // Define o espaço entre os logos
        spaceBetween: 30,
        speed:6000,

        // --- A Magia do "Movimento Sozinho" ---
        autoplay: {
            delay: 0, // Tempo (em ms) que fica parado em cada "slide"
            disableOnInteraction: false, // Continua a rodar mesmo depois do user tocar
            pauseOnMouseEnter: true,     // PAUSA o carrossel se o user puser o rato em cima
        },
        allowTouchMove:false,

        // --- Responsividade (Quantos slides mostrar) ---
        breakpoints: {
            // Quando a tela for 0px ou maior (Mobile)
            0: {
                slidesPerView: 2, // Mostrar 2 logos
                spaceBetween: 20
            },
            // Quando a tela for 768px ou maior (Tablet)
            768: {
                slidesPerView: 3, // Mostrar 3 logos
                spaceBetween: 30
            },
            // Quando a tela for 1024px ou maior (Desktop)
            1024: {
                slidesPerView: 5, // Mostrar 5 logos
                spaceBetween: 30
            }
        }
    });

});

