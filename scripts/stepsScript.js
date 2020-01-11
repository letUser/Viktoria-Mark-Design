"use strict"

let stpbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbrdr1");

let stpbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbrdr2");

let stpbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbrdr3");

stpbl1.onmouseover = () =>
	stpbrdr1.style.borderBottom = "3px solid white";

stpbl1.onmouseout = () =>
	stpbrdr1.style.borderBottom = "3px solid black";

stpbl2.onmouseover = () =>
	stpbrdr2.style.borderBottom = "3px solid white";

stpbl2.onmouseout = () =>
	stpbrdr2.style.borderBottom = "3px solid black";

stpbl3.onmouseover = () =>
	stpbrdr3.style.borderBottom = "3px solid white";

stpbl3.onmouseout = () =>
	stpbrdr3.style.borderBottom = "3px solid black";