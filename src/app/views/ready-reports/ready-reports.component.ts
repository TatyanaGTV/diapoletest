import { Component, OnInit } from '@angular/core';
import {ReportService} from "../../shared/services/report.service";



@Component({
    selector: 'app-ready-reports',
    templateUrl: './ready-reports.component.html',
    styleUrls: ['./ready-reports.component.scss'],
    standalone: false
})
export class ReadyReportsComponent implements OnInit {
  newSolution = {};
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.getReports()
      .subscribe(data => {
        this.newSolution = data
        console.log(this.newSolution)
      });
  }

}
