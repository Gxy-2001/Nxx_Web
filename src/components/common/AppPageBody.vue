<template>
    <div class="main-container">
        <div class="main-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageBody"
    }
</script>

<style scoped>
    .main-container{
        margin-top: 80px;
        display: flex;
        justify-content: center;
    }
    .main-content{
        width: 80%;
        background-color: #ffffff;
        min-height: 90vh;
      border-radius: 10px;
    }
</style>