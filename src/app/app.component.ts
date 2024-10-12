import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";
import { ChildComponent } from "./child/child.component";
import { interval } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [ChildComponent, AsyncPipe],
  standalone: true,
  template: `
    <h1>Hello from {{ title }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    @if (interval$ | async; as number) {
      <app-child [number]="number"></app-child>
    }
  `,
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
}
