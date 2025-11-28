import { PieChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

echarts.use([PieChart, CanvasRenderer]);

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  // Select all elements with the "counter" class
  const counters = [...document.querySelectorAll('[counter]')] as HTMLElement[];
  ///pie chart
  const pieChartWrap = [...document.querySelectorAll('[pie-wrapper]')] as HTMLElement[];

  console.log(pieChartWrap[0]);

  function scrollFunction() {
    counters.forEach((counter: HTMLElement) => {
      // Retrieve the target value and suffix from attributes
      const targetValue = parseInt(counter.getAttribute('data-target') || '0'); // Default to 0 if no target value is specified
      const suffix = counter.getAttribute('data-suffix') || ''; // Default to empty string if no suffix
      const prefix = counter.getAttribute('data-prefix') || ''; // Default to empty string if no prefix

      // GSAP animation
      gsap.to(
        { count: 0 },
        {
          count: targetValue,
          duration: 3, // Duration in seconds
          ease: 'power1.out',
          onUpdate: function () {
            // Format the current count with commas and append the suffix
            counter.textContent = `${prefix}${Math.floor(
              this.targets()[0].count
            ).toLocaleString()}${suffix}`;
          },
          onComplete: function () {
            // Ensure the final value is formatted properly with the suffix
            counter.textContent = `${prefix}${targetValue.toLocaleString()}${suffix}`;
          },
        }
      );
    });
  }

  //iniitalize pie chart
  //   pieChartWrap.forEach((pieChartWrap: HTMLElement) => {
  //     plotPieChart(pieChartWrap, 95, 5, '#1b31da');
  //   });

  //monitor a section
  const triggerSect = [...document.querySelectorAll('[cta--section]')] as HTMLElement[];

  //create a scrollTrigger for each section
  triggerSect.forEach((triggerSect: HTMLElement, i) => {
    const triggerSectTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerSect,
        start: 'top 75%',
        end: 'bottom 75%',
        onEnter: () => {
          scrollFunction();
          plotPieChart(pieChartWrap[i], 99, 1, '#1b31da');
        },
      },
    });
  });

  function plotPieChart(chartwrap: HTMLElement, value1: number, value2: number, color: string) {
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
  }
});
