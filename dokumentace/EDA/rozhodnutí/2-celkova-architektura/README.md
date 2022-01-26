[< Zpět](../ "Zpět na přehled architektonických rozhodnutí")

# Rozhodnutí o celkové architektuře systému

## ID
2

## Datum
09.12.2021

## Status
Schválené

## Context
Je třeba zvolit architekturu prodejního systému.

## Decision
Pro prodejní systému budeme využívat Event Driven Architecture a architektura rozhraní bude Websocket.

## Consequences
Bude existovat webový server, který bude fungovat jako mediátor zajišťující výměnu zpráv mezi komponentami zajišťující funkcionalitu jednotlivých služeb, a pro klienstké aplikace tím bude poskytovat API pro přístup k daným službám. Ve výsledku klientská aplikace bude posílat requesty na daný server a server bude posílat odpovědi na zpět, přičemž pro tělo requestů a odpovědí bude požit JSON pro snazší serializaci a deserializaci obsahu.

Důvodem zvolení této architektury je vysoká škálovatelnost a výkonnost, která umožní provozovat systém i pokud v pokud se v příštích letech počet stánků výrazně zvýší, což je vhodné, protože v rámci zadání byl stanoven požadavek delší životnosti systému.
