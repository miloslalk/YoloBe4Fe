import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouters } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material.module';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { DataService } from './services/data.service';
import {
  DialogOverviewExampleDialog,
  UserDashboardListComponent
} from './user-dashboard-list/user-dashboard-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FacebookModule } from 'ngx-facebook';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent,
    UserDashboardComponent,
    UserDashboardListComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    FormsModule,
    FacebookModule.forRoot()
  ],
  entryComponents: [PostDialogComponent, DialogOverviewExampleDialog],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
