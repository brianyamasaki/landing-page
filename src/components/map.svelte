<script lang="ts">


</script>

<div>
  <div id="map">
    <!-- <MB height={2200} width={4560} /> -->
    <div>
      <h1>Welcome to Yamasakidesign.com</h1>
    </div>
    <div id="nav-groups">
      <div id="first" class="nav-container">
        <h2>Job Hunting Related Information</h2>
        <ul>
          <li><a href="https://get-that-job.yamasakidesign.com">Get That Job</a> - How to apply for jobs in the Internet age.</li>
        </ul>
      </div>
      <div id="second" class="nav-container">
        <h2>Silly JavaScript Games</h2>
        <ul>
          <li><a href="https://games.yamasakidesign.com">Embarrassingly simple games</a> - here for your pleasure.</li>
          <li><a href="https://infinity.yamasakidesign.com">Clone of Infinity Loop</a> - the first couple levels, anyhow.</li>
        </ul>
      </div>
      <div id="third" class="nav-container">
        <h2>Design Studies</h2>
        <ul>
          <li><a href="https://motoshi-meets-shoko.yamasakidesign.com">1958 Week at a Glance</a> - How my father met my mother</li>
          <li><a href="https://workout-buddy.yamasakidesign.com">Workout Buddy</a> - Project for my nephew (he never finished it)</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  #map {
    background-color: #21D4FD;
    background-image: linear-gradient(0deg, #21D4FD 0%, #B721FF 100%);
    padding: 1rem;
    height: 100vh;
  }
  #nav-groups {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
  }
  h1 {
    color: white;
    text-align: center;
    text-shadow: 1px 1px 2px red, 0 0 1em darkblue, 0 0 0.2em darkblue;
  }
 .nav-container {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 1rem;
    margin: 0 1rem 1rem 1rem;
    border-radius: 1rem;
    max-width: 600px;
    width: 70vw;
    font-family: Georgia, 'Times New Roman', Times, serif;
    &:nth-of-type(odd) {
      align-self: flex-start;
    }
    &:nth-of-type(even) {
      align-self: flex-end;
    }
    h2 {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      text-align: center;
    }
    ul {
      padding: 0;
    }
    li {
      text-align: left;
      list-style: none;
      margin: 0.3rem;
      font-size: 1.2rem;
    }
  }
</style>