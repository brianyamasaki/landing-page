<script lang="ts">
</script>


<div>
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
    width: 100vw;
  }

  #rocket {
    position:absolute;
    top: 70vh;
    left: 35vw;
    opacity: 0.4;
    width: 20vw;
  }

  #bank {
    position:absolute;
    top: -1.4vh;
    left: 28.5;
    opacity: 0.2;
    width: 8vw;
    color: white;
  }

  #buildings {
    position: absolute;
    top: 45vh;
    left: 25vw;
    opacity: 0.1;
    width: 6vw;
  }

  #coffee {
    position: absolute;
    top: 23vh;
    left: 16.4%;
    opacity: 0.3;
    width: 16vw;
  }

  #database {
    position: absolute;
    top: 33vh;
    left: 48vw;
    opacity: 0.4;
    width: 9vw;
  }

  #inboxes {
    position: absolute;
    top: 12vh;
    left: 68.2%;
    opacity: 0.2;
    width: 11vw;
  }

  #crossword {
    position: absolute;
    top: 66vh;
    left: 0.7%;
    opacity: 0.2;
    width: 18vw;
  }

  #skidoo {
    position: absolute;
    top: 41vh;
    right: 0.7%;
    opacity: 0.3;
    transform: rotate(30deg);
  }
</style>