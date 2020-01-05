let ctx = document.getElementById("grafica");
let tipos = ['Bug', 'Dragon','Electric','Fighting','Fire','Flying','Ghost','Grass','Ground','Ice','Normal','Poison','Psychic','Rock','Water'];
let suma = [17,3,48,29,28,32,17,41,45,37,0,5,41,43,29]
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: tipos,

        datasets: [{
            data: suma,
            backgroundColor: [
                'rgba(255, 99, 132, 3)',
                'rgba(54, 162, 235, 3)',
                'rgba(248, 213, 163, 3)',
                'rgba(151, 179, 230, 3)',
                'rgba(252, 247, 222, 3)',
                'rgba(230, 224, 212, 3)',
                'rgba(253, 223, 223, 3)',
                'rgba(245, 245, 245, 3)',
                'rgba(198, 188, 219, 3)',
                'rgba(222, 253, 224, 3)',
                'rgba(244, 231, 218, 3)',
                'rgba(172, 229, 238, 3)',
                'rgba(244, 231, 218, 3)',
                'rgba(152, 215, 165, 3)',
                'rgba(234, 237, 161, 3)',
                'rgba(244, 231, 218, 3)',
                'rgba(203, 207, 207, 3)',
                'rgba(222, 243, 253, 3)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 2)',
                'rgba(54, 162, 235, 2)',
                'rgba(248, 213, 163, 2)',
                'rgba(151, 179, 230, 2)',
                'rgba(252, 247, 222, 2)',
                'rgba(230, 224, 212, 2)',
                'rgba(253, 223, 223, 2)',
                'rgba(245, 245, 245, 2)',
                'rgba(198, 188, 219, 2)',
                'rgba(222, 253, 224, 2)',
                'rgba(244, 231, 218, 2)',
                'rgba(172, 229, 238, 2)',
                'rgba(244, 231, 218, 2)',
                'rgba(152, 215, 165, 2)',
                'rgba(234, 237, 161, 2)',
                'rgba(244, 231, 218, 2)',
                'rgba(203, 207, 207, 2)',
                'rgba(222, 243, 253, 2)'
            ],

        }],
        borderWidth: 3

    }
});
