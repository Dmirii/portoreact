

export const PROMO = (
    <>
    <div className="post-body">
        <h2 className="post-title">Приветствую вас на моём сайте.</h2>    
            <div className="post-wrapper">
                <div className="post-section">
                    <h2  className="post-title dmitrii">Меня зовут Дмитрий Антонов.</h2>
                    <p className="post-text about">
                        Родился я в славном городе Тверь в 1981г. Сменил 10 школ, а затем в 2002 году успешно окончил ГУАП (ЛИАП).
                        Всю сознательную жизнь я посветил управлению продажами. С 2019 года я решил сменить сферу деятельности.
                        В данный момент я занимаюсь Frontend разработкой.
                        На этой странице вы узнаете какими навыками я уже обладаю и что изучаю в данный момент.
    
                    </p>
                </div>
                <img src="portoreact/img/DimaA.jpg" alt="Дима А" className="post-img"/>
            </div>    
            <div className="tags">
            <a href="/" className="tag">#dimaA</a>
            <a href="/" className="tag">#JS</a>
            <a href="/" className="tag">#SCSS</a>
            <a href="/" className="tag">#react</a>
            </div>
    </div>    
    <div className="post-footer">
        <div className="post-buttons">
            <button className="likes post-button">
            <svg className="icon icon-like">
            <use xlinkHref="portoreact/img/icons.svg#like"> </use>
            </svg>
                <span className="likes-counter">26</span>
            </button>
            <button className="comments post-button">
                <svg className="icon icon-comment">
                <use xlinkHref="portoreact/img/icons.svg#comment"> </use>
                </svg>
                <span className="comments-counter">157</span>
            </button>
            <button className="save post-button">
            <svg className="icon icon-save">
            <use xlinkHref="portoreact/img/icons.svg#save"> </use>
            </svg>
            </button>
            <button className="share post-button">
            <svg className="icon icon-share">
            <use xlinkHref="portoreact/img/icons.svg#share"> </use>
            </svg>
            </button>
        </div>
        <div className="post-author">
            <div className="author-about">
                <a href="https://dmirii.github.io/myPort/" className="author-username">dimaaru</a>
                <span className="post-time">08.04.2020</span>
            </div>
            <a href="/" className="author">
                <img src="portoreact/img/DimaA.jpg" alt="tpdne" className="author-avatar"/>
            </a>
        </div>    
    </div>
    </>
);
export const CONTACT = (
    <>
    <div className="post-body">

        <h2 className="post-title">Со мной связатся просто:</h2>    
            <div className="post-wrapper">
                <div className="contact-list">
                <div className="contact-items">
              <div className="contact-item"><i className="material-icons">settings_cell</i>
                <div className="contact__descr ">телефон:</div><a href="tel:89117335515">+7 911-733-5515</a>
              </div>
              <div className="contact-item"><i className="material-icons">connect_without_contact</i>
                <div className="contact__descr">вконтакте:</div><a className="" href="https://vk.com/dimaa_ru"  rel="noreferrer" target="_blank">vk.com/dimaa_ru</a>
              </div>
              <div className="contact-item"><i className="material-icons">mail_outline</i>
                <div className="contact__descr">почта:</div><a href="mailto:dimaa@dimaa.ru">dimaa@dimaa.ru</a>
              </div>
              <div className="contact-item"><i className="material-icons">storage</i>
                <div className="contact__descr">gitHub:</div><a rel="noreferrer" href="https://github.com/Dmirii/" target="_blank">github.com/Dmirii/</a>
              </div>
            </div>
                   
                        
    
                 
                </div>
                <img src="portoreact/img/DimaA.jpg" alt="Дима А" className="post-img"/>
            </div>    
            <div className="tags">
            <a href="/" className="tag">#dimaA</a>
            <a href="/" className="tag">#JS</a>
            <a href="/" className="tag">#SCSS</a>
            <a href="/" className="tag">#react</a>
            </div>
    </div>    
    <div className="post-footer">
        <div className="post-buttons">
            <button className="likes post-button">
            <svg className="icon icon-like">
            <use xlinkHref="portoreact/img/icons.svg#like"> </use>
            </svg>
                <span className="likes-counter">26</span>
            </button>
            <button className="comments post-button">
                <svg className="icon icon-comment">
                <use xlinkHref="portoreact/img/icons.svg#comment"> </use>
                </svg>
                <span className="comments-counter">157</span>
            </button>
            <button className="save post-button">
            <svg className="icon icon-save">
            <use xlinkHref="portoreact/img/icons.svg#save"> </use>
            </svg>
            </button>
            <button className="share post-button">
            <svg className="icon icon-share">
            <use xlinkHref="portoreact/img/icons.svg#share"> </use>
            </svg>
            </button>
        </div>
        <div className="post-author">
            <div className="author-about">
                <a href="https://dmirii.github.io/myPort/" className="author-username">dimaaru</a>
                <span className="post-time">08.04.2020</span>
            </div>
            <a href="/" className="author">
                <img src="portoreact/img/DimaA.jpg" alt="tpdne" className="author-avatar"/>
            </a>
        </div>    
    </div>
    </>
);


// fetch obj
export const mainDB = {
    about:PROMO,
    porto:[
        [
            '0',
            'zero element',
            'zero element',
            'zero element',
            `zero element`,
            ['zero','zero',],
            'zero.png',
            ['49','52',],
            '10.10.2020',
        ],
        [
            '25',
            'SPACEX',
            'https://github.com/Dmirii/spacex',
            'https://dmirii.github.io/spacex/',
            `Workshop Glo.React Route Link Fetch SpaceX JavaScript`,
            ['JS','React',],
            'portoreact/img/img/space.png',
            ['49','52',],
            '10.10.2020',
        ],
        [
            '24',
            'ТЕЛЕГРАМ БОТ',
            'https://github.com/Dmirii/TelegramBot',
            'https://github.com/Dmirii/TelegramBot',
            `my test telegram bot
            js, Javascript, Fetch , API , UNSPLAH , NODE.JS , openweathermap.org , telegram , icanhazdadjoke, currency exchange ,exchangeratesapi
            `,
            ['JS','telegram','Fetch','API','UNSPLAH','NODE.JS','openweathermap.org','icanhazdadjoke',],
            'portoreact/img/img/bot.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '23',
            'ИНТЕРНЕТ МАГАЗИН',
            'https://github.com/Dmirii/flmarafon',
            'https://dmirii.github.io/flmarafon/',
            'Марафон по верстке. От фрилансера по жизни Евгения Андриканича. Иcпользован его динамический адаптив.',
            ['JS','HTML','SCSS',],
            'portoreact/img/img/fl.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '22',
            'HUNTER GAME',
            'https://github.com/Dmirii/hunter',
            'https://dmirii.github.io/hunter/',
            'JS. Canvas',
            ['JS','Canvas',],
            'portoreact/img/img/hunter.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '21',
            'IKEA',
            'https://github.com/Dmirii/ikea',
            'https://dmirii.github.io/ikea/',
            'Workshop Glo.Чистый JS',
            ['JS','Glo',],
            'portoreact/img/img/ikea.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '20',
            'FLAPPY',
            'https://github.com/Dmirii/Flappy',
            'https://dmirii.github.io/Flappy/',
            'Чистый JS',
            ['JS','canvas',],
            'portoreact/img/img/flappy.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '19',
            'NEED FOR JS',
            'https://dmirii.github.io/nfjs/',
            'https://github.com/Dmirii/nfjs',
            'Чистый JS',
            ['JS','Glo',],
            'portoreact/img/img/nfjs.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '18',
            'MERN(ТОЛЬКО SRC)',
            'https://github.com/Dmirii/mern',
            'https://github.com/Dmirii/mern',
            `MERN,Mongo, Express, React, Node, JS;
            Изучение стека MERN Курс от Владилена Минина`,
            ['React','JS', 'MERN', 'JS',],
            'portoreact/img/img/surl.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '17',
            'TODO REACT',
            'https://github.com/Dmirii/reactTodo',
            'https://dmirii.github.io/reactTodo/',
            `JS, JSX React Loader, Modal , Fetch;`,
            ['React','JS', 'Glo', 'JSX',],
            'portoreact/img/img/reacttodo.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '16',
            'MONEY CALC',
            'https://github.com/Dmirii/reactCalc',
            'https://dmirii.github.io/reactCalc/',
            `WorkShop Glo;
            React, JS , Создание динамических компонентов, Работа с localstorage,`,
            ['React','JS', 'Glo', ],
            'portoreact/img/img/monycalcreact.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '15',
            'YA TUNES',
            'https://github.com/Dmirii/yatuns',
            'https://dmirii.github.io/yatuns/',
            `Workshop от Glo`,
            ['SCSS','JS', 'Glo', ],
            'portoreact/img/img/yatuns.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '14',
            'UI КОМПОНЕНТЫ',
            'https://github.com/Dmirii/DIM',
            'https://dmirii.github.io/DIM/',
            `Создание UI только на чистом JS . На данный момент создано модальное окно. Использую ютуб канал Владилена Минина.`,
            ['SCSS','JS', 'Webpack', ],
            'portoreact/img/img/js.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '13',
            'FIREBASE APP',
            'https://github.com/Dmirii/vNode',
            'https://vnode-app.firebaseapp.com/',
            `JS. Динамический HTML, Webpack , Firebase`,
            ['MUI','SCSS','JS', 'Webpack', 'SPA', ],
            'portoreact/img/img/vnode.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '12',
            'FRAMWORK(EXCEL)',
            'https://github.com/Dmirii/ExelCourse',
            'https://dmirii.github.io/Framework/',
            `My second JS SPA (85 days of self-education.) framework / Фреймворк pure js / чистый js learning curse / обучающий курс`,
            ['FRAMWORK','JS', 'SPA', ],
            'portoreact/img/img/excel.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '11',
            'AWITO',
            'https://github.com/Dmirii/Awito',
            'https://dmirii.github.io/Awito/',
            `Workshop Glo JS`,
            ['HTML','SCSS','JS', 'Glo', ],
            'portoreact/img/img/awito.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '10',
            'YOGA ТУРЫ',
            'https://github.com/Dmirii/yoga',
            'https://dmirii.github.io/yoga/',
            `Это моя третья работа по изучению нативного JS.          
            1.Табы 2.Таймер 3.Модальное окно 4.Отправка POST 5.Слайдер  
            WEBPACK !`,
            ['HTML','SCSS','JS', 'Webpack',],
            'portoreact/img/img/yoga.png',
            ['49','52',],
            '29.05.2020',
        ],
        [
            '9',
            'GHOSTBUSTERS',
            'https://github.com/Dmirii/ghost',
            'https://dmirii.github.io/ghost/',
            'Интенсив от Glo . Изучаю HTML + CSS + JS',
            ['HTML','SCSS','JS', 'Glo',],
            'portoreact/img/img/gb.png',
            ['49','52',],
            '21.05.2020',
        ],
        [
            '8',
            'MONEYKEEPER',
            'https://github.com/Dmirii/monyekeeper',
            'https://dmirii.github.io/monyekeeper/',
            'Моё первое SPA. JS+ адаптив Flex @media',
            ['PUG','SASS','JS', 'SPA', '@media'],
            'portoreact/img/img/money.png',
            ['49','52',],
            '21.05.2020',
        ],
        [
            '7',
            'ПОРТФОЛИО',
            'https://github.com/Dmirii/myPort',
            'https://dmirii.github.io/myPort/',
            'PUG, SASS  , JS , Адаптив Flex + media',
            ['PUG','SASS','JS', ],
            'portoreact/img/img/porto.png',
            ['49','52',],
            '14.05.2020',
        ],
        [
            '6',
            'NETCLICKS',
            'https://github.com/Dmirii/netclicks',
            'https://dmirii.github.io/netclicks/',
            'HTML, CSS , JS ',
            ['HTML','JS','CSS', ],
            'portoreact/img/img/net.png',
            ['49','52',],
            '12.05.2020',
        ],
        [
            '5',
            'ПОДБОР ПУЛЬСОМЕТРА',
            'https://github.com/Dmirii/puls',
            'https://dmirii.github.io/puls_p/',
            'HTML(Bootstrap Grid) , SASS , JS , БЭМ . Плагины jquery. Прикрутил php mailer. ( не работает с гита т.к. он не поддерживает php)',
            ['Bootstrap Grid','JS','SaSS', 'БЭМ',],
            'portoreact/img/img/puls.png',
            ['49','52',],
            '1.05.2020',
        ],
        [
            '4',
            'UBER PARTNERS',
            'https://github.com/Dmirii/uber',
            'https://dmirii.github.io/uber/',
            'Простой HTML и SaSS. 41 день самостоятельного обучения. Настроил VSC. Использую SASS в синтаксисе scss. Настроил Gulp. Изучил БЭМ.',
            ['HTML','Bootstrap','SaSS',],
            'portoreact/img/img/uber.png',
            ['49','52',],
            '25.04.2020',
        ],
        [
            '3',
            'WORDPRESS ИНТЕНСИВ',
            'https://github.com/Dmirii/Scss',
            'https://dmirii.github.io/Scss/',
            'Простой HTML и SCSS.  Начал использовать SASS. Установил Live SASS для VSC. РАзобрался с настройками. ',
            ['HTML','CSS','SCSS',],
            'portoreact/img/img/wpi.png',
            ['49','52',],
            '21.04.2020',
        ],
        [
            '2',
            'MOUNTAIN',
            'https://github.com/Dmirii/Mountain',
            'https://dmirii.github.io/Mountain/',
            'Простой HTML и SCSS. Первый опыт с JS. Добавил Slider. Интенсив по верстке от HTML академии. ',
            ['HTML','CSS','SCSS','sliderSlick'],
            'portoreact/img/img/mount.png',
            ['49','52',],
            '10.04.2020',
        ],
        [
            '1',
            'НОВОСТИ КУЛЬТУРЫ',
            'https://github.com/Dmirii/Culture_News',
            'https://dmirii.github.io/Culture_News/',
            'Простой HTML и CSS. Моя первая работа. Прохожу курсы HTML академии.',
            ['HTML','CSS'],
            'portoreact/img/img/cnp.png',
            ['49','52',],
            '1.04.2020',
        ],
       
    ],
    mySkils:[
        ['portoreact/img/skils/skils.jpg','Мои основные навыки',
            ['HTML','CSS','JS','Git','Figma','Avacode','Создаю чатботов для Telegram',],
            ['dimaaru','JS','REACT','MERN',],
            ['19','125',],
            '08.04.2020',
        ],
        ['portoreact/img/skils/preproc.png','Препроцессоры',
            ['PUG','CSS предпочитаю SASS в синтаксисе scss',],
            ['dimaaru','PUG','SCSC','SASS'],
            ['49','52',],
            '10.04.2020',
        ],
        ['portoreact/img/skils/layout.jpg','Верстка',
            ['Использовал Bootstrap grid','Изучал Float','Предпочитаю адаптивно-отзывчивую верстку (Flex + @media)','Не люблю статику. Люблю генерить верстку JSом.',],
            ['dimaaru','Flex','CSS','@media',],
            ['39','125',],
            '12.04.2020',
        ],
        ['portoreact/img/skils/npm.jpg','Общие задачи',
            ['Gulp','Yarn','npm','PerfectPixel','Webpack',],
            ['dimaaru','Gulp','Yarn','npm','Webpack',],
            ['39','15',],
            '12.04.2020',
        ],
        ['portoreact/img/skils/react.png','Библиотеки JS',
            ['Node.JS','React.JS',],
            ['dimaaru','React','Node'],
            ['3','20',],
            '16.04.2020',
        ],
        ['portoreact/img/skils/bd.jpg','БД',
            ['Mongo DB','Firebase',],
            ['dimaaru','Mongo','Fierbase',],
            ['2','15',],
            '19.04.2020',
        ],
        ['portoreact/img/skils/mern.png','Стеки',
            ['MERN',],
            ['dimaaru','MERN','Mongo','Express','React','Node',],
            ['12','10',],
            '23.04.2020',
        ],
    ],
    menuList:[
        ['Обо мне','/',],
        ['Портфолио','/porto',],
        ['Контакты','/contact',],
    ],
    contactInfo:CONTACT,
    
};  
