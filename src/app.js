import Vue from 'vue';
import Accordian from "../components/Accordian";
import List from "../components/List";

new Vue({
    el:"#app",

    components: {
        List,
      Accordian,

    },

    data: {
        items: [
            {title: 'Tittle 1', description: "This is description 1"},
            {title: 'Tittle 2', description: "This is description 2"},
            {title: 'Tittle 3', description: "This is description 3"},
        ]
    }




});