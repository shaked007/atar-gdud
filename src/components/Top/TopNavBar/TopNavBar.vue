<template>
<div class="flex-container"> 
  <ul class="flex-box-subjects">
      <li>
          <a>גרף גדודי 383 2020 </a>
        </li>
        <li>
          <a>צפייה במורשת גדוד 383  </a>
          </li>
        <li>
          <a>צפייה ביעדי הגדוד</a>
        </li>
    </ul>
</div>
</template>

<script >
export default {
    name:"TopNavBar"
}
</script>

<style scoped>
a{
    line-height:3px;
    color:grey !important;    
    position:relative;
    font-size:1.2vw;
    text-decoration: none;
    cursor:pointer;
    font-family:Rubik;
    /* transition-property: color; */
    transition: color 250ms;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}
a::after{
    content:'';
    margin-top:4px;
    position:absolute;
    left:0;
    bottom:-10%;
    width:100%;
    height:3px;
    border-radius:1px;
    background-color:white;
    transform: scale(0);
    transition: 250ms ease-in;
}
a:hover{
 color:white !important;       
}
a:hover::after{
    color:white !important;    

    cursor:pointer;
    transform:scaleX(1)
}
.flex-container{
    justify-content:center;
    position:relative;
    width:44%;
    height:100%;
    left:53%;
    /* width:50%;   */
}
.flex-box-subjects{
    display:flex;
    justify-content: space-around;
    list-style-type:none;
    align-items:center;
    height:100%;
    flex-flow:row-reverse nowrap;   
    padding:0;
    margin:0;
    
    /* position:absolute; */
    left:50%;
}

</style>