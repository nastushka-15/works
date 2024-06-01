const text = 'у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.';
console.log(`1. Количество символов в тексте: ${text.length}`);
const result = text.replace(/;/g, '\n')
console.log(`2. Текст с переносами строк:  \n${result}`);
let substring = result.replaceAll(' ', '');
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
let newText = result.slice(28, 50);
console.log(`4. Извлечение подстроки: ${newText}`);
const replacedText = newText.replace('клён', 'дубе');
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
const replacedText3 = result.replace(/клён/g, 'дуб');
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`)
let index = text.indexOf('моря');
console.log(`8. Индекс первого вхождения "моря": ${index}`);
let modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);



const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const randomIndex1 = Math.floor(Math.random() * alphabet.length);
const randomIndex2 = Math.floor(Math.random() * alphabet.length);
const randomIndex3 = Math.floor(Math.random() * alphabet.length);
const randomIndex4 = Math.floor(Math.random() * alphabet.length);
const randomWord = alphabet[randomIndex1]+alphabet[randomIndex2]+alphabet[randomIndex3]+alphabet[randomIndex4];
console.log(randomWord);