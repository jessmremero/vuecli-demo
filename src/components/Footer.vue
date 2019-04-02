<template>
  <footer>
      <ul>
          <router-link v-for="(nav,i) in navList" :to="{name:nav.name,query:loginInfo}" :key="i" class="rli"  tag="li" activeClass="active">
            {{nav.text}}
          </router-link>
      </ul>
  </footer>
</template>
<script>
export default {
	  props : {
      loginInfo : {
          type : Object,
          required : false
      }
  },
  data(){
      return {
          navList : [
              {icon:"icon-menuHome",text:"首页",name:"Home"},
              {icon:"icon-menuClass",text:"关于我们",name:"About"},
              {icon:"icon-menuShop",text:"我的",name:"My"},         
          ]
      }
  },
  created(){
     console.log(this.loginInfo) 
  },
  methods : {
      back(){
          this.$router.go(-1);
      }
  }
}
</script>
<style  scoped>
  ul{
  	display:flex;
  	justify-content:space-between;
  	align-items:center;
  	.rli{
  		width:33.333%;
  		height:30px;
  		text-align:Center;
  		line-height:30px;
  		list-style:none;
  		border:1px solid red;
  	}
  }
    
   
</style>

