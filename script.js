// 1. Анимированный ASCII-арт на фоне
const asciiArt = `
    ╔═══════════════════════════════════════════════════════════╗
    ║  ██████╗  ██████╗ ██████╗ ████████╗██╗      ██████╗██╗   ║
    ║  ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██║     ██╔════╝██║   ║
    ║  ██████╔╝██║   ██║██████╔╝   ██║   ██║     ██║     ██║   ║
    ║  ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██║     ██║     ██║   ║
    ║  ██║     ╚██████╔╝██████╔╝   ██║   ███████╗╚██████╗██║   ║
    ║  ╚═╝      ╚═════╝ ╚═════╝    ╚═╝   ╚══════╝ ╚═════╝╚═╝   ║
    ╚═══════════════════════════════════════════════════════════╝
    
    ┌─────────────────────────────────────────────────────────┐
    │  [SYSTEM STATUS: ONLINE]                                │
    │  > Initializing components...                           │
    │  > Loading inventory...                                 │
    │  > Ready to build your dream PC                         │
    └─────────────────────────────────────────────────────────┘
    
    ╔═══════════════════════════════════════════════════════╗
    ║   _____ _____ ____    _   _  ___  ____  ___   _      ║
    ║  |  ___|_   _|  _ \\  | \\ | |/ _ \\|  _ \\|_ _| / \\     ║
    ║  | |_    | | | |_) | |  \\| | | | | |_) || | / _ \\    ║
    ║  |  _|   | | |  __/  | |\\  | |_| |  _ < | |/ ___ \\   ║
    ║  |_|     |_| |_|     |_| \\_|\\___/|_| \\_\\___/_/   \\_\\  ║
    ╚═══════════════════════════════════════════════════════╝
    
    ┌───────────────────────────────────────────────────────┐
    │  CPU: ████████░░ 80%                                   │
    │  RAM: ██████░░░░ 60%                                   │
    │  GPU: █████████░ 90%                                   │
    └───────────────────────────────────────────────────────┘
`;

const asciiBg = document.getElementById('asciiBg');
let offset = 0;

// Повторяем ASCII-арт для заполнения экрана
function fillScreen() {
    let repeated = '';
    for (let i = 0; i < 10; i++) {
        repeated += asciiArt + '\n\n';
    }
    asciiBg.textContent = repeated;
}

// Анимация "прокрутки" ASCII-арта
function animateAscii() {
    offset -= 0.5;
    asciiBg.style.transform = `translateY(${offset}px)`;
    
    // Сбрасываем позицию, чтобы бесконечно крутилось
    if (Math.abs(offset) > 1000) {
        offset = 0;
    }
    
    requestAnimationFrame(animateAscii);
}

fillScreen();
animateAscii();

// 2. Переключение страниц меню
const menuItems = document.querySelectorAll('.menu-item');
const pageContent = document.getElementById('pageContent');

const pages = {
    about: {
        title: 'О нас',
        content: `
            <div class="about-text">
                <p>Мы — команда энтузиастов, которые любят компьютеры так же сильно, как и вы.</p>
                <p>Наша миссия — помочь каждому собрать идеальный ПК, будь то для учёбы, работы или игр.</p>
                <p>Мы предлагаем:</p>
                <ul>
                    <li>✅ Качественные комплектующие</li>
                    <li>✅ Профессиональную сборку</li>
                    <li>✅ Поддержку 24/7</li>
                    <li>✅ Честные цены</li>
                </ul>
            </div>
        `
    },
    support: {
        title: 'Поддержка',
        content: `
            <div class="about-text">
                <p>Нужна помощь? Мы всегда на связи!</p>
                <p>📧 Email: support@pospolite.com</p>
                <p>📱 Телефон: +7 (999) 123-45-67</p>
                <p>💬 Telegram: @pospolite_support</p>
                <p>Часы работы: 24/7</p>
                <p>Среднее время ответа: 15 минут</p>
            </div>
        `
    },
    assortment: {
        title: 'Ассортимент',
        content: `
            <div class="about-text">
                <p>В нашем каталоге более 20 позиций комплектующих:</p>
                <ul>
                    <li>🧊 Кулеры — 3 модели</li>
                    <li>⚙️ Процессоры — 3 модели</li>
                    <li>⌨️ Клавиатуры</li>
                    <li>🖱️ Мышки — 3 модели</li>
                    <li>🔌 Блоки питания (450W)</li>
                    <li>💾 Оперативная память (DDR2/DDR3)</li>
                    <li>📦 Корпуса</li>
                    <li>🖥️ Мониторы — 2 модели</li>
                    <li>🎮 Видеокарты</li>
                    <li>🔊 Колонки</li>
                </ul>
                <p><a href="#" style="color: #6366f1;">Перейти в каталог →</a></p>
            </div>
        `
    },
    build: {
        title: 'Сборка ПК',
        content: `
            <div class="about-text">
                <p>Соберём компьютер под ваши задачи!</p>
                <p>Как это работает:</p>
                <ul>
                    <li>1️⃣ Вы рассказываете, для чего нужен ПК</li>
                    <li>2️⃣ Мы подбираем комплектующие</li>
                    <li>3️⃣ Собираем и тестируем</li>
                    <li>4️⃣ Доставляем вам</li>
                </ul>
                <p>Гарантия на сборку: 1 год</p>
                <p>Бесплатная настройка Windows и драйверов</p>
                <p><a href="#" style="color: #6366f1;">Оставить заявку →</a></p>
            </div>
        `
    }
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Убираем active у всех
        menuItems.forEach(i => i.classList.remove('active'));
        // Добавляем active к кликнутому
        item.classList.add('active');
        
        // Меняем контент
        const page = item.dataset.page;
        const pageData = pages[page];
        
        pageContent.style.animation = 'none';
        setTimeout(() => {
            pageContent.innerHTML = `
                <h1 class="page-title">${pageData.title}</h1>
                ${pageData.content}
            `;
            pageContent.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    });
});