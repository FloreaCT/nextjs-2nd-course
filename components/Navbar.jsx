"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav>
      {pathname === "/login/loginadmin" ? (
        <ul className="login-menu border bg-green-300">
          <li>
            <Link href="/login/loginadmin">Login Admin</Link>
          </li>
        </ul>
      ) : (
        <ul className="login-menu border bg-green-300">
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/loginuser">Login User</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
