export class UpAndDownPlayer {
    public name: string;
    public bids: number[];
    public books: number[];
    public gain: number[];
    public roundTotal: number[];
    public total: number;

    constructor() {
        this.name = '';
        this.bids = [];
        this.books = [];
        this.gain = [];
        this.roundTotal = [];
        this.total = 0;
    }
}