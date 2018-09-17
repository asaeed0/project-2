

PAOLO

Error pages
- 404 error
- Reservation days unavailable (NOT ERROR)
- Reservation - something went wrong please try again

Models
- Validation for 'reservations'

Controller
- Create new reservation:
    - Create new file for this in controller
    -> GET CONFIRMATION CODE GENERATOR FROM AMAAN
    - Gather POST data
    - Add confirmation code to POST object
    - Create new reservation in mysql
        - If error: (days taken or something went wrong) - return error page
        - If success: update Calander table with new reso. WHERE ROOM STATUS IS CHANGED TO CONFIRMATION CODE
            - Then