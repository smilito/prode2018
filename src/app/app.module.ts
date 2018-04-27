import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatInputModule, MatCardModule, MatAutocompleteModule, MatRadioModule, MatButtonModule, MatListModule,
  MatSelectModule, MatSlideToggleModule, MatButtonToggleModule, MatTooltipModule, MatChipsModule, MatIconModule,
  MatCheckboxModule, MatDatepickerModule, MatTabsModule, MatDialogModule, MatRippleModule, MatTableModule,
  MatPaginatorModule, MatMenuModule, MatSnackBarModule, MatExpansionModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { TestPageComponent } from './components/testpage/testpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRouting,
    FormsModule,
    CdkTableModule,
    MatInputModule, MatCardModule, MatAutocompleteModule, MatRadioModule, MatButtonModule, MatListModule,
    MatSelectModule, MatSlideToggleModule, MatButtonToggleModule, MatTooltipModule, MatChipsModule, MatIconModule,
    MatCheckboxModule, MatDatepickerModule, MatTabsModule, MatDialogModule, MatRippleModule, MatTableModule,
    MatPaginatorModule, MatMenuModule, MatSnackBarModule, MatExpansionModule, MatSidenavModule, MatToolbarModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
