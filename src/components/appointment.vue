<template>
<div style="margin-left: 36%">
<el-form :model="form" status-icon  label-width="150px" class="demo-ruleForm">
  <el-form-item label="订单号" prop="id">
    <el-input type="text" v-model="form.id" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="取件时间" prop="pickUpTime" >
    <el-date-picker
      v-model="form.pickUpTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"
      :picker-options="{
      selectableRange: '09:00:00 - 20:00:00'
    }">
    </el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="putAppointment()">提交</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
const axios = require('axios');
export default {
    data(){
        return{
            form:{
                id:'',
                date:'',
                pickUpTime:'',
            }
        }
    },
    methods:{
        putAppointment(){
            console.log(this.form.pickUpTime)
            axios.put(`/package/appointment?id=${this.form.id}&pickUpTime=${this.form.pickUpTime}`)
            .then(function(response){
                console.log("success")
            })
        },
        getTime(date){
          this.time = date;
          console.log(this.time);
        }
    }
}
</script>

<style scoped>
>>> .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    width: 200px;
}
>>> .el-form demo-ruleForm {
  text-align: center
}
</style>
