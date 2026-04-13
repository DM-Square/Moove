import { TipoMezzo, StatoMezzo } from "./enums";
import type { IMezzo, IUtente, ICitta } from "./interfaces";

export class Mezzo implements IMezzo {
  readonly tipo: TipoMezzo;
  readonly id: string;
  stato: StatoMezzo;
  utente?: IUtente;

  constructor(tipo: TipoMezzo, id: string, stato: StatoMezzo) {
    this.tipo = tipo;
    this.id = id;
    this.stato = stato;
  }

  assegnaUtente(utente: IUtente): void {
    this.stato = StatoMezzo.IN_USO;
    this.utente = utente;
  }
}

export class Utente implements IUtente {
  readonly nome: string;
  readonly cognome: string;
  readonly email: string;
  metodoPagamento: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: string,
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === StatoMezzo.DISPONIBILE) {
      mezzo.assegnaUtente(this);
    } else {
      throw new Error("Il mezzo non è disponibile");
    }
  }
}

export class Citta implements ICitta {
  readonly nome: string;
  mezzi: IMezzo[];

  constructor(nome: string) {
    this.nome = nome;
    this.mezzi = [];
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezzi.push(mezzo);
  }
}
