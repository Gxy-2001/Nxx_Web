<template>
    <div class="main-border">
        <el-table
                :data="carouselList"
                stripe
                style="width: 100%;color: #5a5c61;">
            <el-table-column
                    prop="id"
                    label="序号"
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

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="success"
                            @click="change(scope.$index)">删除</el-button>
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
            this.getOrder();
        },
        methods:{
            //查询
            getOrder(){
                this.$api.getOrderList({
                    page: this.nowPage,
                    nums:8
                }).then(res => {
                    if(res.status_code==1){
                        this.Order = res.data.list;
                        this.total = res.data.count;
                    }else {
                        this.$message.error(res.msg)
                    }

                }).catch(e => {
                    console.log(e)
                })
            },
            //删除
            delete(index){
                this.$api.deleteOrder({
                    id:this.Order[index].id
                }).then(res=>{
                    if(res.status_code==1){
                        this.getOrder();
                    }else {
                        this.$message.error(res.msg)
                    }

                }).catch(e => {
                    console.log(e)
                })
            },
            //改变
            change(index){
                this.$api.deleteOrder({
                    id:this.Order[index].id
                }).then(res=>{
                    if(res.status_code==1){
                        this.getOrder();
                    }else {
                        this.$message.error(res.msg)
                    }

                }).catch(e => {
                    console.log(e)
                })
            },
            //新增

            //处理当前改变
            handleCurrentChange(val) {
                this.nowPage = val;
                this.getOrder();
            },
        },
        data(){
            return {
                mode:1,
                nowPage: 1,
                total: 0,
                paymentStatus:['未支付','已支付'],
                orderStatus:['待付款','待发货','待收货','已完成','已取消'],
                Order: []
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
/**/
    .block {
        display: flex;
        justify-content:center;
        padding-top: 15px;
        padding-bottom: 10px;
        width: 100%;
    }
</style>