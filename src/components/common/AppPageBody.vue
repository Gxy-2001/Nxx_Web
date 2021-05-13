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
      /*页面主体颜色*/
      background-color: #FFFFFF;
        min-height: 90vh;
      border-radius: 10px;
    }
</style>