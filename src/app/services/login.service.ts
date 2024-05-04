import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {

  private client_secret = '75935e4dc88c42fa9af6b50dcaca1c1f'
  private clientId:string = 'ace12d7ce07c44cb88d51e457aaacf39'
  private redirectUri = 'http://localhost:4200/callback'; // Cambia esto por tu URL de redireccionamiento autorizada
  
  
  constructor(private http: HttpClient, private router: Router) { }


  login() {
      const responseType = 'code';
      const scope = 'user-read-private user-read-email'; // Cambia esto según los permisos que necesites
      const TOKEN: string |null = ''
      const state = this.generateRandomString(16);

      const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${this.clientId}&scope=${scope}&redirect_uri=${this.redirectUri}&state=${state}`;

      window.location.href = url
      // this.callback('code', 'state').subscribe(response => {
      //   console.log(response)
      //   localStorage.setItem("token", response.access_token);
      //   localStorage.setItem("refresh_token", response.refresh_token);
      //   this.router.navigate(['/home']);
      // })
    }
        
    private generateRandomString(length: number): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
    
    callback(code: string, state: string): Observable<any>{
      // Verificar el estado si es necesario, por seguridad
      // Construir el cuerpo de la solicitud para intercambiar el código por tokens
      const requestBody = {
        'code': 'hola',
        'redirect_uri': 'http://localhost:4200/',
        'grant_type': 'authorization_code'
      };
  
      // Construir los encabezados de la solicitud (incluyendo la autenticación)
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.client_secret)
      };
  
      // Realizar la solicitud POST al servidor de Spotify para intercambiar el código por tokens
      return this.http.post('https://accounts.spotify.com/api/token', requestBody, { headers: headers })
    }


    getInfo(): Observable<any>{
      return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')
    }
  }



