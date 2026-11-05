import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, c as Hammer, d as Bug, i as Printer, l as ChevronDown, n as TreePine, o as Moon, r as RotateCcw, s as Minus, u as Check } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B13MuRlD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-t-O7gv0X.jpg";
var portrait_default = "/assets/portrait-ecQ6sQIk.jpg";
var box_default = "/assets/box--Jkf9nzu.jpg";
var cuts = [
	{
		id: "floor",
		name: "Floor",
		size: "18 × 18",
		x: 0,
		y: 0,
		w: 18,
		h: 18
	},
	{
		id: "side-a",
		name: "Side A",
		size: "18 × 16",
		x: 18.5,
		y: 0,
		w: 18,
		h: 16
	},
	{
		id: "side-b",
		name: "Side B",
		size: "18 × 16",
		x: 18.5,
		y: 16.5,
		w: 18,
		h: 16
	},
	{
		id: "back",
		name: "Back",
		size: "16½ × 16",
		x: 0,
		y: 18.5,
		w: 16.5,
		h: 16
	},
	{
		id: "front",
		name: "Front",
		size: "16½ × 12",
		x: 0,
		y: 35,
		w: 16.5,
		h: 12
	}
];
var roofCuts = [{
	id: "roof",
	name: "Roof",
	size: "24 × 22",
	x: 0,
	y: 0,
	w: 24,
	h: 22
}, {
	id: "awning",
	name: "Awning",
	size: "10 × 7",
	x: 0,
	y: 22.75,
	w: 10,
	h: 7
}];
function shoppingList(boxes) {
	const panel = boxes === 1 ? "1 panel" : `${boxes} panels`;
	return [
		{
			item: "¾″ exterior plywood, 4×4 handy panel",
			qty: panel,
			note: "Walls and floor. CDX or BC sanded face is fine. Never pressure-treated."
		},
		{
			item: "½″ exterior plywood, 2×4 project panel",
			qty: panel,
			note: "Roof and the little rain awning. One panel per den."
		},
		{
			item: "Cedar 2×2",
			qty: boxes === 1 ? "one 4 ft length" : `${boxes} × 4 ft lengths`,
			note: "Cut two 18″ runners per den. Cedar, not treated pine."
		},
		{
			item: "Exterior wood glue",
			qty: boxes <= 2 ? "one 8 oz bottle" : "two 8 oz bottles",
			note: "Titebond III or any glue rated for outdoor joints."
		},
		{
			item: "1⅝″ exterior screws, #8",
			qty: boxes === 1 ? "about 40" : `about ${boxes * 40}`,
			note: "A one-pound box covers one den with some left over."
		},
		{
			item: "2½″ exterior screws",
			qty: "a handful",
			note: "Runners only. One small box serves several dens."
		},
		{
			item: "Butt hinges, 2–3″, galvanized or stainless",
			qty: `${boxes * 2}`,
			note: "With the short screws that come in the pack."
		},
		{
			item: "Hook-and-eye latch",
			qty: `${boxes}`,
			note: "Keeps wind and a curious raccoon from flipping the lid."
		},
		{
			item: "Bricks or pavers",
			qty: boxes === 1 ? "4, if the spot holds water" : `${boxes * 4}, if the spot holds water`,
			note: "Skip them on ground that already drains."
		}
	];
}
var buildSteps = [
	{
		id: "tools",
		title: "Lay out the tools",
		body: "Tape measure, pencil, speed square, circular saw or jigsaw, drill/driver, a ½″ bit, clamps, 80-grit sandpaper, safety glasses, and a dust mask. A 5″ hole saw makes the door quick; a jigsaw and a cardboard circle do the same job. Plywood dust is not charming — cut outside or wear the mask."
	},
	{
		id: "mark",
		title: "Mark the 4×4 before you cut",
		body: "Lay the handy panel flat. Pencil every piece from the cutting diagram, label the inside face, and write FRONT on the short edge of each side. Saw kerf eats about ⅛″. Put the blade on the waste side of the line. If a piece comes out ⅛″ small, keep going — this is a den, not a cabinet."
	},
	{
		id: "cut",
		title: "Cut floor, sides, front, and back",
		body: "Cut the five carcass pieces. Leave the sides as 18″ × 16″ rectangles for now. The roof and awning come from the thinner panel, not this one."
	},
	{
		id: "slope",
		title: "Slope both sides the same direction",
		body: "On each side, mark 12″ up at the end you labeled FRONT and 16″ up at the back end. Connect the marks and cut. Both slopes must get shorter toward the door. If you mirror them, the roof will rock and rain will sit in the gap. Save the triangular offcuts — one becomes the awning wedge."
	},
	{
		id: "door",
		title: "Cut the 5″ door",
		body: "The front panel is 16½″ wide and 12″ tall. Center the hole left to right. The bottom of the hole sits 2½″ above the bottom edge, so the center of the hole is 5″ up. Hole saw, or drill a starter inside a penciled circle and follow it with the jigsaw. Sand the rim until you can drag a sleeve around it and not catch a thread. A sharp edge scrapes noses and pouch fur."
	},
	{
		id: "holes",
		title: "Drill drains and two vents",
		body: "Four ½″ holes in the floor, each about 2″ in from a corner. Two ½″ vents in the back panel, 2″ down from the top and 4″ in from each side. The roof overhang keeps rain out of the vents. Don’t add a screen — it clogs, and they like the dark more than a breeze."
	},
	{
		id: "walls",
		title: "Glue and screw the walls",
		body: "Front and back fit between the sides. The short front goes at the low end. Glue the end grain, clamp, and predrill before you drive 1⅝″ screws so the plywood doesn’t explode. Screws about every 4″, staying ¾″ in from the edge. Check the door is at the 12″ end before the glue grabs."
	},
	{
		id: "floor",
		title: "Set the walls on the floor",
		body: "Run a bead of glue along the bottom edges. Stand the box on the 18″ × 18″ floor, flush all the way around. Screw up through the underside of the floor into the walls. Two diagonals across the top should match within ⅛″. If they don’t, nudge it square before the next screw."
	},
	{
		id: "runners",
		title: "Add the cedar runners",
		body: "Cut two 18″ lengths of 2×2. With the den still upside down, glue and screw them across the width, 3″ in from the front and 3″ in from the back, using 2½″ screws. Predrill. A screw tip that pokes into the interior gets filed flush. The runners keep the floor off the dirt and let water leave under the box."
	},
	{
		id: "roof",
		title: "Hinge the roof",
		body: "Cut the roof 24″ along the slope and 22″ across. Set it so the back overhangs about 2″ and the front overhangs about 4″, with equal horns on the sides. Two hinges go on the outside of the tall back wall, one leaf on the wall and one on the roof edge. If the hinge barrel won’t reach, screw a plywood scrap along the underside of the roof’s back edge and hinge to that. Hook-and-eye at the front, centered. You should be able to open it with one hand and a glove. You should not be able to flip it by accident."
	},
	{
		id: "awning",
		title: "Fit the rain awning",
		body: "Cut a 10″ × 7″ piece from the roof offcut. Center it above the door, bottom edge about 1″ above the hole so an adult can still climb through. Slip a side offcut underneath as a wedge so the awning tips forward, and screw it to the front wall with three screws. It shades the hole. It does not become a porch they have to squeeze under."
	},
	{
		id: "place",
		title: "Bed it, carry it, leave it",
		body: "Two inches of dry oak leaves or straw. No cedar shavings, no fabric, no newspaper. Carry the den to the spot you picked — don’t build it in place unless you like working on your knees in the mud. Do not put food inside. Check the latch, walk away, and give it two weeks before you peek."
	}
];
var brushSteps = [
	{
		id: "brush-base",
		title: "Lay a log base with tunnels",
		body: "Four or five logs, 4 to 6 feet long, set parallel about 6″ apart. The gaps are the hallways. If you only have branches, bundle the thick ones on the bottom."
	},
	{
		id: "brush-stack",
		title: "Stack loosely, 3 to 4 feet high",
		body: "Crisscross brush so cavities stay open. A pile packed like a bonfire is a pile they can’t enter. Aim for something a house cat could disappear into, then stop."
	},
	{
		id: "brush-cap",
		title: "Cap it against rain",
		body: "A scrap of plywood or a slice of metal roofing on top, weighted with one more log. Water should shed. The rooms underneath should stay dry-ish and dark."
	},
	{
		id: "brush-site",
		title: "Put it in the shade",
		body: "Fence corner, behind the shed, under the trees you already don’t mow. Not the middle of the play lawn. Not on top of the drain."
	},
	{
		id: "brush-leave",
		title: "Stop tidying it",
		body: "It is supposed to look like a mess. Add branches once a year as it settles. That is the whole maintenance schedule."
	}
];
function siteAdvice(a) {
	const notes = [];
	let place = "A shaded fence corner with cover on one side. Point the door east or southeast, out of the winter wind.";
	if (a.cover === "none") place = "Not yet. A box in the middle of a mowed lawn is a crate, not a den. Build the brush pile first and tuck the box against its shady side.";
	else if (a.cover === "fence") place = "Where the fence meets a shrub or the back corner. Point the door along the fence so the approach is covered, not across the open yard.";
	else if (a.cover === "shrubs") place = "Just outside the shrub’s dripline, so wet leaves don’t sheet into the doorway. Door facing away from the prevailing wind.";
	else if (a.cover === "shed") place = "Along the shed wall that stays shady after lunch. Leave yourself a path, and don’t block a door you still use.";
	else if (a.cover === "woodpile") place = "At the end of the woodpile, not inside it. You want the tenant in the box, not between the logs you’re about to carry.";
	if (a.dogs === "yes") notes.push("A dog out at night will empty this plan. Put the den beyond the fence, or wait until the dog sleeps indoors. A cornered opossum is a vet bill, not tick control.");
	else if (a.dogs === "sometimes") notes.push("Give them a brushy exit. Don’t set the door facing a wall the dog can pin them against.");
	if (a.poultry === "yes") notes.push("Opposite end of the property from the coop, and close the birds in before dark. Opossums are occasional egg thieves. An open coop is how a helpful neighbor becomes a problem.");
	if (a.drainage === "pools") notes.push("Set the runners up on four bricks. Don’t site it in the swale, even then. Wet bedding is an empty box.");
	else notes.push("Your ground already drains. The cedar runners are enough — no bricks required.");
	if (a.distance === "garden") notes.push("Fifteen to thirty feet from the beds is the useful distance. Their loop crosses the tick habitat, and they aren’t living under the porch.");
	else if (a.distance === "far") notes.push("The back line is the right call. One den there beats three screwed to the house.");
	else notes.push("Either distance works. Closer and you’ll hear rustling. Farther and you’ll mostly notice the leaves they drag in.");
	notes.push("No food in the box, ever. Kibble turns it into a raccoon diner and a rat station. Dry leaves are the whole welcome.");
	return {
		title: a.dogs === "yes" || a.cover === "none" ? "Change one thing first" : "Put it here",
		place,
		notes
	};
}
var faqs = [
	{
		q: "Will this get rid of the ticks?",
		a: "No box eliminates them. Mice are the animals that amplify blacklegged ticks and the Lyme bacterium. Opossums are poor hosts by comparison: in a 2009 lab study they groomed off nearly all the larval ticks placed on them. A later look at wild stomachs did not find the piles of ticks the meme promised, so treat “5,000 ticks” as a projection, not a quota. What you can count on is a native night animal that is a dead end for many of the ticks that climb aboard, plus a taste for slugs, snails, and beetles. Keep mowing the play lawn and keep doing tick checks."
	},
	{
		q: "How is the famous number wrong?",
		a: "Keesing and colleagues put 100 larval ticks on captive opossums. About 3.5 of them fed and dropped off; the rest were missing and presumed groomed away. Working backward from wild tick counts, they estimated an opossum might destroy more than 5,500 larvae in a peak week. Interviews rounded a season figure near 5,000. The meme picked whichever version sounded round. The grooming result is real. The weekly total is math, done on five animals, in a cage."
	},
	{
		q: "A raccoon moved in.",
		a: "A 5″ hole also fits a small raccoon. You still have a nocturnal grub-eater, with worse manners. Don’t trap it — relocation is illegal in a lot of states and usually fatal for the animal. Skip food, keep trash shut, and the den stays a den instead of a feeding station. Making the hole bigger will not improve the situation."
	},
	{
		q: "Will they move into the attic?",
		a: "Attics happen because of a gap in the house, not because you offered a better room outside. A ground den is the alternative to the soffit. Cap the chimney and screen the vents anyway. If one is already inside, call a wildlife control operator who excludes and doesn’t poison."
	},
	{
		q: "Can I put out cat food so they find it?",
		a: "Don’t. Food trains a crowd: raccoons, rats, skunks, the neighbor’s cat. It also creates a dependency and a mess under the box. Habitat is the invitation. A shallow dish of water, dumped and refilled every couple of days, is the only supplement worth leaving — and not inside the den."
	},
	{
		q: "I found babies.",
		a: "Close the lid. Mothers leave joeys in the den while they forage, and the joeys are not abandoned. If you are looking at a dead adult with living young, or infants that are cold and alone through a full day, call a licensed wildlife rehabilitator. Don’t bottle-feed, don’t keep them, and don’t drive them to a “nicer” woods."
	},
	{
		q: "Do they carry rabies?",
		a: "Rarely. Their body temperature makes rabies uncommon, not impossible. Any mammal behaving oddly gets distance, not a photo. They hiss, drool, and sometimes fall over stiff when threatened — that threat display is normal. A daytime animal that is confused, unafraid, or injured is a reason to call animal control, not to diagnose it yourself."
	},
	{
		q: "Nothing has moved in.",
		a: "They keep a circuit of dens and may use yours a few nights a month. That still counts. If a season passes with no rearranged leaves, add the brush pile, add water, and stop moving the box. They won’t commute across a bare lawn to reach it."
	}
];
var initial = {
	steps: {},
	cuts: {},
	boxes: 1,
	dogs: "no",
	poultry: "no",
	cover: "shrubs",
	drainage: "drains",
	distance: "either"
};
var useProgress = create()(persist((set) => ({
	...initial,
	toggleStep: (id) => set((s) => ({ steps: {
		...s.steps,
		[id]: !s.steps[id]
	} })),
	toggleCut: (id) => set((s) => ({ cuts: {
		...s.cuts,
		[id]: !s.cuts[id]
	} })),
	setBoxes: (n) => set({ boxes: Math.min(4, Math.max(1, n)) }),
	setDogs: (dogs) => set({ dogs }),
	setPoultry: (poultry) => set({ poultry }),
	setCover: (cover) => set({ cover }),
	setDrainage: (drainage) => set({ drainage }),
	setDistance: (distance) => set({ distance }),
	reset: () => set({
		...initial,
		steps: {},
		cuts: {}
	})
}), {
	name: "hollow-home-v1",
	skipHydration: true
}));
var NAV = [
	{
		href: "#why",
		label: "The ticks"
	},
	{
		href: "#tenant",
		label: "The tenant"
	},
	{
		href: "#plan",
		label: "The den"
	},
	{
		href: "#shop",
		label: "Shop"
	},
	{
		href: "#build",
		label: "Build"
	},
	{
		href: "#site",
		label: "Where"
	},
	{
		href: "#keep",
		label: "After"
	}
];
function GuideApp() {
	const steps = useProgress((s) => s.steps);
	const cutsDone = useProgress((s) => s.cuts);
	const boxes = useProgress((s) => s.boxes);
	(0, import_react.useEffect)(() => {
		useProgress.persist.rehydrate();
	}, []);
	const buildDone = buildSteps.filter((s) => steps[s.id]).length;
	const cutDone = [...cuts, ...roofCuts].filter((c) => cutsDone[c.id]).length;
	const cutTotal = cuts.length + roofCuts.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "no-print sticky top-0 z-30 border-b border-bark/15 bg-paper/90 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "font-display text-lg font-semibold tracking-tight",
						children: "Hollow Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-5 text-sm text-ink/70 md:flex",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "transition-colors hover:text-ink",
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#build",
						className: "rounded-full bg-moss px-3 py-2 text-sm font-medium text-paper tabular-nums transition-transform duration-150 ease-out active:scale-[0.96]",
						children: [
							buildDone,
							"/",
							buildSteps.length,
							" built"
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "top",
			className: "mx-auto max-w-6xl px-4 pb-24 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid items-end gap-8 pt-8 lg:grid-cols-12 lg:pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium tracking-wide text-moss",
								children: "Field manual"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl",
								children: "Build a den for the animal that works the night shift on ticks."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-lg leading-relaxed text-ink/80",
								children: "One Saturday, a half-sheet of plywood, and a low dark room. Virginia opossums won’t sterilize a yard. They will sleep somewhere safer than your soffit, and groom off a remarkable share of the ticks that try to feed on them."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#plan",
									className: "inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper transition-transform duration-150 ease-out active:scale-[0.96]",
									children: "See the plan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#build",
									className: "inline-flex min-h-11 items-center rounded-full border border-bark/30 px-5 text-sm font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
									children: "Start the build"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "lg:col-span-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_default,
							alt: "A Virginia opossum sitting in the round doorway of a low wooden den box under a shrub at dusk",
							className: "aspect-video w-full rounded-2xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-2 text-sm text-ink/60",
							children: "Door low, roof shedding away from the hole, cover on at least one side."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "why",
					className: "scroll-mt-24 border-t border-bark/15 py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium tracking-wide text-moss",
							children: "01 — Why bother"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl",
							children: "Invite them. Don’t believe the meme."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-4 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bug, { className: "size-5" }),
									kicker: "The lab",
									title: "About 96% failed to feed",
									body: "In a 2009 study, researchers put 100 larval blacklegged ticks on captive opossums. Roughly 3.5 fed and dropped off. The rest were gone — groomed away, and presumed eaten."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-5" }),
									kicker: "The meme",
									title: "Not 5,000 a season, counted",
									body: "The paper then estimated more than 5,500 larvae in a peak week, by math, from five animals in cages. A later look at wild stomachs did not find that feast. Quote the grooming. Skip the quota."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreePine, { className: "size-5" }),
									kicker: "The yard",
									title: "A dead end, not a vacuum",
									body: "Mice amplify ticks and the Lyme bacterium. Opossums are poor reservoirs. A den adds that animal to the circuit. It does not replace tick checks, short play-lawn grass, or skipping poison bait."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-3xl text-sm leading-relaxed text-ink/70",
							children: "Source: Keesing et al., 2009, “Hosts as ecological traps for the vector of Lyme disease,” Proceedings of the Royal Society B. Cary Institute interviews later rounded a seasonal figure near 5,000. A 2021 stomach survey of wild Illinois opossums is the reason this manual will not promise you a tick-free July."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "tenant",
					className: "scroll-mt-24 border-t border-bark/15 py-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-8 lg:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
							className: "lg:col-span-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: portrait_default,
								alt: "Close portrait of a Virginia opossum with a white face, pink nose, and dark rounded ears",
								className: "aspect-square w-full rounded-2xl object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium tracking-wide text-moss",
									children: "02 — The tenant"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
									children: "Virginia opossum. Not a pet, not a possum from Australia."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-4 text-base leading-relaxed text-ink/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "North America’s only marsupial. Cat-sized body, white face, pink nose, bare black ears, and a prehensile tail they use for balance — not for hanging asleep, which is mostly a myth. They are nocturnal, nomadic, and almost aggressively uninterested in a fight." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A den is a hotel room on a circuit. Radio-tracking studies show them switching shelters every few days: hollow logs, brush, abandoned burrows, the space under a shed. Your box will not hold a permanent resident. A few nights a month, repeated across the season, is the result you want. That is how one animal covers the tick habitat instead of camping in it." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This plan is the wrong hole size for an Australian brushtail or ringtail. If you don’t have Virginia opossums — much of the Rockies and the high desert still doesn’t — lumber will not conjure them." })
									]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "plan",
					className: "scroll-mt-24 border-t border-bark/15 py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium tracking-wide text-moss",
							children: "03 — The den"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl",
							children: "A low shed-roof box. Big enough to curl up in, small enough to carry."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl leading-relaxed text-ink/80",
							children: "Walls and floor from one 4×4 sheet of ¾″ exterior plywood. Roof and awning from a thinner 2×4 panel, so the heavy sheet still fits in a car. Nothing pressure-treated. Nothing painted inside. The wood is supposed to go gray."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bark/20 bg-bark/20 sm:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									k: "Interior",
									v: "16½″ × 16½″"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									k: "Ceiling",
									v: "12″ door, 16″ back"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									k: "Door",
									v: "5″ round"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									k: "Pitch",
									v: "About 12°"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-8 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold",
									children: "Front"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrontElevation, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink/70",
									children: "Hole centered on the 16½″ front. Bottom of the opening is 2½″ off the floor panel, so rain doesn’t pour in and a joey can still climb through."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold",
									children: "Side"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideElevation, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink/70",
									children: "Four inches of rise over the 18″ side. Hinge the lid at the tall back. Two cedar runners, inset 3″, keep the floor off the soil."
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid gap-10 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold",
										children: "Cut the 4×4 this way"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-ink/70",
										children: "Inches, viewed from above. Gaps are the saw kerf. Check a piece off once it’s cut — that list stays on this device."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CutSheet, {})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold",
										children: "Roof panel, 24″ × 48″"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-ink/70",
										children: "Half-inch plywood. The roof uses the full 24″ width so you only crosscut."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoofSheet, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 space-y-2 text-sm leading-relaxed text-ink/75",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Roof sits 22″ across the box and 24″ down the slope." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "About 2″ of overhang at the back, 4″ over the door, horns even on the sides." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Awning is 10″ × 7″, tipped with a side offcut." })
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "mt-12 grid items-center gap-6 rounded-2xl border border-bark/15 bg-bark/5 p-3 sm:grid-cols-5 sm:p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: box_default,
								alt: "Finished unpainted plywood den box with a sloped roof and round door, set on runners by a fence and woodpile",
								className: "aspect-3/2 w-full rounded-xl object-cover sm:col-span-3"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "px-2 text-sm leading-relaxed text-ink/75 sm:col-span-2",
								children: "Finished and unfinished on purpose. Shade, a fence or shrub at its back, dry leaves within dragging distance. If your first version is a little out of square, they will not file a complaint."
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "shop",
					className: "scroll-mt-24 border-t border-bark/15 py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium tracking-wide text-moss",
								children: "04 — Shop"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
								children: "Usually under a hundred dollars."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoxStepper, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl text-ink/80",
							children: "Plan on roughly $80–110 for one den if you’re buying both panels, a cedar stick, and hardware. Less if the screw jar is already honest. A second den wants about 50 feet of distance — they’re solitary, except a mother with joeys."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 divide-y divide-bark/15 border-y border-bark/15",
							children: shoppingList(boxes).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-1 py-4 sm:grid-cols-12 sm:gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium sm:col-span-6",
										children: line.item
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-moss tabular-nums sm:col-span-3",
										children: line.qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-ink/65 sm:col-span-3",
										children: line.note
									})
								]
							}, line.item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
								title: "Leave unfinished",
								children: "No interior paint, no stain, no linseed oil “just on the lip.” If you truly can’t stand raw plywood, one coat of exterior latex on the outside only, then two weeks of curing in the weather before it goes out. Dark brown. Never the doorway."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
								title: "Never these",
								children: "Pressure-treated lumber, cedar shavings as bedding, fabric, newspaper, mothballs, poison bait in the yard, and a screened hole. Mothballs are a pesticide misuse, not a “critter trick,” and rodenticides kill the opossum that eats the poisoned mouse."
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "build",
					className: "scroll-mt-24 border-t border-bark/15 py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium tracking-wide text-moss",
								children: "05 — Build"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
								children: "Twelve steps. Check them off."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "no-print flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => window.print(),
									className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-bark/30 px-4 text-sm font-medium transition-transform duration-150 ease-out active:scale-[0.96]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Print"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => useProgress.getState().reset(),
									className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-bark/30 px-4 text-sm font-medium transition-transform duration-150 ease-out active:scale-[0.96]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Reset"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-1.5 overflow-hidden rounded-full bg-bark/15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-moss transition-[width] duration-200 ease-out",
								style: { width: `${buildDone / buildSteps.length * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm tabular-nums text-ink/60",
							children: [
								buildDone,
								" of ",
								buildSteps.length,
								" steps · ",
								cutDone,
								" of ",
								cutTotal,
								" pieces marked cut"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-6 divide-y divide-bark/15 border-y border-bark/15",
							children: buildSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepRow, {
								id: step.id,
								index: i + 1,
								title: step.title,
								body: step.body
							}, step.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-semibold",
									children: "No saw? Build the brush pile tonight."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-3xl leading-relaxed text-ink/80",
									children: "A loose pile of logs and brush is the den they evolved with. Use it alone, or park the plywood box against it. The only failure mode is tidying it into a solid heap with no tunnels."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-6 divide-y divide-bark/15 border-y border-bark/15",
									children: brushSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepRow, {
										id: step.id,
										index: i + 1,
										title: step.title,
										body: step.body
									}, step.id))
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "site",
					className: "scroll-mt-24 border-t border-bark/15 py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium tracking-wide text-moss",
							children: "06 — Where"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl",
							children: "The spot matters more than the joinery."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl leading-relaxed text-ink/80",
							children: "Answer for the yard you actually have. The card updates as you go, and it stays saved with your checklist."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siting, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "keep",
					className: "scroll-mt-24 border-t border-bark/15 py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium tracking-wide text-moss",
							children: "07 — After"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
							children: "What a working den looks like."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-4 lg:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
									title: "Signs it’s used",
									children: "Leaves rearranged or dragged to the lip. A faint musk, not sewage. Tracks with a hind foot that looks like a small hand — five toes, and a thumb that splays out. Red eyeshine if you sweep a light from far enough away to be polite."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
									title: "When to open it",
									children: "Once a year, a dry afternoon in January or February. Tap the roof at noon. If anything answers, leave it until spring. Gloves on, dump matted wet bedding, replace with dry leaves. No foggers, no bleach bombs. Spring and summer may mean a mother — do not open a quiet box “just to check” then."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
									title: "If one plays dead",
									children: "Leave it. The act can last minutes or longer, and people have buried animals that were not dead. Give it the evening and a clear path away from dogs. Hissing and drooling at the door is a boundary, not a disease. Back up."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-2xl bg-ink px-5 py-6 text-paper sm:px-8 sm:py-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold",
								children: "The rest of the tick plan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 grid gap-3 text-sm leading-relaxed text-paper/85 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mow the lawn people actually play on. Let the fence line go messy." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quit rodenticide. Secondary poisoning is how you lose the night shift." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Shut the trash. An open can teaches the wrong address." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Close the chicken coop at dusk if you keep birds." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A plant saucer of water, refreshed, beats any food you were considering." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tick checks still happen. Permethrin on clothes, not on the opossum." })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold",
								children: "Questions people actually ask"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 divide-y divide-bark/15 border-y border-bark/15",
								children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									className: "group py-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
										className: "flex min-h-11 cursor-pointer items-center justify-between gap-4 py-3 font-medium",
										children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-bark transition-transform duration-200 group-open:rotate-180" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-3xl pb-4 text-sm leading-relaxed text-ink/75",
										children: item.a
									})]
								}, item.q))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 max-w-3xl text-sm leading-relaxed text-ink/60",
							children: "Providing a nest box and some messy cover is generally legal. Trapping, relocating, or keeping a wild opossum is regulated and often illegal. This is passive housing, not wildlife control and not veterinary advice. If your state wildlife agency says otherwise, they win."
						})
					]
				})
			]
		})]
	});
}
function Fact({ icon, kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-bark/15 bg-bark/5 p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-moss",
				children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: kicker
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-xl font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-ink/75",
				children: body
			})
		]
	});
}
function Spec({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-paper px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs font-medium tracking-wide text-ink/55",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-lg font-semibold",
			children: v
		})]
	});
}
function Callout({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-2xl border border-bark/15 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-lg font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-ink/75",
			children
		})]
	});
}
function FrontElevation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 rounded-2xl border border-bark/20 bg-bark/5 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-3 w-11/12 rounded-sm bg-bark/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto mt-1 aspect-3/4 w-4/5 border-2 border-bark bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[28%] left-1/2 size-[38%] -translate-x-1/2 rounded-full border-2 border-bark bg-ink/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute right-2 bottom-2 font-display text-xs text-bark",
						children: "16½″"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-1 flex w-[78%] justify-between px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-8 bg-bark/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-8 bg-bark/70" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-xs text-ink/55",
					children: "5″ door · 12″ wall on an 18″ floor"
				})
			]
		})
	});
}
function SideElevation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 rounded-2xl border border-bark/20 bg-bark/5 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-40 border-2 border-bark bg-paper",
					style: { clipPath: "polygon(0 28%, 100% 0, 100% 100%, 0 100%)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-2 left-2 text-xs text-bark",
						children: "12″ door end"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-2 right-2 text-xs text-bark",
						children: "16″"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 h-2 w-full bg-bark/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-xs text-ink/55",
					children: "18″ side · runners underneath · hinge at the right"
				})
			]
		})
	});
}
function CutSheet() {
	const toggleCut = useProgress((s) => s.toggleCut);
	const done = useProgress((s) => s.cuts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-square w-full rounded-xl border border-bark/30 bg-bark/10",
			children: cuts.map((cut) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-pressed": !!done[cut.id],
				onClick: () => toggleCut(cut.id),
				className: "absolute flex flex-col items-start justify-between border p-1.5 text-left transition-colors duration-150 " + (done[cut.id] ? "border-moss bg-moss text-paper" : "border-bark/40 bg-paper text-ink hover:border-bark"),
				style: {
					left: `${cut.x / 48 * 100}%`,
					top: `${cut.y / 48 * 100}%`,
					width: `${cut.w / 48 * 100}%`,
					height: `${cut.h / 48 * 100}%`
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium",
					children: cut.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tabular-nums",
					children: cut.size
				})]
			}, cut.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs text-ink/55",
			children: "Tap a piece once it’s cut. The sheet is 48″ square."
		})]
	});
}
function RoofSheet() {
	const toggleCut = useProgress((s) => s.toggleCut);
	const done = useProgress((s) => s.cuts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mt-4 w-full rounded-xl border border-bark/30 bg-bark/10",
		style: { aspectRatio: `24 / 48` },
		children: roofCuts.map((cut) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-pressed": !!done[cut.id],
			onClick: () => toggleCut(cut.id),
			className: "absolute flex flex-col items-start justify-between border p-1.5 text-left transition-colors duration-150 " + (done[cut.id] ? "border-moss bg-moss text-paper" : "border-bark/40 bg-paper text-ink hover:border-bark"),
			style: {
				left: `${cut.x / 24 * 100}%`,
				top: `${cut.y / 48 * 100}%`,
				width: `${cut.w / 24 * 100}%`,
				height: `${cut.h / 48 * 100}%`
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium",
				children: cut.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs tabular-nums",
				children: cut.size
			})]
		}, cut.id))
	});
}
function BoxStepper() {
	const boxes = useProgress((s) => s.boxes);
	const setBoxes = useProgress((s) => s.setBoxes);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-ink/70",
				children: "Dens"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Fewer dens",
				onClick: () => setBoxes(boxes - 1),
				disabled: boxes <= 1,
				className: "inline-flex size-11 items-center justify-center rounded-full border border-bark/30 disabled:opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-6 text-center font-display text-2xl font-semibold tabular-nums",
				children: boxes
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "More dens",
				onClick: () => setBoxes(boxes + 1),
				disabled: boxes >= 4,
				className: "inline-flex size-11 items-center justify-center rounded-full border border-bark/30 disabled:opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			})
		]
	});
}
function StepRow({ id, index, title, body }) {
	const done = useProgress((s) => !!s.steps[id]);
	const toggle = useProgress((s) => s.toggleStep);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": done,
			"aria-label": done ? `Mark step ${index} not done` : `Mark step ${index} done`,
			onClick: () => toggle(id),
			className: "mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-150 " + (done ? "border-moss bg-moss text-paper" : "border-bark/30 text-transparent"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "group min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
				className: "flex min-h-11 cursor-pointer items-center justify-between gap-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: done ? "text-ink/50 line-through" : "font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 tabular-nums text-moss",
						children: index
					}), title]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-bark transition-transform duration-200 group-open:rotate-180" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl pb-3 text-sm leading-relaxed text-ink/75",
				children: body
			})]
		})]
	});
}
function Siting() {
	const dogs = useProgress((s) => s.dogs);
	const poultry = useProgress((s) => s.poultry);
	const cover = useProgress((s) => s.cover);
	const drainage = useProgress((s) => s.drainage);
	const distance = useProgress((s) => s.distance);
	const advice = siteAdvice({
		dogs,
		poultry,
		cover,
		drainage,
		distance
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 grid gap-8 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Dogs out after dark?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
						value: dogs,
						onChange: useProgress.getState().setDogs,
						options: [
							{
								id: "no",
								label: "Indoors at night"
							},
							{
								id: "sometimes",
								label: "Sometimes"
							},
							{
								id: "yes",
								label: "They patrol"
							}
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Chickens, ducks, or other birds?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
						value: poultry,
						onChange: useProgress.getState().setPoultry,
						options: [{
							id: "no",
							label: "No birds"
						}, {
							id: "yes",
							label: "Yes, a coop"
						}]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Where is the cover?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
						value: cover,
						onChange: useProgress.getState().setCover,
						options: [
							{
								id: "shrubs",
								label: "Shrubs"
							},
							{
								id: "fence",
								label: "Fence line"
							},
							{
								id: "shed",
								label: "Behind the shed"
							},
							{
								id: "woodpile",
								label: "Woodpile"
							},
							{
								id: "none",
								label: "It’s all lawn"
							}
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "After a hard rain?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
						value: drainage,
						onChange: useProgress.getState().setDrainage,
						options: [{
							id: "drains",
							label: "It drains"
						}, {
							id: "pools",
							label: "Water sits"
						}]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "How close to the house?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
						value: distance,
						onChange: useProgress.getState().setDistance,
						options: [
							{
								id: "garden",
								label: "Near the garden"
							},
							{
								id: "far",
								label: "Back corner"
							},
							{
								id: "either",
								label: "Wherever works"
							}
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-2xl bg-moss p-6 text-paper lg:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-medium text-paper/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hammer, { className: "size-4" }), "Placement"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-2xl font-semibold",
					children: advice.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-paper/95",
					children: advice.place
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3 text-sm leading-relaxed text-paper/85",
					children: advice.notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: note }, note))
				})
			]
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
		className: "mb-2 text-sm font-medium",
		children: label
	}), children] });
}
function Choices({ value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children: options.map((option) => {
			const on = option.id === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": on,
				onClick: () => onChange(option.id),
				className: "min-h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150 " + (on ? "bg-ink text-paper" : "border border-bark/30 text-ink"),
				children: option.label
			}, option.id);
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideApp, {});
}
//#endregion
export { Home as component };
