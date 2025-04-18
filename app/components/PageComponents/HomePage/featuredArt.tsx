import art from "../../../assets/featuredArt.webp";

// -------------------------FEATURED ART-------------------------------
// Component to display the current feature content.
// --------------------------------------------------------------------

export default function FeaturedArt() {
  return (
    <>
      <div className="relative w-[85vw] tablet:w-[75vw] desktop:w-[50vw] flex justify-center items-center">
        <img
          width="1200"
          height="1200"
          // eslint-disable-next-line react/no-unknown-property
          fetchpriority="high"
          alt="Back To Life Artwork"
          className="rounded-lg border-2 border-[#B36551] drop-shadow-[2px_1px_10px_rgba(255,255,255,0.7)]"
          src={art}
        ></img>
        <div className="absolute bottom-[-5%]">
          <button className="shadow-[inset_0_1px_5px_0_rgb(0,0,0);] p-1 mx-2 rounded-xl bg-[#B36551] border border-white font-moda text-white text-base text-center w-auto hover:bg-red-300 hover:text-black">
            <a
              href="https://distrokid.com/hyperfollow/chocolateinyourpocket/back-to-life-2"
              target="_blank"
              rel="noreferrer"
              className="mx-auto p-2"
            >
              Stream
            </a>
          </button>
          <button className="shadow-[inset_0_1px_5px_0_rgb(0,0,0);] p-1 mx-2 rounded-xl bg-[#B36551] border border-white font-moda text-white text-base text-center w-auto hover:bg-red-300 hover:text-black">
            <a
              href="https://elasticstage.com/chocolateinyourpocket/releases/back-to-life-album"
              target="_blank"
              rel="noreferrer"
              className="mx-auto p-2"
            >
              Buy the LP
            </a>
          </button>
        </div>
      </div>
      <section className="absolute top-[22%] flex flex-col justify-center items-center w-[95vw] mt-4 mb-2 text-center text-white">
        <p className="font-modaCaps px-2 rounded-lg text-[3.7rem] drop-shadow-[0_1px_5px_rgba(0,0,0,1)] text-white">
          Back To Life
          <br></br>
          <span className="font-moda bg-[#262626]/25 border border-white px-2 rounded-lg text-[0.9rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white text-center m-auto w-[40%]">
            our new album
          </span>
        </p>
      </section>
    </>
  );
}
