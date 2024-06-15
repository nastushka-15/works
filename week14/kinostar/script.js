const directors = [
{
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
},
{
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
},
{
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссёр, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
},
{
    name: 'Алексей Балабанов',
    career: 'Режиссёр, Сценарист, Актёр, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
},
{
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссёр, Сценарист, Актёр',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зелёная книга'
},
{
    name: 'Юрий Быков',
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
},
{
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
},
];
directors.forEach(function(director) {
    const spielbergName = document.querySelector('#spielberg');
    spielbergName.textContent = directors[0]['name'];
    const spielbergWork = document.querySelector('#spielbergWork');
    spielbergWork.textContent = directors[0]['career'];
    const spielbergFilm = document.querySelector('#spielbergFilm');
    spielbergFilm.href = directors[0]['films'];

    const nolanName = document.querySelector('#nolan');
    nolanName.textContent = directors[1]['name'];
    const nolanWork = document.querySelector('#nolanWork');
    nolanWork.textContent = directors[1]['career'];
    const nolanFilm = document.querySelector('#nolanFilm');
    nolanFilm.href = directors[1]['films'];

    const makdonahName = document.querySelector('#makdonah');
    makdonahName.textContent = directors[2]['name'];
    const makdonahWork = document.querySelector('#makdonahWork');
    makdonahWork.textContent = directors[2]['career'];
    const makdonahFilm = document.querySelector('#makdonahFilm');
    makdonahFilm.href = directors[2]['films'];

    const balabanovName = document.querySelector('#balabanov');
    balabanovName.textContent = directors[3]['name'];
    const balabanovWork = document.querySelector('#balabanovWork');
    balabanovWork.textContent = directors[3]['career'];
    const balabanovFilm = document.querySelector('#balabanovFilm');
    balabanovFilm.href = directors[3]['films'];

    const farrelliName = document.querySelector('#farrelli');
    farrelliName.textContent = directors[4]['name'];
    const farrelliWork = document.querySelector('#farrelliWork');
    farrelliWork.textContent = directors[4]['career'];
    const farrelliFilm = document.querySelector('#farrelliFilm');
    farrelliFilm.href = directors[4]['films'];

    const bykovName = document.querySelector('#bykov');
    bykovName.textContent = directors[5]['name'];
    const bykovWork = document.querySelector('#bykovWork');
    bykovWork.textContent = directors[5]['career'];
    const bykovFilm = document.querySelector('#bykovFilm');
    bykovFilm.href = directors[5]['films'];

    const valleName = document.querySelector('#valle');
    valleName.textContent = directors[6]['name'];
    const valleWork = document.querySelector('#valleWork');
    valleWork.textContent = directors[6]['career'];
    const valleFilm = document.querySelector('#valleFilm');
    valleFilm.href = directors[6]['films'];
});




const topFilms = directors.map(function(director) {
    return director['top_rated_film'];
});
let topRatedFilms = document.querySelector('.topFilms');
topRatedFilms.textContent = topFilms;