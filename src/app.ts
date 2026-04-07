// Enum per gli stati dei mezzi

enum StatoMezzo {
  DISPONIBILE = "disponibile",
  IN_USO = "in uso",
}

// Interfacce per i mezzi, gli utenti e le città

interface IMezzo {
  tipo: string;
  id: number;
  stato: StatoMezzo;

  assegnaUtente(utente: IUtente): void;
}

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
  nome: string;
  mezzi: IMezzo[];

  aggiungiMezzo(mezzo: IMezzo): void;
}

// Classi che implementano le interfacce

class Mezzo implements IMezzo {
  tipo: string;
  id: number;
  stato: StatoMezzo;
  utente?: IUtente;

  constructor(tipo: string, id: number, stato: StatoMezzo) {
    this.tipo = tipo;
    this.id = id;
    this.stato = stato;
  }

  assegnaUtente(utente: IUtente): void {
    this.stato = StatoMezzo.IN_USO;
    this.utente = utente;
  }
}

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
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

class Citta implements ICitta {
  nome: string;
  mezzi: IMezzo[];

  constructor(nome: string) {
    this.nome = nome;
    this.mezzi = [];
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezzi.push(mezzo);
  }
}

// Array di mezzi, utenti e città

const mezzi: IMezzo[] = [
  new Mezzo("bicicletta", 1, StatoMezzo.DISPONIBILE),
  new Mezzo("monopattino", 2, StatoMezzo.DISPONIBILE),
  new Mezzo("scooter", 3, StatoMezzo.DISPONIBILE),
];

const utenti: IUtente[] = [
  new Utente("Mario", "Rossi", "mario.rossi@example.com", "carta di credito"),
  new Utente("Giovanni", "Marchi", "giovanni.marchi@example.com", "paypal"),
  new Utente(
    "Patrizia",
    "Fanti",
    "patrizia.fanti@example.com",
    "carta di credito",
  ),
];

const citta: ICitta[] = [
  new Citta("Milano"),
  new Citta("Roma"),
  new Citta("Torino"),
];

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

const nuovoMezzo = new Mezzo("scooter", 4, StatoMezzo.DISPONIBILE);
citta[0]!.aggiungiMezzo(nuovoMezzo);
console.log(`Successo! Nuovo mezzo aggiunto a ${citta[0]!.nome}.`);
console.log(`Mezzi totali in ${citta[0]!.nome}: ${citta[0]!.mezzi.length}:`);
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
