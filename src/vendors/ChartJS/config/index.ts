//Area chart config
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        callback: (tick: number | string) => {
          if (+tick >= 1000) {
            return '$' + (+tick / 1000).toFixed(1) + 'K';
          }
          return '$' + tick;
        },
      },
      border: {
        display: false,
        dash: [6, 6],
      },
      grid: {
        color: 'rgba(158, 158, 158, .6)',
      },
    },
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
    tooltip: {},

    title: {
      display: false,
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const areaChartData = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => Math.random() * 100),
      borderColor: '#FF7100',
      backgroundColor: 'rgba(255, 113, 0, .2)',
      pointBackgroundColor: 'rgba(255, 113, 0, 1)',
      pointBorderColor: 'rgba(255, 113, 0, 1)',
      pointBorderWidth: 5,
      pointStyle: 'rect',
    },
  ],
};
