function getMonths(){
  return moment.months();
}
var months = getMonths();

function level(){
  var search = window.location;
  var searchLevel = new URL(search);
  var level = searchLevel.searchParams.get('level');

  console.log(level);
  return level;
}

function createLineChart (ctx, data){

      var ctx = ctx;
      var chartone = new Chart (ctx, {
        type: data['type'],
        data: {
          labels: months,
          datasets: [{
            label: 'Fatturato',
            data: data['data'],
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


function createPieChart (ctx, data){
      var ctx = ctx;
      var chartone = new Chart (ctx, {

        type: type['type'],
        data: {
          labels: labels['labels'],
          datasets: [{
            label: 'Fatturato by Agent',
            data: data['data'],
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

function createMultiLineChart (ctx, data){


      var datasets = [];

        for (var team in data['data']) {
            dasets.push({
              label: team,
              data: data['data'][team]
            });
        }

      var ctx = ctx;
      var chartone = new Chart (ctx, {
        type: data['type'],
        data: {
          labels: months,
          datasets: [{
            datasets:datasets,
            backgroundColor: ['rgba(230,230,250,1)',
                             ],
            borderColor: '#262640',
            borderWidth: 1
          },
          {
            datasets:datasets,
            backgroundColor: ['rgba(230,230,250,1)',
                             ],
            borderColor: '#fefe33',
            borderWidth: 1
          },
          {
            datasets:datasets,
            backgroundColor: ['rgba(230,230,250,1)',
                             ],
            borderColor: '#000080',
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

function printCharts() {


  $.ajax({

    url:'server.php',
    method: 'GET',
    data:{
      level:level()
    },
    success: function(data){
      console.log(data);

      if (data['fatturato']) {
        createLineChart ($('#chartline'), data['fatturato']);
      }
      if (data['fatturato_by_agent']) {
        createPieChart ($('#chartpie'), data['fatturato_by_agent']);
      }
      if (data['team_efficiency']) {
        createMultiLineChart($('#chartfine'), data['team_efficiency']);
      }
    },


    error: function (errore){

    }


  });

};


function init(){
  printCharts();
  getMonths();
  level();
}

$(document).ready(init);
