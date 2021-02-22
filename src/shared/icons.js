export function Logo() {
  return (
    <svg
      viewBox="0 0 25 25"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      {...this.props}
    >
      <title>Algolia logo</title>
      <g fill="none">
        <path
          d="M3.181 0h17.796a3.186 3.186 0 0 1 3.181 3.188v17.84a3.186 3.186 0 0 1-3.18 3.187H3.18A3.186 3.186 0 0 1 0 21.027V3.18A3.18 3.18 0 0 1 3.181 0z"
          fill="#5468FF"
        ></path>
        <path
          d="M12.16 6.593c-3.766 0-6.823 3.062-6.823 6.845 0 3.782 3.057 6.837 6.824 6.837s6.824-3.062 6.824-6.845a6.823 6.823 0 0 0-6.824-6.837zm0 11.663a4.816 4.816 0 0 1-4.807-4.818A4.816 4.816 0 0 1 12.16 8.62a4.816 4.816 0 0 1 4.808 4.818 4.811 4.811 0 0 1-4.808 4.818zm0-8.652v3.591c0 .103.11.177.206.125l3.181-1.652c.073-.037.095-.125.059-.199a3.957 3.957 0 0 0-3.298-2.005c-.074 0-.147.06-.147.14zM7.706 6.967l-.418-.418a1.043 1.043 0 0 0-1.48 0l-.5.499a1.048 1.048 0 0 0 0 1.484l.411.41c.066.067.162.052.22-.014a8.08 8.08 0 0 1 .8-.94c.3-.301.607-.565.945-.808.073-.044.08-.147.022-.213zm6.691-1.087v-.83c0-.58-.469-1.05-1.048-1.05h-2.44c-.58 0-1.049.47-1.049 1.05v.852c0 .096.088.162.184.14a7.624 7.624 0 0 1 2.125-.301c.697 0 1.386.095 2.053.279a.142.142 0 0 0 .175-.14z"
          fill="#FFF"
        ></path>
      </g>
    </svg>
  );
}

export function Icon() {
  switch (this.props.icon) {
    case "cross":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...this.props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
            fill="currentColor"
          />
        </svg>
      );
    case "send":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...this.props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.6528 1.3472C20.9213 1.61568 20.9213 2.05098 20.6528 2.31947L10.5695 12.4028C10.301 12.6713 9.86569 12.6713 9.59721 12.4028C9.32872 12.1343 9.32872 11.699 9.59721 11.4305L19.6805 1.3472C19.949 1.07871 20.3843 1.07871 20.6528 1.3472Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.6528 1.3472C20.8396 1.53395 20.9028 1.81117 20.8156 2.06045L14.3989 20.3938C14.3058 20.6598 14.0597 20.8421 13.778 20.8536C13.4964 20.8651 13.2363 20.7035 13.1218 20.4459L9.56249 12.4375L1.55413 8.87824C1.29653 8.76376 1.13493 8.50363 1.14642 8.22197C1.15791 7.94032 1.34017 7.69422 1.60623 7.6011L19.9396 1.18443C20.1888 1.09718 20.4661 1.16045 20.6528 1.3472ZM3.69721 8.32604L10.3626 11.2884C10.5181 11.3575 10.6425 11.4819 10.7116 11.6374L13.674 18.3028L19.0461 2.95394L3.69721 8.32604Z"
            fill="currentColor"
          />
        </svg>
      );
    case "ask":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...this.props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.96967 5.96967C9.26256 5.67678 9.73744 5.67678 10.0303 5.96967L16.0303 11.9697C16.3232 12.2626 16.3232 12.7374 16.0303 13.0303L10.0303 19.0303C9.73744 19.3232 9.26256 19.3232 8.96967 19.0303C8.67678 18.7374 8.67678 18.2626 8.96967 17.9697L14.4393 12.5L8.96967 7.03033C8.67678 6.73744 8.67678 6.26256 8.96967 5.96967Z"
            fill="currentColor"
          />
        </svg>
      );
    case "answers":
      return (
        <svg
          viewBox="0 0 67 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...this.props}
        >
          <path
            d="M4.608 8.794C5.004 8.794 5.352 8.788 5.652 8.776C5.964 8.752 6.222 8.716 6.426 8.668V5.878C6.306 5.818 6.108 5.77 5.832 5.734C5.568 5.686 5.244 5.662 4.86 5.662C4.608 5.662 4.338 5.68 4.05 5.716C3.774 5.752 3.516 5.83 3.276 5.95C3.048 6.058 2.856 6.214 2.7 6.418C2.544 6.61 2.466 6.868 2.466 7.192C2.466 7.792 2.658 8.212 3.042 8.452C3.426 8.68 3.948 8.794 4.608 8.794ZM4.464 0.405999C5.136 0.405999 5.7 0.495999 6.156 0.676C6.624 0.844 6.996 1.09 7.272 1.414C7.56 1.726 7.764 2.104 7.884 2.548C8.004 2.98 8.064 3.46 8.064 3.988V9.838C7.92 9.862 7.716 9.898 7.452 9.946C7.2 9.982 6.912 10.018 6.588 10.054C6.264 10.09 5.91 10.12 5.526 10.144C5.154 10.18 4.782 10.198 4.41 10.198C3.882 10.198 3.396 10.144 2.952 10.036C2.508 9.928 2.124 9.76 1.8 9.532C1.476 9.292 1.224 8.98 1.044 8.596C0.864 8.212 0.774 7.75 0.774 7.21C0.774 6.694 0.876 6.25 1.08 5.878C1.296 5.506 1.584 5.206 1.944 4.978C2.304 4.75 2.724 4.582 3.204 4.474C3.684 4.366 4.188 4.312 4.716 4.312C4.884 4.312 5.058 4.324 5.238 4.348C5.418 4.36 5.586 4.384 5.742 4.42C5.91 4.444 6.054 4.468 6.174 4.492C6.294 4.516 6.378 4.534 6.426 4.546V4.078C6.426 3.802 6.396 3.532 6.336 3.268C6.276 2.992 6.168 2.752 6.012 2.548C5.856 2.332 5.64 2.164 5.364 2.044C5.1 1.912 4.752 1.846 4.32 1.846C3.768 1.846 3.282 1.888 2.862 1.972C2.454 2.044 2.148 2.122 1.944 2.206L1.746 0.819999C1.962 0.724 2.322 0.634 2.826 0.549999C3.33 0.453999 3.876 0.405999 4.464 0.405999ZM10.8443 0.91C11.2283 0.814 11.7383 0.712 12.3743 0.604C13.0103 0.496 13.7423 0.442 14.5703 0.442C15.3143 0.442 15.9323 0.55 16.4243 0.766C16.9163 0.97 17.3063 1.264 17.5943 1.648C17.8943 2.02 18.1043 2.47 18.2243 2.998C18.3443 3.526 18.4043 4.108 18.4043 4.744V10H16.7303V5.104C16.7303 4.528 16.6883 4.036 16.6043 3.628C16.5323 3.22 16.4063 2.89 16.2263 2.638C16.0463 2.386 15.8063 2.206 15.5063 2.098C15.2063 1.978 14.8343 1.918 14.3903 1.918C14.2103 1.918 14.0243 1.924 13.8323 1.936C13.6403 1.948 13.4543 1.966 13.2743 1.99C13.1063 2.002 12.9503 2.02 12.8063 2.044C12.6743 2.068 12.5783 2.086 12.5183 2.098V10H10.8443V0.91ZM23.3582 8.794C24.0422 8.794 24.5462 8.704 24.8702 8.524C25.2062 8.344 25.3742 8.056 25.3742 7.66C25.3742 7.252 25.2122 6.928 24.8882 6.688C24.5642 6.448 24.0302 6.178 23.2862 5.878C22.9262 5.734 22.5782 5.59 22.2422 5.446C21.9182 5.29 21.6362 5.11 21.3962 4.906C21.1562 4.702 20.9642 4.456 20.8202 4.168C20.6762 3.88 20.6042 3.526 20.6042 3.106C20.6042 2.278 20.9102 1.624 21.5222 1.144C22.1342 0.651999 22.9682 0.405999 24.0242 0.405999C24.2882 0.405999 24.5522 0.423999 24.8162 0.459999C25.0802 0.484 25.3262 0.52 25.5542 0.567999C25.7822 0.603999 25.9802 0.646 26.1482 0.694C26.3282 0.742 26.4662 0.784 26.5622 0.819999L26.2562 2.26C26.0762 2.164 25.7942 2.068 25.4102 1.972C25.0262 1.864 24.5642 1.81 24.0242 1.81C23.5562 1.81 23.1482 1.906 22.8002 2.098C22.4522 2.278 22.2782 2.566 22.2782 2.962C22.2782 3.166 22.3142 3.346 22.3862 3.502C22.4702 3.658 22.5902 3.802 22.7462 3.934C22.9142 4.054 23.1182 4.168 23.3582 4.276C23.5982 4.384 23.8862 4.498 24.2222 4.618C24.6662 4.786 25.0622 4.954 25.4102 5.122C25.7582 5.278 26.0522 5.464 26.2922 5.68C26.5442 5.896 26.7362 6.16 26.8682 6.472C27.0002 6.772 27.0662 7.144 27.0662 7.588C27.0662 8.452 26.7422 9.106 26.0942 9.55C25.4582 9.994 24.5462 10.216 23.3582 10.216C22.5302 10.216 21.8822 10.144 21.4142 10C20.9462 9.868 20.6282 9.766 20.4602 9.694L20.7662 8.254C20.9582 8.326 21.2642 8.434 21.6842 8.578C22.1042 8.722 22.6622 8.794 23.3582 8.794ZM36.8634 10C36.5274 9.136 36.1674 8.152 35.7834 7.048C35.4114 5.932 35.0694 4.774 34.7574 3.574C34.4454 4.774 34.1034 5.932 33.7314 7.048C33.3594 8.152 33.0054 9.136 32.6694 10H31.2114C30.6594 8.764 30.1194 7.354 29.5914 5.77C29.0634 4.186 28.5654 2.476 28.0974 0.639999H29.8974C30.0174 1.204 30.1614 1.816 30.3294 2.476C30.4974 3.136 30.6714 3.796 30.8514 4.456C31.0434 5.116 31.2414 5.752 31.4454 6.364C31.6494 6.976 31.8414 7.51 32.0214 7.966C32.2254 7.402 32.4234 6.808 32.6154 6.184C32.8194 5.548 33.0114 4.912 33.1914 4.276C33.3714 3.628 33.5394 2.998 33.6954 2.386C33.8634 1.762 34.0074 1.18 34.1274 0.639999H35.5134C35.6214 1.18 35.7534 1.762 35.9094 2.386C36.0654 2.998 36.2334 3.628 36.4134 4.276C36.5934 4.912 36.7794 5.548 36.9714 6.184C37.1754 6.808 37.3794 7.402 37.5834 7.966C37.7634 7.51 37.9494 6.976 38.1414 6.364C38.3454 5.752 38.5434 5.116 38.7354 4.456C38.9274 3.796 39.1074 3.136 39.2754 2.476C39.4434 1.816 39.5874 1.204 39.7074 0.639999H41.4354C40.9674 2.476 40.4694 4.186 39.9414 5.77C39.4134 7.354 38.8734 8.764 38.3214 10H36.8634ZM42.6836 5.338C42.6836 4.51 42.8036 3.79 43.0436 3.178C43.2836 2.554 43.6016 2.038 43.9976 1.63C44.3936 1.222 44.8496 0.916 45.3656 0.711999C45.8816 0.507999 46.4096 0.405999 46.9496 0.405999C48.2096 0.405999 49.1756 0.801999 49.8476 1.594C50.5196 2.374 50.8556 3.568 50.8556 5.176C50.8556 5.248 50.8556 5.344 50.8556 5.464C50.8556 5.572 50.8496 5.674 50.8376 5.77H44.4296C44.5016 6.742 44.7836 7.48 45.2756 7.984C45.7676 8.488 46.5356 8.74 47.5796 8.74C48.1676 8.74 48.6596 8.692 49.0556 8.596C49.4636 8.488 49.7696 8.386 49.9736 8.29L50.2076 9.694C50.0036 9.802 49.6436 9.916 49.1276 10.036C48.6236 10.156 48.0476 10.216 47.3996 10.216C46.5836 10.216 45.8756 10.096 45.2756 9.856C44.6876 9.604 44.2016 9.262 43.8176 8.83C43.4336 8.398 43.1456 7.888 42.9536 7.3C42.7736 6.7 42.6836 6.046 42.6836 5.338ZM49.1096 4.42C49.1216 3.664 48.9296 3.046 48.5336 2.566C48.1496 2.074 47.6156 1.828 46.9316 1.828C46.5476 1.828 46.2056 1.906 45.9056 2.062C45.6176 2.206 45.3716 2.398 45.1676 2.638C44.9636 2.878 44.8016 3.154 44.6816 3.466C44.5736 3.778 44.5016 4.096 44.4656 4.42H49.1096ZM56.7163 0.442C56.8603 0.442 57.0223 0.454 57.2023 0.477999C57.3943 0.49 57.5803 0.514 57.7603 0.549999C57.9403 0.574 58.1023 0.604 58.2463 0.639999C58.4023 0.664 58.5163 0.688 58.5883 0.711999L58.3003 2.17C58.1683 2.122 57.9463 2.068 57.6343 2.008C57.3343 1.936 56.9443 1.9 56.4643 1.9C56.1523 1.9 55.8403 1.936 55.5283 2.008C55.2283 2.068 55.0303 2.11 54.9343 2.134V10H53.2603V1.036C53.6563 0.891999 54.1483 0.759999 54.7363 0.639999C55.3243 0.508 55.9843 0.442 56.7163 0.442ZM62.3817 8.794C63.0657 8.794 63.5697 8.704 63.8937 8.524C64.2297 8.344 64.3977 8.056 64.3977 7.66C64.3977 7.252 64.2357 6.928 63.9117 6.688C63.5877 6.448 63.0537 6.178 62.3097 5.878C61.9497 5.734 61.6017 5.59 61.2657 5.446C60.9417 5.29 60.6597 5.11 60.4197 4.906C60.1797 4.702 59.9877 4.456 59.8437 4.168C59.6997 3.88 59.6277 3.526 59.6277 3.106C59.6277 2.278 59.9337 1.624 60.5457 1.144C61.1577 0.651999 61.9917 0.405999 63.0477 0.405999C63.3117 0.405999 63.5757 0.423999 63.8397 0.459999C64.1037 0.484 64.3497 0.52 64.5777 0.567999C64.8057 0.603999 65.0037 0.646 65.1717 0.694C65.3517 0.742 65.4897 0.784 65.5857 0.819999L65.2797 2.26C65.0997 2.164 64.8177 2.068 64.4337 1.972C64.0497 1.864 63.5877 1.81 63.0477 1.81C62.5797 1.81 62.1717 1.906 61.8237 2.098C61.4757 2.278 61.3017 2.566 61.3017 2.962C61.3017 3.166 61.3377 3.346 61.4097 3.502C61.4937 3.658 61.6137 3.802 61.7697 3.934C61.9377 4.054 62.1417 4.168 62.3817 4.276C62.6217 4.384 62.9097 4.498 63.2457 4.618C63.6897 4.786 64.0857 4.954 64.4337 5.122C64.7817 5.278 65.0757 5.464 65.3157 5.68C65.5677 5.896 65.7597 6.16 65.8917 6.472C66.0237 6.772 66.0897 7.144 66.0897 7.588C66.0897 8.452 65.7657 9.106 65.1177 9.55C64.4817 9.994 63.5697 10.216 62.3817 10.216C61.5537 10.216 60.9057 10.144 60.4377 10C59.9697 9.868 59.6517 9.766 59.4837 9.694L59.7897 8.254C59.9817 8.326 60.2877 8.434 60.7077 8.578C61.1277 8.722 61.6857 8.794 62.3817 8.794Z"
            fill="currentColor"
          />
        </svg>
      );
    case "algolia":
      return (
        <svg
          width="89"
          height="23"
          viewBox="0 0 89 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...this.props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.094 0.946747H2.89525C1.2937 0.946747 0 2.24136 0 3.83466V20.0416C0 21.6423 1.30103 22.936 2.89525 22.936H19.094C20.6946 22.936 21.9892 21.6359 21.9892 20.0416V3.84199C21.9892 2.24136 20.6882 0.946747 19.094 0.946747ZM13.3741 4.99282V5.74686C13.3741 5.8339 13.2944 5.89346 13.2137 5.8733C12.6063 5.70655 11.9777 5.62043 11.3428 5.62043C10.6875 5.61977 10.0355 5.71169 9.40593 5.89346C9.31889 5.91362 9.23918 5.85314 9.23918 5.76702V4.99282C9.23937 4.73976 9.34005 4.49714 9.51907 4.31828C9.6981 4.13943 9.94081 4.03899 10.1939 4.03904H12.4194C12.6724 4.03899 12.9151 4.13943 13.0942 4.31828C13.2732 4.49714 13.3739 4.73976 13.3741 4.99282ZM6.89458 6.3534L7.27481 6.73363C7.32795 6.7941 7.32135 6.88756 7.25465 6.92787C6.94801 7.14823 6.65996 7.39338 6.39341 7.66084C6.12908 7.92639 5.88556 8.21187 5.66501 8.51476C5.61187 8.57431 5.52483 8.58806 5.46436 8.5285L5.09055 8.15468C5.00171 8.06638 4.9312 7.96139 4.88309 7.84574C4.83498 7.73009 4.81021 7.60606 4.81021 7.48081C4.81021 7.35555 4.83498 7.23152 4.88309 7.11587C4.9312 7.00022 5.00171 6.89523 5.09055 6.80693L5.54499 6.3534C5.63358 6.26475 5.73878 6.19442 5.85456 6.14643C5.97035 6.09845 6.09445 6.07375 6.21978 6.07375C6.34511 6.07375 6.46922 6.09845 6.585 6.14643C6.70079 6.19442 6.80598 6.26475 6.89458 6.3534ZM11.3362 12.3894V9.12771C11.3362 9.05441 11.4031 9.00127 11.47 9.00127C12.7591 9.048 13.8751 9.76814 14.4761 10.8227C14.5091 10.8887 14.4889 10.9693 14.4229 11.0023L11.5231 12.5031C11.437 12.5498 11.3362 12.4829 11.3362 12.3894ZM6.95395 12.6093C6.95395 15.0236 8.91832 16.9852 11.3362 16.9852C13.7616 16.9852 15.7187 15.0236 15.7187 12.6093C15.7187 10.1951 13.755 8.2344 11.3362 8.2344C8.91832 8.2344 6.95395 10.1951 6.95395 12.6093ZM5.11693 12.6093C5.11693 9.17535 7.90223 6.39371 11.3362 6.39371C14.7766 6.39371 17.5555 9.16802 17.5555 12.6029C17.5555 16.0378 14.7702 18.8195 11.3362 18.8195C7.90223 18.8195 5.11693 16.0442 5.11693 12.6093Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.8957 18.3879C39.6142 18.408 39.6142 14.9328 39.6142 14.3794L39.6069 1.36088L42.2189 0.946747V13.8856C42.2189 14.1998 42.2189 16.1871 43.8955 16.1935V18.3879H43.8957ZM33.3079 16.2604C34.1094 16.2604 34.7042 16.2137 35.1184 16.134V13.4797C34.9116 13.4247 34.7017 13.3822 34.4898 13.3523C34.1892 13.3077 33.8856 13.2854 33.5817 13.2854C33.294 13.2854 32.9999 13.3056 32.7067 13.3523C32.4126 13.3926 32.145 13.4724 31.9114 13.586C31.6778 13.6996 31.4835 13.8599 31.3434 14.0661C31.1968 14.2731 31.1299 14.3932 31.1299 14.7065C31.1299 15.3195 31.3434 15.674 31.7309 15.9067C32.1185 16.1404 32.6462 16.2604 33.3079 16.2604ZM33.0807 6.78947C33.9419 6.78947 34.6701 6.89666 35.2584 7.11014C35.8458 7.32362 36.3204 7.62323 36.6675 8.00346C37.0221 8.3901 37.2621 8.9041 37.4089 9.45108C37.5628 9.99806 37.6361 10.5982 37.6361 11.2579V17.9682C37.2357 18.0544 36.6272 18.1542 35.8129 18.2743C34.9982 18.3943 34.083 18.4548 33.0668 18.4548C32.3924 18.4548 31.7712 18.3879 31.2169 18.2614C30.6553 18.135 30.1816 17.9279 29.7803 17.6411C29.3863 17.3544 29.0794 16.987 28.8522 16.5344C28.6314 16.0799 28.5177 15.4404 28.5177 14.7734C28.5177 14.1329 28.6442 13.7262 28.8925 13.2854C29.1454 12.8457 29.4862 12.4856 29.9141 12.2052C30.3483 11.9249 30.8422 11.7251 31.4102 11.6051C31.9783 11.4851 32.5729 11.4246 33.1868 11.4246C33.4745 11.4246 33.775 11.4448 34.0957 11.4778C34.4099 11.5117 34.7508 11.5721 35.1118 11.6582V11.2313C35.1118 10.9317 35.0779 10.6449 35.0046 10.3783C34.9341 10.1155 34.8061 9.87175 34.6298 9.66456C34.4493 9.45749 34.2166 9.29715 33.9225 9.18446C33.6284 9.07085 33.2537 8.98381 32.8066 8.98381C32.2055 8.98381 31.6576 9.0571 31.1565 9.14415C30.6553 9.23027 30.2412 9.33105 29.9269 9.44375L29.6135 7.30346C29.9406 7.18985 30.4281 7.07624 31.0566 6.96355C31.6842 6.84261 32.3594 6.78947 33.0805 6.78947H33.0807ZM84.6656 16.1871C85.4673 16.1871 86.061 16.1404 86.4751 16.0598V13.4064C86.3285 13.3661 86.1214 13.3193 85.8475 13.279C85.5466 13.2345 85.2428 13.2121 84.9386 13.2122C84.6518 13.2122 84.3577 13.2323 84.0636 13.279C83.7704 13.3193 83.5029 13.3991 83.2693 13.5127C83.0347 13.6263 82.8414 13.7866 82.7012 13.9928C82.5537 14.1998 82.4877 14.3199 82.4877 14.6332C82.4877 15.2462 82.7012 15.6007 83.0888 15.8335C83.4827 16.0735 84.0041 16.1871 84.6656 16.1871ZM84.4448 6.7235C85.306 6.7235 86.0342 6.82978 86.6224 7.04326C87.2097 7.25674 87.6843 7.55634 88.0316 7.93657C88.3788 8.3168 88.6262 8.83721 88.7728 9.3842C88.9267 9.93118 89 10.5313 89 11.1919V17.9014C88.5996 17.9875 87.9913 18.0873 87.1767 18.2083C86.3622 18.3283 85.4469 18.3879 84.4308 18.3879C83.7565 18.3879 83.1353 18.321 82.5812 18.1945C82.0195 18.0681 81.5459 17.861 81.1445 17.5743C80.7506 17.2875 80.4436 16.9201 80.2164 16.4675C79.9956 16.0139 79.882 15.3735 79.882 14.7065C79.882 14.0661 80.0093 13.6593 80.2567 13.2186C80.5096 12.7788 80.8504 12.4187 81.2783 12.1383C81.7126 11.8589 82.2064 11.6582 82.7745 11.5382C83.3425 11.4182 83.9372 11.3586 84.552 11.3586C84.8387 11.3586 85.1393 11.3788 85.4599 11.4118C85.7806 11.4448 86.115 11.5052 86.4751 11.5923V11.1653C86.4751 10.8648 86.4421 10.578 86.3688 10.3114C86.2986 10.0486 86.1705 9.80474 85.9941 9.59767C85.8136 9.39061 85.5809 9.23027 85.2868 9.11758C84.9925 9.00397 84.6179 8.91784 84.1708 8.91784C83.5698 8.91784 83.0219 8.99114 82.5207 9.07726C82.0195 9.1643 81.6054 9.26417 81.2911 9.37778L80.9778 7.23658C81.3049 7.12297 81.7923 7.01027 82.4208 6.89666C83.0484 6.78305 83.7228 6.7235 84.4448 6.7235ZM76.6019 5.48294C77.4767 5.48294 78.1925 4.77562 78.1925 3.90155C78.1925 3.02839 77.4841 2.32107 76.6019 2.32107C75.7205 2.32107 75.0123 3.02839 75.0123 3.90155C75.0123 4.77562 75.7269 5.48294 76.6019 5.48294ZM77.9176 18.3879H75.2925V7.12938L77.9174 6.71617V18.3879H77.9176ZM73.3153 18.3879C69.0338 18.408 69.0338 14.9328 69.0338 14.3794L69.0265 1.36088L71.6386 0.946747V13.8856C71.6386 14.1998 71.6386 16.1871 73.3153 16.1935V18.3879ZM64.8247 12.6258C64.8247 11.4979 64.5773 10.5579 64.0965 9.90461C63.6155 9.24401 62.9411 8.91784 62.079 8.91784C61.2177 8.91784 60.5423 9.24401 60.0622 9.90461C59.5812 10.5643 59.3468 11.4979 59.3468 12.6258C59.3468 13.7665 59.5878 14.5324 60.0688 15.193C60.5498 15.86 61.2241 16.1871 62.0863 16.1871C62.9476 16.1871 63.6228 15.8536 64.1038 15.193C64.5846 14.526 64.8247 13.7665 64.8247 12.6258ZM67.4964 12.6194C67.4964 13.4998 67.3699 14.1659 67.109 14.8934C66.8488 15.62 66.4814 16.2403 66.0077 16.7542C65.5331 17.2673 64.9651 17.6677 64.297 17.9481C63.6292 18.2275 62.6001 18.3879 62.0861 18.3879C61.5712 18.3815 60.5496 18.2349 59.8881 17.9481C59.2266 17.6613 58.6586 17.2673 58.1849 16.7542C57.7103 16.2403 57.3431 15.62 57.0755 14.8934C56.8087 14.1659 56.6751 13.4998 56.6751 12.6194C56.6751 11.7389 56.795 10.8914 57.0625 10.1712C57.33 9.45108 57.7039 8.83721 58.1849 8.32413C58.6659 7.81013 59.2404 7.41616 59.8945 7.13671C60.556 6.85635 61.2844 6.7235 62.0724 6.7235C62.8612 6.7235 63.5887 6.86276 64.2566 7.13671C64.9255 7.41616 65.5001 7.81013 65.9674 8.32413C66.4409 8.83721 66.8085 9.45108 67.076 10.1712C67.3564 10.8914 67.4966 11.7389 67.4966 12.6194H67.4964ZM47.8373 12.6194C47.8373 13.7124 48.0773 14.9264 48.5584 15.4331C49.0394 15.9406 49.6604 16.1935 50.4229 16.1935C50.837 16.1935 51.231 16.134 51.5982 16.0204C51.9656 15.9067 52.259 15.773 52.4935 15.6136V9.13773C52.3066 9.09742 51.5249 8.93708 50.7692 8.91784C49.8209 8.89035 49.0998 9.27791 48.5923 9.89728C48.0909 10.5185 47.8373 11.6051 47.8373 12.6194ZM55.0983 17.7676C55.0983 19.5487 54.6439 20.8488 53.7284 21.6762C52.814 22.5026 51.4177 22.9167 49.5339 22.9167C48.8459 22.9167 47.4166 22.783 46.274 22.5301L46.6946 20.4622C47.6502 20.6619 48.9127 20.716 49.5743 20.716C50.6224 20.716 51.371 20.5025 51.8181 20.0755C52.2661 19.6486 52.486 19.0155 52.486 18.1744V17.7474C52.2258 17.8739 51.885 18.0012 51.4644 18.135C51.0439 18.2614 50.5564 18.3283 50.0076 18.3283C49.2866 18.3283 48.6315 18.2147 48.0378 17.9875C47.4431 17.7612 46.9282 17.4277 46.5077 16.987C46.0871 16.5472 45.7527 15.9938 45.5191 15.3332C45.2854 14.6726 45.1645 13.4925 45.1645 12.6258C45.1645 11.8122 45.2919 10.7915 45.5394 10.1108C45.793 9.43092 46.1533 8.84363 46.6414 8.35711C47.1226 7.8706 47.7107 7.49679 48.3987 7.22284C49.0868 6.9498 49.894 6.77664 50.769 6.77664C51.6183 6.77664 52.3999 6.88292 53.1613 7.01028C53.9226 7.13671 54.5704 7.26956 55.0981 7.41616V17.7676H55.0983Z"
            fill="white"
          />
        </svg>
      );
    default:
      return "";
  }
}