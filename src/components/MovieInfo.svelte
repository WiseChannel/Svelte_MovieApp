<script>

</script>

MovieInfo

<style>
  .wrapper {
    background: var(--backdrop);
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
  }

  .content {
    display: flex;
    max-width: 1280px;
    max-height: 700px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
  }

  .text {
    width: 70%;
    padding: 40px;
    color: #fff;
    overflow: hidden;
  }

  h1 {
    font-family: 'Abel', sans-serif;
    font-size: 48px;
    margin: 0;
  }

  h3 {
    font-size: 16px;
    line-height: 0;
    margin-top: 30px;
  }

  p {
    font-family: 'Abel', sans-serif;
    font-size: 18px;
    line-height: 26px;
  }

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0px 0 0 0;
  }

  .director {
    margin: 0 0 0 40px;
  }

  .director p {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    .content {
      display: block;
      max-height: none;
    }
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 32px !important;
    }
  }
</style>
