import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchPhotos } from "../functions/services";
import { useInView } from "react-intersection-observer";

export default function BTL1() {
  // const [section, setSection] = useState([]);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  // const loadNext = async () => {
  //   setLoading(true);
  //   const newSection = await fetchPhotos(page, 22);
  //   setSection((prevSections) => [...prevSections, ...newSection]);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   loadNext();
  // }, [page]);

  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   fallbackInView: true,
  // });

  return (
    <h1 className="text-white text-4xl font-monoton">BTL SECTION 1</h1>
  );
}
