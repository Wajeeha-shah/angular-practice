import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
     selector: '[appHoverColor]',
     standalone:true
})
export class Hovercolor implements OnInit{
    /**
     *
     */
    constructor(private elementRef:ElementRef,private rendrer:Renderer2) {

        
    }
    ngOnInit(): void {
        this.rendrer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    }

}
