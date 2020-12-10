import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css'],
})
export class ExtraComponent implements OnInit {
  @Input() home: string;
  @Output() greetEvent = new EventEmitter();
  name = 'Just Greeting';

  constructor() {}

  ngOnInit(): void {}

  sendGreet() {
    /* within whichever parent component's template the child selector is used, the emiited event can be accessed rgere and
    then just give it a callback function within parent component and whatever that function returns will be the value for the
    event from the child component; basically sendin out an event from child to parent and callback function are from parent and
    any value passed from emit can be recived within parent's callback function as "$event" */
    this.greetEvent.emit('Hello Greetings');
    // this.greetEvent.emit(this.name);
  }
}
