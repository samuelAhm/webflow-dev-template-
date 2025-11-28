import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function createOrganicFloatingElements(
  section: HTMLElement,
  selector: string,
  options = {
    baseDistance: 100, // Base movement distance
    durationRange: [8, 15], // Min/max duration in seconds
    axisBias: 0.6, // 0-1 value favoring primary axes (0.5 = equal)
  }
) {
  if (!section) return;

  const floatElements = section.querySelectorAll(selector);
  if (!floatElements.length) return;

  // Enable 3D space
  gsap.set(section, { perspective: 1000 });

  floatElements.forEach((el) => {
    gsap.set(el, {
      transformStyle: 'preserve-3d',
      willChange: 'transform',
    });

    createRandomPathAnimation(el as HTMLElement, options);
  });
}

function createRandomPathAnimation(element: HTMLElement, options: any) {
  const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
  const segments = Math.floor(gsap.utils.random(3, 6)); // Random number of movement segments

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: gsap.utils.random(0.5, 2),
    paused: true,
    yoyo: true,
  });

  let currentX = 0;
  let currentY = 0;
  let currentZ = 0;

  // Create random movement segments
  for (let i = 0; i < segments; i++) {
    const segmentDuration = gsap.utils.random(...options.durationRange) / speed;

    // Generate random direction with some axis biasing
    const direction = getRandomDirection(options.axisBias);

    // Calculate movement amounts with some randomness
    const movement = {
      x: direction.x * options.baseDistance * speed * gsap.utils.random(0.8, 1.2),
      y: direction.y * options.baseDistance * speed * gsap.utils.random(0.8, 1.2),
      z: direction.z * options.baseDistance * speed * gsap.utils.random(0.5, 0.8),
    };

    // Add rotation that changes slightly each segment
    const rotation = {
      x: gsap.utils.random(-5, 5),
      y: gsap.utils.random(-5, 5),
      z: gsap.utils.random(-2, 2),
    };

    timeline.to(
      element,
      {
        x: currentX + movement.x,
        y: currentY + movement.y,
        z: currentZ + movement.z,
        rotationX: `+=${rotation.x}`,
        rotationY: `+=${rotation.y}`,
        rotationZ: `+=${rotation.z}`,
        duration: segmentDuration,
        ease: 'sine.inOut',
        //yoyo: true,
      },
      i === 0 ? 0 : '>'
    ); // Chain segments after each other

    // Update current position
    currentX += movement.x;
    currentY += movement.y;
    currentZ += movement.z;
  }

  // Randomize the timeline's progress to start at different points
  timeline.progress(Math.random());

  // Set up scroll trigger
  ScrollTrigger.create({
    trigger: element.closest('section') || element.parentElement,
    start: 'top 80%',
    onEnter: () => timeline.play(),
    onEnterBack: () => timeline.play(),
    onLeave: () => timeline.pause(),
    onLeaveBack: () => timeline.pause(),
  });
}

/**
 * Generates random direction vector with bias toward primary axes
 */
function getRandomDirection(axisBias: number) {
  // Start with completely random direction
  let x = gsap.utils.random(-1, 1);
  let y = gsap.utils.random(-1, 1);
  const z = gsap.utils.random(-0.5, 0.5);

  // Apply bias toward primary axes
  if (Math.random() < axisBias) {
    if (Math.random() > 0.5) {
      x *= 3; // Favor x-axis
      y *= 0.3;
    } else {
      y *= 3; // Favor y-axis
      x *= 0.3;
    }
  }

  // Normalize vector
  const length = Math.sqrt(x * x + y * y + z * z);
  return {
    x: x / length,
    y: y / length,
    z: z / length,
  };
}

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
//
// type Bounds = {
//   minX: number;
//   maxX: number;
//   minY: number;
//   maxY: number;
//   minZ: number;
//   maxZ: number;
// };
//
// export function createBoundedFloatingElements(
//   section: HTMLElement,
//   selector: string,
//   options = {
//     padding: 50, // Minimum distance from edges
//     baseDistance: 80, // Base movement distance
//     durationRange: [6, 12], // Min/max duration in seconds
//     axisBias: 0.7, // 0-1 value favoring primary axes
//   }
// ) {
//   if (!section) return;
//
//   const floatElements = section.querySelectorAll(selector);
//   if (!floatElements.length) return;
//
//   // Calculate container bounds with padding
//   const containerRect = section.getBoundingClientRect();
//   const bounds: Bounds = {
//     minX: options.padding,
//     maxX: containerRect.width - options.padding,
//     minY: options.padding,
//     maxY: containerRect.height - options.padding,
//     minZ: -100,
//     maxZ: 100,
//   };
//
//   // Enable 3D space
//   gsap.set(section, { perspective: 1000 });
//
//   floatElements.forEach((el) => {
//     const element = el as HTMLElement;
//     gsap.set(element, {
//       transformStyle: 'preserve-3d',
//       willChange: 'transform',
//     });
//
//     // Initialize random starting position within bounds
//     const startX = gsap.utils.random(bounds.minX, bounds.maxX);
//     const startY = gsap.utils.random(bounds.minY, bounds.maxY);
//     gsap.set(element, { x: startX, y: startY });
//
//     createBoundedAnimation(element, bounds, options);
//   });
// }
//
// function createBoundedAnimation(element: HTMLElement, bounds: Bounds, options: any) {
//   const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
//   const timeline = gsap.timeline({
//     repeat: -1,
//     repeatDelay: gsap.utils.random(0.5, 2),
//     paused: true,
//     yoyo: true,
//     onRepeat: () => {
//       // Adjust path if we're getting too close to boundaries
//       adjustPathForBounds(timeline, element, bounds, options);
//     },
//   });
//
//   // Create initial random path
//   generatePathSegment(timeline, element, bounds, options, speed, true);
//
//   // Set up scroll trigger
//   ScrollTrigger.create({
//     trigger: element.closest('section') || element.parentElement,
//     start: 'top 80%',
//     onEnter: () => timeline.play(),
//     onEnterBack: () => timeline.play(),
//     onLeave: () => timeline.pause(),
//     onLeaveBack: () => timeline.pause(),
//   });
// }
//
// function generatePathSegment(
//   timeline: gsap.core.Timeline,
//   element: HTMLElement,
//   bounds: Bounds,
//   options: any,
//   speed: number,
//   initial = false
// ) {
//   const currentX = gsap.getProperty(element, 'x') as number;
//   const currentY = gsap.getProperty(element, 'y') as number;
//   const currentZ = (gsap.getProperty(element, 'z') as number) || 0;
//
//   // Calculate available movement space
//   const availableSpace = {
//     left: currentX - bounds.minX,
//     right: bounds.maxX - currentX,
//     up: currentY - bounds.minY,
//     down: bounds.maxY - currentY,
//   };
//
//   // Generate direction weighted by available space
//   const direction = getBoundedDirection(availableSpace, options.axisBias);
//
//   // Calculate movement amounts constrained by boundaries
//   const movement = {
//     x: direction.x * options.baseDistance * speed * gsap.utils.random(0.7, 1.3),
//     y: direction.y * options.baseDistance * speed * gsap.utils.random(0.7, 1.3),
//     z: direction.z * options.baseDistance * speed * gsap.utils.random(0.3, 0.6),
//   };
//
//   // Ensure we don't exceed boundaries
//   const constrained = constrainMovement(currentX, currentY, movement, bounds);
//
//   const duration = gsap.utils.random(...options.durationRange) / speed;
//
//   // Add rotation
//   const rotation = {
//     x: gsap.utils.random(-5, 5),
//     y: gsap.utils.random(-5, 5),
//     z: gsap.utils.random(-2, 2),
//   };
//
//   if (initial) {
//     timeline.to(element, {
//       x: `+=${constrained.x}`,
//       y: `+=${constrained.y}`,
//       z: `+=${constrained.z}`,
//       rotationX: `+=${rotation.x}`,
//       rotationY: `+=${rotation.y}`,
//       rotationZ: `+=${rotation.z}`,
//       duration: duration,
//       ease: 'sine.inOut',
//     });
//   } else {
//     timeline.to(
//       element,
//       {
//         x: `+=${constrained.x}`,
//         y: `+=${constrained.y}`,
//         z: `+=${constrained.z}`,
//         rotationX: `+=${rotation.x}`,
//         rotationY: `+=${rotation.y}`,
//         rotationZ: `+=${rotation.z}`,
//         duration: duration,
//         ease: 'sine.inOut',
//       },
//       '>'
//     );
//   }
// }
//
// function adjustPathForBounds(
//   timeline: gsap.core.Timeline,
//   element: HTMLElement,
//   bounds: Bounds,
//   options: any
// ) {
//   const currentX = gsap.getProperty(element, 'x') as number;
//   const currentY = gsap.getProperty(element, 'y') as number;
//
//   // Check if we're too close to any boundary
//   const threshold = options.padding * 1.5;
//   const nearBoundary =
//     currentX < bounds.minX + threshold ||
//     currentX > bounds.maxX - threshold ||
//     currentY < bounds.minY + threshold ||
//     currentY > bounds.maxY - threshold;
//
//   if (nearBoundary) {
//     // Clear future animations and generate new path
//     timeline.clear();
//     const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
//     generatePathSegment(timeline, element, bounds, options, speed);
//   }
// }
//
// function getBoundedDirection(availableSpace: any, axisBias: number) {
//   // Weight directions by available space
//   const weights = {
//     left: Math.max(0.1, availableSpace.left),
//     right: Math.max(0.1, availableSpace.right),
//     up: Math.max(0.1, availableSpace.up),
//     down: Math.max(0.1, availableSpace.down),
//   };
//
//   // Random direction with bias toward available space
//   let x = gsap.utils.random(-weights.left, weights.right);
//   let y = gsap.utils.random(-weights.up, weights.down);
//   let z = gsap.utils.random(-0.5, 0.5);
//
//   // Apply axis bias
//   if (Math.random() < axisBias) {
//     if (Math.random() > 0.5) {
//       x *= 2;
//       y *= 0.5;
//     } else {
//       y *= 2;
//       x *= 0.5;
//     }
//   }
//
//   // Normalize
//   const length = Math.sqrt(x * x + y * y + z * z);
//   return {
//     x: x / length,
//     y: y / length,
//     z: z / length,
//   };
// }
//
// function constrainMovement(currentX: number, currentY: number, movement: any, bounds: Bounds) {
//   const newX = currentX + movement.x;
//   const newY = currentY + movement.y;
//
//   // Adjust if we'd exceed boundaries
//   if (newX < bounds.minX) movement.x = bounds.minX - currentX;
//   if (newX > bounds.maxX) movement.x = bounds.maxX - currentX;
//   if (newY < bounds.minY) movement.y = bounds.minY - currentY;
//   if (newY > bounds.maxY) movement.y = bounds.maxY - currentY;
//
//   return movement;
// }