# Wheels&Deals

Wheels&Deals is a full-featured web application for car transactions, streamlining the buying, selling, and renting of vehicles in a secure and efficient online environment. This project uses modern technologies to deliver an optimal user experience with powerful features.

## Features

* **Authentication and Authorization:** Secure user access via JWT.
* **Ad Management:** Users can create, edit, and delete car listings, including photo uploads through Cloudinary.
* **Responsive User Interface:** Designed with Bootstrap for a user-friendly experience across all devices.
* **Advanced Search and Filtering:** Find cars by various criteria (brand, price, type, etc.).
* **Instant Notifications:** Provides feedback using toast notifications with AlertifyJS.
* **File Upload Support:** Easy photo uploads for car listings using Ng2-file-upload.
* **Integrated Chatbot:** Virtual assistance powered by OpenAI API, offering users smart support.

## Technologies Used

### Back-End
* **Languages & Frameworks:** C#, .NET 8, Entity Framework Core, AutoMapper
* **Authentication & Authorization:** Microsoft.AspNetCore.Authentication.JwtBearer
* **Database & ORM:** Microsoft.EntityFrameworkCore, CloudinaryDotNet
* **Documentation & Testing:** Swagger, Postman

### Front-End
* **Languages & Libraries:** HTML5, CSS3, Bootstrap, Angular, TypeScript
* **Upload & Notification Libraries:** Ng2-file-upload, AlertifyJS

### Database
* **DBMS:** Microsoft SQL Server
* **Setup:** "Code-first" approach with migration management in Entity Framework

### Additional Tools
* **IDEs:** Visual Studio 2022 (for API development), Visual Studio Code (for front-end)
* **Version Control:** Git
* **API Integration:** OpenAI API for chatbot integration

## Installation and Setup

### Prerequisites

* [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
* [Node.js and npm](https://nodejs.org/)
* [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
* [Visual Studio 2022](https://visualstudio.microsoft.com/) (for back-end)
* [Visual Studio Code](https://code.visualstudio.com/) (for front-end)

### Installation Steps

1. **Clone the Repository:**

    ```sh
    git clone https://github.com/username/WheelsAndDeals.git
    cd WheelsAndDeals
    ```

2. **Database Configuration:**

   * Open SQL Server Management Studio (SSMS) and create a new database.
   * Update the connection string in `appsettings.json`:

     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=WheelsAndDealsDB;Trusted_Connection=True;MultipleActiveResultSets=true"
     }
     ```

3. **Apply Database Migrations:**

    ```sh
    dotnet ef database update
    ```

4. **Install Front-End Dependencies:**

    ```sh
    cd ClientApp
    npm install
    ```

5. **Run the Application:**

    * In Visual Studio 2022, set the API project as the startup project and run it.
    * In the `ClientApp` directory, start the Angular application:

    ```sh
    ng serve
    ```

6. **Access the Application:**
   * Open a browser and go to `http://localhost:4200` for the front-end interface.
   * The API is accessible by default at `http://localhost:5000`.

