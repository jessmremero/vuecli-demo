<template>
	<div class="about">
		<header-com v-bind:loginInfo = "loginInfo"></header-com>
		<p>关于我们</p>
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
  		loginInfo:""
  	}
  },
  created(){
    console.log(this.$route.query)
    this.loginInfo = this.$route.query
  },
}
</script>
<style lang="less"scoped>
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

