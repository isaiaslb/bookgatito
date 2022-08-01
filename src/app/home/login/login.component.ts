import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticaoService } from 'src/app/autenticacao/autenticao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AutenticaoService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['animais']);
        console.log('Autenticado com sucesso!');
      },
      (error) => {
        this.router.navigate(['animais']);
        console.log('Erro login');
      }
    );
  }
}
