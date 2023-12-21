import { Link } from "react-router-dom";
import { headerData } from "../constants";

const Header = () => {
  return (
    <div className="sticky top-0 shadow-xl px-[8%] py-2 w-full bg-white z-10 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt="LOGO"
          className="w-16"
        />
        <p className="text-xl font-bold font-serif">Food Villa</p>
      </Link>
      {/* <div className="flex items-center gap-5 justify-between">
        {headerData.map(({ path, Icon, text, id }) => {
          return (
            <Link
              to={path}
              key={id}
              className="flex items-center gap-2 hover:text-orange-500"
            >
              <Icon className="text-lg" /> {text}
            </Link>
          );
        })}
      </div> */}
    </div>
  );
};

export default Header;
