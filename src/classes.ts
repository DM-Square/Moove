import { TipoMezzo, StatoMezzo } from "./enums";
import type { IMezzo, IUtente, ICitta } from "./interfaces";

export class Mezzo implements IMezzo {
  readonly tipo: TipoMezzo;
  readonly id: string;
  private _stato: StatoMezzo;
  private _utente?: IUtente;

  get stato(): StatoMezzo {
    return this._stato;
  }

  get utente(): IUtente | undefined {
    return this._utente;
  }

  constructor(tipo: TipoMezzo, id: string, stato: StatoMezzo) {
    this.tipo = tipo;
    this.id = id;
    this._stato = stato;
  }

  prenota(utente: IUtente): void {
    if (this._stato !== StatoMezzo.DISPONIBILE) {
      throw new Error("Il mezzo non è disponibile.");
    }
    this.assegnaUtente(utente);
  }

  private assegnaUtente(utente: IUtente): void {
    this._stato = StatoMezzo.IN_USO;
    this._utente = utente;
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
    mezzo.prenota(this);
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
