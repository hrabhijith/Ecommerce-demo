export class Items {

    public name: string;
    public description: string;
    public imagePath: string;
    public reviewCounter: number;
    public reviews: string[];
    public price: number;
    public ratingCounter: number;
    public ratings: number[];
    public avg: number;
    public extraImages: string[];

     constructor(name: string, desc: string, imagepath: string,
                 reviewCounter: number, reviews: string[], price: number,
                 ratingCounter: number, ratings: number[], avg: number, extraImg: string[]) {
         this.name = name;
         this.description = desc;
         this.imagePath = imagepath;
         this.reviewCounter = reviewCounter;
         this.reviews = reviews;
         this.price = price;
         this.ratingCounter = ratingCounter;
         this.ratings = ratings;
         this.avg = avg;
         this.extraImages = extraImg;
        }
}
