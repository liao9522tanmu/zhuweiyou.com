<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body,
  #app {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
</style>
