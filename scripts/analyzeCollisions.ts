import { KRAKOW_BUILDINGS } from '../src/data/krakowBuildings';
import { KRAKOW_STREETS, generateKrakowProps, KRAKOW_PARKS } from '../src/data/krakowMap';
import { Point } from '../src/types/game';

function pointInPoly(p: Point, poly: Point[]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x, yi = poly[i].y;
    const xj = poly[j].x, yj = poly[j].y;
    const intersect = ((yi > p.y) !== (yj > p.y)) &&
      (p.x < (xj - xi) * (p.y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function doLinesIntersect(p1: Point, p2: Point, p3: Point, p4: Point): boolean {
  function ccw(A: Point, B: Point, C: Point) {
    return (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x);
  }
  return (ccw(p1, p3, p4) !== ccw(p2, p3, p4)) && (ccw(p1, p2, p3) !== ccw(p1, p2, p4));
}

function polygonsOverlap(poly1: Point[], poly2: Point[]): boolean {
  // Check if any edge intersects
  for (let i = 0; i < poly1.length; i++) {
    const a1 = poly1[i];
    const a2 = poly1[(i + 1) % poly1.length];
    for (let j = 0; j < poly2.length; j++) {
      const b1 = poly2[j];
      const b2 = poly2[(j + 1) % poly2.length];
      if (doLinesIntersect(a1, a2, b1, b2)) return true;
    }
  }
  // Check if poly1 inside poly2 or vice versa
  if (pointInPoly(poly1[0], poly2)) return true;
  if (pointInPoly(poly2[0], poly1)) return true;
  return false;
}

function distToSegmentSquared(p: Point, v: Point, w: Point) {
  const l2 = (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
  if (l2 === 0) return (p.x - v.x) * (p.x - v.x) + (p.y - v.y) * (p.y - v.y);
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return (p.x - (v.x + t * (w.x - v.x))) * (p.x - (v.x + t * (w.x - v.x))) +
         (p.y - (v.y + t * (w.y - v.y))) * (p.y - (v.y + t * (w.y - v.y)));
}

console.log('=== ANALYZING COLLISION REPORT ===');
console.log(`Total Buildings: ${KRAKOW_BUILDINGS.length}`);

// 1. Building vs Building Overlaps
const buildingCollisions: string[] = [];
for (let i = 0; i < KRAKOW_BUILDINGS.length; i++) {
  const b1 = KRAKOW_BUILDINGS[i];
  for (let j = i + 1; j < KRAKOW_BUILDINGS.length; j++) {
    const b2 = KRAKOW_BUILDINGS[j];
    if (polygonsOverlap(b1.polygon, b2.polygon)) {
      buildingCollisions.push(`Building Overlap: [${b1.id} - ${b1.address || b1.name}] with [${b2.id} - ${b2.address || b2.name}]`);
    }
  }
}
console.log(`Building vs Building Collisions Found: ${buildingCollisions.length}`);
buildingCollisions.forEach(c => console.log('  ', c));


// 2. Props (Trees, Lamps, Benches) inside Buildings
const props = generateKrakowProps();
console.log(`Total Props: ${props.length}`);

const propsInBuildings: string[] = [];
for (const prop of props) {
  for (const b of KRAKOW_BUILDINGS) {
    if (pointInPoly(prop, b.polygon)) {
      propsInBuildings.push(`Prop [${prop.type} ${prop.id}] at (${prop.x}, ${prop.y}) INSIDE building [${b.id} - ${b.address || b.name}]`);
      break;
    }
    // Also check if circle overlaps polygon
    const radius = prop.radius || (prop.w ? Math.max(prop.w, prop.h || 0) / 2 : 10);
    // test vertices distance
    let near = false;
    for (let k = 0; k < b.polygon.length; k++) {
      const p1 = b.polygon[k];
      const p2 = b.polygon[(k + 1) % b.polygon.length];
      if (distToSegmentSquared(prop, p1, p2) < (radius * 0.75) * (radius * 0.75)) {
        near = true;
        break;
      }
    }
    if (near && prop.type === 'tree') {
      propsInBuildings.push(`Tree [${prop.id}] canopy overlaps wall of [${b.id} - ${b.address || b.name}]`);
      break;
    }
  }
}
console.log(`Props Inside/Overlapping Buildings: ${propsInBuildings.length}`);
propsInBuildings.slice(0, 25).forEach(c => console.log('  ', c));
if (propsInBuildings.length > 25) {
  console.log(`  ... and ${propsInBuildings.length - 25} more`);
}

// 3. Buildings vs Streets
const buildingStreetCollisions: string[] = [];
for (const st of KRAKOW_STREETS) {
  const halfRoad = st.width / 2;
  for (let s = 0; s < st.path.length - 1; s++) {
    const p1 = st.path[s];
    const p2 = st.path[s + 1];
    for (const b of KRAKOW_BUILDINGS) {
      // Check if street segment penetrates building polygon
      let penetrates = false;
      for (let k = 0; k < b.polygon.length; k++) {
        const bp1 = b.polygon[k];
        const bp2 = b.polygon[(k + 1) % b.polygon.length];
        if (doLinesIntersect(p1, p2, bp1, bp2)) {
          penetrates = true;
          break;
        }
      }
      if (pointInPoly(p1, b.polygon) || pointInPoly(p2, b.polygon)) {
        penetrates = true;
      }
      if (penetrates) {
        buildingStreetCollisions.push(`Street [${st.name}] intersects building [${b.id} - ${b.address || b.name}]`);
      }
    }
  }
}
console.log(`Street vs Building Intersections: ${buildingStreetCollisions.length}`);
buildingStreetCollisions.slice(0, 20).forEach(c => console.log('  ', c));
