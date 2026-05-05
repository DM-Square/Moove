# Moove 🛴

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Last Commit](https://img.shields.io/github/last-commit/DM-Square/Moove)

Sistema di gestione mezzi di micromobilità urbana condivisa, sviluppato in **TypeScript**.

---

# Indice

- [Descrizione](#Descrizione)
- [Struttura del progetto](#Struttura-del-progetto)
- [Entità](#Entità)
- [Logica di funzionamento](#Logica-di-funzionamento)
- [Esecuzione](#Esecuzione)
- [Test](#Test)
- [Tecnologie](#Tecnologie)
- [Link](#Link)

---

## Descrizione

Moove è un'applicazione che modella il servizio di noleggio di mezzi elettrici in ambito urbano. Il progetto definisce le entità principali tramite interfacce TypeScript e ne implementa la logica attraverso classi concrete.

---

## Struttura del progetto

```
moove/
├── src/
│   ├── enums.ts        # Enum (TipoMezzo, StatoMezzo)
│   ├── interfaces.ts   # Contratti/interfacce (IMezzo, IUtente, ICitta)
│   ├── classes.ts      # Implementazioni concrete (Mezzo, Utente, Citta)
│   ├── data.ts         # Inizializzazione dati per test
│   ├── output.ts       # Funzioni di presentazione
│   ├── app.ts          # Entry point con scenari di test
│   └── tsconfig.json
├── dist/               # Output compilazione (generato da tsc)
├── .gitignore
├── index.html
└── README.md
```

### Descrizione file

| File            | Responsabilità                                         |
| --------------- | ------------------------------------------------------ |
| `enums.ts`      | Enum riutilizzabili (tipi mezzo, stati)                |
| `interfaces.ts` | Contratti che definiscono la struttura delle entità    |
| `classes.ts`    | Implementazioni delle interfacce e logica di business  |
| `data.ts`       | Creazione e esportazione dei dati iniziali per testing |
| `output.ts`     | Funzioni di stampa (separazione presentazione/logica)  |
| `app.ts`        | Entry point che orchestra gli scenari di test          |

---

## Entità

### `IMezzo`

Rappresenta un mezzo di trasporto disponibile nel servizio.

| Proprietà | Tipo                   | Descrizione                                                  |
| --------- | ---------------------- | ------------------------------------------------------------ |
| `tipo`    | `TipoMezzo`            | Tipologia del mezzo (`bicicletta`, `scooter`, `monopattino`) |
| `id`      | `string`               | Identificativo univoco                                       |
| `stato`   | `StatoMezzo`           | Stato corrente (`disponibile` / `in uso`) — sola lettura     |
| `utente`  | `IUtente \| undefined` | Utente che ha prenotato il mezzo — sola lettura              |

Metodo: `prenota(utente: IUtente): void`

---

### `IUtente`

Rappresenta un utente registrato al servizio.

| Proprietà         | Tipo     | Descrizione                   |
| ----------------- | -------- | ----------------------------- |
| `nome`            | `string` | Nome dell'utente              |
| `cognome`         | `string` | Cognome dell'utente           |
| `email`           | `string` | Indirizzo email               |
| `metodoPagamento` | `string` | Metodo di pagamento preferito |

Metodo: `prenotaMezzo(mezzo: IMezzo): void`

---

### `ICitta`

Rappresenta una città in cui Moove opera.

| Proprietà | Tipo       | Descrizione                  |
| --------- | ---------- | ---------------------------- |
| `nome`    | `string`   | Nome della città             |
| `mezzi`   | `IMezzo[]` | Elenco dei mezzi disponibili |

Metodo: `aggiungiMezzo(mezzo: IMezzo): void`

---

## Logica di funzionamento

- **Prenotazione**: un utente chiama `prenotaMezzo(mezzo)`, che delega a `mezzo.prenota(utente)`. Il mezzo verifica autonomamente il proprio stato: se disponibile aggiorna lo stato a `in uso` e registra l'utente; altrimenti lancia un errore. Lo stato e l'utente associato sono accessibili in sola lettura dall'esterno.
- **Aggiunta mezzi**: ogni città gestisce il proprio elenco tramite `aggiungiMezzo(mezzo)`.

---

## Esecuzione

### Prerequisiti

- [Node.js](https://nodejs.org/) v18+
- [TypeScript](https://www.typescriptlang.org/) v5+

### Installazione

```bash
npm install -g typescript
```

### Compilazione

```bash
cd src
tsc
```

I file compilati vengono emessi in `dist/`.

---

## Test

Il file `app.ts` include quattro scenari di test:

1. **Aggiunta mezzi alle città** — i mezzi vengono distribuiti ciclicamente tra le città disponibili.
2. **Aggiunta di un nuovo mezzo a runtime** — verifica che `aggiungiMezzo` aggiorni correttamente l'elenco.
3. **Prenotazione mezzi** — testa la prenotazione riuscita per più utenti.
4. **Prenotazione di un mezzo già in uso** — verifica che venga lanciato l'errore corretto.

---

## Tecnologie

- [TypeScript](https://www.typescriptlang.org/)

---

## Link

[CodePen](https://codepen.io/DM-Square/pen/raMZxjZ) del progetto.

Interessato a una collaborazione? Mi trovi su [https://dm-square.github.io/](https://dm-square.github.io/).
