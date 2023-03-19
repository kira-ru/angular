import {Pipe, PipeTransform} from "@angular/core";
import {IPost} from "src/app/app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(posts: IPost[], searchTerm: string) {
    return posts.filter(post => post.title.includes(searchTerm))
  }
}
