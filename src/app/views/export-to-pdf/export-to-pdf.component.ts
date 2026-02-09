import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import {RaportPageComponent} from "../raport-page/raport-page.component";

@Component({
  selector: 'app-export-to-pdf',
  templateUrl: './export-to-pdf.component.html',
  styleUrl: './export-to-pdf.component.scss',
  standalone: false
})
export class ExportToPdfComponent implements AfterViewInit  {
  @ViewChild(RaportPageComponent) child!: RaportPageComponent;

  ngAfterViewInit(): void {
    this.child.exportPdf();
  }
}

