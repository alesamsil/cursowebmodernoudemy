const colors = {
    p: '#388E3C',
    div: '#1565C0',
    span: '#E53935',
    section: '#F6C02D',
    ul: '#5E35B1',
    ol: '#FBC02D',
    header: '#D81B60',
    nav: '#64DD17',
    main: '#00ACC1',
    footer: '#304FFE',
    form: '#9F6581',
    body: '#25B6DA',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }

}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})