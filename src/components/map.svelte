<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import ReturnButton from './return-button.svelte';
  import MB from './map-background.svelte';

  const class1 = "first";
  const class2 = "second";
  const class3 = "third";
  const classes = [class1, class2, class3];

  let elMap:HTMLElement | null = null;
  let elButtons:HTMLElement | null = null;

  const listenForEscape = (evt: KeyboardEvent) => {
    if (evt.code === "Escape") {
      resetClass()
    }
  }

  onMount(() => {
    document.addEventListener('keydown', listenForEscape);
    return () => {
      document.removeEventListener('keydown', listenForEscape);
    }
  })

  const toggleClass = (className: string) => {
    resetClass();
    if (elMap) elMap.classList.add(className);
  }

  const resetClass = () => {
    if (elMap) elMap.classList.remove(...classes);
    if (elButtons) elButtons.classList.remove(...classes);
  }
</script>

<div>
  <div id="map" bind:this={elMap}>
    <MB height={2200} width={4560} />
    <div id="main-nav" class="nav-container">
      <h1>Welcome to Yamasakidesign.com</h1>
      <p>This is simply a place to put up some fun projects</p>
      <ul class="horizontal">
        <li><button class="anchor-btn" on:click={() => toggleClass(class1)}>Job Hunting</button></li>
        <li><button class="anchor-btn" on:click={() => toggleClass(class2)}>Games</button></li>
        <li><button class="anchor-btn" on:click={() => toggleClass(class3)}>Design Studies</button></li>
      </ul>
    </div>
    <div id="first" class="nav-container">
      <h2>Job Hunting Related Information</h2>
      <ul>
        <li><a href="https://get-that-job.yamasakidesign.com">Get That Job</a> - How to apply for jobs in the Internet age.</li>
        <li><a href="https://portfolio.yamasakidesign.com">A very old portfolio website of mine</a></li>
      </ul>
      <ReturnButton onClick={resetClass} />
    </div>
    <div id="second" class="nav-container">
      <h2>Silly JavaScript Games</h2>
      <ul>
        <li><a href="https://games.yamasakidesign.com">Embarrassingly simple games</a> - here for your pleasure.</li>
        <li><a href="https://infinity.yamasakidesign.com">Clone of Infinity Loop</a> - the first couple levels, anyhow.</li>
      </ul>
      <ReturnButton onClick={resetClass} />
    </div>
    <div id="third" class="nav-container">
      <h2>Design Studies</h2>
      <ul>
        <li><a href="https://motoshi-meets-shoko.yamasakidesign.com">1958 Week at a Glance</a> - How father met mother</li>
        <li><a href="https://workout-buddy.yamasakidesign.com">Workout Buddy</a> - Project for my nephew (he never finished it)</li>
      </ul>
      <ReturnButton onClick={resetClass} />
    </div>
  </div>
</div>

<style lang="scss">
  #map {
    position: relative;;
    background-color: #21D4FD;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
  :is(#map.first) {
    transform: translate(-2150px, 0);
  }
  :is(#map.second) {
    transform: translate(0, -1250px);
  }
  :is(#map.third) {
    transform: translate( -1200px, -700px);
  }
  .anchor-btn {
    border:none;
    background: none;
    text-decoration: underline;
    font-weight: 700;
    padding: 0.3rem;
  }
  .nav-container {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 2rem;
    border-radius: 1rem;
    max-width: 500px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    h1,
    h2 {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      text-align: center;
    }
    ul {
      padding: 0;
    }
    li {
      list-style: none;
      margin: 0.3rem;
      font-size: 1.2rem;
    }
  }
  #main-nav {
    position: absolute;
    top:50px;
    left: 50px;
    p {
      text-align: center;
    }
    button {
      font-size: 1.4rem;
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  }
  #first {
    transform: translate(2200px, 100px);
  }
  #second {
    transform: translate(100px, 1100px);
  }
  #third {
    transform: translate(1250px, 340px);
  }
  .centering {
    text-align: center;
  }
  .horizontal {
    display:flex;
    justify-content: space-between;
  }
</style>