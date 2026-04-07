# Moove 🛴

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Last Commit](https://img.shields.io/github/last-commit/DM-Square/Moove)

Sistema di gestione mezzi di micromobilità urbana condivisa (bici, scooter, monopattini), sviluppato in **TypeScript**.

---

## Descrizione

Moove è un'applicazione che modella il servizio di noleggio di mezzi elettrici in ambito urbano. Il progetto definisce le entità principali tramite interfacce TypeScript e ne implementa la logica attraverso classi concrete.

---

## Struttura del progetto

```
moove/
├── src/
│   ├── app.ts         # Interfacce, classi e test
│   └── tsconfig.json
├── .gitignore
├── index.html
└── README.md
```

---

## Entità

### `IMezzo`
Rappresenta un mezzo di trasporto disponibile nel servizio.

| Proprietà | Tipo | Descrizione |
|-----------|------|-------------|
| `tipo` | `string` | Tipologia del mezzo (`bicicletta`, `scooter`, `monopattino`) |
| `id` | `number` | Identificativo univoco |
| `stato` | `StatoMezzo` | Stato corrente (`disponibile` / `in uso`) |

Metodo: `assegnaUtente(utente: IUtente): void`

---

### `IUtente`
Rappresenta un utente registrato al servizio.

| Proprietà | Tipo | Descrizione |
|-----------|------|-------------|
| `nome` | `string` | Nome dell'utente |
| `cognome` | `string` | Cognome dell'utente |
| `email` | `string` | Indirizzo email |
| `metodoPagamento` | `string` | Metodo di pagamento preferito |

Metodo: `prenotaMezzo(mezzo: IMezzo): void`

---

### `ICitta`
Rappresenta una città in cui Moove opera.

| Proprietà | Tipo | Descrizione |
|-----------|------|-------------|
| `nome` | `string` | Nome della città |
| `mezzi` | `IMezzo[]` | Elenco dei mezzi disponibili |

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

[CodePen del progetto](https://codepen.io/DM-Square/pen/raMZxjZ)

Interessato a una collaborazione? Mi trovi su [https://dm-square.github.io/](https://dm-square.github.io/)
