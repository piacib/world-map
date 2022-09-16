export const zoomAddOn = (svgImage: SVGElement, svgContainer: HTMLDivElement) => {
  var viewBox = { x: 0, y: 0, w: svgImage.clientWidth, h: svgImage.clientHeight };
  svgImage.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
  const svgSize = { w: svgImage.clientWidth, h: svgImage.clientHeight };
  var isPanning = false;
  var startPoint = { x: 0, y: 0 };
  var endPoint = { x: 0, y: 0 };
  var scale = 1;

  svgContainer.onwheel = function (e) {
    e.preventDefault();
    var w = viewBox.w;
    var h = viewBox.h;
    var mx = e.offsetX; //mouse x
    var my = e.offsetY;
    var dw = w * Math.sign(e.deltaY) * 0.05;
    var dh = h * Math.sign(e.deltaY) * 0.05;
    var dx = (dw * mx) / svgSize.w;
    var dy = (dh * my) / svgSize.h;
    viewBox = { x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w - dw, h: viewBox.h - dh };
    scale = svgSize.w / viewBox.w;
    svgImage.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
  };

  svgContainer.onmousedown = function (e) {
    isPanning = true;
    startPoint = { x: e.x, y: e.y };
  };

  svgContainer.onmousemove = function (e) {
    if (isPanning) {
      endPoint = { x: e.x, y: e.y };
      var dx = (startPoint.x - endPoint.x) / scale;
      var dy = (startPoint.y - endPoint.y) / scale;
      var movedViewBox = { x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w, h: viewBox.h };
      svgImage.setAttribute(
        "viewBox",
        `${movedViewBox.x} ${movedViewBox.y} ${movedViewBox.w} ${movedViewBox.h}`,
      );
    }
  };

  svgContainer.onmouseup = function (e) {
    if (isPanning) {
      endPoint = { x: e.x, y: e.y };
      var dx = (startPoint.x - endPoint.x) / scale;
      var dy = (startPoint.y - endPoint.y) / scale;
      viewBox = { x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w, h: viewBox.h };
      svgImage.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
      isPanning = false;
    }
  };

  svgContainer.onmouseleave = function (e) {
    isPanning = false;
  };
};
