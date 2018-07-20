<template>
	<div class="icons">
	    <swiper  >
	    	
			<swiper-slide v-for="(page,index) in pages">
				<div class="icon" v-for="item in page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.url" alt="">
					</div>
					<p class="icon-desc">景点门票</p>
				</div>
			</swiper-slide>	
		</swiper>

	</div>
</template>
<script>
	export default{
		data(){
			return{
				iconList : [
					{
						id:0,
						url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
					},
					{
						id:1,
						url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
					},
					{
						id:2,
						url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
					},
					{
						id:3,
						url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
					},
					{
						id:4,
						url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
					},
					{
						id:5,
						url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
					},
					{
						id:6,
						url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
					},
					{
						id:7,
						url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
					},
					{
						id:8,
						url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
					}


				]
			}
		},
		computed:{
			pages(){
					const pages = [];
					this.iconList.forEach((item,index)=>{
						const page = Math.floor(index / 8 )
						if( !pages[page] ){
							pages[page] = []
						}
						pages[page].push(item)
					})
					return pages
			}
		}
	}


</script>



<style lang="stylus" scoped>
	.icons >>> .swiper-container
	  height: 0
	  padding-bottom: 50%
	.icons
	  overflow: hidden
	  height: 0
	  padding-bottom: 50%
	  margin-top: 0.1rem
	  
	  .icon-desc
	    position: absolute
	    left: 0
	    right: 0
	    bottom: 0
	    line-height: 0.44rem
	    text-align: center
	    color: #333
	  .icon
	    position: relative
	    float: left
	    width: 25%
	    padding-bottom: 25%
	    
	    .icon-img
	      position: absolute
	      left: 0
	      top: 0
	      right: 0
	      bottom: 0.44rem
	      
	      .icon-img-content
	        height: 100%
	        display:block
	        margin: 0 auto







</style>


