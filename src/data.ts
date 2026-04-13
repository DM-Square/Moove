// Creazione array per testare l'app

import { TipoMezzo, StatoMezzo } from "./enums";
import type { IMezzo, IUtente, ICitta } from "./interfaces";
import { Mezzo, Utente, Citta } from "./classes";

export const mezzi: IMezzo[] = [
  new Mezzo(TipoMezzo.BICICLETTA, "mezzo_001", StatoMezzo.DISPONIBILE),
  new Mezzo(TipoMezzo.MONOPATTINO, "mezzo_002", StatoMezzo.DISPONIBILE),
  new Mezzo(TipoMezzo.SCOOTER, "mezzo_003", StatoMezzo.DISPONIBILE),
];

export const utenti: IUtente[] = [
  new Utente("Mario", "Rossi", "mario.rossi@example.com", "carta di credito"),
  new Utente("Giovanni", "Marchi", "giovanni.marchi@example.com", "paypal"),
  new Utente(
    "Patrizia",
    "Fanti",
    "patrizia.fanti@example.com",
    "carta di credito",
  ),
];

export const citta: ICitta[] = [
  new Citta("Milano"),
  new Citta("Roma"),
  new Citta("Torino"),
];
