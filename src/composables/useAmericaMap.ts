import { _ } from "lodash";
import { Classes } from "../constant/interfaces";
import mapUsa from "../constant/usaMap.json";
import { Ref, ref } from "vue";
import svgPanZoom from "svg-pan-zoom";
import SvgElementBuilder from "../helper/svgElementBuilder";

const zoomTool = ref();
const zoomValue = ref(0);

export default function useAmericaMap(svgContainer?: Ref<HTMLElement | null>) {
    
  function createPlayerPlacement(numberOfPlayers: number) {
    mapUsa.states.sort(() => Math.random() - 0.5);
    return mapUsa.states.slice(0, numberOfPlayers).map((state) => state.id);
  }

  function createCardsPlacement() {
    // should randomply place a card in each state
    const cards = [Classes.Militar, Classes.Philosofer, Classes.Scientist];
    // multiply the elements by three
    cards.push(...cards);
    cards.push(...cards);
    const states = _.clone(mapUsa.states);

    states.sort(() => Math.random() - 0.5);
    const sates = states.splice(0, 9);
    return sates.map((state: any, index) => {
      return {
        id: state.id,
        type: cards[index],
      };
    });
  }
  let circleCountPerState = new Map();

  function addElementToState(stateId: string, shape: SvgElementBuilder) {
    // Find the SVG element
    const svgParent = document.querySelector("svg");

    if(!svgParent){
      throw new Error("svg not found");
    }

    // Find the g element that is displaying the map
    const g = svgParent?.querySelector("g")?.querySelector("g");

    // Get the internal element (in this case, the <path>) by stateId
    const internalElement = document.querySelector(`#${stateId} path`);
    
    if(!internalElement){
      throw new Error("internalElement not found");
    }

    if(!g){
      throw new Error("g not found");
    }

    // Get the bounding box of the path
    const bbox = internalElement.getBBox();

    // Calculate the center of the bounding box
    let cx = bbox.x + bbox.width / 2;
    let cy = bbox.y + bbox.height / 2;

    // Calculate the radius of the circle based on the size of the state (10% of the smallest dimension)
    let radius = Math.min(Math.min(bbox.width, bbox.height) * 0.1, 5);
    let circleDiameter = radius * 2;

    // Check if we have already added a circle to this state
    if (circleCountPerState.has(stateId)) {
      let circleCount = circleCountPerState.get(stateId);

      // Calculate the grid position (row and column) based on the circleCount
      let row = Math.floor(circleCount / 3);
      let col = circleCount % 3;

      // Update the position of the new circle to place it in the 3x3 grid
      cx += (col - 1) * circleDiameter; // -1, 0, 1 for column
      cy += (row - 1) * circleDiameter; // -1, 0, 1 for row

      // Update the circle count for this state
      circleCountPerState.set(stateId, circleCount + 1);
    } else {
      circleCountPerState.set(stateId, 1);
    }

    g.appendChild(shape
      .addRadius(radius.toString())
      .addPositionX(cx)
      .addPositionY(cy)
      .build());
  }

  function addPlayerToState(stateId: string, playerCollor: string) {
    deleteAllElements();

    addElementToState(stateId, 
    new SvgElementBuilder()
    .addFill(playerCollor)
    .addStroke('2px solid blue')
    .setType('rect')) 
  }

  function deleteAllElements() {
    const svgParent = document.querySelector("svg");
    // delete all elements rect
    const g = svgParent?.querySelector("g")?.querySelector("g");
    const elements = g?.querySelectorAll("rect");
    elements?.forEach((element) => {
      element.remove();
    }
    );
  }

  function changeZoom(newValue: number){
    if(zoomTool.value){
      zoomTool.value.zoom(newValue/ 10);
    }
  }

  if(svgContainer){
    zoomTool.value = svgPanZoom(svgContainer.value ?? '#usa-map', {
      controlIconsEnabled: false,
      zoomEnabled: true,
      panEnabled: true,
      dblClickZoomEnabled: false,
      fit: true,
      center: true
    });
    zoomValue.value = zoomTool.value.getZoom() * 10;
  }
    // panZoomInstance.value.center();

  return { createPlayerPlacement, 
    createCardsPlacement, 
    addPlayerToState,
    zoomTool, 
    changeZoom,
    zoomValue };
}
