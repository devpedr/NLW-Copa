
//Função para trocar as bandeiras de cada time pelo javascrip
function createGame(team1, hour, team2){
    //O return vai retonar esse conteúdo abaixo para o "document", onde esta chamando o ${creatGame()}
    return`
    <li>
        <img src="./assets/icon=${team1}.svg" alt="Bandeira do ${team1}">
        <strong>${hour}</strong>
        <img src="./assets/icon=${team2}.svg" alt="Bandeira do ${team2}">
    </li>
    `

}
let delay= -.4;// Função delay para animação dos cards 
//Função para criar os cards pelo javascript
function createCard(data, day, game){
    //O return vai retonar esse conteúdo abaixo para o "document", onde esta chamando o ${creatCard()}
    // função delay com expressao matematica para o primeiro card
    delay = delay + .4; 
    return`
    <div class="card" style="animation-delay:${delay}s"> 
       <h2>${data}<span>${day}</span></h2>
    <ul>
          ${game}
    </ul>                                        
    </div>               
    `
}
//Acessando a div #container no HTML, para passar o conteúdo para javascript
document.querySelector("#calendar").innerHTML =
    createCard('20/11', 'domingo',
    createGame("qatar","10:00","ecuador"))+

    createCard('21/11', 'segunda',
    createGame("england","10:00","iran") +
    createGame("senegal","13:00","netherlands") +
    createGame("united states","16:00","wales"))+   

    createCard('22/11', 'terça',
    createGame("argentina","07:00","saudi arabia") +
    createGame("denmark","10:00","tunisia") +
    createGame("mexico","13:00","poland") +
    createGame("france","16:00","australia"))+

    createCard('23/11', 'quarta',
    createGame("morocco","07:00","croatia") +
    createGame("germany","10:00","japan") +
    createGame("spain","13:00","costa rica") +
    createGame("france","16:00","australia"))+

    createCard('24/11', 'quinta',
    createGame("switzerland","07:00","cameroon") +
    createGame("uruguay","10:00","south korea") +
    createGame("portugal","13:00","ghana") +
    createGame("brazil","16:00","serbia"))+

    createCard('25/11', 'sexta',
    createGame("wales","07:00","iran") +
    createGame("qatar","10:00","senegal") +
    createGame("netherlands","13:00","ecuador") +
    createGame("england","16:00","united states"))+

    createCard('26/11', 'sabado',
    createGame("tunisia","07:00","australia") +
    createGame("poland","10:00","saudi arabia") +
    createGame("france","13:00","denmark") +
    createGame("argentina","16:00","mexico"))+ 

    createCard('27/11', 'domingo',
    createGame("japan","07:00","costa rica") +
    createGame("belgium","10:00","morocco") +
    createGame("croatia","13:00","canada") +
    createGame("spain","16:00","germany"))+
    
    createCard('28/11', 'segunda',
    createGame("cameroon","07:00","serbia") +
    createGame("south korea","10:00","ghana") +
    createGame("brazil","13:00","switzerland") +
    createGame("portugal","16:00","uruguay"))+ 

    createCard('29/11', 'terça',
    createGame("ecuador","12:00","senegal") +
    createGame("netherlands","12:00","qatar") +
    createGame("iran","16:00","united states") +
    createGame("wales","16:00","england"))+

    createCard('30/11', 'quarta',
    createGame("tunisia","12:00","france") +
    createGame("australia","12:00","denmark") +
    createGame("poland","16:00","argentina") +
    createGame("saudi arabia","16:00","mexico"))+

    createCard('01/11', 'quinta',
    createGame("croatia","12:00","belgium") +
    createGame("canada","12:00","morocco") +
    createGame("japan","16:00","spain") +
    createGame("costa rica","16:00","germany"))+     
    
    createCard('02/11', 'sexta',
    createGame("south korea","12:00","portugal") +
    createGame("ghana","12:00","uruguay") +
    createGame("serbia","16:00","switzerland") +
    createGame("cameroon","16:00","brazil"))
                    