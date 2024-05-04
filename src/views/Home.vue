<template>
  <div class="container">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="item active">
          <img src="../assets/home-carousel/Welcome.png"
               alt="Welcome" style="width:100%;">
        </div>

        <div class="item">
          <img src="../assets/home-carousel/Cafe.png"
               alt="Cafe" style="width:100%;">
        </div>

        <div class="item">
          <img src="../assets/home-carousel/Show.png"
               alt="Show" style="width:100%;">
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <div class="container mt-5 text-center">
    <h1>Authors</h1>
    <div class="row">
      <div class="col-sm-4 text-center">
        <img src="../assets/authors/Gosia.jpg"
             alt="Małgorzata Lis" style="width:200px; border-radius: 100%">
        <h3 class="names">Małgorzata Lis</h3>
      </div>
      <div class="col-sm-4 text-center">
        <img src="../assets/authors/Malwina.jpg"
             alt="Malwina Kochman" style="width:200px; border-radius: 100%">
        <h3 class="names">Malwina Kochman</h3>
      </div>
      <div class="col-sm-4 text-center">
        <img src="../assets/authors/Julka.jpg"
             alt="Julia Mękarska" style="width:200px; border-radius: 100%">
        <h3 class="names">Julia Mękarska</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHomeView'
}
</script>

<style>
  .row {
    margin-top: 50px;
  }

  .names {
    margin-top: 20px;
    margin-bottom: 40px;
  }
</style>
