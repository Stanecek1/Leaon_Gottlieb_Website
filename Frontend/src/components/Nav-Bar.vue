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
            {
                type: "link",
                text: "Contact",
                path: { name: "contact"},
            },
            // {
            //     type: "link",
            //     text: "Shop",
            //     path: { name: "shop"},
            // },
            {
                type: "link",
                text: "Excerpts",
                path: { name: "excerpts"},
            },
            ],
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