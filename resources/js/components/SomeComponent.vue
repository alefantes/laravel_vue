<template>
    <div class="w-25">

    </div>
</template>

<script>

export default {
    name: "SomeComponent",

    data() {
        return {
        }

    },
    mounted() {
      this.$parent.$parent.parentLog()
    },
    methods: {

    },

}
</script>

<style scoped>

</style>
