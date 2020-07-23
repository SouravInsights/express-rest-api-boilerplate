# Express REST Api Boilerplate

## Project Structure


src
├── __tests__                                # All our test cases reside here.
│   └── server.spec.js
├── config
│   ├── dev.js
│   ├── index.js
│   ├── prod.js
│   └── testing.js
├── resources
│   ├── blog
│   |   └── __tests__                        # Tests related to the blog resource stays here. 
│   |   |    └── blog.router.spec.js
│   |   ├── blog.controller.js
│   |   ├── blog.model.js
│   |   └── blog.router.js
│   ├── challenges
│   |   └── __tests__
│   |   |    └── challenges.router.spec.js
│   |   ├── challenges.controller.js
│   |   ├── challenges.model.js
│   |   └── challenges.router.js
│   ├── projects
│   |   └── __tests__
│   |   |    └── projects.router.spec.js
│   |   ├── projects.controller.js
│   |   ├── projects.model.js
│   |   └── projects.router.js
|   ├── utils
|   |   └── __tests__
│   |   |   ├── auth.spec.js
│   |   |   └── crud.spec.js
│   |   ├── auth.js
│   |   ├── crud.js
│   ├── └── db.js
├── index.js
└── server.js


