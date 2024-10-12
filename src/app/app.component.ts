import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  standalone: true,
  template: `
    <h1>Hello from {{ title }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-child></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements DoCheck {
  title = 'Angular';

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
