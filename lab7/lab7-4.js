let team = {
    players: ["Дмитрий", "Иван", "Антон", "Евгений", "Владислав", "Александр"],
    getInfo(){
        for(let i = 0; i < this.players.length; i++){
            console.log(`${i + 1} игрок: ${this.players[i]}`);
        }
    }
}


team.getInfo();