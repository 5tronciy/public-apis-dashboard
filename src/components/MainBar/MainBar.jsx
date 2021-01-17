import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import UserMenu from "../UserMenu/UserMenu";
import styles from "./MainBar.module.css";
import { userActions } from "../../actions";
import avatar from "./user1.jpg";

function MainBar() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  return (
    <div className={styles.navigationBar}>
      <div className={styles.plane}>
        <span>
          <svg
            className={styles.imgSvg}
            height="24"
            viewBox="0 0 512 512"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m277.217 161.119h25.181v10.363h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -32.709 253.636)"
            />
            <path d="m263.408 77.385a19.63 19.63 0 0 0 -27.762 0l-12.111 12.115 41.434 13.869a19.649 19.649 0 0 0 -1.561-25.984z" />
            <path d="m130.002 307.632-88.588-7.507-15.865 15.864 65.731 65.731z" />
            <path
              d="m252.34 185.995h25.181v10.363h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -57.587 243.326)"
            />
            <path d="m186.569 51.772a19.631 19.631 0 0 0 -27.763 0l-12.03 12.028 41.417 13.864a19.648 19.648 0 0 0 -1.624-25.892z" />
            <path d="m306.744 127.893-234.644-78.543-20.37 20.365 179.248 133.944zm-210.111-46.311a5 5 0 0 1 -7 1.012l-8.29-6.2a5 5 0 1 1 5.986-8.01l8.291 6.195a5 5 0 0 1 1.013 7.003zm105.844 79.092a5 5 0 0 1 -7 1.013l-83.147-62.134a5 5 0 0 1 5.986-8.011l83.149 62.134a5 5 0 0 1 1.012 6.998z" />
            <path d="m171.127 277.653 1.82.479a17.666 17.666 0 0 0 16.933-4.576l12.987-12.987-7.328-7.328z" />
            <path d="m372.6 90.837a17.7 17.7 0 0 0 4.993-14.85l-.581-4.217-25.141 25.139 7.328 7.328z" />
            <path
              d="m326.97 111.365h25.181v10.363h-25.181z"
              transform="matrix(.707 -.707 .707 .707 17.045 274.244)"
            />
            <path
              d="m202.587 235.749h25.181v10.364h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -107.34 222.719)"
            />
            <path
              d="m302.094 136.242h25.181v10.363h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -7.833 263.937)"
            />
            <path
              d="m227.464 210.872h25.181v10.363h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -82.463 233.029)"
            />
            <path d="m130.68 421.12 64.932 64.932 15.881-15.88-6.781-87.744z" />
            <path d="m409.036 247.431 13.869 41.435 12.111-12.111a19.623 19.623 0 0 0 -25.98-29.324z" />
            <path d="m421.87 140.109-13.4 13.4 7.022 7.023 24.908-24.909-3.681-.507a17.7 17.7 0 0 0 -14.849 4.993z" />
            <path
              d="m383.417 168.028h25.181v9.931h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -6.338 330.685)"
            />
            <path d="m451.849 26.448-1.288.236a115.1 115.1 0 0 0 -11.443 2.726l-10.125 20.25a25.154 25.154 0 0 0 33.747 33.747l20.23-10.115a116.264 116.264 0 0 0 2.788-11.685l.193-1.056a29.3 29.3 0 0 0 -34.1-34.1z" />
            <path d="m239.152 322.827a17.667 17.667 0 0 0 -4.577 16.933l.352 1.335 24.233-24.233-7.021-7.022z" />
            <path d="m451.485 96.073a35.166 35.166 0 0 1 -31.436-50.885l5.419-10.838a113.425 113.425 0 0 0 -34.832 23.794l-4.753 4.756 1.617 11.724a27.755 27.755 0 0 1 -7.828 23.285l-182.721 182.718a27.715 27.715 0 0 1 -19.563 8.079 27.4 27.4 0 0 1 -6.988-.9l-7.458-1.964-21.506 21.5-52.762 100.958-.064.119a11.347 11.347 0 0 0 1.88 13.5 11.351 11.351 0 0 0 13.5 1.88l.119-.064 100.953-52.763 21.684-21.683-1.836-6.974a27.7 27.7 0 0 1 7.175-26.551l182.715-182.726a27.749 27.749 0 0 1 23.284-7.828l11.19 1.54 4.988-4.988a113.31 113.31 0 0 0 23.758-34.814l-10.806 5.4a35.132 35.132 0 0 1 -15.729 3.725z" />
            <path d="m434.735 324.207 13.865 41.418 12.03-12.031a19.622 19.622 0 0 0 -25.894-29.387z" />
            <path
              d="m358.54 192.905h25.181v9.931h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -31.214 320.384)"
            />
            <path
              d="m283.91 267.535h25.181v9.93h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -105.844 289.471)"
            />
            <path
              d="m259.033 292.412h25.181v9.93h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -130.72 279.163)"
            />
            <path
              d="m308.787 242.658h25.181v9.931h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -80.967 299.775)"
            />
            <path d="m308.742 281.423 133.944 179.248 20.365-20.365-78.543-234.649z" />
            <path
              d="m333.663 217.781h25.181v9.931h-25.181z"
              transform="matrix(.707 -.707 .707 .707 -56.09 310.079)"
            />
          </svg>
        </span>
      </div>
      <input type="text" className={styles.search} placeholder="Search" />
      <div className={styles.menu}>
        <span>
          <svg
            className={styles.imgSvg}
            height="16"
            viewBox="0 0 60.123 60.123"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z" />
            <path
              d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3
    C60.124,31.719,58.781,33.062,57.124,33.062z"
            />
            <path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z" />
            <circle cx="4.029" cy="11.463" r="4.029" />
            <circle cx="4.029" cy="30.062" r="4.029" />
            <circle cx="4.029" cy="48.661" r="4.029" />
          </svg>
        </span>
      </div>
      <div className={styles.settings}>
        <span>
          <svg
            className={styles.imgSvg}
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m23.1 10.208-1.296-.13c-.087-.449-.205-.89-.35-1.316l1.056-.759c.418-.301.54-.865.282-1.312l-.798-1.381c-.257-.446-.806-.623-1.277-.412l-1.182.534c-.299-.343-.623-.667-.966-.966l.534-1.183c.211-.47.034-1.019-.412-1.277l-1.381-.797c-.448-.258-1.011-.136-1.312.282l-.759 1.056c-.426-.146-.867-.263-1.316-.35l-.13-1.296c-.052-.514-.48-.901-.996-.901h-1.595c-.516 0-.944.387-.995.9l-.13 1.296c-.449.087-.89.205-1.316.35l-.759-1.055c-.3-.418-.864-.54-1.312-.282l-1.38.797c-.447.258-.624.807-.412 1.278l.534 1.182c-.344.299-.667.622-.966.966l-1.183-.535c-.47-.211-1.019-.034-1.277.413l-.797 1.38c-.258.448-.136 1.012.282 1.312l1.056.759c-.146.426-.263.867-.35 1.316l-1.296.13c-.514.052-.901.48-.901.996v1.595c0 .516.387.944.9.995l1.296.13c.087.449.205.89.35 1.316l-1.056.759c-.418.301-.54.865-.282 1.312l.797 1.381c.258.447.808.625 1.277.412l1.182-.534c.299.343.623.667.966.966l-.534 1.183c-.211.47-.034 1.019.412 1.277l1.381.797c.448.259 1.012.137 1.312-.282l.759-1.056c.426.146.867.263 1.316.35l.13 1.296c.053.513.481.9.997.9h1.595c.516 0 .944-.387.995-.9l.13-1.296c.449-.087.89-.205 1.316-.35l.759 1.056c.301.418.863.539 1.312.282l1.381-.797c.446-.258.624-.807.412-1.277l-.534-1.182c.343-.299.667-.623.966-.966l1.183.534c.47.211 1.02.035 1.277-.412l.797-1.381c.258-.447.136-1.011-.282-1.312l-1.056-.759c.146-.426.263-.867.35-1.316l1.296-.13c.513-.053.9-.481.9-.997v-1.595c0-.515-.387-.943-.9-.994zm-11.1-5.208c3.519 0 6.432 2.613 6.92 6h-4.632c-.387-.881-1.265-1.5-2.288-1.5-.093 0-.182.018-.273.028l-2.322-4.024c.803-.322 1.678-.504 2.595-.504zm-7 7c0-2.227 1.049-4.21 2.674-5.493l2.319 4.016c-.306.416-.493.923-.493 1.477s.187 1.061.493 1.476l-2.319 4.016c-1.625-1.283-2.674-3.265-2.674-5.492zm7 7c-.917 0-1.792-.182-2.595-.505l2.323-4.023c.09.01.179.028.272.028 1.023 0 1.901-.619 2.288-1.5h4.632c-.488 3.387-3.401 6-6.92 6z" />
          </svg>
        </span>
      </div>
      <div className={styles.notifications}>
        <span>
          <svg
            className={styles.imgSvg}
            height="16"
            viewBox="0 0 512 512"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m432 352c-17.645 0-32-14.355-32-32v-112c0-38.558-15.043-74.783-42.357-102.002-16.839-16.78-37.087-28.878-59.176-35.662 3.526-6.676 5.533-14.274 5.533-22.336 0-26.467-21.533-48-48-48s-48 21.533-48 48c0 8.108 2.028 15.749 5.593 22.453-58.745 18.349-101.593 73.757-101.593 138.937v110.61c0 17.645-14.355 32-32 32-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h120.575c-.374 2.629-.575 5.299-.575 8 0 30.878 25.122 56 56 56s56-25.122 56-56c0-2.701-.2-5.371-.575-8h120.575c8.836 0 16-7.164 16-16v-64c0-8.836-7.164-16-16-16zm-176-320c8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16 7.178-16 16-16zm24 424c0 13.234-10.766 24-24 24s-24-10.766-24-24c0-2.765.462-5.458 1.361-8h45.277c.9 2.542 1.362 5.235 1.362 8zm136-40h-128-64-128v-34.025c27.573-7.122 48-32.208 48-61.975v-110.61c0-62.307 50.062-113.173 111.597-113.389.136 0 .27-.001.405-.001 29.844 0 57.905 11.591 79.053 32.665 21.245 21.17 32.945 49.346 32.945 79.335v112c0 29.767 20.427 54.853 48 61.975z" />
            <path d="m192 224c-8.836 0-16-7.164-16-16 0-44.112 35.888-80 80-80 8.836 0 16 7.164 16 16s-7.164 16-16 16c-26.467 0-48 21.533-48 48 0 8.836-7.164 16-16 16z" />
          </svg>
        </span>
      </div>
      <div className={styles.stats}>
        <span>
          <svg
            className={styles.imgSvg}
            height="16"
            viewBox="0 0 512 512"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="XMLID_1027_"
              d="M502,438h-12V186.001c0-5.522-4.477-10-10-10s-10,4.478-10,10V438h-44V74h44v32.001    c0,5.522,4.477,10,10,10s10-4.478,10-10V64c0-5.522-4.477-10-10-10h-64c-5.523,0-10,4.478-10,10v374h-20V178.5    c0-5.522-4.477-10-10-10h-64c-5.523,0-10,4.478-10,10v94.75c0,5.522,4.477,10,10,10s10-4.478,10-10V188.5h44V438h-44v-84.75    c0-5.522-4.477-10-10-10s-10,4.478-10,10V438h-20V256c0-5.522-4.477-10-10-10h-64c-5.523,0-10,4.478-10,10v182h-20v-94    c0-5.522-4.477-10-10-10h-64c-5.523,0-10,4.478-10,10v94H74V64c0-5.522-4.477-10-10-10s-10,4.478-10,10v384    c0,5.522,4.477,10,10,10h438c5.523,0,10-4.478,10-10S507.523,438,502,438z M114,438v-84h44v84H114z M218,438V266h44v172H218z"
            />
            <path
              id="XMLID_1029_"
              d="M22,310H10c-5.523,0-10,4.478-10,10s4.477,10,10,10h12c5.523,0,10-4.478,10-10S27.523,310,22,310z"
            />
            <path
              id="XMLID_1034_"
              d="M22,374H10c-5.523,0-10,4.478-10,10s4.477,10,10,10h12c5.523,0,10-4.478,10-10S27.523,374,22,374z"
            />
            <path
              id="XMLID_1035_"
              d="M22,438H10c-5.523,0-10,4.478-10,10s4.477,10,10,10h12c5.523,0,10-4.478,10-10S27.523,438,22,438z"
            />
            <path
              id="XMLID_1037_"
              d="M22,182H10c-5.523,0-10,4.478-10,10s4.477,10,10,10h12c5.523,0,10-4.478,10-10S27.523,182,22,182z"
            />
            <path
              id="XMLID_1103_"
              d="M22,246H10c-5.523,0-10,4.478-10,10s4.477,10,10,10h12c5.523,0,10-4.478,10-10S27.523,246,22,246z"
            />
            <path
              id="XMLID_1104_"
              d="M22,54H10C4.477,54,0,58.478,0,64s4.477,10,10,10h12c5.523,0,10-4.478,10-10S27.523,54,22,54z"
            />
            <path
              id="XMLID_1105_"
              d="M22,118H10c-5.523,0-10,4.478-10,10s4.477,10,10,10h12c5.523,0,10-4.478,10-10S27.523,118,22,118z"
            />
            <path
              id="XMLID_1106_"
              d="M312,323.25c2.63,0,5.21-1.07,7.07-2.931c1.86-1.859,2.93-4.439,2.93-7.069c0-2.641-1.07-5.21-2.93-7.07    s-4.44-2.93-7.07-2.93c-2.63,0-5.21,1.069-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07c0,2.63,1.07,5.21,2.93,7.069    C306.79,322.18,309.37,323.25,312,323.25z"
            />
            <path
              id="XMLID_1110_"
              d="M480,136c-2.63,0-5.21,1.069-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.069    c1.86,1.86,4.44,2.931,7.07,2.931c2.63,0,5.21-1.07,7.07-2.931c1.86-1.859,2.93-4.439,2.93-7.069s-1.07-5.21-2.93-7.07    S482.63,136,480,136z"
            />
          </svg>
        </span>
      </div>
      <div className={styles.avatar}>
        <img
          className={styles.avatarImage}
          src={avatar}
          alt="avatar"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        />
      </div>
      {open && <UserMenu />}
    </div>
  );
}

export { MainBar };