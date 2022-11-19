export const zoomAddOn = (svgImage: SVGElement, svgContainer: HTMLDivElement) => {
  console.log("zoomAddOn", svgImage.getAttribute("viewBox"));
  let viewBox = { x: 0, y: 0, w: svgImage.clientWidth, h: svgImage.clientHeight };
  // added
  const initialViewBox = svgImage.getAttribute("viewBox");
  if (initialViewBox) {
    const [x, y, width, height] = initialViewBox.split(" ");
    viewBox = { x: Number(x), y: Number(y), w: Number(width), h: Number(height) };
  }
  // 
  svgImage.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
  const svgSize = { w: svgImage.clientWidth, h: svgImage.clientHeight };
  let isPanning = false;
  let startPoint = { x: 0, y: 0 };
  let endPoint = { x: 0, y: 0 };
  let scale = 1;

  svgContainer.onwheel = function (e) {
    e.preventDefault();
    let w = viewBox.w;
    let h = viewBox.h;
    let mx = e.offsetX; //mouse x
    let my = e.offsetY;
    let dw = w * Math.sign(e.deltaY) * 0.05;
    let dh = h * Math.sign(e.deltaY) * 0.05;
    let dx = (dw * mx) / svgSize.w;
    let dy = (dh * my) / svgSize.h;
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
      let dx = (startPoint.x - endPoint.x) / scale;
      let dy = (startPoint.y - endPoint.y) / scale;
      let movedViewBox = { x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w, h: viewBox.h };

      svgImage.setAttribute(
        "viewBox",
        `${movedViewBox.x} ${movedViewBox.y} ${movedViewBox.w} ${movedViewBox.h}`,
      );
    }
  };

  svgContainer.onmouseup = function (e) {
    if (isPanning) {
      console.log("before", svgImage.getAttribute("viewBox"));
      endPoint = { x: e.x, y: e.y };
      let dx = (startPoint.x - endPoint.x) / scale;
      let dy = (startPoint.y - endPoint.y) / scale;

      viewBox = { x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w, h: viewBox.h };

      svgImage.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
      isPanning = false;
      console.log("after", svgImage.getAttribute("viewBox"));
    }
  };

  svgContainer.onmouseleave = function (e) {
    isPanning = false;
  };
};
