export const articleTypes = [
  { slug: 'characters', name: 'Characters' },
  { slug: 'creatures', name: 'Creatures' },
  { slug: 'locations', name: 'Locations' },
  { slug: 'organizations', name: 'Organizations' },
  { slug: 'species', name: 'Species' },
  { slug: 'substances', name: 'Substances' },
  { slug: 'technology', name: 'Technology' },
  { slug: 'vehicles', name: 'Vehicles' }
]

// All databank articles with images
export const articles = [
  // Substances
  { slug: 'anarythe', name: 'Anarythe', type: 'substances', image: 'Anarythe.webp' },
  { slug: 'zellenite', name: 'Zellenite', type: 'substances', image: 'Zellenite.webp' },

  // Technology
  { slug: 'artificial-gravity-generator', name: 'Artificial Gravity Generator', type: 'technology', image: 'Artificial-Gravity-Generator.webp' },

  // Locations
  { slug: 'axanel', name: 'Axanel', type: 'locations', image: 'axanel-city.webp' },
  { slug: 'black-fortress', name: 'Black Fortress', type: 'locations', image: 'Fortress-of-Doom.webp' },
  { slug: 'ecliptic-observatory', name: 'Ecliptic Observatory', type: 'locations', image: 'phobetra-ecliptic-observatory-concept.webp' },
  { slug: 'ellyndor', name: 'Ellyndor', type: 'locations', image: 'planet-ellyndor-1.webp' },
  { slug: 'glowstone-caves', name: 'Glowstone Caves', type: 'locations', image: 'glowstone-caves-concept-scaled.webp' },
  { slug: 'kaaru', name: 'Kaaru', type: 'locations', image: 'planet-kaaru.webp' },
  { slug: 'obsidian-peaks', name: 'Obsidian Peaks', type: 'locations', image: 'obsidian-peaks-concept-1.webp' },
  { slug: 'phobetra', name: 'Phobetra', type: 'locations', image: 'phobetra-concept-2-1.webp' },
  { slug: 'pyroclast-plains', name: 'Pyroclast Plains', type: 'locations', image: 'pyroclast-plains-concept.webp' },
  { slug: 'solarae', name: 'Solarae', type: 'locations', image: 'planet-solarae.webp' },
  { slug: 'sulfur-springs', name: 'Sulfur Springs', type: 'locations', image: 'sulfur-springs.webp' },
  { slug: 'the-gemstone-grotto', name: 'The Gemstone Grotto', type: 'locations', image: 'gemstone-grotto.webp' },
  { slug: 'the-moonlit-bazaar', name: 'The Moonlit Bazaar', type: 'locations', image: 'moonlit-bazaar.webp' },
  { slug: 'the-silver-giant', name: 'The Silver Giant', type: 'locations', image: 'silver-giant.webp' },
  { slug: 'tunoun', name: 'Tunoun', type: 'locations', image: 'tunoun-concept.webp' },
  { slug: 'university-of-axanel', name: 'University of Axanel', type: 'locations', image: 'university-of-axanel-concept.webp' },
  { slug: 'valendor', name: 'Valendor', type: 'locations', image: 'planet-valendor.webp' },
  { slug: 'veltora', name: 'Veltora', type: 'locations', image: 'planet-veltora.webp' },
  { slug: 'xanara-academy-of-sciences', name: 'Xanara Academy of Sciences', type: 'locations', image: 'xanara-academy-of-sciences-interior.webp' },
  { slug: 'xanara-royal-palace', name: 'Xanara Royal Palace', type: 'locations', image: 'xanara-royal-palace.webp' },

  // Characters
  { slug: 'buntaku', name: 'Buntaku', type: 'characters', image: 'buntaku-concept.webp' },
  { slug: 'caithea', name: 'Caithea', type: 'characters', image: 'caithea-concept.webp' },
  { slug: 'daerys-lumina', name: 'Daerys Lumina', type: 'characters', image: 'daerys-lumina-concept.webp' },
  { slug: 'deep-mirage', name: 'Deep Mirage', type: 'characters', image: 'deep-mirage-concept.webp' },
  { slug: 'korgu-dsol', name: "Korgu D'Sol", type: 'characters', image: 'korgu-dsol-concept.webp' },
  { slug: 'osmos', name: 'Osmos', type: 'characters', image: 'osmos-concept.webp' },
  { slug: 'qamamonde', name: 'Qamamonde', type: 'characters', image: 'qamamonde-concept.webp' },
  { slug: 'rex-volaris', name: 'Rex Volaris', type: 'characters', image: 'rex-volaris-concept.webp' },
  { slug: 'umon-zephyr', name: 'Umon Zephyr', type: 'characters', image: 'umon-zephyr-concept.webp' },
  { slug: 'yeralia', name: 'Yeralia', type: 'characters', image: 'yeralia-concept.webp' },

  // Creatures
  { slug: 'flamefern', name: 'Flamefern', type: 'creatures', image: 'flamefern-concept.webp' },

  // Organizations
  { slug: 'guardians-of-the-peak', name: 'Guardians of the Peak', type: 'organizations', image: 'guardians-of-the-peak-concept.webp' },
  { slug: 'kaaru-royal-army', name: 'Kaaru Royal Army', type: 'organizations', image: 'kaaru-royal-army-infantry-concept.webp' },
  { slug: 'levian-clan', name: 'Levian Clan', type: 'organizations', image: 'levian-clan-concept-scaled.webp' },
  { slug: 'nomadic-tribes-of-kesh', name: 'Nomadic Tribes of Kesh', type: 'organizations', image: 'nomadic-tribes-of-kesh.webp' },
  { slug: 'phobetra-mining-consortium', name: 'Phobetra Mining Consortium', type: 'organizations', image: 'phobetra-mining-consortium.webp' },
  { slug: 'the-ecosanctum-brotherhood', name: 'The Ecosanctum Brotherhood', type: 'organizations', image: 'ecosanctum-brotherhood.webp' },
  { slug: 'the-galactic-diplomacy-enclave-gde', name: 'The Galactic Diplomacy Enclave (GDE)', type: 'organizations', image: 'galactic-diplomacy-enclave.webp' },
  { slug: 'traviton-guard', name: 'Traviton Guard', type: 'organizations', image: 'traviton-guard.webp' },
  { slug: 'zilvasone-excavation-company', name: 'Zilvasone Excavation Company', type: 'organizations', image: 'zilvasone-excavation-company.webp' },

  // Species
  { slug: 'valendorians', name: 'Valendorians', type: 'species', image: 'valendorians.webp' },

  // Vehicles
  { slug: 'celestial-serenade', name: 'Celestial Serenade', type: 'vehicles', image: 'Celestial-Serenade.webp' },
  { slug: 'ether-bikes', name: 'Ether Bikes', type: 'vehicles', image: 'azure-comet.webp' },
  { slug: 'gravity-jolt', name: 'Gravity Jolt', type: 'vehicles', image: 'Gravity-Jolt.webp' },
  { slug: 'nebula-drifter', name: 'Nebula Drifter', type: 'vehicles', image: 'nebula-drifter-concept.webp' },
  { slug: 'phoenix-flare', name: 'Phoenix Flare', type: 'vehicles', image: 'Phoenix-Flare.webp' }
]
