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
        <p id="info" style="display:none; margin-left:2vw;">Für wetter muss ein Stichwort 'sonne', 'bewölkt' oder 'regen' eingesetzt werden</p>
        <br />

        <div id="editor">
          <JsonEditorVue class="editor" v-model="data" />
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
        document.getElementById("info").style.display = "block"
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
      }else{
         document.getElementById("info").style.display = "none"
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
          if(this.data[i].wetter == "sonne" || this.data[i].wetter == "bewölkt" ||this.data[i].wetter == "regen" ){
            await updateDoc(washingtonRef, {
            Description: this.data[i].Description,
            WetterText: this.data[i].WetterText,
            wetter: this.data[i].wetter,
          });
          }else{window.alert("Für wetter muss ein Stichwort 'sonne', 'bewölkt' oder 'regen' eingesetzt werden")}
         
        }
      }
   
    },
  },
};
</script>

<style  scoped>
#dropdownmenu1 {
  margin: 2vw;
}

#editor {
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
