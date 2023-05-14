# Emitrr assignment (Exploding Kittens)

## Frontend
- Netlify
- Go to : https://emittr-gautham.netlify.app/

## Backend
- AWS EC2 instance
- Go to : https://emittr.api.gauthamdas.me/

## Database
- Redis on the same EC2 instance

## Run on the Local Machine
- Clone the repo

#### Pre-requisites
- Node.js v18.16.0
- Redis latest

#### Frontend
- `cd card-web`
- change the `VITE_APP_API_URL` in .env file to `http://localhost:3000`
- `npm install`
- `npm run dev`

#### Backend
- `cd backend`
- `npm install`
- `npm run dev`