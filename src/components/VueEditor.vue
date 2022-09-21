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

     <div id=editor>
      <JsonEditorVue  class="editor" v-model="data" />
     </div>
        
        <button @click.prevent="updateData()">save</button>

        <br />
      </div>
    </form>
  </div>
</template>

<script>
import { doc, updateDoc } from "firebase/firestore";
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
      Option2: "EntreeSpa",
      Option3: "Onlineticket",
      Option4: "AngeboteWerbung",
      Option5: "Sprechblase",

      OptionID: "",
      preview: "",
      inputvalue: "",
      data: undefined,
      test: "",
    };
  },

  methods: {
    JSONedit() {
      var select = document.getElementById("dropdownmenu1");
      var value = select.options[select.selectedIndex].text;

      if (value == "EntreeSpa") {
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
      if (value == "EntreeTherme") {
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
      if (value == "Onlineticket") {
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
      if (value == "AngeboteWerbung") {
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
      if (value == "Sprechblase") {
        onSnapshot(collection(db, "Spa"), (querySnapshot) => {
          const data2 = [];
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              type: doc.data().type,
              price_3H: doc.data().price_3H,
              price_day: doc.data().price_day,
            };
            data2.push(data);
          });
          this.data = data2;
        });
      }
    },async updateData(){
         var select = document.getElementById("dropdownmenu1");
      var value = select.options[select.selectedIndex].text;
     for (var i = 0; i < this.data.length; i++) {
    
const washingtonRef = doc(db, "Therme",this.data[i].id );

// Set the "capital" field of the city 'DC'
if(value== "EntreeTherme"){
  await updateDoc(washingtonRef, {
  price_3H: this.data[i].price_3h
});
}
if(value== "EntreeTherme"){
  await updateDoc(washingtonRef, {
  price_3H: this.data[i].price_3h
});
}

     }
  },
  }
};
</script>

<style  scoped>
#dropdownmenu1{
  margin: 2vw;
}

#editor{
  margin: 2vw;
  margin-top: 0;
  margin-bottom: 0;
}
button {
   margin: 2vw;
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


</style>
