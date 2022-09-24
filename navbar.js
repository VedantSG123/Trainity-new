const newNavBar = document.querySelector(".my-nav-bar");
// const navMobile = document.querySelector(".mobile");
// const navLaptop = document.querySelector(".laptop");

function myFunction(x) {
  if (x.matches) {
    newNavBar.innerHTML = `<nav class="mobile" id="navbar">
        <div class="nav-logo-mobile">
          <img
            src="navbar-assets/2.svg"
            alt=""
            class="trainity-img"
          />
        </div>

        <div class="nav-ham-mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="nav-mobile-svg"
            data-src="assets/img/icons/interface/menu.svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM4 6C3.44772 6 3 6.44772 3 7V7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7V7C21 6.44772 20.5523 6 20 6H4Z"
              fill="#212529"
            ></path>
          </svg>
        </div>
      </nav>

      <div class="new-nav-content-mobile">
        <div class="nav-list-mobile">
          <a
            href="#"
            class="nav-track-mobile-btn"
            onClick="navbarMobile()"
            >Tracks</a
          >
          <div class="nav-tracks-mobile" id="tracks-div-mobile">
            <h3 class="nav-list-head-mobile">Tracks</h3>
            <ul class="nav-tracks-list-mobile">
              <li class="nav-track-mobile" onclick="redirectData()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="nav-track-svg-mobile"
                  data-src="assets/img/icons/theme/files/selected-file.svg"
                >
                  <title>Icon For Selected-file</title>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <polygon points="0 0 24 0 24 24 0 24" opacity="0"></polygon>
                    <path
                      d="M4.85714286,1 L11.7364114,1 C12.0910962,1 12.4343066,1.12568431 12.7051108,1.35473959 L17.4686994,5.3839416 C17.8056532,5.66894833 18,6.08787823 18,6.52920201 L18,19.0833333 C18,20.8738751 17.9795521,21 16.1428571,21 L4.85714286,21 C3.02044787,21 3,20.8738751 3,19.0833333 L3,2.91666667 C3,1.12612489 3.02044787,1 4.85714286,1 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z"
                      fill="#48BF84"
                      fill-rule="nonzero"
                      opacity="0.3"
                    ></path>
                    <path
                      d="M6.85714286,3 L14.7364114,3 C15.0910962,3 15.4343066,3.12568431 15.7051108,3.35473959 L20.4686994,7.3839416 C20.8056532,7.66894833 21,8.08787823 21,8.52920201 L21,21.0833333 C21,22.8738751 20.9795521,23 19.1428571,23 L6.85714286,23 C5.02044787,23 5,22.8738751 5,21.0833333 L5,4.91666667 C5,3.12612489 5.02044787,3 6.85714286,3 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z"
                      fill="#48BF84"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
                <div class="nav-track-content-mobile">
                  <a
                    href="./data.html"
                    style="
                      display: block;
                      color: #495057;
                      text-decoration: none;
                    "
                    ><h5 class="nav-content-head-mobile" style="font-size: 1rem !important;">Data Analytics</h5></a
                  >
                  <h5 class="nav-content-rating-mobile" style="font-size: 1rem !important;">4.4 (3200+ ratings)</h5>
                  <div class="nav-content-stars-mobile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="nav-mobile-star"
                      data-src="assets/img/icons/interface/star.svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                        fill="#FFC107"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="nav-mobile-star"
                      data-src="assets/img/icons/interface/star.svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                        fill="#FFC107"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="nav-mobile-star"
                      data-src="assets/img/icons/interface/star.svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                        fill="#FFC107"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="nav-mobile-star"
                      data-src="assets/img/icons/interface/star.svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                        fill="#FFC107"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      class="nav-mobile-star"
                      data-src="assets/img/icons/theme/general/half-star.svg"
                    >
                      <title>Icon For Half-star</title>
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <polygon
                          points="0 0 24 0 24 24 0 24"
                          opacity="0"
                        ></polygon>
                        <path
                          d="M12,4.25932872 C12.1488635,4.25921584 12.3000368,4.29247316 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 L12,4.25932872 Z"
                          fill="#FFC107"
                          opacity="0.3"
                        ></path>
                        <path
                          d="M12,4.25932872 L12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.277344,4.464261 11.6315987,4.25960807 12,4.25932872 Z"
                          fill="#FFC107"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </li>
              <li class="nav-track-mobile" onclick="redirectMarket()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="nav-track-svg-mobile"
                  data-src="assets/img/icons/theme/communication/group-chat.svg"
                >
                  <title>Icon For Group-chat</title>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
                    <path
                      d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                      fill="#48BF84"
                    ></path>
                    <path
                      d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                      fill="#48BF84"
                      opacity="0.3"
                    ></path>
                  </g>
                </svg>
                <div class="nav-track-content-mobile">
                  <a
                    href="./marketing.html"
                    style="
                      display: block;
                      color: #495057;
                      text-decoration: none;
                    "
                    ><h5 class="nav-content-head-mobile" style="font-size: 1rem !important;">
                      Digital Marketing
                    </h5></a
                  >
                  <h5 class="nav-content-rating-mobile" style="font-size: 1rem !important;">4.7 (120+ ratings)</h5>
                  <div class="nav-content-stars-mobile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="nav-mobile-star"
                      data-src="assets/img/icons/interface/star.svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                        fill="#FFC107"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="nav-mobile-star"
                      data-src="assets/img/icons/interface/star.svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                        fill="#FFC107"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="nav-mobile-star"
                      data-src="assets/img/icons/interface/star.svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                        fill="#FFC107"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="nav-mobile-star"
                      data-src="assets/img/icons/interface/star.svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                        fill="#FFC107"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      class="nav-mobile-star"
                      data-src="assets/img/icons/theme/general/half-star.svg"
                    >
                      <title>Icon For Half-star</title>
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <polygon
                          points="0 0 24 0 24 24 0 24"
                          opacity="0"
                        ></polygon>
                        <path
                          d="M12,4.25932872 C12.1488635,4.25921584 12.3000368,4.29247316 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 L12,4.25932872 Z"
                          fill="#FFC107"
                          opacity="0.3"
                        ></path>
                        <path
                          d="M12,4.25932872 L12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.277344,4.464261 11.6315987,4.25960807 12,4.25932872 Z"
                          fill="#FFC107"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-log-mobile">
          <a
            href="https://trainity.space/"
            class="nav-log-mobile-btn"
            >Log In / Sign Up</a
          >
        </div>
      </div>`;

    const navHamSvg = document.querySelector(".nav-mobile-svg");
    const navContentMobile = document.querySelector(".new-nav-content-mobile");
    const tracksBtnMobile = document.querySelector(".nav-track-mobile-btn");
    const trackContentMobile = document.querySelector(".nav-tracks-mobile");

    navHamSvg.addEventListener("click", (e) => {
      e.preventDefault();
      if (navHamSvg.classList.contains("nav-cross-mobile")) {
        navHamSvg.innerHTML = `<path d="M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM4 6C3.44772 6 3 6.44772 3 7V7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7V7C21 6.44772 20.5523 6 20 6H4Z" fill="#212529"></path>`;
        navHamSvg.classList.remove("nav-cross-mobile");
        navContentMobile.classList.remove("new-nav-content-show");
        if (tracksBtnMobile.classList.contains("div-on")) {
          trackContentMobile.style.display = "none";
          tracksBtnMobile.classList.remove("div-on");
        }
      } else {
        navHamSvg.innerHTML = `<path d="M16.2426 6.34311L6.34309 16.2426C5.95257 16.6331 5.95257 17.2663 6.34309 17.6568C6.73362 18.0473 7.36678 18.0473 7.75731 17.6568L17.6568 7.75732C18.0473 7.36679 18.0473 6.73363 17.6568 6.34311C17.2663 5.95258 16.6331 5.95258 16.2426 6.34311Z" fill="#212529"></path>
    <path d="M17.6568 16.2426L7.75734 6.34309C7.36681 5.95257 6.73365 5.95257 6.34313 6.34309C5.9526 6.73362 5.9526 7.36678 6.34313 7.75731L16.2426 17.6568C16.6331 18.0473 17.2663 18.0473 17.6568 17.6568C18.0474 17.2663 18.0474 16.6331 17.6568 16.2426Z" fill="#212529"></path>`;
        navHamSvg.classList.add("nav-cross-mobile");
        navContentMobile.classList.add("new-nav-content-show");
        if (tracksBtnMobile.classList.contains("div-on")) {
          trackContentMobile.style.display = "none";
          tracksBtnMobile.classList.remove("div-on");
        }
      }
    });
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 0) {
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
          if (navContentMobile.style.display == "none")
            navContentMobile.style.display = "block";

          // document.getElementsByClassName("sticky-bar").style.bottom = "40px";
        } else {
          document.getElementById("navbar").style.top = "-100px";
          if (navContentMobile.style.display != "none")
            navContentMobile.style.display = "none";

          if (navHamSvg.classList.contains("nav-cross-mobile")) {
            navHamSvg.innerHTML = `<path d="M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM4 6C3.44772 6 3 6.44772 3 7V7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7V7C21 6.44772 20.5523 6 20 6H4Z" fill="#212529"></path>`;
            navHamSvg.classList.remove("nav-cross-mobile");
            navContentMobile.classList.remove("new-nav-content-show");
            if (tracksBtnMobile.classList.contains("div-on")) {
              trackContentMobile.style.display = "none";
              tracksBtnMobile.classList.remove("div-on");
            }
          }
          // document.getElementsByClassName("sticky-bar").style.bottom = "0";
        }
        prevScrollpos = currentScrollPos;
      }
    };
    window.addEventListener("mouseup", function (event) {
      var tracksDiv = document.getElementById("tracks-div-mobile");
      if (event.target != tracksDiv && event.target.parentNode != tracksDiv) {
        tracksDiv.style.display = "none";
      }
    });

    // tracksBtnMobile.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   if (tracksBtnMobile.classList.contains("div-on")) {
    //     trackContentMobile.style.display = "none";
    //     tracksBtnMobile.classList.remove("div-on");
    //   } else {
    //     trackContentMobile.style.display = "block";
    //     tracksBtnMobile.classList.add("div-on");
    //   }
    // });
  } else {
    newNavBar.innerHTML = `<nav class="laptop" id="navbar">
        <div class="laptop-nav-container">
          <div class="nav-logo-laptop">
            <img
              src="https://trainity.in/assets/img/trainity/logo/2.svg"
              alt=""
              class="trainity-img"
            />
          </div>
          <div class="nav-links-laptop">
            <div class="nav-tracks-link-laptop">
              <a
                href="#"
                class="nav-track-laptop-btn"
                onClick="navbarLaptop()"
                >Tracks</a
              >
              <div class="nav-laptop-tracks" id="tracks-div-laptop">
                <div class="nav-tracks-laptop">
                  <h5 class="nav-list-head-laptop">Tracks</h5>
                  <ul class="nav-tracks-list-laptop">
                    <li class="nav-track-laptop" onclick="redirectData()">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        class="nav-track-svg-laptop"
                        data-src="assets/img/icons/theme/files/selected-file.svg"
                      >
                        <title>Icon For Selected-file</title>
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <polygon
                            points="0 0 24 0 24 24 0 24"
                            opacity="0"
                          ></polygon>
                          <path
                            d="M4.85714286,1 L11.7364114,1 C12.0910962,1 12.4343066,1.12568431 12.7051108,1.35473959 L17.4686994,5.3839416 C17.8056532,5.66894833 18,6.08787823 18,6.52920201 L18,19.0833333 C18,20.8738751 17.9795521,21 16.1428571,21 L4.85714286,21 C3.02044787,21 3,20.8738751 3,19.0833333 L3,2.91666667 C3,1.12612489 3.02044787,1 4.85714286,1 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z"
                            fill="#48BF84"
                            fill-rule="nonzero"
                            opacity="0.3"
                          ></path>
                          <path
                            d="M6.85714286,3 L14.7364114,3 C15.0910962,3 15.4343066,3.12568431 15.7051108,3.35473959 L20.4686994,7.3839416 C20.8056532,7.66894833 21,8.08787823 21,8.52920201 L21,21.0833333 C21,22.8738751 20.9795521,23 19.1428571,23 L6.85714286,23 C5.02044787,23 5,22.8738751 5,21.0833333 L5,4.91666667 C5,3.12612489 5.02044787,3 6.85714286,3 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z"
                            fill="#48BF84"
                            fill-rule="nonzero"
                          ></path>
                        </g>
                      </svg>
                      <div class="nav-track-content-laptop">
                        <a
                          href="./data.html"
                          style="
                            display: block;
                            color: #495057;
                            text-decoration: none;
                          "
                        >
                          <h4 class="nav-content-head-laptop">
                            Data Analytics
                          </h4>
                        </a>
                        <div></div>
                        <div class="nav-rating-container-laptop">
                          <div class="nav-content-stars-laptop">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              class="nav-laptop-star"
                              data-src="assets/img/icons/interface/star.svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                                fill="#FFC107"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              class="nav-laptop-star"
                              data-src="assets/img/icons/interface/star.svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                                fill="#FFC107"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              class="nav-laptop-star"
                              data-src="assets/img/icons/interface/star.svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                                fill="#FFC107"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              class="nav-laptop-star"
                              data-src="assets/img/icons/interface/star.svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                                fill="#FFC107"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              class="nav-laptop-star"
                              data-src="assets/img/icons/theme/general/half-star.svg"
                            >
                              <title>Icon For Half-star</title>
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <polygon
                                  points="0 0 24 0 24 24 0 24"
                                  opacity="0"
                                ></polygon>
                                <path
                                  d="M12,4.25932872 C12.1488635,4.25921584 12.3000368,4.29247316 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 L12,4.25932872 Z"
                                  fill="#FFC107"
                                  opacity="0.3"
                                ></path>
                                <path
                                  d="M12,4.25932872 L12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.277344,4.464261 11.6315987,4.25960807 12,4.25932872 Z"
                                  fill="#FFC107"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <h4 class="nav-content-rating-laptop">
                            4.4 (3200+ ratings)
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li class="nav-track-laptop" onclick="redirectMarket()">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        class="nav-track-svg-laptop"
                        data-src="assets/img/icons/theme/communication/group-chat.svg"
                      >
                        <title>Icon For Group-chat</title>
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect
                            opacity="0"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          ></rect>
                          <path
                            d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                            fill="#48BF84"
                          ></path>
                          <path
                            d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                            fill="#48BF84"
                            opacity="0.3"
                          ></path>
                        </g>
                      </svg>
                      <div class="nav-track-content-laptop">
                        <a
                          href="./marketing.html"
                          style="
                            display: block;
                            color: #495057;
                            text-decoration: none;
                          "
                        >
                          <h4 class="nav-content-head-laptop">
                            Digital Marketing
                          </h4>
                        </a>
                        <div></div>
                        <div class="nav-rating-container-laptop">
                          <div class="nav-content-stars-laptop">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              class="nav-laptop-star"
                              data-src="assets/img/icons/interface/star.svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                                fill="#FFC107"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              class="nav-laptop-star"
                              data-src="assets/img/icons/interface/star.svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                                fill="#FFC107"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              class="nav-laptop-star"
                              data-src="assets/img/icons/interface/star.svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                                fill="#FFC107"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              class="nav-laptop-star"
                              data-src="assets/img/icons/interface/star.svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.3616 17.7407L8.27722 19.888C7.78838 20.145 7.18375 19.957 6.92675 19.4682C6.82441 19.2735 6.7891 19.0505 6.82627 18.8338L7.60632 14.2858L4.30199 11.0648C3.90651 10.6793 3.89841 10.0462 4.28391 9.65073C4.43742 9.49325 4.63856 9.39076 4.8562 9.35913L9.42268 8.69559L11.4649 4.55766C11.7093 4.0624 12.3089 3.85906 12.8042 4.10349C13.0014 4.20082 13.161 4.36044 13.2583 4.55766L15.3005 8.69559L19.867 9.35913C20.4136 9.43855 20.7922 9.94599 20.7128 10.4925C20.6812 10.7102 20.5787 10.9113 20.4212 11.0648L17.1169 14.2858L17.8969 18.8338C17.9903 19.3781 17.6247 19.8951 17.0804 19.9884C16.8636 20.0256 16.6406 19.9903 16.446 19.888L12.3616 17.7407Z"
                                fill="#FFC107"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                              class="nav-laptop-star"
                              data-src="assets/img/icons/theme/general/half-star.svg"
                            >
                              <title>Icon For Half-star</title>
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <polygon
                                  points="0 0 24 0 24 24 0 24"
                                  opacity="0"
                                ></polygon>
                                <path
                                  d="M12,4.25932872 C12.1488635,4.25921584 12.3000368,4.29247316 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 L12,4.25932872 Z"
                                  fill="#FFC107"
                                  opacity="0.3"
                                ></path>
                                <path
                                  d="M12,4.25932872 L12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.277344,4.464261 11.6315987,4.25960807 12,4.25932872 Z"
                                  fill="#FFC107"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <h4 class="nav-content-rating-laptop">
                            4.7 (120+ ratings)
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="nav-log-link-laptop">
              <a
                href="https://trainity.space/"
                class="nav-log-laptop-btn"
                >Log In / Sign Up</a
              >
            </div>
          </div>
        </div>
      </nav>`;

    const trackLink = document.querySelector(".nav-tracks-link-laptop");

    window.addEventListener("mouseup", function (event) {
      var trackDiv = document.getElementById("tracks-div-laptop");
      if (event.target != trackDiv && event.target.parentNode != trackDiv) {
        trackDiv.style.display = "none";
      }
    });

    const tracksBtnLaptop = document.querySelector(".nav-tracks-link-laptop");
    const tracksDivLaptop = document.querySelector(".nav-laptop-tracks");

    // console.log(tracksBtnLaptop);

    // tracksBtnLaptop.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   if (tracksBtnLaptop.classList.contains("div-on")) {
    //     tracksDivLaptop.style.display = "none";
    //     tracksBtnLaptop.classList.remove("div-on");
    //   } else {
    //     tracksDivLaptop.style.display = "block";
    //     tracksBtnLaptop.classList.add("div-on");
    //   }
    // });
    var prevScrollpos = window.pageYOffset;
    // console.log("prev", prevScrollpos);
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      // console.log("curr", currentScrollPos);

      if (currentScrollPos > 0) {
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";

          // document.getElementsByClassName("sticky-bar").style.bottom = "40px";
        } else {
          document.getElementById("navbar").style.top = "-100px";
          if (tracksDivLaptop.style.display != "none")
            tracksDivLaptop.style.display = "none";
          // document.getElementsByClassName("sticky-bar").style.bottom = "0";
        }
        prevScrollpos = currentScrollPos;
      }
    };
  }
}

// console.log(navBar);
var x = window.matchMedia("(max-width: 991px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);

const navbarMobile = () => {
  const navMobile = document.getElementById("tracks-div-mobile");
  if (navMobile.classList.contains("on")) {
    navMobile.style.display = "none";
    navMobile.classList.remove("on");
  } else {
    navMobile.style.display = "block";
    navMobile.classList.add("on");
  }

  // navMobile.classList.add("on");
  // console.log(navMobile.classList);
};

// document.getElementById("tracks-div-laptop").style.display = "block";

const navbarLaptop = () => {
  const navLaptop = document.getElementById("tracks-div-laptop");
  if (navLaptop.classList.contains("on")) {
    navLaptop.style.display = "none";
    navLaptop.classList.remove("on");
  } else {
    navLaptop.style.display = "block";
    navLaptop.classList.add("on");
  }

  // navMobile.classList.add("on");
  // console.log(navMobile.classList);
};
