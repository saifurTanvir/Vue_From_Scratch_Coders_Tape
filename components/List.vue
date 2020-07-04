<template>
    <div>
        <p v-text="dropdownValue">Item</p>
        <dropdown @select:option="selectUpdate"></dropdown>
    </div>

</template>

<script>
    import Dropdown from "./Dropdown";
    export default {
        name: "List",
        components: {Dropdown},
        data: function (){
            return{
                dropdownValue: ''
            }
        },
        methods:{
            selectUpdate: function (value) {
                this.dropdownValue = value;
            }
        }
    }
</script>

<style scoped>

</style>