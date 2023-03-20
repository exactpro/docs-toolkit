<template>
  <footer class="font-sans bg-green-800 box-border text-white py-6 px-4">
    <div class="p-3 m-auto max-w-5xl">
      <div
        class="flex justify-between gap-3 flex-col items-center md:flex-row md:items-start"
      >
        <div class="flex flex-col items-center">
          <a href="https://exactpro.com/" target="_blank"
            ><img
              class="w-full h-auto"
              src="~/assets/img/logo_white.svg"
              alt="exactpro logo"
          /></a>
          <span>Build Software to Test Software</span>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h2 class="e-footer__h2">Contact Us</h2>
          <hr class="e-footer__hr" />
          <ul class="flex flex-col justify-center m-1">
            <li>
              <a href="mailto:docops@exactpro.com"
                ><iconsEmail class="inline-block mr-3" />docops@exactpro.com</a
              >
            </li>
            <li>
              <a href="mailto:info@exactpro.com"
                ><iconsEmail class="inline-block mr-3" />info@exactpro.com</a
              >
            </li>
            <li>
              <a href="tel:+4402033191644"
                ><iconsPhone class="inline-block mr-3" />+44 (0) 20 3319 1644</a
              >
            </li>
            <li>
              <a href="tel:+16463403000"
                ><iconsPhone class="inline-block mr-3" />+1 (646) 340 3000</a
              >
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h2 class="e-footer__h2">Follow Us</h2>
          <hr class="e-footer__hr" />
          <div class="flex flex-wrap gap-2">
            <a href="https://github.com/exactpro" target="_blank"
              ><img src="~/assets/img/github.svg" alt="facebook logo"
            /></a>
            <a href="https://www.facebook.com/exactpro/" target="_blank"
              ><img src="~/assets/img/facebook.svg" alt="facebook logo"
            /></a>
            <a href="https://twitter.com/exactpro" target="_blank"
              ><img src="~/assets/img/twitter.svg" alt="twitter logo"
            /></a>
            <a
              href="https://www.linkedin.com/company/exactpro-systems-llc?trk=biz-companies-cym"
              target="_blank"
              ><img src="~/assets/img/linkedin.svg" alt="linkedin logo"
            /></a>
            <a href="https://www.youtube.com/c/exactprosystems" target="_blank"
              ><img src="~/assets/img/youtube.svg" alt="youtube logo"
            /></a>
          </div>
        </div>
      </div>
      <hr
        class="my-12 w-full h-0 border-secondary-300 border-0 border-t-[thin]"
      />
      <div class="my-5 text-sm text-center">
        Copyright © 2009 - 2023 Exactpro. All Rights Reserved. Exactpro refers
        to Exactpro Systems Limited, registered in England and Wales, and/or one
        of its subsidiaries, each of which is a separate legal entity,
        registered in the relevant jurisdictions.
      </div>
      <div class="flex flex-wrap justify-center underline text-sm gap-2">
        <a href="https://exactpro.com/terms-and-conditions" target="_blank"
          >Terms and Conditions</a
        >
        <a href="https://exactpro.com/privacy-policy" target="_blank"
          >Privacy Policy</a
        >
        <a href="https://exactpro.com/cookies-policy" target="_blank"
          >Cookies Policy</a
        >
      </div>
    </div>
  </footer>
</template>

<style>
.e-footer__h2 {
  @apply block font-bold text-2xl;
}

.e-footer__hr {
  @apply w-32 h-1 bg-secondary-300 rounded-full my-1 border-none;
}
</style>
