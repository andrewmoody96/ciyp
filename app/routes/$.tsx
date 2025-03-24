import goBack from "../assets/goBack.webp";

// -------------------TRACE'S PLACE (404 NOT FOUND)------------------
// This is Trace's Place. If you're here, you shouldn't be. We gave you a nice big button to help get you headed back the way you came.
// Really, there's nothing going on here unless you want to look deep into Trace's eyes.
// ------------------------------------------------------------------

// FIX - Cleanup spacing & alignment on page.

export default function NotFound() {
  return (
    <>
      <div className="bg-static fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%]"></div>
      <div className="flex flex-col justify-center items-center">
        <div className="my-10 invisible">dummy div</div>
        <div>
          <div className="text-white my-10 bg-[#B36551]/90 rounded-lg drop-shadow-[0_1px_10px_rgba(0,0,0,1)] w-[90vw]">
            <section className="p-2 text-center">
              <h2 className="m-2 text-4xl font-moda drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
                404: Not Found
              </h2>
              <h3 className="text-xl font-moda text-center drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
                Welcome to Trace&apos;s Place. If you&apos;re here, you&apos;re
                not supposed to be. Check your signal flow and try again.
              </h3>
              <button className="font-moda bg-black text-white my-5 py-2 px-4 rounded-full">
                <a onClick={() => location.reload()} href="/">
                  Home
                </a>
              </button>
            </section>
          </div>
        </div>
        <img
          className="w-[90vw] m-3 rounded-lg drop-shadow-[0_1px_30px_rgba(0,0,0,1)]"
          src={goBack}
          alt="404Trace"
        ></img>
        <div className="h-[100px] my-10 invisible">dummy div</div>
      </div>
    </>
  );
}
