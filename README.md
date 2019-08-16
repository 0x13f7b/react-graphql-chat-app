### Init

.env-sample file contains a DB_URL definition which should be a mongodb link.
E,g:

`DB_URL=mongodb+srv://chat:<password>@cluster0-td5lx.mongodb.net/test?retryWrites=true&w=majority
`

You need to put this with your credentials in the .env file.

# Editor.md

follow the next set of commands:

```shell
cd server
npm install

cd ..

cd client
npm install

cd ..

npm run:server
npm run:client
```

Open 2 browsers to test at http://localhost:3000

After you input the username + email you should see 2 active people in the chat which can talk together.

