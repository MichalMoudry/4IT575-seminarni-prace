# Rozhodnutí o robustnosti klientské aplikace

## ID
5

## Datum
05.12.2021

## Status
Schválené

## Context
Klientská aplikace prodejního systému komunikuje s backendem skrze bezdrátové připojení, protože stánek musí být mobilní, tedy není vždy zaručeno konzistentní připojení k internetu.

## Decision
Klientská aplikace musí obsahovat funkcionalitu pro podporu offline režim provozu, aby nijak nebyl omezen provoz na stáncích.

## Consequences
V rámci klientské aplikace bude třeba naimplementovat funkcionalitu, tak aby aplikace mohla normálně fungovat bez připojení k internetu, což je doplěno o synchronizační mechanismus s backendem.