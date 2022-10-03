

var arrLang = {
    'en': {
      'home' : 'Home',
      'about': 'About',
      'service': 'Service',
      'work': 'Work',
      'blog': 'Blog',
      'contact': 'Contact',
      'what_we_do' : 'What we Do',
      'story_about' : 'Story About Us',
      'service-title' : 'Service',
      'story_about_us' : 'Story About Us',
      'service-text' : 'The riba text site will help a designer, typewriter, webmaster to generate several paragraphs of more or less meaningful fish text in Ukrainian, and a novice speaker to hone the habit of public speaking at home. When creating the generator, we used an unknown universal speech code. The text is generated in paragraphs randomly from two to ten sentences in a paragraph, which allows you to make the text more attractive and lively for visual and auditory perception.',
      'what_we_do' : 'What we Do',
      'some_work' : 'Some of our work',
      'some_work_text' : 'Equally, the implementation of planned tasks allows us to perform important tasks of developing a personnel training system that meets our needs.',
      'send-form' : 'Send',
      'creative_design' : 'Creatively designed',
      'reviews_quote' : 'On the other hand, broad active consultation plays an important role in shaping the direction of progressive development.',
      'footer_text' : 'Lorem ipsum is the name of the classic text "fish". "Fish" is a word from the jargon of designers, denoting conditional, often meaningless text inserted into the layout of the page. Lorem ipsum is a distorted passage from Ciceros philosophical treatise On the Limits of Good and Evil, written in Latin in 45 BC. This text was first used for a set of typefaces by an unknown printer in the 16th century',
      'blogs' : 'Blogs',
      'identification' : 'Identification',
      'followers' : 'Followers',
      'k' : 'k',
      'follow_us' : 'Follow Us'

    },
    'ua': {
      'home' : 'Головна',
      'about': 'Про нас',
      'service': 'Послуги',
      'work': 'Робота',
      'blog': 'Блог',
      'contact': 'Контакти',
      'what_we_do' : 'Чим ми займаємось',
      'story_about' : 'Коротко про нас',
      'story_about_us' : 'Історія про нас',
      'service-text' : 'Сайт риба текст допоможе дизайнеру, верстальнику, вебмайстру згенерувати кілька абзаців більш-менш осмисленого тексту риби українською мовою, а оратору-початківцю відточити звичку публічних виступів у домашніх умовах. Під час створення генератора ми використовували невідомий універсальний код промов. Текст генерується абзацами випадково від двох до десяти речень в абзаці, що дозволяє зробити текст більш привабливим і живим для візуально-слухового сприйняття.',
      'what_we_do' : 'Чим ми займаємось',
      'some_work' : 'Деякі із наших робіт',
      'some_work_text' : 'Рівним чином реалізація намічених планових завдань дозволяє виконувати важливі завдання з розробки системи навчання кадрів, що відповідають нашим потребам.',
      'send-form' : 'Надіслати',
      'creative_design' : 'Творчий дизайн',
      'reviews_quote' : 'З іншого боку, широкі активні консультації відіграють важливу роль у формуванні напряму прогресивного розвитку.',
      'footer_text' : 'Lorem ipsum — назва класичного тексту «риба». «Риба» - слово з жаргону дизайнерів, що позначає умовний, часто безглуздий текст, вставлений в макет сторінки. Lorem ipsum — спотворений уривок із філософського трактату Цицерона «Про межі добра і зла», написаного латинською мовою в 45 р. до н. Цей текст вперше був використаний для набору шрифтів невідомим друкарем у 16 столітті',
      'blogs' : 'Блог',
      'identification' : 'Ідентифікація',
      'followers' : 'Підписників',
      'k' : 'тис.',
      'follow_us' : 'Слідкуй за нами'
    }
  };
  
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');
  
        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });