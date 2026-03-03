"use strict";

// mnemoschema

const _ALL = document.getElementById("__all");

const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');


window.addEventListener('resize', function() {
    const width = document.documentElement.scrollWidth;
    const height = document.documentElement.scrollHeight;
	canvas.width = width;
	canvas.height = height;
	console.log(width);
	console.log(height);
});

