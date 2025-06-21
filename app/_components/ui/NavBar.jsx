import Button from "../Button";

const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:px-[60px] p-4 md:h-[65px] font-mono bg-white border-b-1 border-gray-300 sticky top-0 z-10">
      <div>
        <span className="font-bold">ayari's portfolio</span>
      </div>

      <div className="flex items-center md:gap-3">
        <Button text="About" link='/#about' />
        <Button text="Projects" link='/#projects' />
        <Button text="Contact" link='/#contact'/>
        <Button text="Resume" second={true} link='/muhanad.pdf' download />
      </div>
    </div>
  );
};

export default NavBar;
