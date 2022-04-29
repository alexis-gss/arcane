<template>
  <section class="main_section home">
    <div class="home_logo">
      <p class="home_logo_desc">Riot Games presents</p>
      <img src="../assets/data/global/logo.png" alt="Arcane Logo" />
      <button class="home_logo_btn">
        Watch the trailer
        <svg class="home_logo_btn_svg">
          <use href="#home_btn_after"></use>
        </svg>
      </button>
    </div>

    <div class="home_details">
      <div class="home_details_logos">
        <a
          class="home_details_logos_riot"
          href="https://www.riotgames.com"
          target="_blank"
        >
          <svg class="home_details_logos_svg">
            <use href="#icon-riotgames"></use>
          </svg>
        </a>
        <a
          class="home_details_logos_netflix"
          href="https://www.netflix.com/"
          target="_blank"
        >
          <svg class="home_details_logos_svg">
            <use href="#icon-netflix"></use>
          </svg>
        </a>
      </div>
      <button class="home_details_btn">
        <svg class="home_details_btn_svg">
          <use href="#home_video_btn_pause"></use>
        </svg>
        <p>Pause video</p>
      </button>

      <p class="home_details_scroll">Scroll down</p>
    </div>

    <video class="home_video" autoplay loop muted>
      <source src="../assets/data/home/home_video.mp4" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos...
    </video>
  </section>
</template>
