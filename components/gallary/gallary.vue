<template>
	<div class="container" @click.stop="handleClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="item in imgs">
		    	<img class="gallary-img" :src="item">
		    </swiper-slide>
		   
		    <!-- Optional controls -->
		    <div class="swiper-pagination" style="color: #fff"  slot="pagination"></div>
		  </swiper>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			imgs : {
				type: Array,
				default() {
					return {

					}
				}
			}
		},
		data(){
			return {
				swiperOption : {
					pagination: ".swiper-pagination",
					paginationType: "fraction",
					observeParents: true ,
					observe : true
				}
			}
		},
		methods : {
			handleClick () {
				this.$emit('close')
			}
		}
	}
</script> 

<style lang="stylus" scoped >
	.container >>> .swiper-container
	  overflow: inherit


	.container
	  height: 100%
	  display: flex
	  flex-direction: column
	  justify-content: center
	  z-index: 99
	  color: #000
	  position: fixed
	  left:  0
	  right:  0
	  bottom:  0
	  top:  0
	  background: #000
	  .wrapper
	    width: 100%
	    height: 0
	    
	    padding-bottom: 50%
	    background: #fff
	    .gallary-img
	      width: 100%
	    .swiper-pagination
	      color: #fff
	    

</style>







