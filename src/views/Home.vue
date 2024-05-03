<template>
  <div id="carouselExample" class="carousel slide" style="background-color: #DDC7AB">
    <div class="carousel-inner">
      <div class="carousel-item active">
<!--        <img src="..." class="d-block w-100" alt="...">-->
        <h1 style="color: #E08989">Something here</h1>
      </div>
      <div class="carousel-item">
<!--        <img src="..." class="d-block w-100" alt="...">-->
        <h1 style="color: #E08989">Something here</h1>
      </div>
      <div class="carousel-item">
<!--        <img src="..." class="d-block w-100" alt="...">-->
        <h1 style="color: #E08989">Something here</h1>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppHomeView'
}
</script>

<style>
</style>
