[< Zpět](../ "Zpět na přehled systému")

# Hodnocení architektury č. 2
## Struktura hodnocení
- [Metodika](#metodika "Metodika hodnocení")
- [Hodnocení](#hodnocení "Hodnocení architektury")
- [Souhrn hodnocení](#souhrn "Souhrn hodnocení")

## Metodika
Pro hodnocení architektury bude využita ordinální stupnice ([zobrazená níže](#ordinalni-stupnice "Tabulka s ordinální stupnicí")), kdy tato tabulka obsahuje slovní ohodnocení a číslené ohodnocení, přičemž číselné ohodnocení bude využito pro posuzování toho, jak zvolená softwarová architektura / řešení splňuje specifickou charakteristiku.

Samotné hodnocení bude uvedeno v tabulce, která bude obsahovat jednotlivé charakteristiky softwarových architektur, dále u každé charakteristiky budou informace, jak moc vybráná architektura / řešení splňuje danou vlastnost na škále 1 - 5 (5 je nejlepší ohodnocení), dále je zde váha důležitosti vlastnostni architektury, protože ne všechny jsou pro aplikaci vhodné, tedy výsledek je součin čísleného ohodnocení a váhy. Také hodnocení každé charakteristiky je doplněno o slovní ohodnocení.

Souhrn výsledků hodnocení charakteristik bude doplněn o slovní ohodnocení architektury, které bude uvedeno v [souhrnu](#souhrn "Souhrn hodnocení") tohoto dokumentu.

<div id="ordinalni-stupnice">

| Slovní ohodnocení | Číselné ohodnocení |
|-------------------|--------------------|
| Výborně           | 5                  |
| Dobře             | 4                  |
| Dostatečně        | 3                  |
| Ucházející        | 2                  |
| Nedostatečně      | 1                  |

</div>

## Hodnocení
| Charakteristika    | Splňuje | Váha |  Výsledek  |
|--------------------|---------|------|------------|
| Dostupnost         |    5    |  10% |    0,5     |
| Kontinuita         |    3    |  30% |    1,5     |
| Výkonnost          |    5    |  50% |    2,5     |
| Recoverability     |    3    |  10% |    0,3     |
| Reliability        |    3    |  50% |    1,5     |
| Robustnost         |    4    |  80% |    3,2     |
| Škálovatelnost     |    5    |  10% |    0,5     |
| Elasticita         |    5    | 100% |     5      |
| Konfigurovatelnost |    3    |  10% |    0,3     |
| Rozšiřitelnost     |    5    |  10% |    0,5     |
| Instalovatelnost   |    3    |  10% |    0,3     |
| Znovupoužitelnost  |    5    |   5% |    0,25    |
| Lokalizace         |    5    |   5% |    0,25    |
| Udržovatelnost     |    4    |  10% |    0,4     |
| Přenositelnost     |    5    |  10% |    0,5     |
| Aktualizovatelnost |    5    |  10% |    0,5     |
| Podpora            |    2    |   5% |    0,1     |
| Zpřístupnění       |    3    |  50% |    1,5     |
| Archivovatelnost   |    5    | 100% |     5      |
| Autentizace        |    5    | 100% |     5      |
| Autorizace         |    5    | 100% |     5      |
| Právní             |    5    |  80% |     4      |
| Soukromí           |    5    |  50% |    2,5     |
| Zabezpečení        |    5    |  80% |     4      |
| Použitelnost       |    3    |  50% |    1,5     |
| Souhrn             |    -    |   -  | 46 / 51,25 |

## Souhrn
Hodnocení tohoto řešení dosahuje 46 bodů z 51,25 možných (v procentech **89,8%**), což naznačuje, že naše rozhodnutí spojené s architekturou prodejního systému jsou validní. Hodnocení je blízké architektuře č.1 jelikož si jsou architetury podobné, což je zapříčiněno použitím velice podobných technologií a sledováním stejných cílů.

Hlavní výhodou řešení aplikace pomocí událostmi řízené architektury je její vysoká rychlost. Ta vychází nejen ze samotného použití EDA, ale i z rozhodnutí použít pro komunikaci klientské aplikace se serverem protokol WebSocket. Použití topologie mediátor potom umožňuje dosáhnout větší “zapouzdřenosti” a tedy i bezpečnosti, jelikož mediátor byl umístěn na samostatný webový server, který slouží jako spojení mezi klientskou aplikací a aplikačním serverem; to znamená, že klientská aplikace nemůže k aplikačnímu serveru přistupovat přímo.

Tradeoff tohoto řešení je nutnost udržovat pro komunikaci klientské aplikace s backendem neustále otevřené připojení (charakteristika protokolu WebSocket). Dá se očekávat vyšší cena než při použití alternativních řešení a vyšší náklady na provoz serverů.
