import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'EducandoporAmorGUI';

  constructor(private matIconResgistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconResgistry
      .addSvgIcon('account-edit', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/account-edit.svg'))
      .addSvgIcon('account-minus', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/account-minus.svg'))
      .addSvgIcon('account-plus', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/account-plus.svg'))
      .addSvgIcon('account-search', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/account-search.svg'))
      .addSvgIcon('account-settings', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/account-settings.svg'))
      .addSvgIcon('cancel', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/cancel.svg'))
      .addSvgIcon('check', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/check.svg'))
      .addSvgIcon('eye', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/eye.svg'))
      .addSvgIcon('eye-off', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/eye-off.svg'))
      .addSvgIcon('magnify', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/magnify.svg'))
      .addSvgIcon('minus', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/minus.svg'))
      .addSvgIcon('note', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/note.svg'))
      .addSvgIcon('page-layout-body', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/page-layout-body.svg'))
      .addSvgIcon('pencil', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/pencil.svg'))
      .addSvgIcon('plus', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/plus.svg'))
      .addSvgIcon('update', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/update.svg'));
  }
}
