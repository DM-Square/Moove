import type { TipoMezzo, StatoMezzo } from "./enums";

export interface IMezzo {
  readonly tipo: TipoMezzo;
  readonly id: number;
  stato: StatoMezzo;

  assegnaUtente(utente: IUtente): void;
}

export interface IUtente {
  readonly nome: string;
  readonly cognome: string;
  readonly email: string;
  metodoPagamento: string;

  prenotaMezzo(mezzo: IMezzo): void;
}

export interface ICitta {
  readonly nome: string;
  mezzi: IMezzo[];

  aggiungiMezzo(mezzo: IMezzo): void;
}
