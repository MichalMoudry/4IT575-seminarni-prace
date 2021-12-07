# Hodnocení architektury č. 1
## Struktura hodnocení
- [Metodika](#metodika "Metodika hodnocení")
- [Hodnocení](#hodnoceni "Hodnocení architektury")
- [Souhrn hodnocení](#souhrn "Souhrn hodnocení")

## Metodika
Pro hodnocení architektury bude využita ordinální stupnice ([zobrazená níže](#tabulka "Tabulka s ordinální stupnicí")), kdy tato tabulka obsahuje slovní ohodnocení a číslené ohodnocení, přičemž číselné ohodnocení bude využito pro posuzování toho, jak zvolená softwarová architektura splňuje specifickou charakteristiku.

Samotné hodnocení bude uvedeno v tabulce, která bude obsahovat jednotlivé charakteristiky softwarových architektur, dále u každé charakteristiky budou informace, jak moc vybráná architektura splňuje danou vlastnost na škále 1 - 5, dále je zde váha důležitosti vlastnostni architektury, protože ne všechny jsou pro aplikaci vhodné, tedy výsledek je součin čísleného ohodnocení a váhy. Také hodnocení každé charakteristiky je doplněno o slovní ohodnocení.

Souhrn výsledků hodnocení charakteristik bude doplněn o slovní ohodnocení architektury, které bude uvedeno v [souhrnu](#souhrn "Souhrn hodnocení") tohoto dokumentu.

<div id="tabulka">

| Slovní ohodnocení | Číselné ohodnocení |
|-------------------|--------------------|
| Výborně           | 5                  |
| Dobře             | 4                  |
| Dostatečně        | 3                  |
| Ucházející        | 2                  |
| Nedostatečně      | 1                  |

</div>

## Hodnocení
| Charakteristika    | Splňuje | Váha | Výsledek | Vysvětlení |
|--------------------|---------|------|----------|------------|
| Dostupnost         |    5    | 10%  |          | Dostupnost je zajištěna nasazením do cloudového prostředí. |
| Kontinuita         |    3    | 50%  |          |            |
| Výkonnost          |    5    | 50%  |          | Klientská aplikace je kompilována do nativního kódu pro podporované platformy. Serverová aplikace využívá nejnovější .NET technologie pro dosažení vysokého výkonu. |
| Recoverability     |    4    | 50%  |          |            |
| Reliability        |    3    | 70%  |          |            |
| Robustnost         |    5    | 80%  |          | Serverová aplikace vrací 400 odpovědi v případě chyby. Klientská aplikace je schopna vypořádat se mnoha chybami (např. práce v offline režimu, manuální synchronizace s backendem). |
| Škálovatelnost     |    5    | 10%  |          | Škálovatelnost je zajištěna cloudovými službami. |
| Konfigurovatelnost |    3    | 10%  |          | Klientská aplikace lze minimálně nakonfigurovat koncovým uživatelem. |
| Rozšiřitelnost     |    5    | 10%  |          | Architektura serverové a klientské aplikace umožňuje vkládat nové prvky do jednotlivých vrstev. Také .NET dost podporuje rozšiřitelnost aplikací (např. skrze pinvoke). |
| Instalovatelnost   |    5    | 10%  |          | Klientská aplikace je multiplatformní a je distribuována obchodem vlastníků mobilních platforem. |
| Znovupoužitelnost  |    5    | 5%   |          | V rámci softwarového řešení lze snadno vytvářek komponenty, které lze snadno používat v aplikacích, dokonce v tomto případě je využívána sdílená knihovna mezi klient. a serverovou aplikací. Znovupoužitelnost je také podpořena .NET Standard. |
| Lokalizace         |    5    | 5%   |          | Klientská aplikace obsahuje systém pro načítání řetězců pro specifické jazyky, dle jazyku koncového zařízení. |
| Udržovatelnost     |    4    | 10%  |          | MVVM a MVC může časem narůst a přehlednost zdrojového kódu se může zhoršit, ale vždy zde bude konkrétní struktura. |
| Přenositelnost     |    5    | 10%  |          | Klientská aplikace je multiplatformní a serverová aplikace běží v Kestrelu, který je naimplementován na několika platformách. |
| Aktualizovatelnost |    5    | 10%  |   0,5    | Aktualizace klientských aplikací je realizována vlastníkem mobilních platforem. Serverová aplikace je aktualizována skrze nástroje poskytovatele cloud. služeb. |
| Podpora            |    2    | 5%   |          | Prodejní systém nepotřebuje vysokou úroveň technické podpory. |
| Zpřístupnění       |    3    | 50%  |          | Klientská aplikce je závislá na accessibility frameworks cílových platforem, které nemusí být vždy podporovat všechny uživatele, ale většinu by měla. |
| Archivovatelnost   |    5    | 100% |    5     | Výborná archivovatelnost je dosažena díky ukládání dat v cloudovém prostředí. |
| Autentizace        |    5    | 100% |    5     | .NET má otestované a bezpečné existující systémy pro autentizaci a autorizaci v aplikacích, ale i samotných webových API. |
| Autorizace         |    5    | 100% |    5     | .NET má otestované a bezpečné existující systémy pro autentizaci a autorizaci v aplikacích, ale i samotných webových API. |
| Právní             |    5    | 80%  |          | Funkcionalita pro export dat do účetních systémů odpovídá požadovanému formátu, dále jsou uchovávána učetní data po stanovenou dobu. |
| Soukromí           |    5    | 80%  |          | Klientské aplikace nekomunikují mezi sebou. |
| Zabezpečení        |    5    | 80%  |          | Zabezpečení dat je zajištěno poskytovatelem cloudových služeb. |
| Použitelnost       |    3    | 50%  |          | Klientská aplikace je dostatečně použitelná, protože není využita ověřená UI knihovna, ale jsou použity nativní UI prvky cílených platforem. |
| Souhrn             |    -    |   -  |          |      -     |

## Souhrn
