<template>
  <div>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/home-carousel/Welcome.png" class="d-block w-100" alt="Welcome">
        </div>
        <div class="carousel-item">
          <img src="../assets/home-carousel/Cafe.png" class="d-block w-100" alt="Cafe">
        </div>
        <div class="carousel-item">
          <img src="../assets/home-carousel/Show.png" class="d-block w-100" alt="Show">
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

    <div class="container mt-5 text-center">
      <h1>Authors</h1>
      <div class="row">
        <div class="col-sm-4">
          <img src="../assets/authors/Gosia.jpg" alt="Małgorzata Lis" class="img-fluid rounded-circle" style="width: 300px">
          <h3 class="mt-3">Małgorzata Lis</h3>
        </div>
        <div class="col-sm-4">
          <img src="../assets/authors/Malwina.jpg" alt="Malwina Kochman" class="img-fluid rounded-circle" style="width: 300px">
          <h3 class="mt-3">Malwina Kochman</h3>
        </div>
        <div class="col-sm-4">
          <img src="../assets/authors/Julka.jpg" alt="Julia Mękarska" class="img-fluid rounded-circle" style="width: 300px">
          <h3 class="mt-3">Julia Mękarska</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHomeView'
}
</script>

<style scoped>
.carousel-item img {
  max-width: 100%;
  height: auto;
}

.row {
  margin-top: 50px;
}

h3 {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
