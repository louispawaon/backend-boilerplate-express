# **BACKEND-INFRASTRUCTURE-BOILERPLATE**
This repository serves as a boilerplate for kickstarting backend development using Node.js, Express.js, TypeScript, and Prisma. It provides a basic structure and setup for building RESTful APIs and handling database operations.

## **Getting Started**

1. Clone the Repository
```bash
git clone https://github.com/louispawaon/backend-boilerplate.git
```
2. Install dependencies

```bash
npm i
```
3. Set up environment variables
    - Create a *.env* file and follow the format given at the *.env.example* file, then configure environment variables as needed.
4. Compile TypeScript code
```
npm run build
```
5. Run the Server
```
npm run start
```

The server will start running at http://localhost:3000.

## **About Prisma**
This project utilizes [Prisma](https://www.prisma.io/) as the ORM (Object-Relational Mapping) tool for database operations. Prisma provides a modern database toolkit for Node.js and TypeScript, making it easy to work with databases and write type-safe queries.

1. **Set Up Prisma Configuration**: Define your database connection in the `schema.prisma` file located in the `prisma/ directory`.

``` prisma
// prisma/schema.prisma
datasource db {
  provider = "sqlite" // Replace with your Database of Choice
  url      = env("DATABASE_URL")
}
```

2. **Generate Prisma Client**: Run the following command to generate Prisma Client:
   
```bash
prisma generate
```

3. **Database Migrations**: When you make changes to your data model, you can use Prisma Migrate to apply database migrations. For example, to create a migration:

```bash
prisma migrate dev --name <migration-name>
```

[Prisma Official Documentation](https://www.prisma.io/docs)

## **Folder Structure**

```bash
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
│   └── index.ts
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json

```

## **Contributing**
Contributions are welcome! Feel free to open issues and pull requests for any improvements or additional features.

