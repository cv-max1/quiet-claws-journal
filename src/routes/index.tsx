import { createFileRoute } from "@tanstack/react-router";
import heroDogAsset from "@/assets/hero-dog.avif.asset.json";
import pawHandsAsset from "@/assets/paw-hands.avif.asset.json";
import scratchBoardAsset from "@/assets/scratch-board.jpg.asset.json";

const heroDog = heroDogAsset.url;
const pawHands = pawHandsAsset.url;
const scratchBoard = scratchBoardAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const SANS = "'Inter', system-ui, -apple-system, sans-serif";
const SERIF = "'Source Serif 4', Georgia, 'Times New Roman', serif";
const OUTBOUND = "https://thedogparlor.store/products/dog-nail-file-board-adjustable-wooden-scratching-board-for-nail-trimming-self-scratcher-toy-safe-pet-grooming-accessories"; // single outbound CTA link

function Masthead() {
  return (
    <header className="pt-8 pb-4 md:pt-12 md:pb-6 text-center">
      <div
        style={{ fontFamily: SANS }}
        className="text-2xl md:text-4xl font-bold tracking-tight text-foreground"
      >
        The Modern Pet Journal
      </div>
      <div
        style={{ fontFamily: SANS }}
        className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.28em] text-muted-foreground"
      >
        Pet Health, Behavior &amp; Care
      </div>
      <hr className="mt-6 border-t border-border" />
      <div
        style={{ fontFamily: SANS }}
        className="mt-3 flex items-center justify-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
      >
        <span>Pet Health &amp; Behavior</span>
        <span aria-hidden className="opacity-40">·</span>
        <span>Partner Content</span>
      </div>
    </header>
  );
}

function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{ fontFamily: SANS }}
      className="mt-12 mb-5 text-xl md:text-2xl font-semibold tracking-tight text-foreground"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{ fontFamily: SERIF }}
      className="mb-5 text-[1.075rem] md:text-[1.15rem] leading-[1.8] text-foreground/90"
    >
      {children}
    </p>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      style={{ fontFamily: SERIF }}
      className="my-10 border-l-4 border-primary pl-5 md:pl-6 italic text-[1.25rem] md:text-[1.45rem] leading-[1.55] text-foreground/85"
    >
      {children}
    </blockquote>
  );
}

function ArticleImage({
  src,
  alt,
  caption,
  eager,
}: {
  src: string;
  alt: string;
  caption?: string;
  eager?: boolean;
}) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        width={1024}
        height={1024}
        loading={eager ? "eager" : "lazy"}
        className="w-full h-auto rounded-sm object-cover aspect-[16/10]"
      />
      {caption ? (
        <figcaption
          style={{ fontFamily: SANS }}
          className="mt-3 text-xs md:text-sm text-muted-foreground italic text-center"
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-[680px] px-5 md:px-6">
        <Masthead />

        <article className="pb-24">
          <h1
            style={{ fontFamily: SANS }}
            className="mt-6 text-3xl md:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-foreground"
          >
            The Ancient Secret My Dog Already Knew — I Just Didn't Know It Yet
          </h1>

          <p
            style={{ fontFamily: SERIF }}
            className="mt-5 text-lg md:text-xl leading-relaxed text-muted-foreground italic"
          >
            Long before clippers or Dremels existed, dogs solved this problem themselves. I just had to remember how.
          </p>

          <div
            style={{ fontFamily: SANS }}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm text-muted-foreground border-y border-border py-4"
          >
            <span>
              By <span className="text-foreground font-medium">Sarah Whitfield</span>
            </span>
            <span aria-hidden className="opacity-40">·</span>
            <span>Pet Health &amp; Behavior</span>
            <span aria-hidden className="opacity-40">·</span>
            <span>6 min read</span>
          </div>

          <ArticleImage
            src={heroDog}
            alt="A calm dog resting on a wooden floor in warm afternoon light"
            caption="For many dogs, the fear of nail trims runs deeper than the tool itself."
            eager
          />

          <P>I used to think my dog was just difficult.</P>

          <P>
            Every nail trim was the same fight — clippers out, dog gone rigid, both of us
            dreading the next ten minutes. I tried everything. Better treats. Slower approaches.
            A Dremel instead of clippers, hoping the sound would feel less threatening than a blade.
            Nothing stuck. Eventually I gave up and started paying a groomer every few weeks, and even
            then she'd come home stressed, like something had happened that she just wanted to be done with.
          </P>

          <P>
            I assumed this was just who she was. My fault, somehow, for not training her right early on.
          </P>

          <P>
            What actually changed things wasn't a better technique. It was something I stumbled into
            almost by accident — a fact so obvious in hindsight that I couldn't believe I'd never once considered it.
          </P>

          <Subhead>Dogs Have Been Doing This Themselves for Thousands of Years</Subhead>

          <P>
            Before dogs lived indoors — before carpet, before hardwood floors — nail trimming simply
            wasn't a thing that needed to happen. Wild dogs and their ancestors ran, dug, and hunted
            on rock, gravel, and packed earth every single day. The friction wore their nails down naturally.
            No tools. No humans involved. No trauma.
          </P>

          <P>
            That instinct didn't disappear when dogs moved into our homes. We just took away the terrain
            that used to trigger it. Somewhere along the way, "dog owner" started including a task no dog
            ever needed help with for most of history — and we started treating the workaround, not the instinct,
            as the solution.
          </P>

          <PullQuote>
            "The moment I understood that, something clicked. My dog hadn't forgotten how to do this.
            She'd just never had the surface for it."
          </PullQuote>

          <ArticleImage
            src={pawHands}
            alt="A person gently holding a small dog's paw on a soft blanket"
          />

          <Subhead>So Why Do Clippers and Dremels Still Fail So Often?</Subhead>

          <P>
            Once I understood the instinct was still there, the failures of every traditional method
            made a lot more sense.
          </P>

          <P>
            Clippers, Dremels, even professional groomer restraint — they all ask a dog to do the one
            thing that instinct never required: go completely still and hand over control of their body
            to someone else. For a dog with any nail sensitivity, that's enough to trigger real fight-or-flight,
            every time. Push through it repeatedly, and the fear only gets wired in deeper.
          </P>

          <P>
            It was never a training failure. These methods were never going to work with the instinct —
            they were built to work against it.
          </P>

          <Subhead>Recreating What Nature Already Built In</Subhead>

          <ArticleImage
            src={scratchBoard}
            alt="A small angled wooden scratch board sitting on a warm rug"
            caption="The board sits out in the room — no schedule, no wrestling, no forced sessions."
          />

          <P>
            Once I understood this, the search changed. I wasn't looking for a better way to force
            something on my dog anymore. I was looking for something that gave the instinct a surface
            to act on again.
          </P>

          <P>
            That's how I found a simple wooden board — angled, with a safe abrasive surface and a small
            treat compartment. She paws at it to reach the treat, and the filing happens as a quiet side
            effect of something she already wanted to do. It isn't teaching her a new trick. It's just
            giving her the terrain she never had indoors.
          </P>

          <Subhead>What Actually Changed</Subhead>

          <P>
            I didn't expect much, honestly — I'd been let down by "solutions" before. But within the
            first week, she was walking up to the board on her own. No coaxing, no bracing for a fight.
            Within a few weeks her nails were visibly shorter, and something else had shifted too: she
            stopped tensing up when I reached toward her paws at all, even outside of nail sessions.
          </P>

          <P>
            I didn't fix a behavior problem. I just stopped standing between her and something she already knew how to do.
          </P>

          <Subhead>I Wasn't the Only One</Subhead>

          <P>
            Once I started looking, I found this wasn't just working for mildly anxious dogs —
            it was working for genuinely severe cases.
          </P>

          <div
            style={{ fontFamily: SERIF }}
            className="my-8 bg-muted/60 border border-border rounded-sm p-6 md:p-7"
          >
            <p className="italic text-[1.05rem] md:text-[1.1rem] leading-relaxed text-foreground/90">
              "Cody wouldn't tolerate clippers or a vet's dremel, even with two people holding her, within 10 days, she was walking up to the board on her own for treats."
            </p>
            <p
              style={{ fontFamily: SANS }}
              className="mt-4 text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground"
            >
              — Daniel W, Cody's Owner
            </p>
          </div>

          <Subhead>The Questions I Had Before I Tried It</Subhead>

          <P>
            <strong>"Is this actually instinctive, or is that just marketing?"</strong> — This was my first
            skepticism too. Wolf sanctuaries and wildlife researchers have documented this for years:
            without rough terrain, nails simply don't wear down on their own — which is exactly why it's
            a modern, indoor-living problem in the first place.
          </P>

          <P>
            <strong>"Will this work for a dog as anxious as mine?"</strong> — The cases that convinced me
            were the extreme ones — dogs with real nail trauma learning to use the board voluntarily within
            days, without anyone forcing anything.
          </P>

          <P>
            <strong>"What if she just eats the treat without scratching?"</strong> — The treat sits in a
            compartment, not on the surface — reaching it requires the pawing motion that does the filing.
          </P>

          <P>
            <strong>"Is this actually cheaper than what I'm already doing?"</strong> — At $15–$50 per groomer
            visit every 2–4 weeks, that's $390–$1,300 a year. This was a one-time cost that paid for itself
            before my next groomer appointment would've even been due.
          </P>

          <Subhead>If You're Dealing With the Same Thing</Subhead>

          <P>
            If any of this sounds familiar — a dog who's defeated every clipper, every Dremel, every groomer
            attempt, and a growing pile of guilt every time you hear those nails click on the floor — this is
            the board that gave my dog back the thing she already knew how to do.
          </P>

          <p
            style={{ fontFamily: SERIF }}
            className="my-8 text-[1.075rem] md:text-[1.15rem] leading-[1.8]"
          >
            <a
              href={OUTBOUND}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              See the board we found →
            </a>
          </p>

          <div className="my-12 flex justify-center">
            <a
              href={OUTBOUND}
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{ fontFamily: SANS }}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold tracking-wide rounded-sm shadow-sm hover:brightness-110 transition"
            >
              Check Current Availability
            </a>
          </div>

          <footer
            style={{ fontFamily: SANS }}
            className="mt-16 pt-6 border-t border-border text-[11px] md:text-xs text-muted-foreground leading-relaxed text-center"
          >
            This article is partner content. The Modern Pet Journal may earn a commission if
            you purchase through links in this article. Editorial perspective reflects the
            author's personal experience and is not veterinary advice.
          </footer>
        </article>
      </div>
    </div>
  );
}
