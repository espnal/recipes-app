import React from "react";
import classes from "./Layout.module.scss";
function Layout({children}){
    return(
    <>
    <div className={classes.container}>
        <h1>This is header</h1>
        {children}
    </div>
    
    <h1>This is footer</h1>
    </>)
}
export default Layout;