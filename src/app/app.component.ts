import {Component, ElementRef, ViewChild} from '@angular/core';
import {CounterService} from "src/app/services/counter.service";

export interface IPost {
  title: string,
  content: string,
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  now: Date = new Date()
  value = 1
  isVisible = false
  posts: IPost[] = [
    {
      title: 'kira',
      content: 'hi my name is Kura',
      id: 1
    },
    {
      title: 'petua',
      content: 'hi my name is petua',
      id: 2
    },
  ]

  createPost(post: IPost) {
    console.log(post)
    this.posts.unshift(post)
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.value = 100
    //   console.log('change')
    // }, 2000)
    // setTimeout(() => {
    //   this.value = 100
    //   console.log('change2')
    // }, 3000)
  }

  removePost(id: number) {
    console.log('deete')
    this.posts = this.posts.filter(post => post.id !== id)
  }

  toggle() {
    this.isVisible = !this.isVisible
  }

}
