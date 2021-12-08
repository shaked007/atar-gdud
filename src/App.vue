<template>
  <router-view/>
</template>

<style>


@font-face{
    font-family:titleFont;
    src:url("./assets/titleFont.ttf")
}


@font-face{
    font-family:cellFont;
    src:url("./assets/cellFont.ttf")
}
@font-face{
    font-family:newFont;
    src:url("./assets/Bebas-Regular.ttf")
}
@font-face{
    font-family:Rubik;
    src:url("./assets/Rubik-Regular.ttf")
}
@font-face{
    font-family:Heebo;
    src:url("./assets/Heebo.ttf")
}


@font-face{
    font-family:clockFont;
    src:url("./assets/RobotoMono-VariableFont_wght.ttf")
}

\*{
  box-sizing: border-box;
}
html {
  height: 100%;
  

}
body {
  /* min-height: 100%; */
  /* top:0%; */
  background: #2193b0;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin: 0;
  /* z-index: -3; */

}
</style>
