import Link from "next/link";
const Button = ({ text, second ,link}) => {
  return (
    <Link href={link||"#"}>
    <button
      className={
        !second
          ? "min-w-[88px] h-[40px] px-3 rounded-4xl font-semibold hover:bg-[#DBE8F2]"
          : "min-w-[88px] h-[40px] px-3 rounded-4xl font-semibold bg-[#DBE8F2] hover:bg-[#98b4ca]"
      }
    >
      {text}
    </button>
    </Link>
  );
};

export default Button;
