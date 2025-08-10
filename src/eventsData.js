/**
 * WeebTrash Conventions and other events data
 * @
 */
// Image assets served from public/events so we can reference by URL path without bundler parsing issues.
// (Place files under /public/events)
const OzokuconImg = "/events/Ozokucon.jpg";
const MonroeComicConImg = "/events/MONROECOMICCON.jpg";
import EventBanner from "./assets/eventBanner.png"; // fallback / placeholder (still bundled)

const eventData = [
    //Should be able to copy paste one after you make it and just fill it out 
    {
        id: 1,
        name: "Ozokucon",
        date: "08/29/25 - 08/31/25",
        place: "Blue Water Convention Center",
        address: "800 Harker St, Port Huron, MI 48060",
        linkToTickets: "https://www.ozokucon.com/",
        description: "Ozokucon is a vibrant pop culture convention that celebrates the diverse world of entertainment. From anime and video games to cartoons, comics, fiction, and fantasy, our event is a haven for enthusiasts of all ages. Immerse yourself in the captivating realms of your favorite mediums and discover new passions as you connect with like-minded individuals..",
        pic: OzokuconImg,
    },
    {
        id: 2,
        name: "Monroe Comic Con",
        date: "09/12/25 - 09/13/25",
        place: "MBT Expo Center",
        address: "3775 South Custer Road Monroe, MI 48161",
        linkToTickets: "https://www.monroecomic-con.com/",
        description: "Experience the ultimate comic con event in the midwest! Join us for a day filled with fun, cosplay, and excitement for the whole family. Get ready for a memorable adventure at Monroe Comic Con.",
        pic: MonroeComicConImg,
    },
    {
        id: 3,
        name: "Youmacon",
        date: "10/30/25 - 11/02/25",
        place: "Huntington Place",
        address: "1 Washington Blvd, Detroit, MI 48226",
        linkToTickets: "https://www.youmacon.com/",
        description: "Youmacon is a 4-day experience celebrating Japanese Animation, Gaming, and Pop Culture. Whether you’re a convention pro, or have yet to attend an Anime event, we have just what you’re looking for. Since 2005, Youmacon has been an immersive and innovative event unlike any other. Get your tickets today. ",
        pic: EventBanner, // placeholder until actual image available
    },
];

export default eventData;