/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
    Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
    Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
    Trasformare la stringa foto in una immagine effettiva
BONUS 2:
    Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
*/

/* ---------------------------------------------------------------------------- */

// Array di oggetti
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// Creazione ciclo for per eseguire più commandi selezionando ogni chiave di ogni oggetto
for ( let i = 0; i < team.length; i++ ) {
    
    console.log(team[i]);
    
    // Chiave name
    let nameTeam = team[i].name

    // Chiave role
    let roleTeam = team[i].role

    // Chiave image
    let imageTeam = team[i].image

    console.log(nameTeam)
    console.log(roleTeam)
    console.log(imageTeam)

    document.querySelector("#team").innerHTML += 
    `
        <div class="col-4 p-3">

            <div class="card border border-0" id="${i}">
                <img src="./assets/img/${imageTeam}" class="card-img-top" alt="foto frontale di ${nameTeam}">
                <div class="card-body">
                    <h3 class="card-title">${nameTeam}</h3>
                    <h5 class="card-title">${roleTeam}</h5>
                </div>
            </div>
        </div>
    `

    document.getElementById(i).style.fontFamily = `'Times New Roman', Times, serif`;
}