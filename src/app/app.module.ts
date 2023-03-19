import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import {StyleDirective} from "src/app/directives/style.directive";
import {MultPipe} from "src/app/pipes/mult.pipe";
import {FilterPipe} from "src/app/pipes/sort.pipe";
import {PostComponent} from "src/app/post/post.component";
import {CounterService} from "src/app/services/counter.service";

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { IfnotDirective } from './directives/ifnot.directive';
import { TrainComponent } from './traning/train/train.component';
import { RxComponent } from './rx/rx.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
      AppComponent,
    PostComponent,
    PostFormComponent,
    StyleDirective,
    IfnotDirective,
    MultPipe,
    TrainComponent,
    FilterPipe,
    RxComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
