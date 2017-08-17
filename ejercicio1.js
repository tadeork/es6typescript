var ConcretePlayer = (function () {
    function ConcretePlayer(name) {
        this.name = name;
    }
    ConcretePlayer.prototype.setName = function (name) {
        this.name = name;
    };
    ConcretePlayer.prototype.getName = function () {
        return this.name;
    };
    return ConcretePlayer;
}());
var Team = (function () {
    function Team(name) {
        this.name = name;
        this.roster = [];
    }
    // inserta un nuevo jugador 
    Team.prototype.setPlayer = function (player, team) {
        console.log(this.roster.length);
        if (!(this.roster.length >= 11)) {
            this.roster.push(player);
            createRow(player.name, team);
        }
    };
    // quita un jugador de la lista
    Team.prototype.removePlayer = function (player) {
        // comprobar que no sea menor a cero
        this.roster.splice(this.roster.indexOf(player), this.roster.lastIndexOf(player));
    };
    return Team;
}());
/**
 * Controla el comportamiento del DOM según las necesidades
 */
var DomController = (function () {
    function DomController() {
    }
    /**
     * Se espera poder crear un elemento row, tal vez se puede generalizar más
     * @param element
     * @param id
     */
    DomController.prototype.createRow = function (element, id) {
        var concrete_element = document.createElement(element);
        concrete_element.setAttribute(id);
        return concrete_element;
    };
    DomController.prototype.appendElement = function (element, father) {
        father.appendChild(element);
    };
    return DomController;
}());
var teamA = new Team("Equipo A");
var teamB = new Team("Equipo B");
(function displayChanges() {
    var tableA = document.getElementById("teamA");
    var tableB = document.getElementById("teamB");
    tableA.addEventListener("click", changeValue, false);
    tableB.addEventListener("click", changeValue, false);
    // recorre cada equipo y los añade a la tabla
    function changeValue() {
        var row = document.getElementById;
        console.log("cambió el estado de un equipo");
    }
})();
// cuando se clickea sobre el nombre de un jugador lo edita <--------- continuar aquí
function editPlayer(element) {
    console.log("Nombre " + element.innerText + " " + element.id);
    // pone el nombre del jugador adentro del input
    var input_element = document.getElementById("playerTeamA").getElementsByTagName("input");
    // var input_element = document.getElementsByTagName("input").getElementById("playerTeamA");
    console.log(input_element);
}
// crea un elemento nuevo en la tabla por cada jugador
function createRow(name, team) {
    // debe ser el id de la tabla
    var tableTeam = document.getElementById(team);
    var td = document.createElement("td");
    var row = document.createElement("tr");
    // el id debe ser con el nombre del team más el tamaño del arreglo
    switch (team) {
        case "teamA":
            row.setAttribute('id', teamA.roster.length + '_' + team);
            break;
        case "teamB":
            row.setAttribute('id', teamB.roster.length + '_' + team);
            break;
    }
    row.setAttribute('onClick', 'editPlayer(this)');
    td.innerHTML = name;
    row.appendChild(td);
    console.log(td);
    tableTeam.children[0].appendChild(row);
}
// añade un jugador a una lista determinada
function addPlayerTeam(element_id) {
    // es necesario castear a un elemento HTML porque 
    var name = document.getElementById(element_id).value;
    if (name) {
        document.getElementById(element_id).value = "";
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
