import { Injectable } from '@angular/core';

export interface ChartDataResult {
  labels: string[];
  values: number[];
}
@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor() {}

  /**
   * Универсальная загрузка данных для Chart.js из localStorage
   */
  loadFromStorage(
    storageKey: string,
    labelMapper?: (key: string) => string
  ): ChartDataResult {

    const stored = localStorage.getItem(storageKey);

    if (!stored) {
      return { labels: ['Нет данных'], values: [0] };
    }

    try {
      const parsed = JSON.parse(stored) as Record<string, unknown>;

      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        console.warn(`Ожидался объект в localStorage: ${storageKey}`);
        return { labels: ['Нет данных'], values: [0] };
      }

      const labels = Object.keys(parsed).map(key =>
        labelMapper ? labelMapper(key) : key
      );

      const values = Object.values(parsed).map(v => Number(v) || 0);

      return { labels, values };

    } catch (e) {
      console.error(`Ошибка чтения localStorage (${storageKey})`, e);
      return { labels: ['Ошибка'], values: [0] };
    }
  }
}
