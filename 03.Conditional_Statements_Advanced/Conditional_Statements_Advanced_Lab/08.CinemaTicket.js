function CinemaTicketPrice(day) {


    const cinemaDay = {

        Monday: {
            price: 12,
        },
        Tuesday: {
            price: 12,
        },
        Wednesday: {
            price: 14,
        },
        Thursday: {
            price: 14,
        },
        Friday: {
            price: 12,
        },
        Saturday: {
            price: 16,
        },
        Sunday: {
            price: 16,
        }
    }

    
    console.log(cinemaDay[day].price);
    
}


CinemaTicketPrice('Monday');
