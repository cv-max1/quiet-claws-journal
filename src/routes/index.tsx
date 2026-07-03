import { createFileRoute } from "@tanstack/react-router";
import heroDog from "@/assets/hero-dog.jpg";
import pawHands from "@/assets/paw-hands.jpg";
import scratchBoard from "@/assets/scratch-board.jpg";

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
            The Hidden Reason So Many Dogs Fear Nail Trims — And Why It's Rarely About the Nails
          </h1>

          <p
            style={{ fontFamily: SERIF }}
            className="mt-5 text-lg md:text-xl leading-relaxed text-muted-foreground italic"
          >
            A dog owner's unexpected discovery about what's actually happening during those dreaded grooming sessions.
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
            dreading the next ten minutes. I tried everything I could think of. Better treats.
            Slower approaches. A Dremel instead of clippers, hoping the sound would feel less
            threatening than a blade. Nothing stuck. Eventually I gave up and started paying a
            groomer every few weeks, and even then, she'd come home stressed and subdued, like
            something had happened that she just wanted to be done with.
          </P>

          <P>
            I assumed this was just who she was. A "difficult" dog. My fault, somehow, for not
            training her right early on.
          </P>

          <P>
            It wasn't until I started actually researching <strong>why this happens</strong> —
            not just how to push through it — that I found something that changed how I saw the
            entire problem.
          </P>

          <Subhead>It Wasn't Training. It Was the Method.</Subhead>

          <P>
            Here's what I didn't understand at the time: clippers, Dremels, and even
            professional groomer restraint all share one thing in common. They all require a
            dog to <strong>go completely still and surrender control of their body</strong> to
            someone else.
          </P>

          <P>
            For a dog with any nail sensitivity or past bad experience, that's not a small
            ask — it's the kind of thing that can trigger genuine fight-or-flight. And every
            time you push through it anyway, hoping repetition will fix it, the fear gets wired
            in a little deeper. It's not that a dog is being stubborn. It's that they're
            reacting exactly the way any animal reacts when something grabs their feet and
            won't let go.
          </P>

          <PullQuote>
            I wasn't dealing with a "difficult" dog. I was using a method that was never going
            to work for a dog like mine.
          </PullQuote>

          <Subhead>What I Found While Looking for an Alternative</Subhead>

          <ArticleImage
            src={pawHands}
            alt="A person gently holding a small dog's paw on a soft blanket"
          />

          <P>
            The research rabbit hole eventually led somewhere I didn't expect: before dogs
            lived indoors, they filed their own nails constantly, just by living their lives —
            running, digging, moving across rock and packed earth every day. No trimming ever
            needed. The friction did the work.
          </P>

          <P>
            Moving indoors didn't erase that instinct. It just removed the surface that used to
            trigger it.
          </P>

          <P>
            That reframed the entire problem for me. I wasn't looking for a better way to do
            something <em>to</em> my dog anymore. I was looking for a way to give her back
            something she already knew how to do.
          </P>

          <P>
            That search is how I came across a simple wooden board — angled, with a safe
            abrasive surface and a small treat compartment. The idea was almost too simple:
            she paws at it to reach a treat, and the filing happens as a quiet side effect of
            something she already wanted to do.
          </P>

          <Subhead>What Actually Changed</Subhead>

          <ArticleImage
            src={scratchBoard}
            alt="A small angled wooden scratch board sitting on a warm rug"
            caption="The board sits out in the room — no schedule, no wrestling, no forced sessions."
          />

          <P>
            I want to be honest — I didn't expect much. I'd been let down by "solutions"
            before.
          </P>

          <P>
            But within the first week, she was walking up to the board on her own. No coaxing,
            no forcing, no bracing for a fight. Within a few weeks, her nails were visibly
            shorter, and something else had shifted too — <strong>she stopped tensing up when
            I reached toward her paws at all</strong>, even outside of nail sessions.
          </P>

          <PullQuote>
            The moment I picked up the clippers, I could see the trust leave her eyes. That's
            the part nobody warns you about — it's not just the nails. It's what repeated bad
            experiences do to how your dog sees you.
          </PullQuote>

          <P>
            I didn't fix a behavior problem. I stopped asking her to surrender something she
            was never going to give up willingly — and once I stopped asking, I got the trust
            back that all those failed attempts had slowly worn away.
          </P>

          <Subhead>I Wasn't the Only One</Subhead>

          <P>
            Once I started looking, I found this wasn't just working for mildly anxious
            dogs — it was working for genuinely severe cases.
          </P>

          <div
            style={{ fontFamily: SERIF }}
            className="my-8 bg-muted/60 border border-border rounded-sm p-6 md:p-7"
          >
            <p className="italic text-[1.05rem] md:text-[1.1rem] leading-relaxed text-foreground/90">
              "Bella wouldn't tolerate clippers or a vet's Dremel, even with two people
              holding her. Within about ten days, she was walking up to the board on her own
              for treats — I still can't quite believe it."
            </p>
            <p
              style={{ fontFamily: SANS }}
              className="mt-4 text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground"
            >
              — Marta R., Bella's owner
            </p>
          </div>

          <Subhead>The Questions I Had Before I Tried It</Subhead>

          <P>
            <strong>"Will this actually work for a dog as anxious as mine?"</strong> This was
            my biggest doubt too. The cases that convinced me were the extreme ones: dogs with
            serious nail trauma who'd failed at clippers, Dremels, and groomers, learning to
            use the board voluntarily within days.
          </P>

          <P>
            <strong>"Isn't this just another gimmick?"</strong> I thought so too, until I
            understood the mechanism. It's not asking a dog to learn something new — it's
            recreating a condition (rough, abrasive terrain) their instincts already respond
            to.
          </P>

          <P>
            <strong>"What if she just eats the treat without actually scratching?"</strong>{" "}
            Positioning the treat inside a compartment rather than on the surface solves this —
            reaching it requires the pawing motion that does the filing.
          </P>

          <P>
            <strong>"Is this actually cheaper than what I'm already doing?"</strong> At
            $15–$50 per groomer visit every 2–4 weeks, that's $390–$1,300 a year. This was a
            one-time cost that paid for itself before my next groomer appointment would've
            even been due.
          </P>

          <Subhead>If You're Dealing With the Same Thing</Subhead>

          <P>
            If any of this sounds familiar — a dog who's defeated every clipper, every
            Dremel, every groomer attempt, and a growing pile of guilt every time you hear
            those nails click on the floor — this is the board that changed it for us.
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
