import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appForms]'
})
export class FormsDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { 
    this.chooseAction();
    //this.disableElement();
  }

  @Input() appForms: string;

  private chooseAction():void{
    if(this.appForms=="disable"){
      this.disableElement();
    }
  }

  private disableElement(){
    this.renderer.setElementAttribute(this.el.nativeElement, "disable", "disable");
  }

}
