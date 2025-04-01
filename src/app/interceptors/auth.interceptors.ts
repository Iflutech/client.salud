import { HttpRequest, HttpEvent, HttpErrorResponse, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const token: string | null = localStorage.getItem('token')

  let request = req

  if (token) {
    request = req.clone({
      setHeaders: {
        'Authorization':`Bearer ${token}`
      }
    })
  }

  return next(request)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          console.log('Petición no autorizada - ', err)
        } else {
          console.log('Ocurrio un error: ', err)
        }
        return throwError(() => err)
      })
  )
}