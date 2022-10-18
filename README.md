## Hugo Svelte Tailwind Template

I built this template to develop static websites with Hugo and custom Svelte components. It also uses Tailwindcss. 

##  Introduction
All static content is managed with Hugo in the `content` dir. 
Componenets can be written in the `app` dir, and it must use a custom tag.

### How to Run it

First, install [Hugo Extended](https://gohugo.io/getting-started/installing/) ver `0.101.0` or greater. 

```
git clone <this-repo>
yarn install
yarn start
```

Check it on on `http://localhost:6979/`.


## Commands

- `yarn start`: Main dev server. Runs everything you need. 
- `yarn dev`: Runs components in isolation. Serves `app/index.html` as a playground for components. 
- `yarn hugo`: Only runs static site. 
- `yarn build`: Build for production