import ProjectArt from "./components/ProjectArt.js";
import BTLfeaturedPhotos from "./components/BTLfeaturedPhotos.js";
import Loader from "./components/loader.js";

import { lazy, Suspense, useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
const BTL1 = lazy(() => import("./components/BTL1.js"));
const BTL2 = lazy(() => import("./components/BTL2.js"));
const BTL3 = lazy(() => import("./components/BTL3.js"));

// const showNextSection = (section) => {
//   if (section === 1) {
//     return (
//       <Suspense fallback={<Loader />}>
//         <BTL1 />
//       </Suspense>
//     );
//   }
//   if (section === 2) {
//     return (
//       <Suspense fallback={<Loader />}>
//         <BTL2 />
//       </Suspense>
//     );
//   }
//   if (section === 3) {
//     return (
//       <Suspense fallback={<Loader />}>
//         <BTL3 />
//       </Suspense>
//     );
//   }
// };

export default function BackToLife() {
  const options = {
    triggerOnce: true,
  };

// TRIGGERING ONCE RESULTS IN ALL OF THEM SHOWING UP WHETHER OR NOT THEY ARE ON SCREEN

  const { ref: s1ref, inView: s1inView } = useInView();
  const { ref: s2ref, inView: s2inView } = useInView();
  const { ref: s3ref, inView: s3inView } = useInView();
  const { ref: a1ref, inView: a1inView } = useInView(options);
  const [isLoaded, setisLoaded] = useState(false);
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/btlfeatured`);
        const jsonData = await res.json();
        const photoSet = [];

        jsonData.forEach((file) => {
          if (file.type !== "text/plain") {
            photoSet.push(file);
          }
        });
        setFeatured([...photoSet]);
        setisLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container h-[100vh] absolute top-0">
      <ProjectArt />
      <div className="mt-5 mx-3 flex flex-col justify-center items-center">
        <div className="flex items-center justify-between mt-5">
          <h1 className="text-4xl text-center text-white font-monoton mt-8 p-1 rounded-lg">
            Back To Life
          </h1>
        </div>
        <div className="tablet:mt-4 h-[10vh] hidden tablet:block tablet:invisible"></div>
        {/* MAIN CONTAINER */}
        <main className="bg-blue-400 flex flex-col justify-center items-start h-fit mb-8">
          {/* Featured Photos */}
          {!isLoaded ? (
            <p className="m-auto font-moda text-3xl text-center">loading...</p>
          ) : (
            <div className="h-[75vh]">
              <BTLfeaturedPhotos media={featured} />
            </div>
          )}
          {/* THE STORY & OTHER PICS */}
          <div className="h-[50vh] bg-white">DUMMY DIV</div>
          <article ref={a1ref}>
            {a1inView ? (
              <>
                <section ref={s1ref}>
                  {s1inView ? (
                    <Suspense fallback={<Loader />}>
                      <BTL1 />
                    </Suspense>
                  ) : (
                    <Loader />
                  )}
                </section>
                <section ref={s2ref}>
                  {s2inView ? (
                    <Suspense fallback={<Loader />}>
                      <BTL2 />
                    </Suspense>
                  ) : (
                    <Loader />
                  )}
                </section>
                <section ref={s3ref}>
                  {s3inView ? (
                    <Suspense fallback={<Loader />}>
                      <BTL3 />
                    </Suspense>
                  ) : (
                    <Loader />
                  )}
                </section>
              </>
            ) : null}
          </article>
        </main>
        <div className="h-10 mb-10"></div>
      </div>
    </div>
  );
}

// Page loads, user sees "Back To Life" and a few photos arranged like 2-3 stacked Polaroids.  -- First set of slideshow photos are fetched.
// As user scrolls, Paragraph-1 and Photos-1 appear. -- Second set of slideshow photos are fetched.
// Paragraph-1 remains on left/right of Photos-1 as user scrolls through photos.
// After final photo of Photos-1, Paragraph-2 will appear on left/right of Photos-2. -- 3rd set of slideshow photos are fetched.
// After final photo of Photos-2, Paragraph-3 will appear on left/right of Photos-3.

// MOBILE - Use Swiper for photos?
// DESKTOP - Style side by side with scrolling options.
