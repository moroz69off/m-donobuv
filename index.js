"use strict";

// mnemoschema

const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight
const _ALL = document.getElementById("__all");

const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');


window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
	canvas.width = width - 100;
	canvas.height = height - 150;

});

