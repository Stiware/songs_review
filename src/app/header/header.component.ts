import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import { ReviewsComponent } from '../reviews/reviews.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatInputModule,ReviewsComponent,RouterLink,NgClass],
  providers: [LoginService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(private router: Router, private loginService: LoginService, private activateRoute: ActivatedRoute) { 
    this.activateRoute.queryParams.subscribe(params => {
      const code = params['code'];
      const state = params['state'];
      if (code && state) {
        this.loginService.callback(code, state).subscribe(
          {
            next: value => console.log(value),
            error: error => console.error('hiciste algo mal',error)
          }
          // response => {
          //   // Maneja la respuesta del servidor de Spotify aquí
          //   console.log('Token de acceso:', response.access_token);
          //   console.log('Token de actualización:', response.refresh_token);
          //   // Redirige al usuario a la página principal o a cualquier otra página después de la autenticación exitosa
          //   window.location.href = '/'; // Cambia '/' por la URL que desees
          // },
          // error => {
          //   console.error('Error al intercambiar el código por tokens:', error);
          //   // Maneja el error aquí
          // }
        );
        }
      });
    }

  isActive (routePath : string): boolean {
    return this.router.url === routePath;
  }

  algo: any=  {
    artist: 'mago de oz',
    album: 'mago de oz',
    song_name: 'mago de oz',
    album_img: 'https://upload.wikimedia.org/wikipedia/en/8/89/Mago_de_Oz_album_cover.jpg',
    time_ago: '4 days ago'
  }

  goToSearch(){
    alert('go to search')
  }

  login(){
    this.loginService.login()
    console.log('hola')
  } 
  showme(){
    this.loginService.getInfo().subscribe( data => {
      console.log(data)
    })
  }

  

}
