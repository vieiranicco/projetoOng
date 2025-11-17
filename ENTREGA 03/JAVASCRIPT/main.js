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

    // Procura o <div> que criámos para o calendário
    const calendarWidget = document.getElementById('calendar-widget');
    
    // Se não encontrar o div nesta página, para a execução
    if (!calendarWidget) {
        return;
    }

    // Função principal que gera o calendário
    function generateCalendar() {
        // 1. Pega as informações do dia de HOJE
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth(); // 0 = Janeiro, 1 = Fevereiro...
        const today = now.getDate();
        
        // 2. Descobre o primeiro dia do mês (0=Dom, 1=Seg, 2=Ter...)
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        
        // 3. Descobre o último dia do mês (30, 31, etc.)
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // 4. Pega o nome do mês em Português
        const monthName = new Date(year, month).toLocaleString('pt-BR', { month: 'long' });
        
        // 5. Array com os nomes dos dias da semana (como no design)
        // (O teu design original usa "SUN, MON...", mas vou usar PT-BR)
        const dayNames = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

        // 6. Começa a "construir" o HTML do calendário
        let html = '';

        // -- Constrói o Cabeçalho (Ex: Setembro 2025) --
        html += `<div class="calendar-header"><h5>${monthName} ${year}</h5></div>`;

        // -- Constrói os Nomes dos Dias (DOM, SEG, TER...) --
        html += '<div class="calendar-days-header">';
        dayNames.forEach(day => {
            html += `<div>${day}</div>`;
        });
        html += '</div>';

        // -- Constrói o "Grid" com os dias --
        html += '<div class="calendar-grid">';
        
        // Adiciona "células" vazias para os dias 
        // antes do dia 1 do mês começar
        for (let i = 0; i < firstDayOfMonth; i++) {
            html += '<div class="calendar-day other-month"></div>';
        }
        
        // Adiciona as células com os dias do mês
        for (let day = 1; day <= daysInMonth; day++) {
            let classes = "calendar-day";
            
            // Se o 'day' for o dia de HOJE, adiciona a classe 'today'
            if (day === today) {
                classes += " today";
            }
            
            html += `<div class="${classes}">${day}</div>`;
        }
        
        html += '</div>'; // Fecha o .calendar-grid

        // 7. Injeta o HTML que construímos dentro do <div>
        calendarWidget.innerHTML = html;
    }

    // Chama a função para gerar o calendário
    generateCalendar();

    // --- (Aqui podes ter os teus outros scripts, 
    //      como o 'new Swiper(...)') ---
    

});

