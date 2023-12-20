import { TbArrowBigUpFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="mb-5 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
          <span>© 2023 </span>
          <span className="font-bold uppercase">Optimum Gym</span>
        </small>
        <p className="font-base text-xs">
          Made with <FaHeart className=" inline-block" /> by{" "}
          <a
            href="https://github.com/Edward-126"
            target="_blank"
            rel="noreferrer"
          >
            Edward Hyde
          </a>
        </p>
      </footer>
    </>
  );
}
