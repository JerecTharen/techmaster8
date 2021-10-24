

export default class CharacterDAL{
    GetPlayer(){
        return fetch('/player');
    }
    GetEnemy(){
        return fetch('/enemy');
    }
}