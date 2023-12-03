<script setup>
    import fetch from 'cross-fetch';
    import { ref } from 'vue'

    const message = ref('')
    const from = ref('')

    async function sendMail() {
        //function to get the art data json file from the server and return it as array of objects
        try{
            await fetch("http://localhost:4000/sendMail", {
                method: 'POST',
                body: JSON.stringify({from: from.value, message: message.value}),
                headers: {
                "Content-Type": "application/json",
                },
            })
            .then(res => res.json())
            .then(function(response){
                if (response.sent){
                    console.log('sent')
                }
                else{
                    console.log('failure')
                }
            });
        }
        catch (error ) {
            console.log(error)
        }
        
    }
</script>


<template>
    <div class="py-0 my-0">
        <h1 class="text-center py-4 fancy mb-0" style="background-color: rgb(255, 255, 255); font-size: 90px;">Contact</h1>
    </div>
    <div class="row justify-content-center">
        <div class="col-5 text-center" >
            <p>Your comments and suggestions are always welcome. My readers are my friends, and as I always knew I owed my legal clients the best possible representation, I also know I owe my readers stories you can enjoy. If you enjoy my books, please tell your friends, so they can join our reader’s family. I enjoy hearing from new as well as old friends.</p>
            <h1>Leon1card@gmail.com</h1>
        </div>
    </div>

    <div class="pt-5 row justify-content-center">
        <div class="col-5">

                <div class="form-group">
                    <label for="exampleInputEmail1">From</label>
                    <input v-model="from" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Message </label>
                    <textarea v-model="message" type="text" class="form-control" id="message" placeholder="Your Message" ></textarea>
                </div>
                <button v-on:click="sendMail" class="btn btn-primary mt-2">Send Message</button>

        </div>
    </div>
</template>