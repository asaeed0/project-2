//  Function takes the reservation details object submitted by the
//  user (POST request) and works with that.

module.exports = (reservation) => {

    //  It should check to confirm that the requested dates are free
    //  in the calander database
    //       IF (days are unavailable) 
    //           - return false;  
    //       ELSE 
    //           - generate confirmation code
    //           - update the reservation object to contain the confirmation code
    //           - create new booking in the reservations database
    //           - update calander dates from vacant to cofirmation number
    //           - return reservation;


}