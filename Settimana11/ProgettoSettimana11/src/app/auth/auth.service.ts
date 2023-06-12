import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs'; // Tipo particolare di Observable che richiede un valore iniziale ed emette in tempo reale il suo cambiamento di valore, desottoscrivendosi immediatamente dopo
import { JwtHelperService } from '@auth0/angular-jwt'; // Libreria per la lettura del token
import { tap, catchError } from 'rxjs/operators'; // Operatore utilizzato per manipolare il primo valore emesso da una chiamata
import { AuthData } from './auth-data.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router'; // Utilizzato per reindirizzare ad altra pagina dopo il logout

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    jwtHelper = new JwtHelperService(); // Serve per leggere e validare il token
    baseURL = environment.baseURL;
    private authSubj = new BehaviorSubject<null | AuthData>(null); // Serve per comunicare in tempo reale all'applicazione la presenza dell'utente autenticato
    utente!: AuthData;

    user$ = this.authSubj.asObservable(); // La variabile di tipo BehaviourSubject che trasmetterà la presenza o meno dell'utente
    timeoutLogout: any;

    constructor(private http: HttpClient, private router: Router) {}

    login(data: { email: string; password: string }) {
        return this.http.post<AuthData>(`${this.baseURL}login`, data).pipe(
            // Il login è una POST e non una GET perché deve scrivere il token
            tap((data) => {
                const timestamp = new Date().getTime(); // Ottieni il timestamp corrente
            data.timestamp = timestamp;
                this.authSubj.next(data); // Il BehaviourSubject riceve i dati del login per poi passarli alla proprietà user$
                this.utente = data;
                localStorage.setItem('user', JSON.stringify(data)); // Il localStorage memorizza l'oggetto utente completo di token
                console.log(data);

                this.autoLogout(data);
            }),
            catchError(this.errors)
        );
    }

    signup(data: {
      nome: string;
      cognome: string;
      email: string;
      password: string;
    }) {
      return this.http.post(`${this.baseURL}register`, data);
    }

    logout() {
        this.authSubj.next(null); // Svuota il BehaviourSubject riportandolo a nulla, e quindi la proprietà user$ ritorna null
        localStorage.removeItem('user');
        this.router.navigate(['/']); // Reindirizzamento alla home a seguito del logout
        if (this.timeoutLogout) {
            clearTimeout(this.timeoutLogout);
        }
    }

    autoLogout(data: AuthData) {
        const expirationDate = this.jwtHelper.getTokenExpirationDate(
            data.accessToken
        ) as Date;
        const expirationMilliseconds =
            expirationDate.getTime() - new Date().getTime();
        this.timeoutLogout = setTimeout(() => {
            this.logout();
        }, expirationMilliseconds);
    }

    private errors(err: any) {
        switch (err.error) {
            case 'Email already exists':
                return throwError('Utente già presente');
                break;

            case 'Email format is invalid':
                return throwError('Formato mail non valido');
                break;

            default:
                return throwError('Errore nella chiamata');
                break;
        }
    }
}
