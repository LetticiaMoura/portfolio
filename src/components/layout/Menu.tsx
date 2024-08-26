import { FaAddressBook, FaHome } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";

interface IMenuProps {
    alt: string;
}
export default function Menu({alt}: IMenuProps) {
    return(
        <div className="p-3 rounded-xl flex flex-col gap-5 bg-orange-dark fixed left-2 top-32 shadow-md" title={alt}>
            <a href="#HOME">
                <FaHome color="#fff" size={30} />
            </a>
            <a href="#SKILLS">
                <AiFillCode color="#fff" size={30} />
            </a>
            <a href="#PROJECTS">
                <BiGridAlt color="#fff" size={30}  />
            </a>
            <a href="#CONTACT">
                <FaAddressBook color="#fff" size={30} />
            </a>
        </div>
    )
}