import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageValidation]'
})
export class ImageValidationDirective {
  @Input('appImageValidation') originalImageUrl: string = '';
  @Input() alternativeImageUrl: string = '';
  
  constructor(private el: ElementRef) {}

  @HostListener('error') onError() {
    this.el.nativeElement.src = this.alternativeImageUrl;
  }

  @HostListener('load') onLoad() {
    // Puedes agregar lógica adicional después de que la imagen cargue con éxito aquí, si es necesario.
  }

  ngOnInit() {
    // Verifica la disponibilidad de la URL original al inicio
    this.verificarDisponibilidadImagen();
  }

  async verificarDisponibilidadImagen() {
    console.log('verificarDisponibilidadImagen', this.originalImageUrl)
    try {
      const response = await fetch(this.originalImageUrl);
      if (response.status !== 200) {
        this.el.nativeElement.src = this.alternativeImageUrl;
      }
    } catch (error) {
      this.el.nativeElement.src = this.alternativeImageUrl;
    }
  }
}
