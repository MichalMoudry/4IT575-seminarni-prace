---
layout: default
title: Rozhodnutí o nasazení prodejního systému
parent: Architektonická rozhodnutí pro architekturu č. 1
nav_order: 6
---

# Rozhodnutí o nasazení prodejního systému

## ID
6

## Datum
07.12.2021

## Status
Schválené

## Context
Prodejní systém musí někde běžet a být dostupný.

## Decision
Backend prodejního systému bude nasazen do cloudového prostředí, a to konkrétně Microsoft Azure. Dále klientské aplikace bude dostupné přes aplikační obchody vlastníků mobilních platforem, a to konkrétně Microsoft Store, Apple App Store a Google Play.

## Consequences
Backend prodejního systému poběží na MS Azure, protože webová aplikace je .NET aplikace a nasazení na Azure je snazší, také optimalizace .NET aplikací na dané cloudové platformě lze realizovat lépe. Co se týče klientských aplikací, tak ty lze stánout z Microsoft Store, Apple App Store nebo Google Play, aby ta aplikace byla co nejdostupnější pro provozovatele stánků.