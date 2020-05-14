function getMonths(){
  return moment.months();
}

var months = moment.months();

function createLineChart (ctx, data, type){

      var ctx = ctx;
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
      }

function createPieChart (ctx, data, type, labels){
      var ctx = ctx;
      var chartone = new Chart (ctx, {

        type: type,
        data: {
          labels: labels,
          datasets: [{
            label: 'Fatturato by Agent',
            data: data,
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
    };



function printCharts() {

  var months = getMonths();


  $.ajax({

    url:'fatturato.php',
    method: 'GET',
    success: function(data){
      console.log(data);
      createLineChart ($('#chartline'), data['data'], data['type'] );
    },


    error: function (errore){

    }


  });




  $.ajax({

    url:'fatturatoAgent.php',
    method: 'GET',
    success: function(data){
      console.log(data);

        createPieChart ($('#chartpie'), data['data'], data['type'], data['labels']);
      },


      error: function (errore){

      }


  });


};


function init(){
  printCharts();
  getMonths();
}

$(document).ready(init);
