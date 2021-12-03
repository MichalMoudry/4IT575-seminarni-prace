# Deployment view
## Primary presentation
### UML
![Deployment diagram](../assets/prodejni_system_deployment_diagram.png "Deployment diagram prodejního systému")

#### **Kód diagramu**
> @startuml
>
> node "Klientské zařízení" as client `<<device>>` {
>
>   artifact "Klientská aplikace prodejního systému" `<<application>>`
>
> }
>
> node "Webový server" as webServer `<<device>>` {
>
> node Kestrel `<<execution environment>>` {
>
>   artifact "Aplikace webové API" `<<application>>`
>
> }
>
> }
>
> node "Databázový server" as dbServer `<<device>>` {
>
>   node "MS SQL Server" `<<DBMS>>`
>
> }
>
> node "WMS server" as wmsServer `<<device>>`
>
> node "Social media server" as socialMediaServer `<<device>>`
>
> client -- webServer : "HTTP"
>
> webServer -- dbServer : "ODBC"
>
> webServer -left- wmsServer : "HTTP"
>
> webServer -- socialMediaServer : "HTTP"
>
> @enduml

## Element catalog
- **Klientské zařízení**
    - Fyzické zařízení v roli tenkého klienta, přičemž toto zařízení může mít libovolný operační systém.
- **Klientská aplikace prodejního systému**
    - Jde o klientskou aplikaci našeho prodejního systému, přičemž tato aplikace běží na tenkém klientovi.
- **Web server**
    - Fyzický server, na kterém běží Kestrel a .NET aplikaci pro webové API. Samozřejmě zde neuvažujeme load balancing, tedy v realitě může existovat několik síťových prvků (reverse proxy, load balancer) před webovým servrem, a také může existovat více fyzických webových serverů.
- **Kestrel**
    - Multiplatformní webový server pro .NET aplikace.
- **Aplikace webové API**
    - Jde o `ASP.NET Core` API aplikaci, která poskytuje endpointy a operace (aplikační model se konkrétně jmenuje `ASP.NET Core Web API`) pro požadované služby (ty jsou stanovené v diagramu komponent).
- **Databázový server**
    - Jedná se o fyzický server, na kterém běží databáze a MS SQL Server, přičemž jako komunikační protokol je využíván ODBC.
- **MS SQL Server**
    - Jde o Database Management System od společnosti Microsoft, který umožňuje pracovat s relačními databázovými tabulkami, které jsou používané naším prodejním systémem.
- **WMS server**
    - Jedná se o externí servery, které dohromady realizují Warehouse Management System, respektive jde o server poskytující jednotné rozhraní k daným serverům nebo serveru.
- **Social media server**
    - Jde o externí servery vlastníka sociálních sítí, respektive jde o server s API pro práci se sociální sítí vlastníka

## Context diagram
![Context diagram](../assets/prodejni_system_deployment_context_diagram.png "Kontextový diagram nasazení prodejního systému")

### **Kód diagramu**
> @startuml
>
> node "Prodejní systém" as prodejniSystem
>
> node WMS
>
> node "Vlastníci sociálních médií" as socialMediaOwners
>
> prodejniSystem -- WMS
>
> prodejniSystem -- socialMediaOwners
>
> @enduml

## Variability guide
**Vysoké množství podporovaných klientských zařízení**

Klientská aplikace prodejního systému by měla být multiplatformní, aby uživatelé nemuseli vlastnit specifické zařízení pro užívání prodejního systému.

**Nezávislost na platformě webového serveru**

Pro běh aplikace pro webové API je použit Kestrel, tedy aplikace nemusí běžet jen na Windows serveru (IIS), ale je podporovanán i Linux (nginx, Apache).

## Rationale
Výhodou využití REST služeb je abstrakce od konkrétní implementace služeb, tedy klientská aplikace je nezávislá na daných službách a komunikuje s nimi za pomoci ESB a HTTP protokolu. Další výhodou je využívání serveru Kestrel, který umožňuje nasadit webovou API na nginx nebo Apache, tedy není zde potřeba využívat IIS.

## Related Views
- [Diagram komponent](../moduly/components.md "Diagram komponent")