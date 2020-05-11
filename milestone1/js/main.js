function printLineChart() {

    var ctx = $('#chart');
    var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

  $.ajax({

  url:'server.php',
  method: 'GET',
  success: function(data){
    console.log(data);

    var chartone = new Chart (ctx, {

      type: 'line',

      data: {
        labels: months,
        datasets: [{
          label: 'Sales',
          data: data,
          backgroundColor: ['rgba(230,230,250,1)',
                           'rgba(176,224,230,1)',
                           'rgba(173,216,230,1)',
                           'rgba(135,206,250,1)',
                           'rgba(135,206,235,1)',
                           'rgba(0,191,255,1)',
                           'rgba(176,196,222,1)',
                           'rgba(30,144,255,1)',
                           'rgba(100,149,237,1)',
                           'rgba(70,130,180,1)',
                           'rgba(95,158,160,1)',
                           'rgba(123,104,238,1)'],
          borderColor: '#262640',
          borderWidth: 1
              }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
  },


  error: function (errore){

  }


});



};


function init(){
  printLineChart();
}

$(document).ready(init);
