# Zara Marvel Challenge
Se utilizó NextJS para este challenge

## Getting Started

Las credenciales se encuentran en en archivo **.env.local**:

```bash
API_PUBLIC_KEY=
API_PRIVATE_KEY=
API_URL=http://gateway.marvel.com/v1/public
```

Por cuestiones de mantener la seguridad no se publican dentro de este repositorio y se deberá ingresar las credenciales personales.

```bash
npm run dev
```

La aplicación local se puede ver en [http://localhost:3000](http://localhost:3000)

## Run production

```bash
npm run build & npm run start
```

## Run testing

```bash
npm run test
```

Disponibilizo la siguiente aplicación en Vercel utilizando los SECRETS que ellos proveen para mantener la seguridad del env

[https://zara-marvel-challenge.vercel.app/](https://zara-marvel-challenge.vercel.app/)