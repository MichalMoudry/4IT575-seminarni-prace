# Rozhodnutí o architektuře klientských aplikací
## ID
2

## Datum
19.11.2021

## Status
Schválené

## Context
Existuje požadavek na jednoduchou a lightweight aplikaci pro zařízení využívané prodejci ve stáncích s hot dogy. Stejné požadavky lze přenést na aplikaci určenou pro zákazníky těchto stánků.

## Decision
Budeme využívat vrstvenou monolitickou architekturu pro naše klientské aplikace.

## Consequences
Struktura našich klientských aplikací bude rozdělena do vrstev v rámci monolitu (např. dle vzoru MVVM). Výhodou je malá velikost a jednoduchost aplikací.