<script lang="ts">

export let onClick:() => void;

</script>

<div>
  <button class="nav-btn" on:click={onClick} >Return to Main Navigation</button>&nbsp;<span>or press Escape key</span>
</div>

<style>
  div {
    text-align: center;
  }

  button {
    padding: 1em;
    background-color: white;
    color: black;
    border-radius: 0.5rem;
    border:none;
    font-size: 1.1rem;
    margin-right: 0.4rem;
  }
</style>