<template>
	<div class="head">
		<h1>{{loginInfo.title}}</h1>
		<p>
		   <router-link to="Login">退出登录 </router-link>
		</p>
		<p>
		   <router-link to="Login">注册</router-link>
		</p>
		<p>
		   <router-link to="Login">{{loginInfo.username}}</router-link>
		</p>
	
	
	</div>
</template>
<script>
export default {
  props : {
      loginInfo : {
          type : Object,
          required : false
      }
  },
  created(){
      
  },
}
</script>
<style  scoped>
     *{
     	margin:0px;
     	padding:0px;
     }
	.head{
	   	background-color: #00aeff;	
        padding-left:500px;
        padding-right:50px;
	   	color:white;
	   	height:60px;
	   	margin:0px;
	   	overflow: hidden;
	}
	.head>h1{
		font-size:36px;	
		float:left;
		width:100px;
		height:60px;
		line-height:60px;
	}
   .head>p{
     float:right;
     margin-left:20px;
     width:60px;
     font-size:28px;
     height:60px;
     line-height:60px;
   }
</style>

