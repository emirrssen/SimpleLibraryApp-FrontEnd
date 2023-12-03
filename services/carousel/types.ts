export class CarouselItemDetails {
    id: number = 0;
    image: string = "";
    isVisible: boolean = false;
    queueNumber: number = 0;

    constructor(fields?: {
        id: number, image: string, isVisible: boolean, queueNumber: number
    }) {
        Object.assign(this, fields);
    }
}