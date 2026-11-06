export const cuts = [
  { id: "floor", name: "Floor", size: "18 × 18", x: 0, y: 0, w: 18, h: 18 },
  { id: "side-a", name: "Side A", size: "18 × 16", x: 18.5, y: 0, w: 18, h: 16 },
  { id: "side-b", name: "Side B", size: "18 × 16", x: 18.5, y: 16.5, w: 18, h: 16 },
  { id: "back", name: "Back", size: "16½ × 16", x: 0, y: 18.5, w: 16.5, h: 16 },
  { id: "front", name: "Front", size: "16½ × 12", x: 0, y: 35, w: 16.5, h: 12 },
] as const;

export const roofCuts = [
  { id: "roof", name: "Roof", size: "24 × 22", x: 0, y: 0, w: 24, h: 22 },
  { id: "awning", name: "Awning", size: "10 × 7", x: 0, y: 22.75, w: 10, h: 7 },
] as const;

export const SHEET = 48;
export const ROOF_SHEET_W = 24;
export const ROOF_SHEET_H = 48;

export type ShopLine = {
  item: string;
  qty: string;
  note: string;
};

export function shoppingList(boxes: number): ShopLine[] {
  const panel = boxes === 1 ? "1 panel" : `${boxes} panels`;
  return [
    {
      item: "¾″ exterior plywood, 4×4 handy panel",
      qty: panel,
      note: "Walls and floor. CDX or BC sanded face is fine. Never pressure-treated.",
    },
    {
      item: "½″ exterior plywood, 2×4 project panel",
      qty: panel,
      note: "Roof and the little rain awning. One panel per den.",
    },
    {
      item: "Cedar 2×2",
      qty: boxes === 1 ? "one 4 ft length" : `${boxes} × 4 ft lengths`,
      note: "Cut two 18″ runners per den. Cedar, not treated pine.",
    },
    {
      item: "Exterior wood glue",
      qty: boxes <= 2 ? "one 8 oz bottle" : "two 8 oz bottles",
      note: "Titebond III or any glue rated for outdoor joints.",
    },
    {
      item: "1⅝″ exterior screws, #8",
      qty: boxes === 1 ? "about 40" : `about ${boxes * 40}`,
      note: "A one-pound box covers one den with some left over.",
    },
    {
      item: "2½″ exterior screws",
      qty: "a handful",
      note: "Runners only. One small box serves several dens.",
    },
    {
      item: "Butt hinges, 2–3″, galvanized or stainless",
      qty: `${boxes * 2}`,
      note: "With the short screws that come in the pack.",
    },
    {
      item: "Hook-and-eye latch",
      qty: `${boxes}`,
      note: "Keeps wind and a curious raccoon from flipping the lid.",
    },
    {
      item: "Bricks or pavers",
      qty: boxes === 1 ? "4, if the spot holds water" : `${boxes * 4}, if the spot holds water`,
      note: "Skip them on ground that already drains.",
    },
  ];
}

export const buildSteps = [
  {
    id: "tools",
    title: "Lay out the tools",
    body: "Tape measure, pencil, speed square, circular saw or jigsaw, drill/driver, a ½″ bit, clamps, 80-grit sandpaper, safety glasses, and a dust mask. A 5″ hole saw makes the door quick; a jigsaw and a cardboard circle do the same job. Plywood dust is not charming — cut outside or wear the mask.",
  },
  {
    id: "mark",
    title: "Mark the 4×4 before you cut",
    body: "Lay the handy panel flat. Pencil every piece from the cutting diagram, label the inside face, and write FRONT on the short edge of each side. Saw kerf eats about ⅛″. Put the blade on the waste side of the line. If a piece comes out ⅛″ small, keep going — this is a den, not a cabinet.",
  },
  {
    id: "cut",
    title: "Cut floor, sides, front, and back",
    body: "Cut the five carcass pieces. Leave the sides as 18″ × 16″ rectangles for now. The roof and awning come from the thinner panel, not this one.",
  },
  {
    id: "slope",
    title: "Slope both sides the same direction",
    body: "On each side, mark 12″ up at the end you labeled FRONT and 16″ up at the back end. Connect the marks and cut. Both slopes must get shorter toward the door. If you mirror them, the roof will rock and rain will sit in the gap. Save the triangular offcuts — one becomes the awning wedge.",
  },
  {
    id: "door",
    title: "Cut the 5″ door",
    body: "The front panel is 16½″ wide and 12″ tall. Center the hole left to right. The bottom of the hole sits 2½″ above the bottom edge, so the center of the hole is 5″ up. Hole saw, or drill a starter inside a penciled circle and follow it with the jigsaw. Sand the rim until you can drag a sleeve around it and not catch a thread. A sharp edge scrapes noses and pouch fur.",
  },
  {
    id: "holes",
    title: "Drill drains and two vents",
    body: "Four ½″ holes in the floor, each about 2″ in from a corner. Two ½″ vents in the back panel, 2″ down from the top and 4″ in from each side. The roof overhang keeps rain out of the vents. Don’t add a screen — it clogs, and they like the dark more than a breeze.",
  },
  {
    id: "walls",
    title: "Glue and screw the walls",
    body: "Front and back fit between the sides. The short front goes at the low end. Glue the end grain, clamp, and predrill before you drive 1⅝″ screws so the plywood doesn’t explode. Screws about every 4″, staying ¾″ in from the edge. Check the door is at the 12″ end before the glue grabs.",
  },
  {
    id: "floor",
    title: "Set the walls on the floor",
    body: "Run a bead of glue along the bottom edges. Stand the box on the 18″ × 18″ floor, flush all the way around. Screw up through the underside of the floor into the walls. Two diagonals across the top should match within ⅛″. If they don’t, nudge it square before the next screw.",
  },
  {
    id: "runners",
    title: "Add the cedar runners",
    body: "Cut two 18″ lengths of 2×2. With the den still upside down, glue and screw them across the width, 3″ in from the front and 3″ in from the back, using 2½″ screws. Predrill. A screw tip that pokes into the interior gets filed flush. The runners keep the floor off the dirt and let water leave under the box.",
  },
  {
    id: "roof",
    title: "Hinge the roof",
    body: "Cut the roof 24″ along the slope and 22″ across. Set it so the back overhangs about 2″ and the front overhangs about 4″, with equal horns on the sides. Two hinges go on the outside of the tall back wall, one leaf on the wall and one on the roof edge. If the hinge barrel won’t reach, screw a plywood scrap along the underside of the roof’s back edge and hinge to that. Hook-and-eye at the front, centered. You should be able to open it with one hand and a glove. You should not be able to flip it by accident.",
  },
  {
    id: "awning",
    title: "Fit the rain awning",
    body: "Cut a 10″ × 7″ piece from the roof offcut. Center it above the door, bottom edge about 1″ above the hole so an adult can still climb through. Slip a side offcut underneath as a wedge so the awning tips forward, and screw it to the front wall with three screws. It shades the hole. It does not become a porch they have to squeeze under.",
  },
  {
    id: "place",
    title: "Bed it, carry it, leave it",
    body: "Two inches of dry oak leaves or straw. No cedar shavings, no fabric, no newspaper. Carry the den to the spot you picked — don’t build it in place unless you like working on your knees in the mud. Do not put food inside. Check the latch and leave it alone. Don’t open it later unless you know it is empty, and ask your state wildlife agency before you disturb an animal or a nest.",
  },
] as const;

export const brushSteps = [
  {
    id: "brush-base",
    title: "Lay a log base with tunnels",
    body: "Four or five logs, 4 to 6 feet long, set parallel about 6″ apart. The gaps are the hallways. If you only have branches, bundle the thick ones on the bottom.",
  },
  {
    id: "brush-stack",
    title: "Stack loosely, 3 to 4 feet high",
    body: "Crisscross brush so cavities stay open. A pile packed like a bonfire is a pile they can’t enter. Aim for something a house cat could disappear into, then stop.",
  },
  {
    id: "brush-cap",
    title: "Cap it against rain",
    body: "A scrap of plywood or a slice of metal roofing on top, weighted with one more log. Water should shed. The rooms underneath should stay dry-ish and dark.",
  },
  {
    id: "brush-site",
    title: "Put it in the shade",
    body: "Fence corner, behind the shed, under the trees you already don’t mow. Not the middle of the play lawn. Not on top of the drain.",
  },
  {
    id: "brush-leave",
    title: "Stop tidying it",
    body: "It is supposed to look like a mess. Add branches once a year as it settles. That is the whole maintenance schedule.",
  },
] as const;

export type Dogs = "no" | "sometimes" | "yes";
export type Poultry = "no" | "yes";
export type Cover = "fence" | "shrubs" | "shed" | "woodpile" | "none";
export type Drainage = "pools" | "drains";
export type Distance = "garden" | "far" | "either";

export type SiteAnswers = {
  dogs: Dogs;
  poultry: Poultry;
  cover: Cover;
  drainage: Drainage;
  distance: Distance;
};

export function siteAdvice(a: SiteAnswers): { title: string; place: string; notes: string[] } {
  const notes: string[] = [];
  let place =
    "A shaded fence corner with cover on one side. Point the door east or southeast, out of the winter wind.";

  if (a.cover === "none") {
    place =
      "Not yet. A box in the middle of a mowed lawn is a crate, not a den. Build the brush pile first and tuck the box against its shady side.";
  } else if (a.cover === "fence") {
    place =
      "Where the fence meets a shrub or the back corner. Point the door along the fence so the approach is covered, not across the open yard.";
  } else if (a.cover === "shrubs") {
    place =
      "Just outside the shrub’s dripline, so wet leaves don’t sheet into the doorway. Door facing away from the prevailing wind.";
  } else if (a.cover === "shed") {
    place =
      "Along the shed wall that stays shady after lunch. Leave yourself a path, and don’t block a door you still use.";
  } else if (a.cover === "woodpile") {
    place =
      "At the end of the woodpile, not inside it. You want the tenant in the box, not between the logs you’re about to carry.";
  }

  if (a.dogs === "yes") {
    notes.push(
      "A dog out at night can harass whatever uses the box. Put the den beyond the fence, or skip it until the dog sleeps indoors. Cornering wildlife risks a bite and a vet bill.",
    );
  } else if (a.dogs === "sometimes") {
    notes.push(
      "Give them a brushy exit. Don’t set the door facing a wall the dog can pin them against.",
    );
  }

  if (a.poultry === "yes") {
    notes.push(
      "Opposite end of the property from the coop, and close the birds in before dark. Opossums are occasional egg thieves. An open coop is how a helpful neighbor becomes a problem. See also Volume 26: Chickens — latch the coop every night.",
    );
  }

  if (a.drainage === "pools") {
    notes.push(
      "Set the runners up on four bricks. Don’t site it in the swale, even then. Wet bedding is an empty box.",
    );
  } else {
    notes.push("Your ground already drains. The cedar runners are enough — no bricks required.");
  }

  if (a.distance === "garden") {
    notes.push(
      "Near the garden is a place, not a tick strategy. There is no distance from the beds that makes a box reduce ticks. Keep it off the porch if you don’t want animals at the door.",
    );
  } else if (a.distance === "far") {
    notes.push(
      "A back corner is a reasonable shaded spot. One box is enough to try. A second is optional, and neither comes with a spacing rule or a promise of use.",
    );
  } else {
    notes.push(
      "Pick shade and cover. Closer and you might hear rustling. Farther and you might never know. Either way, use and timing are unpredictable.",
    );
  }

  notes.push(
    "No food in the box. Illinois Extension notes that food and shelter left out for opossums can also draw raccoons, feral cats, rats, mice, and other rodents. Dry leaves are bedding, not bait.",
  );

  const blocked = a.dogs === "yes" || a.cover === "none";
  return {
    title: blocked ? "Change one thing first" : "Put it here",
    place,
    notes,
  };
}

export const faqs = [
  {
    q: "Will this get rid of the ticks?",
    a: "No. A den is not a dependable way to reduce ticks or to attract an opossum. In 2009, researchers put ticks on five captive opossums. About 3.5 ticks per animal fell off after feeding, and the missing ticks were assumed eaten. A 2021 study found no ticks or tick parts in the stomachs of 32 wild Illinois opossums, and 23 earlier diet studies found none either. Illinois Extension also cautions that food and shelter set out for opossums can draw other wildlife. Keep mowing play areas and keep doing tick checks.",
  },
  {
    q: "How is the famous number wrong?",
    a: "Keesing and colleagues worked with five captive opossums. On average about 3.5 ticks per animal dropped off after feeding. The researchers assumed the missing ticks had been eaten. They did not establish that wild opossums regularly remove ticks. The estimate of more than 5,500 larval ticks in a peak week is math built on that assumption, not a count of ticks eaten outdoors.",
  },
  {
    q: "A raccoon moved in.",
    a: "This design does not selectively admit opossums. A 5″ hole can fit a small raccoon and other animals of similar size. Do not trap or relocate them on your own. Whether that is legal depends on your state — ask the wildlife agency before you try. Skip food, keep trash shut, and don’t enlarge the hole.",
  },
  {
    q: "Will they move into the attic?",
    a: "A ground box is not proven to keep opossums out of attics or to stop them using other shelter. An attic animal is there because of a gap in the house. Cap the chimney and screen the vents. If one is already inside, call someone who excludes without poison, and check what your state allows.",
  },
  {
    q: "Can I put out cat food so they find it?",
    a: "Don’t. Food trains a crowd: raccoons, rats, skunks, the neighbor’s cat. It also creates a dependency and a mess under the box. Habitat is the invitation. A shallow dish of water, dumped and refilled every couple of days, is the only supplement worth leaving — and not inside the den.",
  },
  {
    q: "I found babies.",
    a: "Joeys can fall from the mother’s back. If a young animal is injured, clearly separated, or its mother is dead, contact a licensed wildlife rehabilitator promptly. Wisconsin DNR advises that call for an injured or very small opossum. Do not feed or handle it unless the rehabilitator tells you to. Do not try to raise it. What a permit allows depends on your state.",
  },
  {
    q: "Do they carry rabies?",
    a: "Rabies is rarely reported in opossums, but any mammal can contract it. The CDC says opossums rarely spread rabies and advises avoiding contact with wildlife. Don’t handle them. Hissing, drooling, and falling over stiff can be a normal threat display. A daytime animal that is confused, unafraid, or injured is a reason to keep people and pets away and call animal control or a rehabilitator — not to diagnose it yourself.",
  },
  {
    q: "Nothing has moved in.",
    a: "A box is optional shelter. Whether anything uses it, and when, is unpredictable. An empty box is a normal outcome, not a failed schedule. Don’t keep moving it. Cover nearby may make the approach easier, and still guarantees nothing.",
  },
] as const;

export const glossary = [
  {
    term: "Virginia opossum",
    def: "The only marsupial native to the United States and Canada (Didelphis virginiana).",
  },
  {
    term: "Joey",
    def: "A baby opossum.",
  },
  {
    term: "Den box / nest box",
    def: "Optional shelter you provide; not a cage.",
  },
  {
    term: "Playing dead",
    def: "A fear response (thanatosis), not sleep.",
  },
  {
    term: "Relocate",
    def: "Moving a wild animal. Whether that is allowed, and whether the animal survives it, depends on your state. Ask the wildlife agency before you try.",
  },
  {
    term: "Rehabilitator",
    def: "A permitted person who cares for injured or orphaned wildlife.",
  },
  {
    term: "Blacklegged tick",
    def: "A tick that can carry the bacterium that causes Lyme disease. A den box is not a control method for it.",
  },
  {
    term: "Passive housing",
    def: "Offering habitat without trapping or feeding.",
  },
] as const;

export const startSteps = [
  "Confirm Virginia opossums live in your area.",
  "Read local wildlife rules.",
  "Build or buy a box with a ~5″ door — no food inside.",
  "Site it in shade with cover, away from night dogs and the chicken coop.",
  "Add a brush pile and clean water.",
  "Leave it alone. Whether anything uses it, and when, is unpredictable.",
  "Do not keep, trap, or relocate wildlife. Ask your state wildlife agency before you handle any.",
] as const;
