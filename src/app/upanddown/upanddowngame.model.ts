import { UpAndDownPlayer } from './upanddownplayer.model';

export class UpAndDownGame {
    public players: UpAndDownPlayer[];
    public displayRounds: number[];
    public currentRound: number;

    constructor() {
        this.players = [];
        this.displayRounds = [];
        this.currentRound = 0;
    }

    /**
     * calculateRound - Takes a round as a parameter. Then compares the bids to the tricks made for that round and calculates the points.
     * @param {number} round
     */
    public calculateRound(round: number) {
        var arrayRound = round - 1;
        for (var i = 0; i < this.players.length; i++) {
            var delta = this.players[i].bids[arrayRound] === this.players[i].books[arrayRound] ? 10 + this.players[i].books[arrayRound] : this.players[i].books[arrayRound];
            this.players[i].gain[arrayRound] = delta;
            this.players[i].total += delta;
            this.players[i].roundTotal[arrayRound] = this.players[i].total;
        }
    }

    /**
     * checkRound - Takes a round as a parameter. Then adds up the tricks to see if they are the correct amount.
     * @param {number} round
     * @export boolean
     */
    public checkRound(round: number) {
        var arrayRound = round - 1;
        var totalTricks = 0;
        for (let player of this.players) {
            totalTricks += player.books[arrayRound];
        }
        return totalTricks === this.displayRounds[arrayRound] ? true : false;
    }

    /**
     * udpateRound - Takes a round as a parameter. Checks the scores vs what they were before, and makes udpates.
     * @param {number} round
     */
    public udpateRound(round: number) {
        var arrayRound = round - 1;
        for (var i = 0; i < this.players.length; i++) {
            var newGain = this.players[i].bids[arrayRound] === this.players[i].books[arrayRound] ? 10 + this.players[i].books[arrayRound] : this.players[i].books[arrayRound];
            var oldGain = this.players[i].gain[arrayRound];
            var delta = newGain - oldGain;
            if (newGain > oldGain) {
                this.players[i].total += delta;
                
            } else if (newGain < oldGain) {
                this.players[i].total -= delta;
            }
            this.players[i].roundTotal[arrayRound] = (arrayRound === 0) ? newGain : this.players[i].roundTotal[arrayRound - 1] + newGain;
            this.players[i].gain[arrayRound] = newGain;
        }
        for (i = round; i <  this.currentRound; i++) {
            for (var j = 0; j < this.players.length; j++) {
                this.players[j].roundTotal[i] = this.players[j].roundTotal[i-1] + this.players[j].gain[i];
            }
        }
    }
}