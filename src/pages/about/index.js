import React from "react";
import Head from "next/head";
import styles from "../../styles/About.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Testimonials from "../../components/Testimonials";

export default function index() {
  return (
    <div>
      <Head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Spekni - Recognizing impactful developers</title>
        <meta
          name="keywords"
          content="Developer, Endorsements, Hiring, Job, Planetscale, Hashnode, Hackathon"
        />
        {/* Primary met tags */}
        <meta
          name="title"
          content="Spekni - Recognizing impactful developers"
        />
        <meta
          name="description"
          content="Spekni is a platform built for recognizing developers making impact in the tech space through endorsements and recommendations."
        />
        <meta
          name="author"
          content="Victor Eke, Spiff Jekey-Green, Nicholas Ovunda"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spekni.vercel.app/" />
        <meta
          property="og:title"
          content="Spekni - Recognizing impactful developers"
        />
        <meta
          property="og:description"
          content="Spekni is a platform built for recognizing developers making impact in the tech space through endorsements and recommendations."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/victoreke/image/upload/v1658407791/Spekni/bg/spekni-about.png"
        />

        <meta
          property="twitter:card"
          content="https://res.cloudinary.com/victoreke/image/upload/v1658407791/Spekni/bg/spekni-about.png"
        />
        <meta property="twitter:url" content="https://spekni.vercel.app/" />
        <meta
          property="twitter:title"
          content="Spekni - Recognizing impactful developers"
        />
        <meta
          property="twitter:description"
          content="Spekni is a platform built for recognizing developers making impact in the tech space through endorsements and recommendations."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/victoreke/image/upload/v1658407791/Spekni/bg/spekni-about.png"
        />
      </Head>

      {/* About Layout */}
      <Navbar />
      <main className={styles.about}>
        <div className={styles.hero}>
          {/* <h1 className="font-extrabold max-w-4xl text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left">
            Making it possble for people to{" "}
            <span className="highlight">endorse</span> developers based on the
            skillsets they are proved to be proficient in.
          </h1> */}
          <h1 className="font-extrabold max-w-4xl text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left">
            Recieving <span className="highlight">positive feedback</span> from
            someone is always a good feeling. It&apos;s even better when
            it&apos;s in writing
          </h1>
          {/* <h1>
            “Showing gratitude is one of the simplest yet most powerful things
            humans can do for each other.” —Randy Pausch
          </h1> */}
          {/* <h1>
            “Kind words can be short and easy to speak, but their echoes are
            truly endless.” —Mother Teresa
          </h1> */}
          <figure className={styles.heroImage}>
            {/* Planetscale badge */}
            <svg
              width="125"
              height="40"
              viewBox="0 0 199 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57.7933 30V11.8182H64.6115C66.0083 11.8182 67.1802 12.0786 68.1271 12.5994C69.08 13.1203 69.7991 13.8364 70.2844 14.7479C70.7757 15.6534 71.0213 16.6832 71.0213 17.8374C71.0213 19.0033 70.7757 20.0391 70.2844 20.9446C69.7932 21.8501 69.0682 22.5633 68.1094 23.0842C67.1506 23.5991 65.9698 23.8565 64.5671 23.8565H60.0483V21.1488H64.1232C64.94 21.1488 65.6088 21.0067 66.1296 20.7227C66.6505 20.4386 67.0352 20.0479 67.2837 19.5508C67.5382 19.0536 67.6655 18.4825 67.6655 17.8374C67.6655 17.1922 67.5382 16.6241 67.2837 16.1328C67.0352 15.6416 66.6475 15.2598 66.1207 14.9876C65.5999 14.7094 64.9281 14.5703 64.1055 14.5703H61.087V30H57.7933ZM76.9539 11.8182V30H73.7401V11.8182H76.9539ZM84.1827 30.2752C83.3186 30.2752 82.5403 30.1213 81.8478 29.8136C81.1613 29.4999 80.6168 29.0382 80.2143 28.4286C79.8178 27.819 79.6195 27.0674 79.6195 26.1737C79.6195 25.4042 79.7615 24.768 80.0456 24.2649C80.3297 23.7618 80.7174 23.3594 81.2086 23.0575C81.6999 22.7557 82.2533 22.5278 82.8688 22.3739C83.4902 22.2141 84.1324 22.0987 84.7953 22.0277C85.5943 21.9448 86.2424 21.8709 86.7395 21.8058C87.2367 21.7347 87.5977 21.6282 87.8226 21.4862C88.0534 21.3382 88.1689 21.1103 88.1689 20.8026V20.7493C88.1689 20.0805 87.9706 19.5626 87.574 19.1957C87.1775 18.8287 86.6064 18.6452 85.8606 18.6452C85.0734 18.6452 84.449 18.8169 83.9874 19.1602C83.5317 19.5034 83.2239 19.9089 83.0641 20.3764L80.0634 19.9503C80.3001 19.1217 80.6908 18.4292 81.2353 17.8729C81.7798 17.3106 82.4456 16.8904 83.2328 16.6122C84.0199 16.3281 84.89 16.1861 85.8429 16.1861C86.4998 16.1861 87.1538 16.263 87.8049 16.4169C88.4559 16.5708 89.0507 16.8253 89.5893 17.1804C90.1279 17.5296 90.56 18.006 90.8855 18.6097C91.2169 19.2134 91.3826 19.968 91.3826 20.8736V30H88.2931V28.1268H88.1866C87.9913 28.5056 87.7161 28.8607 87.361 29.1921C87.0118 29.5176 86.5708 29.781 86.0382 29.9822C85.5114 30.1776 84.8929 30.2752 84.1827 30.2752ZM85.0172 27.9137C85.6623 27.9137 86.2217 27.7865 86.6951 27.532C87.1686 27.2715 87.5326 26.9283 87.7871 26.5021C88.0475 26.076 88.1777 25.6114 88.1777 25.1083V23.5014C88.0771 23.5843 87.9055 23.6612 87.6628 23.7322C87.4261 23.8033 87.1597 23.8654 86.8638 23.9187C86.5679 23.9719 86.2749 24.0193 85.9849 24.0607C85.6949 24.1022 85.4434 24.1377 85.2303 24.1673C84.7509 24.2324 84.3218 24.3389 83.943 24.4869C83.5642 24.6348 83.2653 24.842 83.0463 25.1083C82.8274 25.3687 82.7179 25.7061 82.7179 26.1204C82.7179 26.7122 82.9339 27.1591 83.3659 27.4609C83.798 27.7628 84.3484 27.9137 85.0172 27.9137ZM97.8279 22.0099V30H94.6142V16.3636H97.6859V18.6808H97.8457C98.1594 17.9173 98.6595 17.3106 99.3461 16.8608C100.039 16.411 100.894 16.1861 101.912 16.1861C102.853 16.1861 103.673 16.3873 104.371 16.7898C105.075 17.1922 105.62 17.7752 106.004 18.5387C106.395 19.3022 106.587 20.2285 106.581 21.3175V30H103.368V21.8146C103.368 20.9032 103.131 20.19 102.657 19.6751C102.19 19.1602 101.542 18.9027 100.713 18.9027C100.151 18.9027 99.6509 19.027 99.2129 19.2756C98.7808 19.5182 98.4405 19.8704 98.1919 20.332C97.9493 20.7937 97.8279 21.353 97.8279 22.0099ZM115.885 30.2663C114.518 30.2663 113.338 29.9822 112.343 29.4141C111.355 28.84 110.594 28.0291 110.062 26.9815C109.529 25.928 109.263 24.6881 109.263 23.2617C109.263 21.859 109.529 20.628 110.062 19.5685C110.6 18.5032 111.352 17.6746 112.317 17.0827C113.281 16.485 114.415 16.1861 115.717 16.1861C116.557 16.1861 117.35 16.3222 118.096 16.5945C118.848 16.8608 119.511 17.2751 120.085 17.8374C120.665 18.3996 121.12 19.1158 121.452 19.9858C121.783 20.8499 121.949 21.8797 121.949 23.0753V24.0607H110.772V21.8945H118.868C118.863 21.279 118.729 20.7315 118.469 20.2521C118.209 19.7668 117.845 19.3851 117.377 19.1069C116.915 18.8287 116.377 18.6896 115.761 18.6896C115.104 18.6896 114.527 18.8494 114.03 19.169C113.533 19.4827 113.145 19.897 112.867 20.4119C112.595 20.9209 112.456 21.4802 112.45 22.0898V23.9808C112.45 24.7739 112.595 25.4545 112.885 26.0227C113.175 26.585 113.58 27.017 114.101 27.3189C114.622 27.6148 115.231 27.7628 115.93 27.7628C116.397 27.7628 116.821 27.6977 117.199 27.5675C117.578 27.4313 117.907 27.2331 118.185 26.9727C118.463 26.7122 118.673 26.3897 118.815 26.005L121.816 26.3423C121.626 27.1354 121.265 27.8279 120.733 28.4197C120.206 29.0057 119.531 29.4614 118.709 29.7869C117.886 30.1065 116.945 30.2663 115.885 30.2663ZM131.477 16.3636V18.8494H123.638V16.3636H131.477ZM125.573 13.0966H128.787V25.8984C128.787 26.3305 128.852 26.6619 128.983 26.8928C129.119 27.1177 129.296 27.2715 129.515 27.3544C129.734 27.4373 129.977 27.4787 130.243 27.4787C130.444 27.4787 130.628 27.4639 130.794 27.4343C130.965 27.4047 131.095 27.3781 131.184 27.3544L131.726 29.8668C131.554 29.926 131.309 29.9911 130.989 30.0621C130.675 30.1332 130.291 30.1746 129.835 30.1864C129.03 30.2101 128.305 30.0888 127.66 29.8224C127.015 29.5502 126.503 29.13 126.124 28.5618C125.751 27.9936 125.568 27.2834 125.573 26.4311V13.0966ZM144.188 16.8164C144.105 16.0411 143.756 15.4374 143.14 15.0053C142.531 14.5733 141.738 14.3572 140.761 14.3572C140.075 14.3572 139.486 14.4608 138.994 14.668C138.503 14.8751 138.127 15.1562 137.867 15.5114C137.607 15.8665 137.473 16.2719 137.468 16.7276C137.468 17.1064 137.553 17.4349 137.725 17.7131C137.903 17.9912 138.142 18.228 138.444 18.4233C138.746 18.6127 139.08 18.7725 139.447 18.9027C139.814 19.0329 140.184 19.1424 140.557 19.2312L142.262 19.6573C142.948 19.8171 143.608 20.0331 144.241 20.3054C144.881 20.5777 145.452 20.9209 145.955 21.3352C146.464 21.7495 146.866 22.2496 147.162 22.8356C147.458 23.4215 147.606 24.1081 147.606 24.8952C147.606 25.9606 147.334 26.8987 146.789 27.7095C146.245 28.5144 145.458 29.1448 144.428 29.6005C143.404 30.0503 142.164 30.2752 140.708 30.2752C139.293 30.2752 138.065 30.0562 137.024 29.6183C135.988 29.1803 135.177 28.5411 134.591 27.7006C134.011 26.8602 133.697 25.8363 133.65 24.6289H136.89C136.938 25.2622 137.133 25.7889 137.476 26.2092C137.82 26.6294 138.267 26.9431 138.817 27.1502C139.373 27.3574 139.995 27.4609 140.681 27.4609C141.397 27.4609 142.025 27.3544 142.563 27.1413C143.108 26.9223 143.534 26.6205 143.842 26.2358C144.15 25.8452 144.306 25.3894 144.312 24.8686C144.306 24.3951 144.167 24.0045 143.895 23.6967C143.623 23.383 143.241 23.1226 142.75 22.9155C142.265 22.7024 141.696 22.513 141.045 22.3473L138.977 21.8146C137.479 21.4299 136.296 20.8469 135.426 20.0657C134.561 19.2785 134.129 18.2339 134.129 16.9318C134.129 15.8606 134.419 14.9225 134.999 14.1175C135.585 13.3126 136.381 12.6882 137.388 12.2443C138.394 11.7945 139.533 11.5696 140.806 11.5696C142.096 11.5696 143.226 11.7945 144.197 12.2443C145.173 12.6882 145.94 13.3067 146.496 14.0998C147.053 14.887 147.34 15.7925 147.357 16.8164H144.188ZM156.348 30.2663C154.987 30.2663 153.818 29.9674 152.842 29.3697C151.871 28.7719 151.122 27.9463 150.596 26.8928C150.075 25.8333 149.814 24.6141 149.814 23.2351C149.814 21.8501 150.081 20.628 150.613 19.5685C151.146 18.5032 151.898 17.6746 152.868 17.0827C153.845 16.485 154.999 16.1861 156.331 16.1861C157.437 16.1861 158.417 16.3903 159.269 16.7987C160.127 17.2011 160.811 17.7723 161.32 18.5121C161.829 19.246 162.119 20.1042 162.19 21.0866H159.118C158.994 20.4297 158.698 19.8822 158.231 19.4442C157.769 19.0004 157.15 18.7784 156.375 18.7784C155.718 18.7784 155.141 18.956 154.644 19.3111C154.147 19.6603 153.759 20.1634 153.481 20.8203C153.209 21.4773 153.073 22.2644 153.073 23.1818C153.073 24.111 153.209 24.91 153.481 25.5788C153.753 26.2417 154.135 26.7537 154.626 27.1147C155.123 27.4698 155.706 27.6474 156.375 27.6474C156.849 27.6474 157.272 27.5586 157.645 27.381C158.023 27.1976 158.34 26.9342 158.595 26.5909C158.849 26.2476 159.024 25.8304 159.118 25.3391H162.19C162.113 26.3039 161.829 27.1591 161.338 27.9048C160.847 28.6446 160.178 29.2247 159.331 29.6449C158.485 30.0592 157.491 30.2663 156.348 30.2663ZM168.753 30.2752C167.889 30.2752 167.111 30.1213 166.418 29.8136C165.732 29.4999 165.187 29.0382 164.785 28.4286C164.388 27.819 164.19 27.0674 164.19 26.1737C164.19 25.4042 164.332 24.768 164.616 24.2649C164.9 23.7618 165.288 23.3594 165.779 23.0575C166.27 22.7557 166.824 22.5278 167.439 22.3739C168.061 22.2141 168.703 22.0987 169.366 22.0277C170.165 21.9448 170.813 21.8709 171.31 21.8058C171.807 21.7347 172.168 21.6282 172.393 21.4862C172.624 21.3382 172.739 21.1103 172.739 20.8026V20.7493C172.739 20.0805 172.541 19.5626 172.144 19.1957C171.748 18.8287 171.177 18.6452 170.431 18.6452C169.644 18.6452 169.019 18.8169 168.558 19.1602C168.102 19.5034 167.794 19.9089 167.634 20.3764L164.634 19.9503C164.87 19.1217 165.261 18.4292 165.806 17.8729C166.35 17.3106 167.016 16.8904 167.803 16.6122C168.59 16.3281 169.46 16.1861 170.413 16.1861C171.07 16.1861 171.724 16.263 172.375 16.4169C173.026 16.5708 173.621 16.8253 174.16 17.1804C174.698 17.5296 175.13 18.006 175.456 18.6097C175.787 19.2134 175.953 19.968 175.953 20.8736V30H172.863V28.1268H172.757C172.562 28.5056 172.286 28.8607 171.931 29.1921C171.582 29.5176 171.141 29.781 170.608 29.9822C170.082 30.1776 169.463 30.2752 168.753 30.2752ZM169.588 27.9137C170.233 27.9137 170.792 27.7865 171.265 27.532C171.739 27.2715 172.103 26.9283 172.357 26.5021C172.618 26.076 172.748 25.6114 172.748 25.1083V23.5014C172.647 23.5843 172.476 23.6612 172.233 23.7322C171.996 23.8033 171.73 23.8654 171.434 23.9187C171.138 23.9719 170.845 24.0193 170.555 24.0607C170.265 24.1022 170.014 24.1377 169.801 24.1673C169.321 24.2324 168.892 24.3389 168.513 24.4869C168.135 24.6348 167.836 24.842 167.617 25.1083C167.398 25.3687 167.288 25.7061 167.288 26.1204C167.288 26.7122 167.504 27.1591 167.936 27.4609C168.368 27.7628 168.919 27.9137 169.588 27.9137ZM182.398 11.8182V30H179.184V11.8182H182.398ZM191.74 30.2663C190.373 30.2663 189.192 29.9822 188.198 29.4141C187.209 28.84 186.449 28.0291 185.916 26.9815C185.383 25.928 185.117 24.6881 185.117 23.2617C185.117 21.859 185.383 20.628 185.916 19.5685C186.455 18.5032 187.206 17.6746 188.171 17.0827C189.136 16.485 190.269 16.1861 191.571 16.1861C192.412 16.1861 193.205 16.3222 193.951 16.5945C194.702 16.8608 195.365 17.2751 195.939 17.8374C196.519 18.3996 196.975 19.1158 197.306 19.9858C197.638 20.8499 197.804 21.8797 197.804 23.0753V24.0607H186.626V21.8945H194.723C194.717 21.279 194.584 20.7315 194.323 20.2521C194.063 19.7668 193.699 19.3851 193.231 19.1069C192.77 18.8287 192.231 18.6896 191.616 18.6896C190.959 18.6896 190.382 18.8494 189.884 19.169C189.387 19.4827 189 19.897 188.722 20.4119C188.449 20.9209 188.31 21.4802 188.304 22.0898V23.9808C188.304 24.7739 188.449 25.4545 188.739 26.0227C189.029 26.585 189.435 27.017 189.956 27.3189C190.476 27.6148 191.086 27.7628 191.784 27.7628C192.252 27.7628 192.675 27.6977 193.054 27.5675C193.433 27.4313 193.761 27.2331 194.039 26.9727C194.318 26.7122 194.528 26.3897 194.67 26.005L197.67 26.3423C197.481 27.1354 197.12 27.8279 196.587 28.4197C196.061 29.0057 195.386 29.4614 194.563 29.7869C193.74 30.1065 192.799 30.2663 191.74 30.2663Z"
                fill="#444444"
              />
              <path
                d="M0 20.0001C9.40332e-07 8.95433 8.95444 -9.40321e-07 20.0003 0C28.1219 7.10001e-07 35.1128 4.84074 38.2451 11.7943L11.7944 38.2447C10.6594 37.7334 9.5806 37.1193 8.57003 36.4142L24.9844 20.0001H20.0003L5.85796 34.1422C2.23861 30.5229 -4.8283e-07 25.5229 0 20.0001Z"
                fill="#444444"
              />
              <path
                d="M40.0002 20.0068L20.0068 40C31.0472 39.9963 39.9965 31.0471 40.0002 20.0068Z"
                fill="#444444"
              />
            </svg>

            {/* Hashnode badge */}
            <svg
              width="115"
              height="40"
              viewBox="0 0 185 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.9261 21.1705V30H45.6903V9.63636H49.8068V17.4219H49.9858C50.3305 16.5204 50.8873 15.8144 51.6562 15.304C52.4252 14.7869 53.3897 14.5284 54.5497 14.5284C55.6103 14.5284 56.535 14.7604 57.3239 15.2244C58.1193 15.6818 58.7358 16.3414 59.1733 17.2031C59.6174 18.0582 59.8362 19.0824 59.8295 20.2756V30H55.5938V21.0312C55.6004 20.09 55.3617 19.3575 54.8778 18.8338C54.4006 18.3101 53.7311 18.0483 52.8693 18.0483C52.2926 18.0483 51.7822 18.1709 51.3381 18.4162C50.9006 18.6615 50.5559 19.0194 50.304 19.4901C50.0587 19.9541 49.9328 20.5142 49.9261 21.1705ZM67.5181 30.2884C66.5437 30.2884 65.6753 30.1193 64.913 29.7812C64.1507 29.4366 63.5475 28.9295 63.1033 28.2599C62.6658 27.5838 62.4471 26.742 62.4471 25.7344C62.4471 24.8859 62.6029 24.1733 62.9144 23.5966C63.226 23.0199 63.6502 22.5559 64.1871 22.2045C64.7241 21.8532 65.3339 21.5881 66.0167 21.4091C66.7061 21.2301 67.4286 21.1042 68.1843 21.0312C69.0726 20.9384 69.7885 20.8523 70.332 20.7727C70.8756 20.6866 71.27 20.5606 71.5153 20.3949C71.7605 20.2292 71.8832 19.9839 71.8832 19.6591V19.5994C71.8832 18.9697 71.6843 18.4825 71.2866 18.1378C70.8955 17.7931 70.3387 17.6207 69.6161 17.6207C68.8538 17.6207 68.2473 17.7898 67.7965 18.1278C67.3458 18.4593 67.0475 18.8769 66.9016 19.3807L62.984 19.0625C63.1829 18.1345 63.574 17.3324 64.1573 16.6562C64.7406 15.9735 65.493 15.4498 66.4144 15.0852C67.3424 14.714 68.4163 14.5284 69.636 14.5284C70.4845 14.5284 71.2965 14.6278 72.0721 14.8267C72.8543 15.0256 73.547 15.3338 74.1502 15.7514C74.7601 16.169 75.2406 16.706 75.592 17.3622C75.9433 18.0118 76.119 18.7907 76.119 19.6989V30H72.1019V27.8821H71.9826C71.7373 28.3594 71.4092 28.7803 70.9982 29.1449C70.5872 29.5028 70.0934 29.7846 69.5167 29.9901C68.94 30.1889 68.2738 30.2884 67.5181 30.2884ZM68.7312 27.3651C69.3543 27.3651 69.9045 27.2424 70.3817 26.9972C70.859 26.7453 71.2335 26.4072 71.5053 25.983C71.7771 25.5587 71.913 25.0781 71.913 24.5412V22.9205C71.7804 23.0066 71.5981 23.0862 71.3661 23.1591C71.1407 23.2254 70.8855 23.2884 70.6005 23.348C70.3155 23.401 70.0304 23.4508 69.7454 23.4972C69.4603 23.5369 69.2018 23.5734 68.9698 23.6065C68.4727 23.6795 68.0385 23.7955 67.6673 23.9545C67.296 24.1136 67.0077 24.3291 66.8022 24.6009C66.5967 24.866 66.494 25.1974 66.494 25.5952C66.494 26.1719 66.7028 26.6127 67.1204 26.9176C67.5446 27.2159 68.0816 27.3651 68.7312 27.3651ZM92.1126 19.0824L88.2347 19.321C88.1684 18.9896 88.0259 18.6913 87.8072 18.4261C87.5884 18.1544 87.3001 17.9389 86.9421 17.7798C86.5908 17.6141 86.1699 17.5312 85.6793 17.5312C85.0231 17.5312 84.4696 17.6705 84.0188 17.9489C83.5681 18.2206 83.3427 18.5852 83.3427 19.0426C83.3427 19.4072 83.4885 19.7154 83.7802 19.9673C84.0719 20.2192 84.5723 20.4214 85.2816 20.5739L88.0458 21.1307C89.5307 21.4356 90.6377 21.9261 91.3668 22.6023C92.096 23.2784 92.4606 24.1667 92.4606 25.267C92.4606 26.268 92.1656 27.1463 91.5756 27.902C90.9923 28.6577 90.1902 29.2476 89.1694 29.6719C88.1552 30.0895 86.9852 30.2983 85.6594 30.2983C83.6377 30.2983 82.0269 29.8774 80.8271 29.0355C79.6339 28.187 78.9345 27.0336 78.729 25.5753L82.8952 25.3565C83.0212 25.973 83.3261 26.4437 83.81 26.7685C84.2939 27.0866 84.9137 27.2457 85.6694 27.2457C86.4118 27.2457 87.0084 27.1032 87.4592 26.8182C87.9165 26.5265 88.1486 26.152 88.1552 25.6946C88.1486 25.3101 87.9862 24.9953 87.668 24.75C87.3498 24.4981 86.8593 24.3059 86.1964 24.1733L83.5515 23.6463C82.06 23.348 80.9497 22.831 80.2205 22.0952C79.498 21.3594 79.1367 20.4214 79.1367 19.2812C79.1367 18.3002 79.4019 17.455 79.9322 16.7457C80.4691 16.0365 81.2215 15.4896 82.1893 15.1051C83.1637 14.7206 84.3039 14.5284 85.6097 14.5284C87.5387 14.5284 89.0567 14.9361 90.1637 15.7514C91.2773 16.5668 91.927 17.6771 92.1126 19.0824ZM99.3636 21.1705V30H95.1278V9.63636H99.2443V17.4219H99.4233C99.768 16.5204 100.325 15.8144 101.094 15.304C101.863 14.7869 102.827 14.5284 103.987 14.5284C105.048 14.5284 105.973 14.7604 106.761 15.2244C107.557 15.6818 108.173 16.3414 108.611 17.2031C109.055 18.0582 109.274 19.0824 109.267 20.2756V30H105.031V21.0312C105.038 20.09 104.799 19.3575 104.315 18.8338C103.838 18.3101 103.169 18.0483 102.307 18.0483C101.73 18.0483 101.22 18.1709 100.776 18.4162C100.338 18.6615 99.9934 19.0194 99.7415 19.4901C99.4962 19.9541 99.3703 20.5142 99.3636 21.1705ZM116.836 21.1705V30H112.6V14.7273H116.637V17.4219H116.816C117.154 16.5336 117.721 15.831 118.517 15.3139C119.312 14.7902 120.277 14.5284 121.41 14.5284C122.471 14.5284 123.395 14.7604 124.184 15.2244C124.973 15.6884 125.586 16.3513 126.024 17.2131C126.461 18.0682 126.68 19.089 126.68 20.2756V30H122.444V21.0312C122.451 20.0966 122.212 19.3674 121.728 18.8438C121.244 18.3134 120.578 18.0483 119.73 18.0483C119.16 18.0483 118.656 18.1709 118.218 18.4162C117.788 18.6615 117.449 19.0194 117.204 19.4901C116.966 19.9541 116.843 20.5142 116.836 21.1705ZM136.919 30.2983C135.375 30.2983 134.039 29.9702 132.912 29.3139C131.792 28.651 130.927 27.7296 130.317 26.5497C129.707 25.3632 129.402 23.9877 129.402 22.4233C129.402 20.8456 129.707 19.4669 130.317 18.2869C130.927 17.1004 131.792 16.179 132.912 15.5227C134.039 14.8598 135.375 14.5284 136.919 14.5284C138.464 14.5284 139.796 14.8598 140.916 15.5227C142.043 16.179 142.911 17.1004 143.521 18.2869C144.131 19.4669 144.436 20.8456 144.436 22.4233C144.436 23.9877 144.131 25.3632 143.521 26.5497C142.911 27.7296 142.043 28.651 140.916 29.3139C139.796 29.9702 138.464 30.2983 136.919 30.2983ZM136.939 27.017C137.642 27.017 138.228 26.8182 138.699 26.4205C139.17 26.0161 139.524 25.4659 139.763 24.7699C140.008 24.0739 140.131 23.2817 140.131 22.3935C140.131 21.5052 140.008 20.7131 139.763 20.017C139.524 19.321 139.17 18.7708 138.699 18.3665C138.228 17.9621 137.642 17.7599 136.939 17.7599C136.23 17.7599 135.633 17.9621 135.149 18.3665C134.672 18.7708 134.311 19.321 134.065 20.017C133.827 20.7131 133.707 21.5052 133.707 22.3935C133.707 23.2817 133.827 24.0739 134.065 24.7699C134.311 25.4659 134.672 26.0161 135.149 26.4205C135.633 26.8182 136.23 27.017 136.939 27.017ZM152.818 30.2486C151.658 30.2486 150.607 29.9503 149.666 29.3537C148.732 28.7505 147.989 27.8655 147.439 26.6989C146.895 25.5256 146.624 24.0871 146.624 22.3835C146.624 20.6335 146.905 19.1785 147.469 18.0185C148.032 16.8518 148.781 15.9801 149.716 15.4034C150.657 14.8201 151.688 14.5284 152.808 14.5284C153.663 14.5284 154.376 14.6742 154.946 14.9659C155.523 15.2509 155.987 15.6089 156.338 16.0398C156.696 16.464 156.968 16.8816 157.153 17.2926H157.283V9.63636H161.509V30H157.332V27.554H157.153C156.955 27.9782 156.673 28.3991 156.308 28.8168C155.95 29.2277 155.483 29.5691 154.906 29.8409C154.336 30.1127 153.64 30.2486 152.818 30.2486ZM154.161 26.8778C154.843 26.8778 155.42 26.6922 155.891 26.321C156.368 25.9432 156.732 25.4162 156.984 24.7401C157.243 24.0639 157.372 23.2718 157.372 22.3636C157.372 21.4555 157.246 20.6667 156.994 19.9972C156.742 19.3277 156.378 18.8106 155.901 18.446C155.423 18.0814 154.843 17.8991 154.161 17.8991C153.464 17.8991 152.878 18.0881 152.401 18.4659C151.923 18.8437 151.562 19.3674 151.317 20.0369C151.071 20.7064 150.949 21.482 150.949 22.3636C150.949 23.2519 151.071 24.0374 151.317 24.7202C151.569 25.3963 151.93 25.9266 152.401 26.3111C152.878 26.6889 153.464 26.8778 154.161 26.8778ZM171.951 30.2983C170.38 30.2983 169.028 29.9801 167.895 29.3438C166.768 28.7008 165.899 27.7926 165.289 26.6193C164.68 25.4394 164.375 24.044 164.375 22.4332C164.375 20.8622 164.68 19.4834 165.289 18.2969C165.899 17.1103 166.758 16.1856 167.865 15.5227C168.978 14.8598 170.284 14.5284 171.782 14.5284C172.79 14.5284 173.728 14.6908 174.596 15.0156C175.471 15.3338 176.234 15.8144 176.883 16.4574C177.539 17.1004 178.05 17.9091 178.414 18.8835C178.779 19.8513 178.961 20.9848 178.961 22.2841V23.4474H166.065V20.8224H174.974C174.974 20.2126 174.842 19.6723 174.576 19.2017C174.311 18.7311 173.943 18.3632 173.473 18.098C173.009 17.8262 172.468 17.6903 171.852 17.6903C171.209 17.6903 170.639 17.8395 170.142 18.1378C169.651 18.4295 169.267 18.8239 168.988 19.321C168.71 19.8116 168.567 20.3584 168.561 20.9616V23.4574C168.561 24.2131 168.7 24.866 168.978 25.4162C169.263 25.9664 169.664 26.3906 170.181 26.6889C170.699 26.9872 171.312 27.1364 172.021 27.1364C172.492 27.1364 172.922 27.0701 173.314 26.9375C173.705 26.8049 174.039 26.6061 174.318 26.3409C174.596 26.0758 174.808 25.7509 174.954 25.3665L178.872 25.625C178.673 26.5663 178.265 27.3883 177.649 28.0909C177.039 28.7869 176.25 29.3305 175.282 29.7216C174.321 30.1061 173.211 30.2983 171.951 30.2983Z"
                fill="#444444"
              />
              <path
                d="M32.5952 11.6944L23.3056 2.40476C21.7659 0.865019 19.6775 0 17.5 0C15.3225 0 13.2341 0.865019 11.6944 2.40476L2.40476 11.6944C0.865019 13.2341 0 15.3225 0 17.5C0 19.6775 0.865019 21.7659 2.40476 23.3056L11.6944 32.5952C13.2341 34.135 15.3225 35 17.5 35C19.6775 35 21.7659 34.135 23.3056 32.5952L32.5952 23.3056C34.135 21.7659 35 19.6775 35 17.5C35 15.3225 34.135 13.2341 32.5952 11.6944V11.6944ZM17.5 23.2648C16.743 23.2648 15.9933 23.1157 15.2939 22.826C14.5945 22.5363 13.959 22.1116 13.4237 21.5763C12.8884 21.041 12.4637 20.4055 12.174 19.7061C11.8843 19.0067 11.7352 18.257 11.7352 17.5C11.7352 16.743 11.8843 15.9933 12.174 15.2939C12.4637 14.5945 12.8884 13.959 13.4237 13.4237C13.959 12.8884 14.5945 12.4637 15.2939 12.174C15.9933 11.8843 16.743 11.7352 17.5 11.7352C19.0289 11.7352 20.4952 12.3426 21.5763 13.4237C22.6574 14.5048 23.2648 15.9711 23.2648 17.5C23.2648 19.0289 22.6574 20.4952 21.5763 21.5763C20.4952 22.6574 19.0289 23.2648 17.5 23.2648Z"
                fill="#444444"
              />
            </svg>

            {/* Daily.dev */}
            <svg
              width="125"
              height="26"
              viewBox="0 0 148 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.8161 12.9861L34.6977 7.85705L37.2555 2.72974L45.5719 11.0635C46.6315 12.1254 46.6315 13.8469 45.5719 14.9088L35.336 25.1661C34.2764 26.2279 32.5584 26.2279 31.4988 25.1661C30.4392 24.1042 30.4392 22.3826 31.4988 21.3208L39.8161 12.9861Z"
                fill="#444444"
              />
              <path
                d="M31.5005 0.796157C32.5602 -0.265683 34.2786 -0.265237 35.3382 0.796602L37.2573 2.71968L14.8678 25.156C13.8082 26.2178 12.0898 26.2174 11.0301 25.1556L9.11108 23.2325L31.5005 0.796157ZM21.9048 7.84788L18.0667 11.694L12.9483 6.56494L6.55056 12.9761L11.6689 18.1052L9.11108 23.2325L0.794716 14.8987C-0.264905 13.8369 -0.264905 12.1153 0.794716 11.0535L11.0301 0.796602C12.0898 -0.265237 13.8082 -0.265683 14.8678 0.796157L21.9048 7.84788Z"
                fill="#444444"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M57.7613 8.80387V17.5158H62.5466L63.5609 20.4197H57.7613C56.1629 20.4197 54.8672 19.1196 54.8672 17.5158V8.80387C54.8672 7.20005 56.1629 5.8999 57.7613 5.8999H62.5466V8.80387H63.5609V2.99593C63.5609 2.19402 64.2096 1.54395 65.0098 1.54395H66.4588V18.9678C66.4588 19.7697 65.8101 20.4197 65.0098 20.4197H63.5609V8.80387H57.7613ZM72.2508 20.4198C70.6524 20.4198 69.3567 19.1196 69.3567 17.5158V14.6118C69.3567 13.008 70.6524 11.7078 72.2508 11.7078H77.0361V14.6118H78.0504V8.80387H70.0802V7.35188C70.0802 6.54998 70.7281 5.8999 71.5273 5.8999H78.0504C79.6509 5.8999 80.9483 7.20005 80.9483 8.80387V18.9678C80.9483 19.7697 80.2996 20.4198 79.4994 20.4198H78.0504V14.6118H72.2508V17.5158H77.0361L78.0504 20.4198C74.4779 20.4198 72.5447 20.4198 72.2508 20.4198ZM83.8462 20.4197V7.35188C83.8462 6.54997 84.4941 5.8999 85.2932 5.8999H86.7403V18.9678C86.7403 19.7697 86.0924 20.4197 85.2932 20.4197H83.8462ZM86.7403 3.00542C86.7403 3.41033 86.6016 3.75197 86.3241 4.03035C86.0467 4.30873 85.7062 4.44791 85.3027 4.44791C84.8992 4.44791 84.5555 4.30873 84.2718 4.03035C83.9881 3.75197 83.8462 3.41033 83.8462 3.00542C83.8462 2.58785 83.9881 2.23989 84.2718 1.96151C84.5555 1.68313 84.8992 1.54395 85.3027 1.54395C85.7062 1.54395 86.0467 1.68313 86.3241 1.96151C86.6016 2.23989 86.7403 2.58785 86.7403 3.00542ZM89.642 20.4197V2.99593C89.642 2.19402 90.2899 1.54395 91.0891 1.54395H92.5361V18.9678C92.5361 19.7697 91.8882 20.4197 91.0891 20.4197H89.642ZM99.4077 20.4256L95.5005 8.13748C95.2669 7.37061 95.7071 6.55887 96.4713 6.32442L97.8478 5.8999L101.036 16.3359L103.904 6.92775C104.138 6.16088 104.937 5.72927 105.701 5.96373L107.029 6.38825L102.108 22.7202C101.736 23.9411 100.613 24.775 99.3403 24.7752L96.9478 24.7757C96.1486 24.7757 95.5006 24.1258 95.5005 23.3239L95.5007 21.8717H97.9058C98.7027 21.8717 99.4045 21.2252 99.4077 20.4256Z"
                fill="#444444"
              />
              <path
                d="M111.75 20.6088V18.557H109.646V20.6088H111.75ZM118.046 20.743C119.066 20.743 119.931 20.4873 120.639 19.976C121.347 19.4646 121.841 18.7807 122.122 17.9242V20.6088H123.863V6.41895H122.122V12.766C121.841 11.9095 121.347 11.2256 120.639 10.7142C119.931 10.2029 119.066 9.94722 118.046 9.94722C117.115 9.94722 116.285 10.1645 115.558 10.5992C114.831 11.0338 114.26 11.6602 113.846 12.4784C113.431 13.2965 113.224 14.2553 113.224 15.3547C113.224 16.4541 113.431 17.4097 113.846 18.2214C114.26 19.0332 114.831 19.6564 115.558 20.091C116.285 20.5257 117.115 20.743 118.046 20.743ZM118.543 19.2089C117.472 19.2089 116.614 18.867 115.97 18.1831C115.326 17.4991 115.003 16.5563 115.003 15.3547C115.003 14.153 115.326 13.2102 115.97 12.5263C116.614 11.8424 117.472 11.5004 118.543 11.5004C119.232 11.5004 119.848 11.657 120.39 11.9702C120.932 12.2834 121.356 12.734 121.663 13.3221C121.969 13.9101 122.122 14.5877 122.122 15.3547C122.122 16.1217 121.969 16.796 121.663 17.3777C121.356 17.9593 120.932 18.41 120.39 18.7296C119.848 19.0492 119.232 19.2089 118.543 19.2089ZM131.288 20.743C132.168 20.743 132.959 20.5832 133.66 20.2636C134.362 19.944 134.933 19.4966 135.373 18.9213C135.813 18.3461 136.097 17.6941 136.225 16.9654H134.368C134.241 17.6813 133.893 18.2534 133.326 18.6816C132.758 19.1099 132.053 19.324 131.211 19.324C130.28 19.324 129.492 19.0236 128.848 18.4228C128.204 17.8219 127.862 16.9207 127.824 15.719H136.225C136.276 15.4506 136.301 15.131 136.301 14.7603C136.301 13.8782 136.1 13.0728 135.698 12.3441C135.296 11.6155 134.716 11.0338 133.957 10.5992C133.198 10.1645 132.308 9.94722 131.288 9.94722C130.28 9.94722 129.387 10.1645 128.609 10.5992C127.83 11.0338 127.221 11.6602 126.781 12.4784C126.341 13.2965 126.121 14.2553 126.121 15.3547C126.121 16.4541 126.341 17.4097 126.781 18.2214C127.221 19.0332 127.83 19.6564 128.609 20.091C129.387 20.5257 130.28 20.743 131.288 20.743ZM134.541 14.8753H127.824C127.875 13.7248 128.226 12.8523 128.877 12.2579C129.527 11.6634 130.331 11.3662 131.288 11.3662C131.887 11.3662 132.442 11.494 132.952 11.7497C133.463 12.0054 133.864 12.3953 134.158 12.9194C134.451 13.4435 134.579 14.0955 134.541 14.8753ZM143.668 20.6088L147.782 10.0814H145.907L142.654 18.7487L139.363 10.0814H137.487L141.602 20.6088H143.668Z"
                fill="#444444"
              />
            </svg>

            {/* Producthunt Badge */}
            <svg
              width="140"
              height="40"
              viewBox="0 0 213 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
                fill="#444444"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9971 10H22.6638C26.5298 10 29.6638 13.134 29.6638 17C29.6638 20.866 26.5298 24 22.6638 24H16.9971V30H12.9971V10ZM16.9978 20.0024H22.6645C24.3212 20.0024 25.6645 18.6593 25.6645 17.0024C25.6645 15.3456 24.3212 14.0024 22.6645 14.0024H16.9978V20.0024Z"
                fill="white"
              />
              <path
                d="M52.65 29V11.5H59.85C60.95 11.5 61.9167 11.725 62.75 12.175C63.6 12.6083 64.2583 13.225 64.725 14.025C65.2083 14.825 65.45 15.775 65.45 16.875V17.225C65.45 18.3083 65.2 19.2583 64.7 20.075C64.2167 20.875 63.55 21.5 62.7 21.95C61.8667 22.3833 60.9167 22.6 59.85 22.6H55.95V29H52.65ZM55.95 19.6H59.525C60.3083 19.6 60.9417 19.3833 61.425 18.95C61.9083 18.5167 62.15 17.925 62.15 17.175V16.925C62.15 16.175 61.9083 15.5833 61.425 15.15C60.9417 14.7167 60.3083 14.5 59.525 14.5H55.95V19.6ZM67.8379 29V16.6H70.9379V18H71.3879C71.5712 17.5 71.8712 17.1333 72.2879 16.9C72.7212 16.6667 73.2212 16.55 73.7879 16.55H75.2879V19.35H73.7379C72.9379 19.35 72.2796 19.5667 71.7629 20C71.2462 20.4167 70.9879 21.0667 70.9879 21.95V29H67.8379ZM83.2105 29.35C81.9772 29.35 80.8689 29.1 79.8855 28.6C78.9022 28.1 78.1272 27.375 77.5605 26.425C76.9939 25.475 76.7105 24.3333 76.7105 23V22.6C76.7105 21.2667 76.9939 20.125 77.5605 19.175C78.1272 18.225 78.9022 17.5 79.8855 17C80.8689 16.5 81.9772 16.25 83.2105 16.25C84.4439 16.25 85.5522 16.5 86.5355 17C87.5189 17.5 88.2939 18.225 88.8605 19.175C89.4272 20.125 89.7105 21.2667 89.7105 22.6V23C89.7105 24.3333 89.4272 25.475 88.8605 26.425C88.2939 27.375 87.5189 28.1 86.5355 28.6C85.5522 29.1 84.4439 29.35 83.2105 29.35ZM83.2105 26.55C84.1772 26.55 84.9772 26.2417 85.6105 25.625C86.2439 24.9917 86.5605 24.0917 86.5605 22.925V22.675C86.5605 21.5083 86.2439 20.6167 85.6105 20C84.9939 19.3667 84.1939 19.05 83.2105 19.05C82.2439 19.05 81.4439 19.3667 80.8105 20C80.1772 20.6167 79.8605 21.5083 79.8605 22.675V22.925C79.8605 24.0917 80.1772 24.9917 80.8105 25.625C81.4439 26.2417 82.2439 26.55 83.2105 26.55ZM97.6182 29.35C96.6348 29.35 95.7098 29.1083 94.8432 28.625C93.9932 28.125 93.3098 27.4 92.7932 26.45C92.2765 25.5 92.0182 24.35 92.0182 23V22.6C92.0182 21.25 92.2765 20.1 92.7932 19.15C93.3098 18.2 93.9932 17.4833 94.8432 17C95.6932 16.5 96.6182 16.25 97.6182 16.25C98.3682 16.25 98.9932 16.3417 99.4932 16.525C100.01 16.6917 100.426 16.9083 100.743 17.175C101.06 17.4417 101.301 17.725 101.468 18.025H101.918V11.5H105.068V29H101.968V27.5H101.518C101.235 27.9667 100.793 28.3917 100.193 28.775C99.6098 29.1583 98.7515 29.35 97.6182 29.35ZM98.5682 26.6C99.5348 26.6 100.343 26.2917 100.993 25.675C101.643 25.0417 101.968 24.125 101.968 22.925V22.675C101.968 21.475 101.643 20.5667 100.993 19.95C100.36 19.3167 99.5515 19 98.5682 19C97.6015 19 96.7932 19.3167 96.1432 19.95C95.4932 20.5667 95.1682 21.475 95.1682 22.675V22.925C95.1682 24.125 95.4932 25.0417 96.1432 25.675C96.7932 26.2917 97.6015 26.6 98.5682 26.6ZM113.286 29.2C112.319 29.2 111.469 28.9833 110.736 28.55C110.019 28.1 109.461 27.4833 109.061 26.7C108.661 25.9167 108.461 25.0167 108.461 24V16.6H111.611V23.75C111.611 24.6833 111.836 25.3833 112.286 25.85C112.752 26.3167 113.411 26.55 114.261 26.55C115.227 26.55 115.977 26.2333 116.511 25.6C117.044 24.95 117.311 24.05 117.311 22.9V16.6H120.461V29H117.361V27.375H116.911C116.711 27.7917 116.336 28.2 115.786 28.6C115.236 29 114.402 29.2 113.286 29.2ZM129.791 29.35C128.591 29.35 127.499 29.1 126.516 28.6C125.549 28.1 124.782 27.375 124.216 26.425C123.649 25.475 123.366 24.325 123.366 22.975V22.625C123.366 21.275 123.649 20.125 124.216 19.175C124.782 18.225 125.549 17.5 126.516 17C127.499 16.5 128.591 16.25 129.791 16.25C130.974 16.25 131.991 16.4583 132.841 16.875C133.691 17.2917 134.374 17.8667 134.891 18.6C135.424 19.3167 135.774 20.1333 135.941 21.05L132.891 21.7C132.824 21.2 132.674 20.75 132.441 20.35C132.207 19.95 131.874 19.6333 131.441 19.4C131.024 19.1667 130.499 19.05 129.866 19.05C129.232 19.05 128.657 19.1917 128.141 19.475C127.641 19.7417 127.241 20.15 126.941 20.7C126.657 21.2333 126.516 21.8917 126.516 22.675V22.925C126.516 23.7083 126.657 24.375 126.941 24.925C127.241 25.4583 127.641 25.8667 128.141 26.15C128.657 26.4167 129.232 26.55 129.866 26.55C130.816 26.55 131.532 26.3083 132.016 25.825C132.516 25.325 132.832 24.675 132.966 23.875L136.016 24.6C135.799 25.4833 135.424 26.2917 134.891 27.025C134.374 27.7417 133.691 28.3083 132.841 28.725C131.991 29.1417 130.974 29.35 129.791 29.35ZM142.949 29C142.133 29 141.466 28.75 140.949 28.25C140.449 27.7333 140.199 27.05 140.199 26.2V19.2H137.099V16.6H140.199V12.75H143.349V16.6H146.749V19.2H143.349V25.65C143.349 26.15 143.583 26.4 144.049 26.4H146.449V29H142.949ZM155.848 29V11.5H159.148V18.725H165.648V11.5H168.948V29H165.648V21.725H159.148V29H155.848ZM177.079 29.2C176.113 29.2 175.263 28.9833 174.529 28.55C173.813 28.1 173.254 27.4833 172.854 26.7C172.454 25.9167 172.254 25.0167 172.254 24V16.6H175.404V23.75C175.404 24.6833 175.629 25.3833 176.079 25.85C176.546 26.3167 177.204 26.55 178.054 26.55C179.021 26.55 179.771 26.2333 180.304 25.6C180.838 24.95 181.104 24.05 181.104 22.9V16.6H184.254V29H181.154V27.375H180.704C180.504 27.7917 180.129 28.2 179.579 28.6C179.029 29 178.196 29.2 177.079 29.2ZM187.76 29V16.6H190.86V18.225H191.31C191.51 17.7917 191.885 17.3833 192.435 17C192.985 16.6 193.818 16.4 194.935 16.4C195.901 16.4 196.743 16.625 197.46 17.075C198.193 17.5083 198.76 18.1167 199.16 18.9C199.56 19.6667 199.76 20.5667 199.76 21.6V29H196.61V21.85C196.61 20.9167 196.376 20.2167 195.91 19.75C195.46 19.2833 194.81 19.05 193.96 19.05C192.993 19.05 192.243 19.375 191.71 20.025C191.176 20.6583 190.91 21.55 190.91 22.7V29H187.76ZM207.573 29C206.757 29 206.09 28.75 205.573 28.25C205.073 27.7333 204.823 27.05 204.823 26.2V19.2H201.723V16.6H204.823V12.75H207.973V16.6H211.373V19.2H207.973V25.65C207.973 26.15 208.207 26.4 208.673 26.4H211.073V29H207.573Z"
                fill="#444444"
              />
            </svg>
          </figure>
        </div>

        <section className={styles.aboutSection}>
          <div className={styles.aboutImage}>
            <LazyLoadImage
              srcset="https://res.cloudinary.com/victoreke/image/upload/c_scale,w_480/v1657578137/Spekni/about.png 480w,
             https://res.cloudinary.com/victoreke/image/upload/c_scale,w_800/v1657578137/Spekni/about.png 800w"
              sizes="(max-width: 800px) 480px,
            800px"
              src="https://res.cloudinary.com/victoreke/image/upload/v1657578137/Spekni/about.png"
              //   width={750}
              //   height={410}
              effect="blur"
              alt="Group Image"
              placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/e_blur:1563/v1657567734/Spekni/about-placeholder.png"
            />
            <svg
              viewBox="0 0 150 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M83.9572 123.883C110.176 122.419 147.886 118.776 148.648 67.4251L149.581 2.81555L91.1353 1.97131L90.1368 71.0988L109.544 71.3791C110.506 89.8552 95.2547 94.4021 78.6912 97.8223L83.9572 123.883V123.883ZM5.65309 122.752C31.8716 121.288 69.5816 117.645 70.3439 66.294L71.2772 1.68446L12.8309 0.840218L11.8324 69.9677L31.2393 70.2481C32.2023 88.7241 16.9503 93.271 0.386775 96.6912L5.65309 122.752V122.752Z"
                fill="#3A52EE"
              />
            </svg>
          </div>
          <blockquote className={styles.aboutText}>
            <span className={styles.highlight}>M</span>ost developers do not
            seek credits or any form of validation for their work, tirelessly
            putting in a lot of effort to deliver great projects for users,
            clients and other devs. We know not all heroes wear capes, but every
            now and then, a show of appreciation for the tireless contribution
            they make can greatly increase their opportunities This is our
            mission with Spekni. —Providing a platform where developers can be
            endorsed and given recommendations by clients, teachers,
            maintaniers, and even students to preach about their good works
          </blockquote>
        </section>
      </main>

      <Testimonials />
      <Jumbotron />
      <Footer />
    </div>
  );
}
