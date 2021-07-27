import { useRef, useLayoutEffect } from 'react'
import styles from "../styles/Banner.module.css";
import AuthorSvg from './AuthorSvg';

function Banner() {
    const path1 = useRef<HTMLOrSVGElement>()
    const path2 = useRef<HTMLOrSVGElement>()
    const path3 = useRef<HTMLOrSVGElement>()
    const path4 = useRef<HTMLOrSVGElement>()
    const path5 = useRef<HTMLOrSVGElement>()
    const path6 = useRef<HTMLOrSVGElement>()
    const path7 = useRef<HTMLOrSVGElement>()
    useLayoutEffect(() => {
        if(path1 && path1.current) {
        var length_1 = path1.current.getTotalLength();
        path1.current.style.strokeDasharray = length_1;
        path1.current.style.strokeDashoffset = length_1;
        }

        if(path2 && path2.current) {
            var length_2 = path2.current.getTotalLength();
            path2.current.style.strokeDasharray = length_2;
            path2.current.style.strokeDashoffset = length_2;
        }

        if(path3 && path3.current) {
            var length_3 = path3.current.getTotalLength();
            path3.current.style.strokeDasharray = length_3;
            path3.current.style.strokeDashoffset = length_3;
        }

        if(path4 && path4.current) {
            var length_4 = path4.current.getTotalLength();
            path4.current.style.strokeDasharray = length_4;
            path4.current.style.strokeDashoffset = length_4;
        }

        if(path5 && path5.current) {
            var length_5 = path5.current.getTotalLength();
            path5.current.style.strokeDasharray = length_5;
            path5.current.style.strokeDashoffset = length_5;
        }

        if(path6 && path6.current) {
            var length_6 = path1.current.getTotalLength();
            path6.current.style.strokeDasharray = length_6;
            path6.current.style.strokeDashoffset = length_6;
        }

        if(path7 && path7.current) {
            var length_7 = path7.current.getTotalLength();
            path7.current.style.strokeDasharray = length_7;
            path7.current.style.strokeDashoffset = length_7;
        }


      
    }, [])
  return (
    <div className={styles.mainDiv}>
      <svg
      display="block"
      width="100"
      height="90"
      className={styles.container}
      >
        <g className={styles.paths}>
          <path
            strokeWidth="4"
            fill="transparent"
            stroke="#FFFFFF"
            d="m167.313,209.123c-2.12-3.559-6.723-4.726-10.281-2.605l-87.369,52.039c-2.271,1.352-3.663,3.8-3.663,6.443s1.392,5.091 3.662,6.443l87.369,52.039c1.203,0.717 2.525,1.058 3.831,1.058 2.556,0 5.048-1.308 6.45-3.663 2.12-3.559 0.953-8.162-2.605-10.281l-76.551-45.596 76.551-45.596c3.559-2.119 4.726-6.722 2.606-10.281z"
            className={styles.path_1}
            ref={path1}
          />
          <path
             strokeWidth="4"
             fill="transparent"
            stroke="#FFFFFF"
            d="m302.688,320.877c1.403,2.356 3.894,3.663 6.45,3.663 1.306,0 2.628-0.341 3.831-1.058l87.369-52.039c2.271-1.353 3.662-3.8 3.662-6.443s-1.392-5.091-3.662-6.443l-87.369-52.039c-3.558-2.12-8.163-0.954-10.281,2.605-2.12,3.559-0.953,8.162 2.605,10.281l76.551,45.596-76.551,45.596c-3.559,2.119-4.726,6.722-2.605,10.281z"
            className={styles.path_2}
            ref={path2}
          />
          <path
             strokeWidth="4"
             fill="transparent"
             stroke="#FFFFFF"
            d="m263.72,208.78l-69.893,104.078c-2.309,3.438-1.394,8.098 2.045,10.408 1.284,0.862 2.737,1.274 4.175,1.274 2.415,0 4.786-1.165 6.233-3.32l69.893-104.078c2.309-3.438 1.394-8.098-2.045-10.408-3.441-2.309-8.1-1.392-10.408,2.046z"
            className={styles.path_3}
            ref={path3}
          />
          <path
              strokeWidth="4"
              fill="transparent"
              stroke="#FFFFFF"
            d="m462.5,22.5h-455c-4.143,0-7.5,3.358-7.5,7.5v410c0,4.142 3.357,7.5 7.5,7.5h455c4.143,0 7.5-3.358 7.5-7.5v-80c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v72.5h-440v-335h440v232.5c0,4.142 3.357,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-300c0-4.142-3.357-7.5-7.5-7.5zm-447.5,15h277.5v45h-277.5v-45zm292.5,45v-45h147.5v45h-147.5z"
            className={styles.path_4}
            ref={path4}
          />
          <path
             strokeWidth="4"
             fill="transparent"
             stroke="#FFFFFF"
            d="m381.5,52c-4.411,0-8,3.589-8,8s3.589,8 8,8 8-3.589 8-8-3.589-8-8-8z"
            className={styles.path_5}
            ref={path5}
          />
          <path
             strokeWidth="4"
             fill="transparent"
             stroke="#FFFFFF"
            d="m340.5,52c-4.411,0-8,3.589-8,8s3.589,8 8,8 8-3.589 8-8-3.589-8-8-8z"
            className={styles.path_6}
            ref={path6}
          />
          <path
             strokeWidth="4"
             fill="transparent"
             stroke="#FFFFFF"
            d="m422.5,52c-4.411,0-8,3.589-8,8s3.589,8 8,8 8-3.589 8-8-3.589-8-8-8z"
            className={styles.path_7}
            ref={path7}
          />
        </g>
      </svg>
      <AuthorSvg />
    </div>

  );
}

export default Banner;
