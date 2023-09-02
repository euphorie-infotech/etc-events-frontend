import React from "react";
import lineUp1 from "../../../assets/events/rafa.jpg";
import lineUp2 from "../../../assets/events/karnival-New-copy.jpg";
import lineUp3 from "../../../assets/events/aftermath.jpg";
import lineUp4 from "../../../assets/events/sonar-bangla-circus.jpg";
import lineUp5 from "../../../assets/events/akrahul.jpg";
import lineUp6 from "../../../assets/events/warfaze.jpg";
import lineUp7 from "../../../assets/events/james.jpg";
import lineUp8 from "../../../assets/events/plasmicknock.jpg";

const LineUps = () => {
  return (
    <section className="bg-getStarted bg-cover bg-center relative p-10 lg:p-20">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-nasalization text-white text-center relative">
        Event Lineups
      </h1>

      <div className="flex flex-col justify-center items-center md:px-10 lg:px-20 py-10 relative text-white">
        <div className="relative mb-3 md:w-1/3  rounded-2xl overflow-clip">
          <div className="absolute inset-0 bg-black bg-opacity-20 border-4 border-white flex flex-col justify-center items-center rounded-2xl overflow-clip"></div>
          <img src={lineUp7} alt="line up 6" className="rounded-md" />
        </div>

        <div className="md:w-1/2 text-center">
          <h1 className="font-nasalization text-xl md:text-3xl">
            Nagarbaul - James
          </h1>
          <p className="text-lg">
            Affectionately called “Guru” by his fans, Nagar Baul James is the
            biggest rockstar in the country. He has also sung on timeless
            Bollywood classics such as “Bheegi Bheegi”, “Alvida” and many other
            songs. He has successfully blended rock with folk to catapault his
            popularity to untouchable heights. Even after a career spanning more
            than four decades, he still remains a mammoth figure in the music
            industry.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center md:px-10 lg:px-20 py-10 relative text-white">
        <div className="basis-full lg:basis-1/2 flex flex-col md:flex-row justify-between items-center p-2 ">
          <div className="relative mb-3 md:basis-1/3">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={lineUp6} alt="line up 6" className="rounded-md" />
          </div>
          <div className="md:basis-2/3 md:pl-5">
            <h1 className="font-nasalization text-xl md:text-3xl">Warfaze</h1>
            <p className="text-lg">
              One of the pioneers and most legendary bands of Bangla Rock/Metal,
              Warfaze has been active since 1984. The band has released 8 albums
              and has 7 members currently. Warfaze is gearing up to release
              “Pothchola 2” and has already unveiled 2 singles off the album to
              widespread praise.
            </p>
          </div>
        </div>
        <div className="basis-full lg:basis-1/2 flex flex-col md:flex-row justify-between items-center p-2 ">
          <div className="relative mb-3 md:basis-1/3">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={lineUp1} alt="line up 1" className="rounded-md" />
          </div>
          <div className="md:basis-2/3 md:pl-5">
            <h1 className="font-nasalization text-xl md:text-3xl">AvoidRafa</h1>
            <p className="text-lg">
              One of the leading rock bands in the country formed by vocalist
              and multi-instrumentalist Raef al Hasan Rafa. The band has one
              studio album titled “Bhaar” which was released in 2016. Avoidrafa
              has performed in hundreds of shows around the country and has
              graced the biggest stages.
            </p>
          </div>
        </div>
        <div className="basis-full lg:basis-1/2 flex flex-col md:flex-row justify-between items-center p-2 ">
          <div className="relative mb-3 md:basis-1/3">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={lineUp3} alt="line up 1" className="rounded-md" />
          </div>
          <div className="md:basis-2/3 md:pl-5">
            <h1 className="font-nasalization text-xl md:text-3xl">Aftermath</h1>
            <p className="text-lg">
              Aftermath is a grunge and alternative rock band which got underway
              back in September 2006. The band has one album titled “Jed”
              consisting of eight tracks and has graced stages all over
              Bangladesh and has very recently performed in Kolkata as well.
            </p>
          </div>
        </div>
        <div className="basis-full lg:basis-1/2 flex flex-col md:flex-row justify-between items-center p-2 ">
          <div className="relative mb-3 md:basis-1/3">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={lineUp4} alt="line up 4" className="rounded-md" />
          </div>
          <div className="md:basis-2/3 md:pl-5">
            <h1 className="font-nasalization text-xl md:text-3xl">
              Shonar Bangla Circus
            </h1>
            <p className="text-lg">
              Shonar Bangla Circus is a Psychedelic Rock band consisting of five
              members. They released their debut album “Hyena Express” in 2020
              to great acclaim nationwide. They are known for their hard hitting
              lyricism and energetic live performance.
            </p>
          </div>
        </div>

        <div className="basis-full lg:basis-1/2 flex flex-col md:flex-row justify-between items-center p-2 ">
          <div className="relative mb-3 md:basis-1/3">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={lineUp2} alt="line up 1" className="rounded-md" />
          </div>
          <div className="md:basis-2/3 md:pl-5">
            <h1 className="font-nasalization text-xl md:text-3xl">Karnival</h1>
            <p className="text-lg">
              Karnival started their journey on July 13, 2006.Having influences
              from Beatles, Pink Folyd, Radiohead, Motorhead, Alice in chains,
              Oasis, Porcupine tree, Nirvana, Megadeth etc. They specialize in
              Experimental and Grunge Rock. They have four albums titled
              Indraloy Attotshorgo, Dysfunctional Motion Picture and Mohomukti.
            </p>
          </div>
        </div>
        <div className="basis-full lg:basis-1/2 flex flex-col md:flex-row justify-between items-center p-2 ">
          <div className="relative mb-3 md:basis-1/3">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={lineUp8} alt="line up 5" className="rounded-md" />
          </div>
          <div className="md:basis-2/3 md:pl-5">
            <h1 className="font-nasalization text-xl md:text-3xl">
              Plasmic Knock
            </h1>
            <p className="text-lg">
              A heavy metal band formed in 2009. Plasmic Knock currently has two
              studio albums “Mrito Shovvota” and “Norokito Prithibi”. They are
              known for their heavy music and have amassed a good following in
              the metal scene.
            </p>
          </div>
        </div>
        <div className="basis-full lg:basis-1/2 flex flex-col md:flex-row justify-between items-center p-2 ">
          <div className="relative mb-3 md:basis-1/3">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={lineUp5} alt="line up 5" className="rounded-md" />
          </div>
          <div className="md:basis-2/3 md:pl-5">
            <h1 className="font-nasalization text-xl md:text-3xl">A.K Rahul</h1>
            <p className="text-lg">
              The solo band of guitarist, drummer and composer A.K. Rahul. The
              band has live toured in one of the biggest shows in Kolkata, India
              Moitree Concert and they have performed over 35 concerts in a
              year. Let’s not forget the recent release ‘We Are One’ making it
              one of the most successful modern metal release in while.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineUps;
