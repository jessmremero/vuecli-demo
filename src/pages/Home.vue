<template>
	<div>
	  <header-com v-bind:loginInfo = "loginInfo"></header-com>
	  <div class="index">
	    <div class="topbar">
	    	<input type="text" />
	    	<p>搜索</p>
	    </div>
	    <div class="splitLine"></div>
	    <div class="list1">
	    	<div>{{number1}}</div>
	    	<div>{{number2}}</div>
	    	<div>{{number3}}</div>
	    	<div>{{number4}}</div>
	    </div>
	    <div class="list2">
	    	<div><img src="../../static/all.png" alt="" /></div>
	    	<div><img src="../../static/start.png" alt="" /></div>
	    	<div><img src="../../static/adviser.png" alt="" /></div>
	    	<div><img src="../../static/service.png" alt="" /></div>
	    </div>
	    <div class="splitLine"></div>
	    <div class="recommend">
	    	<div  v-for="item in buildingList" @click="buildingSingle(item.estateid)">
	    		<img :src='item.photourl[0]' alt="" />
	    	</div>	    	
	    </div>
	  </div>
	  <footer-com v-bind:loginInfo = "loginInfo"></footer-com>
	</div>
	
</template>

<script>
import HeaderCom from "@/components/Header"
import FooterCom from "../components/Footer"
export default {
	components:{
		 FooterCom,
		 HeaderCom
	},
  data(){
  	return {
  		title : "首页",
  		loginInfo:{},
  		list:[],
  		number1:'',
  		number2:'',
  		number3:'',
  		number4:'',
  		buildingList:[]
  	}
  },
  created(){
    var param = this.$route.query;
    
    this.loginInfo = {username:sessionStorage.getItem("username"),title:'首页'}     
    this.queryBuildingInfo('全部区域',1)
    this.queryBuildingInfo('全部区域',2)
    this.queryBuildingInfo('全部区域',3)
    this.queryBuildingInfo('全部区域',4)
    this.queryBuildingInfo('全部区域',-1)
  },
  methods:{
  	queryBuildingInfo(r,s){
  		var that = this
  		this.$axios.get('https://www.hzfc.xyz/estateinfo/find',{
  			params:{
  			   region:r,
  			   state:s	
  			}
  		})
  		.then(function(res){
  			console.log(res)
  			if(s===-1){
  				that.buildingList = JSON.parse(res.data.data.data)
  				console.log(that.buildingList)
  			}
  			if(s===1){
  				that.number1 = res.data.data.totalcount
  			}
  			if(s===2){
  				that.number2 = res.data.data.totalcount
  			}
  			if(s===3){
  				that.number3 = res.data.data.totalcount
  			}
  			if(s===4){
  				that.number4 = res.data.data.totalcount
  			}
  		})
  		.catch(function(error){
  			console.log(error)
  		})
  	},
  	buildingSingle(id){  
  		var that = this
        that.$router.push({name:'Single',params:{id:id}})
  	},
  	handleDelete(index){
  		this.list.splice(index,1)
  	},
  	handleMark(index){
  		this.list.splice(index,1)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.splitLine{
	 background-color:#efefef;
     height:10px;
}
.topbar,.list1,.list2,.recommend{
	padding:30px 50px;
}

.topbar{
	display:flex;
	justify-content:center;
	align-items:center;
}
.topbar>input{
	width:500px;
	height:40px;
	border-radius:4px;
	outline:none;
	box-shadow: none;
}
.topbar>p{
	margin-left:20px;
	color:white;
	background-color: #00aeff;
	width:80px;
	height:40px;
	line-height:40px;
	border-radius:4px;
}
.list1,.list2{
	display:flex;
	justify-content:space-between ;
	algin-items:center;
	flex-wrap:wrap;
}
.list1>div{
	width:80px;
	height:80px;
	line-height:80px;
	border-radius:4px;
	font-size:30px;
	color:white;
}
.list1>div:nth-of-type(1){
background-color: #52a0f2;
}
.list1>div:nth-of-type(2){
background-color: #fd8a5b;
}
.list1>div:nth-of-type(3){
background-color: #ffb053;
}
.list1>div:nth-of-type(4){
background-color: #00c682;
}
.list2>div{
	width:80px;
	height:80px;
	line-height:80px;
	border-radius:50%;
	border:1px solid #00aeff;
}
.list2>div>img{
	width:100%;
	height:100%;
}
.recommend{
	display:flex;
	justify-content:space-between ;
	algin-items:center;
	flex-wrap:wrap;
}
.recommend>div{
	width:300px;
	height:200px;
	margin-bottom:20px;
}
.recommend>div>img{
	width:100%;
	height:100%;
}
</style>
