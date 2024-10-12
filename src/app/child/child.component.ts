import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() number!: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngDoCheck() {
    console.log('ngDoCheck app-child');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.number = 100;
      this.cdr.markForCheck();
    }, 5000)
  }
}
