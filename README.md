# 4IT575 Seminární práce
Repositář s dokumenty, které se týkají seminární práce v rámci předmětu 4IT575 - Softwarové architektury.

## Obsah repositáře
- [Popis aplikace](#popis-aplikace "Popis aplikace")
- [Dokumentace architektury č. 1](./dokumentace%20architektury/architektura%201 "Dokumentace architektury č. 1")
- [Dokumentace architektury č. 2](./dokumentace%20architektury/architektura%202 "Dokumentace architektury č. 2")

## Popis aplikace
Místní obchodník se stánky s párky v rohlíku chce pro své provozovatele stánků s párky v rohlíku prodejní systém.

**Uživatelé**: asi padesát provozovatelů stánků s hot dogy, tisíce zákazníků v okolí (prostřednictvím sociálních médií).

### Požadavky
- Musí být jednoduchý a běžet na malých zařízeních - notebook je příliš těžký na to, aby se dal efektivně používat při prodeji hot dogů na ulici
- Umožnit slevy
- Sledovat tržby podle času a místa
- Posílat aktualizace zásob mobilním pracovníkům pro správu zásob (kteří jezdí na místo se zásobami).
- Umožňují integraci se sociálními sítěmi, takže zákazníci mohou být informováni o tom, že je stánek s hot dogy poblíž.
- Exportovat informace ve formátu importovatelném účetními nástroji

### Další souvislosti
- Systém je potřeba, protože současné nesourodé způsoby sledování prodeje vyžadují příliš mnoho ruční práce
- Důležitá je doba dodání systému
- Je důležité vybudovat řešení, které nebude třeba za 3 roky vyměnit
- Žádná vážná rozpočtová omezení

### Aplikace v systému
- Klientská aplikace pro prodejní systém
- Backend pro obsluhu klientských aplikací

### Zdroj
PÍSEK, Slavoj, 2021. Zadání seminární práce z předmětu 4IT575 – Softwarové Architektury. 10. listopad 2021.

## Správa dokumentace
Správa dokumentace by měla být v souladu s contributing guidelines tohoto repositáře (viz. [Contributing guidelines](./CONTRIBUTING.md "Contributing guidelines")).

## Zvolené architektury
- Service Oriented Architecture - SOA
    - [ADR o využítí SOA](./dokumentace%20architektury/architektura%201/rozhodnutí/2_rozhodnuti_o_celkove_architekture_systemu.md "ADR o využítí SOA")
- Event Driven Architecture - EDA
    - [ADR o využítí EDA](./dokumentace%20architektury/architektura%202/rozhodnutí/2_rozhodnuti_o_celkove_architekture_systemu.md "ADR o využítí EDA")