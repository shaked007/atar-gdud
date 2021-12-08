<template>
  <div class="middle"> 

    <h1> גדוד 383 - להגיע לצמרת</h1>
    <div class="flex-box-plugot">
    
          <button class="dropdown drowdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true"> שו"ב</button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li> <a class="dropdown-item">תקנ"ם</a> </li>
           

          </ul>
          
           <button>אג"ם</button>
            
            <button> מפקדה</button>
            
            <button> הפת"ק</button>
            
                  <button>תקשורת מטכ"ל</button>
         
            <button>טכנ"ל</button>
            

        </div>
      </div>
</template>

<script>
export default {
    name:"Title"

}
</script>

<style scoped>
ul{
  z-index:500;
}
button{
    /* transform:scaleX(1.5); */
    /* width:40%; */
    padding-left:5%; 
    padding-top:0.5%;
    padding-bottom:0.5%;
    padding-right:5%; 
    background-color:rgb(0,0,0,0);
    font-size:1vw;
    /* padding:1vw; */
    border-radius:5px;
    color:white;
    transition: transform 0.1s ease-out,background 0.2s linear;
    border:1px solid white;
}
button:hover{
    color: black;
    transform:scale(1.05);
    background-color:white;
    border:1px solid white;
    border-radius:5px;
}
.flex-box-plugot{
    /* align-items:center; */
    position:relative;
    top:20%;
    list-style-type: none;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
}
 h1{
     position:relative;
     top:10%;
     /* background-color:red; */
     text-align:center;
     font-family:heebo;
     font-size:5vw;
     color:white;
 }
 .middle{
    position:relative; 
    grid-column-start:col1-start;
    grid-column-end:span 7 ;
    grid-row-start:row3-end;
    grid-row-end:row4-end;
    /* background-image:url("../../assets/binyan.jpeg"); */
    
    }
</style>