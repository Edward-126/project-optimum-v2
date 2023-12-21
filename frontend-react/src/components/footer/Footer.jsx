import { TbArrowBigUpFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <hr className="my-5 border-gray-800" />
      <footer className="mb-5 px-4 text-center text-gray-200">
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
            className="  transition-all duration-200 hover:text-gray-400"
          >
            Edward Hyde
          </a>
        </p>
      </footer>
    </>
  );
}
