<!--这个轮播图的麻烦之处在于 如何实现动态增删 和 图片自适应-->
<template>
  <el-carousel :interval="3000" arrow="hover" height="600px">
    <el-carousel-item v-for="item in items" :key="item.id">
      <img :src="item.idView" class="image">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
//import
export default {
  name: "Carousel",
  components: {

  },

  data() {
    return {
      items:[
          {id:0,idView:require("../../assets/Carousel/1.jpg")},
        {id:1,idView:require("../../assets/Carousel/2.jpg")},
        {id:2,idView:require("../../assets/Carousel/3.jpg")},
        {id:3,idView:require("../../assets/Carousel/4.jpg")},
      ],
    };
  },
  created() {
  },
  watch:{

  },
  methods: {

},
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>