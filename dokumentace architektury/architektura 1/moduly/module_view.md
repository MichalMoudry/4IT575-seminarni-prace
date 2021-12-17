# High Level Module View
## Primary presentation
![High level module view](../assets/prodejni_system_high_level_module_view.png "Diagram vrstev aplikací prodejního systému")

### Vysvětlivka diagramu
- **Package** (balíček) - Označuje modul (resp. komponentu) vystupující v modelovaném systému.

![Package](../assets/diagram_legend_assets/package.png)

- **Folder** (složka) - Jde o šložku v rámci modulu.

![Folder](../assets/diagram_legend_assets/folder.png)

### Kód diagramu
> @startuml
>
> package "Klientská aplikace" as clientApp {
>
> folder "Views"
>
> folder "ViewModels"
>
> folder "Services"
>
> }
>
> package "Aplikace webové API" as webApp {
>
> folder "DataAccess"
>
> folder "Migrations"
>
> folder "Controllers"
>
> }
>
> package "Sdílená knihovna" as sharedLibrary {
>
> folder "Models"
>
> }
>
> webApp .up.> sharedLibrary : `"<<use>>"`
>
> clientApp ..> sharedLibrary : `"<<use>>"`
 >
> clientApp ..> webApp
>
> @enduml

## Element catalog
- **Aplikace webové API**
    - Jedná se o aplikaci, která realizuje webové API a služby, přičemž tato aplikace běží na webovém serveru.
- **Klientská aplikace**
    - Jde o aplikaci prodejního systému, která běží na klientském zařízení.
- **Sdílená knihovna**
    - Jde o knihovnu, která je sdílená webovou aplikací a klientskou aplikací za účelem sdílení doménového modelu mezi nimi.
- **Views**
    - Jedná se o složku s tzv. Views, což jsou soubory definující uživatelské rozhraní (strukura, styly, animace, vazby na ViewModels a jiné).
- **ViewModels**
    - Jde o složku s tzv. ViewModels, což jsou soubory obsahující vlastnosti a příkazy, které může View využívat. Výhodou tohoto oddělení o UI je lepší testovatelnost.
- **Models**
    - Jde o složku s tzv. Models, což jsou třídy zapouzdřující data aplikace, tedy lze je považovat za doménový model aplikace, což obvykle zahrnuje business a validační logiku.
- **Services**
    - Jedná se o složku s tzv. Services, což jsou služby pro abstrakci metod ve ViewModels, tedy například místo toho, aby každý ViewModel implementoval zobrazení dialogových oken, tak to lze přesunout do Service třídy a využít ji skrze Dependency Injection.
- **Controllers**
    - Jedná se o složku se soubory obsahující metody, které jsou namapovány na konkrétní endpointy služeb nebo mohou být namapovány automaticky.
- **DataAccess**
    - Jde o složku na serverové aplikaci se soubory obsahující operace s databázovými tabulkami, které jsou definované v databázovém kontextu, který je ve stejné složce.
- **Migrations**
    - Jde o složku se soubory databázových migrací a databázového snapshotu, které jsou využívané EF Core.

## Variability guide
None

## Other information
Pro klientskou aplikace je zvolen architektonický vzor MVVM ([znázorněn níže](#mvvm "Komponenty MVVM")), což odpovídá složkám v elementu *Klientská aplikace*, přičemž modely jsou sdílené s webovou API skrze sdílenou knihovnu, což je dynamicky linkovaná knihovna v rámci softwarového řešení, jelikož jsou obě aplikace a knihovna řešena v rámci .NET, tak není třeba řešit interoperabilita.

<div id="mvvm">

![MVVM_komponenty](../assets/mvvm.png "Obrázek s komponentami architektonického vzoru MVVM")

</div>

Výhodou MVVM vzoru je vysoká znalost mezi .NET vývojáři.

## Related views
- [Diagram komponent](../moduly/components.md "Diagram komponent prodejního systému")