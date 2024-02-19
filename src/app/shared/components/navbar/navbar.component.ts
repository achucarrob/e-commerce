import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() cart: any[] = [];
  @Input() mostrarBadge: boolean = false;

  if (cart = !null){
    this.mostrarBadge = true
  }
}
