import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  counter = 0

  inc() {
    this.counter++
  }

  dec() {
    this.counter--
  }
}
