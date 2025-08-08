import { useEffect } from "react";
import * as echarts from 'echarts'

const WebTrafficChart = () => {
    useEffect(() => {
        echarts.init(document.querySelector('#trafficChart')).setOption({
            tooltip: {
                trigger: 'item'
            },

            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18'
                        }
                    }
                }
            ]
        })
    })

    return(
        <div></div>
    )
}

export default WebTrafficChart;