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
      { name: 'm4a1', chance: 15, ratityColor: veryRareColor, price: 1100 },
      { name: 'akm', chance: 30, ratityColor: exoticColor, price: 606 },
      { name: 'ak-74', chance: 50, ratityColor: rareColor, price: 300 },
      { name: 'glock-17', chance: 100, ratityColor: commonColor, price: 100 },
      { name: 'm1a1', chance: 30, ratityColor: exoticColor, price: 650 },
      {
        name: 'Desert eagle',
        chance: 5,
        ratityColor: legendaryColor,
        price: 5000,
      },
      { name: 'pm', chance: 100, ratityColor: commonColor, price: 80 },
      { name: 'kar98', chance: 50, ratityColor: rareColor, price: 260 },
      { name: 'ppsh', chance: 50, ratityColor: rareColor, price: 250 },
      { name: 'MG-42', chance: 15, ratityColor: veryRareColor, price: 1200 },
      { name: 'Ak-12', chance: 10, ratityColor: UltraRareColor, price: 2000 },
      { name: 'sv-98', chance: 30, ratityColor: exoticColor, price: 555 },
      { name: 'colt 1911', chance: 100, ratityColor: commonColor, price: 92 },
    ],
  },

  vehiclesCaseData: {
    caseName: 'Vehicles case',
    casePrice: 499,
    items: [
      { name: 'E-100', chance: 5, ratityColor: legendaryColor, price: 9999 },
      { name: 'T-34-85', chance: 30, ratityColor: exoticColor, price: 1337 },
      { name: 'M4A3-76', chance: 50, ratityColor: rareColor, price: 550 },
      { name: 'BT-7', chance: 100, ratityColor: commonColor, price: 160 },
      { name: 'M1A2', chance: 15, ratityColor: veryRareColor, price: 1400 },
      { name: 'T-80BVM', chance: 10, ratityColor: UltraRareColor, price: 1600 },
      { name: 'KV-2', chance: 50, ratityColor: rareColor, price: 555 },
      { name: 'ASU-57', chance: 100, ratityColor: commonColor, price: 220 },
      { name: 'HO-RO', chance: 100, ratityColor: commonColor, price: 190 },
    ],
  },
}

export const weaponCasemaxChance = Math.max(
  ...casesData.weaponCaseData.items.map(({ chance }) => chance)
)
export const vehiclesCasemaxChance = Math.max(
  ...casesData.vehiclesCaseData.items.map(({ chance }) => chance)
)
