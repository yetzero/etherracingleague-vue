export const courseDetails = {
  'kaaru-desert': {
    name: 'Kaaru Desert',
    planet: 'Kaaru',
    image: 'kaaru-desert.webp',
    backgroundImage: 'kaaru-mining-facilities.webp',
    content: `
      <p>Located on Blu Zaremi's home planet of Kaaru, this course takes racers through the treacherous desert landscape, full of sand dunes, rocky outcroppings, and sudden sandstorms. Racers must navigate the ever-shifting sands and avoid the occasional native wildlife, such as the sand-skimming Drakar Beetle, ghastly Devourer and massive Earth Eater. The track also passes by small oases, offering brief respite from the harsh environment.</p>
    `,
    prevCourse: null,
    nextCourse: 'korravan-circuit'
  },
  'korravan-circuit': {
    name: 'Korravan Circuit',
    planet: 'Korravan',
    image: 'korravan-circuit.webp',
    backgroundImage: 'korravan-concept-2.webp',
    content: `
      <p>Located in the forest planet of Korravan. It starts with the high-speed loop through the Whispering Canopies, requiring racers to navigate through the natural tree-branch pathways. The race would then transition into more open track across the Lustrous Meadows, offering fewer obstacles but also less cover. Finally, racers would face a challenging course that runs along the Serpentine Rivers, featuring sudden drops and sharp turns.</p>
    `,
    prevCourse: 'kaaru-desert',
    nextCourse: 'solarae-ancient-temple'
  },
  'solarae-ancient-temple': {
    name: 'Solarae Ancient Temple',
    planet: 'Solarae',
    image: 'solarae-ancient-temple.webp',
    backgroundImage: 'solarae-temple.webp',
    content: `
      <p>On the mysterious jungle-covered planet of Solarae, racers find themselves speeding through the ruins of an ancient temple. The track leads pilots through crumbling stone corridors adorned with intricate carvings and overgrown with vines, as well as open courtyards surrounded by towering statues. Racers must watch out for hidden traps and pitfalls, as well as the occasional native predator lurking in the shadows.</p>
    `,
    prevCourse: 'korravan-circuit',
    nextCourse: 'valendor-robot-factory'
  },
  'valendor-robot-factory': {
    name: 'Valendor Robot Factory',
    planet: 'Valendor',
    image: 'valendor-robot-factory.webp',
    backgroundImage: 'valendor-factory.webp',
    content: `
      <p>Set on the technologically advanced planet of Valendor, this course takes racers through a sprawling, active robot factory. Pilots must dodge massive assembly lines, moving conveyor belts, and enormous robotic arms as they weave their way through the course. The track also features sections where racers must carefully navigate through narrow corridors filled with sparks and molten metal.</p>
    `,
    prevCourse: 'solarae-ancient-temple',
    nextCourse: 'xanara-waterways'
  },
  'xanara-waterways': {
    name: 'Xanara Waterways',
    planet: 'Xanara',
    image: 'xanara-waterways.webp',
    backgroundImage: 'xanara-concept-2.webp',
    content: `
      <p>In the water planet of Xanara, racers plunge into a high-speed aquatic course that winds through the planet's labyrinthine waterways. Surrounded by vibrant coral reefs and teeming with alien marine life, pilots must navigate through tight tunnels and around massive underwater structures. Powerful underwater currents and schools of bioluminescent fish add an extra layer of challenge to the race.</p>
    `,
    prevCourse: 'valendor-robot-factory',
    nextCourse: 'mytheann-nebula'
  },
  'mytheann-nebula': {
    name: 'Mytheann Nebula',
    planet: 'Mytheann',
    image: 'mytheann-nebula.webp',
    backgroundImage: 'mytheann-nebula.webp',
    content: `
      <p>Set in the vast expanse of space surrounding the hidden planet of Mytheann, this course takes racers through a breathtaking, multi-colored nebula. Pilots must weave their way through asteroid fields and pockets of cosmic gas, while contending with the gravitational anomalies that are unique to the region. The constantly shifting colors and patterns of the nebula make for a mesmerizing and challenging race.</p>
    `,
    prevCourse: 'xanara-waterways',
    nextCourse: 'oryxxon-skyway'
  },
  'oryxxon-skyway': {
    name: 'Oryxxon Skyway',
    planet: 'Oryxxon',
    image: 'oryxxon-skyway.webp',
    backgroundImage: 'oryxxon-concept-5.webp',
    content: `
      <p>High above the cloud-covered planet of Oryxxon, racers take to the skies in this exhilarating aerial course. The track consists of a series of floating platforms, bridges, and archways that connect the planet's towering sky-islands. Pilots must navigate strong winds, sudden gusts, and lightning storms, all while taking care not to plummet from the sky.</p>
    `,
    prevCourse: 'mytheann-nebula',
    nextCourse: 'quinox-prime-battleground'
  },
  'quinox-prime-battleground': {
    name: 'Quinox Prime Battleground',
    planet: 'Quinox Prime',
    image: 'quinox-prime-battleground.webp',
    backgroundImage: 'quinox-prime-battlefield.webp',
    content: `
      <p>This course is set in the war-torn landscape of Quinox Prime, where remnants of past battles litter the track. Racers speed through abandoned military installations, dodge wreckage from fallen mecha, and navigate around enormous craters caused by orbital bombardments. The atmosphere is tense and thrilling, as racers must be alert for any hidden hazards or unexploded ordnance that could jeopardize their chances at victory.</p>
    `,
    prevCourse: 'oryxxon-skyway',
    nextCourse: 'ellyndor-gauntlet'
  },
  'ellyndor-gauntlet': {
    name: 'Ellyndor Gauntlet',
    planet: 'Ellyndor',
    image: 'ellyndor-gauntlet.webp',
    backgroundImage: 'ellyndor-gauntlet.webp',
    content: `
      <p>This course is a thrilling, high-speed race through Ellyndor's vast network of mining tunnels. Racers need to navigate through tight twists and turns, avoiding stalactites and stalagmites, while also dealing with the occasional subterranean creature. The course is lit by the natural glow of various precious gemstones embedded in the tunnel walls, creating a dazzling, sparkling spectacle. The final stretch of the race involves a daring dash up one of Ellyndor's towering cliffs, with the finish line located at the peak, offering a breathtaking view of the planet's rocky landscape.</p>
    `,
    prevCourse: 'quinox-prime-battleground',
    nextCourse: 'veltora-volcano'
  },
  'veltora-volcano': {
    name: 'Veltora Volcano',
    planet: 'Veltora',
    image: 'veltora-volcano.webp',
    backgroundImage: 'veltora-volcano.webp',
    content: `
      <p>This perilous course on the volcanic planet of Veltora requires racers to navigate through a landscape dominated by lava flows, active geysers, and towering volcanic peaks. The intense heat and unpredictable eruptions test the limits of the vehicles's heat resistance, while pilots must avoid molten rocks and plumes of toxic gas as they race to the finish.</p>
    `,
    prevCourse: 'ellyndor-gauntlet',
    nextCourse: null
  }
}
