# Rozhodnutí o architektuře klientských aplikací
## ID
3

## Datum
09.12.2021

## Status
Schváleno

## Context
Existuje požadavek na jednoduchou a lightweight aplikaci pro zařízení využívané uživateli prodejního systému, tedy se jedná o obchodníka se stánky, provozovatele stánků a pracovníka správy zásob.

## Decision
Budeme využívat vrstvenou monolitickou architekturu (= monolitický frontend) pro naše klientské aplikace.

## Consequences
Struktura našich klientských aplikací bude rozdělena do vrstev v rámci monolitu, a to konkrétně architektonický vzor MVVM. Výhodou je malá velikost, jednoduchost a testovatelnost aplikací, přičemž vzor MVVM je dost populární v rámci .NET, tedy většina .NET vývojářů ho zná.
