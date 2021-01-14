import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./HomePage.module.css";
import { userActions } from "../../actions";
import avatar from "./user1.jpg";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
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
            <img className={styles.avatarImage} src={avatar} alt="avatar" />
          </div>
          <div className={styles.logout}>
            <Link to="/login">
              <span>
                <svg
                  className={styles.imgSvg}
                  height="16"
                  viewBox="0 0 512 512"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(-1 -1)">
                    <g>
                      <g>
                        <path
                          d="M508.184,249.202c0.203-0.247,0.379-0.507,0.568-0.76c0.227-0.304,0.463-0.601,0.674-0.917
				c0.203-0.303,0.379-0.618,0.565-0.93c0.171-0.286,0.35-0.565,0.508-0.86c0.17-0.318,0.314-0.645,0.467-0.969
				c0.145-0.307,0.298-0.609,0.428-0.923c0.13-0.315,0.235-0.636,0.35-0.956c0.121-0.337,0.25-0.67,0.355-1.015
				c0.097-0.32,0.168-0.645,0.249-0.968c0.089-0.351,0.187-0.698,0.258-1.056c0.074-0.375,0.118-0.753,0.172-1.13
				c0.044-0.311,0.104-0.618,0.135-0.933c0.138-1.4,0.138-2.811,0-4.211c-0.031-0.315-0.09-0.621-0.135-0.932
				c-0.054-0.378-0.098-0.756-0.173-1.13c-0.071-0.358-0.169-0.704-0.258-1.055c-0.081-0.324-0.152-0.649-0.249-0.969
				c-0.104-0.344-0.233-0.677-0.354-1.013c-0.115-0.32-0.22-0.642-0.35-0.957c-0.13-0.314-0.283-0.616-0.428-0.922
				c-0.153-0.325-0.297-0.652-0.467-0.97c-0.157-0.294-0.337-0.573-0.507-0.859c-0.186-0.312-0.362-0.627-0.565-0.931
				c-0.211-0.315-0.446-0.612-0.673-0.915c-0.19-0.254-0.367-0.515-0.57-0.762c-0.443-0.539-0.909-1.058-1.402-1.551
				c-0.004-0.004-0.007-0.008-0.011-0.012l-64-64c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17
				l27.582,27.582H321.019c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h119.163l-27.582,27.582
				c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l64-64c0.004-0.004,0.007-0.008,0.011-0.012
				C507.275,250.26,507.741,249.742,508.184,249.202z"
                        />
                        <path
                          d="M363.686,299.672c-11.782,0-21.333,9.551-21.333,21.333v106.667h-85.333V86.347v-0.008
				c0-9.421-6.18-17.727-15.203-20.434l-74.11-22.233h174.647v106.667c0,11.782,9.551,21.333,21.333,21.333
				s21.333-9.551,21.333-21.333v-128c0-11.782-9.551-21.333-21.333-21.333H22.353c-0.002,0-0.004,0-0.006,0
				c-0.631-0.001-1.256,0.029-1.876,0.083C10.685,1.827,4.306,8.264,1.988,15.949c-0.149,0.478-0.279,0.966-0.395,1.46
				c-0.012,0.053-0.022,0.107-0.034,0.161c-0.115,0.508-0.211,1.024-0.29,1.547c-0.011,0.074-0.023,0.147-0.034,0.221
				c-0.067,0.477-0.12,0.96-0.155,1.449c-0.062,0.788-0.081,1.578-0.061,2.368v425.859c0,10.169,7.178,18.925,17.15,20.919
				L231.502,512.6c13.201,2.64,25.517-7.457,25.517-20.919v-21.342h106.667c11.782,0,21.333-9.551,21.333-21.333v-128
				C385.019,309.223,375.468,299.672,363.686,299.672z M214.353,465.658L43.686,431.525V51.02l170.667,51.2v346.785V465.658z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.menuBar}>
          <a href=".">
            <div className={styles.menuItem}>customers</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>destination</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>carriers</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>routes</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>phone numbers</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>companies</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>users</div>
          </a>
          <a href=".">
            <div className={styles.menuItem}>products</div>
          </a>
        </div>
        <div className={styles.addApiCard}>
          <span>+ Add</span>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.apiCard}></div>
        </div>
      </div>
    </div>
  );
}

export { HomePage };