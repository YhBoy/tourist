<template>
	<ul class="list">
		<li class="item" v-for="(item,key) in cities" :key="key" 
		 
		 @click="handleLetterClick">{{key}}</li>
	</ul>
</template>

<script >
	export default{
		props: {
			cities: Object
		},
		data(){
			return {
				touchStatus: false
			}
		},
		methods: {
			handleLetterClick(e){
				this.$emit("change",e.target.innerText)
			}
		}
	}
</script> 

<style lang="stylus" scoped>
	.list
	  display: flex
	  flex-direction: column
	  justify-content: center

	  position: absolute
	  top: 1.58rem
	  right: 0
	  bottom: 0
	  width: 0.4rem
	  
	  .item
	    text-align: center
	    line-height: 0.36rem
	    color: #00bcd4
</style>

















