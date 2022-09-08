<template>
  <div class="testbox">
    <form action="/">
      <h1>JSON Edit Formular</h1>
      <p class="question">Choose which JSON File</p>
      <div class="question-answer">
        <select name="" id="dropdownmenu1" @change="JSONedit()">
          <option class="options" value="">choose Jsonfile</option>
          <option class="options" value="">{{ this.Option1 }}</option>
          <option class="options" value="">{{ this.Option2 }}</option>
          <option class="options" value="">{{ this.Option3 }}</option>
          <option class="options" value="">{{ this.Option4 }}</option>
          <option class="options" value="">{{ this.Option5 }}</option>
        </select>
        <br />
        <p class="question">Preview of Jsonfile:</p>
        <div id="previewJSON">{{ this.preview }}</div>
        <p class="question" id="questionid" style="display: none">
          choose which ID
        </p>

        <br />

        <select @change=WhereToWrite() name="" id="idselection" style="display: none">
          <option  v-for="item in preview" :key="item.id" id="selectedID">
            {{ item.ID }}
          </option>
         
        </select>
      </div>
      <p class="question">Write in Field</p>
      <textarea rows="5"></textarea>
      <p class="question">Did you find what you needed?</p>
      <div class="question-answer">
        <label
          ><input type="radio" value="none" name="needed" /> Yes, all of
          it</label
        >
        <label
          ><input type="radio" value="none" name="needed" /> Yes, some of
          it</label
        >
        <label
          ><input type="radio" value="none" name="needed" /> No, none of
          it</label
        >
      </div>
      <p class="question">
        If you did not find any or all of what you needed, please tell us what
        information you were looking for.
      </p>
      <textarea rows="5"></textarea>
      <p class="question">
        Please tell us how easy it is to find information on the site.
      </p>
      <div class="question-answer">
        <label><input type="radio" value="none" name="easy" /> Very Easy</label>
        <label><input type="radio" value="none" name="easy" /> Easy</label>
        <label><input type="radio" value="none" name="easy" /> Average</label>
        <label><input type="radio" value="none" name="easy" /> Difficult</label>
        <label
          ><input type="radio" value="none" name="easy" /> Very Difficult</label
        >
      </div>
      <p class="question">What is your overall impression of the site?</p>

      <p class="question">
        What is the likelihood that you will visit the website again?
      </p>
      <div class="question-answer">
        <label
          ><input type="radio" value="none" name="likelihood" /> Extremely
          likely</label
        >
        <label
          ><input type="radio" value="none" name="likelihood" /> Very
          likely</label
        >
        <label
          ><input type="radio" value="none" name="likelihood" /> Moderately
          likely</label
        >
        <label
          ><input type="radio" value="none" name="likelihood" /> aSlightly
          likely</label
        >
        <label
          ><input type="radio" value="none" name="likelihood" /> Not at all
          likely</label
        >
      </div>
      <p class="question">
        Please add any comments you have for improving the website. We welcome
        suggestions on specific areas for improvements, features you would like
        to see added to the site, and examples of what you consider good
        websites.
      </p>
      <textarea rows="5"></textarea>
      <div class="btn-block">
        <button type="submit" href="/">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
import BrigeniaSprechblasen from ".//BrigeniaSprechblasen.json";
import Onlineticket from ".//Online-ticket.json";
import Spa from ".//jsonDataSpa.json";
import Therme from ".//jsonData.json";
import AngeboteWerbung from ".//AngeboteWerbung.json";

export default {
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
      Therme: Therme,
      ThermeID: "",
      Option1: "EntreeTherme",
      Option2: "EntreeSpa",
      Option3: "Onlineticket",
      Option4: "AngeboteWerbung",
      Option5: "Sprechblase",
      OptionID: "",
      preview: "",
    };
  },
  methods: {
    JSONedit: function () {
      var select = document.getElementById("dropdownmenu1");
      var value = select.options[select.selectedIndex].text;
      console.log(value);
      if (value == "choose Jsonfile") {
        document.getElementById("previewJSON").style.display = "none";
        this.preview = "";
        console.log("default");
      }
      if (value == this.Option1) {
        document.getElementById("previewJSON").style.display = "block";
        document.getElementById("questionid").style.display = "block";
        document.getElementById("idselection").style.display = "block";

        this.preview = this.Therme;
        console.log("EntreeTherme");
      }
      if (value == this.Option2) {
        document.getElementById("previewJSON").style.display = "block";
        document.getElementById("questionid").style.display = "block";
        document.getElementById("idselection").style.display = "block";
        this.preview = this.Spa;
        console.log("EntreeSpa");
      }
      if (value == this.Option3) {
        document.getElementById("previewJSON").style.display = "block";
        document.getElementById("questionid").style.display = "block";
        document.getElementById("idselection").style.display = "block";
        this.preview = this.Onlineticket;
        console.log("Onlineticket");
      }
      if (value == this.Option4) {
        document.getElementById("previewJSON").style.display = "block";
        document.getElementById("questionid").style.display = "block";
        document.getElementById("idselection").style.display = "block";
        this.preview = this.AngeboteWerbung;
        console.log("AngeboteWerbung");
      }
      if (value == this.Option5) {
        document.getElementById("previewJSON").style.display = "block";
        document.getElementById("questionid").style.display = "block";
        document.getElementById("idselection").style.display = "block";
        this.preview = this.Sprechblasen;
        console.log("Sprechblase");
      }

    /*  this.Sprechblasen.forEach((element) => {
        this.SprechblasenID = element.ID;
        console.log(this.SprechblasenID);
      });
      this.Onlineticket.forEach((element) => {
        this.OnlineticketID = element.ID;
      });
      this.Spa.forEach((element) => {
        this.SpaID = element.ID;
      });
      this.Therme.forEach((element) => {
        this.ThermeID = element.ID;
        console.log(this.ThermeID);
      });*/
   
      
    },WhereToWrite(){
    var select = document.getElementById("idselected");
    var value = select.options[select.selectedIndex].text;
    if(value == 2){
      console.log("hallo")
    }
    }
  },
  mounted() {},
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
