# Přispívání k dokumentaci
Dokumentace architektur je uložena v tomto repositáři, tedy přispívání probíhá skrze Pull Requests.

Pokud nevíte, jak přispívat na GitHubu, tak můžete navštívit [stránku s příručkou pro nové přispěvatele](https://github.com/github/docs/blob/db0f087ed72f8b88597d66b2dae832d78f86ba5a/CONTRIBUTING.md#new-contributor-guide "Stránka s příručkou pro nové přispěvatele na GitHubu").

## Problémy (Issues)
Tato sekce se zabývá položkou Issues v rámci tohoto GitHub repositáře.

### Otevření problému
Pokud narazíte na problém s dokumentací libovolné architektury, tak nejdříve [vyhledejte](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments "Vyhledávání v rámci Issues"), jestli někdo neotevřel stejný problém. Pokud nikdo problém neotevřel, tak lze skrze formulář pro Issues otevřít nový problém.

### Řešení Issues
V rámci tohoto repositáře se nikomu nepřiřazují problémy, ale pokud máte řešení nějakého konkrétního problémů, tak otevřte PR spojené s daným problémem.

## Provádění změn
Provádění změn lze provádět skrze webový prohlížeč, kdy lze editovat stránky dokumentace přímo. Dále lze provádět změny lokálně na vlastní větvy (nebo forku repositáře), a pak vytvářet Pull Request se změnami.

### Provádění změn lokálně
1. Nainstalovat Git
2. Fork repositáře
    - Pomocí GitHub Desktop
        - [Začínáme s GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop "Začínáme s GitHub Desktop")
        - [Fork pomocí GitHub Desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop "Fork pomocí GitHub Desktop")
    - Pomocí příkazového řádku (CLI)
        - [Fork pomocí CLI](https://docs.github.com/en/get-started/quickstart/fork-a-repo#fork-an-example-repository "Fork pomocí CLI")
    - Pomocí GitHub CodeSpaces
        - [Fork, úprava a zobrazení náhledu](https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/creating-a-codespace)
3. Provedení změn v repositáři
4. Commit změn
5. Vytvoření PR

### GitHub Pages
**TODO**: přidat sekci o GitHub pages

## Commit změn
Poté co jste provedli změny v repositáři, tak je třeba provést tzv. stage změn (příkaz git add), a pak je třeba provést commit změn s následným push commitu s vhodnou zprávou.

## Pull Request (PR)
PR můžete otevírat skrze GitHub.com, GitHub Desktop, CLI a jiné.

Pokud budete mít problémy s konflikty, tak se můžete podívat na [git tutoriál](https://lab.github.com/githubtraining/managing-merge-conflicts "git tutoriál"), který vám s tím může pomoct.

### Merge PR
Změny do dokumentace potvrzuje architekt nebo osoba, jež má na starost dokumentaci architektury.
