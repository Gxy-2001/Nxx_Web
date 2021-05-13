<template>
    <div class="main-border">
      <div class="operations">
        <el-button class="button" type="primary" icon="el-icon-plus" @click="addFormVisible=true">新增</el-button>
        <el-dialog title="新增图片" :visible.sync="addFormVisible" class="dialog">
          <el-form :model="form" class="form">
            <el-form-item label="图片ID" :label-width="idLabelWidth">
              <el-input v-model="form.id" autocomplete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="相对地址" :label-width="formLabelWidth">
              <el-input v-model="form.addr" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>

        <el-button class="button" type="danger" icon="el-icon-minus" @click="deleteFormVisible=true">批量删除</el-button>
        <el-dialog title="删除图片" :visible.sync="deleteFormVisible" class="dialog">
          <el-form :model="form" >
            <el-form-item label="图片ID" :label-width="idLabelWidth">
              <el-input v-model="form.id" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="deleteFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <hr>

        <el-table
                :data="carouselList"
                stripe
                style="width: 100%;color: #5a5c61;">
            <el-table-column
                    prop="id"
                    label="ID"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="图片地址"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="uploadTime"
                    label="上传时间"
                    show-overflow-tooltip>
            </el-table-column>
          <el-table-column
              prop="uploadTime"
              label="图片预览"
              show-overflow-tooltip>
          </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="success"
                            @click="change(scope.$index)">编辑</el-button>
                  <el-button
                            size="mini"
                            type="danger"
                            @click="delete(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--分页-->
        <div class="block">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="nowPage"
                    :page-size="8"
                    background
                    layout="prev, pager, next,jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "carouselList",
        created() {
            // this.getOrder();
          this.getCarouselList();
        },
        methods:{
            //查询
          getCarouselList(){
            this.$api.getCarouselList({
              page: this.nowPage,
              nums:8
            }).then(res => {
              if(res.status_code==1){
                this.carouselList = res.data.items;
                this.total = res.data.items.length;
              }else {
                this.$message.error(res.msg)
              }

            }).catch(e => {
              console.log(e)
            })
          },
            // getOrder(){
            //     this.$api.getOrderList({
            //         page: this.nowPage,
            //         nums:8
            //     }).then(res => {
            //         if(res.status_code==1){
            //             this.Order = res.data.list;
            //             this.total = res.data.count;
            //         }else {
            //             this.$message.error(res.msg)
            //         }
            //
            //     }).catch(e => {
            //         console.log(e)
            //     })
            // },
            //删除
            // delete(index){
            //     this.$api.deleteOrder({
            //         id:this.Order[index].id
            //     }).then(res=>{
            //         if(res.status_code==1){
            //             this.getOrder();
            //         }else {
            //             this.$message.error(res.msg)
            //         }
            //
            //     }).catch(e => {
            //         console.log(e)
            //     })
            // },
            //改变
            // change(index){
            //     this.$api.deleteOrder({
            //         id:this.Order[index].id
            //     }).then(res=>{
            //         if(res.status_code==1){
            //             this.getOrder();
            //         }else {
            //             this.$message.error(res.msg)
            //         }
            //
            //     }).catch(e => {
            //         console.log(e)
            //     })
            // },
            //新增
            //处理当前改变
            handleCurrentChange(val) {
                this.nowPage = val;
                // this.getOrder();
              this.getCarouselList();
            },
        },
        data(){
            return {
                nowPage: 1,
                total: 0,
                // paymentStatus:['未支付','已支付'],
                // orderStatus:['待付款','待发货','待收货','已完成','已取消'],
              carouselList: [],
              addFormVisible:false,
              deleteFormVisible: false,
              form: {
                id: '',
                addr:''
              },
              idLabelWidth:'120px',
              formLabelWidth: '120px',
            }
        },
    }
</script>

<style scoped>
/*容器*/
    .main-border{
        background-color: #FFF;
        padding: 10px 30px;
        box-shadow: 0 1px 15px -6px rgba(0,0,0,.5);
        border-radius: 5px;
    }
/*表头排列*/
    el-table{
      display: flex;
      justify-content: space-between;
    }
    .block {
        display: flex;
        justify-content:center;
        padding-top: 15px;
        padding-bottom: 10px;
        width: 100%;
    }
/*两个按钮*/
    .operations{
      width: 25%;
      display: flex;
      justify-content: space-around;
    }
    .dialog{
      width:60%;
    }
</style>