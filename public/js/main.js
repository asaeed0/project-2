const devUrl = 'http://localhost:3005';
const prodUrl = 'https://hotel-nomad.herokuapp.com';

const url = prodUrl;

/* --------------------------------------------------------------------------------
    FUNCTIONS
-------------------------------------------------------------------------------- */

function loadPage(page) {
    window.location.replace(`${url}/${page}`);
};

function printPosition(element) {
    let x = $(element).scrollTop;
    console.log(`${x}px`);
};

function test() {
    console.log('hobbes');
};

function incrementTill(arg, max) {
    if(arg >= max) {
        return max;
    } else {
        return arg + 1;
    }
}

function decrementTill(arg, min=0) {
    if(arg <= min) {
        return min;
    } else {
        return arg - 1;
    }
}

/*  Explore Page
--------------------------------------------- */
function exploreMouseEnter(elementId) {
    $(`#dim${elementId}`).css({'background-color': 'rgba(87, 87, 87, 0.1)'});
    $(`#breath${elementId}`).css({'transform': 'scale(1.1)'});   
}

function exploreMouseLeave(elementId) {
    $(`#dim${elementId}`).css({'background-color': 'rgba(87, 87, 87, 0.4)'});
    $(`#breath${elementId}`).css({'transform': 'scale(1.0)'});   
}


/* --------------------------------------------------------------------------------
    MAIN
-------------------------------------------------------------------------------- */

$('.explore-title')
    .on('mouseenter', (e) => {
        let element = $(e.target).data('exploreId');
        exploreMouseEnter(element);
    }).on('mouseleave', (e) => {
        let element = $(e.target).data('exploreId');
        exploreMouseLeave(element);
});



/* --------------------------------------------------------------------------------
    BOOKING
-------------------------------------------------------------------------------- */

//  WHO
//  Guest + Children Logic
$('#adults-plus').on('click', ()=> {
    let number = parseInt($('#adults-number').text());
    number = incrementTill(number, 5);
    $('#adults-number').text(number);
    $('#booking-guests').text(number);
    $("input[name='guests']").val(number);
})

$('#adults-minus').on('click', ()=> {
    let number = parseInt($('#adults-number').text());
    number = decrementTill(number);
    $('#adults-number').text(number);
    $('#booking-guests').text(number);
    $("input[name='guests']").val(number);
})

$('#children-plus').on('click', ()=> {
    let number = parseInt($('#children-number').text());
    number = incrementTill(number, 5);
    $('#children-number').text(number);
    $('#booking-children').text(number);
    $("input[name='children']").val(number);
})

$('#children-minus').on('click', ()=> {
    let number = parseInt($('#children-number').text());
    number = decrementTill(number);
    $('#children-number').text(number);
    $('#booking-children').text(number);
    $("input[name='children']").val(number);
})

//  Calander

//  Submit