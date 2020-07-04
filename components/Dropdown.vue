<template>
    <select name="dropdown" id="dropdown" v-model="selectedItem" v-on:change="selectedValue">
        <option value="null" disabled>Select One Item</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
    </select>
</template>

<script>
    export default {
        name: "Dropdown",
        data: function () {
            return {
                selectedItem: '',
            }
        },
        methods: {
            selectedValue: function (value) {
                this.$emit('select:option', this.selectedItem);
            }
        }
    }
</script>

<style scoped>

</style>