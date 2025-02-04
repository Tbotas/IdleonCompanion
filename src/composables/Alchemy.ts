import { Growth  } from "./Utilities";

export type AlchemyData = {
  vials: Record<string, number>;
  upgrades: Record<Color, number[]>;
  goals: Record<Color, number[]>;
};

export type Color = "Orange" | "Green" | "Purple" | "Yellow";
export const BARGAIN_BUBBLE = 14;
export const UNDEV_COST_BUBBLE = {color: <Color>"Yellow", number: 6};
export const IRON_BAR_VIAL = "Barley Brew";

export type Vial = {
  name: string;
  roll: number;
  material: string;
  base: number;
  effect: string;
};

export type Bubble = {
  Name: string;
  x1: number;
  x2: number;
  Func: string;
  Materials: Material[];
};

export type Material = {
  Name: string;
  Amount: number;
  isLiquid: boolean;
};

export const Vials: Vial[] = [
  {
    name: "Copper Corona",
    roll: 1,
    material: "Copper_Ore",
    base: 3,
    effect: "% Orange Bubble Cauldron Brew Speed",
  },
  {
    name: "Sippy Splinters",
    roll: 10,
    material: "Oak_Logs",
    base: 3,
    effect: "% Green Bubble Cauldron brew speed",
  },
  {
    name: "Mushroom Soup",
    roll: 20,
    material: "Spore_Cap",
    base: 3,
    effect: "% Yellow Bubble Cauldron brew speed",
  },
  {
    name: "Spool Sprite",
    roll: 30,
    material: "Thread",
    base: 3,
    effect: "% Purple Bubble Cauldron brew speed",
  },
  {
    name: "Barium Mixture",
    roll: 40,
    material: "Copper_Bar",
    base: 3,
    effect: "Water Droplet max capacity",
  },
  {
    name: "Dieter Drenk",
    roll: 40,
    material: "Bean_Slices",
    base: 1,
    effect: "% money from Monsters",
  },
  {
    name: "Thumb Pow",
    roll: 50,
    material: "Trusty_Nails",
    base: 1,
    effect: "% Class EXP when converting",
  },
  {
    name: "Skinny O Cal",
    roll: 60,
    material: "Snake_Skin",
    base: 2.5,
    effect: "% double statue points chance",
  },
  {
    name: "Jungle Juice",
    roll: 60,
    material: "Jungle_Logs",
    base: 1,
    effect: "% liquid regen rate",
  },
  {
    name: "Barley Brew",
    roll: 65,
    material: "Iron_Bar",
    base: 1,
    effect: "% discount on alchemy bubbles",
  },
  {
    name: "Anearful",
    roll: 70,
    material: "Goblin_Ear",
    base: 2,
    effect: "% Card Drop rate",
  },
  {
    name: "Tea with Pea",
    roll: 75,
    material: "Potty_Rolls",
    base: 3,
    effect: "% Liquid Nitrogen max capacity",
  },
  {
    name: "Gold Guzzler",
    roll: 83,
    material: "Gold_Ore",
    base: 1,
    effect: "% Shop sell Price",
  },
  {
    name: "Ramificoction",
    roll: 84,
    material: "Bullfrog_Horn",
    base: 1,
    effect: " talent points for Tab 1",
  },
  {
    name: "Seawater",
    roll: 87,
    material: "Goldfish",
    base: 1,
    effect: " chance for a kill to count double",
  },
  {
    name: "Fly in my Drink",
    roll: 87,
    material: "Fly",
    base: 3,
    effect: " base Accuracy",
  },
  {
    name: "Slug Slurp",
    roll: 89,
    material: "Hermit_Can",
    base: 2,
    effect: " Post Office box Points",
  },
  {
    name: "Mimicraught",
    roll: 90,
    material: "Megalodon_Tooth",
    base: 1,
    effect: "% Exp from Monsters",
  },
  {
    name: "Tail Time",
    roll: 91,
    material: "Rats_Tail",
    base: 0.5,
    effect: " Weapon Power",
  },
  {
    name: "Blue Flav",
    roll: 93,
    material: "Platinum_Ore",
    base: -3.33,
    effect: "% material cost for stamps",
  },
  {
    name: "Pickle Jar",
    roll: 99,
    material: "BobJoePickle",
    base: 50,
    effect: "% Nothing. Absolutely nothing",
  },
  {
    name: "Fur Refresher",
    roll: 75,
    material: "Floof Ploof",
    base: 2,
    effect: "% higher Shiny Critter chance.",
  },
  {
    name: "Slippy Soul",
    roll: 75,
    material: "Forest Soul",
    base: 1,
    effect: "Talent Points for Tab 2",
  },
  {
    name: "Crab Juice",
    roll: 80,
    material: "Crabbo",
    base: 4,
    effect: "Starting Points in Tower Defence",
  },  
  {
    name: "Void Vial",
    roll: 80,
    material: "Void Ore",
    base: 1,
    effect: "% Mining Efficiency",
  },  
  {
    name: "Red Malt",
    roll: 85,
    material: "Redox Salts",
    base: 1,
    effect: "% Refinery Cycle Speed",
  },  
  {
    name: "Ew Gross Gross",
    roll: 86,
    material: "Mosquisnow",
    base: 1,
    effect: "% Catching Efficiency",
  },  
  {
    name: "The Spanish Sahara",
    roll: 87,
    material: "Tundra Logs",
    base: 1,
    effect: "% Chopping Efficiency",
  },  
  {
    name: "Poison Tincture",
    roll: 95,
    material: "Poison Froge",
    base: 1,
    effect: "% Eagle Trap-O-Vision more critters",
  },  
  {
    name: "Etruscan Lager",
    roll: 88,
    material: "Mamooth Tusk",
    base: 1,
    effect: "% Fishing Efficiency",
  },  
  {
    name: "Chonker Chug",
    roll: 90,
    material: "Dune Soul",
    base: 1,
    effect: "% Talent Library Checkout Speed",
  },  
  {
    name: "Bubonic Burp",
    roll: 91,
    material: "Mousey",
    base: 1,
    effect: " Cog Inventory Spaces",
  },  
  {
    name: "Visible Ink",
    roll: 93,
    material: "Pen",
    base: 1,
    effect: "% Construction Exp Gain",
  },  
  {
    name: "Orange Malt",
    roll: 95,
    material: "Explosive Salts",
    base: 1,
    effect: "% Higher Shiny Critter Chance",
  },  
  {
    name: "Snow Slurry",
    roll: 96,
    material: "Snow Ball",
    base: 0.5,
    effect: "% Printer Sample Size",
  },  
  {
    name: "Slowergy Drink",
    roll: 97,
    material: "Frigid Soul",
    base: 0,
    effect: "% Base Multikill per Mk tier",
  },  
  {
    name: "Sippy Cup",
    roll: 97,
    material: "Sippy Straw",
    base: 1,
    effect: "% Cogs Production Speed",
  },  
  {
    name: "Bunny Brew",
    roll: 98,
    material: "Bunny",
    base: 1,
    effect: "Talent Point for Tab 3",
  },  
  {
    name: "40 40 Purity",
    roll: 98,
    material: "Contact Lense",
    base: 3,
    effect: "Liquid Mercury Droplet max capacity",
  },  
  {
    name: "Spook Pint",
    roll: 99,
    material: "Cryo Soul",
    base: 0,
    effect: "% base Giant Monsters Spawn",
  },  
  {
    name: "Goosey Glug",
    roll: 99,
    material: "Honker",
    base: 0,
    effect: "None",
  },  
];
export const VialCost = [
  0,
  100,
  1e3,
  2.5e3,
  10e3,
  50e3,
  100e3,
  500e3,
  1e6 + 1,
  5e6,
  25e6,
  100e6,
  1e9,
];

export class Alch {
  static discount (cauldCostReduxLvl: number, bubbleCostBubbleLvl: number, bubbleCostVialLvl: number, bubbleTwelveLvl: number, tagLvl: number): any {
    const precision = 10000;

    const costReduxBoost = Math.round(10 * Growth.Decay(cauldCostReduxLvl, 90, 100)) / 10;
    const oa          = Math.max(0.1, 1 - costReduxBoost / 100); // TODO: This one is off, but the total calculation is still correct
    const newBubble   = Math.max(0.05, 1 - (Growth.Decay(bubbleTwelveLvl, 40, 12)/100)); // Hardcoded values, better to retrieve from bubbles data maybe.
    const undevCost   = Growth.Decay(bubbleCostBubbleLvl, 40, 70);
    const vial        = Growth.Add(bubbleCostVialLvl, 1, 0);
    const undev_vial  = Math.max(0.05, 1 - (undevCost + vial) / 100);
    const bargain_tag = Math.max(Math.pow(0.75, tagLvl), 0.1);
    var discount = oa * newBubble * undev_vial * bargain_tag;
    var result = [oa, bargain_tag, newBubble, undev_vial, discount];
    result = result.map((a) => {
        return (precision - Math.round(a*precision))/100}
      );
    if (process.env.NODE_ENV === "development") {
      console.log(`Alch.discount = [
        Cauldron:     ${result[0].toFixed(2).padStart(5, " ")} 
        Bargain:      ${result[1].toFixed(2).padStart(5, " ")} 
        Bubble XII:   ${result[2].toFixed(2).padStart(5, " ")} 
        Undev + vial: ${result[3].toFixed(2).padStart(5, " ")} 
        Total:        ${result[4].toFixed(2).padStart(5, " ")}
      ]`);
    }
    return result;
  }
  
  static effect = (bubble: Bubble, level: number) => {
    let effect = (level === 0 ? 0 : Growth[bubble.Func](level, Number(bubble.x1), Number(bubble.x2)));
    if (isNaN(effect)) {
      effect = 0;
    }
    return Number(effect);
  }

  static effectChange = (bubble: Bubble, levelNow: number, levelGoal: number) => {
    let effectNow = Alch.effect(bubble, levelNow) ?? 0;
    let effectGoal = Alch.effect(bubble, levelGoal);
    effectGoal = (effectGoal < effectNow ? effectNow : effectGoal);
    let result = `${Number(effectNow).toFixed(2).padStart(6, ' ')} => ${Number(effectGoal).toFixed(2).padStart(6, ' ')}`;
    return result;
  };
}