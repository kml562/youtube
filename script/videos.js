import { navbar } from "../comonent/nav.js";
import{side} from "../comonent/side.js";

let nav= document.querySelector("#navbarr")
let sidebar= document.getElementById("sidedata")

nav.innerHTML=navbar();
sidebar.innerHTML=side();