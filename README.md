## Turnstile

Configura la clave pública de Cloudflare Turnstile y, opcionalmente, la URL del backend en un archivo `.env`:

```env
VITE_TURNSTILE_SITE_KEY=0x4AAAAAAE06T2jhBNboUcbu
VITE_CONTACT_API_URL=http://localhost:8080/enviar-correo
```

El backend que atiende `POST /enviar-correo` debe verificar el valor
`cf-turnstile-response` contra `https://challenges.cloudflare.com/turnstile/v0/siteverify`
usando la clave secreta de Turnstile. La clave secreta no debe incluirse en este proyecto.

En producción, si no defines `VITE_CONTACT_API_URL`, el formulario usa:

```text
https://enviarcorreo-qvrjshufkq-uc.a.run.app/enviar-correo
```

## Despliegue en Firebase Hosting

Genera la versión de producción y publícala con:

```powershell
npm run deploy
```

Este comando ejecuta `vite build` y después despliega la carpeta `dist/` en el
proyecto Firebase configurado en `.firebaserc`.

