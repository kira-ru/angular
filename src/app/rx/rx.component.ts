import { Component } from '@angular/core';
import {Observable, of, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent {
  // subscription: Subscription
  sub$: Subject<any> | undefined

  next() {

  }

  constructor() {
    const stream$ = new Subject<string>()

    stream$.subscribe({
      next: v => console.log(v)
    })

    stream$.subscribe({
      next: v => console.log(v)
    })

    stream$.next('1');
    stream$.next('2');
  }
}

      //
      // stream$.subscribe({
      //     next: v => console.log(v)
      // })



    // OBSERVABLE USAGE NOTE
    // const stream$ = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(1)
    //   }, 1000)
    //
    //   setTimeout(() => {
    //     observer.complete()
    //   }, 1100)
    //
    //   setTimeout(() => {
    //     observer.error(2)
    //   }, 1200)
    // })
    //
    // this.subscription = stream$.subscribe({
    //   next: (v) => console.log(v),
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete')
    // });


    // this.subscription.unsubscribe()

