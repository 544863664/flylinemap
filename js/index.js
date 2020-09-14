// 基于准备好的dom，初始化echarts实例
var chart = echarts.init(document.getElementById('main'));

var option = {
	"backgroundColor": "#123456",
	"color": ["#fc5353", "#f4fc6c", "#e68b55", "#9a68ff", "#ff60c5"],
	"visualMap": {
		"min": 1000,
		"max": 5000,
		"calculable": true,
		"right": "5%",
		"bottom": "5%",
		"zlevel": 10,
		"textStyle": {
			"color": "#fff"
		}
	},
	"tooltip": {
		"trigger": "item"
	},
	"legend": {
		"orient": "horizontal",
		"left": "27%",
		"top": "5%",
		"data": ["高线"],
		"textStyle": {
			"color": "#ffffff"
		},
		"icon": "circle"
	},
	"geo": {
		"map": "china",
		"zlevel": 10,
		"layoutCenter": ["50%", "50%"],
		"roam": false, // 鼠标控制拖拽，滚轮缩放
		"layoutSize": "100%",
		"zoom": 1,
		"label": {
			"normal": {
				"show": true, // 显示个省份名称
				"textStyle": {
					"fontSize": 12,
					"color": "#43D0D6"
				}
			},
			"emphasis": {
				"show": false
			}
		},
		"itemStyle": {
			"normal": {
				"color": "#062031",
				"borderWidth": 1.1,
				"borderColor": "#43D0D6"
			},
			"emphasis": {
				"areaColor": "#43D0D6"
			}
		}
	},
	"series": [{
		"name": "北京车间",
		"type": "scatter",
		"zlevel": 20,
		"color": "#f00",
		"coordinateSystem": "geo",
		"symbolSize": 10,
		"itemStyle": {
			"normal": {
				"color": "#f00"
			}
		}
	}, {
		// 飞线数据
		"type": "lines",
		"zlevel": 15,
		"effect": {
			"show": true,
			"period": 4,
			"trailLength": 0,
			"symbol": "arrow",
			"symbolSize": 7
		},
		"lineStyle": {
			"normal": {
				"width": 1.5,
				"opacity": 0.6,
				"curveness": 0.2,
				"color": "#F19000"
			}
		},
		"data": [{
			"fromName": "北京",
			"toName": "乌鲁木齐",
			"coords": [
				[116.413384, 39.910925],
				[87.62444, 43.830763]
			],
			"value": "北京--乌鲁木齐"
		}, {
			"fromName": "北京",
			"toName": "西宁",
			"coords": [
				[116.413384, 39.910925],
				[101.78443, 36.623393]
			]
		}, {
			"fromName": "北京",
			"toName": "兰州",
			"coords": [
				[116.413384, 39.910925],
				[103.84044, 36.067321]
			]
		}, {
			"fromName": "西安",
			"toName": "银川",
			"coords": [
				[108.946466, 34.347269],
				[106.258602, 38.487834]
			]
		}, {
			"fromName": "西安",
			"toName": "包头",
			"coords": [
				[108.946466, 34.347269],
				[109.846544, 40.662929]
			]
		}, {
			"fromName": "北京",
			"toName": "太原",
			"coords": [
				[116.413384, 39.910925],
				[112.534919, 37.873219]
			]
		}, {
			"fromName": "西安",
			"toName": "拉萨",
			"coords": [
				[108.946466, 34.347269],
				[91.120789, 29.65005]
			]
		}, {
			"fromName": "广州",
			"toName": "成都",
			"coords": [
				[113.271431, 23.135336],
				[104.081534, 30.655822]
			]
		}, {
			"fromName": "北京",
			"toName": "重庆",
			"coords": [
				[116.413384, 39.910925],
				[106.558434, 29.568996]
			]
		}, {
			"fromName": "北京",
			"toName": "西安",
			"coords": [
				[116.413384, 39.910925],
				[108.946466, 34.347269]
			]
		}, {
			"fromName": "北京",
			"toName": "贵阳",
			"coords": [
				[116.413384, 39.910925],
				[106.636577, 26.653325]
			]
		}, {
			"fromName": "北京",
			"toName": "广州",
			"coords": [
				[116.413384, 39.910925],
				[113.271431, 23.135336]
			]
		}, {
			"fromName": "西安",
			"toName": "长沙",
			"coords": [
				[108.946466, 34.347269],
				[112.945473, 28.234889]
			]
		}]
	}, {
		"type": "effectScatter",
		"coordinateSystem": "geo",
		"zlevel": 15,
		"rippleEffect": {
			"period": 4,
			"brushType": "stroke",
			"scale": 4
		},
		"symbol": "circle",
		"itemStyle": {
			"normal": {
				"show": true
			}
		},
		"tooltip": {
			"show": true,
			"formatter": "北京车间"
		},
		"data": [{
			"name": "北京车间",
			"value": [116.413384, 39.910925, "北京车间"]
		}]
	}, {
		"type": "effectScatter",
		"coordinateSystem": "geo",
		"rippleEffect": {
			"period": 4,
			"brushType": "stroke",
			"scale": 4
		},
		"zlevel": 15,
		"label": {
			"normal": {
				"show": false
			}
		},
		"tooltip": {
			"show": true
		},
		"symbol": "circle",
		"symbolSize": 10,
		"itemStyle": {
			"normal": {
				"color": "#F19000"
			}
		},
		"data": [{
			"name": "乌鲁木齐",
			"value": [87.62444, 43.830763, "乌鲁木齐"],
			"tooltip": {
				"formatter": "乌鲁木齐车间"
			}
		}, {
			"name": "西宁",
			"value": [101.78443, 36.623393, "西宁"],
			"tooltip": {
				"formatter": "西宁车间"
			}
		}, {
			"name": "兰州",
			"value": [103.84044, 36.067321, "兰州"],
			"tooltip": {
				"formatter": "兰州车间"
			}
		}, {
			"name": "银川",
			"value": [106.258602, 38.487834, "银川"],
			"tooltip": {
				"formatter": "银川车间"
			}
		}, {
			"name": "包头",
			"value": [109.846544, 40.662929, "包头"],
			"tooltip": {
				"formatter": "包头车间"
			}
		}, {
			"name": "太原",
			"value": [112.534919, 37.873219, "太原"],
			"tooltip": {
				"formatter": "太原车间"
			}
		}, {
			"name": "拉萨",
			"value": [91.120789, 29.65005, "拉萨"],
			"tooltip": {
				"formatter": "拉萨车间"
			}
		}, {
			"name": "成都",
			"value": [104.081534, 30.655822, "成都"],
			"tooltip": {
				"formatter": "成都车间"
			}
		}, {
			"name": "重庆",
			"value": [106.558434, 29.568996, "重庆"],
			"tooltip": {
				"formatter": "重庆车间"
			}
		}, {
			"name": "西安",
			"value": [108.946466, 34.347269, "西安"],
			"tooltip": {
				"formatter": "西安车间"
			}
		}, {
			"name": "贵阳",
			"value": [106.636577, 26.653325, "贵阳"],
			"tooltip": {
				"formatter": "贵阳车间"
			}
		}, {
			"name": "广州",
			"value": [113.271431, 23.135336, "广州"],
			"tooltip": {
				"formatter": "广州车间"
			}
		}, {
			"name": "长沙",
			"value": [112.945473, 28.234889, "长沙"],
			"tooltip": {
				"formatter": "长沙车间"
			}
		}]
	}]
};
chart.setOption(option);
chart.on('click', function(params) {
	console.log('这是地图点击事件~~~', params);
});
