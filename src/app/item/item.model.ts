export class Items {

    public name: string;
    public description: string;
    public imagePath: string;
    public reviewCounter: number;
    public reviews: string[];
    public price: number;

     constructor(name: string, desc: string, imagepath: string, reviewCounter: number, reviews: string[], price: number) {
         this.name = name;
         this.description = desc;
         this.imagePath = imagepath;
         this.reviewCounter = reviewCounter;
         this.reviews = reviews;
         this.price = price;
        }
}
