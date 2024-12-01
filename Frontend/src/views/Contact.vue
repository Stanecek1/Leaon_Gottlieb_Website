<!-- <script setup>
    import fetch from 'cross-fetch';
    import { ref } from 'vue'

    const message = ref('')
    const from = ref('')
    const email = ref('')
    const loading = ref(false)
    const sent = ref(false)
    const errorMessage = ref('')

    async function sendMail() {
        //function to get the art data json file from the server and return it as array of objects
        try{
            loading.value = true
            await fetch("https://leongottliebwebsitebackend-5hh92ro0.b4a.run/sendMail/", {
                method: 'POST',
                body: JSON.stringify({from: from.value, message: message.value, email:email.value}),
                headers: {
                "Content-Type": "application/json",
                },
            })
            .then(res => res.json())
            .then(function(response){
                if (response.sent){
                    console.log('sent')
                    sent.value = true
                }
                else{
                    console.log('failure')
                    errorMessage.value = 'Message failed to send. Try emailing'
                }
                loading.value = false
            });
        }
        catch (error ) {
            console.log(error)
            console.log('failure')
            errorMessage.value = 'Message failed to send. Try emailing'
            loading.value = false
        }
        
    }
</script> -->


<template>
    <!-- <div class="py-0 my-0">
        <h1 class="text-center py-4 fancy mb-0" style="background-color: rgb(255, 255, 255); font-size: 90px;">Contact</h1>
    </div> -->
    <div class="row justify-content-center" style="margin-top: 5rem;">
        <div class="col-5 text-center"  style="margin-top: auto; margin-bottom: auto;">
            <p>Your comments and suggestions are always welcome. My readers are my friends, and as I always knew I owed my legal clients the best possible representation, I also know I owe my readers stories you can enjoy. If you enjoy my books, please tell your friends, so they can join our reader’s family. I enjoy hearing from new as well as old friends.</p>
            <p>Feel free to email me directly at </p>
            <h2><strong>Leon1card@gmail.com</strong></h2>
            <!-- <p>or </p>
            <p>fill out the form below</p> -->
        </div>
    </div>
    <!-- <div v-if="loading" class="row justify-content-center">
        <div class="spinner-border" role="status">
        </div>
    </div> -->
    <!-- <div v-else class="row ">
            <div v-if="sent" class="pt-2 row justify-content-center">Your message has been sent. Thank you</div>
            <div v-else class="pt-2 row justify-content-center ">
                <div class="col-5 gray-bg">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Your Name</label>
                        <input style="width: 350px;" v-model="from" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Your Email</label>
                        <input style="width: 350px;" v-model="email" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Message</label>
                        <textarea v-model="message" type="text" class="form-control" id="message" placeholder="Your Message" ></textarea>
                    </div>
                    <button v-on:click="sendMail" class="btn btn-primary my-2">Send Message</button>
                    <p class="text-danger" v-if="errorMessage" v-text="errorMessage"></p>
                </div>
            </div>
    </div> -->


</template>