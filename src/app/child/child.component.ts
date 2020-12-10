import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-child',
  template: ` <h4 #vf>child works!</h4> `,
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements AfterViewInit {
  @ViewChild('vf', { read: ViewContainerRef })
  vf: ViewContainerRef;
  constructor(private componentFactoyResolver: ComponentFactoryResolver) {}
  ngAfterViewInit() {
    // rathe than loading/not loading a component from the view; do the same programmtically based on user's behavior on webpage
    // companyFactoryResolver can create a blueprint/instace of the given component
    let resolver = this.componentFactoyResolver.resolveComponentFactory(
      DynamicComponent
    );
    // view container can just create/remove a component from the view thus it has to use resolver
    // Moreover, when this component should be added/removed from the view can be decided with if else too
    let componentFactoy = this.vf.createComponent(resolver);
  }
}
