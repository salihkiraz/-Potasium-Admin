var cardChart = echarts.init(document.getElementById('card-chart1'));

cardChart.setOption({
    grid: {
        left: '0',
        right: '0',
        top: '10%',
        bottom: '0',
        containLabel: false
    },
    textStyle: {
        fontSize: '14',
        fontWeight: 'normal',
        color: '#ffffff'
    },
    xAxis: {
        show: false,
        type: 'category',
        boundaryGap: true,
        data: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24
        ]
    },
    yAxis: {
        show: true,
        type: 'value',
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.06)'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            formatter: function (params) {
                if (params === 0) {
                    return ''
                } else {
                    return params
                }
            }
        }
    },
    series: [
        {
            name: 'Card Data',
            type: 'line',
            smooth: true,
            showSymbol: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: new echarts
                            .graphic
                            .LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0.5,
                                    color: '#fff'
                                }, {
                                    offset: 1,
                                    color: '#56D9FC'
                                }
                            ], false)
                    }
                }
            },
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(255, 225, 0, 0.2)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 225, 0, 0)'
                            }
                        ],
                        globalCoord: false
                    }
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
            },
            data: [
                1,
                4,
                3,
                7,
                8,
                12,
                6,
                10,
                14,
                2,
                5,
                4,
                5,
                7,
                2,
                3,
                4,
                6,
                3,
                7,
                9,
                5,
                3,
                8
            ]
        }
    ]
});

var cardChart2 = echarts.init(document.getElementById('card-chart2'));

cardChart2.setOption({
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
            name: 'Single',
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 7,
            data: [
                4850,
                1600,
                3200,
                6800,
                4500,
                5821,
                2200
            ],

            itemStyle: {
                normal: {
                    color: '#64ea91'
                }
            },
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        }, {
            name: 'Unique',
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 7,
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
                    color: '#f69899'
                }
            },
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        }, {
            name: 'Single',
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 7,
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
                    color: '#d897eb '
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

var cardChart3 = echarts.init(document.getElementById('card-chart3'));

cardChart3.setOption({
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
            '03:00',
            '03:30',
            '04:00',
            '04:30',
            '05:00',
            '05:30',
            '06:00',
            '06:30',
            '07:00',
            '07:30',
            '08:00'
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
        top: '5',
        bottom: '5'

    },
    series: [
        {
            name: 'Single',
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 7,
            data: [
                0,
                2000,
                1500,
                2500,
                2000,
                3000,
                2500,
                3500,
                3000,
                4000,
                3500,
                4500,
                4000,
                5000,
                4500,
                5500,
                6000
            ],
            areaStyle: {
                normal: {
                    color: '#FFEB3B',
                    opacity: '0.1'
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFEB3B'
                }
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            }
        }, {
            name: 'Unique',
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 7,
            data: [
                6000,
                5500,
                4500,
                5000,
                4000,
                4500,
                3500,
                4000,
                3000,
                3500,
                2500,
                3000,
                2000,
                2500,
                1500,
                2000,
                0
            ],
            areaStyle: {
                normal: {
                    color: '#FFEB3B',
                    opacity: '0.1'
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFEB3B'
                }
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            }
        }
    ]
});

var cardChart4 = echarts.init(document.getElementById('card-chart4'));

cardChart4.setOption({
    color: ['#FFEB3B'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // åæ ‡è½´æŒ‡ç¤ºå™¨ï¼Œåæ ‡è½´è§¦å‘æœ‰æ•ˆ
            type: 'shadow' // é»˜è®¤ä¸ºç›´çº¿ï¼Œå¯é€‰ä¸ºï¼š'line' | 'shadow'
        }
    },
    grid: {
        show: false,
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: false
    },
    xAxis: [
        {
            type: 'category',
            data: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }

        }
    ],
    yAxis: [
        {
            show: false,
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Sales',
            type: 'bar',
            barWidth: '80%',
            data: [
                10,
                22,
                20,
                16,
                10,
                15,
                18,
                5,
                24,
                11,
                7,
                16
            ]
        }
    ]
});

var cardChart5 = echarts.init(document.getElementById('card-chart5'));
var cardChart6 = echarts.init(document.getElementById('card-chart6'));
var cardChart7 = echarts.init(document.getElementById('card-chart7'));
var cardChart8 = echarts.init(document.getElementById('card-chart8'));

cardChart5.setOption({
    color: ['#FFEB3B'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        show: false,
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: false
    },
    xAxis: [
        {
            type: 'category',
            data: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }

        }
    ],
    yAxis: [
        {
            show: false,
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Steps',
            type: 'bar',
            barWidth: '80%',
            data: [
                100,
                220,
                200,
                160,
                100,
                150,
                180,
                50,
                240,
                110,
                70,
                160
            ]
        }
    ]
});

// Generate data
var category = [];
var dottedBase = +new Date();
var barData = [];

for (var i = 0; i < 20; i++) {
    var date = new Date(dottedBase += 3600 * 24 * 1000);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = Math.floor((Math.random() * 60) + 1);
    barData.push(b);
}
cardChart6.setOption({

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: false
    },
    legend: {
        data: [
            'Active', 'Rest'
        ],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        show: false,
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        show: false,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [
        {
            name: 'Active Minutes',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts
                        .graphic
                        .LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#64ea91'
                            }, {
                                offset: 0.5,
                                color: '#64ea91'
                            }
                        ])
                }
            },
            data: barData
        }
    ]
});

cardChart7.setOption({
    textStyle: {
        fontFamily: 'Poppins'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    legend: {
        x: 'center',
        y: 'bottom'
    },
    calculable: true,
    series: [
        {
            color: [
                '#FFEB3B', '#fff'
            ],
            type: 'pie',
            radius: [
                28, 58
            ],
            center: [
                '50%', '50%'
            ],
            roseType: 'radius',
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.8,
                    length: 5,
                    length2: 5
                }
            },
            data: [
                {
                    value: 38,
                    name: 'Running'
                }, {
                    value: 62,
                    name: 'Walking'
                }
            ]
        }
    ]
});

var lineData = [];

for (var i = 0; i < 24; i++) {

    var b = Math.floor((Math.random() * 24) + 1);
    lineData.push(b)
}
cardChart8.setOption({
    grid: {
        left: '0',
        right: '0',
        top: '50%',
        bottom: '0',
        containLabel: false
    },
    textStyle: {
        fontSize: '14',
        fontWeight: 'normal',
        color: '#ffffff'
    },
    xAxis: {
        show: false,
        type: 'category',
        boundaryGap: true,
        data: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24
        ]
    },
    yAxis: {
        show: true,
        type: 'value',
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.06)'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            formatter: function (params) {
                if (params === 0) {
                    return ''
                } else {
                    return params
                }
            }
        }
    },
    series: [
        {
            name: 'Card Data',
            type: 'line',
            smooth: true,
            showSymbol: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: new echarts
                            .graphic
                            .LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0.5,
                                    color: '#fff'
                                }, {
                                    offset: 1,
                                    color: '#56D9FC'
                                }
                            ], false)
                    }
                }
            },
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(255, 225, 0, 0.2)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 225, 0, 0)'
                            }
                        ],
                        globalCoord: false
                    }
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
            },
            data: lineData
        }
    ]
});
var cardChart9 = echarts.init(document.getElementById('calories-chart-1'));
var cardChart10 = echarts.init(document.getElementById('calories-chart-2'));

cardChart9.setOption({
    backgroundColor: '#727CD2',
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '700'
    },
    title: [
        {
            text: '231',
            textStyle: {

                fontSize: '180',
                color: '#fff'
            },
            left: 'center',
            top: '0',
            z: 1
        }, {
            text: 'Kcal',
            textStyle: {
                fontSize: '50',
                color: '#474448'
            },
            left: 'center',
            top: '45%',
            z: 1
        }
    ],

    grid: {
        left: '0',
        right: '0',
        bottom: '0%',
        top: '50%',
        containLabel: false
    },
    xAxis: [
        {
            show: true,
            type: 'category',
            boundaryGap: false,
            scale: true,
            z: 2,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                onZero: true
            },
            axisLabel: {
                color: '#A0A7AD',
                fontSize: 20,
                inside: true
            },
            data: [
                '',
                'Mo',
                'Tu',
                'We',
                'Th',
                'Fr',
                'Sa',
                'Su',
                ''
            ]
        }
    ],
    yAxis: [
        {
            show: false,
            type: 'value',
            name: '单位（%）',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }
    ],
    series: [
        {
            name: 'Calories',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 3,
            showSymbol: true,
            lineStyle: {
                normal: {
                    color: '#fff',
                    width: 5
                }
            },
            areaStyle: {
                normal: {
                    color: '#3C47A1'
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#fff',
                    borderWidth: 12

                }
            },
            data: [
                {
                    name: '',
                    value: 18,
                    symbolSize: 0
                }, {
                    name: 'Mo',
                    value: 20
                }, {
                    name: 'Tu',
                    value: 30
                }, {
                    name: 'We',
                    value: 25
                }, {
                    name: 'Th',
                    value: 23
                }, {
                    name: 'Fr',
                    value: 30
                }, {
                    name: 'Sa',
                    value: 35
                }, {
                    name: 'Su',
                    value: 38
                }, {
                    name: '',
                    value: 37,
                    symbolSize: 0
                }
            ],
            markArea: {
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0.4,
                                    color: '#727CD2' // color at 0% position
                                }, {
                                    offset: 1,
                                    color: '#fff' // color at 100% position
                                }
                            ],
                            globalCoord: false // false by default
                        }
                    },
                    emphasis: {
                        color: 'yellow'
                    }
                },

                data: [
                    [
                        {
                            xAxis: 3
                        }, {
                            xAxis: 5
                        }
                    ]
                ]
            }

        }
    ]
});
cardChart10.setOption({
    backgroundColor: '#00B5AD',
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '700'
    },
    title: [
        {
            text: '346',
            textStyle: {

                fontSize: '150',
                color: '#fff'
            },
            left: 'center',
            top: '0',
            z: 1
        }, {
            text: 'Kcal',
            textStyle: {
                fontSize: '50',
                color: '#fff'
            },
            left: 'center',
            top: '45%',
            z: 1
        }
    ],

    grid: {
        left: '0',
        right: '0',
        bottom: '0%',
        top: '50%',
        containLabel: false
    },
    xAxis: [
        {
            show: true,
            type: 'category',
            boundaryGap: false,
            scale: true,
            z: 2,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                onZero: true
            },
            axisLabel: {
                color: '#fff',
                fontSize: 20,
                inside: true
            },
            data: [
                '',
                'Mo',
                'Tu',
                'We',
                'Th',
                'Fr',
                'Sa',
                'Su',
                ''
            ]
        }
    ],
    yAxis: [
        {
            show: false,
            type: 'value',
            name: '单位（%）',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }
    ],
    series: [
        {
            name: 'Calories',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 1,
            showSymbol: true,
            lineStyle: {
                normal: {
                    color: '#fff',
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: '#00B5AD'
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#fff',
                    borderWidth: 12

                }
            },
            data: [
                {
                    name: '',
                    value: 18,
                    symbolSize: 0
                }, {
                    name: 'Mo',
                    value: 20
                }, {
                    name: 'Tu',
                    value: 30
                }, {
                    name: 'We',
                    value: 25
                }, {
                    name: 'Th',
                    value: 23
                }, {
                    name: 'Fr',
                    value: 30
                }, {
                    name: 'Sa',
                    value: 35
                }, {
                    name: 'Su',
                    value: 38
                }, {
                    name: '',
                    value: 37,
                    symbolSize: 0
                }
            ]
        }, {
            name: 'Calories',
            type: 'bar',
            smooth: true,
            symbol: 'circle',
            symbolSize: 3,
            showSymbol: true,
            lineStyle: {
                normal: {
                    color: '#fff',
                    width: 5
                }
            },
            areaStyle: {
                normal: {
                    color: '#00B5AD'
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.5)'
                }
            },
            data: [
                {
                    name: '',
                    value: '',
                    symbolSize: 0
                }, {
                    name: 'Mo',
                    value: 20
                }, {
                    name: 'Tu',
                    value: 30
                }, {
                    name: 'We',
                    value: 25
                }, {
                    name: 'Th',
                    value: 23
                }, {
                    name: 'Fr',
                    value: 30
                }, {
                    name: 'Sa',
                    value: 35
                }, {
                    name: 'Su',
                    value: 38
                }, {
                    name: '',
                    value: '',
                    symbolSize: 0
                }
            ]
        }
    ]
});
var allCharts = $('.dash-charts');
$(document).ready(function () {
    'use strict'
    setTimeout(function () {
        for (var i = 0; i < allCharts.length; i++) {
            var $item = $(allCharts[i]);
            echarts
                .getInstanceById($item.attr('_echarts_instance_'))
                .resize();
        }
    }, 100)
});

window.onresize = function () {
    'use strict'
    setTimeout(function () {
        for (var i = 0; i < allCharts.length; i++) {
            var $item = $(allCharts[i]);
            echarts
                .getInstanceById($item.attr('_echarts_instance_'))
                .resize();
        }
    }, 100)
};

$('#sidebarCollapse').on("click", function () {
    'use strict'
    setTimeout(function () {
        for (var i = 0; i < allCharts.length; i++) {
            var $item = $(allCharts[i]);
            echarts
                .getInstanceById($item.attr('_echarts_instance_'))
                .resize();
        }
    }, 100)
})