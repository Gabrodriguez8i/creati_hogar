// SUB Interfaces  ------------------------
interface details_user_paid {
    email: string;
    name: string;
    phone?: any;
    address: details_user_paid_address
};

interface details_user_paid_address {
    city?: any;
    country: string;
    line1?: any,
    line2?: any,
    postal_code?: any,
    state?: any
  }

// MAIN Interfaces  ------------------------
export interface Reservation {
    id: number,
    created_at?: string,
    amount_total: number,
    date_start: string,
    date_end: string,
    state: number,
    details_user_paid: details_user_paid
    product_id: number,
    product_name: string
}