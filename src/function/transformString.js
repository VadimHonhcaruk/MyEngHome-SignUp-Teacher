export function transformString(str) {
    const words = str.split('-'); // розділяємо рядок на слова
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase(); // перетворюємо слово в нижній регістр
        if (words[i][0]) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1); // першу букву робимо великою
        }
    }
    return words.join('-'); // з'єднуємо слова знову у рядок
}