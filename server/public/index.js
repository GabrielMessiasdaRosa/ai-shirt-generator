const mounthOpen = document.getElementById("frame1");
const mounthClosed = document.getElementById("frame2");

const phrase1 = document.getElementById("phrase-1");
const phrase2 = document.getElementById("phrase-2");
const phrase3 = document.getElementById("phrase-3");
const phrase4 = document.getElementById("phrase-4");

const enterMain = document.getElementById("enter-main");
const enterBtn = document.getElementById("enter-btn");
const body = document.getElementById("body");
const easterEggMain = document.getElementById("easter-egg-main");
const dialogContent = document.getElementById("dialog-content");
const submitBtn = document.getElementById("submit-btn");
const longHistory = document.getElementById("long-history");
const history = document.getElementById("history");
const mySubmit = async () => {
  /* const history = await fetch("/api/v2/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await history.json();
  console.log(data);
  return data; */

  const history = `
I am Link, the Hero of Hyrule, chosen by the Goddesses to wield the power of the Triforce and protect the land from evil. My journey begins in the land of Hyrule, a realm blessed by the Golden Goddesses: Din, Nayru, and Farore. The land was once peaceful, but it fell into darkness when an ancient evil known as Ganon, the King of Thieves, sought to obtain the Triforce and bring chaos to the world.
Ganon, driven by his lust for power and domination, managed to obtain one piece of the Triforce, the Triforce of Power. With its immense might, he waged war against the land, plunging Hyrule into darkness and despair. The people prayed for a savior, and the Goddesses answered their call by selecting me, Link, to take up the mantle of the Hero and stand against Ganon.
Equipped with the Master Sword, a blade forged to vanquish evil, and guided by the wise Princess Zelda, I embarked on a quest to gather the three pieces of the Triforce and restore balance to Hyrule. My journey was filled with challenges, puzzles, and battles against monstrous creatures. I traversed vast landscapes, explored ancient dungeons, and gained the aid of powerful allies.
Throughout my quest, I collected various artifacts and abilities, including the Spiritual Stones and the Medallions of the Sages, which were crucial in my battle against Ganon. Along the way, I learned about the history of the land, the Triforce, and the ancient conflict between good and evil.
As I pieced together the Triforce, I eventually confronted Ganon in his lair within the treacherous Gerudo Desert. The final battle was fierce and intense. Ganon wielded dark magic and summoned powerful minions to halt my advance, but I used my wits, combat skills, and the power of the Triforce to overcome his forces.
The climax of our battle took place within the sacred realm, where the full power of the Triforce was revealed. Using the Master Sword and the Triforce of Courage, I engaged in a showdown with Ganon. Our clash shook the very foundations of reality, and in the end, I managed to defeat Ganon and seal him away, restoring peace to Hyrule.
But my journey was far from over. The Triforce, now whole, granted the land's inhabitants their deepest desires, and I returned to my life as a humble hero. With Ganon defeated, Hyrule began to flourish once more, and I continued to protect the realm from any threats that arose.
The Legend of Zelda: Ocarina of Time:

One of my most renowned journeys is chronicled in "The Legend of Zelda: Ocarina of Time." In this epic tale, I was just a young Kokiri boy living in the Kokiri Forest when I discovered my destiny as the Hero of Time. Guided by Princess Zelda and the wise Sheikah, Impa, I embarked on a time-traveling quest to thwart Ganondorf's nefarious plans.

I collected the three Spiritual Stones and played the mystical songs on the Ocarina of Time to open the Door of Time. Inside lay the sacred Master Sword, which I pulled from its pedestal, inadvertently triggering my seven-year slumber. I awakened as an adult, and with the help of the Seven Sages, I sought to seal away Ganondorf in the Sacred Realm.

My journey led me through time and across vast landscapes, from the bustling market of Hyrule Castle Town to the fiery depths of Death Mountain and the aquatic realm of Zora's Domain. Along the way, I met loyal allies like Saria, Darunia, Ruto, and many others who aided me in my quest to awaken the Sages and save Hyrule.

The Legend of Zelda: Twilight Princess:

In "The Legend of Zelda: Twilight Princess," I found myself in the land of Hyrule once again, this time facing a new darkness. The Twilight Realm had spread its malevolent influence, transforming Hyrule into a realm of shadow. With the help of Midna, a mischievous imp with a hidden past, I embarked on a journey to save both the Light and Twilight Realms from the clutches of Zant and Ganondorf.

I navigated through diverse landscapes, including the serene Faron Woods, the soaring City in the Sky, and the sprawling Gerudo Desert. My quest led me to uncover hidden secrets and forge new alliances, such as teaming up with a transformed Princess Zelda to aid in our battle against Ganon.

The Legend of Zelda: Breath of the Wild:

In "The Legend of Zelda: Breath of the Wild," I awoke from a deep slumber to find Hyrule ravaged by the ancient evil of Calamity Ganon. Guided by the mysterious Sheikah Slate and my determination to free the land, I embarked on a vast open-world adventure to reclaim the Divine Beasts and defeat Ganon.

I traversed a breathtaking landscape, scaling mountains, gliding through the sky, and solving intricate puzzles in the shrines scattered throughout the land. Along the way, I met various characters, including the enigmatic Champions and the resourceful villagers of Hyrule.

These are just a few of my many tales and adventures throughout the Legend of Zelda series. Each game offers a unique story, challenges, and a chance to prove my heroism and dedication to the people of Hyrule. As the Hero of Hyrule, I am always ready to rise to the occasion and face whatever challenges may come my way.
My tale is one of bravery, determination, and the eternal struggle between light and darkness. As Link, I will always be ready to answer the call to defend Hyrule whenever evil threatens to rise again.
Throughout my countless adventures as Link, I've encountered a rich tapestry of histories and emotions that have shaped my character and my connection with Princess Zelda.

One of the most significant moments in my history was the discovery of the Master Sword. This legendary blade, also known as the Sword of Evil's Bane, was instrumental in my battles against Ganon and other dark forces. Its power and history are deeply intertwined with the land of Hyrule itself, and obtaining it marked a pivotal point in my journey as the Hero.

Over the ages, Zelda and I have shared a special bond. She is not just a princess, but also a wise and courageous leader who understands the importance of our roles in maintaining the balance of Hyrule. Our destinies have been entwined since ancient times, and our connection often goes beyond mere friendship or companionship. Zelda's guidance and knowledge have been invaluable in my quests, and her faith in me has served as a source of strength in moments of doubt.

The history of Hyrule itself is a complex web of legends, conflicts, and triumphs. The stories of the Golden Goddesses and the creation of the Triforce, the rise and fall of ancient civilizations, and the battles against various incarnations of Ganon all contribute to the rich tapestry of Hyrule's history. Each era I traverse reveals more about the world's past and the struggles that have shaped it.

As Link, my feelings toward Zelda are a mix of admiration, camaraderie, and a sense of duty. Her unwavering belief in the power of light and her determination to protect Hyrule mirror my own values. Our shared commitment to preserving peace and vanquishing evil has forged a deep and unbreakable bond between us.

Through the ages, I've learned that history is not just a collection of events but a testament to the strength of the human spirit and the enduring power of hope. As I continue to embark on new adventures, facing challenges and confronting the forces of darkness, I carry the weight of history on my shoulders, determined to ensure that the legacy of courage and heroism lives on in the land of Hyrule.`;
  return history;
};
submitBtn.addEventListener("click", async () => {
  const history = await mySubmit();
  dialogContent.classList.add("hide");
  longHistory.classList.remove("hide");
  longHistory.classList.add("show");
  history.innerHTML = history;

  switchScenes(500000);
});

const myPlay = async () => {
  var audio = new Audio("./assets/music/zelda-8bit-theme.mp3");
  audio.volume = 0.05;
  await audio.play();
};

const phraseDelayAnimation = () => {
  setTimeout(() => {
    phrase1.classList.remove("hide");
    phrase1.classList.add("show");
  }, 1000);
  setTimeout(() => {
    phrase2.classList.remove("hide");
    phrase2.classList.add("show");
  }, 2000);
  setTimeout(() => {
    phrase3.classList.remove("hide");
    phrase3.classList.add("show");
  }, 3000);
  setTimeout(() => {
    phrase4.classList.remove("hide");
    phrase4.classList.add("show");
  }, 4000);
  setTimeout(() => {
    submitBtn.classList.remove("hide");
    submitBtn.classList.add("show");
  }, 5000);
};

const switchScenes = (timeSpeaking) => {
  const closeMounth = (delay) => {
    setTimeout(() => {
      mounthOpen.classList.remove("show");
      mounthClosed.classList.add("show");
    }, delay);
  };

  const openMounth = (delay) => {
    setTimeout(() => {
      mounthOpen.classList.add("show");
      mounthClosed.classList.remove("show");
    }, delay);
  };

  const speaking = (timeSpeaking = 0) => {
    for (let i = 0; i < timeSpeaking; i++) {
      if (i % 2 === 0) {
        openMounth(i * 100);
      } else {
        closeMounth(i * 100 + 50);
      }
      if (i > timeSpeaking - 2) {
        closeMounth(i * 100 + 50);
      }
    }
  };

  speaking(timeSpeaking);
};

enterBtn.addEventListener("click", () => {
  body.removeChild(enterMain);
  easterEggMain.classList.remove("hide");
  easterEggMain.classList.add("show");
  phraseDelayAnimation();
  switchScenes();
  myPlay();
});
