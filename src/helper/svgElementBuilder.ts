// create a builder class to create element NS
export default class SvgElementBuilder{
  positionY: string;
  positionX: string;
  radius: string;
  fill: string;
  stroke: string;
  strokeWidth: string;
  type: string;

  constructor(){
    this.positionY = "0";
    this.positionX = "0";
    this.radius = "0";
    this.fill = "none";
    this.stroke = "none";
    this.strokeWidth = "0";
    this.type = 'circle';
  }

  addPositionY(size: string){
    this.positionY = size;
    return this;
  }
  addPositionX(size: string){
    this.positionX = size;
    return this;
  }
  addRadius(size: string){
    this.radius = size;
    return this;
  }
  addFill(color: string){
    this.fill = color;
    return this;
  }
  addStroke(color: string){
    this.stroke = color;
    return this;
  }
  addStrokeWidth(size: string){
    this.strokeWidth = size;
    return this;
  }
  setType(type: 'rect' | 'circle' ){
    this.type = type;
    return this;
  }

  build(){
    const circleElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      this.type
    );
    if(this.type === 'rect'){
      circleElement.setAttribute("height", this.radius*1.75);
      circleElement.setAttribute("width", this.radius*1.75);
      circleElement.setAttribute("y", this.positionY);
      circleElement.setAttribute("x", this.positionX);
    }
    else{
      circleElement.setAttribute("cy", this.positionY);
      circleElement.setAttribute("cx", this.positionX);
      circleElement.setAttribute("r", this.radius);
    }
    circleElement.setAttribute("fill", this.fill);
    circleElement.setAttribute("stroke", this.stroke);
    circleElement.setAttribute("stroke-width", this.strokeWidth);
    return circleElement;
  }
}