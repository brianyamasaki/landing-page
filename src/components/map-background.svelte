<script lang="ts">
  export let width:number;
  export let height:number;
</script>


<div style:width={`${width}px`} style:height={`${height}px`}>
  <img id="rocket" src="/assets/rocket.png" alt="rocket launch" />
  <img id="bank" src="/assets/bank.svg" alt="bank" />
  <img src="/assets/buildings.svg" alt="buildings" id="buildings" />
  <img src="/assets/cup-hot.svg" alt="coffee" id="coffee" />
  <img src="/assets/database.svg" alt="database" id="database" />
  <img src="/assets/inboxes-fill.svg" alt="inboxes" id="inboxes" />
  <img src="/assets/crossword.webp" alt="crossword" id="crossword" />
  <img src="/assets/34-skidoo.webp" alt="34 Skidoo" id="skidoo" />
</div>

<style lang="scss">
  div {
    position: absolute;
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  }

  #rocket {
    position:absolute;
    top: 250px;
    left: 150px;
    opacity: 0.4;
    width: 450px;
  }

  #bank {
    position:absolute;
    top: -30px;
    left: 1300px;
    opacity: 0.2;
    width: 350px;
    color: white;
  }

  #buildings {
    position: absolute;
    top: 250px;
    left: 900px;
    opacity: 0.1;
    width: 250px;
  }

  #coffee {
    position: absolute;
    top: 50px;
    left: 750px;
    opacity: 0.4;
    width: 160px;
  }

  #database {
    position: absolute;
    top: 300px;
    left: 1750px;
    opacity: 0.4;
    width: 400px;
  }

  #inboxes {
    position: absolute;
    top: 250px;
    left: 2200px;
    opacity: 0.2;
    width: 500px;
  }

  #crossword {
    position: absolute;
    top: 1450px;
    left: 30px;
    opacity: 0.2;
    width: 800px;
  }

  #skidoo {
    position: absolute;
    top: 900px;
    left: 34px;
    opacity: 0.3;
    transform: rotate(30deg);
  }
</style>