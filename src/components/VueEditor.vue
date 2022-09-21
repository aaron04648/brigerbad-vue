<template>
  <div class="testbox">
    <form action="/">
      <h1>JSON Edit Formular</h1>
      <p class="question">Choose which JSON File</p>
      <div class="question-answer">
        <select name="" id="dropdownmenu1"  @change="JSONedit()">
          <option class="options" value="">choose Jsonfile</option>
          <option class="options" value="">{{ this.Option1 }}</option>
          <option class="options" value="">{{ this.Option2 }}</option>
          <option class="options" value="">{{ this.Option3 }}</option>
          <option class="options" value="">{{ this.Option4 }}</option>
          <option class="options" value="">{{ this.Option5 }}</option>
        </select>
        <br />
        
        <h1 v-for="item in Therme" :key="item.id ">Firebase:{{item}}</h1>
    <!--<JsonEditorVue class="editor" v-model="data"/>
    <button @click.prevent="saveFile()">save</button>
  write with test{{test}}
  <p>write with data {{data}}</p>-->
        <br />
      
      </div>
      
    </form>
  </div>
</template>

<script>



import BrigeniaSprechblasen from ".//BrigeniaSprechblasen.json";
import Onlineticket from ".//Online-ticket.json";
import Spa from ".//jsonDataSpa.json";
//import Therme from ".//jsonData.json";
import AngeboteWerbung from ".//AngeboteWerbung.json";
//import JsonEditorVue from 'json-editor-vue3'

export default {
  components: {
   // JsonEditorVue
  },watch:{
    
  },
  data() {
    return {
      AngeboteWerbung: AngeboteWerbung,
      AngeboteWerbungID: "",
      Sprechblasen: BrigeniaSprechblasen,
      SprechblaseID: "",
      Onlineticket: Onlineticket,
      OnlineticketID: "",
      Spa: Spa,
      SpaID: "",
      Therme: [],
      ThermeID: "",
      Option1: "EntreeTherme",
      Option2: "EntreeSpa",
      Option3: "Onlineticket",
      Option4: "AngeboteWerbung",
      Option5: "Sprechblase",
    
      OptionID: "",
      preview: "",
      inputvalue:"",
      data:"",
      test:""
    }
  },
  methods: {
    JSONedit(){
      var select = document.getElementById("dropdownmenu1");
      var value = select.options[select.selectedIndex].text;

      if(value == "EntreeSpa"){
        this.data = this.Spa
      
      }
      if(value == "EntreeTherme"){
        this.data = this.Therme
    
      }
      if(value == "Onlineticket"){
        this.data = this.Onlineticket
        
      }
      if(value == "AngeboteWerbung"){
        this.data = this.AngeboteWerbung
      
      }
      if(value == "Sprechblase"){
        this.data = this.Sprechblasen
      
      }
    
    },saveFile(){
      console.log(this.data)
      localStorage.setItem("storedData",this.data)
      console.log(localStorage.getItem("storedData")) 
    },
  
    WhereToWrite(id){
      console.log("hallo")
   console.log(id)
    }
  },

};
</script>

<style  scoped>
#previewJSON {
  background-color: white;
  display: none;
  border: solid black;
  margin: 1vw;
}
h1 {
  font-weight: 400;
}
.testbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 3px;
}
form {
  width: 100%;
  padding: 20px;

  box-shadow: 0 2px 5px #ccc;
}
input {
  width: calc(100% - 10px);
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  vertical-align: middle;
}
input:hover,
textarea:hover {
  outline: none;
  border: 1px solid #095484;
}
th,
td {
  width: 28%;
  padding: 15px 0;

  text-align: center;
  vertical-align: unset;
  line-height: 18px;
  font-weight: 400;
  word-break: break-all;
}
.first-col {
  width: 16%;
  text-align: left;
}
textarea:hover {
  outline: none;
  border: 1px solid #1c87c9;
}
table {
  width: 100%;
}
textarea {
  width: calc(100% - 6px);
}
.question {
  padding: 15px 0 5px;
  color: grey;
}
.question-answer label {
  display: block;
  padding: 0 20px 10px 0;
}
.question-answer input {
  width: auto;
}
.btn-block {
  margin-top: 20px;
  text-align: center;
}
button {
  width: 150px;
  padding: 10px;
  border: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: #095484;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background-color: #0666a3;
}
@media (min-width: 568px) {
  th,
  td {
    word-break: keep-all;
  }
}
#Dropdown {
  border: none;
  border-radius: 00.5vw;
  box-shadow: 0.1vw 0.1vw 0.1vw grey;
  background: whitesmoke;
  width: 5vw;
  height: auto;
}
</style>
