<script setup>
    import Doors from '../components/Doors.vue'
    import Doors2 from '../components/Doors2.vue'
    import Doors3 from '../components/Doors3.vue'
</script>
<template>
    <div class="py-0 my-0">
        <!-- <h1 class="text-center py-4 fancy mb-0" style="background-color: rgb(255, 255, 255); font-size: 90px;">Books </h1> -->
        <div class="row justify-content-center px-0 mx-0 bg-white text-black">
            <div class="col-12 mx-0 my-0 px-0 py-0">
                <Doors :size="2" :className="'webgl'" :path="'/doors_Impossible.glb'" />
            </div>
            <h1 class="text-center py-4 fancy mb-0" style="background-color: rgb(236, 236, 236); margin-top: -7px">Impossible</h1>
            <div class="row justify-content-center my-auto py-2">
                <div class="col-6 text-center pt-5">
                    <p><strong>Impossible</strong> is the story of a college student accused of raping an old girlfriend is Mr. Gottlieb’s  first book. If the student, (David) was telling the truth, how did his sperm get to be found in her vagina, and his blood on her bed post? This courtroom thriller will keep you wondering how the evidence got where it was. Was David lying or was there more than meets the eye. This book will be listed as fiction, but you decide if is really fiction or based on truth, but then again isn’t most fiction based on truth?</p>
                    <p>How the hell did his sperm get in her vagina and his blood get in her apartment, if he hasn’t been near her for over three months, and has never been in her new apartment? IMPOSSIBLE!</p>
                </div>
            </div>
            <div class="col-7 text-center py-5 mb-5">
                  <h2 class="display-7">“You can take the attorney out of the courtroom, but you can’t take the courtroom out of the attorney.”</h2>
            </div>
        </div>
    </div>

    <div>
        <div class="row justify-content-center px-0 mx-0 bg-white text-black">
            <div class="col-12 mx-0 my-0 px-0 py-0">
                <Doors2 :size="2" :className="'webgl2'" :path="'/doors_Homeless.glb'" />
            </div>
            <h1 class="text-center mb-0  py-4 fancy"  style="background-color: rgb(236, 236, 236); margin-top: -7px">Homeless</h1>
            <div class="col-7 my-auto=">
                <div class="text-center p-5">
                    <p>Homeless depicts the life of each of seven such people from their births through their fall into homelessness. Each, from divergent backgrounds, has a story of a life left behind, a story as varied as their names. . One beta reader said, “You’ll cry and cheer and enjoy each story.”</p>
                    <p>When asked why he wrote Homeless, all Mr. Gottlieb would say is: “There was a woman who stood outside of a shopping center with her faithful dog at her side. She was always clean and neat although plainly dressed. She was always pleasant to talk to and just didn’t have the look of one who was homeless. One day she said, ‘It’s time for me to find a shelter.’ I never saw her again. It’s sad that we never asked her name and even sadder that we never called her by her name. Although I gave her money and food for her dog, we never invited her home for a meal. She wasn’t an alcoholic or a disturbed person, just someone who through a quirk of fate fell into the life of a homeless person. She was so different from what I thought of as homeless people, that I felt compelled to write Homeless, to let the world see that some of those living on the streets, not only don’t want to be there, but don’t deserve to be there. It could happen to any one of us.</p>
                </div>

                <div class="text-center py-3 mb-5">
                  <h2 class="display-7">There are as many reasons people are homeless as there are homeless people.</h2>
            </div>
            </div>
        </div>
    </div>

    <!-- <div>
        <div class="row justify-content-center px-0 mx-0 bg-white text-black">
            <h1 class="text-center mb-0 py-4 fancy" style="background-color: rgb(236, 236, 236); margin-top: -7px">Hysteria</h1>
            <div class="col-12 mx-0 my-0 px-0 py-0">
                <Doors3 :size="2" :className="'webgl3'" :path="'/doors_Homeless.glb'" />
            </div>
            
            <div class="col-7 my-auto=">
                <div class="text-center p-5">
                    <p>Hysteria is the story of a small-town doctor, the leading citizen of his community, suddenly drawn into the hysteria created by the McMillon cases and its national publicity. In the flash of an eye, the idyllic life of the doctor and his family is turned upside down. Feel the emotions and hopelessness of an innocent man and that of his family as his prosecution is pursued by ruthless politicians spurred on by the hysteria waves of a case three thousand miles away.</p>
                </div>
            </div>
        </div>
    </div> -->

    


    
</template>