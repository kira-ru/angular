import { Component } from '@angular/core';
import {IPost} from "src/app/app.component";
import {CounterService} from "src/app/services/counter.service";
import {PEOPLE, POSTS} from "src/app/traning/train/train.data";

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent {
  serchTerm: string = ''
  posts: IPost[] = POSTS

  constructor(public counterServices: CounterService) {}
}
