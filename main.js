$(document).ready(function() {

    var totalprice=0;
    var selectedseats=[];

    var sc = $('#seat-map').seatCharts({
        map: [
        'aaa__DDDD__AAA',
        'aaa__DDDD__AAA',
        'aaa__DDDD__AAA',
        'aaa__DDDD__AAA',
        'aaa__DDDD__AAA',
        'aaa__DDDD__AAA',
        ],
        seats: {
            a: {
                price   : 500,
                'descr' : 'Economic seat',
                classes : 'front-seat' //your custom CSS class
            },
            A: {
                price   : 500,
                'descr' : 'Ordinary seat.',
                classes : 'front-seat' //your custom CSS class
            },
            D: {
                price   : 800,
                classes : 'front',
                'descr' : 'Premium seat.'
            }


        },
        click: function () {
            if (this.status() == 'available') {

                totalprice+=this.settings.data['price']

                selectedseats.push(this.settings.data);

                console.log(totalprice,selectedseats);

                return 'selected';
            } else if (this.status() == 'selected') {

                totalprice-=this.settings.data['price'];


                var index = selectedseats.indexOf(this.settings.data);
                selectedseats.splice(index, 1);
                console.log(totalprice, selectedseats);
                return 'available';
            } else if (this.status() == 'unavailable') {
                //seat has been already booked
                return 'unavailable';
            } else {
                return this.style();
            }
        }
    });



    //Make all available 'c' seats unavailable
    sc.find('a.available').status('unavailable');

    sc.get(['1_3']).status('unavailable');

});