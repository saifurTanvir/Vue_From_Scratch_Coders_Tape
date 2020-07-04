<template>
    <div>
        <p>{{text.title}}</p>
        <button @click="toggle = !toggle">Toggle</button>
        <p v-if="toggle">{{text.description}}</p>
    </div>
</template>

<script>
    export default {
        name: "Accordian",

        props: [
            'text'
        ],
        data: function() {
            return {
                toggle: true
            }
        }
    }
</script>

<style scoped>

</style>