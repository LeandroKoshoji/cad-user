<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
:root {
  --clr-background: #f5f5f5;
  --clr-primary: #2d3f51;
  --clr-accent: #ff6854;
  --clr-txt-primary: #2d3f51;
  --clr-txt-secundary: #f5f5f5;
}
*{
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
body {
  background-color: var(--clr-background);
  color: var(--clr-txt-primary);
  min-height: 100vw;
  width: 100%;
}

a{
  color: inherit;
}

.container {
  width: Min(90% , 70rem);
  margin: 0 auto;
}
</style>
