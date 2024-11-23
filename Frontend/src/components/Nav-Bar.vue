<template>
    <vue-navigation-bar  :options="navbarOptions" />
</template>
  
  <script>
//   import brandImage from '../src/assets/images/lockup-color.png'
  
  export default {
      data() {
        return {
          navbarOptions: {
            class: "navigation-body",
            elementId: "main-navbar",
            isUsingVueRouter: true,
            // mobileBreakpoint: 992,
            // brandImagePath: "./",
            // brandImage,
            // brandImageAltText: "brand-image",
            // collapseButtonOpenColor: "#661c23",
            // collapseButtonCloseColor: "#661c23",
            // showBrandImageInMobilePopup: true,
            ariaLabelMainNav: "Main Navigation",
            tooltipAnimationType: "shift-away",
            tooltipPlacement: "bottom",
            background:'#000000',
            menuOptionsLeft: [
            {
                type: "link",
                text: "Home",
                path: { name: "home"},
            },
            {
                type: "link",
                text: "Books",
                path: { name: "books"},
            },
            {
                type: "link",
                text: "About",
                path: { name: "about"},
            },
            // {
            //     type: "link",
            //     text: "Share",
            //     path: { name: "share"},
            // },
            {
                type: "link",
                text: "Contact",
                path: { name: "contact"},
            },
            {
                type: "link",
                text: "Shop",
                path: { name: "shop"},
            },
            {
                type: "link",
                text: "Excerpts",
                path: { name: "excerpts"},
            },
            //   {
            //     type: "link",
            //     text: "Contact",
            //     subMenuOptions: [
            //       {
            //         type: "link",
            //         text: "Customer Service",
            //         path: { name: "customer-service" },
            //       },
            //       {
            //         type: "link",
            //         text: "Accounting",
            //         path: { name: "accounting" },
            //       },
            //       {
            //         type: "hr",
            //       },
            //       {
            //         type: "link",
            //         text: "Reception",
            //         path: { name: "reception"},
            //         iconLeft: '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>',
            //       },
            //     ]
            //   },
            //   {
            //     type: "link",
            //     text: "Pricing",
            //     path: { name: "pricing"},
            //     iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
            //   },
            ],
            // menuOptionsRight: [
            //   {
            //     type: "button",
            //     text: "Signup",
            //     path: { name: "signup" },
            //     class: "navigation-body"
            //   },
            //   {
            //     type: "button",
            //     text: "Login",
            //     path: { name: "login" },
            //     iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
            //   }
            // ]
          }
        }
      }
  }
  </script>
  
  <style lang="scss">
    .vnb {
        display: grid;
        justify-content: top;
        background: rgb(245, 245, 245) !important;
        height: 5vh;
        border-bottom: solid black 1px;

      }
    .vnb a {
      color: black;
    }
    

  </style>