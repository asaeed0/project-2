const rooms = {
    everest: {
        room_id: 1,
        type: 'Twin Room',
        name: 'Everest',
        size: '300sqft',
        price: 250,
        description: "You wouldn't. Ask anyway! Hey, tell me something. You've got all this money. How come you always dress like you're doing your laundry?",
        restrictions: 'No Smoking | No pets | No firearms',
        guests: 2,
        checkIn_time: '3:00PM',
        checkOut_time: '12:00PM',
        tagline: [
            'And until then, I can never die? Ow, my spirit!',
            'And until then, I can never die? Ow, my spirit!'
        ],
        layout: [
            {
                room: 'Bedroom 1',
                beds: '2 full-size beds',
                tv: true,
                bathroom: true,
            },
        ],
        amenities: [
            {
                title: 'coffee maker',
                icon: '<i class="fas fa-coffee"></i>',
                description: 'A Nespresso instant coffee maker with some of the finest coffee sorces from around the world',
            },
            {
                title: 'Mini Bar',
                icon: '<i class="fas fa-glass-martini-alt"></i>',
                description: 'A small fridge fully stocked with drinks, peanuts, chocoalte and anything else you could want to snack on',
            },
            {
                title: 'free wifi',
                icon: '<i class="fas fa-wifi"></i>',
                description: 'Free 100/Mbs wifi avaialbe throughtout the hotel with your suite number and last name',
            },
            {
                title: 'balcony',
                icon: '<i class="fas fa-chalkboard-teacher"></i>',
                description: 'A balcony with a outdoor lounge seating, the perfect place for some reading and relaxing',
            },
            {
                title: 'Heating / Air Conditioning',
                icon: '<i class="fas fa-thermometer-three-quarters"></i>',
                description: 'Winter or Summer? You get to decide with our state-of-the-art climate control system',
            },
        ],
        photos: [
            {
                title: 'Image 1',
                caption: 'Caption for image 1',
                url: '',
            },
            {
                title: 'Image 1',
                caption: 'Caption for image 1',
                url: '',
            },
            {
                title: 'Image 1',
                caption: 'Caption for image 1',
                url: '',
            },
        ],
    },
};

module.exports = rooms;