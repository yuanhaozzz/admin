
import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';

import './dashboard.css'

const { Meta } = Card;
// 引入 ECharts 主模块
// 引入柱状图
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
// 基于准备好的dom，初始化echarts实例

var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}


var echarts = require('echarts/lib/echarts');

var myChart = null
var bar = null

class Dashboard extends Component {

    componentDidMount() {
        myChart = echarts.init(document.querySelector('.dashboard-charts-line'));
        // 绘制图表
        myChart.setOption({
            grid: {
                top: '4%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            },
            yAxis: {
                type: 'value',
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {},
                itemStyle: {
                    normal: {
                        color: '#7571f9',
                        lineStyle: {
                            color: '#7571f9'
                        }
                    }
                }
            }]
        });

        bar = echarts.init(document.querySelector('.dashboard-charts-bar'));
        bar.setOption(
            {
                grid: {
                    top: '4%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            }
        )
    }

    render() {
        return (
            <div className="dashboard">
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="访问量">
                                <div className="dashboard-charts-line"></div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="访问量">
                                <div className="dashboard-charts-bar"></div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Dashboard