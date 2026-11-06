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
    body: "Two inches of dry oak leaves or straw. No cedar shavings, no fabric, no newspaper. Carry the den to the spot you picked — don’t build it in place unless you like working on your knees in the mud. Do not put food inside. Check the latch, walk away, and give it two weeks before you peek.",
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
      "A dog out at night will empty this plan. Put the den beyond the fence, or wait until the dog sleeps indoors. A cornered opossum is a vet bill, not tick control.",
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
      "Fifteen to thirty feet from the beds is the useful distance. Their loop crosses the tick habitat, and they aren’t living under the porch.",
    );
  } else if (a.distance === "far") {
    notes.push("The back line is the right call. One den there beats three screwed to the house.");
  } else {
    notes.push(
      "Either distance works. Closer and you’ll hear rustling. Farther and you’ll mostly notice the leaves they drag in.",
    );
  }

  notes.push("No food in the box, ever. Kibble turns it into a raccoon diner and a rat station. Dry leaves are the whole welcome.");

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
    a: "No box eliminates them. Mice are the animals that amplify blacklegged ticks and the Lyme bacterium. Opossums are poor hosts by comparison: in a 2009 lab study they groomed off nearly all the larval ticks placed on them. A later look at wild stomachs did not find the piles of ticks the meme promised, so treat “5,000 ticks” as a projection, not a quota. What you can count on is a native night animal that is a dead end for many of the ticks that climb aboard, plus a taste for slugs, snails, and beetles. Keep mowing the play lawn and keep doing tick checks.",
  },
  {
    q: "How is the famous number wrong?",
    a: "Keesing and colleagues put 100 larval ticks on captive opossums. About 3.5 of them fed and dropped off; the rest were missing and presumed groomed away. Working backward from wild tick counts, they estimated an opossum might destroy more than 5,500 larvae in a peak week. Interviews rounded a season figure near 5,000. The meme picked whichever version sounded round. The grooming result is real. The weekly total is math, done on five animals, in a cage.",
  },
  {
    q: "A raccoon moved in.",
    a: "A 5″ hole also fits a small raccoon. You still have a nocturnal grub-eater, with worse manners. Don’t trap it — relocation is illegal in a lot of states and usually fatal for the animal. Skip food, keep trash shut, and the den stays a den instead of a feeding station. Making the hole bigger will not improve the situation.",
  },
  {
    q: "Will they move into the attic?",
    a: "Attics happen because of a gap in the house, not because you offered a better room outside. A ground den is the alternative to the soffit. Cap the chimney and screen the vents anyway. If one is already inside, call a wildlife control operator who excludes and doesn’t poison.",
  },
  {
    q: "Can I put out cat food so they find it?",
    a: "Don’t. Food trains a crowd: raccoons, rats, skunks, the neighbor’s cat. It also creates a dependency and a mess under the box. Habitat is the invitation. A shallow dish of water, dumped and refilled every couple of days, is the only supplement worth leaving — and not inside the den.",
  },
  {
    q: "I found babies.",
    a: "Close the lid. Mothers leave joeys in the den while they forage, and the joeys are not abandoned. If you are looking at a dead adult with living young, or infants that are cold and alone through a full day, call a licensed wildlife rehabilitator. Don’t bottle-feed, don’t keep them, and don’t drive them to a “nicer” woods. Licensed rehabbers exist for a reason. Keeping joeys without a permit is illegal in most places and often kills them.",
  },
  {
    q: "Do they carry rabies?",
    a: "Rarely. Their body temperature makes rabies uncommon, not impossible. Any mammal behaving oddly gets distance, not a photo. They hiss, drool, and sometimes fall over stiff when threatened — that threat display is normal. A daytime animal that is confused, unafraid, or injured is a reason to call animal control, not to diagnose it yourself.",
  },
  {
    q: "Nothing has moved in.",
    a: "They keep a circuit of dens and may use yours a few nights a month. That still counts. If a season passes with no rearranged leaves, add the brush pile, add water, and stop moving the box. They won’t commute across a bare lawn to reach it.",
  },
] as const;

export const glossary = [
  {
    term: "Virginia opossum",
    def: "North America’s native marsupial (Didelphis virginiana).",
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
    def: "Moving a wild animal; often illegal and harmful.",
  },
  {
    term: "Rehabilitator",
    def: "A permitted person who cares for injured or orphaned wildlife.",
  },
  {
    term: "Blacklegged tick",
    def: "The tick that can carry Lyme disease; mice amplify it more than opossums.",
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
  "Leave it alone for two weeks.",
  "Never keep, trap, or relocate wildlife.",
] as const;
