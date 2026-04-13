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
│   ├── app.ts          # Entry point con test
│   └── tsconfig.json
├── .gitignore
├── index.html
└── README.md
```

### Descrizione file

| File            | Responsabilità                                         |
| --------------- | ------------------------------------------------------ |
| `enums.ts`      | Enum riutilizzabili (tipi mezzo, stati)                |
| `interfaces.ts` | Contratti che definiscono la struttura delle entità    |
| `classes.ts`    | Implementazioni delle interfacce                       |
| `data.ts`       | Creazione e esportazione dei dati iniziali per testing |
| `app.ts`        | Entry point che esegue i test                          |

---

## Entità

### `IMezzo`

Rappresenta un mezzo di trasporto disponibile nel servizio.

| Proprietà | Tipo         | Descrizione                                                  |
| --------- | ------------ | ------------------------------------------------------------ |
| `tipo`    | `string`     | Tipologia del mezzo (`bicicletta`, `scooter`, `monopattino`) |
| `id`      | `string`     | Identificativo univoco                                       |
| `stato`   | `StatoMezzo` | Stato corrente (`disponibile` / `in uso`)                    |

Metodo: `assegnaUtente(utente: IUtente): void`

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

- **Prenotazione**: un utente chiama `prenotaMezzo(mezzo)`. Se il mezzo è disponibile, viene invocato `assegnaUtente(utente)` che aggiorna lo stato a `in uso` e associa l'utente al mezzo. Se il mezzo non è disponibile, viene lanciato un errore.
- **Aggiunta mezzi**: ogni città gestisce il proprio elenco di mezzi tramite `aggiungiMezzo(mezzo)`.

---

## Esecuzione

### Prerequisiti

- [Node.js](https://nodejs.org/) v18+
- [TypeScript](https://www.typescriptlang.org/) v5+

### Installazione

```bash
npm install -g typescript ts-node
```

### Avvio

```bash
ts-node src/app.ts
```

---

## Test

Il file include tre scenari di test:

1. **Aggiunta mezzi alle città** — i mezzi vengono distribuiti ciclicamente tra le città disponibili.
2. **Aggiunta di nuovi mezzi a runtime** — verifica che `aggiungiMezzo` aggiorni correttamente l'elenco.
3. **Prenotazione mezzi** — testa la prenotazione riuscita e il caso di errore (mezzo già in uso).

---

## Tecnologie

- [TypeScript](https://www.typescriptlang.org/)

---

## Link

[CodePen](https://codepen.io/DM-Square/pen/raMZxjZ) del progetto.

Interessato a una collaborazione? Mi trovi su [https://dm-square.github.io/](https://dm-square.github.io/).
