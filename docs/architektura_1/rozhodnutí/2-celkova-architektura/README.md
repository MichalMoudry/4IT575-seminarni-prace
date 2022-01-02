---
layout: default
title: Rozhodnutí o celkové architektuře systému
parent: Architektonická rozhodnutí pro architekturu č. 1
grand_parent: Architektura č. 1
nav_order: 2
---

# Rozhodnutí o celkové architektuře systému

## ID
2

## Datum
07.12.2021

## Status
Schválené

## Context
Je třeba zvolit architekturu prodejního systému.

## Decision
Pro prodejní systému budeme využívat Service Oriented Architecture a architektura rozhraní bude REST.

## Consequences
Bude existovat webový server, na kterém poběží aplikace realizující funkcionalitu požadovaných služeb, a také bude poskytovat API pro přístup k daným službám. Ve výsledku klientská aplikace bude posílat requesty na daný server a server bude posílat odpovědi na zpět, přičemž pro tělo HTTP requestů a odpovědí bude požit JSON pro snazší serializaci a deserializaci obsahu.

Důvodem zvolení této architektury je snazší implementace, která není příliš komplikovaná, což je vhodné, protože v rámci zadání nejsou stanovené požadavky na časté aktualizace dat na klientském zařízení, pokud by tento požadavek existoval, tak by bylo vhodné využít RPC.