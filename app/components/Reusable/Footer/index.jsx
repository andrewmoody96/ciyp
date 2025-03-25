import {
  faInstagram,
  faFacebook,
  faTiktok,
  faYoutube,
  faGithub,
  faApple,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ------------------------------FOOTER--------------------------------
// Footer that resides on every page. Allows users to have links to socials & music without needing to leave the current page.
// --------------------------------------------------------------------

export default function Footer() {
  return (
    <footer
      id="footer"
      className="fixed bottom-0 left-0 right-0 bg-[#262626]/75 text-white font-moda p-2"
    >
      <div className="logo-footer text-center mt-1 w-100">
        <div className="w-100 flex flex-row text-xs items-center justify-evenly">
          {/* &copy; 2025 CIYP */}
          <div className="flex flex-row text-center items-center justify-center">
            <a
              aria-label="{null}"
              href="https://open.spotify.com/artist/5DvIfRy1pnzSyggT6XLCbr"
              title="Link to Spotify"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <FontAwesomeIcon className="mx-4" icon={faSpotify} />
            </a>
            <a
              aria-label="{null}"
              href="https://music.apple.com/us/artist/chocolate-in-your-pocket/1437178872"
              title="Link to Apple Music"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <FontAwesomeIcon className="mx-4" icon={faApple} />
            </a>
            <a
              aria-label="{null}"
              href="https://www.youtube.com/@chocolateinyourpocket"
              title="Link to YouTube"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <FontAwesomeIcon className="mx-4" icon={faYoutube} />
            </a>
            <a
              aria-label="{null}"
              href="https://www.instagram.com/chocolateinyourpocket/?hl=en"
              title="Link to Instagram"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <FontAwesomeIcon className="mx-4" icon={faInstagram} />
            </a>
            <a
              aria-label="{null}"
              href="https://www.tiktok.com/@chocolateinyourpocket?is_from_webapp=1&sender_device=pc"
              title="Link to TikTok"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <FontAwesomeIcon className="mx-4" icon={faTiktok} />
            </a>
            <a
              aria-label="{null}"
              href="https://www.facebook.com/chocolateinyourpocket/"
              title="Link to Facebook"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B36551] text-base"
            >
              <FontAwesomeIcon className="mx-4" icon={faFacebook} />
            </a>
            <a
              href="https://github.com/andrewmoody96"
              title="Link to GitHub"
              target="_blank"
              rel="noreferrer"
              className="text-xs hover:text-[#B36551]"
            >
              <FontAwesomeIcon className="mx-4" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
      <div className="logo-footer w-100 flex flex-row justify-between pt-[5px]"></div>
    </footer>
  );
}
