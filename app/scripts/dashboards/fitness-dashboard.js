var fitnessChart1 = echarts.init(document.getElementById('fitness-chart-1'));

var fitnessChart2 = echarts.init(document.getElementById('fitness-chart-2'));
var fitnessChart3 = echarts.init(document.getElementById('fitness-chart-3'));

var fitnessChart4 = echarts.init(document.getElementById('fitness-chart-4'));

var fitnessChart5 = echarts.init(document.getElementById('fitness-chart-5'));
var fitnessChart6 = echarts.init(document.getElementById('fitness-chart-6'));
var fitnessChart7 = echarts.init(document.getElementById('fitness-chart-7'));
var fitnessChart8 = echarts.init(document.getElementById('fitness-chart-8'));
var fitnessChart9 = echarts.init(document.getElementById('fitness-chart-9'));

var dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		shadowBlur: 20,
		shadowColor: 'rgba(40, 40, 40, 0.5)'
	}
};
var placeHolderStyle = {
	normal: {
		color: 'rgba(0,0,0,0)',
		label: {
			show: false
		},
		labelLine: {
			show: false
		}
	},
	emphasis: {
		color: 'rgba(44,59,70,1)'
	}
};
var glassImg = 'assets/img/fitness/water.svg';
var stepsImg = 'assets/img/fitness/runner.svg';
var clockImg = 'assets/img/fitness/stopwatch.svg';
var baskulImg = 'assets/img/fitness/diet.svg';
var FF = !(window.mozInnerScreenX == null);
if(FF) {
    // is firefox 
    glassImg = 'assets/img/fitness/water.png';
    stepsImg = 'assets/img/fitness/runner.png';
    clockImg = 'assets/img/fitness/stopwatch.png';
    baskulImg = 'assets/img/fitness/diet.png';
} else { 
    // not firefox 
    glassImg = 'assets/img/fitness/water.svg';
    stepsImg = 'assets/img/fitness/runner.svg';
    clockImg = 'assets/img/fitness/stopwatch.svg';
    baskulImg = 'assets/img/fitness/diet.svg';
}


fitnessChart1.setOption({
	title: {
		text: '3625',
		x: 'center',
		subtext: 'Steps',
		y: '50%',
		textStyle: {
			fontWeight: 'normal',
			color: '#fff',
			fontSize: 30
		},
		subtextStyle: {
			fontWeight: 'normal',
			color: '#fff',
			fontSize: 15
		}
	},
	textStyle: {
		fontFamily: 'Poppins',
		fontWeight: '500'
	},
	graphic: {
		elements: [
			{
				type: 'image',
				z: 3,
				style: {
					image: stepsImg,
					width: 70,
					height: 70,
					fill: '#fff',
					stroke: '#fff'
				},
				left: 'center',
				top: '27%'
			}
		]
	},

	tooltip: {
		show: false,
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	legend: {
		show: false,
		itemGap: 12,
		data: [ '01', '02' ]
	},
	toolbox: {
		show: false,
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	series: [
		{
			type: 'pie',

			radius: [ 0, '80%' ],
			label: {
				normal: {
					show: false
				}
			},
			center: [ '50%', '50%' ],
			data: [
				{
					value: 1,
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 1,
										color: '#00b5ad' // 0% 处的颜色
									},
									{
										offset: 0,
										color: '#2193b0' // 100% 处的颜色
									}
								],
								false
							),
							shadowBlur: 10,
							shadowColor: 'rgba(0, 0, 0, 0.25)'
						}
					}
				}
			],
			animationType: 'scale'
		},
		{
			name: 'Line 2',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '50%', '85%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 50,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,1)'
						},
						emphasis: {
							color: '#FEE06C'
						}
					}
				},
				{
					value: 50,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}
			]
		},
		{
			name: 'Line 3',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '100%', '99%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 360,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,0.5)'
						}
					}
				}
			]
		},
		{
			name: 'Line 4',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '95%', '94%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 360,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,0.3)'
						}
					}
				}
			]
		}
	]
});
fitnessChart2.setOption({
	title: {
		text: '2750',
		x: 'center',
		subtext: 'Mililiter',
		y: '50%',
		textStyle: {
			fontWeight: 'normal',
			color: '#fff',
			fontSize: 30
		},
		subtextStyle: {
			fontWeight: 'normal',
			color: '#fff',
			fontSize: 15
		}
	},
	textStyle: {
		fontFamily: 'Poppins',
		fontWeight: '500'
	},
	graphic: {
		elements: [
			{
				type: 'image',
				z: 3,
				style: {
					image: glassImg,
					width: 70,
					height: 70
				},
				left: 'center',
				top: '27%'
			}
		]
	},

	tooltip: {
		show: false,
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	legend: {
		show: false,
		itemGap: 12,
		data: [ '01', '02' ]
	},
	toolbox: {
		show: false,
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	series: [
		{
			type: 'pie',

			radius: [ 0, '80%' ],
			label: {
				normal: {
					show: false
				}
			},
			center: [ '50%', '50%' ],
			data: [
				{
					value: 1,
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 1,
										color: '#00b5ad' // 0% 处的颜色
									},
									{
										offset: 0,
										color: '#2193b0' // 100% 处的颜色
									}
								],
								false
							),
							shadowBlur: 10,
							shadowColor: 'rgba(0, 0, 0, 0.25)'
						}
					}
				}
			],
			animationType: 'scale'
		},
		{
			name: 'Line 2',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '50%', '85%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 80,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,1)'
						},
						emphasis: {
							color: '#FEE06C'
						}
					}
				},
				{
					value: 20,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}
			]
		},
		{
			name: 'Line 3',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '100%', '99%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 360,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,0.5)'
						}
					}
				}
			]
		},
		{
			name: 'Line 4',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '95%', '94%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 360,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,0.3)'
						}
					}
				}
			]
		}
	]
});
fitnessChart3.setOption({
	title: {
		text: '6.23',
		x: 'center',
		subtext: 'Hours',
		y: '50%',
		textStyle: {
			fontWeight: 'normal',
			color: '#fff',
			fontSize: 30
		},
		subtextStyle: {
			fontWeight: 'normal',
			color: '#fff',
			fontSize: 15
		}
	},
	textStyle: {
		fontFamily: 'Poppins',
		fontWeight: '500'
	},
	graphic: {
		elements: [
			{
				type: 'image',
				z: 3,
				style: {
					image: clockImg,
					width: 70,
					height: 70
				},
				left: 'center',
				top: '27%'
			}
		]
	},

	tooltip: {
		show: false,
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	legend: {
		show: false,
		itemGap: 12,
		data: [ '01', '02' ]
	},
	toolbox: {
		show: false,
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	series: [
		{
			type: 'pie',

			radius: [ 0, '80%' ],
			label: {
				normal: {
					show: false
				}
			},
			center: [ '50%', '50%' ],
			data: [
				{
					value: 1,
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 1,
										color: '#00b5ad' // 0% 处的颜色
									},
									{
										offset: 0,
										color: '#2193b0' // 100% 处的颜色
									}
								],
								false
							),
							shadowBlur: 10,
							shadowColor: 'rgba(0, 0, 0, 0.25)'
						}
					}
				}
			],
			animationType: 'scale'
		},
		{
			name: 'Line 2',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '50%', '85%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 85,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,1)'
						},
						emphasis: {
							color: '#FEE06C'
						}
					}
				},
				{
					value: 15,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}
			]
		},
		{
			name: 'Line 3',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '100%', '99%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 360,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,0.5)'
						}
					}
				}
			]
		},
		{
			name: 'Line 4',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '95%', '94%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 360,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,0.3)'
						}
					}
				}
			]
		}
	]
});

fitnessChart4.setOption({
	xAxis: {
		type: 'category',
		data: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ],
		boundaryGap: false,
		show: false
	},
	yAxis: {
		type: 'value',
		show: false
	},

	title: {
		text: '65.4 kg',
		x: 'center',
		subtext: '',
		y: '50%',
		textStyle: {
			fontWeight: 'normal',
			color: '#fff',
			fontSize: 30
		},
		subtextStyle: {
			fontWeight: 'normal',
			color: '#fff',
			fontSize: 15
		}
	},
	grid: {
		top: '64%',
		left: 'center',
		bottom: '26%',
		right: 0,
		containLabel: false
	},
	textStyle: {
		fontFamily: 'Poppins',
		fontWeight: '500'
	},
	graphic: {
		elements: [
			{
				type: 'image',
				z: 3,
				style: {
					image: baskulImg,
					width: 70,
					height: 70
				},
				left: 'center',
				top: '27%'
			}
		]
	},

	tooltip: {
		show: false,
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	legend: {
		show: false,
		itemGap: 12,
		data: [ '01', '02' ]
	},
	toolbox: {
		show: false,
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	series: [
		{
			type: 'pie',

			radius: [ 0, '80%' ],
			label: {
				normal: {
					show: false
				}
			},
			center: [ '50%', '50%' ],
			data: [
				{
					value: 1,
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 1,
										color: '#00b5ad' // 0% 处的颜色
									},
									{
										offset: 0,
										color: '#2193b0' // 100% 处的颜色
									}
								],
								false
							),
							shadowBlur: 10,
							shadowColor: 'rgba(0, 0, 0, 0.25)'
						}
					}
				}
			],
			animationType: 'scale'
		},
		{
			name: 'Line 2',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '50%', '85%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 62,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,1)'
						},
						emphasis: {
							color: '#FEE06C'
						}
					}
				},
				{
					value: 38,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}
			]
		},
		{
			name: 'Line 3',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '100%', '99%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 360,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,0.5)'
						}
					}
				}
			]
		},
		{
			name: 'Line 4',
			type: 'pie',
			animation: false,
			clockWise: true,
			radius: [ '95%', '94%' ],
			itemStyle: dataStyle,
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			z: 1,
			data: [
				{
					value: 360,
					name: '02',
					itemStyle: {
						normal: {
							color: 'rgba(115,134,213,0.3)'
						}
					}
				}
			]
		},
		{
			name: '01',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					color: 'rgba(115,134,213,1)'
				}
			},
			lineStyle: {
				normal: {
					color: '#fff'
				}
			},
			z: 10,
			data: [ 3, 3, 2, 3, 1, 2, 3, 2, 3, 1, 3, 2, 3, 2, 3 ]
		}
	]
});
fitnessChart5.setOption({
	color: [ '#00b5ad', '#7D62F3', '#FEE06C' ],
	textStyle: {
		fontFamily: 'Poppins',
		fontWeight: '500'
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			label: {
				backgroundColor: '#6a7985'
			}
		}
	},
	legend: {
		orient: 'vertical',
		left: '2%',
		data: [
			{
				name: 'Tracking',
				icon: 'circle'
			},
			{
				name: 'Walking',
				icon: 'circle'
			},
			{
				name: 'Run',
				icon: 'circle'
			}
		],
		textStyle: {
			color: '#7d94b6',
			fontSize: 16
		}
	},

	grid: {
		left: '0',
		right: '0',
		bottom: '0',
		containLabel: false
	},
	xAxis: [
		{
			show: false,
			type: 'category',
			boundaryGap: false,
			data: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16' ]
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
			name: 'Walking',
			type: 'line',
			stack: 'Stack',
			smooth: true,
			symbolSize: 0,
			areaStyle: {
				normal: {
					opacity: 1,
					shadowBlur: 20,
					shadowColor: 'rgba(0, 0, 0, 0.8)'
				}
			},
			lineStyle: {
				normal: {
					width: 0
				}
			},
			data: [ 120, 132, 135, 124, 120, 130, 140, 160, 130, 120, 140, 117, 124, 135, 146, 155 ]
		},
		{
			name: 'Run',
			type: 'line',
			stack: 'Stack',
			symbolSize: 0,
			smooth: true,
			lineStyle: {
				normal: {
					width: 0
				}
			},

			areaStyle: {
				normal: {
					opacity: 1,
					shadowBlur: 20,
					shadowColor: 'rgba(0, 0, 0, 0.8)'
				}
			},
			data: [ 120, 110, 100, 110, 150, 140, 160, 130, 155, 114, 135, 133, 168, 114, 151, 146 ]
		},
		{
			name: 'Tracking',
			type: 'line',
			stack: 'Stack',
			symbolSize: 0,
			smooth: true,
			lineStyle: {
				normal: {
					width: 0
				}
			},
			areaStyle: {
				normal: {
					opacity: 1,
					shadowBlur: 20,
					shadowColor: 'rgba(0, 0, 0, 0.8)'
				}
			},
			data: [ 150, 180, 175, 160, 175, 165, 152, 125, 154, 148, 122, 165, 140, 117, 175, 145 ]
		}
	]
});

var values = [
	{
		value: 8000,
		itemStyle: {
			normal: {
				color: '#00b5ad',
				barBorderRadius: [ 5, 5, 0, 0 ]
			}
		}
	},
	{
		value: 14000,
		itemStyle: {
			normal: {
				color: '#7D62F3',
				barBorderRadius: [ 5, 5, 0, 0 ]
			}
		}
	},
	{
		value: 21643,
		itemStyle: {
			normal: {
				color: '#FEE06C',
				barBorderRadius: [ 5, 5, 0, 0 ],
				label: {
					show: true,
					position: 'top',
					formatter: 'Record \n{b}\n{c} Steps',
					color: '#7d94b6',
					fontSize: 18,
					backgroundColor: 'rgba(254,224,128,01)',
					padding: 15
				}
			}
		}
	},
	{
		value: 7500,
		itemStyle: {
			normal: {
				color: '#00b5ad',
				barBorderRadius: [ 5, 5, 0, 0 ]
			}
		}
	},
	{
		value: 7800,
		itemStyle: {
			normal: {
				color: '#00b5ad',
				barBorderRadius: [ 5, 5, 0, 0 ]
			}
		}
	},
	{
		value: 12500,
		itemStyle: {
			normal: {
				color: '#7D62F3',
				barBorderRadius: [ 5, 5, 0, 0 ]
			}
		}
	},
	{
		value: 8245,
		itemStyle: {
			normal: {
				color: '#00b5ad',
				barBorderRadius: [ 5, 5, 0, 0 ]
			}
		}
	}
];
var color = [ 'pink', '#a2f2f2', '#0aacff', '#0ab120', '#e50ee6', '#e6cf1e' ];
fitnessChart6.setOption({
	baseOption: {
		color: color,
		textStyle: {
			fontFamily: 'Poppins',
			fontWeight: '500'
		},
		tooltip: {},
		grid: {
			top: '10%',
			left: '12%',
			right: '5%',
			bottom: '15%'
		},
		xAxis: {
			data: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				interval: 0,
				splitNumber: 10,
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

			max: '25000',
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
					left: '12%',
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
		},
		{
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
					left: '22%',
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
fitnessChart7.setOption({
	title: {
		text: ''
	},
	textStyle: {
		fontFamily: 'Poppins',
		fontWeight: '500'
	},
	tooltip: {},
	legend: {
		top: 20,
		itemWidth: 12,
		itemHeight: 12,
		data: [ 'Run', 'Walk', 'Tracking' ],
		textStyle: {
			color: '#7d94b6'
		}
	},
	radar: {
		radius: '70%',
		center: [ 'center', '60%' ],
		splitNumber: 8,
		axisLine: {
			lineStyle: {
				color: '#7d94b6',
				opacity: '.2'
			}
		},
		splitLine: {
			lineStyle: {
				color: '#7d94b6',
				opacity: '.2'
			}
		},
		splitArea: {
			areaStyle: {
				color: 'rgba(125,148,182,.3)',
				opacity: 1,
				shadowBlur: 20,
				shadowColor: 'rgba(0,0,0,.5)',
				shadowOffsetX: 0,
				shadowOffsetY: 15
			}
		},
		indicator: [
			{
				name: 'Sunday',
				max: 500
			},
			{
				name: 'Monday',
				max: 500
			},
			{
				name: 'Tuesday',
				max: 500
			},
			{
				name: 'Wednesday',
				max: 500
			},
			{
				name: 'Thursday',
				max: 500
			},
			{
				name: 'Friday',
				max: 500
			},
			{
				name: 'Saturday',
				max: 500
			}
		]
	},
	series: [
		{
			name: '',
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
					value: [ 320, 300, 395, 310, 315, 325, 340, 360, 300, 355, 290, 317 ],
					name: 'Run'
				},
				{
					value: [ 289, 356, 120, 160, 235, 363, 258, 269, 126, 246, 355, 466 ],
					name: 'Walk'
				},
				{
					value: [ 480, 250, 135, 180, 123, 236, 158, 369, 226, 146, 255, 166 ],
					name: 'Tracking'
				}
			]
		}
	],
	color: [ '#7D62F3', '#FEE06C', '#00b5ad' ]
});
fitnessChart8.setOption({
	baseOption: {
		title: {
			text: '',
			subtext: '',
			x: 'center'
		},
		textStyle: {
			fontFamily: 'Poppins',
			fontWeight: '500'
		},
		color: [ '#7D62F3', '#FEE06C', '#00b5ad' ],

		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		legend: {
			x: 'center',
			y: 'bottom',
			data: [ 'Walk', 'Run', 'Tracking', 'Swim', 'Yoga', 'Plates' ]
		},
		calculable: true,
		series: [
			{
				name: '',
				type: 'pie',
				radius: [ 90, 110 ],
				center: [ '50%', '50%' ],
				roseType: 'area',
				data: [
					{
						value: 10,
						name: 'Walk'
					},
					{
						value: 5,
						name: 'Run'
					},
					{
						value: 30,
						name: 'Tracking'
					},
					{
						value: 24,
						name: 'Swim'
					},
					{
						value: 12,
						name: 'Yoga'
					},
					{
						value: 31,
						name: 'Plates'
					}
				]
			}
		]
	},
	media: [
		{
			query: {
				minAspectRatio: 1
			},
			option: {
				series: [
					{
						name: '',
						type: 'pie',
						radius: [ 90, 110 ],
						center: [ '50%', '50%' ]
					}
				]
			}
		},
		{
			query: {
				maxWidth: 500
			},
			option: {
				series: [
					{
						name: '',
						type: 'pie',
						radius: [ 20, 110 ],
						center: [ '50%', '50%' ]
					}
				]
			}
		}
	]
});
fitnessChart9.setOption({
	color: [ '#7D62F3', '#FEE06C', '#00b5ad' ],
	textStyle: {
		fontFamily: 'Poppins',
		fontWeight: '500'
	},
	angleAxis: {
		type: 'category',
		data: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
		z: 10,
		splitLine: {
			show: true
		},
		axisLine: {
			lineStyle: {
				color: '#7d94b6'
			}
		},
		axisTick: {
			lineStyle: {
				color: '#7d94b6'
			}
		},
		axisLabel: {
			lineStyle: {
				color: '#7d94b6'
			}
		}
	},
	radiusAxis: {
		show: true,
		axisLabel: {
			show: false
		},
		axisTick: {
			show: false
		}
	},

	polar: {},
	series: [
		{
			type: 'bar',
			data: [ 1, 2, 3, 4, 3, 5, 1 ],
			coordinateSystem: 'polar',
			name: 'Run',
			stack: 'a'
		},
		{
			type: 'bar',
			data: [ 2, 4, 6, 1, 3, 2, 1 ],
			coordinateSystem: 'polar',
			name: 'Walk',
			stack: 'a'
		},
		{
			type: 'bar',
			data: [ 1, 2, 3, 4, 1, 2, 5 ],
			coordinateSystem: 'polar',
			name: 'Tracking',
			stack: 'a'
		}
	],
	legend: {
		show: true,
		data: [ 'Run', 'Walk', 'Tracking' ]
	}
});
