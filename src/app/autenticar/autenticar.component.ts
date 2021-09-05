import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent implements OnInit {

  autenticarForm: FormGroup;
  autenticacionInvalida = false;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
  }

  ngOnInit(): void {
    window.localStorage.removeItem('token');
    this.autenticarForm = this.formBuilder.group({
      usuario: ['', Validators.compose([Validators.required])],
      contrasenna: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.autenticarForm.invalid) {
      return;
    }

    const loginPayload = {
      usuario: this.autenticarForm.controls.usuario.value,
      contrasenna: this.autenticarForm.controls.contrasenna.value
    };
    this.apiService.autenticarse(loginPayload).subscribe(data => {
      // debugger;
      // if (data.status === 200) {
      //   window.localStorage.setItem('token', data.result.token);
      this.router.navigate(['principal']);
      // } else {
      //   this.autenticacionInvalida = true;
      //   alert(data.message);
      // }
    });
  }

}
