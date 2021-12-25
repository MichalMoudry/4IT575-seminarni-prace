# Rozhodnutí o architektuře backendu

## ID
4

## Datum
09.12.2021

## Status
Schválené

## Context
V rámci zadání je požadavek, že řešení by nemělo být třeba vyměnit za 3 roky, dále je také stanovené, že je důležitá doba dodání.

## Decision
Backend bude realizovaný serverovou aplikací, která odpovídá aplikačnímu modelu `ASP.NET Core Web API`.

## Consequences
Pro serverovou aplikaci budeme využívat `ASP.NET Core` aplikaci, která bude poskytovat  klientským zařízením služby skrze webové API. Důvodem zvolení této technologie je rozšířenosti a vyspělosti technologie. Díky tomu, že se vývojářský tým primárně zaměřuje na technologii .NET, by vývoj serverové aplikace měl zabrat nejméně času oproti aplikacím využívající jiné technologie.

Ve výsledku využití `ASP.NET Core Web API` bude mít za následek to, že vývoj bude rychlejší a výsledná aplikace bude kvalitnější, a také bude využívat nejnovější technologie v rámci platformy .NET, přičemž .NET dlouhodobě podporuje různé verze platformy (dalším bonusem je i snadný upgrade na nové verze platformy pro existující aplikace).
