var revenueChart = echarts.init(document.getElementById('revenue-chart'));
var emailChart = echarts.init(document.getElementById('email-chart'));
var domainActivtyChart = echarts.init(document.getElementById('domain-chart'));
var categoryActivityChart = echarts.init(document.getElementById('category-chart'));
var analysticChart1 = echarts.init(document.getElementById('analystic-chart-1'));
var analysticChart2 = echarts.init(document.getElementById('analystic-chart-2'));
var analysticChart3 = echarts.init(document.getElementById('analystic-chart-3'));
var analysticChart4 = echarts.init(document.getElementById('analystic-chart-4'));
var experimentChart = echarts.init(document.getElementById('experiment-chart'));

revenueChart.setOption({
    backgroundColor: '#fff',
    title: {
        text: '$124.036.254',
        subtext: 'All Time',
        textStyle: {
            fontSize: '40',
            color: '#A0A7AD'
        },
        subtextStyle: {
            fontSize: '20',
            color: '#A0A7AD'
        },
        left: '1%',
        top: '20%'
    },
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '400'
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '35%',
        containLabel: false
    },
    xAxis: [
        {
            show: true,
            type: 'category',
            boundaryGap: false,
            z: 2,
            scale: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                onZero: false
            },
            axisLabel: {
                color: '#A0A7AD',
                fontSize: 20,
                inside: true
            },
            data: [
                ' ',
                'JAN',
                'FEB',
                'MAR',
                'APR',
                'MAY',
                'JUN',
                'JUL',
                ' '
            ]
        }
    ],
    yAxis: [
        {
            show: false,
            type: 'value',
            name: '',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eef4f7'
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
                    color: '#eef4f7'
                }
            }
        }
    ],
    series: [
        {
            name: '',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: new echarts
                        .graphic
                        .LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#754AC0'
                            }, {
                                offset: 0.8,
                                color: '#2BB5F6'
                            }
                        ], false),
                    width: 5,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                }
            },
            areaStyle: {
                normal: {
                    color: '#EEF4F7'
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
                220,
                220,
                205,
                300,
                250,
                320,
                300,
                330,
                305
            ]
        }
    ]
});
var data = [
    2.6,
    28.3,
    6.8,
    7.5,
    28.3,
    45.7
];
var xMax = 100;
var axisColor = '#fff';
domainActivtyChart.setOption({
    tooltip: {
        show: true,
        formatter: "{b} <br> {c}"

    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top: '5%',
        containLabel: false
    },
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '300'
    },
    xAxis: [
        {
            axisTick: {
                show: false,
                // color:'#fff',
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
                //color:'#fff',
            },
            splitLine: {
                show: false,
                // color:'#fff',
            }
        }
    ],
    yAxis: [
        {
            type: 'category',
            data: [
                'google.com',
                'amazonaws.com',
                'gmail.com',
                'google-analystic.com',
                'me.com',
                'bing.com'
            ],

            axisTick: {
                // color:'#fff',
                show: false
            },
            axisLine: {
                //  color:'#fff',
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }

        }
    ],
    series: [
        {
            name: ' ',
            type: 'bar',
            barWidth: 20,
            silent: true,
            itemStyle: {
                normal: {
                    color: '#eef4f7'
                }

            },
            barGap: '-100%',
            barCategoryGap: '50%',
            data: data.map(function (d) {
                return xMax;
            })
        }, {
            name: ' ',
            type: 'bar',
            barWidth: 20,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}',
                    color: '#899aac',
                    fontSize: '14',
                    position: 'right',
                    align: 'left'
                }
            },
            data: [
                {
                    value: 34,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#4988e5' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#6877f4' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }, {
                    value: 20,
                    itemStyle: {
                        // normal:{color:'#b250ff',barBorderRadius:[0,10,10,0],}
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#e48486' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#dc5c8d' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }, {
                    value: 10,
                    itemStyle: {
                        // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#4b88e3' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#6e77f0' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }, {
                    value: 8.7,
                    itemStyle: {
                        // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#86e1e2' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#48cecd' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }

                    }
                }, {

                    value: 5.7,
                    itemStyle: {
                        // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#f5b671' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#e39c40' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }, {

                    value: 5,
                    itemStyle: {
                        // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#e68388' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#d45c8a' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }
            ]
        }
    ]
});
categoryActivityChart.setOption({
    tooltip: {
        show: true,
        formatter: "{b} <br> {c}"

    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top: '5%',
        containLabel: false
    },
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '300'
    },
    xAxis: [
        {
            axisTick: {
                show: false,
                // color:'#fff',
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
                //color:'#fff',
            },
            splitLine: {
                show: false,
                // color:'#fff',
            }
        }
    ],
    yAxis: [
        {
            type: 'category',
            data: [
                'Businness (the website is for a business)',
                'Unreachable / Dead Sites',
                'Search Engines',
                'Uncategorized',
                'Internet / Net Services',
                'Computing,General'
            ],

            axisTick: {
                // color:'#fff',
                show: false
            },
            axisLine: {
                //  color:'#fff',
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }

        }
    ],
    series: [
        {
            name: ' ',
            type: 'bar',
            barWidth: 20,
            silent: true,
            itemStyle: {
                normal: {
                    color: '#eef4f7'
                }

            },
            barGap: '-100%',
            barCategoryGap: '50%',
            data: data.map(function (d) {
                return xMax;
            })
        }, {
            name: ' ',
            type: 'bar',
            barWidth: 20,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}',
                    color: '#899aac',
                    fontSize: '14',
                    position: 'right',
                    align: 'left'
                }
            },
            data: [
                {
                    value: 2.6,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#4988e5' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#6877f4' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }, {
                    value: 28.3,
                    itemStyle: {
                        // normal:{color:'#b250ff',barBorderRadius:[0,10,10,0],}
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#e48486' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#dc5c8d' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }, {
                    value: 6.8,
                    itemStyle: {
                        // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#4b88e3' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#6e77f0' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }, {
                    value: 7.5,
                    itemStyle: {
                        // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#86e1e2' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#48cecd' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }

                    }
                }, {

                    value: 28.3,
                    itemStyle: {
                        // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#f5b671' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#e39c40' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }, {

                    value: 45.7,
                    itemStyle: {
                        // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#e68388' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#d45c8a' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }
            ]
        }
    ]
});
emailChart.setOption({
    baseOption: {
        title: {
            text: '325,067',
            subtext: 'Total Email Sent',
            textStyle: {
                fontSize: 36,
                color: '#A0A7AD'
            },
            top: '20%',
            left: '2%'
        },
        textStyle: {
            fontFamily: 'Poppins',
            fontWeight: '400'
        },
        grid: {
            left: '0',
            right: '0',
            top: '10%',
            bottom: '0',
            containLabel: false
        },
        toolbox: {
            "show": false,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            show: false,
            type: 'category',
            boundaryGap: false,
            data: [
                'a',
                'b',
                'c',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12'
            ]
        },
        yAxis: {
            show: false,

            type: 'value'
        },
        series: [
            {
                name: '',
                smooth: true,
                type: 'line',
                symbolSize: 0,
                symbol: 'circle',
                data: [
                    50,
                    50,
                    50,
                    50,
                    10,
                    80,
                    50,
                    60,
                    20,
                    70,
                    50,
                    80,
                    50,
                    50,
                    50
                ],
                lineStyle: {
                    normal: {
                        color: new echarts
                            .graphic
                            .LinearGradient(0, 1, 1, 1, [
                                {
                                    offset: 0.5,
                                    color: '#a674ff'
                                }, {
                                    offset: 1,
                                    color: '#2BB5F6'
                                }
                            ], false),
                        width: 5,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetY: 5
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#EEF4F7'
                    }
                }
            }

        ]
    },
    media: [
        {
            query: {
                minAspectRatio: 1
            },
            option: {
                title: {
                    textStyle: {
                        fontSize: 36
                    }
                }
            }
        }, {
            query: {
                maxWidth: 500
            },
            option: {
                title: {
                    textStyle: {
                        fontSize: 16
                    }
                }
            }
        }
    ]
});

analysticChart1.setOption({
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '500'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        formatter: function (name) {
            return name + '%';
        },
        data: [
            {
                name: '500',
                icon: 'triangle'
            }
        ],
        left: 0,
        top: '30%',
        textStyle: {
            color: '#859cbb',
            fontSize: 20
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
            '04:00'
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
        left: '30%',
        right: '0',
        top: '20%',
        bottom: '10%'

    },
    series: [
        {
            name: '500',
            type: 'line',
            smooth: false,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 0,
            data: [
                0,
                10,
                0,
                30,
                0,
                0,
                20,
                15,
                25
            ],
            areaStyle: {
                normal: {
                    color: '#b4eff5',
                    opacity: '0.2'
                }
            },
            itemStyle: {
                normal: {
                    color: '#17cedc'
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
analysticChart2.setOption({
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '500'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        formatter: function (name) {
            return name + '%';
        },
        data: [
            {
                name: '700',
                icon: 'triangle'
            }
        ],
        left: 0,
        top: '30%',
        textStyle: {
            color: '#859cbb',
            fontSize: 20
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
            '04:00'
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
        left: '30%',
        right: '0',
        top: '20%',
        bottom: '10%'

    },
    series: [
        {
            name: '700',
            type: 'line',
            smooth: false,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 0,
            data: [
                0,
                10,
                5,
                10,
                7,
                30,
                25,
                27,
                30
            ],
            areaStyle: {
                normal: {
                    color: '#c9eafd',
                    opacity: '0.2'
                }
            },
            itemStyle: {
                normal: {
                    color: '#02a2ec'
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
analysticChart3.setOption({
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '500'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        formatter: function (name) {
            return name + '%';
        },
        data: [
            {
                name: '40',
                icon: 'triangle'
            }
        ],
        left: 0,
        top: '30%',
        textStyle: {
            color: '#859cbb',
            fontSize: 20
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
            '04:00'
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
        left: '30%',
        right: '0',
        top: '20%',
        bottom: '10%'

    },
    series: [
        {
            name: '40',
            type: 'line',
            smooth: false,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 0,
            data: [
                0,
                20,
                10,
                15,
                5,
                8,
                0,
                10,
                25
            ],
            areaStyle: {
                normal: {
                    color: '#f9dbe5',
                    opacity: '0.2'
                }
            },
            itemStyle: {
                normal: {
                    color: '#f46092'
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
analysticChart4.setOption({
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '500'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        formatter: function (name) {
            return name + '%';
        },
        data: [
            {
                name: '10',
                icon: 'triangle'
            }
        ],
        left: 0,
        top: '30%',
        textStyle: {
            color: '#859cbb',
            fontSize: 20
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
            '04:00'
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
        left: '30%',
        right: '0',
        top: '20%',
        bottom: '10%'

    },
    series: [
        {
            name: '10',
            type: 'line',
            smooth: false,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 0,
            data: [
                0,
                20,
                5,
                20,
                5,
                30,
                10,
                15,
                25
            ],
            areaStyle: {
                normal: {
                    color: '#d0c4f6',
                    opacity: '0.2'
                }
            },
            itemStyle: {
                normal: {
                    color: '#7d57ce'
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

var values = [
    {
        value: 70,
        itemStyle: {
            normal: {
                color: '#81c685',
                barBorderRadius: [5, 5, 0, 0]
            }
        }
    }, {
        value: 38,
        itemStyle: {
            normal: {
                color: '#9574cd',
                barBorderRadius: [5, 5, 0, 0]
            }
        }
    }, {
        value: 50,
        itemStyle: {
            normal: {
                color: '#fdd24f',
                barBorderRadius: [5, 5, 0, 0]
            }
        }
    }, {
        value: 15,
        itemStyle: {
            normal: {
                color: '#29b4f5',
                barBorderRadius: [5, 5, 0, 0]
            }
        }
    }, {
        value: 12,
        itemStyle: {
            normal: {
                color: '#e2e7ed',
                barBorderRadius: [5, 5, 0, 0]
            }
        }
    }, {
        value: 55,
        itemStyle: {
            normal: {
                color: '#ff8a80',
                barBorderRadius: [5, 5, 0, 0]

            }
        }
    }, {
        value: 50,
        itemStyle: {
            normal: {
                color: '#25d5e4',
                barBorderRadius: [5, 5, 0, 0]
            }
        }
    }, {
        value: 30,
        itemStyle: {
            normal: {
                color: '#f36192',
                barBorderRadius: [5, 5, 0, 0]
            }
        }
    }
];
var color = [
    'pink',
    '#a2f2f2',
    '#0aacff',
    '#0ab120',
    '#e50ee6',
    '#e6cf1e'
];
experimentChart.setOption({
    baseOption: {
        color: color,
        textStyle: {
            fontFamily: 'Poppins',
            fontWeight: '500'
        },
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '15%'
        },
        xAxis: {
            data: [
                'Planne',
                'Design',
                'Develop',
                'Info',
                'Approval',
                'Submission',
                'Reject',
                'Live'
            ],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                "interval": 0,
                "splitNumber": 10,
                textStyle: {
                    color: '#7d94b6',
                    fontSize: 16
                }
            },
            boundaryGap: true,
            type: 'category'
        },
        yAxis: {
            type: 'value',

            max: '100',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#7d94b6',
                    fontSize: 16
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#7d94b6'
                }

            }
        },
        series: [
            {
                type: 'bar',
                barWidth: 50,
                data: values
            }
        ]
    },
    media: [
        {
            query: {
                minAspectRatio: 1
            },
            option: {
                xAxis: {
                    axisLabel: {
                        rotate: '0',
                        textStyle: {
                            fontSize: 16
                        }
                    }
                },
                grid: {
                    top: '10%',
                    left: '5%',
                    right: '5%',
                    bottom: '10%'
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: 50,
                        data: values
                    }
                ]
            }
        }, {
            query: {
                maxWidth: 500
            },
            option: {
                xAxis: {
                    axisLabel: {
                        rotate: '45',
                        textStyle: {
                            fontSize: 10
                        }
                    }
                },
                grid: {
                    top: '10%',
                    left: '15%',
                    right: '5%',
                    bottom: '20%'
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: 20,
                        data: values
                    }
                ]
            }
        }
    ]
});