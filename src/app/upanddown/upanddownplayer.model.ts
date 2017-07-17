export class UpAndDownPlayer {
    public name: string;
    public bids: number[];
    public books: number[];
    public total: number;

    constructor() {
        this.name = '';
        this.bids = [];
        this.books = [];
        this.total = 0;
    }
}