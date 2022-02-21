
        var options1 = {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            title: {
                text: 'Product Trends by Month',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        }

        var chart1 = new ApexCharts(
            document.querySelector("#apex-1"),
            options1
        );

        chart1.render();
        
        var options2 = {
            chart: {
                height: 350,
                type: 'line',
                shadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 1
                },
                toolbar: {
                    show: false
                }
            },
            colors: ['#77B6EA', '#545454'],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                    name: "High - 2013",
                    data: [28, 29, 33, 36, 32, 32, 33]
                },
                {
                    name: "Low - 2013",
                    data: [12, 11, 14, 18, 17, 13, 13]
                }
            ],
            title: {
                text: 'Average High & Low Temperature',
                align: 'left'
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            markers: {
                
                size: 6
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: 'Month'
                }
            },
            yaxis: {
                title: {
                    text: 'Temperature'
                },
                min: 5,
                max: 40
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        }

        var chart2 = new ApexCharts(
            document.querySelector("#apex-2"),
            options2
        );

        chart2.render();
        var options3 = {
            chart: {
              type: 'bar',
              height: 350,
              width: '100%',
              stacked: true,
              foreColor: '#999'
            },
            plotOptions: {
              bar: {
                dataLabels: {
                  enabled: false
                },
                columnWidth: '75%',
                endingShape: 'rounded'
              }
            },
            colors: ["#00C5A4", '#F3F2FC'],
            series: [{
              name: "Sessions",
              data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23],
            }, {
              name: "Views",
              data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23],
            }],
            labels: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
            xaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                show: false
              },
              labels: {
                show: false,
                style: {
                  fontSize: '14px'
                }
              },
            },
            grid: {
              xaxis: {
                lines: {
                  show: false
                },
              },
              yaxis: {
                lines: {
                  show: false
                },
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              labels: {
                show: false
              },
            },
            legend: {
              floating: true,
              position: 'top',
              horizontalAlign: 'right',
              offsetY: -36
            },
            title: {
              text: 'Web Statistics',
              align: 'left',
            },
            subtitle: {
              text: 'Sessions and Views'
            },
            tooltip: {
              shared: true
            }
          
          }
          
          var chart3 = new ApexCharts(document.querySelector('#apex-3'), options3);
          chart3.render();

          var colors4 = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
          var options4 = {
              chart: {
                  height: 350,
                  type: 'bar',
                  events: {
                      click: function(chart, w, e) {
                          console.log(chart, w, e )
                      }
                  },
              },
              colors: colors4,
              plotOptions: {
                  bar: {
                      columnWidth: '45%',
                      distributed: true
                  }
              },
              dataLabels: {
                  enabled: false,
              },
              series: [{
                  data: [21, 22, 10, 28, 16, 21, 13, 30]
              }],
              xaxis: {
                  categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
                  labels: {
                      style: {
                          colors: colors4,
                          fontSize: '14px'
                      }
                  }
              }
          }
  
          var chart4 = new ApexCharts(
              document.querySelector("#apex-4"),
              options4
          );
  
          chart4.render();

          var options5 = {
            chart: {
              height: 350,
              type: 'line',
            },
            series: [{
              name: 'Website Blog',
              type: 'column',
              data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
              name: 'Social Media',
              type: 'line',
              data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }],
            stroke: {
              width: [0, 4]
            },
            title: {
              text: 'Traffic Sources'
            },
            // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            xaxis: {
              type: 'datetime'
            },
            yaxis: [{
              title: {
                text: 'Website Blog',
              },
      
            }, {
              opposite: true,
              title: {
                text: 'Social Media'
              }
            }]
      
          }
      
          var chart5 = new ApexCharts(
            document.querySelector("#apex-5"),
            options5
          );
      
          chart5.render();

          var options6 = {
            chart: {
              height: 350,
              type: 'area',
              stacked: true,
              events: {
                selection: function(chart, e) {
                  console.log(new Date(e.xaxis.min) )
                }
              },
      
            },
            colors: ['#008FFB', '#00E396', '#CED4DC'],
            dataLabels: {
                enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
      
            series: [{
                name: 'South',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                  min: 10,
                  max: 60
                })
              },
              {
                name: 'North',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                  min: 10,
                  max: 20
                })
              },
              
              {
                name: 'Central',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                  min: 10,
                  max: 15
                })
              }
            ],
            fill: {
              type: 'gradient',
              gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
              }
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left'
            },
            xaxis: {
              type: 'datetime'
            },
          }
      
          var chart6 = new ApexCharts(
            document.querySelector("#apex-6"),
            options6
          );
      
          chart6.render();
      
          /*
            // this function will generate output in this format
            // data = [
                [timestamp, 23],
                [timestamp, 33],
                [timestamp, 12]
                ...
            ]
            */
          function generateDayWiseTimeSeries(baseval, count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
              var x = baseval;
              var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      
              series.push([x, y]);
              baseval += 86400000;
              i++;
            }
            return series;
          }
      
        
          var options7 = {
            chart: {
                height: 350,
                type: 'bar',
                stacked: true,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
                
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            series: [{
                name: 'Marine Sprite',
                data: [44, 55, 41, 37, 22, 43, 21]
            },{
                name: 'Striking Calf',
                data: [53, 32, 33, 52, 13, 43, 32]
            },{
                name: 'Tank Picture',
                data: [12, 17, 11, 9, 15, 11, 20]
            },{
                name: 'Bucket Slope',
                data: [9, 7, 5, 8, 6, 9, 4]
            },{
                name: 'Reborn Kid',
                data: [25, 12, 19, 32, 25, 24, 10]
            }],
            title: {
                text: 'Fiction Books Sales'
            },
            xaxis: {
                categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                labels: {
                    formatter: function(val) {
                        return val + "K"
                    }
                }
            },
            yaxis: {
                title: {
                    text: undefined
                },
                
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                    return val + "K"
                }
                }
            },
            fill: {
                opacity: 1
                
            },
            
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
            }
        }

       var chart7 = new ApexCharts(
            document.querySelector("#apex-7"),
            options7
        );
        
        chart7.render();
    
        var options8 = {
          chart: {
            height: 350,
            type: 'line',
          },
        
           
          series: [{
            name: 'Points',
            type: 'scatter',
    
            //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
            data: [{
              x: 1,
              y: 2.14
            }, {
              x: 1.2,
              y: 2.19
            }, {
              x: 1.8,
              y: 2.43
            }, {
              x: 2.3,
              y: 3.8
            }, {
              x: 2.6,
              y: 4.14
            }, {
              x: 2.9,
              y: 5.4
            }, {
              x: 3.2,
              y: 5.8
            }, {
              x: 3.8,
              y: 6.04
            }, {
              x: 4.55,
              y: 6.77
            }, {
              x: 4.9,
              y: 8.1
            }, {
              x: 5.1,
              y: 9.4
            }, {
              x: 7.1,
              y: 7.14
            },{
              x: 9.18,
              y: 8.4
            }]
          }, {
            name: 'Line',
            type: 'line',
            data: [{
              x: 1,
              y: 2
            }, {
              x: 2,
              y: 3
            }, {
              x: 3,
              y: 4
            }, {
              x: 4,
              y: 5
            }, {
              x: 5,
              y: 6
            }, {
              x: 6,
              y: 7
            }, {
              x: 7,
              y: 8
            }, {
              x: 8,
              y: 9
            }, {
              x: 9,
              y: 10
            }, {
              x: 10,
              y: 11
            }]
          }],
          fill: {
            type:'solid',
          },
          markers: {
            size: [6, 0]
          },
          tooltip: {
            shared: false,
            intersect: true,
          },
          legend: {
            show: false
          },
          xaxis: {
            type: 'numeric',
            min: 0,
            max: 12,
            tickAmount: 12
          }
        }
    
        var chart8 = new ApexCharts(
          document.querySelector("#apex-8"),
          options8
        );
    
        chart8.render();

      var options9 = {
        chart: {
          height:350,
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 50
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

   var chart9 = new ApexCharts(
        document.querySelector("#apex-9"),
        options9
    );
    
    chart9.render();

    var options10 = {
      chart: {
          height: 350,
          type: 'radialBar',
      },
      plotOptions: {
          radialBar: {
              dataLabels: {
                  name: {
                      fontSize: '22px',
                  },
                  value: {
                      fontSize: '16px',
                  },
                  total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                          return 249
                      }
                  }
              }
          }
      },
      series: [44, 55, 67, 83],
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      
  }

 var chart10 = new ApexCharts(
      document.querySelector("#apex-10"),
      options10
  );
  
  chart10.render();

  var options11 = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '70%',
          image: '../../assets/img/fitness/water.svg',
          imageWidth: 64,
          imageHeight: 64,
          imageClipped: false
        },
        dataLabels: {
          name: {
            show: false,
            color: '#fff'
          },
          value: {
            show: true,
            color: '#333',
            offsetY: 70,
            fontSize: '22px'
            
          }
        }
      }
    },
    fill: {
        type: 'image',
        image: {
            src: ['../../assets/img/landscape/1.jpg'],
        }
    },
    series: [67],
    stroke: {
      lineCap: 'round'
    },
    labels: ['Volatility'],
    
}

var chart11 = new ApexCharts(
    document.querySelector("#apex-11"),
    options11
);

chart11.render();

var options12 = {
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
       hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  series: [75],
  stroke: {
    lineCap: 'round'
  },
  labels: ['Percent'],

}

var chart12 = new ApexCharts(
  document.querySelector("#apex-12"),
  options12
);

chart12.render();

var options13 = {
  chart: {
      height: 350,
      type: 'radar',
  },
  series: [{
      name: 'Series 1',
      data: [20, 100, 40, 30, 50, 80, 33],
  }],
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  plotOptions: {
      radar: {
          size: 140,
          polygons: {
              strokeColor: '#e9e9e9',
              fill: {
                  colors: ['#f8f8f8', '#fff']
              }
          }
      }
  },
  title: {
      text: 'Radar with Polygon Fill'
  },
  colors: ['#FF4560'],
  markers: {
      size: 4,
      colors: ['#fff'],
      strokeColor: '#FF4560',
      strokeWidth: 2,
  },
  tooltip: {
      y: {
          formatter: function(val) {
              return val
          }   
      }
  },
  yaxis: {
      tickAmount: 7,
      labels: {
          formatter: function(val, i) {
              if(i % 2 === 0) {
                  return val
              } else {
                  return ''
              }
          }
      }
  }
}

var chart13 = new ApexCharts(
  document.querySelector("#apex-13"),
  options13
);

chart13.render();


var options14 = {
  chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
      }
  },
  series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
  }, {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80],
  }, {
      name: 'Series 3',
      data: [44, 76, 78, 13, 43, 10],
  }],
  title: {
      text: 'Radar Chart - Multi Series'
  },
  stroke: {
      width: 0
  },
  fill: {
      opacity: 0.4
  },
  markers: {
      size: 0
  },
  labels: ['2011', '2012', '2013', '2014', '2015', '2016']
}

var chart14 = new ApexCharts(
  document.querySelector("#apex-14"),
  options14
);

chart14.render();

function update() {

  function randomSeries() {
      var arr = []
      for(var i = 0; i < 6; i++) {
          arr.push(Math.floor(Math.random() * 100)) 
      }

      return arr
  }
  

  chart.updateSeries([{
      name: 'Series 1',
      data: randomSeries(),
  }, {
      name: 'Series 2',
      data: randomSeries(),
  }, {
      name: 'Series 3',
      data: randomSeries(),
  }])
}


 /*
        // this function will generate output in this format
        // data = [
            [timestamp, 23],
            [timestamp, 33],
            [timestamp, 12]
            ...
        ]
        */
       function generateData(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }


    var options15 = {
        chart: {
            height: 350,
            type: 'bubble',
        },
        dataLabels: {
            enabled: false
        },
        series: [{
                name: 'Bubble1',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'Bubble2',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'Bubble3',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'Bubble4',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            }
        ],
        fill: {
            opacity: 0.8
        },
        title: {
            text: 'Simple Bubble Chart'
        },
        xaxis: {
            tickAmount: 12,
            type: 'category',
        },
        yaxis: {
            max: 70
        }
    }

    var chart15 = new ApexCharts(
        document.querySelector("#apex-15"),
        options15
    );

    chart15.render();
