function transformText(text) {
    const str = text;
    const regexp = /^'|'$|\s'|'\s/g;
return str.replace(regexp, '"');
}
document.querySelector('[name="inputText"]').addEventListener('input', (event) => {
    const text = event.target.value;
    document.querySelector('.result').innerHTML = `<p>${transformText(text)}</p>`;
});