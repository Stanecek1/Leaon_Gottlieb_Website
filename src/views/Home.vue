<script setup>
import Books from './Books.vue'
</script>

<template>
    <section>
      <div class="text-center bg-red text-black mx-0">
        <div class="row pt-5 pb-5 mx-0 row justify-content-center mainHome bg-red">
          <div class="col-4 my-auto">
            <img class="leonImg" src="../assets/images/Leon.PNG"/>
          </div>
          <div class="col-6 text-black first-paragragh my-auto">
            <h1 class="title text-black mb-0" id="title">Leon S. Gottlieb, Esq</h1>
            <p >Mr. Gottlieb brings his years of experience as a trial attorney to his books, taking you into the courtroom where you experience the planning, drama, excitement, mystery, and the twists and turns as cases unfold.  You’ll wonder if they are real cases being revisited, or fictional.The how what, when and why of the mystery is for you to figure out before the final testimony. Are you up to the challenge?</p>
            <p>In writing these novels, Mr. Gottlieb relives his years in the court room proving, “You can take the attorney out of the courtroom, but you can’t take the courtroom out of the attorney!”</p>
            <div class="mt-4">
              <a class="btn btn-light home-button mx-1" href="/books" >Books</a>
              <!-- <a class="btn home-button mx-1" href="/about" >About</a> -->
            </div>
          </div>
        </div>
        <Books/>
      </div>
    </section>
</template>

<style scoped>
</style>
