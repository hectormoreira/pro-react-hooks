

# React Hooks - Platzi
Notas y repo del Curso Profesional de React Hooks de Platzi

[![Netlify Status](https://api.netlify.com/api/v1/badges/ca9d0728-31d8-4d54-8a31-a1de4c391615/deploy-status)](https://app.netlify.com/sites/proreacthooks-hectormoreira/deploys)
- [Proyecto en Netlify](https://proreacthooks-hectormoreira.netlify.app/)

```sh
npx create-react-app react-hooks
```

## ¿Qué son los React Hooks y cómo cambian el desarrollo con React?
Es una característica que salió en la versión 16.8 en febrero de 2019.
Los `Hooks` vienen a cambiar la forma de desarrollo en React.
⠀
Vienen a resolver problemas ligados a React, como la complejidad de los componentes, no se podía compartir la lógica de estado entre componentes, Component Hell, etc.

Los Hooks presentan una alternativa al desarrollo con clases, ya que estos vienen a trabajar con funciones.

⠀
## ¿Qué es un Hook?
Un `Hook` es una función especial que nos permitirá conectarnos a características de React, para trabajar con métodos especiales, los cuales nos permitirán manejar el estado de mejor forma sin depender de clases.

**useMemo**
- useMemo nos permitirá usar la memoización de forma simple
- Esto nos permite almacenar los resultados de una función para que, en caso de enviar los mismos argumentos que antes, ésta no haga los cálculos otra vez sino que devuelva el resultado que registró antes.

- **useCallback**: evita cálculos innecesarios en funciones
- **Custom hooks**: abstracción en la lógica de tus componentes





## Recursos
- [Rick and Morty Api](https://rickandmortyapi.com/)