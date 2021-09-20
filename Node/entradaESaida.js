const anonimo = process.argv.indexOf('-a') !==-1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala anonino! \n')
    process.exit()
} else {
    process.stdout.write('Inform o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toLocaleString().replace('\n', '')
        process.stdout.write(`Fala ${nome}! \n`)
        process.exit()
    })
}