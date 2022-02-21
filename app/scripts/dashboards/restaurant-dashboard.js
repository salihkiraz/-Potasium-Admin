var restaurantChart1 = echarts.init(document.getElementById('restaurant-card-chart-1'));
var restaurantChart2 = echarts.init(document.getElementById('restaurant-card-chart-2'));
var restaurantChart3 = echarts.init(document.getElementById('restaurant-card-chart-3'));
var restaurantChart4 = echarts.init(document.getElementById('restaurant-card-chart-4'));
var thisMonthChart = echarts.init(document.getElementById('this-month-chart'));

restaurantChart1.setOption({
    xAxis: [
        {
            show: false,
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        }
    ],
    yAxis: {
        show: false,
        type: 'value'
    },
    grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        containLabel: false
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    series: [
        {
            name: 'Credit',
            type: 'bar',
            barWidth: 5,
            itemStyle: {
                normal: {
                    barBorderRadius: [
                        5, 5, 0, 0
                    ],
                    color: '#03a9f5'
                }
            },
            data: [120, 50, 60, 50, 15]
        }, {
            name: 'Cash',
            type: 'bar',
            barWidth: 5,
            itemStyle: {
                normal: {
                    barBorderRadius: [
                        5, 5, 0, 0
                    ],
                    color: '#e6e6e6'
                }
            },
            data: [66, 35, 58, 90, 40]
        }
    ]
});
restaurantChart2.setOption({
    title: {
        show: false,
        text: 'Website Views',
        subtext: '',
        textStyle: {
            color: '#ffd285'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: false,
        feature: {
            saveAsImage: {}
        }
    },

    xAxis: {
        show: false,
        type: 'category',
        boundaryGap: true,
        data: [
            '00:00',
            '00:30',
            '01:00',
            '01:30',
            '02:00',
            '02:30',
            '03:00'
        ]
    },
    yAxis: {
        show: false,
        type: 'value',
        axisLabel: {
            formatter: '{value} cal'
        }
    },
    grid: {
        show: false,
        containLabel: false,
        left: 0,
        right: '0',
        top: '0',
        bottom: '0'

    },
    series: [
        {
            name: 'Coffee',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [
                1400,
                6898,
                9800,
                3908,
                4800,
                3490,
                4300
            ],

            itemStyle: {
                normal: {
                    color: '#03a9f5'
                }
            },
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        }, {
            name: 'Tea',
            type: 'line',
            smooth: true,
            showSymbol: false,

            data: [
                8200,
                4600,
                3241,
                5874,
                1589,
                2584,
                6000
            ],

            itemStyle: {
                normal: {
                    color: '#4fd165 '
                }
            },
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        }
    ]
});
restaurantChart3.setOption({

    tooltip: {
        trigger: 'axis'
    },

    xAxis: {
        show: false,
        type: 'category',
        boundaryGap: true,
        data: [
            '00:00',
            '00:30',
            '01:00',
            '01:30',
            '02:00',
            '02:30',
            '03:00'
        ]
    },
    yAxis: {
        show: false,
        type: 'value',
        axisLabel: {
            formatter: '{value} cal'
        }
    },
    grid: {
        show: false,
        containLabel: false,
        left: 0,
        right: '0',
        top: '0',
        bottom: '0'

    },
    series: [
        {
            name: 'Hamburger',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [
                0,
                200,
                250,
                350,
                200,
                400,
                550
            ],

            itemStyle: {
                normal: {
                    color: '#dbefed'
                }
            },
            areaStyle: {
                normal: {
                    color: '#dbefed',
                    opacity: 1
                }
            },
            lineStyle: {
                normal: {
                    width: 0
                }
            }
        }, {
            name: 'Cheeseburger',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [
                0,
                100,
                0,
                200,
                50,
                370,
                500
            ],

            itemStyle: {
                normal: {
                    color: '#4fd165 '
                }
            },
            areaStyle: {
                normal: {
                    color: '#4fd165',
                    opacity: 1
                }
            },
            lineStyle: {
                normal: {
                    width: 0
                }
            }
        }
    ]
});
restaurantChart4.setOption({
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    grid: {
        top: 100,
        left: 100,
        bottom: 0,
        right: 0,
        containLabel: false
    },
    series: [
        {
            name: 'Monthly Feedback',
            type: 'pie',
            radius: '95%',
            hoverOffset:1,
            center: [
                '50%', '50%'
            ],
            clockwise: false,
            data: [
                {
                    value: 45,
                    name: 'Answer'
                }, {
                    value: 25,
                    name: 'No-Answer'
                }
            ],
            label: {

                normal: {
                    show: false,
                    textStyle: {
                        color: '#999',
                        fontSize: 14
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 1,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
    color: ['#ebeff2', '#4fd165']
});
thisMonthChart.setOption({
    grid: {
        top: '5%',
        left: '3%',
        bottom: '10%',
        right: '1%',
        containLabel: false
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: [
            'Oct 20',
            'Oct 27',
            'Nov 01',
            'Nov 15',
            'Nov 19',
            'Nov 21',
            'Nov 25',
            'Nov 29',
            'Nov 30',
            'Dec 05',
            'Dec 14',
            'Dec 17',
            'Dec 22'
        ]
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    textStyle:{
        fontFamily:'Poppins',
        fontWeight:'500'
    },
    series: [
        {
            type: 'line',
            smooth: true,
            //step:'end',
            data: [
                5,
                3.8,
                6.2,
                5.8,
                8.3,
                7.8,
                9.8,
                5.5,
                10.4,
                6.2,
                8.4,
                6.3,
                6.7,
                7.2,
                5.4,
                7,
                9
            ],
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: '#7d57ce',
                    width: 5,
                    shadowColor: 'rgba(0,0,0,0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                }
            },
            markPoint: {
                data: [
                    {
                        type: 'max',
                        label: {
                            normal: {
                                show: true,
                                formatter: ''
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ffc94c',
                                borderColor: 'rgba(255, 201, 76, 0.3)',
                                borderWidth: 12
                            }
                        },
                        symbol: 'circle',
                        symbolSize: 12
                    }
                ]
            }
        }
    ]
})
$(".to-users").on("click", function () {
    thisMonthChart.setOption({
        series: [
            {
                data: [
                    5,
                    3.8,
                    6.2,
                    5.8,
                    8.3,
                    7.8,
                    9.8,
                    5.5,
                    10.4,
                    6.2,
                    8.4,
                    6.3,
                    6.7,
                    7.2,
                    5.4,
                    7,
                    9
                ],
                lineStyle: {
                    normal: {
                        color: '#7d57ce'
                    }
                }
            }
        ]
    })
})
$(".to-earnings").on("click", function () {
    thisMonthChart.setOption({
        series: [
            {
                data: [
                    45,
                    38,
                    62,
                    58,
                    83,
                    78,
                    98,
                    55,
                    14,
                    62,
                    84,
                    63,
                    67,
                    72,
                    54,
                    73,
                    92
                ],
                lineStyle: {
                    normal: {
                        color: '#f46092'
                    }
                }
            }
        ]
    })
})
$(".to-orders").on("click", function () {
    thisMonthChart.setOption({
        series: [
            {
                data: [
                    500,
                    380,
                    262,
                    344,
                    123,
                    300,
                    246,
                    200.5,
                    100.4,
                    146.2,
                    283.4,
                    463.3,
                    236.7,
                    372.2,
                    155.4,
                    175,
                    299
                ],
                lineStyle: {
                    normal: {
                        color: '#02a2ec'
                    }
                }
            }
        ]
    })
})
$(".to-reviews").on("click", function () {
    thisMonthChart.setOption({
        series: [
            {
                data: [
                    10,
                    4,
                    6,
                    8,
                    12,
                    3,
                    9,
                    5,
                    11,
                    7,
                    13,
                    3,
                    7,
                    6,
                    5,
                    12,
                    3
                ],
                lineStyle: {
                    normal: {
                        color: '#17cedc'
                    }
                }
            }
        ]
    })
})
