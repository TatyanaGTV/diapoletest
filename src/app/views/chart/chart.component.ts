import {AfterViewInit, Component} from '@angular/core';
//import {Chart} from "chart.js";
import {
  Chart,
  registerables
} from 'chart.js';
import {ChartDataResult, ChartDataService} from "../../shared/services/chart-data.service";

Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  standalone: false
})

export class ChartComponent implements AfterViewInit {
  memoryChart!: ChartDataResult;
  shulteChart!: ChartDataResult;
  constructor(private chartDataService: ChartDataService) {
  }

  /*private loadChartDataFromStorage(labelKey: string, valueKey: string): { labels: string[]; values: number[] } {
    const memoryStored = localStorage.getItem('memoryPoints');



    try {
      const parsed = memoryStored ? JSON.parse(memoryStored) : {};

      if (typeof parsed !== 'object' || Array.isArray(parsed)) {
        console.warn('Ожидался объект с ключами и значениями');
        return { labels: ['Нет данных'], values: [0] };
      }

      const labels = Object.keys(parsed).map(key => {
        // Извлекаем номер из ключа, например: "memory_count_3" → "3"
        const match = key.match(/\d+$/);
        return match ? match[0] : key;
      });
      const values = Object.values(parsed);

      return { labels, values: values.map(Number) };

    } catch (e) {
      console.error('Ошибка при чтении localStorage:', e);
      return { labels: ['Ошибка'], values: [0] };
    }
  }*/
  ngAfterViewInit(): void {
    this.memoryChart = this.chartDataService.loadFromStorage(
      'memoryPoints',
      key => key.replace('memory_count_', '')
    );

    this.shulteChart = this.chartDataService.loadFromStorage(
      'shulte',
      key => key.replace('shulte_table_', '')
    );

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    //const { labels, values } = this.loadChartDataFromStorage('1', '5');





    /* const memoryStored = localStorage.getItem('memoryPoints');
     let initialData: number[] = [];

     if (memoryStored) {
       try {
         initialData = JSON.parse(memoryStored);
       } catch (e) {
         console.warn('Ошибка чтения salesData из localStorage:', e);
       }
     }*/

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.memoryChart.labels,
        datasets: [{
          label: 'Кривая памяти',
          data: this.memoryChart.values,
          backgroundColor: 'rgb(4,14,4)',
          borderColor: 'rgba(60,141,188,1)',
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
      //  maintainAspectRatio: false,
      }
    });



    const ctx2 = document.getElementById('myChartAfter') as HTMLCanvasElement;

   // const shulteStored = localStorage.getItem('shulte');
   // let shulteData: number[] = [];

   /* if (shulteStored) {
      try {
        shulteData = JSON.parse( shulteStored);
      } catch (e) {
        console.warn('Ошибка чтения salesData из localStorage:', e);
      }
    }*/
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: this.shulteChart.labels,
        datasets: [{
          label: 'Кривая внимания',
          data: this.shulteChart.values,
          backgroundColor: 'rgb(4,14,4)',
          borderColor: 'rgb(60,86,188)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
    const ctx3 = document.getElementById('myChartCompare') as HTMLCanvasElement;

    new Chart(ctx3, {
      type: 'polarArea',
      data: {
        labels: ['Память', 'Нейродинамика', 'Кинетический', 'Кинестетический', 'Пространственный', 'Регуляторный'],
        datasets: [{
         // label: 'Память',
          data: [3, 2, 4, 4, 2,1],
          backgroundColor: [
            'rgba(156,60,188,0.9)',
            'rgb(188,60,105)',
            'rgb(122,188,60)',
            'rgb(255,227,24)',
            'rgb(39,35,218)',
            'rgb(0,255,234)'
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }


}
