<script context="module">
	export function play({url}){
		music.src=url
		music.play()
	}
	export function pause(){
		music.pause()
	}
	export function playOn({url}){
		if(music.src==url){
			music.play()
			return
		}
		music.src=url
		music.play()
	}
</script>

<script>
	import StorageMusic from '../storage/StorageMusic.js'
	let duration;
	let muted = false;
	let currentTime = 0;
	let paused = false;
	let volume = 0.55;

	let nextMusic=0
	let buttonPauseView=false

		const viewButton =()=>buttonPauseView=!buttonPauseView
		const hola=()=>console.log("test")

		$:{
				if(duration===currentTime){
						console.log("termino music")
						currentTime=0
						play(StorageMusic[getNextMusic()])
					}
			}
		const reset=()=>currentTime=0
		const next=()=>currentTime=0

		const view=()=>{
				console.log(nextMusic)
				console.log(StorageMusic.length)
			}
		const getNextMusic=()=>{
				let allMusicNro=StorageMusic.length - 1 
				nextMusic+=1
				if(nextMusic>allMusicNro){
						nextMusic=0
						return nextMusic
					}
				return nextMusic
			}
</script>

<div class="container-card">
	<div class="button-container">
		<div class="content-logo">
			<img class="logo-git"src="./images/github.svg">
		</div>
		<input type="range" min="0" max={duration} step="0.01" value={currentTime} />
		<audio id="music"
				bind:duration={duration}
				bind:currentTime={currentTime}
				bind:muted={muted}
				bind:paused={paused}
				bind:volume={volume}
				controls
				>
				<track kind="captions">
		</audio>
		<button>
			<img  src="./images/prev.png" alt="imgs">
		</button>
		{#if buttonPauseView}
			<button on:click={pause}  on:click={viewButton}>
				<img  class="mid" src="./images/pause.png" alt="img">
			</button>
		{:else}
			<button on:click={()=>{playOn(StorageMusic[nextMusic])}} on:click={viewButton}>
				<img  class="mid" src="./images/play2.png" alt="img">
			</button>
		{/if}
		<button on:click={()=>{play(StorageMusic[getNextMusic()])}}>
			<img  class="inv" src="./images/prev.png" alt="img">
		</button>
	</div>
</div>

<style>
	.container-card{
		max-width:450px;
		background-color:#76b5c5;
		text-align:center;
		height:350px;
		border-radius:10px;
		border:2px solid #abdbe3;
		transition:.4s;
	}
	.container-card:hover{
		box-shadow: 0 0 5px 3px  #eee;
	}
	.content-logo{
		width:200px;
		margin:1.5rem auto;
	}
	.logo-git{
		width:140px;
	}
	.logo-git:hover{
		filter: invert(0);
	}
	img {
		width:50px;
		background-color:none;
		filter: invert(0);
		transition:0.2s;
	}
	img:hover {
		filter: invert(0.3);
	}
	.mid {
		width:55px;
	}
	button {
		margin:0 9px;
		background-color:#76b5c5;
		border:none;
	}
	button:focus {
		background-color:#76b5c5;
	}
	.button-container {
		background:none;
	}
	.inv {
		transform:scaleX(-1);
	}

	audio{
		position:absolute;
		visibility:hidden;
		right:100%;
		z-index:0;
	}
	input{
		width:100%;
	}
</style>
