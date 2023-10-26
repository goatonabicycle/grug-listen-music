import Image from "@/components/image";

const Pals = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <Image
        className=""
        src={"/images/grug-full.png"}
        alt={"Grug cave home"}
        priority
        sizes="(min-width: 1200px) 100vw, 100vw"
      />
      <div className="px-10 py-20 text-center w-full">
        <p className="mb-4">
          Grug have many pals look up to. <br />
          Grug build little shrines for them here. <br />
          You click. You read.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          <div>
            <p className="mb-4">
              Pals do actual reviews and words. <br />
            </p>
            <a target="_blank" href="https://yourlastrites.com/">
              Last Rites
            </a>
            <br />
            <a target="_blank" href="https://cvltnation.com/">
              CVLTNation
            </a>
            <br />
            <a target="_blank" href="https://toiletovhell.com/">
              Toilet ov Hell
            </a>
            <br />
            <a target="_blank" href="https://www.smallalbums.com/">
              Small Albums
            </a>
            <br />
            <a target="_blank" href="https://www.angrymetalguy.com/">
              Angry Metal Guy
            </a>
            <br />
            <a target="_blank" href="https://echoesanddust.com/">
              Echoes and Dust
            </a>
            <br />
            <a target="_blank" href="https://www.invisibleoranges.com/">
              Invisible Oranges
            </a>
            <br />
            <a target="_blank" href="https://everythingisnoise.net/">
              Everything Is Noise
            </a>
            <br />
            <a target="_blank" href="https://www.teethofthedivine.com/">
              Teeth of the Divine
            </a>
            <br />
            <a target="_blank" href="https://thykingdomscvm.wordpress.com/">
              Thy Kingdom Scvm
            </a>
            <br />
            <a target="_blank" href="https://www.heavyblogisheavy.com/">
              Heavy Blog Is Heavy
            </a>
            <br />
            <a target="_blank" href="https://www.nocleansinging.com/">
              NO CLEAN SINGING
            </a>
            <br />
            <a target="_blank" href="https://www.ghostcultmag.com/">
              Ghost Cult Magazine
            </a>
            <br />
            <a target="_blank" href="http://autothrall.blogspot.com/">
              From the Dust Returned
            </a>
            <br />
            <a target="_blank" href="https://www.transcendedmusic.de/">
              Transcended Music Blog
            </a>
            <br />
            <a target="_blank" href="https://canthisevenbecalledmusic.com/">
              Can This Even Be Called Music?
            </a>
          </div>
          <div>
            <h2 className="mb-4">Pals do best things with music.</h2>
            <a target="_blank" href="https://twitter.com/KManriffs">
              KManriffs
            </a>
            <br />
            <a target="_blank" href="https://weregnomerecords.bandcamp.com/">
              WereGnome Records
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pals;
