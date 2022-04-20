let dataHoje = new Date ()
let dataEvento = new Date (2022, 7, 25)
let nomeParticipante = "Fernando"
let nomeEvento = "Festival"
let perguntaInicio = 1
let perguntaDois = 2

if (perguntaInicio === 1) {
    console.log ("Qual a data do evento Evento?")
    if (dataEvento > dataHoje) {
        console.log ("Data cadastrada com sucesso!")
        console.log ("Qual o nome do Evento?")
        if (nomeEvento === "Festival") {
            console.log ("Evento cadastrado com sucesso!")
            console.log ("Deseja cadastrar participante?")
        }
    } else {
        console.log ("Data inválida!")
    }
}
if (perguntaDois === 2) {
    console.log ("Ótimo! Qual o nome do participante?" )
    if (nomeParticipante === "Fernando") {
        console.log ("Participante cadastrado com sucesso!")
        console.log ("Obrigado por cadastrar seu evento e participante!")
    }
} else {
    console.log ("Obrigado por cadastrar seu evento!")
}