import { countryUrl, propertyUrl } from './objects';

export class ServerData {
    request: {};
    response: {
        listings: HouseDescription[];
        application_response_code: number;
        application_response_text: string;
    };
}

export class HouseDescription {
    public bathroom_number: number; // ванны
    public bedroom_number: number; // спальни
    public room_number: number;
    public country: string;
    public img_url: string;
    public price_formatted: string;
    public summary: string;
    public title: string;
    public lister_url: string;

}
export class Params {
    private country = 'UK';
    private urlToSent = `/api?encoding=json&pretty=1&action=search_listings&listing_type=buy`;
    private location = '';
    private minPrice = '';
    private maxPrice = '';
    private listingType = '';
    private bathrooNumber = '';
    private bedroomNumber = '';
    private constructionYear = '';

    constructor(oldParams?: Params) {
        if(oldParams) {
            this.country = oldParams.country;
            this.location = oldParams.location;
            this.minPrice = oldParams.minPrice;
            this.maxPrice =  oldParams.maxPrice;
            this.listingType = oldParams.listingType;
            this.bathrooNumber = oldParams.bathrooNumber;
            this.bedroomNumber = oldParams.bedroomNumber;
            this.constructionYear = oldParams.constructionYear;
        }
    }

    public applyCountry(countryName: string): string {
        this.country = countryUrl[countryName];
        return this.country;
    }

    public applyProp(key: string, value: string): void {
            this[key] = value ? propertyUrl[key] + value : '';
    }


    public build(): string {

        let url = (this.country ? this.country : 'https://api.nestoria.co.uk') + this.urlToSent;
        for (const key in this) {
            if (key === 'country' || key === 'urlToSent') {
                continue;
            }

            if (this[key]) {
                url = url + this[key];
            }
        }
        return url;
    }
    public destroy(): void {
        for (const key in this) {
            if (key === 'country' || key === 'urlToSent') {
                continue;
            }
            if (this[key]) {
                this[key] = null;
            }
        }
    }

}
