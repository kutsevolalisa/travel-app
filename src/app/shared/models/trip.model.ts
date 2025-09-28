export interface Trip {
    id: number;
    destination: string;
    startDate: Date;
    endDate: Date;
    price: number;
    availableSeats: number;
    transport: string;
    accommodation: string;
    description: string;
    imageUrl: string;
    isAvailable: boolean;
}