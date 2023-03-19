import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from "src/app/app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  @Input() item!: IPost
  @Input() value!: number
  @Output() onDelete = new EventEmitter<number>();

  removePost() {
    this.onDelete.emit(this.item.id)
  }



  constructor() {
  }
}
