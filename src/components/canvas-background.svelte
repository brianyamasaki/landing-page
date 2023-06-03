<script lang="ts">
  import { onMount } from 'svelte';
  import { claim_text } from 'svelte/internal';

  export let width:number;
  export let height:number;

  let canvas: HTMLCanvasElement | null = null;

  onMount(() => {
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.globalAlpha = 0.3;
        
        const imgRocket = new Image();
        imgRocket.src = "/assets/rocket.png";
        ctx.drawImage(imgRocket, 100, 300, 600, 700);

        // ctx.beginPath();
        // ctx.strokeStyle = "2px solid black";
        // ctx.moveTo(250, 250);
        // ctx.lineTo(2300, 250);
        // ctx.closePath();
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.moveTo(250, 250);
        // ctx.lineTo(250, 1340);
        // ctx.closePath();
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.moveTo(250, 250);
        // ctx.lineTo(1500, 900)
        // ctx.closePath();
        // ctx.stroke();
      }
    }
  })
</script>

<canvas id="canvas" bind:this={canvas} {width} {height}>

</canvas>

<style lang="scss">
  canvas {
    position: absolute;
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  }
</style>