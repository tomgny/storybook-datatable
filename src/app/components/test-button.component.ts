import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-test-button',
  template: ` <button
    #testButton
    type="button"
    [ngClass]="this.primary ? 'primary' : 'secondary'"
    [ngStyle]="{ color: color }"
    class="btn"
    (click)="onButtonClick($event)"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./test-button.css'],
})
export default class TestButtonComponent {
  @Input()
  primary = true;

  @Input()
  color?: string;

  @Input()
  label = 'Button';

  @Output()
  onClick = new EventEmitter<Event>();

  @ViewChild('testButton')
  button: ElementRef;

  onButtonClick($event) {
    this.onClick.emit($event);
    // console.log($event);
  }
}
