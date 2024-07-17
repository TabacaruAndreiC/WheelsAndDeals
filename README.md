# Wheels&Deals

Wheels&Deals este o aplicație web completă pentru tranzacții auto, care facilitează vânzarea, cumpărarea și închirierea de mașini într-un mediu online sigur și eficient. Proiectul utilizează tehnologii moderne pentru a oferi o experiență de utilizare optimă și funcționalități avansate.

## Funcționalități

- **Autentificare și autorizare:** Utilizând JWT pentru securizarea accesului utilizatorilor.
- **Gestionare anunțuri:** Posibilitatea de a posta, edita și șterge anunțuri pentru mașini, inclusiv încărcarea de fotografii prin Cloudinary.
- **Interfață prietenoasă:** Design responsive și intuitiv, realizat cu Bootstrap, pentru a asigura accesibilitate pe toate dispozitivele.
- **Căutare și filtrare:** Funcționalități avansate de căutare și filtrare a mașinilor după diverse criterii (brand, preț, tip, etc.).
- **Notificări:** Utilizarea AlertifyJS pentru notificări de tip toast, oferind feedback instantaneu utilizatorilor.
- **Încărcare fișiere:** Implementare cu Ng2-file-upload pentru încărcarea facilă a fotografiilor mașinilor.
- **Chatbot integrat:** Utilizarea OpenAI API pentru a oferi asistență virtuală utilizatorilor prin intermediul unui chatbot inteligent.

## Tehnologii utilizate

### Back-end
- C#
- .NET 8
- Entity Framework Core
- AutoMapper
- CloudinaryDotNet
- Microsoft.AspNetCore.Authentication.JwtBearer
- Microsoft.EntityFrameworkCore
- Swagger
- Postman

### Front-end
- HTML5
- CSS3
- Bootstrap
- Angular
- TypeScript
- Ng2-file-upload
- AlertifyJS

### Bază de date
- Microsoft SQL Server Management Studio (SSMS)
- Abordarea "code first" și gestionarea migrațiilor

### Alte tehnologii
- Visual Studio 2022 pentru dezvoltarea API-ului
- Visual Studio Code pentru front-end
- Git pentru controlul versiunilor
- OpenAI API pentru integrarea unui chatbot

## Instalare și configurare

### Prerequisites

- .NET 8 SDK
- Node.js și npm
- SQL Server
- Visual Studio 2022 (pentru back-end)
- Visual Studio Code (pentru front-end)

### Pași de instalare

1. **Clonează repository-ul:**

    ```sh
    git clone https://github.com/utilizator/WheelsAndDeals.git
    cd WheelsAndDeals
    ```

2. **Configurare baza de date:**

   - Deschide SQL Server Management Studio (SSMS) și creează o nouă bază de date.
   - Configurează connection string-ul în `appsettings.json`:

     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=WheelsAndDealsDB;Trusted_Connection=True;MultipleActiveResultSets=true"
     }
     ```

3. **Rularea migrațiilor pentru a crea schema bazei de date:**

    ```sh
    dotnet ef database update
    ```

4. **Instalarea pachetelor pentru front-end:**

    ```sh
    cd ClientApp
    npm install
    ```

5. **Rularea aplicației:**

    - În Visual Studio 2022, setează proiectul API ca proiect de start și rulează-l.
    - În terminalul din `ClientApp`, rulează aplicația Angular:

    ```sh
    ng serve
    ```

6. **Accesarea aplicației:**
   - Deschide un browser și accesează `http://localhost:4200` pentru a vedea interfața front-end.
   - API-ul rulează implicit la `http://localhost:5000`.

