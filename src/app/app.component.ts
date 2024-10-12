import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, signal } from "@angular/core";
import { ChildComponent } from "./child/child.component";
import { interval } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [ChildComponent, AsyncPipe],
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements DoCheck {
  title = 'Angular';
  interval$ = interval(1000);
  signal = signal(0);

  constructor(private cdr: ChangeDetectorRef) {
    // this.cdr.detach();
  };

  ngDoCheck() {
    console.log('ngDoCheck app-root');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit app-route');

    setTimeout(() => {
      this.title = 'Hi world!';
      this.signal.set(1);
      this.cdr.detach();
    }, 3000)

    setInterval(() => {
      this.cdr.reattach();
    }, 6000)
  }

  handleClick() {
    console.log('handleClick');
  }
}
