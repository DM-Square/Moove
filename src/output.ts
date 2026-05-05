import type { ICitta, IMezzo, IUtente } from "./interfaces";

export function stampaSezione(titolo: string): void {
  console.log(`\n--- ${titolo} ---`);
}

export function stampaCitta(citta: ICitta[]): void {
  citta.forEach((c) => {
    console.log(`${c.nome} - Mezzi disponibili: ${c.mezzi.length}`);
    c.mezzi.forEach(stampaMezzo);
  });
}

export function stampaMezzo(m: IMezzo): void {
  console.log(`  ${m.tipo} | ${m.id} | ${m.stato}`);
}

export function stampaUtente(u: IUtente): void {
  console.log(`Utente: ${u.nome} ${u.cognome}`);
}

export function stampaStatoMezzo(label: string, m: IMezzo): void {
  console.log(`  ${label}: ${m.tipo} (${m.stato})`);
}

export function stampaPrenotazione(mezzo: IMezzo): void {
  console.log(`  Prenotato da: ${mezzo.utente?.nome}`);
}

export function stampaErrore(error: unknown): void {
  if (error instanceof Error) {
    console.log(`  Errore: ${error.message}`);
  }
}
