<template>
<div>
    <el-button id="addBtn" @click="changeList('ALL')">ALL</el-button>
    <el-button id="addBtn" @click="changeList('未取件')">未取件</el-button>
    <el-button id="addBtn" @click="changeList('已取件')">已取件</el-button>
    <el-button  id="addBtn" @click="changeList('已预约')">已预约</el-button>
    <el-button id="addBtn" @click="dialogFormVisible =true">添加包裹++</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible ">
        <el-form :model="form">
            <el-form-item label="订单号：">
            <el-input v-model="form.id" autocomplete="off" placeholder="请输入订单号"></el-input>
            </el-form-item>
            <el-form-item label="收件人：">
            <el-input v-model="form.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机：">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="重量：">
            <el-input v-model="form.weight" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false,addpackage(),getAllList()">确 定</el-button>
        </div>
    </el-dialog>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="运单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="收件人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="appotinmengTime"
        label="预约时间"
        width="180">
      </el-table-column>
      <el-table-column>
          <template slot-scope="scope">
            <el-button @click="takeOrder(scope.row)">确认收货</el-button>
          </template>
      </el-table-column>
    </el-table>
</div>
  </template>

<script>
const axios = require('axios');

    export default {
      data() {
        return {
          tableData: [{
            id:0,
            userName: '',
            phone: 0,
            status: '',
            appotinmengTime:''
          }],
          dialogFormVisible :false,
          form:{
            id:'',
            userName:'',
            phone:'',
            weight:''
          }
        }
      },
      created() {
          axios.get(`/package`)
          .then(response => {
            this.tableData = response.data
        });
      },
      methods:{
        addpackage(){
            console.log(this.form)
            axios.post(`/package`,this.form)
            .then(response=>{
                this.getAllList()
            })
        },
        changeList(val){
            axios.get(`/package?status=${val}`)
            .then(response =>{
                this.tableData = response.data
            })
        },
        takeOrder(val){
            console.log(val)
            axios.put(`/package/pickUp?id=${val.id}`)
            .then(response=>{
                this.getAllList()
            }) 
        },
        getAllList(){
            console.log('loading......')
            axios.get(`/package`)
            .then(response => {
            this.tableData = response.data
            });
        }
    }
}
</script>

  <style>

  </style>
  