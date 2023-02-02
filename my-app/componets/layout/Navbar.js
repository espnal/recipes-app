import Link from "next/link";
import Image from "next/image";
import React from "react";
import classes from "./Navbar.module.scss"
function Navbar() {
return (
    <nav>
        <Link href="/">
            <a class={classes.logo}>
                <Image src={Logo}>

                </Image>
            </a>
        </Link>
    </nav>
)
}
export default Navbar;