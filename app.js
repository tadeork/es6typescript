class FutbolClub {
    constructor(name){
        this.name = name;
    }

    // agrega un jugador al equipo
    setPlayer(player){
        this.roster.push(player);
    }

    // elimina un jugador del equipo
    removePlayer(player){
        this.roster.splice(roster.indexOf(player), roster.lastIndesOf(player));
    }

}

class FutbolPlayer {
    // el jugar es parte de un equipo
    constructor(club){
        this.club = club;
    }
}
