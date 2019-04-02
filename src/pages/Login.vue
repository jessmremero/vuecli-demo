<template>
  <div class="login"  id="loginCtrl">
		<ul class="loginbox">
			<li>
				<p>楼盘信息系统登录</p>
			</li>
			<li>
				<img src="img/data.png" />
				<input class="username" v-model="username" type="text" placeholder="请输入账号" id="username" style="height:24px;line-height:24px;">
			</li>
			<li>
				<img src="img/account.png" />
				<input class="password" v-model="password" type="password" placeholder="请输入密码" id="password">
			</li>
			<li class="tips">{{promptMessage}}</li>
			<button class="commit" @click="commit" id="submit">登录</button>
		</ul>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username:"",
      password:"",
      promptMessage:"",
    }
  },
  methods:{  	
  		commit (){
  			var that = this
  			if(this.username==="admin"&&this.password==="a123456"){
  				this.$message({duration:500,message:'登录成功！'});
  				sessionStorage.setItem("username",this.username)
  				setTimeout(function(){
  					console.log(this)
  					that.$router.push({path:'/home',query:{username:this.username,password:this.password}}); 
  				},1000)
  				
  			}else{
  				this.promptMessage = "用户名或者密码错误"
  			}
  		},

  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.loginbox{
		text-align: center;
		width: 390px;
		height: 400px;
		position: absolute;
		right: 5%;
		top: 30%;
		background: #FFFFFF;
		border-radius: 10px;
		padding-left:0px;
	}
	
	.loginbox li {
		margin-bottom: 20px;
		list-style: none;
	}
	.tips{
		text-align:left;
		font-size:16px;
		color:red;
	}
	.login{
		background-image: url(../../static/loupan.jpg);
		width: 100%;
		height: 100%;
		background-size: 100%;
		position: relative;
	}
	.left{
		background: url(../../static/bj-2.jpg) no-repeat;
		opacity:0.9;
		background-size: 100%;
		width: 28%;
		height: 100%;
		text-align: center;
		color: #FFFFFF;
	}
	
	.left p{margin-top: 5%;font-size: 14px;}
	
	.loginbox li:first-child{
		font-size: 16px;
		text-align: left;
		height: 60px;
		background: #d8dfe5;
		border-top-left-radius:10px;
		border-top-right-radius:10px;
		line-height: 60px;
	}
	.loginbox li:first-child p{
		margin-left: 30px;
		font-size: 16px;
	}
	.loginbox li:nth-child(2){
		font-size: 14px;
		border: 1px solid #c0c0c0;
		width: 330px;
		height: 46px;
		line-height: 46px;
		border-radius: 5px;
		margin-left: 30px;
		margin-top: 30px;
		text-align: left;
	}
	
	.username{
		border: none;
		width: 250px;
		height: 24px;
		outline:none;
	}
	.loginbox li:nth-child(3){
		font-size: 14px;
		border: 1px solid #c0c0c0;
		width: 330px;
		height: 46px;
		line-height: 46px;
		border-radius: 5px;
		margin-left: 30px;
		text-align: left;
	}
	.loginbox li:nth-child(3) img{
		margin-left: 10px;
		margin-right: 10px;
		vertical-align: middle;
	}
	.loginbox li:nth-child(2) img{
		margin-left: 10px;
		margin-right: 10px;
		vertical-align: middle;
	}
	.password{
		border: none;
		width: 250px;
		height: 24px;
		outline:none;
	}
	.yzm{
		width:200px;
		height: 40px;
		border-radius: 5px;
		border: 1px solid #c0c0c0;
		outline:none;
		vertical-align:middle
	}
	.loginbox li:nth-child(4){
		font-size: 14px;
		align-content: center;
		width: 330px;
		height: 46px;
		line-height: 46px;
		border-radius: 5px;
		margin-left: 29px;
		margin-bottom: 0;
	}
	.yzmimg{
		width: 82px;
		height: 40px;
		vertical-align:middle;
		margin-left: 33px;
	}
	.loginbox li:nth-child(5){
		font-size: 14px;
		width: 330px;
		height: 46px;
		line-height: 46px;
		margin-left: 30px;
		overflow: hidden;
	}
	.loginbox li:nth-child(5) p{
		float: left;
	}
	.loginbox li:nth-child(5) span{
		float: right;
		color: red;
	}
	.commit{
		width: 330px;
		height: 40px;
		background: #45a0e0;
		color: #FFFFFF;
		border: none;
		border-radius: 5px;
	}
	body{
		height: inherit;
	}
</style>
