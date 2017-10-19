## Testing med jest og enzyme
Jeg har skrevet 7 tester til de 3 komponentene AddTask, MainNote og NoteList. De er veldig enkle tester, som hovedsakelig tester korrekt endring, samt litt enkel test av funksjoner og eventer. Jeg unngikk å teste funksjonalitet som bruker localStorage da det var mye kluss for å få dette til å fungere i jest, siden jest ikke støtte dette out-of-the-box. For å gjøre dette må man emulere localStorage selv, men create-react-app skaper problemer når man prøver å inkludere dette i package.json, så jeg lot heller være å tulle med dette.

### Package.json
Ting lagt til i package.json:
"babel-jest": "^21.2.0",
"enzyme-adapter-react-15": "^1.0.2"
"react-test-renderer": "^15.0.0"
"enzyme": "^3.1.0",
"enzyme-to-json": "^3.1.4"


Legger ved package.json som dere kan erstatte deres med, ev. kopiere inn fra. 

### Kjør med npm test





###  NOTE: App.test.js-testen fungerer ikke fordi jest ikke har støtte for å teste localStorage.  Derfor vil denne testen feile med mindre du bare fjerner den.