import Image from "@/components/image";

const Pals = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <Image
        className=""
        src={"/images/Asset 2.png"}
        alt={"Grug cave home"}
        priority
        sizes="(min-width: 1200px) 100vw, 100vw"
      />
      <div className="px-10 py-20 text-center w-full prose prose-custom lg:prose-lg max-xl:mx-auto mx-auto">
        <p className="mb-4">
          Grug use this page to keep track interesting dates. <br />
        </p>

        <p className="mb-4">
          8 December 2023 - Grug mentioned on Beavermosh{" "}
          <a href="https://www.youtube.com/watch?v=6DElo5Gl4bM" target="_blank">
            here
          </a> at 47:26 
          . WTF!
        </p>

        <p className="mb-4">
          7 December 2023 - Grug announce Khodumodumo{" "}
          <a
            href="https://www.facebook.com/permalink.php?story_fbid=122116311356095543&id=61552866300273"
            target="_blank">
            here
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/GrugListenMusic/status/1732896436998623505"
            target="_blank">
            here
          </a>
        </p>

        <p className="mb-4">
          5 December 2023 - Grug get love from the spidery Krallice{" "}
          <a
            href="https://www.facebook.com/krallice/posts/888087486209436"
            target="_blank">
            here
          </a>
        </p>

        <p className="mb-4">
          1 December 2023 - Grug get love from amazing Dis Pater in Midnight
          Odyssey{" "}
          <a
            href="https://www.facebook.com/midnightodyssey/posts/925108582313559"
            target="_blank">
            here
          </a>
        </p>

        <p className="mb-4">
          25 November 2023 - Grug get love from Valdrin{" "}
          <a
            href="https://www.facebook.com/valdrinausadjur/posts/695332339242907"
            target="_blank">
            here
          </a>
        </p>

        <p className="mb-4">
          9 November 2023 - Grug get love from Tetragrammacide{" "}
          <a
            href="https://www.facebook.com/tetragrammacide/posts/763748872429726"
            target="_blank">
            here
          </a>
        </p>

        <p className="mb-4">
          1 November 2023 - Grug get love from Crow Black Sky{" "}
          <a
            href="https://www.facebook.com/crowblacksky/posts/897158371970668"
            target="_blank">
            here
          </a>
        </p>

        <p className="mb-4">
          30 October 2023 - Grug say Malokarpatan little bit Dungeon synth. Grug
          wrong oh no! Many love with Malokarpatan{" "}
          <a
            href="https://www.facebook.com/malokarpatan/posts/673036138141096"
            target="_blank">
            here
          </a>
        </p>

        <p className="mb-4">
          30 October 2023 - Grug big Afterbirth love{" "}
          <a
            href="https://www.facebook.com/AfterbirthNYDeathMetal/posts/737120051560658"
            target="_blank">
            here
          </a>
        </p>

        <p className="mb-4">
          Oct 26, 2023 - Chris from Woe make{" "}
          <a
            href="https://x.com/subvertallmedia/status/1717325968124068040?s=20"
            target="_blank">
            first mention
          </a>{" "}
          Grug. Grug suddenly live website!
        </p>

        <p className="mb-4">
          Oct 21, 2023 - Grug make first start on code for web site place.
        </p>
      </div>
    </div>
  );
};

export default Pals;
