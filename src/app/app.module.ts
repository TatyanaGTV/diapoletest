import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainRaportPageComponent } from './views/main-raport-page/main-raport-page.component';
import { PointCounterComponent } from './shared/components/point-counter/point-counter.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { RaportPageComponent } from './views/raport-page/raport-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ReadyReportsComponent } from './views/ready-reports/ready-reports.component';
import {RouterModule} from "@angular/router";
import {MainPictureComponent} from "./shared/components/main-picture/main-picture.component";
import {ChartComponent} from "./views/chart/chart.component";
import {ExportToPdfComponent} from "./views/export-to-pdf/export-to-pdf.component";




@NgModule({ declarations: [
        AppComponent,
        MainRaportPageComponent,
        PointCounterComponent,
        LayoutComponent,
        MainPictureComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        RaportPageComponent,
        ReadyReportsComponent,
        ChartComponent,
        ExportToPdfComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        RouterModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
