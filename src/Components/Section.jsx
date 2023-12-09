import React from "react";
import buddy_bullies1 from "../Images/s2-img1.png";
import elipse1 from "../Images/elipse1.png";

const Section = () => {

  return (
    <div>
      <section className="position-relative bg-color">
        <img src={elipse1} alt="elipse1"  className="elipse1 d-none d-sm-block"/>
        <div id="minting" className="container position-relative z-1">
          <div className="row pt-5">
            <div className="col-md-6 col-12 position-relative" data-aos="fade-right">
              <img
                src={buddy_bullies1}
                alt="1"
                className="w-100 d-flex align-items-center justify-content-center"
              />
            </div>
            <div className="col-md-6 col-12">
              <div className="s2-list-padding d-flex align-items-md-center flex-column">
                <div className="ff-poppins mx-auto mx-md-0 max_width-s2">
                  <p className="myb color-light fw-6 fs-lg">Mint Your Bat</p>
                  <p className="pt-xl-5 fw-5 fs-md color-light mb-0">
                    Minting: 1,5 SOL
                  </p>
                  <p className="text-decoration-line-through color-light opacity-5 fw-4 fs-3sm">
                    Before 2 SOL
                  </p>
                  <p className="pt-lg-3 fw-5 fs-md color-light mb-0">
                    Whitelist: 0,88 SOL
                  </p>
                  <p className="text-decoration-line-through color-light opacity-5 fw-4 fs-3sm">
                    Before 1 SOL
                  </p>
                  <button className="coming text-decoration-none bg-light1 fw-5 fs-3sm color-pagecolor">
                    Coming soon
                  </button>
                  <div className="s2-svg-padding cursor-padding">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="147"
                      height="33"
                      viewBox="0 0 147 33"
                      fill="none"
                    >
                      <path
                        d="M141.942 6.1348C139.841 5.1872 137.588 4.48679 135.233 4.08852C135.212 4.0845 135.19 4.08709 135.171 4.09595C135.152 4.10481 135.135 4.11949 135.125 4.13796C134.836 4.64473 134.515 5.3053 134.29 5.82717C131.792 5.45395 129.252 5.45395 126.754 5.82717C126.503 5.2488 126.22 4.68486 125.907 4.13796C125.896 4.11926 125.88 4.10425 125.861 4.09492C125.841 4.0856 125.819 4.08241 125.798 4.08578C123.444 4.48405 121.192 5.18445 119.089 6.13343C119.071 6.14101 119.056 6.15395 119.046 6.17051C114.772 12.4535 113.6 18.5814 114.176 24.6323C114.177 24.6471 114.182 24.6615 114.189 24.6744C114.197 24.6874 114.206 24.6988 114.218 24.7078C116.713 26.524 119.495 27.9075 122.449 28.8004C122.469 28.8067 122.491 28.8067 122.512 28.8003C122.532 28.794 122.551 28.7815 122.564 28.7647C123.199 27.9132 123.764 27.0137 124.248 26.0688C124.277 26.0139 124.249 25.948 124.191 25.926C123.304 25.5919 122.445 25.1887 121.621 24.7202C121.606 24.7117 121.593 24.6997 121.584 24.6853C121.575 24.6708 121.57 24.6543 121.569 24.6373C121.568 24.6203 121.571 24.6033 121.578 24.5878C121.585 24.5723 121.596 24.5588 121.61 24.5485C121.783 24.4208 121.956 24.2876 122.12 24.1544C122.135 24.1424 122.153 24.1348 122.172 24.1323C122.191 24.1299 122.21 24.1328 122.228 24.1406C127.621 26.5632 133.461 26.5632 138.791 24.1406C138.809 24.1323 138.828 24.1291 138.847 24.1313C138.867 24.1334 138.885 24.141 138.9 24.153C139.065 24.2876 139.236 24.4208 139.411 24.5485C139.425 24.5586 139.436 24.5719 139.443 24.5873C139.45 24.6026 139.454 24.6196 139.453 24.6366C139.452 24.6536 139.447 24.6701 139.438 24.6847C139.429 24.6993 139.417 24.7115 139.403 24.7202C138.581 25.1926 137.727 25.5923 136.83 25.9246C136.817 25.9296 136.804 25.9375 136.793 25.9477C136.783 25.958 136.775 25.9703 136.769 25.984C136.764 25.9976 136.762 26.0122 136.763 26.0269C136.763 26.0415 136.767 26.0558 136.774 26.0688C137.268 27.0123 137.834 27.9105 138.456 28.7633C138.469 28.7808 138.487 28.7939 138.508 28.8008C138.529 28.8076 138.551 28.808 138.572 28.8018C141.53 27.9113 144.317 26.5272 146.814 24.7078C146.827 24.6993 146.837 24.6883 146.844 24.6755C146.852 24.6627 146.857 24.6484 146.858 24.6337C147.545 17.6379 145.708 11.5595 141.984 6.17325C141.975 6.15575 141.96 6.1421 141.942 6.1348ZM125.054 20.9476C123.431 20.9476 122.092 19.4795 122.092 17.6791C122.092 15.8773 123.405 14.4105 125.054 14.4105C126.716 14.4105 128.042 15.8896 128.016 17.6791C128.016 19.4809 126.703 20.9476 125.054 20.9476ZM136.006 20.9476C134.382 20.9476 133.044 19.4795 133.044 17.6791C133.044 15.8773 134.356 14.4105 136.006 14.4105C137.668 14.4105 138.995 15.8896 138.969 17.6791C138.969 19.4809 137.669 20.9476 136.006 20.9476Z"
                        fill="white"
                      />
                      <path
                        d="M16.1287 10.85C13.1663 10.85 10.7488 13.2675 10.7488 16.2299C10.7488 19.1922 13.1663 21.6097 16.1287 21.6097C19.091 21.6097 21.5085 19.1922 21.5085 16.2299C21.5085 13.2675 19.091 10.85 16.1287 10.85ZM32.2642 16.2299C32.2642 14.0021 32.2844 11.7944 32.1593 9.57063C32.0342 6.98766 31.4449 4.69526 29.5561 2.80646C27.6633 0.913621 25.3749 0.328415 22.7919 0.203302C20.5641 0.0781888 18.3565 0.0983684 16.1327 0.0983684C13.9049 0.0983684 11.6972 0.0781888 9.47347 0.203302C6.89049 0.328415 4.59809 0.917657 2.70929 2.80646C0.816453 4.6993 0.231247 6.98766 0.106134 9.57063C-0.0189791 11.7985 0.00120046 14.0061 0.00120046 16.2299C0.00120046 18.4537 -0.0189791 20.6653 0.106134 22.8891C0.231247 25.4721 0.820489 27.7645 2.70929 29.6533C4.60213 31.5461 6.89049 32.1313 9.47347 32.2565C11.7013 32.3816 13.9089 32.3614 16.1327 32.3614C18.3605 32.3614 20.5682 32.3816 22.7919 32.2565C25.3749 32.1313 27.6673 31.5421 29.5561 29.6533C31.449 27.7605 32.0342 25.4721 32.1593 22.8891C32.2884 20.6653 32.2642 18.4577 32.2642 16.2299ZM16.1287 24.5075C11.5479 24.5075 7.85103 20.8106 7.85103 16.2299C7.85103 11.6491 11.5479 7.95224 16.1287 7.95224C20.7094 7.95224 24.4063 11.6491 24.4063 16.2299C24.4063 20.8106 20.7094 24.5075 16.1287 24.5075ZM24.7453 9.54642C23.6758 9.54642 22.8121 8.68274 22.8121 7.61322C22.8121 6.54371 23.6758 5.68002 24.7453 5.68002C25.8148 5.68002 26.6785 6.54371 26.6785 7.61322C26.6788 7.86718 26.6291 8.11871 26.532 8.3534C26.435 8.58809 26.2926 8.80133 26.113 8.98091C25.9334 9.16049 25.7202 9.30287 25.4855 9.39991C25.2508 9.49695 24.9993 9.54674 24.7453 9.54642Z"
                        fill="white"
                      />
                      <path
                        d="M90.1576 5.80033C88.895 6.35982 87.5386 6.73785 86.1126 6.90872C87.5839 6.02835 88.6847 4.64275 89.2095 3.01046C87.8272 3.83153 86.3143 4.40947 84.7366 4.71916C83.6757 3.58637 82.2704 2.83554 80.739 2.58324C79.2077 2.33094 77.6358 2.59128 76.2675 3.32385C74.8993 4.05642 73.8112 5.22022 73.1721 6.63458C72.533 8.04893 72.3788 9.6347 72.7333 11.1457C69.9324 11.0051 67.1924 10.2771 64.691 9.00892C62.1896 7.74078 59.9829 5.96086 58.2139 3.78467C57.6091 4.82803 57.2613 6.03773 57.2613 7.32607C57.2606 8.48586 57.5462 9.62789 58.0928 10.6508C58.6393 11.6738 59.4299 12.546 60.3944 13.1901C59.2758 13.1545 58.182 12.8523 57.2038 12.3085V12.3992C57.2037 14.0259 57.7664 15.6025 58.7964 16.8615C59.8263 18.1206 61.2602 18.9845 62.8546 19.3066C61.817 19.5875 60.7291 19.6288 59.6731 19.4276C60.123 20.8273 60.9992 22.0512 62.1793 22.9281C63.3593 23.805 64.784 24.2909 66.2539 24.3178C63.7586 26.2767 60.677 27.3392 57.5047 27.3345C56.9428 27.3347 56.3813 27.3019 55.8232 27.2362C59.0433 29.3066 62.7916 30.4054 66.6198 30.4011C79.5787 30.4011 86.6631 19.668 86.6631 10.3594C86.6631 10.057 86.6555 9.75152 86.6419 9.44909C88.0199 8.45256 89.2093 7.21855 90.1546 5.80487L90.1576 5.80033Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
