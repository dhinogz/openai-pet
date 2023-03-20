import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Textdavinci003Component } from './textdavinci003/textdavinci003.component';
import { Textdavinciedit001Component } from './textdavinciedit001/textdavinciedit001.component';
import { ModerationsComponent } from './moderations/moderations.component';
import { ImagesgenerationComponent } from './imagesgeneration/imagesgeneration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Textdavinci003Service } from './services/textdavinci003.service';
import { Textdavinciedit001Service } from './services/textdavinciedit001.service';
import { ModerationsService } from './services/moderations.service';
import { ImagesgenerationService } from './services/imagesgeneration.service';

@NgModule({
  declarations: [
    AppComponent,
    Textdavinci003Component,
    Textdavinciedit001Component,
    ModerationsComponent,
    ImagesgenerationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Textdavinci003Service, 
    Textdavinciedit001Service,
    ModerationsService,
    ImagesgenerationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
