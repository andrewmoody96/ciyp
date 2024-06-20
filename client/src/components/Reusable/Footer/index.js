import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="fixed bottom-0 left-0 right-0 bg-[#262626]/75 text-white font-arvo p-2"
    >
      <div className="logo-footer text-center mt-1 w-100">
        <div className="w-100 flex flex-row text-xs items-center justify-evenly">
          {/* &copy; 2024 CIYP */}
          <div className="flex flex-row text-center items-center justify-center">
            <a
              aria-label="{null}"
              href="https://open.spotify.com/artist/5DvIfRy1pnzSyggT6XLCbr"
              title="Link to Spotify"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <i className="fa fa-spotify mx-4" aria-hidden="true" />
            </a>
            <a
              aria-label="{null}"
              href="https://music.apple.com/us/artist/chocolate-in-your-pocket/1437178872"
              title="Link to Apple Music"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <i className="fab fa-apple mx-4" aria-hidden="true" />
            </a>
            <a
              aria-label="{null}"
              href="https://www.youtube.com/@chocolateinyourpocket"
              title="Link to YouTube"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <i className="fa fa-youtube mx-4" aria-hidden="true" />
            </a>
            <a
              aria-label="{null}"
              href="https://www.instagram.com/chocolateinyourpocket/?hl=en"
              title="Link to Instagram"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <i className="fa fa-instagram mx-4" aria-hidden="true" />
            </a>
            <a
              aria-label="{null}"
              href="https://www.tiktok.com/@chocolateinyourpocket?is_from_webapp=1&sender_device=pc"
              title="Link to TikTok"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <i className="fab fa-tiktok mx-4" aria-hidden="true" />
            </a>
            <a
              aria-label="{null}"
              href="https://www.facebook.com/chocolateinyourpocket/"
              title="Link to Facebook"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <i className="fa fa-facebook mx-4" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/andrewmoody96"
              target="_blank"
              rel="noreferrer"
              className="text-xs hover:text-[#B36551]"
            >
              <i className="fa fa-github mx-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="logo-footer w-100 flex flex-row justify-between pt-[5px]"></div>
    </footer>
  );
}
