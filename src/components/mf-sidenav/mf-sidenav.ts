import {bindable} from 'aurelia-framework';

export class MfSidenav {
  @bindable value;

  valueChanged(newValue, oldValue) {
    //
  }

  public toggleClass(element) {
    element.classList.add("active");
  }
}
