// crear interface para los players 
interface Player {
    name: string;
    age: number;
    place: number;
}

class ConcretePlayer implements Player {
    name: string;
    age: number;
    place: number;

    constructor(name: string){
        this.name = name;
    }

    setName(name:string) {
        this.name = name;    
    }

    getName(){
        return this.name;
    }
}

class Team {
    roster: Player[];
    name: string;

    constructor(name: string){
        this.name = name;
        this.roster = [];
    }

    // inserta un nuevo jugador 
    setPlayer(player: Player, team: string){
        console.log(this.roster.length);
        if(!(this.roster.length >= 11)){
            this.roster.push(player); 
            createRow(player.name, team);
        }
    }

    // quita un jugador de la lista
    removePlayer(player: Player){
        // comprobar que no sea menor a cero
        this.roster.splice(this.roster.indexOf(player), this.roster.lastIndexOf(player));
    }

}

/**
 * Controla el comportamiento del DOM según las necesidades
 */
class DomController{
    /**
     * Se espera poder crear un elemento row, tal vez se puede generalizar más
     * @param element 
     * @param id 
     */
    createRow(element, id): string{
        var concrete_element = document.createElement(element);
        concrete_element.setAttribute(id);
        return concrete_element;
    }

    appendElement(element, father): void{
        father.appendChild(element);
    }
}

let teamA = new Team("Equipo A");
let teamB = new Team("Equipo B");

(function displayChanges(){

    var tableA = document.getElementById("teamA");
    var tableB = document.getElementById("teamB");

    tableA.addEventListener("click", changeValue, false);
    tableB.addEventListener("click", changeValue, false);

    // recorre cada equipo y los añade a la tabla
    function changeValue(){
        var row = document.getElementById
        console.log("cambió el estado de un equipo");
    }
})();

// cuando se clickea sobre el nombre de un jugador lo edita <--------- continuar aquí
function editPlayer(element){
    console.log(`Nombre ${element.innerText} ${element.id}`);
    // pone el nombre del jugador adentro del input
    var input_element = document.getElementById("playerTeamA").getElementsByTagName("input");
    // var input_element = document.getElementsByTagName("input").getElementById("playerTeamA");
    console.log(input_element);
}


// crea un elemento nuevo en la tabla por cada jugador
function createRow(name, team){
    // debe ser el id de la tabla
    var tableTeam = document.getElementById(team);
    var td = document.createElement("td");
    var row = document.createElement("tr");
    // el id debe ser con el nombre del team más el tamaño del arreglo
    switch(team){
        case "teamA":
        row.setAttribute('id', teamA.roster.length+'_'+team);
        break;

        case "teamB":
        row.setAttribute('id', teamB.roster.length+'_'+team);
        break;
    }

    row.setAttribute('onClick', 'editPlayer(this)');
    td.innerHTML = name;
    row.appendChild(td);
    console.log(td);
    tableTeam.children[0].appendChild(row);
}

// añade un jugador a una lista determinada
function addPlayerTeam(element_id){
    // es necesario castear a un elemento HTML porque 
    var name = (<HTMLInputElement>document.getElementById(element_id)).value;
    if (name) {

        (<HTMLInputElement>document.getElementById(element_id)).value = "";

        switch (element_id) {
            case "playerTeamB":
                teamB.setPlayer(new ConcretePlayer(name), 'teamB');
                // createRow(name, "teamB");
                break;

            case "playerTeamA":
                teamA.setPlayer(new ConcretePlayer(name), 'teamA');
                // createRow(name, "teamA");
                break;
        }

    }
}
