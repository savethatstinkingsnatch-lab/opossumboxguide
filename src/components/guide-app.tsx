import { useEffect, type ReactNode } from "react";
import {
  Bug,
  Check,
  ChevronDown,
  Hammer,
  Minus,
  Moon,
  Plus,
  Printer,
  RotateCcw,
  TreePine,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import portraitImg from "@/assets/portrait.jpg";
import boxImg from "@/assets/box.jpg";
import {
  SHEET,
  ROOF_SHEET_H,
  ROOF_SHEET_W,
  brushSteps,
  buildSteps,
  cuts,
  faqs,
  glossary,
  roofCuts,
  shoppingList,
  siteAdvice,
  startSteps,
} from "@/data/plan";
import { useProgress } from "@/store/progress";

const NAV = [
  { href: "#start", label: "Start" },
  { href: "#why", label: "The claim" },
  { href: "#tenant", label: "The tenant" },
  { href: "#plan", label: "The den" },
  { href: "#shop", label: "Shop" },
  { href: "#build", label: "Build" },
  { href: "#site", label: "Where" },
  { href: "#glossary", label: "Glossary" },
  { href: "#keep", label: "After" },
];

export function GuideApp() {
  const steps = useProgress((s) => s.steps);
  const cutsDone = useProgress((s) => s.cuts);
  const boxes = useProgress((s) => s.boxes);

  useEffect(() => {
    void useProgress.persist.rehydrate();
  }, []);

  const buildDone = buildSteps.filter((s) => steps[s.id]).length;
  const cutDone = [...cuts, ...roofCuts].filter((c) => cutsDone[c.id]).length;
  const cutTotal = cuts.length + roofCuts.length;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="no-print sticky top-0 z-30 border-b border-bark/15 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="min-w-0 max-w-xs sm:max-w-sm">
            <span className="block font-display text-lg font-semibold tracking-tight">Hollow Home</span>
            <span className="mt-0.5 block text-xs leading-snug text-ink/70">
              The Education Revolution Pocket Guide, Volume 28: Opossum Boxes
            </span>
            <span className="block text-xs text-ink/60">by Blue and the Awesome Dudes</span>
          </a>
          <nav className="hidden flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-ink/70 md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#build"
            className="rounded-full bg-moss px-3 py-2 text-sm font-medium text-paper tabular-nums transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            {buildDone}/{buildSteps.length} built
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <section className="grid items-end gap-8 pt-8 lg:grid-cols-12 lg:pt-12">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium tracking-wide text-moss">Field manual</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              Build a dry backyard den for Virginia opossums.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
              Opossums use a variety of shelters, and a box may offer another place to rest. It
              is not a dependable way to attract an opossum or reduce ticks in your yard.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#plan"
                className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                See the plan
              </a>
              <a
                href="#build"
                className="inline-flex min-h-11 items-center rounded-full border border-bark/30 px-5 text-sm font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                Start the build
              </a>
            </div>
          </div>
          <figure className="lg:col-span-6">
            <img
              src={heroImg}
              alt="A Virginia opossum sitting in the round doorway of a low wooden den box under a shrub at dusk"
              className="aspect-video w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-2 text-sm text-ink/60">
              Door low, roof shedding away from the hole, cover on at least one side.
            </figcaption>
          </figure>
        </section>

        <section id="start" className="scroll-mt-24 border-t border-bark/15 py-14">
          <p className="text-sm font-medium tracking-wide text-moss">Start here</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            Want a den box?
          </h2>
          <ol className="mt-6 max-w-3xl list-decimal space-y-3 pl-5 text-base leading-relaxed text-ink/85">
            {startSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-ink/70">
            See also Volume 26: Chickens — latch the coop every night.
          </p>
        </section>

        <section id="why" className="scroll-mt-24 border-t border-bark/15 py-14">
          <p className="text-sm font-medium tracking-wide text-moss">01 — What a box is not</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            Shelter, not tick control.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Fact
              icon={<Bug className="size-5" />}
              kicker="The lab"
              title="Five captive animals"
              body="In 2009, researchers put larval blacklegged ticks on five captive opossums. About 3.5 ticks per animal fell off after feeding. The missing ticks were assumed eaten. That study did not show that opossums regularly remove ticks in the wild."
            />
            <Fact
              icon={<Moon className="size-5" />}
              kicker="Wild stomachs"
              title="No ticks found"
              body="A 2021 study found no ticks or tick parts in the stomachs of 32 wild Illinois opossums. The same paper reviewed 23 earlier diet studies. None of those found ticks either."
            />
            <Fact
              icon={<TreePine className="size-5" />}
              kicker="The yard"
              title="Other animals may come"
              body="Illinois Extension cautions that food and shelter left for opossums can also draw raccoons, feral cats, rats, mice, and other rodents. A den is not a tick program. Keep doing tick checks."
            />
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink/70">
            Sources: Keesing et al., 2009, Proceedings of the Royal Society B; “Are Virginia
            opossums really ecological traps for ticks?”, Ticks and Tick-borne Diseases, 2021;
            Christopher Enroth, Illinois Extension, June 14, 2024. The “5,000 ticks” figure is a
            projection from the lab assumption, not a count of ticks eaten outdoors.
          </p>
        </section>

        <section id="tenant" className="scroll-mt-24 border-t border-bark/15 py-14">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <figure className="lg:col-span-5">
              <img
                src={portraitImg}
                alt="Close portrait of a Virginia opossum with a white face, pink nose, and dark rounded ears"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </figure>
            <div className="lg:col-span-7">
              <p className="text-sm font-medium tracking-wide text-moss">02 — The tenant</p>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Virginia opossum. Not a pet, not a possum from Australia.
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/80">
                <p>
                  The only marsupial native to the United States and Canada. Cat-sized body,
                  white face, pink nose, bare black ears, and a prehensile tail they use for
                  balance — not for hanging asleep, which is mostly a myth. They are nocturnal
                  and usually avoid a fight.
                </p>
                <p>
                  They already use hollow logs, brush, abandoned burrows, and the space under a
                  shed. A box is one more optional shelter. Whether anything uses it, and for
                  how long, is unpredictable. A ground box is not proven to keep opossums out of
                  attics or to stop them using other shelter.
                </p>
                <p>
                  This plan is the wrong hole size for an Australian brushtail or ringtail.
                  If you don’t have Virginia opossums — much of the Rockies and the high
                  desert still doesn’t — lumber will not conjure them.
                </p>
              </div>
            </div>
          </div>
          <aside className="mt-8 rounded-2xl border border-clay/40 bg-clay/10 p-5 sm:p-6">
            <h3 className="font-display text-xl font-semibold">Hands off</h3>
            <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/85">
              <li>Do not handle, chase, corner, or pick up a wild opossum.</li>
              <li>Give them an exit. Dogs that pin wildlife create bites and vet bills.</li>
              <li>
                Hissing, drooling, and falling over stiff (“playing dead”) are normal fear
                responses, not an invitation to poke them.
              </li>
              <li>
                A confused, unafraid, or injured animal in daylight: keep people and pets away
                and call animal control or a licensed rehabilitator.
              </li>
              <li>Wash hands after touching the empty box or bedding. Do a tick check after yard work.</li>
            </ul>
          </aside>
        </section>

        <section id="plan" className="scroll-mt-24 border-t border-bark/15 py-14">
          <p className="text-sm font-medium tracking-wide text-moss">03 — The den</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            A low shed-roof box. Big enough to curl up in, small enough to carry.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/80">
            Walls and floor from one 4×4 sheet of ¾″ exterior plywood. Roof and awning from
            a thinner 2×4 panel, so the heavy sheet still fits in a car. Nothing
            pressure-treated. Nothing painted inside. The wood is supposed to go gray. A 5″
            door does not select for opossums. Other animals about that size may use it too.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bark/20 bg-bark/20 sm:grid-cols-4">
            <Spec k="Interior" v="16½″ × 16½″" />
            <Spec k="Ceiling" v="12″ door, 16″ back" />
            <Spec k="Door" v="5″ round" />
            <Spec k="Pitch" v="About 12°" />
          </dl>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-semibold">Front</h3>
              <FrontElevation />
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Hole centered on the 16½″ front. Bottom of the opening is 2½″ off the floor
                panel, so rain doesn’t pour in and a joey can still climb through.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">Side</h3>
              <SideElevation />
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Four inches of rise over the 18″ side. Hinge the lid at the tall back.
                Two cedar runners, inset 3″, keep the floor off the soil.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="font-display text-xl font-semibold">Cut the 4×4 this way</h3>
              <p className="mt-2 text-sm text-ink/70">
                Inches, viewed from above. Gaps are the saw kerf. Check a piece off once
                it’s cut — that list stays on this device.
              </p>
              <CutSheet />
            </div>
            <div className="lg:col-span-5">
              <h3 className="font-display text-xl font-semibold">Roof panel, 24″ × 48″</h3>
              <p className="mt-2 text-sm text-ink/70">
                Half-inch plywood. The roof uses the full 24″ width so you only crosscut.
              </p>
              <RoofSheet />
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/75">
                <li>Roof sits 22″ across the box and 24″ down the slope.</li>
                <li>About 2″ of overhang at the back, 4″ over the door, horns even on the sides.</li>
                <li>Awning is 10″ × 7″, tipped with a side offcut.</li>
              </ul>
            </div>
          </div>

          <figure className="mt-12 grid items-center gap-6 rounded-2xl border border-bark/15 bg-bark/5 p-3 sm:grid-cols-5 sm:p-4">
            <img
              src={boxImg}
              alt="Finished unpainted plywood den box with a sloped roof and round door, set on runners by a fence and woodpile"
              className="aspect-3/2 w-full rounded-xl object-cover sm:col-span-3"
            />
            <figcaption className="px-2 text-sm leading-relaxed text-ink/75 sm:col-span-2">
              Finished and unfinished on purpose. Shade, a fence or shrub at its back, dry
              leaves within dragging distance. If your first version is a little out of
              square, they will not file a complaint.
            </figcaption>
          </figure>
        </section>

        <section id="shop" className="scroll-mt-24 border-t border-bark/15 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-wide text-moss">04 — Shop</p>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Approximate materials cost for one DIY den
              </h2>
            </div>
            <BoxStepper />
          </div>
          <p className="mt-4 max-w-3xl text-ink/80">
            Approximate materials cost for one DIY den: roughly $80–110 if you’re buying both
            panels, a cedar stick, and hardware. That figure is lumber and screws, not a price
            to unlock this guide. Less if the screw jar is already honest. A second box is
            optional. There is no set spacing that makes two better than one, and either box
            may sit empty.
          </p>
          <ul className="mt-8 divide-y divide-bark/15 border-y border-bark/15">
            {shoppingList(boxes).map((line) => (
              <li key={line.item} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                <p className="font-medium sm:col-span-6">{line.item}</p>
                <p className="text-moss tabular-nums sm:col-span-3">{line.qty}</p>
                <p className="text-sm leading-relaxed text-ink/65 sm:col-span-3">{line.note}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Callout title="Leave unfinished">
              No interior paint, no stain, no linseed oil “just on the lip.” If you truly
              can’t stand raw plywood, one coat of exterior latex on the outside only, then
              two weeks of curing in the weather before it goes out. Dark brown. Never the
              doorway.
            </Callout>
            <Callout title="Never these">
              Pressure-treated lumber, cedar shavings as bedding, fabric, newspaper,
              mothballs, poison bait in the yard, and a screened hole. Mothballs are a
              pesticide misuse, not a “critter trick,” and rodenticides kill the opossum
              that eats the poisoned mouse.
            </Callout>
          </div>
        </section>

        <section id="build" className="scroll-mt-24 border-t border-bark/15 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-wide text-moss">05 — Build</p>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Twelve steps. Check them off.
              </h2>
            </div>
            <div className="no-print flex gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-bark/30 px-4 text-sm font-medium transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                <Printer className="size-4" />
                Print
              </button>
              <button
                type="button"
                onClick={() => useProgress.getState().reset()}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-bark/30 px-4 text-sm font-medium transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                <RotateCcw className="size-4" />
                Reset
              </button>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-bark/15">
            <div
              className="h-full rounded-full bg-moss transition-[width] duration-200 ease-out"
              style={{ width: `${(buildDone / buildSteps.length) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-sm tabular-nums text-ink/60">
            {buildDone} of {buildSteps.length} steps · {cutDone} of {cutTotal} pieces marked cut
          </p>
          <ol className="mt-6 divide-y divide-bark/15 border-y border-bark/15">
            {buildSteps.map((step, i) => (
              <StepRow key={step.id} id={step.id} index={i + 1} title={step.title} body={step.body} />
            ))}
          </ol>

          <div className="mt-12">
            <h3 className="font-display text-2xl font-semibold">No saw? Build the brush pile tonight.</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink/80">
              A loose pile of logs and brush is the den they evolved with. Use it alone, or
              park the plywood box against it. The only failure mode is tidying it into a
              solid heap with no tunnels.
            </p>
            <ol className="mt-6 divide-y divide-bark/15 border-y border-bark/15">
              {brushSteps.map((step, i) => (
                <StepRow key={step.id} id={step.id} index={i + 1} title={step.title} body={step.body} />
              ))}
            </ol>
          </div>
        </section>

        <section id="site" className="scroll-mt-24 border-t border-bark/15 py-14">
          <p className="text-sm font-medium tracking-wide text-moss">06 — Where</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            The spot matters more than the joinery.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/80">
            Answer for the yard you actually have. The card updates as you go, and it stays
            saved with your checklist.
          </p>
          <Siting />
        </section>

        <section id="keep" className="scroll-mt-24 border-t border-bark/15 py-14">
          <p className="text-sm font-medium tracking-wide text-moss">07 — After</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            If something uses it, you may not know when.
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Callout title="Possible signs">
              Leaves rearranged, a faint musk, or tracks with a hind foot that looks like a
              small hand. Those are clues, not a schedule. You may also see nothing. Red
              eyeshine, if you sweep a light from far enough away to stay back, is a reason to
              leave, not to investigate.
            </Callout>
            <Callout title="Leave it shut">
              Don’t open the box to see who is home. Tapping the roof does not tell you it is
              empty. If occupancy is uncertain, leave it closed. Ask your state wildlife agency
              or a licensed rehabilitator before you disturb an animal or a nest. No foggers
              and no bleach bombs.
            </Callout>
            <Callout title="If one plays dead">
              Leave it. The act can last minutes or longer, and people have buried animals
              that were not dead. Give it the evening and a clear path away from dogs. Hissing
              and drooling at the door is a boundary, not a disease. Back up.
            </Callout>
          </div>

          <div className="mt-8 rounded-2xl bg-ink px-5 py-6 text-paper sm:px-8 sm:py-8">
            <h3 className="font-display text-2xl font-semibold">Yard habits that still matter</h3>
            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-paper/85 sm:grid-cols-2">
              <li>Mow the lawn people actually play on. A messy fence line is cover, not a tick plan.</li>
              <li>Skip rodenticide. An animal that eats a poisoned mouse can be poisoned too.</li>
              <li>Shut the trash. An open can teaches the wrong address.</li>
              <li>
                Close the chicken coop at dusk if you keep birds. See also Volume 26: Chickens —
                latch the coop every night.
              </li>
              <li>A plant saucer of water, refreshed, beats any food you were considering.</li>
              <li>Tick checks still happen. Permethrin on clothes, not on the opossum.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-semibold">Questions people actually ask</h3>
            <div className="mt-4 divide-y divide-bark/15 border-y border-bark/15">
              {faqs.map((item) => (
                <details key={item.q} className="group py-1">
                  <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-3 font-medium">
                    {item.q}
                    <ChevronDown className="size-4 shrink-0 text-bark transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="max-w-3xl pb-4 text-sm leading-relaxed text-ink/75">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div id="glossary" className="mt-12 scroll-mt-24">
            <h3 className="font-display text-2xl font-semibold">Glossary</h3>
            <dl className="mt-4 divide-y divide-bark/15 border-y border-bark/15">
              {glossary.map((entry) => (
                <div key={entry.term} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                  <dt className="font-medium sm:col-span-4">{entry.term}</dt>
                  <dd className="text-sm leading-relaxed text-ink/75 sm:col-span-8">{entry.def}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink/60">
            Providing a nest box is optional shelter, not a permit to handle wildlife. Rules
            for boxes, water, feeding, trapping, relocating, and keeping wild animals differ
            by city, county, HOA, and state. This guide cannot say what is legal where you
            live. Before you install a den, leave out water, touch an animal, or move one, ask
            your state wildlife agency. Wildlife rehabilitation requires whatever permit your
            state demands. If you are not a licensed rehabilitator, do not try to raise
            orphans — call one. This is not wildlife control and not veterinary advice. Blue
            and the Awesome Dudes are not responsible for bites, ticks, property damage, or
            legal trouble. Part of The Education Revolution pocket guide series. Privacy: This
            guide does not collect your name, email, or any personal information. Your build
            checklist is saved only on your own device.
          </p>
        </section>
      </main>
    </div>
  );
}

function Fact({
  icon,
  kicker,
  title,
  body,
}: {
  icon: ReactNode;
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-bark/15 bg-bark/5 p-5">
      <div className="flex items-center gap-2 text-moss">
        {icon}
        <p className="text-sm font-medium">{kicker}</p>
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/75">{body}</p>
    </article>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-paper px-4 py-4">
      <dt className="text-xs font-medium tracking-wide text-ink/55">{k}</dt>
      <dd className="mt-1 font-display text-lg font-semibold">{v}</dd>
    </div>
  );
}

function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="rounded-2xl border border-bark/15 p-5">
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/75">{children}</p>
    </aside>
  );
}

function FrontElevation() {
  return (
    <div className="mt-4 rounded-2xl border border-bark/20 bg-bark/5 p-4">
      <div className="mx-auto w-full max-w-sm">
        <div className="mx-auto h-3 w-11/12 rounded-sm bg-bark/50" />
        <div className="relative mx-auto mt-1 aspect-3/4 w-4/5 border-2 border-bark bg-paper">
          <div className="absolute top-[28%] left-1/2 size-[38%] -translate-x-1/2 rounded-full border-2 border-bark bg-ink/80" />
          <span className="absolute right-2 bottom-2 font-display text-xs text-bark">16½″</span>
        </div>
        <div className="mx-auto mt-1 flex w-[78%] justify-between px-3">
          <span className="h-2 w-8 bg-bark/70" />
          <span className="h-2 w-8 bg-bark/70" />
        </div>
        <p className="mt-2 text-center text-xs text-ink/55">5″ door · 12″ wall on an 18″ floor</p>
      </div>
    </div>
  );
}

function SideElevation() {
  return (
    <div className="mt-4 rounded-2xl border border-bark/20 bg-bark/5 p-4">
      <div className="mx-auto max-w-sm">
        <div
          className="relative h-40 border-2 border-bark bg-paper"
          style={{ clipPath: "polygon(0 28%, 100% 0, 100% 100%, 0 100%)" }}
        >
          <span className="absolute bottom-2 left-2 text-xs text-bark">12″ door end</span>
          <span className="absolute top-2 right-2 text-xs text-bark">16″</span>
        </div>
        <div className="mt-1 h-2 w-full bg-bark/70" />
        <p className="mt-2 text-center text-xs text-ink/55">18″ side · runners underneath · hinge at the right</p>
      </div>
    </div>
  );
}

function CutSheet() {
  const toggleCut = useProgress((s) => s.toggleCut);
  const done = useProgress((s) => s.cuts);
  return (
    <div className="mt-4">
      <div className="relative aspect-square w-full rounded-xl border border-bark/30 bg-bark/10">
        {cuts.map((cut) => (
          <button
            key={cut.id}
            type="button"
            aria-pressed={!!done[cut.id]}
            onClick={() => toggleCut(cut.id)}
            className={
              "absolute flex flex-col items-start justify-between border p-1.5 text-left transition-colors duration-150 " +
              (done[cut.id]
                ? "border-moss bg-moss text-paper"
                : "border-bark/40 bg-paper text-ink hover:border-bark")
            }
            style={{
              left: `${(cut.x / SHEET) * 100}%`,
              top: `${(cut.y / SHEET) * 100}%`,
              width: `${(cut.w / SHEET) * 100}%`,
              height: `${(cut.h / SHEET) * 100}%`,
            }}
          >
            <span className="text-xs font-medium">{cut.name}</span>
            <span className="text-xs tabular-nums">{cut.size}</span>
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-ink/55">Tap a piece once it’s cut. The sheet is 48″ square.</p>
    </div>
  );
}

function RoofSheet() {
  const toggleCut = useProgress((s) => s.toggleCut);
  const done = useProgress((s) => s.cuts);
  return (
    <div
      className="relative mt-4 w-full rounded-xl border border-bark/30 bg-bark/10"
      style={{ aspectRatio: `${ROOF_SHEET_W} / ${ROOF_SHEET_H}` }}
    >
      {roofCuts.map((cut) => (
        <button
          key={cut.id}
          type="button"
          aria-pressed={!!done[cut.id]}
          onClick={() => toggleCut(cut.id)}
          className={
            "absolute flex flex-col items-start justify-between border p-1.5 text-left transition-colors duration-150 " +
            (done[cut.id]
              ? "border-moss bg-moss text-paper"
              : "border-bark/40 bg-paper text-ink hover:border-bark")
          }
          style={{
            left: `${(cut.x / ROOF_SHEET_W) * 100}%`,
            top: `${(cut.y / ROOF_SHEET_H) * 100}%`,
            width: `${(cut.w / ROOF_SHEET_W) * 100}%`,
            height: `${(cut.h / ROOF_SHEET_H) * 100}%`,
          }}
        >
          <span className="text-xs font-medium">{cut.name}</span>
          <span className="text-xs tabular-nums">{cut.size}</span>
        </button>
      ))}
    </div>
  );
}

function BoxStepper() {
  const boxes = useProgress((s) => s.boxes);
  const setBoxes = useProgress((s) => s.setBoxes);
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-ink/70">Dens</span>
      <button
        type="button"
        aria-label="Fewer dens"
        onClick={() => setBoxes(boxes - 1)}
        disabled={boxes <= 1}
        className="inline-flex size-11 items-center justify-center rounded-full border border-bark/30 disabled:opacity-40"
      >
        <Minus className="size-4" />
      </button>
      <span className="w-6 text-center font-display text-2xl font-semibold tabular-nums">{boxes}</span>
      <button
        type="button"
        aria-label="More dens"
        onClick={() => setBoxes(boxes + 1)}
        disabled={boxes >= 4}
        className="inline-flex size-11 items-center justify-center rounded-full border border-bark/30 disabled:opacity-40"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}

function StepRow({
  id,
  index,
  title,
  body,
}: {
  id: string;
  index: number;
  title: string;
  body: string;
}) {
  const done = useProgress((s) => !!s.steps[id]);
  const toggle = useProgress((s) => s.toggleStep);
  return (
    <li className="flex gap-3 py-3">
      <button
        type="button"
        aria-pressed={done}
        aria-label={done ? `Mark step ${index} not done` : `Mark step ${index} done`}
        onClick={() => toggle(id)}
        className={
          "mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-150 " +
          (done ? "border-moss bg-moss text-paper" : "border-bark/30 text-transparent")
        }
      >
        <Check className="size-4" />
      </button>
      <details className="group min-w-0 flex-1">
        <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 py-2">
          <span className={done ? "text-ink/50 line-through" : "font-medium"}>
            <span className="mr-2 tabular-nums text-moss">{index}</span>
            {title}
          </span>
          <ChevronDown className="size-4 shrink-0 text-bark transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <p className="max-w-3xl pb-3 text-sm leading-relaxed text-ink/75">{body}</p>
      </details>
    </li>
  );
}

function Siting() {
  const dogs = useProgress((s) => s.dogs);
  const poultry = useProgress((s) => s.poultry);
  const cover = useProgress((s) => s.cover);
  const drainage = useProgress((s) => s.drainage);
  const distance = useProgress((s) => s.distance);
  const advice = siteAdvice({ dogs, poultry, cover, drainage, distance });

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-7">
        <Field label="Dogs out after dark?">
          <Choices
            value={dogs}
            onChange={useProgress.getState().setDogs}
            options={[
              { id: "no", label: "Indoors at night" },
              { id: "sometimes", label: "Sometimes" },
              { id: "yes", label: "They patrol" },
            ]}
          />
        </Field>
        <Field label="Chickens, ducks, or other birds?">
          <Choices
            value={poultry}
            onChange={useProgress.getState().setPoultry}
            options={[
              { id: "no", label: "No birds" },
              { id: "yes", label: "Yes, a coop" },
            ]}
          />
        </Field>
        <Field label="Where is the cover?">
          <Choices
            value={cover}
            onChange={useProgress.getState().setCover}
            options={[
              { id: "shrubs", label: "Shrubs" },
              { id: "fence", label: "Fence line" },
              { id: "shed", label: "Behind the shed" },
              { id: "woodpile", label: "Woodpile" },
              { id: "none", label: "It’s all lawn" },
            ]}
          />
        </Field>
        <Field label="After a hard rain?">
          <Choices
            value={drainage}
            onChange={useProgress.getState().setDrainage}
            options={[
              { id: "drains", label: "It drains" },
              { id: "pools", label: "Water sits" },
            ]}
          />
        </Field>
        <Field label="How close to the house?">
          <Choices
            value={distance}
            onChange={useProgress.getState().setDistance}
            options={[
              { id: "garden", label: "Near the garden" },
              { id: "far", label: "Back corner" },
              { id: "either", label: "Wherever works" },
            ]}
          />
        </Field>
      </div>
      <aside className="h-fit rounded-2xl bg-moss p-6 text-paper lg:col-span-5">
        <div className="flex items-center gap-2 text-sm font-medium text-paper/80">
          <Hammer className="size-4" />
          Placement
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold">{advice.title}</h3>
        <p className="mt-3 leading-relaxed text-paper/95">{advice.place}</p>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-paper/85">
          {advice.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium">{label}</legend>
      {children}
    </fieldset>
  );
}

function Choices<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { id: T; label: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const on = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(option.id)}
            className={
              "min-h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150 " +
              (on ? "bg-ink text-paper" : "border border-bark/30 text-ink")
            }
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
