// -------------------------------------------------------------   Centered
// Navigation -------------------------------------------------------------
$(document)
  .ready(function () {
    setTimeout(function () {
      var $frame = $('#forcecentered');
      var $wrap = $frame.parent();

      // Call Sly on frame
      $frame.sly({
        horizontal: 1,
        itemNav: 'centered',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 4,
        //scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        // Buttons
        prev: $wrap.find('.prev'),
        next: $wrap.find('.nextbtn'),
        // Cycling
        cycleBy: 'items',
        cycleInterval: 2000,
        pauseOnHover: 1
      });
      
    }(),100);
  });

//var allTicketsChart = echarts.init(document.getElementById('all-tickets-chart'));
var crt1Chart = echarts.init(document.getElementById('crt1-chart'));
var crt2Chart = echarts.init(document.getElementById('crt2-chart'));
var highlightChart = echarts.init(document.getElementById('highlight-chart'));
var socialChart = echarts.init(document.getElementById('social-chart'));
//var ticketsChart = echarts.init(document.getElementById('tickets-chart'));
/* allTicketsChart.setOption({
  title: {
    "text": 'Sales',
    subtext: "$ 4280",
    "x": '48%',
    "y": '55%',
    textAlign: "center",
    "textStyle": {
      "fontSize": 14
    },
    "subtextStyle": {

      "fontWeight": 'bold',
      "fontSize": 22
    }
  },
  textStyle: {
    fontFamily: 'Poppins',
    fontWeight: '300'
  },
  //color:["#70ffac","#00a2ff"],
  xAxis: {
    data: [],
    type: 'value',
    show: false,
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    show: false,
    axisTick: {
      show: false
    }
  },
  legend: {
    show: false,
    data: ['Sold', 'Remain']
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '90%',
    top: '0',
    containLabel: false
  },
  series: [
    {
      type: 'bar',
      name: 'Sold',
      data: [40],
      color: ["#00a2ff"],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 0, 5, 0]
        }
      },

      stack: 'income',
      barWidth: 5,
      label: {
        normal: {
          show: false,
          position: 'inside',
          formatter: function (obj) {
            return obj.value + '%';
          }
        }
      }
    }, {
      type: 'bar',
      name: 'Remain',
      color: ["#70ffac"],
      data: [60],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 0, 5, 0]
        }
      },
      stack: 'income',
      barWidth: 30,
      label: {
        normal: {
          show: false,
          position: 'inside',
          formatter: function (obj) {
            return obj.value + '%';
          }
        }
      }
    }, {
      "name": ' ',
      "type": 'pie',
      "radius": [
        '100%', '70%'
      ],
      center: [
        '50%', '75%'
      ],
      "avoidLabelOverlap": true,
      "startAngle": -90,
      "itemStyle": {
        "normal": {
          "color": new echarts
            .graphic
            .LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#70ffac'
              }, {
                offset: 1,
                color: '#00a2ff'
              }
            ]),
          "borderColor": new echarts
            .graphic
            .LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#ddd'
              }, {
                offset: 1,
                color: '#ccc'
              }
            ]),
          "borderWidth": 10
        }
      },
      "hoverAnimation": false,
      "legendHoverLink": false,
      "label": {
        "normal": {
          "show": false,
          "position": 'center'
        }
      },
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "data": [
        {
          "value": 25,
          "name": '1'
        }, {
          "value": 55,
          "name": '2'
        }
      ]
    }, {
      "name": '1',
      "type": 'pie',
      "radius": [
        '100%', '10%'
      ],
      center: [
        '50%', '75%'
      ],
      "avoidLabelOverlap": true,
      "startAngle": 90,
      "color": ["transparent"],
      "hoverAnimation": false,
      "legendHoverLink": false,
      "label": {
        "normal": {
          "show": false,
          "position": 'center'
        }
      },
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "data": [
        {
          "value": 25,
          "name": '1'
        }, {
          "value": 55,
          "name": '2'
        }
      ]
    }, {
      "name": '',
      "type": 'pie',
      "radius": [
        '50%', '50%'
      ],
      "avoidLabelOverlap": false,
      "startAngle": 0,
      "color": [
        "#fff", "transparent"
      ],
      "hoverAnimation": false,
      "legendHoverLink": false,
      "clockwise": false,
      "itemStyle": {
        "normal": {
          "borderColor": "transparent",
          "borderWidth": "20"
        }
      },
      "z": 10,
      "label": {
        "normal": {
          "show": false,
          "position": 'center'
        }
      },
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "data": [
        {
          // "value": (100 - value1) * 266 / 360,
          "name": ''
        }, {
          // "value": 100 - (100 - value1) * 266 / 360,
          "name": ''
        }
      ]
    }
  ]
});
 */
crt1Chart.setOption({
  title: {
    text: '31%',
    x: 'center',
    y: '55',
    textStyle: {
      color: "#616161",
      fontSize: 40
    }
  },
  textStyle: {
    fontFamily: 'Poppins',
    fontWeight: '500'
  },
  tooltip: {
    show: true,
    formatter: function () {
      return 'Ticket'
    }
  },
  series: [
    {
      name: 'CTR-1',
      type: 'pie',
      clockWise: true,
      hoverAnimation: false,
      radius: [
        60, 60
      ],
      center: [
        '50%', '50%'
      ],
      startAngle: -50,
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          barBorderRadius: 10
        }
      },
      data: [
        {
          value: 69,
          itemStyle: {
            normal: {
              borderWidth: 10,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#ebf4f7'
                  }, {
                    offset: 1,
                    color: '#ebf4f9'
                  }
                ],
                globalCoord: false
              }
            }
          }
        }, {
          value: 31,
          name: 'CTR-2',
          itemStyle: {
            normal: {
              borderWidth: 10,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#21a5de'
                  }, {
                    offset: 1,
                    color: '#27cbd3'
                  }
                ],
                globalCoord: false
              }
            }
          }
        }
      ]
    }
  ]
});

crt2Chart.setOption({
  title: {
    text: '54%',
    x: 'center',
    y: '55',
    textStyle: {
      color: "#616161",
      fontSize: 40
    }
  },
  textStyle: {
    fontFamily: 'Poppins',
    fontWeight: '500'
  },
  tooltip: {
    show: true,
    formatter: function () {
      return 'Ticket'
    }
  },
  series: [
    {
      name: 'CTR-1',
      type: 'pie',
      clockWise: true,
      hoverAnimation: false,
      radius: [
        60, 60
      ],
      center: [
        '50%', '50%'
      ],
      startAngle: -50,
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          barBorderRadius: 10
        }
      },
      data: [
        {
          value: 49,
          itemStyle: {
            normal: {
              borderWidth: 10,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#ebf4f7'
                  }, {
                    offset: 1,
                    color: '#ebf4f9'
                  }
                ],
                globalCoord: false
              }
            }
          }
        }, {
          value: 54,
          name: 'CTR-2',
          itemStyle: {
            normal: {
              borderWidth: 10,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#21a5de'
                  }, {
                    offset: 1,
                    color: '#27cbd3'
                  }
                ],
                globalCoord: false
              }
            }
          }
        }
      ]
    }
  ]
});

highlightChart.setOption({
  color:["#0cf1d9","#098dff"],
  title: {
      text:'Total Sales',
    subtext: '',
    show: true,
right:0,
    textStyle: {
      color: '#403F4C',
      
    },
  },
  textStyle: {
    fontFamily: 'Poppins',
    
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    show: true,
    data: [
      {
        name: "Festival",
        icon: 'circle',
      }, {
        name: "Entertainment",
        icon: 'circle'
      }
    ],
    left: '0',
    top:15,
    orient: 'horizontal'
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: [
        "1:00 pm",
        "4:00 pm",
        "7:00 pm",
        "10:00 pm",
        "1:00 am",
        "4:00 am",
        "7:00 am",
        "10:00 am"
      ],
      axisLabel: {
        show: true
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      axisLabel: {
        show: true
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  ],
  grid: {
    show: false,
    containLabel: true,
    left: '10',
    right: '30',
    top: '60',
    bottom: '0',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
  },
  series: [
    {
      name: 'Festival',
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          "areaStyle": {
            "opacity": 1,
            "color": "#0cf1d9"
          },
          "lineStyle": {
            "opacity": 0
          }
        }
      },
      data: [
        5,
        15,
        10,
        25,
        60,
        35,
        45,
        30
      ],
      showSymbol: false
    }, {
      name: 'Entertainment',
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          "areaStyle": {
            "opacity": 1,
            "color": "#098dff"
          },
          "lineStyle": {
            "opacity": 0
          }
        }
      },
      data: [
        0,
        10,
        9,
        50,
        30,
        55,
        30,
        30
      ],
      showSymbol: false
    }
  ]
});

socialChart.setOption({
  color:["rgba(9,141,255,0.5)","#098dff"],
  title: {
    subtext: '',
    show: true,
    textStyle: {
      color: '#403F4C'
    },
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  textStyle: {
    fontFamily: 'Poppins',
    fontWeight: '500'
  },
  legend: {
    show: true,
    data: [
      {
        name: "Festival",
        icon: 'roundRect',
      }, {
        name: "Entertainment",
        icon: 'roundRect'
      }
    ],
    left: '0',
    orient: 'horizontal'
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: [
        "1",
        "4",
        "7",
        "10",
        "13",
        "16",
        "19",
        "22",
        "25",
        "27"
      ],
      axisLabel: {
        show: true
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  ],
  grid: {
    show: false,
    containLabel: true,
    left: '0',
    right: '20',
    top: '50',
    bottom: '0',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
  },
  series: [
    {
      name: 'Festival',
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          "areaStyle": {
            "opacity": 0.5,
            "color": "#098dff"
          },
          "lineStyle": {
            "opacity": 0
          }
        }
      },
      data: [
        5,
        0,
        10,
        0,
        20,
        0,
        25,
        0,
        30,
        0
      ],
      showSymbol: false
    }, {
      name: 'Entertainment',
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          "areaStyle": {
            "opacity": 1,
            "color": "#098dff"
          },
          "lineStyle": {
            "opacity": 0
          }
        }
      },
      data: [
        0,
        20,
        0,
        30,
        0,
        40,
        0,
        45,
        0,
        20
      ],
      showSymbol: false
    }
  ]
});

/* ticketsChart.setOption({
  title: {
    "text": 'Sales',
    subtext: "$ 963",
    "x": '48%',
    "y": '55%',
    textAlign: "center",
    "textStyle": {
      "fontSize": 14
    },
    "subtextStyle": {

      "fontWeight": 'bold',
      "fontSize": 22
    }
  },
  textStyle: {
    fontFamily: 'Poppins',
    fontWeight: '500'
  },
  //color:["#70ffac","#00a2ff"],
  xAxis: {
    data: [],
    type: 'value',
    show: false,
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    show: false,
    axisTick: {
      show: false
    }
  },
  legend: {
    show: false,
    data: ['Sold', 'Remain']
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '90%',
    top: '0',
    containLabel: false
  },
  series: [
    {
      type: 'bar',
      name: 'Sold',
      data: [70],
      color: ["#00a2ff"],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 0, 5, 0]
        }
      },

      stack: 'income',
      barWidth: 5,
      label: {
        normal: {
          show: false,
          position: 'inside',
          formatter: function (obj) {
            return obj.value + '%';
          }
        }
      }
    }, {
      type: 'bar',
      name: 'Remain',
      data: [30],
      color: ["#70ffac"],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 0, 5, 0]
        }
      },
      stack: 'income',
      barWidth: 30,
      label: {
        normal: {
          show: false,
          position: 'inside',
          formatter: function (obj) {
            return obj.value + '%';
          }
        }
      }
    }, {
      "name": ' ',
      "type": 'pie',
      "radius": [
        '100%', '70%'
      ],
      center: [
        '50%', '75%'
      ],
      "avoidLabelOverlap": true,
      "startAngle": -90,
      "itemStyle": {
        "normal": {
          "color": new echarts
            .graphic
            .LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#70ffac'
              }, {
                offset: 1,
                color: '#00a2ff'
              }
            ]),
          "borderColor": new echarts
            .graphic
            .LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#ddd'
              }, {
                offset: 1,
                color: '#ccc'
              }
            ]),
          "borderWidth": 10
        }
      },
      "hoverAnimation": false,
      "legendHoverLink": false,
      "label": {
        "normal": {
          "show": false,
          "position": 'center'
        }
      },
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "data": [
        {
          "value": 45,
          "name": '1'
        }, {
          "value": 25,
          "name": '2'
        }
      ]
    }, {
      "name": '1',
      "type": 'pie',
      "radius": [
        '100%', '10%'
      ],
      center: [
        '50%', '75%'
      ],
      "avoidLabelOverlap": true,
      "startAngle": 90,
      "color": ["transparent"],
      "hoverAnimation": false,
      "legendHoverLink": false,
      "label": {
        "normal": {
          "show": false,
          "position": 'center'
        }
      },
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "data": [
        {
          "value": 25,
          "name": '1'
        }, {
          "value": 55,
          "name": '2'
        }
      ]
    }, {
      "name": '',
      "type": 'pie',
      "radius": [
        '50%', '50%'
      ],
      "avoidLabelOverlap": false,
      "startAngle": 0,
      "color": [
        "#fff", "transparent"
      ],
      "hoverAnimation": false,
      "legendHoverLink": false,
      "clockwise": false,
      "itemStyle": {
        "normal": {
          "borderColor": "transparent",
          "borderWidth": "20"
        }
      },
      "z": 10,
      "label": {
        "normal": {
          "show": false,
          "position": 'center'
        }
      },
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "data": [
        {
          // "value": (100 - value1) * 266 / 360,
          "name": ''
        }, {
          // "value": 100 - (100 - value1) * 266 / 360,
          "name": ''
        }
      ]
    }
  ]
}); */

$("#past24").on("click", function () {
  highlightChart.setOption({
    title: {
      subtext: 'Past 24 Days',
      top:0,
      right:0
    },
    series: [
      {
        data: [
          5,
          15,
          10,
          25,
          60,
          35,
          45,
          30
        ]
      }, {

        data: [
          0,
          10,
          9,
          50,
          30,
          55,
          30,
          30
        ]

      }
    ]
  });
});
$("#past7").on("click", function () {
  highlightChart.setOption({
    title: {
      subtext: 'Past 7 Days',
      top:0,
      right:0
    },
    series: [
      {
        data: [
          15,
          45,
          30,
          15,
          80,
          45,
          35,
          50
        ]
      }, {

        data: [
          5,
          10,
          29,
          70,
          30,
          25,
          60,
          40
        ]

      }
    ]
  })
});
$("#past30").on("click", function () {
  highlightChart.setOption({
    title: {
      subtext: 'Past 30 Days',
      top:0,
      right:0
    },
    series: [
      {
        data: [
          55,
          35,
          80,
          65,
          20,
          35,
          55,
          60
        ]
      }, {

        data: [
          75,
          60,
          29,
          80,
          60,
          25,
          20,
          10
        ]

      }
    ]
  })
});
$("#shares").on("click", function () {
  socialChart.setOption({
    title: {
      subtext: ''
    },
    series: [
      {

        data: [
          5,
          0,
          10,
          0,
          20,
          0,
          25,
          0,
          30,
          0
        ]
      }, {

        data: [
          0,
          20,
          0,
          30,
          0,
          40,
          0,
          45,
          0,
          20
        ]
      }
    ]
  });
});

$("#followers").on("click", function () {
  socialChart.setOption({
    title: {
      subtext: ''
    },
    series: [
      {

        data: [
          15,
          5,
          20,
          10,
          30,
          20,
          45,
          10,
          30,
          10
        ]
      }, {

        data: [
          20,
          10,
          30,
          20,
          30,
          40,
          10,
          25,
          40,
          30
        ]
      }
    ]
  })
});

$("#ctr").on("click", function () {
  socialChart.setOption({
    title: {
      subtext: ''
    },
    series: [
      {

        data: [
          35,
          20,
          0,
          30,
          10,
          30,
          15,
          20,
          10,
          40
        ]
      }, {

        data: [
          0,
          30,
          0,
          40,
          0,
          50,
          0,
          55,
          0,
          40
        ]
      }
    ]
  });
});