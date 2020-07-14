<script>

</script>

<style>
  .wrapper {
    background: #1c1c1c;
    padding: 0 20px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .svelte-logo {
    width: 250px;
    margin-top: 20px;
  }

  .tmdb-logo {
    width: 122px;
    margin-top: 25px;
  }

  @media screen and (max-width: 500px) {
    .content {
      max-width: 1280px;
      min-height: 0px;
    }

    .svelte-logo {
      width: 150px;
      margin-top: 5px;
    }

    .tmdb-logo {
      display: inline-block;
      width: 80px;
      margin-top: 0px;
    }
  }
</style>
