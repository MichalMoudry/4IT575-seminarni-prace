# Rozhodnutí o sbírání geolokačních dat
## ID
1

## Datum
19.11.2021

## Status
Accepted

## Context
Existuje požadavek na sbírání geolokačních dat z klientských zařízení.

## Decision
Budeme využívat Google Play services location API pro sběr dat.

## Consequences
Klientská aplikace bude spojená s Google Play SDK. Výhodou je snazší sběr geolokačních dat, ale nevýhodou je to, že klienstké zařízení musí obsahovat Google Play Services.