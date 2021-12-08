<template>
     <img src="./../assets/binyan.jpeg">

  <div class="home-page-container">
    <Top />
    <TitleAndFlex/>
  </div>
</template>

<script>
import TitleAndFlex from '@/components/TitleAndFlex/Title'
import Top from '@/components/Top/Top'

export default {
  name: 'Home',
  components: {
    TitleAndFlex,
    Top
  }
}
</script>


<style>
img{
  position: absolute;
  z-index: -100;
  width:100%;
  height:94.4%;
  top:5.5%;  
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

}
.home-page-container{
    display: grid;
    grid-template-columns: [col1-start]1fr [col1-end col2-start]1fr [col2-end col3-start]1fr [col3-end col4-start]1fr [col4-end col5-start]1fr [col5-end col6-start]1fr [col6-end]1fr;
    grid-template-rows: [row1-start]0.3fr [row1-end row2-start]1fr [row2-end row3-start]1fr [row3-end row4-start]1fr [row3-end row4-start]1fr [row4-end]1fr;
    gap: 2px 2px;
    grid-auto-flow: row;
    grid-template-areas:
      ". . . . . . ."
      ". . . . . . ."
      ". . . . . . ."
      ". . . . . . ."
      ". . . . . . ."
      ". . . . . . .";
    width: 100vw;
    height: 100vh;

}

</style>


