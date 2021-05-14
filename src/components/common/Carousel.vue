<!--这个轮播图的麻烦之处在于 如何实现动态增删 和 图片自适应-->
<template>
  <div>
    <el-carousel :interval="3000" arrow="hover" indicator-position="outside" height="450px" >
      <el-carousel-item v-for="item in items" :key="item.id">
        <img :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
//import
import $ from 'jquery'
export default {
  name: "Carousel",
  components: {
  },

  data() {
    return {
      items:[
          // {id:0,idView:require("../../assets/Carousel/1.png")},
          {id:0,idView:require("../../assets/Carousel/1.png")},
        {id:1,idView:require("../../assets/Carousel/2.png")},
        {id:2,idView:require("../../assets/Carousel/3.png")},
        {id:3,idView:require("../../assets/Carousel/4.png")},
      ],
      input:'',
    };
  },
  created() {
  },
  watch:{

  },
  methods: {
    //注意items是一个数组,删除和添加其实都是调用splice方法
    //@param: addr 为图片的相对地址idView
    addItem(addr){
      let newItemID=this.items.length;
      // console.log(newItemID);
      let newItem={id:newItemID,idView:require(addr)};
      this.items.splice(newItemID,0,newItem);
    },
    deleteItem(id){
      this.items.splice(id,1);
    }

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