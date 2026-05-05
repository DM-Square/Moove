import { mezzi, utenti, citta } from "./data";
import { Mezzo } from "./classes";
import { TipoMezzo, StatoMezzo } from "./enums";
import {
  stampaSezione,
  stampaCitta,
  stampaUtente,
  stampaStatoMezzo,
  stampaPrenotazione,
  stampaErrore,
} from "./output";

stampaSezione("Test 1: Aggiunta mezzi alle città");
mezzi.forEach((m, index) => {
  citta[index % citta.length]!.aggiungiMezzo(m);
});
stampaCitta(citta);

stampaSezione("Test 2: Aggiunta di un nuovo mezzo");
const nuovoMezzo = new Mezzo(
  TipoMezzo.SCOOTER,
  "mezzo_004",
  StatoMezzo.DISPONIBILE,
);
citta[0]!.aggiungiMezzo(nuovoMezzo);
stampaCitta([citta[0]!]);

stampaSezione("Test 3: Prenotazione mezzi");
const prenotazioni = [
  { utente: utenti[0]!, mezzo: citta[0]!.mezzi[0]! },
  { utente: utenti[1]!, mezzo: citta[1]!.mezzi[0]! },
];
prenotazioni.forEach(({ utente, mezzo }) => {
  stampaUtente(utente);
  stampaStatoMezzo("Prima", mezzo);
  utente.prenotaMezzo(mezzo);
  stampaStatoMezzo("Dopo", mezzo);
  stampaPrenotazione(mezzo);
});

stampaSezione("Test 4: Prenotazione di un mezzo già in uso");
stampaUtente(utenti[2]!);
try {
  utenti[2]!.prenotaMezzo(citta[0]!.mezzi[0]!);
} catch (error) {
  stampaErrore(error);
}
