const legendaryColor = '#DBD709'
const UltraRareColor = '#CA291D'
const veryRareColor = '#D328B2'
const exoticColor = '#4736FF'
const rareColor = '#4B50A7'
const commonColor = '#92B4B4'

export const casesData = {
  weaponCaseData: {
    caseName: 'Weapon case',
    casePrice: 299,
    items: [
      { name: 'm4a1', chance: 15, ratityColor: veryRareColor, price: 1500 },
      { name: 'akm', chance: 30, ratityColor: exoticColor, price: 806 },
      { name: 'ak-74', chance: 50, ratityColor: rareColor, price: 300 },
      { name: 'glock-17', chance: 100, ratityColor: commonColor, price: 100 },
      { name: 'm1a1', chance: 30, ratityColor: exoticColor, price: 1150 },
      {
        name: 'Desert eagle',
        chance: 5,
        ratityColor: legendaryColor,
        price: 7000,
      },
      { name: 'pm', chance: 100, ratityColor: commonColor, price: 80 },
      { name: 'kar98', chance: 50, ratityColor: rareColor, price: 290 },
      { name: 'ppsh', chance: 60, ratityColor: rareColor, price: 260 },
      { name: 'MG-42', chance: 15, ratityColor: veryRareColor, price: 1700 },
      { name: 'Ak-12', chance: 10, ratityColor: UltraRareColor, price: 3000 },
      { name: 'sv-98', chance: 30, ratityColor: exoticColor, price: 650 },
      { name: 'colt 1911', chance: 100, ratityColor: commonColor, price: 92 },
    ],
  },

  vehiclesCaseData: {
    caseName: 'Vehicles case',
    casePrice: 499,
    items: [
      { name: 'E-100', chance: 5, ratityColor: legendaryColor, price: 9999 },
      { name: 'T-34-85', chance: 30, ratityColor: exoticColor, price: 1337 },
      {
        name: 'Tiger ll (H)',
        chance: 30,
        ratityColor: exoticColor,
        price: 1100,
      },
      { name: 'M4A3-76', chance: 60, ratityColor: rareColor, price: 550 },
      { name: 'BT-7', chance: 100, ratityColor: commonColor, price: 160 },
      { name: 'M1A2', chance: 15, ratityColor: veryRareColor, price: 1900 },
      { name: 'T-80BVM', chance: 10, ratityColor: UltraRareColor, price: 3600 },
      { name: 'KV-2', chance: 50, ratityColor: rareColor, price: 555 },
      { name: 'KV-1B', chance: 50, ratityColor: rareColor, price: 560 },
      { name: 'ASU-57', chance: 100, ratityColor: commonColor, price: 220 },
      { name: 'HO-RO', chance: 100, ratityColor: commonColor, price: 190 },
      { name: 'IS-7', chance: 10, ratityColor: UltraRareColor, price: 4000 },
    ],
  },
  planesCaseData: {
    caseName: 'Planes case',
    casePrice: 599,
    items: [
      { name: 'Ho 229', chance: 4, ratityColor: legendaryColor, price: 11999 },
      { name: 'I-15', chance: 120, ratityColor: commonColor, price: 260 },
      { name: 'La-7', chance: 15, ratityColor: veryRareColor, price: 2700 },
      {
        name: 'Spitfire F mk24',
        chance: 10,
        ratityColor: UltraRareColor,
        price: 4100,
      },
      { name: 'P-47', chance: 60, ratityColor: rareColor, price: 655 },
      { name: 'P-51', chance: 50, ratityColor: rareColor, price: 770 },
      { name: 'P-26', chance: 110, ratityColor: commonColor, price: 320 },
      { name: 'He 51', chance: 130, ratityColor: commonColor, price: 190 },
      { name: 'Pe-8', chance: 10, ratityColor: UltraRareColor, price: 4000 },
      { name: 'F8F-1B', chance: 30, ratityColor: exoticColor, price: 1990 },
      { name: 'Fw 190 D12', chance: 40, ratityColor: rareColor, price: 890 },
    ],
  },
}

export const weaponCasemaxChance = Math.max(
  ...casesData.weaponCaseData.items.map(({ chance }) => chance)
)
export const vehiclesCasemaxChance = Math.max(
  ...casesData.vehiclesCaseData.items.map(({ chance }) => chance)
)
export const planeCasemaxChance = Math.max(
  ...casesData.planesCaseData.items.map(({ chance }) => chance)
)
