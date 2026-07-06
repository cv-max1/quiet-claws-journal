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

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={OUTBOUND}
      target="_blank"
      rel="noopener noreferrer sponsored"
      style={{ fontFamily: SANS }}
      className="inline-flex w-full md:w-auto items-center justify-center bg-primary text-primary-foreground px-8 md:px-12 py-5 md:py-6 text-lg md:text-2xl font-bold tracking-wide rounded-sm shadow-md hover:brightness-110 transition text-center"
    >
      {label}
    </a>
  );
}

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
            Every nail trim was a fight. I got the clippers out and she froze. We both hated it.
            I tried lots of things. Better treats. Going slow. A Dremel instead of clippers.
            Nothing worked. In the end I gave up and paid a groomer. Even then she came home
            scared and shaky.
          </P>

          <P>
            I thought this was just who she was. I thought it was my fault for not training her better.
          </P>

          <P>
            What finally helped wasn't a new trick. It was one simple idea that I had never once thought about.
          </P>

          <div className="my-10 flex flex-col items-center gap-4 rounded-sm border border-border bg-card px-5 py-8 md:px-8 md:py-10 text-center">
            <p
              style={{ fontFamily: SANS }}
              className="text-base md:text-lg font-semibold text-foreground"
            >
              This is the board that fixed it for us.
            </p>
            <CtaButton label="See The Nail Board →" />
          </div>

          <Subhead>Dogs Have Been Doing This Themselves for Thousands of Years</Subhead>

          <P>
            A long time ago, dogs did not live in houses. There was no carpet. There were no
            wood floors. Dogs ran and dug on rocks, gravel, and hard dirt every day. That
            rough ground wore their nails down on its own. No tools. No people. No fear.
          </P>

          <P>
            Dogs still know how to do this. We just took away the rough ground they used to
            do it on. So cutting nails became a people job — a job dogs never needed help
            with for most of time.
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
            Once I saw that dogs still know how to do this, the old ways made more sense — and so
            did why they fail.
          </P>

          <P>
            Clippers, Dremels, and being held by a groomer all ask a dog to do one hard thing:
            hold very still and let someone else touch their paws. For a scared dog, that feels
            like a trap. Every time you push through it, the fear gets bigger.
          </P>

          <P>
            It was never bad training. These tools were never going to work with your dog. They
            work against her.
          </P>

          <Subhead>Recreating What Nature Already Built In</Subhead>

          <ArticleImage
            src={scratchBoard}
            alt="A small angled wooden scratch board sitting on a warm rug"
            caption="The board sits out in the room — no schedule, no wrestling, no forced sessions."
          />

          <P>
            After I saw all this, I stopped looking for a way to force my dog. I started looking
            for the rough surface she never had inside.
          </P>

          <P>
            That is how I found a small wooden board. It sits at an angle. It has a rough (but
            safe) top and a tiny treat spot. She paws at it to get the treat. The filing just
            happens while she does it. I did not teach her a new trick. I just gave her back the
            ground she was missing.
          </P>

          <Subhead>What Actually Changed</Subhead>

          <P>
            I did not expect much. I had been let down before. But in the first week she walked
            up to the board on her own. No fight. In a few weeks her nails were shorter. And
            something else changed too — she stopped pulling her paws away when I touched them.
          </P>

          <P>
            I did not fix a bad behavior. I just got out of her way.
          </P>

          <Subhead>I Wasn't the Only One</Subhead>

          <P>
            Once I started looking, I saw this was working for other dogs too — even the
            really scared ones.
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
            <strong>"Is this real, or just a sales pitch?"</strong> — I asked this too. People who
            study wolves and wild dogs have shown this for years. Without rough ground, nails do
            not wear down. That is why it is a house-dog problem in the first place.
          </P>

          <P>
            <strong>"Will it work for a really scared dog?"</strong> — The stories that sold me were
            the hard ones. Dogs who were afraid of nail time started using the board on their own
            in just a few days. No one forced them.
          </P>

          <P>
            <strong>"What if she just grabs the treat and stops?"</strong> — She can't. The treat
            sits inside a little hole. To reach it, she has to paw at the top. The pawing is what
            files the nails.
          </P>

          <P>
            <strong>"Is it cheaper than what I already pay?"</strong> — Groomers cost about $15 to
            $50 each time. Most people go every 2 to 4 weeks. That is $390 to $1,300 a year. The
            board is one small cost, one time.
          </P>

          <Subhead>If You're Dealing With the Same Thing</Subhead>

          <P>
            If this sounds like your dog — a dog who beats every clipper, every Dremel, and every
            groomer, and you feel bad every time you hear those nails click on the floor — this is
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
            <CtaButton label="Check Price & Availability →" />
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
