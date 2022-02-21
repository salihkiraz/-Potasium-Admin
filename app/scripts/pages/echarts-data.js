'use strict';
var chart1 = echarts.init(document.getElementById('chart1'));
var option;
// option
chart1.setOption(
	(option = {
		backgroundColor: '#fff',
		color: [ '#49C1B6', '#FDC20A', '#F78320', '#068E81', '#EA007B' ],
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#777'
				}
			}
		},

		xAxis: {
			type: 'category',

			boundaryGap: false,
			splitLine: {
				show: false
			},
			axisLabel: {
				interval: 0
			},
			splitArea: {
				show: false
			},

			axisLine: {
				lineStyle: {
					color: '#FFFFFF'
				}
			},

			data: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]
		},
		grid: {
			left: '4%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		yAxis: {
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			}
		},
		series: [
			{
				name: 'A',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false,
				itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#49C1B6'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: '0.6'
					}
				},
				data: [ 0, -7.5, -1.0, 3.7, 0, -3, 8, 0, -3.6, 4, -2, 0 ]
			},
			{
				name: 'B',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false,
				itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#FDC20A'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: '0.6'
					}
				},
				data: [ 0, -2.2, 2, -2.2, 0, -1.5, 0, 2.4, -1, 3, -1, 0 ]
			},
			{
				name: 'C',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false,
				itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#F78320'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: '0.6'
					}
				},
				data: [ 0, 2.3, 0, 1.2, -1, 3, 0, -3.3, 0, 2, -0.3, 0 ]
			},
			{
				name: 'D',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false,
				itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#019A90'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: '0.6'
					}
				},
				data: [ 0, 10, 0.13, 2, 0, 2, 0, 3.7, 0, 1, -3, 0 ]
			},
			{
				name: 'E',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false,
				itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#EA007B'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: '0.6'
					}
				},
				data: [ 0, -4.5, -0.9, 5.5, -1.9, 1.3, -2.8, 0, -1.7, 0, 3, 0 ]
			}
		]
	})
);
var chart2 = echarts.init(document.getElementById('chart2'));
chart2.setOption(
	(option = {
		backgroundColor: '#403F4C',
		title: {
			textStyle: {
				color: '#ffd285'
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		color: [ '#F9DC5C', '#E84855' ],
		legend: {
			data: [ 'Female', 'Male' ],
			itemGap: 20,
			textStyle: {
				color: '#ffd285'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				name: '',
				data: [
					2,
					3,
					7,
					9,
					10,
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
					24,
					25,
					26,
					27,
					28,
					29,
					30,
					31,
					32,
					33,
					34,
					35,
					36,
					37,
					38,
					39,
					40,
					41,
					42,
					43,
					44,
					45,
					46,
					47,
					48,
					49,
					50,
					51,
					52,
					53,
					54,
					55,
					56,
					57,
					58,
					59,
					60,
					61,
					62,
					63,
					64,
					65,
					66,
					67
				],
				axisLabel: {
					textStyle: {
						color: '#ffd285'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#ffd285'
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '',
				axisLine: {
					lineStyle: {
						color: '#ffd285'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#ffd285'
					}
				}
			}
		],
		series: [
			{
				name: 'Female',
				type: 'bar',
				data: [
					0,
					8,
					1,
					0,
					1,
					3,
					4,
					0,
					8,
					13,
					58,
					169,
					188,
					506,
					740,
					735,
					1012,
					1486,
					1537,
					2395,
					2354,
					2482,
					2421,
					2139,
					2041,
					1585,
					1562,
					1570,
					1172,
					1012,
					792,
					670,
					599,
					448,
					308,
					350,
					337,
					373,
					179,
					137,
					277,
					89,
					75,
					91,
					87,
					60,
					109,
					46,
					22,
					81,
					13,
					38,
					46,
					28,
					28,
					8,
					17,
					29,
					4,
					2
				]
			},
			{
				name: 'Male',
				type: 'bar',
				data: [
					1,
					0,
					0,
					1,
					0,
					0,
					0,
					7,
					4,
					30,
					25,
					122,
					265,
					433,
					454,
					718,
					970,
					906,
					1383,
					1590,
					1936,
					1797,
					2042,
					1803,
					1806,
					1548,
					1391,
					1324,
					1066,
					751,
					774,
					595,
					401,
					433,
					354,
					204,
					267,
					166,
					244,
					146,
					101,
					101,
					80,
					45,
					56,
					46,
					95,
					89,
					24,
					41,
					24,
					25,
					24,
					26,
					12,
					8,
					5,
					8,
					14,
					9
				]
			}
		]
	})
);
var chart3 = echarts.init(document.getElementById('chart3'));
var colors = [
	'rgba(251,210,73,0.7)',
	'rgba(251,210,73,0.7)',
	'rgba(124,213,253,0.7)',
	'rgba(124,213,253,0.7)',
	'rgba(124,213,253,0.7)',
	'rgba(124,213,253,0.7)',
	'rgba(124,213,253,0.7)',
	'rgba(124,213,253,0.7)',
	'rgba(181,236,69,0.7)',
	'rgba(181,236,69,0.7)',
	'rgba(136,243,227,0.7)',
	'rgba(136,243,227,0.7)',
	'rgba(136,243,227,0.7)',
	'rgba(136,243,227,0.7)'
];

var aCategorys = [ '', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', ' J', ' K', 'L', 'M', 'O', 'P', '' ];
var topdata = [ 0, 96, 96, 97, 95, 98, 94, 89, 94, 80, 67, 90, 94, 90, 89 ];
var aSeries = [
	{
		name: 'Career',
		type: 'line',
		symbol: 'circle',
		symbolSize: 12,
		itemStyle: {
			normal: {
				color: '#F6A623',
				borderColor: '#ffffff',
				borderWidth: 2
			}
		},
		lineStyle: {
			normal: {
				opacity: 0
			}
		},

		data: [ '-', 96, 96, 97, 95, 98, 94, 89, 94, 80, 52, 75, 94, 90, 89, '-' ]
	},
	{
		name: 'Role',
		type: 'line',
		symbol: 'circle',
		symbolSize: 12,
		lineStyle: {
			normal: {
				opacity: 0
			}
		},
		itemStyle: {
			normal: {
				color: '#A5A7AD',
				borderColor: '#ffffff',
				borderWidth: 2
			}
		},

		data: [ '-', 77, 89, 79, 70, 69, 60, 80, 91, 69, 67, 90, 84, 70, 69, '-' ]
	}
];

aCategorys.forEach(function(v, i, a) {
	var name = v;
	if (v !== '') {
		var data = [];
		for (var j = 0; j < aCategorys.length; j++) {
			data.push('-');
		}
		data[i - 1] = 0;
		data[i] = topdata[i];
		data[i + 1] = 0;
		aSeries.push({
			name: name,
			type: 'pictorialBar',
			smooth: false,
			legendHoverLink: false,
			symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
			barCategoryGap: '-130%',
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false
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
								color: colors[i - 1]
							},
							{
								offset: 1,
								color: colors[i - 1]
							}
						],
						globalCoord: false
					}
				}
			},
			data: data
		});
	}
});

chart3.setOption(
	(option = {
		color: colors,
		tooltip: {
			trigger: 'axis',
			formatter: function(params) {
				var rValue = params[0].name + '<br>';
				params.forEach(function(v, i, a) {
					if (v.data !== 0 && v.data !== '-' && v.seriesType == 'line') {
						rValue +=
							'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;' +
							'height:9px;background-color:' +
							v.color +
							'"></span>' +
							v.seriesName +
							':' +
							v.data +
							'<br>';
					}
				});
				return rValue;
			}
		},
		legend: {
			icon: 'circle',
			itemWidth: 14,
			itemHeight: 14,
			itemGap: 15,
			data: [ 'Career', 'Role' ],
			right: '4%',
			textStyle: {
				fontSize: 14,
				color: '#424242'
			}
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: aCategorys,
				axisLabel: {
					textStyle: {
						fontSize: 14
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#f7f7f7'
					}
				}
			}
		],
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		yAxis: [
			{
				type: 'value',
				splitLine: {
					show: true,
					lineStyle: {
						color: '#f7f7f7'
					}
				}
			}
		],
		series: aSeries
	})
);
var chart4 = echarts.init(document.getElementById('chart4'));
var xData = [
	'RMadrid',
	'Barca',
	'Chelsea',
	'Galatasaray',
	'PSG',
	'Manu',
	'MCity',
	'Roma',
	'Juventus',
	'Milan',
	'AMadrid',
	'Arsenal'
];

var yData = [ 'Attack', 'Defence', 'Skill', 'Power', 'Balance', 'Finance', 'Fans', 'Popularite' ];

function random(a, b) {
	return Math.round(Math.random() * Math.abs(b - a) + Math.min(a, b));
}

var seriesData = [];

for (var i = 0; i < yData.length; i++) {
	var data = [];
	for (var j = 0; j < xData.length; j++) {
		data.push([ i, j ]);
	}
	seriesData.push(data);
}
for (let i = 0; i < seriesData.length; i++) {
	seriesData[i] = seriesData[i].map(function(item) {
		return [ item[1], item[0], random(1, 10) ];
	});
	seriesData[i] = {
		name: yData[i],
		type: 'heatmap',
		data: seriesData[i]
	};
}

var colorData = [ '#ffffff', '#e8192f', '#d6664d', '#B9044E', '#f0ba2e', '#d3ce2b', '#169A7f', '#0b6573', '#1BB3c8' ];

chart4.setOption(
	(option = {
		baseOption: {
			title: {
				text: 'Football Team Analysis'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'line'
				}
			},
			xAxis: {
				name: '',
				type: 'category',
				data: xData
			},
			yAxis: {
				name: '',
				type: 'category',
				data: yData
			},

			visualMap: {
				color: colorData,
				min: 1,
				max: 10,
				calculable: true,
				orient: 'vertical',
				left: 'left',
				bottom: '15%'
			},
			series: seriesData,
			label: {
				normal: {
					show: true
				}
			},
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 500
				},
				option: {
					// write options accordingly
					visualMap: {
						// legend is placed in middle-bottom
						right: 'center',
						bottom: 0,
						orient: 'horizontal' // horizontal layout of legend
					},
					grid: {
						show: false,
						containLabel: true,
						left: '0',
						right: '0',
						top: '10%',
						bottom: '10%'
					}
				}
			}
		]
	})
);

var chart5 = echarts.init(document.getElementById('chart5'));
function getVirtulData(year) {
	year = year || '2017';
	var date = +echarts.number.parseDate(year + '-01-01');
	var end = +echarts.number.parseDate(+year + 1 + '-01-01');
	var dayTime = 3600 * 24 * 1000;
	var data = [];
	for (var time = date; time < end; time += dayTime) {
		data.push([ echarts.format.formatTime('yyyy-MM-dd', time), Math.floor(Math.random() * 10000) ]);
	}
	return data;
}

var data = getVirtulData(2016);

chart5.setOption(
	(option = {
		baseOption: {
			backgroundColor: '#404a59',

			title: {
				top: 10,
				text: 'The number of steps per person in 2016',
				subtext: '',
				left: 'center',
				textStyle: {
					color: '#fff'
				}
			},
			tooltip: {
				trigger: 'item'
			},
			legend: {
				top: '30',
				left: '100',
				data: [ 'Step Count', 'Top 12' ],
				textStyle: {
					color: '#fff'
				}
			},
			calendar: [
				{
					top: 100,
					left: 'center',
					range: [ '2016-01-01', '2016-06-30' ],
					splitLine: {
						show: true,
						lineStyle: {
							color: '#000',
							width: 1,
							type: 'solid'
						}
					},
					yearLabel: {
						formatter: '{start}  1st',
						textStyle: {
							color: '#fff'
						}
					},
					itemStyle: {
						normal: {
							color: '#323c48',
							borderWidth: 1,
							borderColor: '#111'
						}
					}
				},
				{
					top: 340,
					left: 'center',
					range: [ '2016-07-01', '2016-12-31' ],
					splitLine: {
						show: true,
						lineStyle: {
							color: '#000',
							width: 1,
							type: 'solid'
						}
					},
					yearLabel: {
						formatter: '{start}  2nd',
						textStyle: {
							color: '#fff'
						}
					},
					itemStyle: {
						normal: {
							color: '#323c48',
							borderWidth: 1,
							borderColor: '#111'
						}
					}
				}
			],
			series: [
				{
					name: 'Step Count',
					type: 'scatter',
					coordinateSystem: 'calendar',
					data: data,
					symbolSize: function(val) {
						return val[1] / 500;
					},
					itemStyle: {
						normal: {
							color: '#ddb926'
						}
					}
				},
				{
					name: 'Step Count',
					type: 'scatter',
					coordinateSystem: 'calendar',
					calendarIndex: 1,
					data: data,
					symbolSize: function(val) {
						return val[1] / 500;
					},
					itemStyle: {
						normal: {
							color: '#ddb926'
						}
					}
				},
				{
					name: 'Top 12',
					type: 'effectScatter',
					coordinateSystem: 'calendar',
					calendarIndex: 1,
					data: data
						.sort(function(a, b) {
							return b[1] - a[1];
						})
						.slice(0, 12),
					symbolSize: function(val) {
						return val[1] / 500;
					},
					showEffectOn: 'render',
					rippleEffect: {
						brushType: 'stroke'
					},
					hoverAnimation: true,
					itemStyle: {
						normal: {
							color: '#f4e925',
							shadowBlur: 10,
							shadowColor: '#333'
						}
					},
					zlevel: 1
				},
				{
					name: 'Top 12',
					type: 'effectScatter',
					coordinateSystem: 'calendar',
					data: data
						.sort(function(a, b) {
							return b[1] - a[1];
						})
						.slice(0, 12),
					symbolSize: function(val) {
						return val[1] / 500;
					},
					showEffectOn: 'render',
					rippleEffect: {
						brushType: 'stroke'
					},
					hoverAnimation: true,
					itemStyle: {
						normal: {
							color: '#f4e925',
							shadowBlur: 10,
							shadowColor: '#333'
						}
					},
					zlevel: 1
				}
			]
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 500
				},
				option: {
					// write options accordingly
					calendar: [
						{
							left: 5,
							orient: 'horizontal',
							range: [ '2016-01-01', '2016-06-30' ],
							top: 90,
                            bottom: 15,
                            left:10,right:10,
							monthLabel: {
								show: false
							}
						},
						{
                            width:0,
                            height:0,
							left: 175,
							top: 90,
							bottom: 15,
							orient: 'vertical',
							range: [ '2016-07-01', '2016-12-31' ]
						}
					],
					title: {
						top: 3,
						text: 'The number of steps per person',
						subtext: '',
						left: 'center',
						textStyle: {
							color: '#fff',
							fontSize: '10px'
						}
					},
					legend: {
						show:false
					}
				}
			}
		]
	})
);

var chart6 = echarts.init(document.getElementById('chart6'));

chart6.setOption(
	(option = {baseOption:{
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c}%'
		},

		legend: {
			orient: 'vertical',
            left: 'left',
			data: [ 'Audi', 'Mercedes', 'BMW', 'Lexus', 'Ford' ]
		},
		calculable: true,
		series: [
			{
				name: 'Audi',
				type: 'funnel',
				width: '40%',
				height: '45%',
				left: '5%',
				top: '50%',
				funnelAlign: 'left',

				center: [ '25%', '25%' ], // for pie

				data: [
					{
						value: 60,
						name: 'BMW'
					},
					{
						value: 30,
						name: 'Lexus'
					},
					{
						value: 10,
						name: 'Ford'
					},
					{
						value: 80,
						name: 'Mercedes'
					},
					{
						value: 100,
						name: 'Audi'
					}
				]
			},
			{
				name: 'Mercedes',
				type: 'funnel',
				width: '40%',
				height: '45%',
				left: '5%',
				top: '5%',
				sort: 'ascending',
				funnelAlign: 'right',

				center: [ '25%', '75%' ], // for pie

				data: [
					{
						value: 60,
						name: 'BMW'
					},
					{
						value: 30,
						name: 'Lexus'
					},
					{
						value: 10,
						name: 'Ford'
					},
					{
						value: 80,
						name: 'Mercedes'
					},
					{
						value: 100,
						name: 'Audi'
					}
				]
			},
			{
				name: 'Audi',
				type: 'funnel',
				width: '40%',
				height: '45%',
				left: '55%',
				top: '5%',
				funnelAlign: 'left',

				center: [ '75%', '25%' ],

				data: [
					{
						value: 60,
						name: 'BMW'
					},
					{
						value: 30,
						name: 'Lexus'
					},
					{
						value: 10,
						name: 'Ford'
					},
					{
						value: 80,
						name: 'Mercedes'
					},
					{
						value: 100,
						name: 'Audi'
					}
				]
			},
			{
				name: 'Mercedes',
				type: 'funnel',
				width: '40%',
				height: '45%',
				left: '55%',
				top: '50%',
				sort: 'ascending',
				funnelAlign: 'left',

				center: [ '75%', '75%' ], // for pie

				data: [
					{
						value: 60,
						name: 'BMW'
					},
					{
						value: 30,
						name: 'Lexus'
					},
					{
						value: 10,
						name: 'Ford'
					},
					{
						value: 80,
						name: 'Mercedes'
					},
					{
						value: 100,
						name: 'Audi'
					}
				]
			}
		]
	},media: [
        // each rule of media query is defined here
        {
            query: {
                maxWidth: 480
            },
            option: {
                series: [
                    {
                        name: 'Audi',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '5%',
                        top: '50%',
                        funnelAlign: 'left',
        
                        center: [ '25%', '25%' ], // for pie
        
                        data: [
                           
                           
                            {
                                value: 80,
                                name: 'Mercedes'
                            },
                            {
                                value: 100,
                                name: 'Audi'
                            }
                        ]
                    },
                    {
                        name: 'Mercedes',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '5%',
                        top: '5%',
                        sort: 'ascending',
                        funnelAlign: 'right',
        
                        center: [ '25%', '75%' ], // for pie
        
                        data: [
                           
                            {
                                value: 80,
                                name: 'Mercedes'
                            },
                            {
                                value: 100,
                                name: 'Audi'
                            }
                        ]
                    },
                    {
                        name: 'Audi',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '55%',
                        top: '5%',
                        funnelAlign: 'left',
        
                        center: [ '75%', '25%' ],
        
                        data: [
                         
                           
                            {
                                value: 80,
                                name: 'Mercedes'
                            },
                            {
                                value: 100,
                                name: 'Audi'
                            }
                        ]
                    },
                    {
                        name: 'Mercedes',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '55%',
                        top: '50%',
                        sort: 'ascending',
                        funnelAlign: 'left',
        
                        center: [ '75%', '75%' ], // for pie
        
                        data: [
                          
                            {
                                value: 80,
                                name: 'Mercedes'
                            },
                            {
                                value: 100,
                                name: 'Audi'
                            }
                        ]
                    }
                ],
                legend: {
                    orient: 'horizontal',
                    left: 'left',
                    data: [ 'Audi', 'Mercedes', 'BMW', 'Lexus', 'Ford' ]
                },
            }
        }
    ]})
);
var chart7 = echarts.init(document.getElementById('chart7'));
chart7.setOption(
	(option = {
		baseOption: {
			backgroundColor: '#403F4C',
			title: {
				text: '',
				subtext: '',
				textStyle: {
					color: '#ffd285'
				},
				left: 'center'
			},
			tooltip: {
				trigger: 'axis'
			},
			toolbox: {
				show: false,
				feature: {
					saveAsImage: {
						title: 'Save'
					}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: true,
				data: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
				axisLine: {
					lineStyle: {
						color: '#e22f0e'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#e22f0e'
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#e22f0e'
					}
				}
			},
			yAxis: {
				type: 'value',
				min: 400,
				max: 900,
				axisLine: {
					lineStyle: {
						color: '#e22f0e'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#e22f0e'
					},
					formatter: '{value}'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#e22f0e'
					}
				}
			},
			grid: {
				show: false,
				containLabel: true,
				left: '20',
				right: '20',
				top: '5%',
				bottom: '10'
			},
			series: [
				{
					name: 'Burned Calories',
					type: 'line',
					smooth: true,
					showSymbol: true,
					symbol: 'circle',
					symbolSize: 20,
					lineStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0,
								1,
								1,
								1,
								[
									{
										offset: 0.3,
										color: '#f85a37'
									},
									{
										offset: 1,
										color: '#a805dc'
									}
								],
								false
							),
							width: 5,
							borderWidth: 0,
							shadowBlur: 30,
							shadowOffsetX: 0,
							shadowOffsetY: 10,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},

					data: [ 650, 550, 800, 500, 750, 850, 750, 450, 650, 480, 520, 450 ]
				}
			]
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 500
				},
				option: {
					// write options accordingly
					series: [
						{
							name: 'Burned Calories',
							type: 'line',
							smooth: true,
							showSymbol: true,
							symbol: 'circle',
							symbolSize: 5,
							lineStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(
										0,
										1,
										1,
										1,
										[
											{
												offset: 0.3,
												color: '#f85a37'
											},
											{
												offset: 1,
												color: '#a805dc'
											}
										],
										false
									),
									width: 2,
									borderWidth: 0,
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowOffsetY: 10,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}
					]
				}
			}
		]
	})
);
var chart8 = echarts.init(document.getElementById('chart8'));
chart8.setOption(
	(option = {
		baseOption: {
			backgroundColor: '#403F4C',
			title: {
				text: 'Products Chart',
				left: 'center',
				top: '3%',
				textStyle: {
					color: '#ffd285'
				}
			},
			tooltip: {
				trigger: 'asix',
				axisPointer: {
					lineStyle: {
						color: '#ddd'
					}
				},
				backgroundColor: 'rgba(255,255,255,1)',
				padding: [ 5, 10 ],
				textStyle: {
					color: '#7588E4'
				},
				extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
			},
			legend: {
				right: 20,
				orient: 'horizontal',
				data: [ 'Arsenal', 'Dortmund' ],
				textStyle: {
					color: '#ffffff'
				}
			},
			grid: {
				show: false,
				containLabel: true,
				left: '10',
				right: '50',
				top: '100',
				bottom: '10'
			},
			xAxis: {
				show: true,
				type: 'category',
				data: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13' ],
				axisLine: {
					show: false,
					lineStyle: {
						color: '#e22f0e'
					}
				},
				axisLabel: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#fff',
						type: 'dotted'
					}
				}
			},
			yAxis: {
				show: true,
				axisLine: {
					show: false,
					lineStyle: {
						color: '#e22f0e'
					}
				},
				axisLabel: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#fff',
						type: 'dotted'
					}
				}
			},
			series: [
				{
					name: 'Arsenal',
					type: 'line',
					smooth: true,
					showSymbol: false,
					symbol: 'circle',
					symbolSize: 6,
					data: [
						'0',
						'45000',
						'30000',
						'51000',
						'80000',
						'42000',
						'66500',
						'52300',
						'79500',
						'62410',
						'54800',
						'42500',
						'0'
					],
					areaStyle: {
						normal: {
							color: '#af6d65',
							opacity: 0.8
						}
					},
					lineStyle: {
						normal: {
							opacity: 0
						}
					}
				},
				{
					name: 'Dortmund',
					type: 'line',
					smooth: true,
					showSymbol: false,
					symbol: 'circle',
					symbolSize: 6,
					data: [
						'0',
						'32000',
						'15000',
						'69000',
						'26000',
						'88000',
						'54000',
						'45800',
						'69041',
						'55159',
						'34052',
						'48012',
						'0'
					],
					areaStyle: {
						normal: {
							color: '#7ebeb1',
							opacity: 0.8
						}
					},
					lineStyle: {
						normal: {
							opacity: 0
						}
					}
				}
			]
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 500
				},
				option: {
					// write options accordingly

					grid: {
						show: false,
						containLabel: false,
						left: '10',
						right: '10',
						top: '10%',
						bottom: '5%'
					}
				}
			}
		]
	})
);
var chart9 = echarts.init(document.getElementById('chart9'));
chart9.setOption(
	(option = {
		baseOption: {
			backgroundColor: '#403F4C',
			color: [ '#D8973C', '#FFFFFF', '#64ea91' ],

			title: [
				{
					text: 'USA Air Quality Index This Week',
					left: '2%',
					top: '5%',
					textStyle: {
						color: '#ffd285'
					}
				},
				{
					text: 'Pollution Analysis',
					left: '83%',
					top: '6%',
					textAlign: 'center',
					textStyle: {
						color: '#ffd285'
					}
				}
			],
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				x: 200,
				left: 'center',
				top: '1%',
				textStyle: {
					color: '#ffd285'
				},
				data: [ 'Los Angeles', 'New York', 'California' ]
			},
			grid: {
				left: '1%',
				right: '30%',
				top: '16%',
				bottom: '6%',
				containLabel: true
			},
			toolbox: {
				show: false,
				feature: {
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				axisLine: {
					lineStyle: {
						color: '#c0576d'
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#ffd285'
					}
				},
				boundaryGap: false,
				data: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
			},
			yAxis: {
				axisLine: {
					lineStyle: {
						color: '#c0576d'
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#c0576d'
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#ffd285'
					}
				},
				type: 'value'
			},
			series: [
				{
					name: 'Los Angeles',
					smooth: true,
					type: 'line',
					symbolSize: 8,
					symbol: 'circle',
					data: [ 90, 50, 39, 50, 120, 82, 80 ]
				},
				{
					name: 'New York',
					smooth: true,
					type: 'line',
					symbolSize: 8,
					symbol: 'circle',
					data: [ 70, 162, 50, 87, 90, 147, 60 ]
				},
				{
					name: 'California',
					smooth: true,
					type: 'line',
					symbolSize: 8,
					symbol: 'circle',
					data: [ 290, 335, 80, 132, 187, 330, 39 ]
				},
				{
					type: 'pie',
					center: [ '83%', '33%' ],
					radius: [ '25%', '30%' ],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [
						{
							value: 335,
							name: 'Analysis of Pollution Sources',
							itemStyle: {
								normal: {
									color: '#ffd285'
								}
							},
							label: {
								normal: {
									formatter: '{d} %',
									textStyle: {
										color: '#ffd285',
										fontSize: 20
									}
								}
							}
						},
						{
							value: 310,
							name: 'Vehicles',
							tooltip: {
								show: false
							},
							itemStyle: {
								normal: {
									color: '#b04459'
								}
							},
							label: {
								normal: {
									textStyle: {
										color: '#ffd285'
									},
									formatter: '{b}'
								}
							}
						}
					]
				},
				{
					type: 'pie',
					center: [ '83%', '72%' ],
					radius: [ '25%', '30%' ],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [
						{
							value: 535,
							name: 'Industry',
							itemStyle: {
								normal: {
									color: '#ff733f'
								}
							},
							label: {
								normal: {
									formatter: '{d} %',
									textStyle: {
										color: '#ff733f',
										fontSize: 20
									}
								}
							}
						},
						{
							value: 210,
							name: 'Indsutry',
							tooltip: {
								show: true
							},
							itemStyle: {
								normal: {
									color: '#b04459'
								}
							},
							label: {
								normal: {
									textStyle: {
										color: '#ffd285'
									},
									formatter: '{b}'
								}
							}
						}
					]
				}
			]
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 480
				},
				option: {
					// write options accordingly
					title: [
						{
							show: false,
							
						},
						{
							show: false,
							
						}
					],
					grid: {
						show: false,
						containLabel: false,
						left: '15%',
						right: '10%',
						top: '40%',
						bottom: '10%'
					},
					series: [
						{
							name: 'Los Angeles',
							smooth: true,
							type: 'line',
							symbolSize: 8,
							symbol: 'circle',
							data: [ 90, 50, 39, 50, 120, 82, 80 ]
						},
						{
							name: 'New York',
							smooth: true,
							type: 'line',
							symbolSize: 8,
							symbol: 'circle',
							data: [ 70, 162, 50, 87, 90, 147, 60 ]
						},
						{
							name: 'California',
							smooth: true,
							type: 'line',
							symbolSize: 8,
							symbol: 'circle',
							data: [ 290, 335, 80, 132, 187, 330, 39 ]
						},
						{
							type: 'pie',
							center: [ '73%', '25%' ],
							radius: [ '22%', '27%' ],
							label: {
								normal: {
									position: 'center'
								}
							},
							data: [
								{
									value: 335,
									name: 'Analysis of Pollution Sources',
									itemStyle: {
										normal: {
											color: '#ffd285'
										}
									},
									label: {
										normal: {
											formatter: '{d} %',
											textStyle: {
												color: '#ffd285',
												fontSize: 10
											}
										}
									}
								},
								{
									value: 310,
									name: 'Vehicles',
									tooltip: {
										show: false
									},
									itemStyle: {
										normal: {
											color: '#b04459'
										}
									},
									label: {
										normal: {
											textStyle: {
												color: '#ffd285'
											},
											formatter: '{b}'
										}
									}
								}
							]
						},
						{
							type: 'pie',
							center: [ '23%', '17%' ],
							radius: [ '22%', '27%' ],
							label: {
								normal: {
									position: 'center'
								}
							},
							data: [
								{
									value: 535,
									name: 'Industry',
									itemStyle: {
										normal: {
											color: '#ff733f'
										}
									},
									label: {
										normal: {
											formatter: '{d} %',
											textStyle: {
												color: '#ff733f',
												fontSize: 10
											}
										}
									}
								},
								{
									value: 210,
									name: 'Indsutry',
									tooltip: {
										show: true
									},
									itemStyle: {
										normal: {
											color: '#b04459'
										}
									},
									label: {
										normal: {
											textStyle: {
												color: '#ffd285'
											},
											formatter: '{b}'
										}
									}
								}
							]
						}
					]
				}
			}
		]
	})
);
var chart10 = echarts.init(document.getElementById('chart10'));
chart10.setOption(
	(option = {
		baseOption: {
			backgroundColor: '#403F4C',
			title: {
				text: 'Stadium Occupancy Rate',
				left: '50%',
				textAlign: 'center',
				textStyle: {
					color: '#ffd285',
					fontSize: '16px'
				}
			},
			tooltip: {
				trigger: 'asix',
				axisPointer: {
					lineStyle: {
						color: '#ddd'
					}
				},
				backgroundColor: 'rgba(255,255,255,1)',
				padding: [ 5, 10 ],
				textStyle: {
					color: '#7588E4'
				},
				extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
			},
			legend: {
				right: 20,
				orient: 'vertical',
				data: [ 'Arsenal', 'Dortmund' ]
			},
			grid: {
				show: false,
				containLabel: true,
				left: '10',
				right: '50',
				top: '10%',
				bottom: '10'
			},
			xAxis: {
				type: 'category',
				data: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'Nowember',
					'December'
				],
				boundaryGap: false,
				splitLine: {
					show: true,
					interval: 'auto',
					lineStyle: {
						color: [ '#D4DFF5' ]
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#609ee9'
					}
				},
				axisLabel: {
					margin: 10,
					textStyle: {
						fontSize: 14
					}
				}
			},
			yAxis: {
				type: 'value',
				splitLine: {
					lineStyle: {
						color: [ '#D4DFF5' ]
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#609ee9'
					}
				},
				axisLabel: {
					margin: 10,
					textStyle: {
						fontSize: 14
					}
				}
			},
			series: [
				{
					name: 'Arsenal',
					type: 'line',
					smooth: true,
					showSymbol: false,
					symbol: 'circle',
					symbolSize: 6,
					data: [
						'55000',
						'56000',
						'50000',
						'51000',
						'30000',
						'34580',
						'26500',
						'32444',
						'48000',
						'52000',
						'56000',
						'53000'
					],
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0,
								0,
								0,
								1,
								[
									{
										offset: 0,
										color: 'rgba(199, 237, 250,0.5)'
									},
									{
										offset: 1,
										color: 'rgba(199, 237, 250,0.2)'
									}
								],
								false
							)
						}
					},
					itemStyle: {
						normal: {
							color: '#F9564F'
						}
					},
					lineStyle: {
						normal: {
							width: 3
						}
					}
				},
				{
					name: 'Dortmund',
					type: 'line',
					smooth: true,
					showSymbol: false,
					symbol: 'circle',
					symbolSize: 6,
					data: [
						'24000',
						'32000',
						'10000',
						'29000',
						'26000',
						'28000',
						'24000',
						'36541',
						'48000',
						'50000',
						'68000',
						'63000'
					],
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								1,
								1,
								0,
								1,
								[
									{
										offset: 0,
										color: 'rgba(16, 244, 247,1)'
									},
									{
										offset: 1,
										color: 'rgba(216, 244, 247,1)'
									}
								],
								false
							)
						}
					},
					itemStyle: {
						normal: {
							color: '#F3C677'
						}
					},
					lineStyle: {
						normal: {
							width: 3
						}
					}
				}
			]
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 480
				},
				option: {
					// write options accordingly

					grid: {
						show: false,
						containLabel: true,
						left: '10',
						right: '0',
						top: '20%',
						bottom: '10'
					},
					legend: {
						right: 20,
						top: 20,
						orient: 'horizontal',
						textStyle: {
							color: '#fff'
						}
					}
				}
			}
		]
	})
);
var chart11 = echarts.init(document.getElementById('chart11'));
var pathSymbols = {
	reindeer:
		'path://M-22.788,24.521c2.08-0.986,3.611-3.905,4.984-5.892 c-2.686,2.782-5.047,5.' +
		'884-9.102,7.312c-0.992,0.005-0.25-2.016,0.34-2.362l1.852-0.41c0.564-0.218,0.785-' +
		'0.842,0.902-1.347 c2.133-0.727,4.91-4.129,6.031-6.194c1.748-0.7,4.443-0.679,5.73' +
		'4-2.293c1.176-1.468,0.393-3.992,1.215-6.557 c0.24-0.754,0.574-1.581,1.008-2.293c' +
		'-0.611,0.011-1.348-0.061-1.959-0.608c-1.391-1.245-0.785-2.086-1.297-3.313 c1.684' +
		',0.744,2.5,2.584,4.426,2.586C-8.46,3.012-8.255,2.901-8.04,2.824c6.031-1.952,15.1' +
		'82-0.165,19.498-3.937 c1.15-3.933-1.24-9.846-1.229-9.938c0.008-0.062-1.314-0.004' +
		'-1.803-0.258c-1.119-0.771-6.531-3.75-0.17-3.33 c0.314-0.045,0.943,0.259,1.439,0.' +
		'435c-0.289-1.694-0.92-0.144-3.311-1.946c0,0-1.1-0.855-1.764-1.98 c-0.836-1.09-2.' +
		'01-2.825-2.992-4.031c-1.523-2.476,1.367,0.709,1.816,1.108c1.768,1.704,1.844,3.28' +
		'1,3.232,3.983 c0.195,0.203,1.453,0.164,0.926-0.468c-0.525-0.632-1.367-1.278-1.77' +
		'5-2.341c-0.293-0.703-1.311-2.326-1.566-2.711 c-0.256-0.384-0.959-1.718-1.67-2.35' +
		'1c-1.047-1.187-0.268-0.902,0.521-0.07c0.789,0.834,1.537,1.821,1.672,2.023 c0.135' +
		',0.203,1.584,2.521,1.725,2.387c0.102-0.259-0.035-0.428-0.158-0.852c-0.125-0.423-' +
		'0.912-2.032-0.961-2.083 c-0.357-0.852-0.566-1.908-0.598-3.333c0.4-2.375,0.648-2.' +
		'486,0.549-0.705c0.014,1.143,0.031,2.215,0.602,3.247 c0.807,1.496,1.764,4.064,1.8' +
		'36,4.474c0.561,3.176,2.904,1.749,2.281-0.126c-0.068-0.446-0.109-2.014-0.287-2.86' +
		'2 c-0.18-0.849-0.219-1.688-0.113-3.056c0.066-1.389,0.232-2.055,0.277-2.299c0.285' +
		'-1.023,0.4-1.088,0.408,0.135 c-0.059,0.399-0.131,1.687-0.125,2.655c0.064,0.642-0' +
		'.043,1.768,0.172,2.486c0.654,1.928-0.027,3.496,1,3.514 c1.805-0.424,2.428-1.218,' +
		'2.428-2.346c-0.086-0.704-0.121-0.843-0.031-1.193c0.221-0.568,0.359-0.67,0.312-0.' +
		'076 c-0.055,0.287,0.031,0.533,0.082,0.794c0.264,1.197,0.912,0.114,1.283-0.782c0.' +
		'15-0.238,0.539-2.154,0.545-2.522 c-0.023-0.617,0.285-0.645,0.309,0.01c0.064,0.42' +
		'2-0.248,2.646-0.205,2.334c-0.338,1.24-1.105,3.402-3.379,4.712 c-0.389,0.12-1.186' +
		',1.286-3.328,2.178c0,0,1.729,0.321,3.156,0.246c1.102-0.19,3.707-0.027,4.654,0.26' +
		'9 c1.752,0.494,1.531-0.053,4.084,0.164c2.26-0.4,2.154,2.391-1.496,3.68c-2.549,1.' +
		'405-3.107,1.475-2.293,2.984 c3.484,7.906,2.865,13.183,2.193,16.466c2.41,0.271,5.' +
		'732-0.62,7.301,0.725c0.506,0.333,0.648,1.866-0.457,2.86 c-4.105,2.745-9.283,7.02' +
		'2-13.904,7.662c-0.977-0.194,0.156-2.025,0.803-2.247l1.898-0.03c0.596-0.101,0.936' +
		'-0.669,1.152-1.139 c3.16-0.404,5.045-3.775,8.246-4.818c-4.035-0.718-9.588,3.981-' +
		'12.162,1.051c-5.043,1.423-11.449,1.84-15.895,1.111 c-3.105,2.687-7.934,4.021-12.' +
		'115,5.866c-3.271,3.511-5.188,8.086-9.967,10.414c-0.986,0.119-0.48-1.974,0.066-2.' +
		'385l1.795-0.618 C-22.995,25.682-22.849,25.035-22.788,24.521z',
	plane:
		'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803' +
		',23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-' +
		'0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804' +
		'H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39' +
		'.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506' +
		',1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963' +
		',38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127' +
		',4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0' +
		',0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,' +
		'39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.82' +
		'7,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25' +
		'.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.' +
		'407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.0' +
		'4h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228' +
		',3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59' +
		'.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.46' +
		'9-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,2' +
		'2.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.81' +
		'2,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,2' +
		'7.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-' +
		'1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z ' +
		'M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 ' +
		's0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.4' +
		'08c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477' +
		',1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0' +
		'.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,' +
		'2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
	rocket:
		'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-' +
		'15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-' +
		'260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.' +
		'684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371' +
		'z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.7' +
		'44c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.2' +
		'28v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-2' +
		'57.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,' +
		'5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-2' +
		'65.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-' +
		'1.488-3.826h8.067L-252.36,45.15z',
	train:
		'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-' +
		'2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033' +
		',0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33' +
		'.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-' +
		'3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30' +
		'.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35' +
		'.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v' +
		'10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3' +
		'.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272' +
		'h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
	ship:
		'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3' +
		'.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.' +
		'48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047' +
		',1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.76' +
		'9L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371' +
		'l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.' +
		'684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.' +
		'199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729' +
		'-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.' +
		'828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812' +
		',45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1' +
		'.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.21' +
		'3,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M' +
		'19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
	car:
		'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.' +
		'519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.69' +
		'7c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.1' +
		'96,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008' +
		'-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z ' +
		'M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,' +
		'0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.' +
		'299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0' +
		'.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.' +
		'008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,' +
		'32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.' +
		'522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.03' +
		'4,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0' +
		'.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c' +
		'-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.01' +
		'8c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.4' +
		'74-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4' +
		'.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.' +
		'754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.91' +
		'9c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.2' +
		'93,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.7' +
		'73,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637' +
		',0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c' +
		'-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076' +
		',1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c' +
		'1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.' +
		'826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.' +
		'423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 ' +
		'c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,' +
		'0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.86' +
		'7,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.25' +
		'6-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c' +
		'1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,' +
		'1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0' +
		'.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-1' +
		'4.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.' +
		'219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-' +
		'0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06' +
		'-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.2' +
		'64,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.2' +
		'13 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,' +
		'0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.76' +
		'4-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.' +
		'584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,' +
		'37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.8' +
		'78-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.0' +
		'74-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0' +
		'.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.8' +
		'95,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z',
	run:
		'path://M13.676,32.955c0.919-0.031,1.843-0.008,2.767-0.008v0.007c0.827,0,1.659,0.' +
		'041,2.486-0.019 c0.417-0.028,1.118,0.325,1.14-0.545c0.014-0.637-0.156-1.279-0.87' +
		'3-1.367c-1.919-0.241-3.858-0.233-5.774,0.019 c-0.465,0.062-0.998,0.442-0.832,1.0' +
		'69C12.715,32.602,13.045,32.977,13.676,32.955z M14.108,29.013 c1.47-0.007,2.96-0.' +
		'122,4.414,0.035c1.792,0.192,3.1-0.412,4.273-2.105c-3.044,0-5.882,0.014-8.719-0.0' +
		'1 c-0.768-0.005-1.495,0.118-1.461,1C12.642,28.731,13.329,29.014,14.108,29.013z M' +
		'23.678,36.593c-0.666-0.69-1.258-1.497-2.483-1.448 c-2.341,0.095-4.689,0.051-7.03' +
		'5,0.012c-0.834-0.014-1.599,0.177-1.569,1.066c0.031,0.854,0.812,1.062,1.636,1.043' +
		' c1.425-0.033,2.852-0.01,4.278-0.01v-0.01c1.562,0,3.126,0.008,4.691-0.005C23.614' +
		',37.239,24.233,37.174,23.678,36.593z  M32.234,42.292h-0.002c-1.075,0.793-2.589,0' +
		'.345-3.821,1.048c-0.359,0.193-0.663,0.465-0.899,0.799 c-1.068,1.623-2.052,3.301-' +
		'3.117,4.928c-0.625,0.961-0.386,1.805,0.409,2.395c0.844,0.628,1.874,0.617,2.548-0' +
		'.299 c1.912-2.573,3.761-5.197,5.621-7.814C33.484,42.619,33.032,42.387,32.234,42.' +
		'292z M43.527,28.401 c-0.688-1.575-2.012-0.831-3.121-0.895c-1.047-0.058-2.119,1.1' +
		'28-3.002,0.345c-0.768-0.677-1.213-1.804-1.562-2.813 c-0.45-1.305-1.495-2.225-2.3' +
		'29-3.583c2.953,1.139,4.729,0.077,5.592-1.322c0.99-1.61,0.718-3.725-0.627-4.967 c' +
		'-1.362-1.255-3.414-1.445-4.927-0.452c-1.933,1.268-2.206,2.893-0.899,6.11c-2.098-' +
		'0.659-3.835-1.654-5.682-2.383 c-0.735-0.291-1.437-1.017-2.293-0.666c-2.263,0.927' +
		'-4.522,1.885-6.723,2.95c-1.357,0.658-1.649,1.593-1.076,2.638 c0.462,0.851,1.643,' +
		'1.126,2.806,0.617c0.993-0.433,1.994-0.857,2.951-1.374c1.599-0.86,3.044-0.873,4.6' +
		'04,0.214 c1.017,0.707,0.873,1.137,0.123,1.849c-1.701,1.615-3.516,3.12-4.933,5.00' +
		'6c-1.042,1.388-0.993,2.817,0.255,4.011 c1.538,1.471,3.148,2.869,4.708,4.315c0.48' +
		'5,0.444,0.907,0.896-0.227,1.104c-1.523,0.285-3.021,0.694-4.538,1.006 c-1.109,0.2' +
		'25-2.02,1.259-1.83,2.16c0.223,1.07,1.548,1.756,2.687,1.487c3.003-0.712,6.008-1.4' +
		'13,9.032-2.044 c1.549-0.324,2.273-1.869,1.344-3.115c-0.868-1.156-1.801-2.267-2.6' +
		'39-3.445c-1.964-2.762-1.95-2.771,0.528-5.189 c1.394-1.357,1.379-1.351,2.437,0.41' +
		'7c0.461,0.769,0.854,1.703,1.99,1.613c2.238-0.181,4.407-0.755,6.564-1.331 C43.557' +
		',30.447,43.88,29.206,43.527,28.401z',
	walk:
		'path://M29.902,23.275c1.86,0,3.368-1.506,3.368-3.365c0-1.859-1.508-3.365-3.368-3' +
		'.365 c-1.857,0-3.365,1.506-3.365,3.365C26.537,21.769,28.045,23.275,29.902,23.275' +
		'z M36.867,30.74c-1.666-0.467-3.799-1.6-4.732-4.199 c-0.932-2.6-3.131-2.998-4.797' +
		'-2.998s-7.098,3.894-7.098,3.894c-1.133,1.001-2.1,6.502-0.967,6.769 c1.133,0.269,' +
		'1.266-1.533,1.934-3.599c0.666-2.065,3.797-3.466,3.797-3.466s0.201,2.467-0.398,3.' +
		'866 c-0.599,1.399-1.133,2.866-1.467,6.198s-1.6,3.665-3.799,6.266c-2.199,2.598-0.' +
		'6,3.797,0.398,3.664 c1.002-0.133,5.865-5.598,6.398-6.998c0.533-1.397,0.668-3.732' +
		',0.668-3.732s0,0,2.199,1.867c2.199,1.865,2.332,4.6,2.998,7.73 s2.332,0.934,2.332' +
		'-0.467c0-1.401,0.269-5.465-1-7.064c-1.265-1.6-3.73-3.465-3.73-5.265s1.199-3.732,' +
		'1.199-3.732 c0.332,1.667,3.335,3.065,5.599,3.399C38.668,33.206,38.533,31.207,36.' +
		'867,30.74z'
};
chart11.setOption(
	(option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function(params) {
				return params[0].name + ': ' + params[0].value;
			}
		},
		xAxis: {
			data: [ 'Reindeer', 'Rocket', 'Aircraft', 'High Iron', 'Ship', 'Car', 'Run', 'Walk' ],
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#2AB7CA'
				}
			}
		},
		yAxis: {
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				show: false
			}
		},
		color: [ '#2AB7CA' ],
		series: [
			{
				name: 'hill',
				type: 'pictorialBar',
				barCategoryGap: '-130%',
				symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
				itemStyle: {
					normal: {
						opacity: 0.5
					},
					emphasis: {
						opacity: 1
					}
				},
				data: [ 123, 60, 25, 18, 12, 9, 2, 1 ],
				z: 10
			},
			{
				name: 'glyph',
				type: 'pictorialBar',
				barGap: '-100%',
				symbolPosition: 'end',
				symbolSize: 50,
				symbolOffset: [ 0, '-120%' ],
				data: [
					{
						value: 123,
						symbol: pathSymbols.reindeer,
						symbolSize: [ 40, 40 ]
					},
					{
						value: 60,
						symbol: pathSymbols.rocket,
						symbolSize: [ 30, 40 ]
					},
					{
						value: 25,
						symbol: pathSymbols.plane,
						symbolSize: [ 45, 15 ]
					},
					{
						value: 18,
						symbol: pathSymbols.train,
						symbolSize: [ 30, 10 ]
					},
					{
						value: 12,
						symbol: pathSymbols.ship,
						symbolSize: [ 30, 15 ]
					},
					{
						value: 9,
						symbol: pathSymbols.car,
						symbolSize: [ 20, 10 ]
					},
					{
						value: 2,
						symbol: pathSymbols.run,
						symbolSize: [ 20, 30 ]
					},
					{
						value: 1,
						symbol: pathSymbols.walk,
						symbolSize: [ 30, 30 ]
					}
				]
			}
		]
	})
);
var chart12 = echarts.init(document.getElementById('chart12'));
chart12.setOption(
	(option = {
		baseOption: {
			backgroundColor: '#403F4C',
			title: {
				text: '',
				subtext: '',
				x: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br />{b} : {c} ({d}%)'
			},
			legend: {
				x: 'center',
				y: 'bottom',
				data: [ 'Mercedes', 'BMW', 'Audi', 'Volvo', 'Subaru', 'Ford', 'Reanult', 'Toyota' ],
				itemGap: 20,
				textStyle: {
					color: '#ffd285'
				}
			},
			toolbox: {
				show: false,
				feature: {
					magicType: {
						show: true,
						type: [ 'pie', 'funnel' ]
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			color: [ '#EAC435', '#345995', '#E40066', '#03CEA4', '#FB4D3D', '#FFF', '#FA7921', '#1B998B' ],

			calculable: true,
			series: [
				{
					name: 'Radius Mode',
					type: 'pie',
					radius: [ 10, 70 ],
					center: [ '50%', 285 ],
					roseType: 'radius',
					width: '40%',
					max: 40,
					itemStyle: {
						normal: {
							label: {
								show: true
							},
							labelLine: {
								show: true,
								smooth: 0.9,
								length: 5,
								length2: 10
							},
							borderWidth: 0,
							shadowBlur: 30,
							shadowOffsetX: 0,
							shadowOffsetY: 10,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						},
						emphasis: {
							label: {
								show: true
							},
							labelLine: {
								show: true
							}
						}
					},
					data: [
						{
							value: 10,
							name: 'Mercedes'
						},
						{
							value: 5,
							name: 'BMW'
						},
						{
							value: 15,
							name: 'Audi'
						},
						{
							value: 25,
							name: 'Volvo'
						},
						{
							value: 20,
							name: 'Subaru'
						},
						{
							value: 35,
							name: 'Ford'
						},
						{
							value: 30,
							name: 'Reanult'
						},
						{
							value: 40,
							name: 'Toyota'
						}
					]
				},
				{
					name: 'Area Mode',
					type: 'pie',
					radius: [ 30, 60 ],
					center: [ '50%', 100 ],
					roseType: 'area',
					x: '50%',
					max: 40,
					sort: 'ascending',
					data: [
						{
							value: 10,
							name: 'Mercedes'
						},
						{
							value: 5,
							name: 'BMW'
						},
						{
							value: 15,
							name: 'Audi'
						},
						{
							value: 25,
							name: 'Volvo'
						},
						{
							value: 20,
							name: 'Subaru'
						},
						{
							value: 35,
							name: 'Ford'
						},
						{
							value: 30,
							name: 'Reanult'
						},
						{
							value: 40,
							name: 'Toyota'
						}
					]
				}
			]
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 480
				},
				option: {
					// write options accordingly
					series: [
						{
							
							radius: [ 8, 50 ],
							center: [ '50%', 100 ],
							
							
							
						},
						{
							
							radius: [ 10, 30 ],
							center: [ '50%', 220 ],
							
							
						}
					],
					legend: {
						
						itemGap: 5,
						
					}
				}
			}
		]
	})
);
var chart13 = echarts.init(document.getElementById('chart13'));
var placeHolderStyle = {
	normal: {
		label: {
			show: false,
			position: 'center'
		},
		labelLine: {
			show: false
		},
		color: '#dedede',
		borderColor: '#dedede',
		borderWidth: 0
	},
	emphasis: {
		color: '#dedede',
		borderColor: '#dedede',
		borderWidth: 0
	}
};
chart13.setOption(
	(option = {
		baseOption: {
			backgroundColor: '#fff',
			color: [ '#DB7093', '#fff', '#FF8C00', '#fff', '#48D1CC' ],
			legend: [
				{
					orient: '',
					icon: 'circle',
					left: 'left',
					top: 'center',
					data: [ 'Excellent', 'Score', 'Passing' ]
				}
			],

			series: [
				{
					name: 'Value',
					type: 'pie',
					clockWise: true,
					hoverAnimation: false,
					radius: [ 199, 200 ],
					itemStyle: {
						normal: {
							label: {
								show: true,
								textStyle: {
									fontSize: 20
								},
								position: 'outside'
							},
							labelLine: {
								show: true,
								length: 100,
								smooth: 0.5
							},
							borderWidth: 8,
							shadowBlur: 40,
							borderColor: '#DB7093',
							shadowColor: 'rgba(0, 0, 0, 0)'
						}
					},

					data: [
						{
							value: 7.4,
							name: 'Passing：74%'
						},
						{
							value: 2.6,
							name: '',
							itemStyle: placeHolderStyle
						}
					]
				},
				{
					name: 'White',
					type: 'pie',
					clockWise: false,
					radius: [ 180, 180 ],
					hoverAnimation: false,
					data: [
						{
							value: 1
						}
					]
				},
				{
					name: 'Value',
					type: 'pie',
					clockWise: true,
					hoverAnimation: false,
					radius: [ 159, 160 ],
					itemStyle: {
						normal: {
							label: {
								show: true,
								textStyle: {
									fontSize: 20
								}
							},
							labelLine: {
								show: true,
								length: 100,
								smooth: 0.5
							},
							borderWidth: 8,
							shadowBlur: 40,
							borderColor: '#FF8C00',
							shadowColor: 'rgba(0, 0, 0, 0)'
						}
					},

					data: [
						{
							value: 7.1,
							name: 'Score：71%'
						},
						{
							value: 2.9,
							name: '',
							itemStyle: placeHolderStyle
						}
					]
				},
				{
					name: 'White',
					type: 'pie',
					clockWise: false,
					hoverAnimation: false,
					radius: [ 140, 140 ],
					data: [
						{
							value: 1
						}
					]
				},
				{
					name: 'Value',
					type: 'pie',
					clockWise: true,
					hoverAnimation: false,
					radius: [ 119, 120 ],
					itemStyle: {
						normal: {
							label: {
								show: true,
								textStyle: {
									fontSize: 20
								}
							},
							labelLine: {
								show: true,
								length: 100,
								smooth: 0.5
							},
							borderWidth: 8,
							shadowBlur: 40,
							borderColor: '#48D1CC',
							shadowColor: 'rgba(0, 0, 0, 0)'
						}
					},

					data: [
						{
							value: 3.6,
							name: 'Excellent：36%'
						},
						{
							value: 6.4,
							name: '',
							itemStyle: placeHolderStyle
						}
					]
				},
				{
					type: 'pie',
					color: [ '#48D1CC', '#FF8C00', '	#DB7093' ],
					data: [
						{
							value: '',
							name: 'Excellent'
						},
						{
							value: '',
							name: 'Score'
						},
						{
							value: '',
							name: 'Passing'
						}
					]
				},
				{
					name: 'White',
					type: 'pie',
					clockWise: true,
					hoverAnimation: false,
					radius: [ 100, 100 ],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [
						{
							value: 1,
							label: {
								normal: {
									formatter: 'Biology Level',
									textStyle: {
										color: '#666666',
										fontSize: 26
									}
								}
							}
						},
						{
							tooltip: {
								show: false
							}
						}
					]
				}
			]
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 500
				},
				option: {
					// write options accordingly
					legend: [
						{
							orient: 'horizontal',
							icon: 'circle',
							left: 'left',
							top: 'top',
							data: [ 'Excellent', 'Score', 'Passing' ]
						}
					],
					series: [
						{
							name: 'Value',
							type: 'pie',
							clockWise: true,
							hoverAnimation: false,
							radius: [ 109, 110 ],
							itemStyle: {
								normal: {
									label: {
										show: false,
										textStyle: {
											fontSize: 20
										},
										position: 'outside'
									},
									labelLine: {
										show: false,
										length: 100,
										smooth: 0.5
									},
									borderWidth: 8,
									shadowBlur: 40,
									borderColor: '#DB7093',
									shadowColor: 'rgba(0, 0, 0, 0)'
								}
							},

							data: [
								{
									value: 7.4,
									name: 'Passing：74%'
								},
								{
									value: 2.6,
									name: '',
									itemStyle: placeHolderStyle
								}
							]
						},
						{
							name: 'White',
							type: 'pie',
							clockWise: false,
							radius: [ 90, 90 ],
							hoverAnimation: false,
							data: [
								{
									value: 1
								}
							]
						},
						{
							name: 'Value',
							type: 'pie',
							clockWise: true,
							hoverAnimation: false,
							radius: [ 69, 70 ],
							itemStyle: {
								normal: {
									label: {
										show: false,
										textStyle: {
											fontSize: 20
										}
									},
									labelLine: {
										show: false,
										length: 100,
										smooth: 0.5
									},
									borderWidth: 8,
									shadowBlur: 40,
									borderColor: '#FF8C00',
									shadowColor: 'rgba(0, 0, 0, 0)'
								}
							},

							data: [
								{
									value: 7.1,
									name: 'Score：71%'
								},
								{
									value: 2.9,
									name: '',
									itemStyle: placeHolderStyle
								}
							]
						},
						{
							name: 'White',
							type: 'pie',
							clockWise: false,
							hoverAnimation: false,
							radius: [ 50, 50 ],
							data: [
								{
									value: 1
								}
							]
						},
						{
							name: 'Value',
							type: 'pie',
							clockWise: true,
							hoverAnimation: false,
							radius: [ 29, 30 ],
							itemStyle: {
								normal: {
									label: {
										show: false,
										textStyle: {
											fontSize: 20
										}
									},
									labelLine: {
										show: false,
										length: 10,
										smooth: 0.5
									},
									borderWidth: 8,
									shadowBlur: 40,
									borderColor: '#48D1CC',
									shadowColor: 'rgba(0, 0, 0, 0)'
								}
							},

							data: [
								{
									value: 3.6,
									name: 'Excellent：36%'
								},
								{
									value: 6.4,
									name: '',
									itemStyle: placeHolderStyle
								}
							]
						},
						{
							type: 'pie',
							color: [ '#48D1CC', '#FF8C00', '	#DB7093' ],
							data: [
								{
									value: '',
									name: 'Excellent'
								},
								{
									value: '',
									name: 'Score'
								},
								{
									value: '',
									name: 'Passing'
								}
							]
						},
						{
							name: 'White',
							type: 'pie',
							clockWise: true,
							hoverAnimation: false,
							radius: [ 10, 10 ],
							label: {
								normal: {
									position: 'center'
								}
							},
							data: [
								{
									value: 1,
									label: {
										normal: {
											show: false,
											formatter: 'Biology Level',
											textStyle: {
												color: '#666666',
												fontSize: 16
											}
										}
									}
								},
								{
									tooltip: {
										show: false
									}
								}
							]
						}
					]
				}
			}
		]
	})
);
var chart14 = echarts.init(document.getElementById('chart14'));
var data = [];
for (var i = 0; i <= 200; i++) {
	var t = i / 10 * Math.PI;
	var r = Math.sin(4 * t) * Math.cos(10 * t);
	data.push([ r, i ]);
}
chart14.setOption(
	(option = {
		backgroundColor: '#fff',
		color: [ '#F9FF00' ],

		polar: {
			center: [ '50%', '54%' ]
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#403F4C',
					textStyle: {
						color: '#fff'
					}
				}
			}
		},
		angleAxis: {
			type: 'value',
			startAngle: 0,
			axisLine: {
				lineStyle: {
					color: '#403F4C'
				}
			}
		},
		radiusAxis: {
			min: 0
		},
		series: [
			{
				coordinateSystem: 'polar',
				name: 'line',
				type: 'line',
				lineStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0.1,
								color: '#48D1CC'
							},
							{
								offset: 1,
								color: '#FF8C00'
							}
						])
					}
				},
				showSymbol: false,
				data: data
			}
		],
		animationDuration: 2000
	})
);
var chart15 = echarts.init(document.getElementById('chart15'));
chart15.setOption(
	(option = {
		baseOption: {
			title: {
				text: 'Football Player',
				left: 'center',
				textStyle: {
					color: '#fff'
				}
			},
			tooltip: {},
			legend: {
				top: 20,
				itemWidth: 12,
				itemHeight: 12,
				data: [],
				textStyle: {
					color: '#fff'
				}
			},
			radar: {
				radius: '60%',
				splitNumber: 8,
				axisLine: {
					lineStyle: {
						color: '#fff',
						opacity: 0.2
					}
				},
				splitLine: {
					lineStyle: {
						color: '#fff',
						opacity: 0.2
					}
				},
				splitArea: {
					areaStyle: {
						color: 'rgba(127,95,132,.3)',
						opacity: 1,
						shadowBlur: 45,
						shadowColor: 'rgba(0,0,0,.5)',
						shadowOffsetX: 0,
						shadowOffsetY: 15
					}
				},
				indicator: [
					{
						name: 'Defence',
						max: 100
					},
					{
						name: 'Skill',
						max: 100
					},
					{
						name: 'Attack',
						max: 100
					},
					{
						name: 'Popularite',
						max: 100
					},
					{
						name: 'Balance',
						max: 100
					},
					{
						name: 'Power',
						max: 100
					},
					{
						name: 'Jump',
						max: 100
					},
					{
						name: 'Speed',
						max: 100
					},
					{
						name: 'Fitness',
						max: 100
					},
					{
						name: 'Goals',
						max: 100
					}
				]
			},
			series: [
				{
					name: 'Messi',
					type: 'radar',
					symbolSize: 0,
					areaStyle: {
						normal: {
							shadowBlur: 13,
							shadowColor: 'rgba(0,0,0,.2)',
							shadowOffsetX: 0,
							shadowOffsetY: 10,
							opacity: 1
						}
					},
					data: [
						{
							value: [ 80, 50, 70, 90, 76, 58, 66, 89, 55, 99 ],
							name: 'Real Time'
						}
					]
				},
				{
					name: 'Ronaldo',
					type: 'radar',
					symbolSize: 0,
					areaStyle: {
						normal: {
							shadowBlur: 13,
							shadowColor: 'rgba(0,0,0,.2)',
							shadowOffsetX: 0,
							shadowOffsetY: 10,
							opacity: 1
						}
					},
					data: [
						{
							value: [ 90, 75, 62, 100, 75, 45, 86, 79, 42, 29 ],
							name: ''
						}
					]
				}
			],
			color: [ '#ef4b4c', '#b1eadb' ],
			backgroundColor: {
				type: 'radial',
				x: 0.4,
				y: 0.4,
				r: 0.35,
				colorStops: [
					{
						offset: 0,
						color: '#895355'
					},
					{
						offset: 0.4,
						color: '#593640'
					},
					{
						offset: 1,
						color: '#39273d'
					}
				],
				globalCoord: false
			}
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 500
				},
				option: {
					// write options accordingly
					radar: {
						radius: '30%',
						splitNumber: 8,
						axisLine: {
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						}
					}
				}
			}
		]
	})
);
var chart16 = echarts.init(document.getElementById('chart16'));
chart16.setOption(
	(option = {
		baseOption: {
			backgroundColor: '#403F4C',
			title: {
				text: '',
				subtext: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				orient: 'vertical',
				right: 10,
				bottom: 20,
				data: [ 'Ronaldo', 'Messi' ],
				textStyle: {
					color: '#fff'
				},
				itemGap: 20
			},
			toolbox: {
				show: false,
				feature: {
					restore: {
						show: true,
						title: 'Refresh'
					},
					saveAsImage: {
						show: true,
						title: 'Save As Image'
					}
				}
			},
			color: [ '#EE4266', '#118AB2' ],

			calculable: true,
			polar: [
				{
					indicator: [
						{
							text: 'Attack',
							max: 100
						},
						{
							text: 'Defend',
							max: 100
						},
						{
							text: 'Fitness',
							max: 100
						},
						{
							text: 'Speed',
							max: 100
						},
						{
							text: 'Power',
							max: 100
						},
						{
							text: 'Skill',
							max: 100
						}
					],
					radius: 95
				}
			],
			series: [
				{
					name: 'Players fully live data',
					type: 'radar',
					itemStyle: {
						symbolSize: 0,
						normal: {
							areaStyle: {
								opacity: 0.9,
								type: 'default',
								borderWidth: 0,
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowOffsetY: 10,
								shadowColor: 'rgba(0, 0, 0, 0.9)'
							}
						}
					},
					data: [
						{
							value: [ 90, 42, 60, 70, 50, 40 ],
							name: 'Messi'
						},
						{
							value: [ 62, 90, 55, 65, 45, 35 ],
							name: 'Ronaldo'
						}
					]
				}
			]
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 500
				},
				option: {
					// write options accordingly
					radar: {
						radius: '40%',
						splitNumber: 8,
						axisLine: {
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						}
					}
				}
			}
		]
	})
);
var chart17 = echarts.init(document.getElementById('chart17'));
chart17.setOption(
	(option = {
		baseOption: {
			backgroundColor: '#403F4C',
			title: {
				text: '',
				left: 'center',
				textStyle: {
					color: '#eee'
				}
			},
			legend: {
				orient: 'vertical',
				left: 10,
				bottom: 20,
				data: [ 'Breaking Bad', 'The Walking Dead', 'Narcos' ],
				itemGap: 20,
				textStyle: {
					color: '#fff',
					fontSize: 14
				},
				selectedMode: 'single'
			},

			radar: {
				radius: 90,
				indicator: [
					{
						name: 'USA',
						max: 300
					},
					{
						name: 'England',
						max: 250
					},
					{
						name: 'Russia',
						max: 300
					},
					{
						name: 'Australia',
						max: 5
					},
					{
						name: 'China',
						max: 200
					},
					{
						name: 'Korea',
						max: 100
					}
				],

				shape: 'circle',
				splitNumber: 5,
				name: {
					textStyle: {
						color: 'rgb(238, 197, 102)'
					}
				},
				splitLine: {
					lineStyle: {
						color: [
							'rgba(238, 197, 102, 0.1)',
							'rgba(238, 197, 102, 0.2)',
							'rgba(238, 197, 102, 0.4)',
							'rgba(238, 197, 102, 0.6)',
							'rgba(238, 197, 102, 0.8)',
							'rgba(238, 197, 102, 1)'
						].reverse()
					}
				},
				splitArea: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(238, 197, 102, 0.5)'
					}
				}
			},
			series: [
				{
					name: 'Breaking Bad',
					type: 'radar',
					lineStyle: {
						normal: {
							width: 1,
							opacity: 0.5
						}
					},
					data: [
						[ 55, 9, 56, 0.46, 18, 6, 1 ],
						[ 25, 11, 21, 0.65, 34, 9, 2 ],
						[ 56, 7, 63, 0.3, 14, 5, 3 ],
						[ 33, 7, 29, 0.33, 16, 6, 4 ],
						[ 42, 24, 44, 0.76, 40, 16, 5 ],
						[ 82, 58, 90, 1.77, 68, 33, 6 ],
						[ 74, 49, 77, 1.46, 48, 27, 7 ],
						[ 78, 55, 80, 1.29, 59, 29, 8 ],
						[ 267, 216, 280, 4.8, 108, 64, 9 ],
						[ 185, 127, 216, 2.52, 61, 27, 10 ],
						[ 39, 19, 38, 0.57, 31, 15, 11 ],
						[ 41, 11, 40, 0.43, 21, 7, 12 ],
						[ 64, 38, 74, 1.04, 46, 22, 13 ],
						[ 108, 79, 120, 1.7, 75, 41, 14 ],
						[ 108, 63, 116, 1.48, 44, 26, 15 ],
						[ 33, 6, 29, 0.34, 13, 5, 16 ],
						[ 94, 66, 110, 1.54, 62, 31, 17 ],
						[ 186, 142, 192, 3.88, 93, 79, 18 ],
						[ 57, 31, 54, 0.96, 32, 14, 19 ],
						[ 22, 8, 17, 0.48, 23, 10, 20 ],
						[ 39, 15, 36, 0.61, 29, 13, 21 ],
						[ 94, 69, 114, 2.08, 73, 39, 22 ],
						[ 99, 73, 110, 2.43, 76, 48, 23 ],
						[ 31, 12, 30, 0.5, 32, 16, 24 ],
						[ 42, 27, 43, 1, 53, 22, 25 ],
						[ 154, 117, 157, 3.05, 92, 58, 26 ],
						[ 234, 185, 230, 4.09, 123, 69, 27 ],
						[ 160, 120, 186, 2.77, 91, 50, 28 ],
						[ 134, 96, 165, 2.76, 83, 41, 29 ],
						[ 52, 24, 60, 1.03, 50, 21, 30 ],
						[ 46, 5, 49, 0.28, 10, 6, 31 ]
					],
					symbol: 'none',
					itemStyle: {
						normal: {
							color: '#FFE066'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.1
						}
					}
				},
				{
					name: 'The Walking Dead',
					type: 'radar',
					lineStyle: {
						normal: {
							width: 1,
							opacity: 0.5
						}
					},
					data: [
						[ 26, 37, 27, 1.163, 27, 13, 1 ],
						[ 85, 62, 71, 1.195, 60, 8, 2 ],
						[ 78, 38, 74, 1.363, 37, 7, 3 ],
						[ 21, 21, 36, 0.634, 40, 9, 4 ],
						[ 41, 42, 46, 0.915, 81, 13, 5 ],
						[ 56, 52, 69, 1.067, 92, 16, 6 ],
						[ 64, 30, 28, 0.924, 51, 2, 7 ],
						[ 55, 48, 74, 1.236, 75, 26, 8 ],
						[ 76, 85, 113, 1.237, 114, 27, 9 ],
						[ 91, 81, 104, 1.041, 56, 40, 10 ],
						[ 84, 39, 60, 0.964, 25, 11, 11 ],
						[ 64, 51, 101, 0.862, 58, 23, 12 ],
						[ 70, 69, 120, 1.198, 65, 36, 13 ],
						[ 77, 105, 178, 2.549, 64, 16, 14 ],
						[ 109, 68, 87, 0.996, 74, 29, 15 ],
						[ 73, 68, 97, 0.905, 51, 34, 16 ],
						[ 54, 27, 47, 0.592, 53, 12, 17 ],
						[ 51, 61, 97, 0.811, 65, 19, 18 ],
						[ 91, 71, 121, 1.374, 43, 18, 19 ],
						[ 73, 102, 182, 2.787, 44, 19, 20 ],
						[ 73, 50, 76, 0.717, 31, 20, 21 ],
						[ 84, 94, 140, 2.238, 68, 18, 22 ],
						[ 93, 77, 104, 1.165, 53, 7, 23 ],
						[ 99, 130, 227, 3.97, 55, 15, 24 ],
						[ 146, 84, 139, 1.094, 40, 17, 25 ],
						[ 113, 108, 137, 1.481, 48, 15, 26 ],
						[ 81, 48, 62, 1.619, 26, 3, 27 ],
						[ 56, 48, 68, 1.336, 37, 9, 28 ],
						[ 82, 92, 174, 3.29, 0, 13, 29 ],
						[ 106, 116, 188, 3.628, 101, 16, 30 ],
						[ 118, 50, 0, 1.383, 76, 11, 31 ]
					],
					symbol: 'none',
					itemStyle: {
						normal: {
							color: '#F25F5C'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.05
						}
					}
				},
				{
					name: 'Narcos',
					type: 'radar',
					lineStyle: {
						normal: {
							width: 1,
							opacity: 0.5
						}
					},
					data: [
						[ 91, 45, 125, 0.82, 34, 23, 1 ],
						[ 65, 27, 78, 0.86, 45, 29, 2 ],
						[ 83, 60, 84, 1.09, 73, 27, 3 ],
						[ 109, 81, 121, 1.28, 68, 51, 4 ],
						[ 106, 77, 114, 1.07, 55, 51, 5 ],
						[ 109, 81, 121, 1.28, 68, 51, 6 ],
						[ 106, 77, 114, 1.07, 55, 51, 7 ],
						[ 89, 65, 78, 0.86, 51, 26, 8 ],
						[ 53, 33, 47, 0.64, 50, 17, 9 ],
						[ 80, 55, 80, 1.01, 75, 24, 10 ],
						[ 117, 81, 124, 1.03, 45, 24, 11 ],
						[ 99, 71, 142, 1.1, 62, 42, 12 ],
						[ 95, 69, 130, 1.28, 74, 50, 13 ],
						[ 116, 87, 131, 1.47, 84, 40, 14 ],
						[ 108, 80, 121, 1.3, 85, 37, 15 ],
						[ 134, 83, 167, 1.16, 57, 43, 16 ],
						[ 79, 43, 107, 1.05, 59, 37, 17 ],
						[ 71, 46, 89, 0.86, 64, 25, 18 ],
						[ 97, 71, 113, 1.17, 88, 31, 19 ],
						[ 84, 57, 91, 0.85, 55, 31, 20 ],
						[ 87, 63, 101, 0.9, 56, 41, 21 ],
						[ 104, 77, 119, 1.09, 73, 48, 22 ],
						[ 87, 62, 100, 1, 72, 28, 23 ],
						[ 168, 128, 172, 1.49, 97, 56, 24 ],
						[ 65, 45, 51, 0.74, 39, 17, 25 ],
						[ 39, 24, 38, 0.61, 47, 17, 26 ],
						[ 39, 24, 39, 0.59, 50, 19, 27 ],
						[ 93, 68, 96, 1.05, 79, 29, 28 ],
						[ 188, 143, 197, 1.66, 99, 51, 29 ],
						[ 174, 131, 174, 1.55, 108, 50, 30 ],
						[ 187, 143, 201, 1.39, 89, 53, 31 ]
					],
					symbol: 'none',
					itemStyle: {
						normal: {
							color: '#70C1B3'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.05
						}
					}
				}
			]
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 480
				},
				option: {
                    // write options accordingly
                    legend: {
                        orient: 'vertical',
                        bottom: 5,
                      
                        itemGap: 10,

                    },
					radar: {
						radius: '40%',
						splitNumber: 8,
						axisLine: {
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						}
					}
				}
			}
		]
	})
);
var chart18 = echarts.init(document.getElementById('chart18'));
var uploadedDataURL = 'assets/map/json/usa.json';
$.getJSON(uploadedDataURL, function(usaJson) {
	chart18.hideLoading();

	echarts.registerMap('USA', usaJson, {
		Alaska: {
			
			left: -131,
			top: 25,
			width: 15
		},
		Hawaii: {
			left: -110,
			top: 28,
			width: 5
		},
		'Puerto Rico': {
			left: -76,
			top: 26,
			width: 2
		}
	});
	option = {
		baseOption: {
			title: {
				text: 'USA Population Estimates',
				subtext: 'Datas are not real',
				sublink: 'http://www.census.gov/popest/data/datasets.html',
				left: 'right'
			},
			tooltip: {
				trigger: 'item',
				showDelay: 0,
				transitionDuration: 0.2,
				formatter: function(params) {
					var value = (params.value + '').split('.');
					value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
					return params.seriesName + '<br/>' + params.name + ': ' + value;
				}
			},
			visualMap: {
				left: 'right',
				min: 500000,
				max: 38000000,
				color: [ 'orangered', 'yellow', 'lightskyblue' ],
				text: [ 'High', 'Low' ], // 文本，默认为数值文本
				calculable: true
			},
			toolbox: {
				show: true,
				//orient: 'vertical',
				left: 'left',
				top: 'top',
				feature: {
					dataView: { readOnly: false },
					restore: {},
					saveAsImage: {}
				}
			},
			series: [
				{
					name: 'USA PopEstimates',
					type: 'map',
					roam: true,
					map: 'USA',
					itemStyle: {
						emphasis: { label: { show: true } }
					},
					// 文本位置修正
					textFixed: {
						Alaska: [ 20, -20 ]
					},
					data: [
						{ name: 'Alabama', value: 4822023 },
						{ name: 'Alaska', value: 731449 },
						{ name: 'Arizona', value: 6553255 },
						{ name: 'Arkansas', value: 2949131 },
						{ name: 'California', value: 38041430 },
						{ name: 'Colorado', value: 5187582 },
						{ name: 'Connecticut', value: 3590347 },
						{ name: 'Delaware', value: 917092 },
						{ name: 'District of Columbia', value: 632323 },
						{ name: 'Florida', value: 19317568 },
						{ name: 'Georgia', value: 9919945 },
						{ name: 'Hawaii', value: 1392313 },
						{ name: 'Idaho', value: 1595728 },
						{ name: 'Illinois', value: 12875255 },
						{ name: 'Indiana', value: 6537334 },
						{ name: 'Iowa', value: 3074186 },
						{ name: 'Kansas', value: 2885905 },
						{ name: 'Kentucky', value: 4380415 },
						{ name: 'Louisiana', value: 4601893 },
						{ name: 'Maine', value: 1329192 },
						{ name: 'Maryland', value: 5884563 },
						{ name: 'Massachusetts', value: 6646144 },
						{ name: 'Michigan', value: 9883360 },
						{ name: 'Minnesota', value: 5379139 },
						{ name: 'Mississippi', value: 2984926 },
						{ name: 'Missouri', value: 6021988 },
						{ name: 'Montana', value: 1005141 },
						{ name: 'Nebraska', value: 1855525 },
						{ name: 'Nevada', value: 2758931 },
						{ name: 'New Hampshire', value: 1320718 },
						{ name: 'New Jersey', value: 8864590 },
						{ name: 'New Mexico', value: 2085538 },
						{ name: 'New York', value: 19570261 },
						{ name: 'North Carolina', value: 9752073 },
						{ name: 'North Dakota', value: 699628 },
						{ name: 'Ohio', value: 11544225 },
						{ name: 'Oklahoma', value: 3814820 },
						{ name: 'Oregon', value: 3899353 },
						{ name: 'Pennsylvania', value: 12763536 },
						{ name: 'Rhode Island', value: 1050292 },
						{ name: 'South Carolina', value: 4723723 },
						{ name: 'South Dakota', value: 833354 },
						{ name: 'Tennessee', value: 6456243 },
						{ name: 'Texas', value: 26059203 },
						{ name: 'Utah', value: 2855287 },
						{ name: 'Vermont', value: 626011 },
						{ name: 'Virginia', value: 8185867 },
						{ name: 'Washington', value: 6897012 },
						{ name: 'West Virginia', value: 1855413 },
						{ name: 'Wisconsin', value: 5726398 },
						{ name: 'Wyoming', value: 576412 },
						{ name: 'Puerto Rico', value: 3667084 }
					]
				}
			]
		},
		media: [
			// each rule of media query is defined here
			{
				query: {
					maxWidth: 480
				},
				option: {
					// write options accordingly
					title: {
						top: 40,
						left: 'right',
						textStyle: {
							fontSize: '14'
						}
					},
					visualMap: {
                        orient: 'horizontal',
                        left: '-5',
					}
				}
			}
		]
	};

	chart18.setOption(option);
});
var allCharts = $('.echarts');
$(document).ready(function() {
	'use strict';
	$('.menu .item').tab();
	setTimeout(function() {
		for (var i = 0; i < allCharts.length; i++) {
			var $item = $(allCharts[i]);
			echarts.getInstanceById($item.attr('_echarts_instance_')).resize();
		}
	}, 300);
});
window.onresize = function() {
	'use strict';
	setTimeout(function() {
		for (var i = 0; i < allCharts.length; i++) {
			var $item = $(allCharts[i]);
			echarts.getInstanceById($item.attr('_echarts_instance_')).resize();
		}
	}, 300);
};
$('#sidebarCollapse').on('click', function() {
	'use strict';
	setTimeout(function() {
		for (var i = 0; i < allCharts.length; i++) {
			var $item = $(allCharts[i]);
			echarts.getInstanceById($item.attr('_echarts_instance_')).resize();
		}
	}, 300);
});
