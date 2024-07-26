<script lang="ts">

</script>

<div>
  <div id="map">
    <div>
      <h1>Brian Yamasaki</h1>
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
        <h2>Design Study Websites</h2>
        <ul>
          <li><a href="https://workout-buddy.yamasakidesign.com">Workout Buddy</a> - A simple application to keep track of your workout</li>
          <li><a href="https://portfolio.yamasakidesign.com">A very old portfolio website of mine</a> - So 2014</li>
          <li><a href="https://motoshi-meets-shoko.yamasakidesign.com">1958 Week at a Glance</a> - How my father met my mother</li>
        </ul>
      </div>
      <div id="fourth" class="nav-container">
        <h2>Designs</h2>
        <ul>
          <li><a href="https://nihirafamily.smugmug.com/Designs">Pamphlets, logos and cards</a> I have designed</li>
          <li><a href="https://nihirafamily.smugmug.com/Christmas-cards/">My Family's Christmas Cards</a> &ndash; I love creating cards</li>
        </ul>
      </div>
      <div id="fifth" class="nav-container">
        <h2>Experiments</h2>
        <ul>
          <li><a href="https://tree-regions.yamasakidesign.com">Geolocation API experiment</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  #map {
    background-color: #F5AEC0;
    background-image: linear-gradient(0deg, #271516 0%, #381953 50%, #F5AEC0 50%, #4C419F 100%);
    padding: 1rem;
    height: 100vh;
    z-index: 5;
  }
  #nav-groups {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 75rem;
    margin: auto;
    height: 80vh;
  }
  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    text-align: center;
    margin-top: 0;
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