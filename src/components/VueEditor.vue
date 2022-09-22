<template>
  <div id="app">
    <ul>
      <li id="logo">
        <img @click="showStart()" src="../assets/logo.svg" alt="" />
      </li>
      <li id="title">JSON Edit Formular</li>
      <li><a @click="showAddData()">Add Data</a></li>
      <li><a @click="showEditData()">Edit Data</a></li>
      <li><a @click="showDeleteData()">Delete Data</a></li>
    </ul>
    <!-- Start-->
    <div id="Start1">
      <p id="Startinfo">Was möchten Sie tun?</p>
      <div id="Start">
        <div @click="showAddData()" class="innerStart">Add Data</div>
        <div @click="showEditData()" class="innerStart">Edit Data</div>
        <div @click="showDeleteData()" class="innerStart">Delete Data</div>
      </div>
    </div>

    <!-- editData-->
    <div id="editData">
      <p class="question">Edit Jsonfile</p>
      <div class="question-answer">
        <select
          name=""
          id="dropdownmenu1"
          class="dropdowndesign"
          @change="JSONedit()"
        >
          <option class="options" value="">{{ this.defaultOption }}</option>
          <option class="options" value="">{{ this.Option1 }}</option>
          <option class="options" value="">{{ this.Option2 }}</option>
          <option class="options" value="">{{ this.Option3 }}</option>
          <option class="options" value="">{{ this.Option4 }}</option>
          <option class="options" value="">{{ this.Option5 }}</option>
        </select>

        <br />

        <div class="editor">
          <JsonEditorVue v-model="data" />
        </div>
        <button @click.prevent="updateData()">save</button>
      </div>
    </div>
    <!-- addData-->
    <div id="addData">
      <p class="question">Add Jsonfile</p>
      <select
        name=""
        id="dropdownmenu2"
        class="dropdowndesign"
        @change="changeTemplate()"
      >
        <option class="options" value="">{{ this.defaultOption }}</option>
        <option class="options" value="">{{ this.Option1 }}</option>
        <option class="options" value="">{{ this.Option2 }}</option>
        <option class="options" value="">{{ this.Option3 }}</option>
        <option class="options" value="">{{ this.Option4 }}</option>
        <option class="options" value="">{{ this.Option5 }}</option>
      </select>
      <input
        type="text"
        placeholder="ID eingeben"
        id="IDinput"
        v-model="test"
      />
      <div class="editor">
        <JsonEditorVue v-model="adddata" />
      </div>

      <button @click.prevent="newDoc()">add</button>
    </div>

    <!-- Delete Data-->
    <div id="deleteData">
      <div id="deleteDocument" class="child">
        <p class="question">Delete Document</p>
        <select
          name=""
          id="dropdownmenu3"
          class="dropdowndesign"
          @change="JSONedit(); showDeleteField()"
        >
          <option class="options" value="">{{ this.defaultOption }}</option>
          <option class="options" value="">{{ this.Option1 }}</option>
          <option class="options" value="">{{ this.Option2 }}</option>
          <option class="options" value="">{{ this.Option3 }}</option>
          <option class="options" value="">{{ this.Option4 }}</option>
          <option class="options" value="">{{ this.Option5 }}</option>
        </select>
        <div v-for="(item, k) in data" :key="item.id">
          <h3 id="JsonField">{{ item }}</h3>
          <button id="delete" @click="deleteDocument(item, k)">🗑️</button>
        </div>
      </div>

      
    </div>

    <h3 id="info" style="display: none; margin-left: 2vw">
      {{ this.warning }}
    </h3>
  </div>
</template>

<script>
import { doc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../service/db";
import JsonEditorVue from "json-editor-vue3";

export default {
  components: {
    JsonEditorVue,
  },
  watch: {},
  data() {
    return {
      ThermeID: "",
      Option1: "EntreeTherme",
      defaultOption: "choose Jsonfile",
      Option2: "EntreeSpa",
      Option3: "Onlineticket",
      Option4: "AngeboteWerbung",
      Option5: "Sprechblase",
      warning: "",
      OptionID: "",
      preview: "",
      inputvalue: "",
      data: undefined,
      adddata: undefined,
      test: "",
      fields:[]
    };
  },

  methods: {
    chooseField(){
       var select = document.getElementById("dropdownmenu4");
      var value = select.options[select.selectedIndex].text;
for (let index = 0; index < this.data.length; index++) {
if(this.data[index].id== value){
  const data = {
              id: this.data[index].id,
              type:  this.data[index].type,
              price_3h:  this.data[index].price_3h,
              price_24h:  this.data[index].price_24h,
            };
         
  this.fields.push(data)
  console.log(this.fields)
}
 
}
    },
    async deleteDocument(item, k) {
      console.log(item);
      var id = this.data[k].id;
      await deleteDoc(doc(db, "Therme", id));
    },showDeleteField() {
    
      document.getElementById("deleteObject").style.display = "block";
    },
    showEditData() {
      document.getElementById("editData").style.display = "block";
      document.getElementById("addData").style.display = "none";
      document.getElementById("Start1").style.display = "none";
      document.getElementById("deleteData").style.display = "none";
    },
    showAddData() {
      document.getElementById("addData").style.display = "block";
      document.getElementById("editData").style.display = "none";
      document.getElementById("Start1").style.display = "none";
      document.getElementById("deleteData").style.display = "none";
    },
    showStart() {
      document.getElementById("addData").style.display = "none";
      document.getElementById("editData").style.display = "none";
      document.getElementById("Start1").style.display = "block";
      document.getElementById("deleteData").style.display = "none";
    },
    showDeleteData() {
      document.getElementById("addData").style.display = "none";
      document.getElementById("editData").style.display = "none";
      document.getElementById("Start1").style.display = "none";
      document.getElementById("deleteData").style.display = "block";
    },

    changeTemplate() {
      var select = document.getElementById("dropdownmenu2");
      var value = select.options[select.selectedIndex].text;
      if (value == "choose Jsonfile") {
        this.adddata = [{}];
      }
      if (value == "EntreeTherme") {
        this.adddata = [
          {
            price_3H: "",
            price_day: "",
            type: "",
          },
        ];
      }
      if (value == "EntreeSpa") {
        this.adddata = [
          {
            price_3h: "",
            price_24h: "",
            type: "",
          },
        ];
      }
      if (value == "Onlineticket") {
        this.adddata = [
          {
            description: "",
            title: "",
          },
        ];
      }
      if (value == "AngeboteWerbung") {
        this.adddata = [
          {
            Angebote: "",
            Werbung: "",
            title: "",
          },
        ];
      }
      if (value == "Sprechblase") {
        this.adddata = [
          {
            Description: "",
            WetterText: "",
            wetter: "",
          },
        ];
      }
    },
    JSONedit() {
      var select = document.getElementById("dropdownmenu1");
      var value = select.options[select.selectedIndex].text;
      var select2 = document.getElementById("dropdownmenu3");
      var value2 = select2.options[select2.selectedIndex].text;

      if (value == "EntreeSpa" || value2 == "EntreeSpa") {
        onSnapshot(collection(db, "Spa"), (querySnapshot) => {
          const data2 = [];
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              type: doc.data().type,
              price_3h: doc.data().price_3h,
              price_24h: doc.data().price_24h,
            };
            data2.push(data);
          });
          this.data = data2;
        });
      }
      if (value == "EntreeTherme" || value2 == "EntreeTherme") {
        onSnapshot(collection(db, "Therme"), (querySnapshot) => {
          const data2 = [];
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              type: doc.data().type,
              price_3h: doc.data().price_3H,
              price_24h: doc.data().price_day,
            };
            data2.push(data);
          });
          this.data = data2;
        });
      }
      if (value == "Onlineticket" || value2 == "Onlineticket") {
        onSnapshot(collection(db, "Online-ticket"), (querySnapshot) => {
          const data2 = [];
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              description: doc.data().description,
              title: doc.data().title,
            };
            data2.push(data);
          });
          this.data = data2;
        });
      }
      if (value == "AngeboteWerbung" || value2 == "AngeboteWerbung") {
        onSnapshot(collection(db, "AngeboteWerbung"), (querySnapshot) => {
          const data2 = [];
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              Angebote: doc.data().Angebote,
              Werbung: doc.data().Werbung,
              title: doc.data().title,
            };
            data2.push(data);
          });
          this.data = data2;
        });
      }
      if (value == "Sprechblase" || value2 == "Sprechblase") {
        this.warning =
          "⚠️Für 'wetter' muss ein Stichwort 'sonne', 'bewölkt' oder 'regen' eingesetzt werden⚠️";
        document.getElementById("info").style.display = "block";
        onSnapshot(collection(db, "Sprechblase"), (querySnapshot) => {
          const data2 = [];
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              Description: doc.data().Description,
              WetterText: doc.data().WetterText,
              wetter: doc.data().wetter,
            };
            data2.push(data);
          });
          this.data = data2;
        });
      } else {
        this.warning = "Wählen Sie ein Jsonfile aus";
      }
    },
    async updateData() {
      var select = document.getElementById("dropdownmenu1");
      var value = select.options[select.selectedIndex].text;
      for (var i = 0; i < this.data.length; i++) {
        // Set the "capital" field of the city 'DC'
        if (value == "EntreeTherme") {
          const washingtonRef = doc(db, "Therme", this.data[i].id);

          await updateDoc(washingtonRef, {
            price_3H: this.data[i].price_3h,
            type: this.data[i].type,
            price_day: this.data[i].price_24h,
          });
        }
        if (value == "EntreeSpa") {
          const washingtonRef = doc(db, "Spa", this.data[i].id);

          await updateDoc(washingtonRef, {
            price_3h: this.data[i].price_3h,
            price_24h: this.data[i].price_24h,
            type: this.data[i].type,
          });
        }

        if (value == "Onlineticket") {
          const washingtonRef = doc(db, "Online-ticket", this.data[i].id);

          await updateDoc(washingtonRef, {
            description: this.data[i].description,
            title: this.data[i].title,
          });
        }
        if (value == "AngeboteWerbung") {
          const washingtonRef = doc(db, "AngeboteWerbung", this.data[i].id);

          await updateDoc(washingtonRef, {
            Angebote: this.data[i].Angebote,
            Werbung: this.data[i].Werbung,
            title: this.data[i].title,
          });
        }
        if (value == "Sprechblase") {
          const washingtonRef = doc(db, "Sprechblase", this.data[i].id);
          if (
            this.data[i].wetter == "sonne" ||
            this.data[i].wetter == "bewölkt" ||
            this.data[i].wetter == "regen"
          ) {
            await updateDoc(washingtonRef, {
              Description: this.data[i].Description,
              WetterText: this.data[i].WetterText,
              wetter: this.data[i].wetter,
            });
          } else {
            window.alert(
              "Für wetter muss ein Stichwort 'sonne', 'bewölkt' oder 'regen' eingesetzt werden"
            );
          }
        }
      }
    },

    async newDoc() {
      var select = document.getElementById("dropdownmenu2");
      var value = select.options[select.selectedIndex].text;
      if (value == "EntreeTherme") {
        if (this.test != "") {
          if (this.adddata.length == 1) {
            await setDoc(doc(db, "Therme", this.test), {
              price_3H: this.adddata[0].price_3H,
              price_day: this.adddata[0].price_day,
              type: this.adddata[0].type,
            });
            this.adddata = [
              {
                price_3H: "",
                price_day: "",
                type: "",
              },
            ];
          } else {
            window.alert("Bitte nur eine {} pro array brauchen");
          }
        } else {
          window.alert("Bitte eine ID eingeben");
        }
      }
      if (value == "EntreeSpa") {
        if (this.test != "") {
          if (this.adddata.length == 1) {
            await setDoc(doc(db, "Spa", this.test), {
              price_24h: this.adddata[0].price_3H,
              price_3h: this.adddata[0].price_day,
              type: this.adddata[0].type,
            });
            this.adddata = [
              {
                price_3h: "",
                price_24h: "",
                type: "",
              },
            ];
          } else {
            window.alert("Bitte nur eine {} pro array brauchen");
          }
        } else {
          window.alert("Bitte eine ID eingeben");
        }
      }
      if (value == "Onlineticket") {
        if (this.test != "") {
          if (this.adddata.length == 1) {
            await setDoc(doc(db, "Online-ticket", this.test), {
              price_3h: this.adddata[0].price_3h,
              price_24h: this.adddata[0].price_24h,
              type: this.adddata[0].type,
            });
            this.adddata = [
              {
                description: "",
                title: "",
              },
            ];
          } else {
            window.alert("Bitte nur eine {} pro array brauchen");
          }
        } else {
          window.alert("Bitte eine ID eingeben");
        }
      }
      if (value == "AngeboteWerbung") {
        if (this.test != "") {
          if (this.adddata.length == 1) {
            await setDoc(doc(db, "AngeboteWerbung", this.test), {
              Angebote: this.adddata[0].Angebote,
              Werbung: this.adddata[0].Werbung,
              title: this.adddata[0].title,
            });
            this.adddata = [
              {
                Angebote: "",
                Werbung: "",
                title: "",
              },
            ];
          } else {
            window.alert("Bitte nur eine {} pro array brauchen");
          }
        } else {
          window.alert("Bitte eine ID eingeben");
        }
      }
      if (value == "Sprechblase") {
        if (this.test != "") {
          if (this.adddata.length == 1) {
            await setDoc(doc(db, "Sprechblase", this.test), {
              Description: this.adddata[0].Description,
              WetterText: this.adddata[0].WetterText,
              wetter: this.adddata[0].wetter,
            });
            this.adddata = [
              {
                Description: "",
                WetterText: "",
                wetter: "",
              },
            ];
          } else {
            window.alert("Bitte nur eine {} pro array brauchen");
          }
        } else {
          window.alert("Bitte eine ID eingeben");
        }
      }
    },
  },
};
</script>

<style  scoped>
.child {
  float: left;
}
#delete {
  margin-left: 0vw;

}

#app {
  overflow: visible;
}
::-webkit-scrollbar {
  display: inline;
}
#JsonField {
  background-color: whitesmoke;
  box-shadow: 0.1vw 0.1vw 0.1vw rgb(67, 66, 66);
  padding: 2vw;
  width: 40vw;
  margin-left: 2vw;
  border-radius: 0.5vw;
}
#info {
  color: red;
}
#IDinput {
  font-size: 1vw;
  box-shadow: 0.1vw 0.1vw 0.1vw rgb(67, 66, 66);
  border-radius: 0.2vw;
  border: rgb(155, 151, 151);
}
p {
  color: black;
  border-bottom: 0.1vw solid black;
  width: 21vw;
}
.question {
  margin-left: 2vw;
  color: black;
  font-size: 2vw;
}
.dropdowndesign {
  font-size: 1vw;
  box-shadow: 0.1vw 0.1vw 0.1vw rgb(67, 66, 66);
  border-radius: 0.2vw;
}
#Start {
  box-shadow: 0.2vw 0.2vw 0.2vw rgb(104, 102, 102);
  width: 45vw;
  height: 9vw;
  margin-left: 27vw;

  background-color: #333;
  color: whitesmoke;

  font-size: 2vw;
  animation-name: StartAnimation;
  animation-duration: 4s;
  animation-delay: -2s;
}
@keyframes StartAnimation {
  0% {
    right: -50vw;
    top: 0px;
  }

  100% {
    right: 0px;
    top: 0px;
  }
}
#Startinfo {
  font-size: 2vw;
  margin-left: 27vw;
  margin-top: 10vw;
}
.innerStart {
  float: left;
  margin: 2vw;
  padding: 1vw;
}
.innerStart:hover {
  background-color: #111;
  cursor: pointer;
}
#editData {
  display: none;
}
#addData {
  display: none;
  animation-name: addDataAnimation;
}
#deleteData {
  display: none;
}
#title {
  color: whitesmoke;
  margin: 1vw;
  border-bottom: 0.1vw solid whitesmoke;
}
#dropdownmenu1 {
  margin: 2vw;
}
#dropdownmenu2 {
  margin: 2vw;
}
#dropdownmenu3 {
  margin: 2vw;
}

.editor {
  margin: 2vw;
  margin-top: 0;
  margin-bottom: 0;
}
button {
  box-shadow: 0 0.1vw #666;
  margin: 2vw;
  width: 150px;
  padding: 10px;
  border: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: #333;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background-color: #111;
}
button:active {
  background-color: #3e8e41;
  box-shadow: 0 0.1vw #666;
  transform: translateY(4px);
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 1vw;
  text-decoration: none;
  cursor: pointer;
}
li img {
  margin: 1vw;
  margin-right: 0.5vw;
  width: 1vw;
  height: auto;
}
li img:hover {
  cursor: pointer;
}

li a:hover {
  background-color: #111;
}
</style>
