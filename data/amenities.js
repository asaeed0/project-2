const amenities = [
    {
        amenity_id: 1,
        name: 'Fitness Center',
        brief: "Whether its weights or resistence training we've got you in our state-of-the-art Fitness Center. Featuring a fully stocked weight room and cardio equipment all overlooking the Park.",
        photos: [],
        icon: {
            title: 'dumbbell',
            link: '<i class="fas fa-dumbbell"></i>',
        },
        hours: [
            {days: 'Daily', hours: '6:00am to 11:00pm'},
        ],
        restrictions: ['No unaccompanied children under 12'],
        notes: [],
    },
    {
        amenity_id: 2,
        name: 'Swimming Pool',
        brief: 'Our swimming pool area features a temperature controlled, olympic size swimming pool, along with a hot tub, and steam rooms',
        description: ['Description 1', 'Description 2', 'Description 3'],
        photos: [],
        icon: {
            title: 'swimming',
            link: '<i class="fas fa-swimmer"></i>',
        },
        hours: [
            {days: 'Daily', hours: '6:00am to 8:00pm'},
        ],
        restrictions: [],
        notes: ['Life Guard: John Smith'],
    },
    {
        amenity_id: 3,
        name: 'Morning Yoga',
        brief: 'Start your day of correctly with some pre-breakfast calibration. Complimentary with every room we invite all our guests to choose one of our three yoga morning yoga classes designed to help set your days journey on the right path',
        description: ['Description 1', 'Description 2', 'Description 3'],
        photos: [],
        icon: {
            title: 'yoga',
            link: '<i class="fas fa-american-sign-language-interpreting"></i>',
        },
        hours: [
            {days: 'Yin Yoga', hours: '6:00am to 6:55pm'},
            {days: 'Hatha Yoga', hours: '7:00am to 7:55pm'},
            {days: 'Bikram Yoga', hours: '8:00am to 8:55pm'},
        ],
        restrictions: [],
        notes: [],
    },
];

module.exports = amenities;