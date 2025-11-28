export const plotPieChart = function (
  chartwrap: HTMLElement,
  value1: number,
  value2: number,
  color: string
) {
  const chartInstance = echarts.init(chartwrap);

  chartInstance.setOption({
    //tooltip: {},
    series: [
      {
        type: 'pie',
        radius: ['75%', '100%'],
        animationDuration: 1500,
        avoidLabelOverlap: false,
        tooltip: { enabled: false },
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          disabled: true,
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        data: [
          {
            value: value1,
            // name: 'Overall',
            itemStyle: {
              borderRadius: 20,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: color,
                },
                {
                  offset: 1,
                  color: color,
                },
              ]),
            },
            areaStyle: { opacity: 0.2, color: 'green' },
          },
          { value: value2, itemStyle: { color: 'transparent' } },
        ],
      },
    ],
  });
};
