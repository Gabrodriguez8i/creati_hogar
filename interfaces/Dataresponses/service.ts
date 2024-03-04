interface AddressService {
    city: string;
    state: string;
};

interface bedroomService{
    bedroom: string,
    imgUrl: string,
    description: string[]
};

interface AmenitiesComunesServices {
    name: string;
    icon: string;
  }
  
export interface Service {
    id: number,
    name: string,
    slug?: string,
    description: string,
    bookable: boolean,
    address: AddressService
    mainImage?: string,
    bathrooms: number,
    bedrooms: number,
    occupancy: number,
    priceBase: number,
    category: string,
    totalNights: number,
    videoPromo?: string,
    imagesSlider: string[],
    propertyRules?: string[],
    imagesBedrooms?: bedroomService,
    commonAmenities?: AmenitiesComunesServices[],
    mapDirection?: string
    galeryImages?: string[]
}