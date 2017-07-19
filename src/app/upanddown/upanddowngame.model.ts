import { UpAndDownPlayer } from './upanddownplayer.model';

export class UpAndDownGame {
    public players: UpAndDownPlayer [];
    public displayRounds: number[];
    public currentRound: number;

    constructor() {
        this.players = [];
        this.displayRounds = [];
        this.currentRound = 0;
    }
}