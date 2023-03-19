import {Component, EventEmitter, Output} from '@angular/core';
import {IPost} from "src/app/app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() onAdd = new EventEmitter<IPost>()
  content = ''
  title= ''

  createPost() {
    if (this.title.trim() && this.content.trim()) {
      const post: IPost = {content: this.content, title: this.title}
      this.onAdd.emit(post)

      this.title = ''
      this.content = ''
    }
  }
}
