function printLineChart() {



  $.ajax({

    url:'server.php',
    method: 'GET',
    success: function(fullData){
      console.log(fullData);

      var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
      var type = fullData.fatturato['type'];
      var data = fullData.fatturato['data'];
      var ctx = $('#chart');
      var chartone = new Chart (ctx, {

        type: type,

        data: {
          labels: months,
          datasets: [{
            label: 'Fatturato',
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



  $.ajax({

    url:'server.php',
    method: 'GET',
    success: function(fullData){
      console.log(fullData);

      var fatturatoByAgent = fullData.fatturato_by_agent['data'];
      var type = fullData.fatturato_by_agent['type'];
      var names = [];
      var dati = [];

        for (var key in fatturatoByAgent) {
          names.push(key);
          dati.push(fatturatoByAgent[key]);
        }



      var ctx = $('#chartpie');
      var chartone = new Chart (ctx, {

        type: type,
        data: {
          labels: names,
          datasets: [{
            label: 'Fatturato by Agent',
            data: dati,
            backgroundColor: [
                               'rgba(230,230,250,1)',
                               'rgba(100,149,237,1)',
                               'rgba(173,216,230,1)',
                               'rgba(135,206,250,1)',
                             ],
            borderColor: '#262640',
            borderWidth: 1
                }]
              },

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
