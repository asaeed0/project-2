const restaurants = [
    {
        restaurant_id: 1,
        name: 'Casa Tortuga',
        brief: 'Authentican Mayan Seafood',
        description: 'Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels.',
        cusine: 'Mexican',
        phone: '(647) 654-2929',
        address: ['3 Parkside Drive', ' Toronto ON M6K 3M7'],
        photos: {
            main: {
                title: 'Image 1',
                caption: 'This is image 1',
                link: '/img/restaurant1002.jpeg',
            },
            ambiance: {
                title: 'Image 2',
                caption: 'This is image 2',
                link: '/img/leaf.png',
            },
        },
        hours: [
            {title: 'Dinner', days: 'Daily', hours: '6:00pm to 11:00pm'},
            {title: 'Brunch', days: 'Sundas', hours: '11:00am to 3:00pm'},
            {title: 'Lunch', days: 'Monday to Saturday', hours: '12:00pm to 3:00pm'},
        ],
        menus: [
            {name: 'menu', link: ''},
        ],
        notes: [],
    },
    {
        restaurant_id: 2,
        name: 'Patagonia',
        brief: 'Rooftop Lounge and Bar',
        description: 'Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels.',
        cusine: 'Argentinian Grill',
        phone: '(647) 654-5454',
        address: ['5 Parkside Drive', ' Toronto ON M6K 3M7'],
        photos: {
            main: {
                title: 'Image 1',
                caption: 'This is image 1',
                link: 'link to image',
            },
            ambiance: {
                title: 'Image 2',
                caption: 'This is image 2',
                link: '/img/flower.png',
            },
        },
        hours: [
            {title: 'Drinks and Tapas', days: 'Daily', hours: '4:00pm to late'},
        ],
        menus: [
            {name: 'food menu', link: ''},
            {name: 'drinks menu', link: ''},
        ],
        notes: [],
    },
];

module.exports = restaurants;