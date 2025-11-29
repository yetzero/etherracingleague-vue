export const courseDetails = {
  'kaaru-desert': {
    name: 'Kaaru Desert',
    planet: 'Kaaru',
    difficulty: 'Medium',
    image: 'kaaru-desert.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>The Kaaru Desert track winds through Blu Zaremi's home planet, featuring vast expanses of golden sand dunes, rocky outcroppings, and sudden sandstorms that can reduce visibility to near zero.</p>
      <p>Racers must navigate treacherous terrain while avoiding the indigenous wildlife that roams the desert. The track is known for its long straightaways interrupted by sharp turns around ancient rock formations.</p>
    `,
    prevCourse: null,
    nextCourse: 'korravan-circuit'
  },
  'korravan-circuit': {
    name: 'Korravan Circuit',
    planet: 'Korravan',
    difficulty: 'Hard',
    image: 'korravan-circuit.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>The war-torn world of Korravan provides a challenging circuit through bombed-out cities and military installations. The track weaves through crumbling infrastructure and active combat zones.</p>
      <p>Debris and unpredictable hazards make this one of the most dangerous courses in the league. Only the bravest racers dare to compete here.</p>
    `,
    prevCourse: 'kaaru-desert',
    nextCourse: 'solarae-ancient-temple'
  },
  'solarae-ancient-temple': {
    name: 'Solarae Ancient Temple',
    planet: 'Solarae',
    difficulty: 'Medium',
    image: 'solarae-ancient-temple.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>This sacred course winds through the ancient temples of Solarae, where spiritual energy infuses every turn. The golden architecture creates a maze of corridors and open plazas.</p>
      <p>Racers must respect the ancient grounds while pushing their bikes to the limit through narrow temple passages and across suspended bridges.</p>
    `,
    prevCourse: 'korravan-circuit',
    nextCourse: 'valendor-robot-factory'
  },
  'valendor-robot-factory': {
    name: 'Valendor Robot Factory',
    planet: 'Valendor',
    difficulty: 'Hard',
    image: 'valendor-robot-factory.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>The highly automated factories of Valendor create a unique racing environment filled with moving platforms, robotic arms, and assembly line hazards.</p>
      <p>Timing is everything on this track, as racers must synchronize their movements with the factory machinery to avoid collision.</p>
    `,
    prevCourse: 'solarae-ancient-temple',
    nextCourse: 'xanara-waterways'
  },
  'xanara-waterways': {
    name: 'Xanara Waterways',
    planet: 'Xanara',
    difficulty: 'Medium',
    image: 'xanara-waterways.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>The aquatic world of Xanara offers a spectacular course through underwater tunnels and floating platforms. Ether bikes are specially modified to handle the unique conditions.</p>
      <p>The bioluminescent marine life creates a stunning visual backdrop as racers navigate through coral structures and tidal currents.</p>
    `,
    prevCourse: 'valendor-robot-factory',
    nextCourse: 'mytheann-nebula'
  },
  'mytheann-nebula': {
    name: 'Mytheann Nebula',
    planet: 'Mytheann',
    difficulty: 'Expert',
    image: 'mytheann-nebula.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>Racing through the cosmic clouds of the Mytheann Nebula is a mystical experience. The track follows energy pathways through colorful gas clouds and around celestial bodies.</p>
      <p>The unpredictable nature of cosmic energies can affect bike systems, requiring racers to adapt on the fly to changing conditions.</p>
    `,
    prevCourse: 'xanara-waterways',
    nextCourse: 'oryxxon-skyway'
  },
  'oryxxon-skyway': {
    name: 'Oryxxon Skyway',
    planet: 'Oryxxon',
    difficulty: 'Hard',
    image: 'oryxxon-skyway.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>The floating cities of Oryxxon provide an aerial racing experience like no other. The track connects multiple sky platforms through a series of jumps and elevated pathways.</p>
      <p>Strong winds and the ever-present danger of falling make this course a true test of skill and nerve.</p>
    `,
    prevCourse: 'mytheann-nebula',
    nextCourse: 'quinox-prime-battleground'
  },
  'quinox-prime-battleground': {
    name: 'Quinox Prime Battleground',
    planet: 'Quinox Prime',
    difficulty: 'Expert',
    image: 'quinox-prime-battleground.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>This military-grade course is set on the training grounds of Quinox Prime. The track features tactical obstacles, simulated combat zones, and precision-demanding sections.</p>
      <p>Originally designed for military training, it has been adapted for racing but retains its challenging and unforgiving nature.</p>
    `,
    prevCourse: 'oryxxon-skyway',
    nextCourse: 'ellyndor-gauntlet'
  },
  'ellyndor-gauntlet': {
    name: 'Ellyndor Gauntlet',
    planet: 'Ellyndor',
    difficulty: 'Medium',
    image: 'ellyndor-gauntlet.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>The ancient forests of Ellyndor create a natural gauntlet through towering trees and dense undergrowth. The track follows forest paths that twist and turn unpredictably.</p>
      <p>Natural obstacles like fallen logs, low-hanging branches, and wildlife crossings keep racers on their toes throughout the course.</p>
    `,
    prevCourse: 'quinox-prime-battleground',
    nextCourse: 'veltora-volcano'
  },
  'veltora-volcano': {
    name: 'Veltora Volcano',
    planet: 'Veltora',
    difficulty: 'Expert',
    image: 'veltora-volcano.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>The volcanic world of Veltora provides the most extreme racing conditions in the league. The track weaves around active lava flows, through ash clouds, and over unstable volcanic terrain.</p>
      <p>Heat-resistant modifications are mandatory for bikes competing here, and racers must constantly monitor their thermal readings.</p>
    `,
    prevCourse: 'ellyndor-gauntlet',
    nextCourse: null
  }
}
