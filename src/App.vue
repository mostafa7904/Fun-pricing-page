<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: "Rubik", sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  touch-action: manipulation;
  ::selection {
    background-color: #bed3ff;
  }
  ::-moz-selection {
    background-color: #bed3ff;
  }
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  word-spacing: 3px;
  @media screen and (max-width: 600px) {
    font-size: 0.85rem;
    word-spacing: 1px;
  }
}
</style>
