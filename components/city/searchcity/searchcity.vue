<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search_input" type="text" placeholder="输入城市名或者拼音">
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item border-bottom" @click="handleCityClick(item.name)" v-for="item in list">{{item.name}}</li>
				<li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from "better-scroll"
	export default{
		props:{
			cities: Object
		},
		methods: {
			handleCityClick(city){
				this.$store.commit("changeCity",city)
				this.$router.push("/")
			}
		},
		mounted(){
			this.scroll = new Bscroll(this.$refs.search,{click:true})
		},
		data(){
			return{
				keyword: "",
				list: [],
				timer: null
			}
		},
		computed:{
			hasNoData(){
				return !this.list.length
			}
		},
		watch: {
			keyword () {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.list = []
					return 
				}
				this.timer = setTimeout(()=>{
					const result = [] 
					for( let i in this.cities ){
						this.cities[i].forEach( (value)=>{
							if( value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1 ){
								result.push(value)
							}
						})
					}
					this.list = result
				},100)
			}
		}
	}
</script>


<style lang="stylus" scoped>
	.search
	  height: 0.72rem
	  padding: 0 0.1rem
	  background: #00bcd4	
	  .search_input
	    height: 0.62rem
	    line-height: 0.62rem
	    text-align: center
	    width: 100%
	    border-radius: 0.06rem
	    background: #fff
	.search-content
	  position: absolute
	  top: 1.58rem
	  left: 0
	  right: 0
	  bottom: 0
	  overflow: hidden
	  background: #fff
	  z-index: 2
	  .search-item
	    line-height: 0.62rem
	    padding-left: 0.2rem
	    color: #666
	    background: #fff





		
		
		

</style>








