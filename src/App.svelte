<script context="module">
	export function play({url}){
		music.src=url
		music.play()
	}
	export function pause(){
		music.pause()
	}
</script>

<script>
	import StorageMusic from './storage/StorageMusic.js'
	let duration;
	let muted = false;
	let currentTime = 0;
	let paused = false;
	let volume = 0.55;
	
	let nextMusic=0
		$:{
				if(duration===currentTime){
						console.log("termino music")
						currentTime=0
						play(StorageMusic[getNextMusic()])
					}
			}
		const reset=()=>{
				currentTime=0
			}
		const next=()=>{
				currentTime=0
			}
		const getNextMusic=()=>{
				if(nextMusic===7){
						nextMusic=0
						return 7
					}
				return nextMusic++
			}
</script>

<main>
	<div>
		<input type="range" min="0" max={duration} step="0.01" value={currentTime} 
		on:click={e => console.log(e.target.value) }/>
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
	</div>
	<button on:click={()=>{play(StorageMusic[nextMusic])}}>play</button>
	<button on:click={pause}>pause</button>
	<button on:click={reset}>reset</button>
	<button on:click={()=>{play(StorageMusic[getNextMusic()])}}>next</button>
</main>

<style>
	audio {
		visibility: hidden;
		opacity: 0;
	}


</style>
