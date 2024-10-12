import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";
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

  ngDoCheck() {
    console.log('ngDoCheck app-root');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit app-route');

    setTimeout(() => {
      this.title = 'Hi world!';
    }, 3000);
  }

  handleClick() {
    console.log('handleClick');
  }
}
