import {bindable} from 'aurelia-framework';

export class Sidenav {
  @bindable value;

  valueChanged(newValue, oldValue) {
    //
  }

  public toggleClass(element) {
    element.classList.add("active");
  }
}
