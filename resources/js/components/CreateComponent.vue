<template>
<div>
    <div class="mb-3">
        <input type="text" class="form-control" id="name" name="name" placeholder="name">
    </div>
    <div class="mb-3">
        <input type="number" class="form-control" id="age" name="age" placeholder="age">
    </div>
    <div class="mb-3">
        <input type="text" class="form-control" id="job" name="job" placeholder="job">
    </div>
    <div class="mb-3">
        <input type="submit" class="form-control btn btn-primary" id="btn" name="btn" value="отправить">
    </div>
</div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "CreateComponent",

}
</script>

<style scoped>

</style>
