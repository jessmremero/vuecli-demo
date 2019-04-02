<template>
  <div class="single">
		<ul>
			<li>
				<span>楼盘名称</span>
				<input type="text" v-model="estatename"/>			
			</li>
			<li>
				<span>楼盘地址</span>
				<input type="text" v-model="saleaddr"/>	
			</li>
			<li>
				<span>登记时间</span>
				<span>    
					<el-date-picker
			      v-model="registerTimeBegin"
			      type="date"
			      placeholder="选择日期时间">
			    </el-date-picker>
				</span>
			</li>
			<li>
				<span>状态</span>
				<select name="" id="" v-model="state">
					<option v-for="opt in options" v-bind:value="opt.id">{{opt.name}}</option>					
				</select>
			</li>
			<li>
				<span>区域</span>
				<input type="text" v-model="region"/>	
			</li>
			<li>
				<span>售楼电话</span>
				<input type="text" v-model="telPhone"/>	
			</li>
			<li>
				<span>翻转</span>
				<span>{{reversedMessage}}</span>
			</li>
			<li>
				<span>电话旧</span>
				<span>{{telO}}</span>
			</li>
			<li>
				<span>电话新</span>
				<span>{{telN}}</span>
			</li>
		</ul>
		<button v-on:click="commit">提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buildingSingleInfo:{},
      options:[
         {id:0,name:"即将预售"},
         {id:1,name:"正在公示"},
         {id:2,name:"正在登记"},
         {id:3,name:"即将摇号"},
         {id:4,name:"已摇号"},
      ],
      state:'',
      registerTimeBegin:'',
      estatename:'',
      saleaddr:'',
      region:'',
      telPhone:'',
      telO:'',
      telN:''
    }
  },
  computed:{
  	reversedMessage: function () {
      return this.saleaddr.split('').reverse().join('')
     }
  },
  watch:{
  	telPhone:function(o,n){
  		this.telO = o
  		this.telN = n
  	}
  },
  created(){
  	var param = this.$route.params;//接受传参
  	console.log(this.$route.params.id)
  	var that = this
  		this.$axios.get('https://www.hzfc.xyz/estateinfo/findbyid',{
  			params:{
  			   id:param.id,
  			}
  		})
  		.then(function(res){
  			if(res.data.code === 200){
  				that.buildingSingleInfo = JSON.parse(res.data.data)
  				that.state = that.buildingSingleInfo.state
  				that.registerTimeBegin = that.buildingSingleInfo.registerTimeBegin
  				that.estatename = that.buildingSingleInfo.estatename
  				that.saleaddr = that.buildingSingleInfo.saleaddr
  				that.region = that.buildingSingleInfo.region
  				that.telPhone = that.buildingSingleInfo.telPhone
  			}else{
  				that.$message({duration:1000,message:'查询失败！'});
  			}
  		})
  		.catch(function(error){
  			console.log(error)
  		})
  },
  methods:{  	
     commit(){
     	var that = this
     		this.$axios.post('https://www.hzfc.xyz/estateinfo/add',{
  		   state:that.state,
  		   registerTimeBegin:that.registerTimeBegin,
  		   estatename:that.estatename,
  		   saleaddr:that.saleaddr,
  		   region:that.region, 		 
  		   telPhone:that.telPhone
  		})
  		.then(function(res){
  			console.log(res)
  	
  		})
  		.catch(function(error){
  			console.log(error)
  		})
     }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.single>ul{
		margin:0px;
		padding:0px;
	}
	.single>ul>li{
		display:inline-block;
		list-style:none;
	}
	button{
		width:100px;
		height:30px;
		line-height:30px;
		color:white;
		background-color:#00aeff;
		border:none;
		outline:none;
	}
</style>
