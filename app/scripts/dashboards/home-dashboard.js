var homeChart1 = echarts.init(document.getElementById("home-chart1"));
var homeChart2 = echarts.init(document.getElementById("home-chart2"));
var homeChart3 = echarts.init(document.getElementById("home-chart3"));
var homeChart4 = echarts.init(document.getElementById("home-chart4"));
var homeChart5 = echarts.init(document.getElementById("home-chart5"));
var homeChart6 = echarts.init(document.getElementById("home-chart6"));
var mapLineColor;
var numberColor;
if(localStorage.theme == "dark"){
  mapLineColor = "rgba(0,0,0,.3)";
  numberColor="#fff";
}
else{
  mapLineColor = "rgba(255,255,255,.3)";
  numberColor = "#000";
}

homeChart1.setOption({
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "5%",
    containLabel: false
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["1", "2", "3", "4", "5", "6"],
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      show: false
    }
  ],
  series: [
    {
      name: "BMI",
      type: "line",
      smooth: true,
      symbol: "circle",
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 2,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
            {
              offset: 0,
              color: "#0CCE6B"
            },
            {
              offset: 1,
              color: "#7768AE"
            }
          ])
        }
      },

      data: [4, 2, 3, 2, 2.4, 2]
    }
  ]
});
homeChart2.setOption({
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "5%",
    containLabel: false
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["1", "2", "3", "4", "5", "6"],
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      show: false
    }
  ],
  series: [
    {
      name: "BMI",
      type: "line",
      smooth: true,
      symbol: "circle",
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 2,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
            {
              offset: 0,
              color: "#9b89de"
            },
            {
              offset: 1,
              color: "#F9DD61"
            }
          ])
        }
      },

      data: [1, 3, 2, 3, 2, 3]
    }
  ]
});
homeChart3.setOption({
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "5%",
    containLabel: false
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["1", "2", "3", "4", "5", "6"],
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      show: false
    }
  ],
  series: [
    {
      name: "BMI",
      type: "line",
      smooth: true,
      symbol: "circle",
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 2,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
            {
              offset: 0,
              color: "#F9DD61"
            },
            {
              offset: 1,
              color: "#DA4768"
            }
          ])
        }
      },

      data: [5, 5.1, 2, 3, 2.4, 2]
    }
  ]
});
var Country1 = [100, 150, "Australia"];
var Country2 = [80, 150, "China"];
var Country3 = [60, 150, "United States"];


var typeData = ["1,000,000", "675,000", "567,000"];
homeChart4.setOption({
  baseOption: {
    grid: [
      {
        left: "65%",
        right: "2%",
        bottom: "82%",
        top: "40%",
        containLabel: false
      },
      {
        left: "65%",
        right: "2%",
        bottom: "69%",
        top: "75%",
        containLabel: false
      },
      {
        left: "65%",
        right: "2%",
        bottom: "50%",
        top: "100%",
        containLabel: false
      }
    ],
    xAxis: [
      {
        type: "value",
        show: false,
        gridIndex: 0
      },
      {
        type: "value",
        show: false,
        gridIndex: 1
      },
      {
        type: "value",
        show: false,
        gridIndex: 2
      }
    ],
    yAxis: [
      {
        type: "category",
        show: false,
        position: "left",
        gridIndex: 0,
        data: [Country1[2]]
      },
      {
        type: "category",
        show: false,
        position: "left",
        gridIndex: 0,
        data: [Country1[2]]
      },
      {
        type: "category",
        show: false,
        position: "left",
        gridIndex: 1,
        data: [Country2[2]]
      },
      {
        type: "category",
        show: false,
        position: "left",
        gridIndex: 1,
        data: [Country2[2]]
      },
      {
        type: "category",
        show: false,
        position: "left",
        gridIndex: 2,
        data: [Country3[2]]
      },
      {
        type: "category",
        show: false,
        position: "left",
        gridIndex: 2,
        data: [Country3[2]]
      }
    ],
    graphic: [
      {
        type: "text",
        z: 100,
        top: "31%",
        left: "65%",
        style: {
          fill: "#8A8A8A",
          text: "Session",
          font: '1em "Quicksand", sans-serif'
        }
      },
      {
        type: "text",
        z: 100,
        top: "18%",
        left: "65%",
        style: {
          fill: "#8A8A8A",
          text: Country1[2], //Australia
          font: '1em "Quicksand", sans-serif'
        }
      },
      {
        type: "text",
        z: 100,
        top: "21%",
        left: "65%",
        style: {
          fill: "#000",
          font: '2em "Quicksand", sans-serif',
          text: typeData[0]
        }
      },
      {
        type: "text",
        z: 100,
        top: "55%",
        left: "65%",
        style: {
          fill: "#8A8A8A",
          text: "Session",
          font: '1em "Quicksand", sans-serif'
        }
      },
      {
        type: "text",
        z: 100,
        top: "42%",
        left: "65%",
        style: {
          fill: "#8A8A8A",
          text: Country2[2], //China
          font: '1em "Quicksand", sans-serif'
        }
      },
      {
        type: "text",
        z: 100,
        top: "45%",
        left: "65%",
        style: {
          fill: "#000",
          text: typeData[1],
          font: '2em "Quicksand", sans-serif'
        }
      },
      {
        type: "text",
        z: 100,
        top: "76%",
        left: "65%",
        style: {
          fill: "#8A8A8A",
          text: "Session",
          font: '1em "Quicksand", sans-serif'
        }
      },
      {
        type: "text",
        z: 100,
        top: "65%",
        left: "65%",
        style: {
          fill: "#8A8A8A",
          text: Country3[2], //United States
          font: '1em "Quicksand", sans-serif'
        }
      },
      {
        type: "text",
        z: 100,
        top: "68%",
        left: "65%",
        style: {
          fill: "#000",
          text: typeData[2],
          font: '2em "Quicksand", sans-serif'
        }
      }
    ],
    tooltip: {
      trigger: "item"
    },
    visualMap: {
      show: false,
      min: 0,
      max: 150,
      calculable: true,
      inRange: {
        //color: ['#F6DB5D', '#D53E60', '#9b89de'],
      }
    },
    geo: {
      show: false,
      map: "world",
      left: "-10%",
      right: "30%",
      zoom: "0.8",
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true
    },
    series: [
      {
        name: "World Statistic",
        type: "map",
        mapType: "world",
        left: "-10%",
        right: "30%",
        zoom: "0.8",
        roam: false,
        itemStyle: {
          normal: {
            areaColor: "#B5CBD8",
            borderColor: mapLineColor
          },
          emphasis: {
            areaColor: "#2B91B7",
            label: {
              show: false
            }
          }
        },
        data: [
          {
            name: "Australia",
            value: 0,
            itemStyle: {
              normal: {
                color: "#F6DB5D"
              }
            }
          },
          {
            name: "China",
            value: 75,
            itemStyle: {
              normal: {
                color: "#D53E60"
              }
            }
          },
          {
            name: "United States",
            value: 150,
            itemStyle: {
              normal: {
                color: "#9b89de"
              }
            }
          }
        ]
      },
      {
        name: "Top 5",
        type: "effectScatter",
        coordinateSystem: "geo",
        data: [
          {
            name: "Australia",
            value: [135, -27, 0],
            itemStyle: {
              normal: {
                color: "#D53E60"
              }
            }
          },
          {
            name: "China",
            value: [100, 35, 0],
            itemStyle: {
              normal: {
                color: "#F6DB5D"
              }
            }
          },
          {
            name: "United States of America",
            value: [-100, 40, 0],
            itemStyle: {
              normal: {
                color: "#F6DB5D"
              }
            }
          }
        ],
        symbolSize: function(val) {
          return 15;
        },
        showEffectOn: "render",

        rippleEffect: {
          period: 5,
          brushType: "fill",
          scale: 4
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: false
          }
        },
        zlevel: 1
      },
      {
        name: "C1",
        type: "bar",
        barWidth: 5,
        xAxisIndex: 0,
        yAxisIndex: 0,
        label: {
          normal: {
            show: true,
            formatter: "50%",
            color: "#8A8A8A",
            position: ["93%", "10"]
          }
        },
        itemStyle: {
          normal: {
            color: "#E7E7E7"
          }
        },
        data: [100]
      },
      {
        name: "C2",
        type: "bar",
        barWidth: 5,
        xAxisIndex: 0,
        yAxisIndex: 1,
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: "#9f8de0"
          }
        },
        data: [parseInt(Country1[0] / Country1[1] * 100)]
      },
      {
        name: "C3",
        type: "bar",
        barWidth: 5,
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
          normal: {
            show: true,
            formatter: "75%",
            color: "#8A8A8A",
            position: ["93%", "10"]
          }
        },
        itemStyle: {
          normal: {
            color: "#E7E7E7"
          }
        },
        data: [100]
      },
      {
        name: "C1",
        type: "bar",
        barWidth: 5,
        xAxisIndex: 1,
        yAxisIndex: 3,
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: "#F4D95A"
          }
        },
        data: [parseInt(Country2[0] / Country2[1] * 100)]
      },
      {
        name: "C2",
        type: "bar",
        barWidth: 5,
        xAxisIndex: 2,
        yAxisIndex: 4,
        label: {
          normal: {
            show: true,
            formatter: "47%",
            color: "#8A8A8A",
            position: ["93%", "10"]
          }
        },
        itemStyle: {
          normal: {
            color: "#E7E7E7"
          }
        },
        data: [100]
      },
      {
        name: "C3",
        type: "bar",
        barWidth: 5,
        xAxisIndex: 2,
        yAxisIndex: 5,
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: "#D63F61"
          }
        },
        data: [parseInt(Country3[0] / Country3[1] * 100)]
      }
    ]
  },
  media: [
    {
      query: {
        minAspectRatio: 1
      },
      option: {
        graphic: [
          {
            type: "text",
            z: 100,
            top: "31%",
            left: "65%",
            style: {
              fill: "#8A8A8A",
              text: "Session",
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "18%",
            left: "65%",
            style: {
              fill: "#8A8A8A",
              text: Country1[2], //Australia
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "21%",
            left: "65%",
            style: {
              fill: numberColor,
              font: '2em "Quicksand", sans-serif',
              text: typeData[0]
            }
          },
          {
            type: "text",
            z: 100,
            top: "55%",
            left: "65%",
            style: {
              fill: "#8A8A8A",
              text: "Session",
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "42%",
            left: "65%",
            style: {
              fill: "#8A8A8A",
              text: Country2[2], //China
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "45%",
            left: "65%",
            style: {
              fill: numberColor,
              text: typeData[1],
              font: '2em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "76%",
            left: "65%",
            style: {
              fill: "#8A8A8A",
              text: "Session",
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "65%",
            left: "65%",
            style: {
              fill: "#8A8A8A",
              text: Country3[2], //United States
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "68%",
            left: "65%",
            style: {
              fill: numberColor,
              text: typeData[2],
              font: '2em "Quicksand", sans-serif'
            }
          }
        ],
        grid: [
          {
            left: "65%",
            right: "2%",
            bottom: "82%",
            top: "40%",
            containLabel: false
          },
          {
            left: "65%",
            right: "2%",
            bottom: "69%",
            top: "75%",
            containLabel: false
          },
          {
            left: "65%",
            right: "2%",
            bottom: "50%",
            top: "100%",
            containLabel: false
          }
        ],
        geo: {
          show: false,
          map: "world",
          left: "-10%",
          right: "30%",
          zoom: "0.8",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true
        },
        series: [
          {
            name: "World Statistic",
            type: "map",
            mapType: "world",
            left: "-10%",
            right: "30%",
            zoom: "0.8",
            roam: false
          }
        ]
      }
    },
    {
      query: {
        maxWidth: 500
      },
      option: {
        graphic: [
          {
            type: "text",
            z: 100,
            top: "40%",
            left: "2%",
            style: {
              fill: "#8A8A8A",
              text: "Session",
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "28%",
            left: "2%",
            style: {
              fill: "#8A8A8A",
              text: Country1[2], //Australia
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "31%",
            left: "2%",
            style: {
              fill: "#000",
              font: '2em "Quicksand", sans-serif',
              text: typeData[0]
            }
          },
          {
            type: "text",
            z: 100,
            top: "64%",
            left: "2%",
            style: {
              fill: "#8A8A8A",
              text: "Session",
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "52%",
            left: "2%",
            style: {
              fill: "#8A8A8A",
              text: Country2[2], //China
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "55%",
            left: "2%",
            style: {
              fill: "#000",
              text: typeData[1],
              font: '2em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "86%",
            left: "2%",
            style: {
              fill: "#8A8A8A",
              text: "Session",
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "75%",
            left: "2%",
            style: {
              fill: "#8A8A8A",
              text: Country3[2], //United States
              font: '1em "Quicksand", sans-serif'
            }
          },
          {
            type: "text",
            z: 100,
            top: "78%",
            left: "2%",
            style: {
              fill: "#000",
              text: typeData[2],
              font: '2em "Quicksand", sans-serif'
            }
          }
        ],
        grid: [
          {
            left: "2%",
            right: "2%",
            bottom: "82%",
            top: "60%",
            containLabel: false
          },
          {
            left: "2%",
            right: "2%",
            bottom: "69%",
            top: "95%",
            containLabel: false
          },
          {
            left: "2%",
            right: "2%",
            bottom: "50%",
            top: "120%",
            containLabel: false
          }
        ],
        geo: {
          show: false,
          map: "world",
          left: "0%",
          top:0,
          right: "0%",
          zoom: "1",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true
        },
        series: [
          {
            name: "World Statistic",
            type: "map",
            mapType: "world",
            left: "0%",
            top:0,
            right: "0%",
            zoom: "1",
            roam: false
          }
        ]
      }
    }
  ]
});
var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 80; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}
homeChart5.setOption({
    color:['#7768AE','#0CCE6B'],
    grid: [
        {
          left: "0",
          right: "0",
          bottom: "0",
          top: "20%",
          containLabel: false
        },
    ],
    xAxis: {
        show:false,
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        show:false
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
});

homeChart6.setOption({
    series: [{
        type: 'pie',
        radius: [30, '55%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        color: ['#f2c955', '#00a69d', '#46d185', '#ec5845'],
        data: [{
            value: 7,
            name: 'Electricity'
        }, {
            value: 4,
            name: 'Gas'
        }, {
            value: 35,
            name: 'Water'
        }, {
            value: 53,
            name: 'Power'
        }],
        label: {
            normal: {
                textStyle: {
                    fontSize: 14
                },
                formatter: function(param) {
                    return param.name + ':\n' + Math.round(param.percent) + '%';
                }
            }
        },
        labelLine: {
            normal: {
                smooth: true,
                lineStyle: {
                    width: 2
                }
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 30,
                shadowColor: 'rgba(0, 0, 0, 0.4)'
            }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
            return Math.random() * 200;
        }
    }]
})