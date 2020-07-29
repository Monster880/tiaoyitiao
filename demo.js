var canvas = document.getElementById("myCanvas");
var gl = canvas.getContext("webgl");

var program = gl.createProgram();

var VSHADER_SOURCE, FSHADER_SOURCE;

VSHADER_SOURCE =
  "" + "void main(){\n" + "gl_Position = a_Position;\n" + "}\n" + "";

var vertexShader, fragmentShader;

function createShader(gl, sourceCode, type) {
  // create shader
  var shader = gl.createShader(type);
  gl.sourceCode(shader, sourceCode);
  gl.compileShader(shader);
  return shader;
}

// define vertex shader
vertexShader = createShader(gl, VSHADER_SOURCE, gl.VERTEX_SHADER);
// define fragment shader
fragmentShader = createShader(gl, FSHADER_SOURCE, gl.FRAGMENT_SHADER);

// attach shader to program
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

// link program to context
gl.linkProgram(program);
gl.useProgram(program);
gl.program = program;
