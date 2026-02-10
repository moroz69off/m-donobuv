"use strict";
// mnemoschema
const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight
const _ALL = document.getElementById("__all");

const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');


window.addEventListener('resize', function() {
    console.log('Window resized!');
    // Perform actions here, like adjusting layouts or recalculating sizes
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`New size: ${width}px x ${height}px`);

	canvas.width = width;
	canvas.height = height;

});



console.log("context: ", context.globalAlpha);
console.log("canwas width: ", canvas.width);
console.log("pageWidth: ", pageWidth);
console.log("pageHeight", pageHeight);
