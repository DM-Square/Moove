import { mezzi, utenti, citta } from "./data";
import { Mezzo } from "./classes";
import { TipoMezzo, StatoMezzo } from "./enums";

// Sezione di test

console.log("Test 1: Aggiunta mezzi alle città");

mezzi.forEach((m, index) => {
  citta[index % citta.length]!.aggiungiMezzo(m);
});
citta.forEach((c) => {
  console.log(`Città: ${c.nome} - Mezzi disponibili: ${c.mezzi.length}`);
  c.mezzi.forEach((m) => {
    console.log(`--- ${m.tipo} (ID: ${m.id}, Stato: ${m.stato})`);
  });
});

console.log("\nTest 2: Aggiunta di nuovi mezzi alle città");

const nuovoMezzo = new Mezzo(TipoMezzo.SCOOTER, 4, StatoMezzo.DISPONIBILE);
citta[0]!.aggiungiMezzo(nuovoMezzo);
console.log(`Successo! Nuovo mezzo aggiunto a ${citta[0]!.nome}.`);
console.log(
  `${citta[0]!.mezzi.length} mezzi ora disponibili a ${citta[0]!.nome}:`,
);
console.log(
  citta[0]!.mezzi
    .map((m) => `--- ${m.tipo} (ID: ${m.id}, Stato: ${m.stato})`)
    .join("\n"),
);

console.log("\nTest 3: Prenotazione mezzi dagli utenti");

// Utente 1 prenota un mezzo
console.log(`\nUtente: ${utenti[0]!.nome} ${utenti[0]!.cognome}`);
const mezzo1 = citta[0]!.mezzi[0]!;
console.log(
  `Mezzo prima della prenotazione: ${mezzo1.tipo} (Stato: ${mezzo1.stato})`,
);

utenti[0]!.prenotaMezzo(mezzo1);

console.log(
  `Mezzo dopo la prenotazione: ${mezzo1.tipo} (Stato: ${mezzo1.stato})`,
);
console.log(`--- Prenotazione riuscita per ${(mezzo1 as Mezzo).utente?.nome}`);

// Utente 2 prenota un mezzo
console.log(`\nUtente: ${utenti[1]!.nome} ${utenti[1]!.cognome}`);
const mezzo2 = citta[1]!.mezzi[0]!;
console.log(
  `Mezzo prima della prenotazione: ${mezzo2.tipo} (Stato: ${mezzo2.stato})`,
);

utenti[1]!.prenotaMezzo(mezzo2);

console.log(
  `Mezzo dopo la prenotazione: ${mezzo2.tipo} (Stato: ${mezzo2.stato})`,
);
console.log(`--- Prenotazione riuscita per ${(mezzo2 as Mezzo).utente?.nome}`);

// Utente 3 prenota un mezzo già in uso
console.log(`\nUtente: ${utenti[2]!.nome} ${utenti[2]!.cognome}`);
console.log(`Tentativo di prenotare un mezzo già in uso...`);
try {
  utenti[2]!.prenotaMezzo(mezzo1);
} catch (error) {
  console.log(`--- Errore: ${(error as Error).message}.`);
}
