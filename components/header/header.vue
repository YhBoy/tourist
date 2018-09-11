<template>
	<div class="header">
	 	
		<div class="header-left">
			<span class="iconfont ">&#xe606;</span>
		</div>
		
		<div class="header-input">
			<span class="iconfont search-icon">&#xe600;</span>
			<input class="search" type="text" placeholder="输入城市/景点/游玩主题">
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.$store.state.city}}
				<span class="iconfont arrow">&#xe791;</span>
			</div>
		</router-link>
		
	</div>
	
</template>

<script>
	export default{}

</script>

<style lang="stylus" scope>
	@import '../../assets/styles/varibles.styl'
	.header
	  display: flex
	  flex-direction: row
	  line-height: 0.86rem
	  background: $bgColor
	  color: #fff
	  .header-left
	  	width: 0.64rem
	  	text-align: center
	  .header-input
	  	display: flex
	  	flex: 1
	  	background: #fff
	  	height: 0.64rem 
	  	text-indent: 5px
	  	line-height: 0.64rem
	  	margin-top: 0.12rem
	  	border-radius: 5px
	  	position: relative
	  	overflow: hidden
	  	.search-icon
	  	  color: #333
	  	.search
	  	  padding-left: 0.2rem
	  	  width: 100%
	  .header-right
	  	min-width: 1.24rem
	  	padding: 0 .1rem
	  	text-align: center
	  	color: #fff
	  	.arrow
	  	  font-size: 0.24rem
		


</style>
















