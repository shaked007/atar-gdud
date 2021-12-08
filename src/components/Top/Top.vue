<template>
    <div class="top">
        <TopNavBar/>

      <div class="icons-container">
          <span><i class="bi bi-house-door-fill home bi-3x">
            </i> </span>
        </div>
      </div>
</template>

<script>
import TopNavBar from "./TopNavBar/TopNavBar"
export default {
  name: 'Top',
  components: {TopNavBar}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home{
  position:absolute;
  top:50%;
  border-left: 2px solid grey;
  border-right:2px solid grey;
  font-size:1.5vw;
  padding-left:0.4vw;
  padding-bottom:0;
  padding-right:0.4vw;
  transform:translate(0,-50%);
  /* width:20%; */
  /* height:50%; */
  /* bottom:0%; */
  right:9%;
  transition: 200ms ease-in;
  overflow:hidden;
}
i{

  /* font-size:2.3vw; */
  color:grey;
}
i:hover{
  background-color:white;
  
  cursor: pointer;
  color:black;
}
.icons-container{
  position:absolute;
  left:0%;
  top:0;
  width:10%;
  /* background-color:white; */
  height:100%;
  /* background-color:white; */
}
.top{
    position:relative; 
    grid-column-start:col1-start;
    grid-column-end:span 7 ;
    grid-row-start:row1-start;
    grid-row-end:row1-end;
    background-color:#1c1b1b;
}

</style>
