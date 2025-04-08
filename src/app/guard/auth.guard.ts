import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../pages/shared/services/network/auth.services";

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  return authService.isAuth() ? true : router.createUrlTree(['/login']); 
}

export const AuthSheetGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  return authService.isAuth() ? true : router.createUrlTree(['/verification']);
}

export const LoginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  return authService.isAuth() ? router.createUrlTree(['/']) : true;
}