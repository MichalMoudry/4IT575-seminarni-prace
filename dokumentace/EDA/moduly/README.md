[< Zpět](../ "Zpět na přehled systému")

# High Level Module View
V tomto pohledu jsou zobrezeny moduly komponent prodejního systému.

## Primary presentation
![High level module view](../assets/prodejni_system_high_level_module_view.png "Diagram vrstev aplikací prodejního systému")

### Vysvětlivka diagramu
- **Package** (balíček) - Označuje modul (resp. komponentu) vystupující v modelovaném systému.

![Package](../assets/diagram_legend_assets/package.png)

- **Folder** (složka) - Jde o šložku v rámci modulu.

![Folder](../assets/diagram_legend_assets/folder.png)

### Kód diagramu
Kód diagramu je pro tvorbu diagramu přes PlantUML.

Odkaz na textový soubor s kódem: [odkaz](../assets/diagram_codes/modules_diagram.puml).

---

## Element catalog
- **Aplikace webové API**
    - Jedná se o aplikaci, která realizuje webové API a služby, přičemž tato aplikace běží na webovém serveru.
- **Klientská aplikace**
    - Jde o aplikaci prodejního systému, která běží na klientském zařízení.
- **Sdílená knihovna**
    - Jde o knihovnu, která je sdílená webovou aplikací a klientskou aplikací za účelem sdílení doménového modelu mezi nimi.
- **Testy**
    - Jedná se o softwarový projekt, který referencuje klientskou a serverovou aplikaci, přičemž sám obsahuje testy daných projektů.
- **Databáze**
    - Jde o databázový systém (SŘBD + databáze), která je využívaná serverovou aplikací.
- **Views**
    - Jedná se o složku s tzv. Views, což jsou soubory definující uživatelské rozhraní (strukura, styly, animace, vazby na ViewModels a jiné).
- **ViewModels**
    - Jde o složku s tzv. ViewModels, což jsou soubory obsahující vlastnosti a příkazy, které může View využívat. Výhodou tohoto oddělení o UI je lepší testovatelnost.
- **Models**
    - Jde o složku s tzv. Models, což jsou třídy zapouzdřující data aplikace, tedy lze je považovat za doménový model aplikace, což obvykle zahrnuje business a validační logiku.
- **Animations**
    - Složka se soubory, které obsahují implementaci vlastních animací, jež budou využívané v UI klientské aplikace.
- **Controls**
    - Složka obsahující soubory s prvky (komponentami) UI, které lze využívat na několika různých stránkách.
- **Constants**
    - Složka se soubory obsahující konstanty, které jsou využívané v klientské aplikaci (např. konstanty pro uživatelské nastavení).
- **Services**
    - Jedná se o složku s tzv. Services, což jsou služby pro abstrakci metod ve ViewModels, tedy například místo toho, aby každý ViewModel implementoval zobrazení dialogových oken, tak to lze přesunout do Service třídy a využít ji skrze Dependency Injection.
- **Controllers**
    - Jedná se o složku se soubory obsahující metody, které jsou namapovány na konkrétní endpointy služeb nebo mohou být namapovány automaticky.
- **Mediator**
    - Obsahuje logiku toho jak má mediátor vyhodnotit a kam předat, které službě, příchozí zprávy.
- **DataAccess**
    - Jde o složku na serverové aplikaci se soubory obsahující operace s databázovými tabulkami, které jsou definované v databázovém kontextu, který je ve stejné složce.
- **Migrations**
    - Jde o složku se soubory databázových migrací a databázového snapshotu, které jsou využívané EF Core.
- **Pages**
    - Jedná se o složku se stránkami serverové aplikace (např. 404 stránka).
- **ClientTests**
    - Složka s testy klientské aplikace prodejního systému.
- **ServerTests**
    - Složka s testy serverové aplikace prodejního systému.
- **DatabaseTables**
    - Jde o složku obsahujcí datové soubory databázových tabulek.
- **Indexes**
    - Jde o složku se soubory obsahující index pro data v databázových tabulkách.
- **Catalog**
    - Jedná se o on-line katalog (metadata databázových tabulek) databázového systému.

---

## Variability guide
None

---

## Other information
Pro klientskou aplikace je zvolen architektonický vzor MVVM (znázorněn níže), což odpovídá složkám v elementu *Klientská aplikace*, přičemž modely jsou sdílené s webovou API skrze sdílenou knihovnu, což je dynamicky linkovaná knihovna v rámci softwarového řešení, jelikož jsou obě aplikace a knihovna řešena v rámci .NET, tak není třeba řešit interoperabilita.

![MVVM_komponenty](../assets/mvvm.png "Obrázek s komponentami architektonického vzoru MVVM")

Výhodou MVVM vzoru je vysoká znalost mezi .NET vývojáři.

---

## Related views
- [Diagram komponent](../komponenty "Diagram komponent prodejního systému")
