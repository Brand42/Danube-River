import React from "react";
import {asset} from "./utils";

const domElementStyle = getComputedStyle(document.documentElement);

export default {
  color: {
    primary: domElementStyle && domElementStyle.getPropertyValue('--color-primary'),
    secondary: domElementStyle && domElementStyle.getPropertyValue('--color-secondary'),
    yellow: domElementStyle && domElementStyle.getPropertyValue('--color-yellow'),
    'blue-100': domElementStyle && domElementStyle.getPropertyValue('--color-blue-100'),
  },
  navigationHeight: parseFloat(domElementStyle ? domElementStyle.getPropertyValue('--navigation-height') : 0),
  landing: {
    sound: {
      autoplay: true,
      loop: true,
      mute: true,
      volume: 0.6,
      fadeRate: 3000,
    },
  },
  articles: [
    {
      index: 0,
      id: 'sturgeon',
      title: 'Sturgeon',
      intro: 'Caviar mafia vs Danube dinosaur',
      description: "For more than 200 million years, sturgeon have lurked beneath the waters of Earth, witnessing the demise of dinosaurs and human evolution. \n\nThe Danube long boasted one of the largest populations of the living fossil, but it is now under threat of extinction from dams, pollution and overfishing. Conservationists are working to save the species and are fighting an ongoing battle with the “caviar mafia”, which leads the illegal trade in the fish’s eggs.",
      x: 90,
      y: 136,
      images: [
        asset('assets/img/map-sturgeon.jpg'),
      ],
      videos: [
        'https://video.cgtn.com/public/2019-09-12/public/video/34e90658c667428dac723a516fc321dd/34e90658c667428dac723a516fc321dd.m3u8',
        'https://video.cgtn.com/public/2019-09-19/public/video/738ad6ff645b4c96bb9e70fdb27bb01b/738ad6ff645b4c96bb9e70fdb27bb01b.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/8cb9d39dc24c40d4865569ab98d5a780/8cb9d39dc24c40d4865569ab98d5a780.m3u8',
        'https://video.cgtn.com/public/2019-09-19/public/video/d86bffc25c2242619c5c6915698e4ca7/d86bffc25c2242619c5c6915698e4ca7.m3u8',
      ],
      metaData: [
        {
          type: 'title',
          content: 'Danube dinosaur: Sturgeon facing extinction from caviar mafia',
        },
        {
          type: 'description',
          content: 'The Danube river had one of the largest populations of the fish, but it is now under threat from dams, pollution and overfishing.',
        },
      ],
    },
    {
      index: 1,
      id: 'microplastics',
      title: 'Microplastics',
      intro: "Small thing,\nbig problem",
      description: 'Media images of bags and bottles drifting in the sea or tangled birds have made the fight against plastic waste emblematic of last-ditch attempts to reverse the damage inflicted by the economy of consumption. \n\nHowever, the invisible pollution caused by tiny plastic particles is harder to address and could prove more harmful in every corner of the Earth. From the way we wash and eat to what we wear, everyone has a part to play.',
      x: 170,
      y: 237,
      images: [
        asset('assets/img/map-microplastics.jpg'),
      ],
      videos: [
        'https://video.cgtn.com/public/2019-09-12/public/video/a3318b17e0dc4e9d8190e5e21d4fb1b8/a3318b17e0dc4e9d8190e5e21d4fb1b8.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/002bef0fa18e4cc689dee77c306d340e/002bef0fa18e4cc689dee77c306d340e.m3u8',
      ],
      metaData: [
        {
          type: 'title',
          content: 'Microplastics: Invisible pollution in the Danube river',
        },
        {
          type: 'description',
          content: 'A battle is on to combat the waste caused by tiny plastic particles.',
        },
      ],
    },
    {
      index: 2,
      id: 'hydropower',
      title: 'Hydropower',
      intro: 'The Dam Danube',
      description: 'There are 62 dams along the length of the Danube, which turn the kinetic energy of water pounding off the Alps into electricity. The clean energy they generate was once lauded as the epitome of a new relationship between humans and the environment. \n\nBut today, their impact is judged by more than carbon dioxide emissions. Fish, birds, soil quality and water pollution are all heavily influenced, often negatively by obstructions to the river’s flow.',
      x: 410,
      y: 146,
      images: [
        asset('assets/img/facts.png'),
      ],
      videos: [
        'https://video.cgtn.com/public/2019-09-12/public/video/6358f3e8140a4a0794f5cfb6cf32fa33/6358f3e8140a4a0794f5cfb6cf32fa33.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/0b68dd89bfbf485e9aef9eac0dde5e36/0b68dd89bfbf485e9aef9eac0dde5e36.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/ddd33b5fd6bf42099b0105f0094c539d/ddd33b5fd6bf42099b0105f0094c539d.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/1828475facf44114884956a3f95832ca/1828475facf44114884956a3f95832ca.m3u8',
      ],
      metaData: [
        {
          type: 'title',
          content: 'Dams on the Danube: Good or bad?',
        },
        {
          type: 'description',
          content: 'There are 62 dams along the Danube, which affect fish, birds, soil quality and water pollution.',
        },
      ],
    },
    {
      index: 3,
      id: 'rewilding',
      title: 'Rewilding',
      intro: 'Back from the dead',
      description: 'Where the Danube flows into the Black Sea lies Europe’s largest wetland. It is one of the most underpopulated areas of the continent. \n\nHere, animals that have been absent from the region for hundreds of years are being reintroduced in a bid to restore a balanced ecosystem. Moreover, where some important species became extinct in the 1700s, scientists have created the next best thing through “back breeding” to repopulate the area.',
      x: 170,
      y: 146,
      images: [
        asset('assets/img/articles/rewilding-beaver.jpg'),
      ],
      videos: [
        'https://video.cgtn.com/public/2019-09-19/public/video/d7abcbbbbf6d44afa4a7479f624b7a5d/d7abcbbbbf6d44afa4a7479f624b7a5d.m3u8',
        'https://video.cgtn.com/public/2019-09-19/public/video/dd647e93eb004a6da024272dfe55f299/dd647e93eb004a6da024272dfe55f299.m3u8',
      ],
      metaData: [
        {
          type: 'title',
          content: 'Rewilding: Bringing back animal species to the Danube',
        },
        {
          type: 'description',
          content: 'Where the Danube flows into the Black Sea lies Europe’s largest wetland. Here, animals are being reintroduced by scientists to restore a balanced ecosystem.',
        },
      ],
    },
    {
      index: 4,
      id: 'mila-23',
      title: 'Mila 23',
      intro: 'Life of the island people',
      description: 'The Danube is sanctuary to a mosaic of minorities who escaped from neighbouring countries for fear of persecution centuries ago. \n\nNotable are the Lipovans from Russia, they are expert fishermen and canoeists, but these traditions are being threatened by environmental changes and a growing tourism sector. In an increasingly connected world, the livelihood of these river people is contingent on their ability to adapt to modern changes, while living in harmony with nature.',
      images: [
        asset('assets/img/articles/4.png'),
      ],
      x: 570,
      y: 100,
      videos: [
        'https://video.cgtn.com/public/2019-09-17/public/video/5a2d3b1200c44283b03b9bd5de6e9f4a/5a2d3b1200c44283b03b9bd5de6e9f4a.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/e6e2676fdebd4147bc3cb3d1e9a5a7be/e6e2676fdebd4147bc3cb3d1e9a5a7be.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/a4b6a2f482b24e7d8104d2bc3e8201f9/a4b6a2f482b24e7d8104d2bc3e8201f9.m3u8',
        'https://video.cgtn.com/public/2019-09-12/public/video/026cadc79a70427fb6a2d7bebdda53a5/026cadc79a70427fb6a2d7bebdda53a5.m3u8',
      ],
      metaData: [
        {
          type: 'title',
          content: 'Mila 23: Changing life of the Danube’s river people',
        },
        {
          type: 'description',
          content: 'The Danube is sanctuary to persecuted minorities who escaped from neighboring countries, notably Russia’s Lipovans, who are expert fishermen and canoeists.',
        },
      ],
    },
  ],
  mapInfo: 'Stretching more than 2,000 kilometers from the heart of Europe to its eastern extremity, the waters of the Danube offer a living record of the balance between the needs of people and the resilience of nature.',
  carouselContent: {
    rewilding: [
      {
        title: 'Eurasian Beaver',
        description: (
          <>
            <p>
              Two families of approximately 12 beavers are located one hour north of Tulcea, Romania.
            </p>
            <p>
              <strong>Benefits to the ecosystem</strong>: The beaver is nicknamed the “ecosystem engineer” because of
              its ingenuity in building a habitat that extends and protects wetlands. When abandoned, beavers’ lodges,
              which are built with huge heaps of branches, are often turned into new nest sites for birds or hiding
              places for reptiles and amphibians, while the channels the beavers dig provide safe places for fish to
              spawn.
            </p>
          </>
        ),
      },
      {
        title: 'Eagle owl',
        description: (
          <>
            <p>
              The first chick has been successfully reintroduced to the delta, in the next four years this will increase
              to up to 20 birds.
            </p>
            <p>
              It is one of the biggest owls, reaching up to 75cm in height with wingspan up to 180cm. It is a settled
              species, so after choosing a home, it will not migrate to other areas.
            </p>
            <p>
              <strong>Benefits to the ecosystem</strong>: The eagle owl’s diet contains rats and small mammals, other
              birds and it can even hunt some stray dogs and cats. As a big predator, together with the white-tailed
              eagle, golden jackal and European wildcat, the eagle owl regulates the quantity of animals and bird
              species in the region. This sanitary function is very important to the ecosystem as predators generally
              eliminate old, ill and weak animals, which makes the whole population stronger and more adapted.
            </p>
          </>
        ),
      },
      {
        title: 'Grey cattle',
        description: (
          <>
            <p>
              Two wild bulls were introduced to Tataru island from Transcarpathia, Ukraine.
            </p>
            <p>
              <strong>Benefits to the ecosystem</strong>: The bulls will revitalize the local herd of grey cattle
              already established. These large herbivores help to create mosaic landscapes.
            </p>
          </>
        ),
      },
      {
        title: 'Hutsel horses',
        description: (
          <>
            <p>
              Ten were introduced to the delta in 2019 from Transcarpathia, Ukraine
            </p>
            <p>
              An ancient breed of wild horse bearing a striking resemblance to the extinct Tarpan. They have been used
              extensively by humans for hundreds of years. After World War Two, they faced extinction with only 300
              remaining. A breeding program was introduced in the 1970s to ensure their survival.
            </p>
            <p>
              <strong>Benefits to the ecosystem</strong>: Small, brave and resistant, they are able to withstand harsh
              climates. They are self-sufficient and their grazing and foraging behavior helps to diversify the
              ecosystem in the delta.
            </p>
          </>
        ),
      },
      {
        title: 'Konik horses',
        description: (
          <>
            <p>
              There were 23 introduced in 2019 and four have since been born in the delta.
            </p>
            <p>
              Koniks are related to a wild Eurasian horse called the Tarpan, which grazed this area in ancient times and
              is now extinct. The last known Tarpan died in Russia in 1909.
            </p>
            <p>
              <strong>Benefits to the ecosystem</strong>: Like their ancestors, they are resistant to harsh climates and
              severe weather conditions. Adapted to foraging in the wild, they can live on a limited amount of food and
              have an extremely resilient immune system. Through behavior such as browsing, grazing and fertilizing,
              they will promote biodiversity in the Delta region.
            </p>
          </>
        ),
      },
      {
        title: 'Water buffalo',
        description: (
          <>
            <p>
              A herd of seven animals was released in 2019 and one calf has been born since, so there are now eight
              roaming the delta.
            </p>
            <p>
              Natural grazers, they adapt well to wet conditions and the delta diet including young reeds.
            </p>
            <p>
              <strong>Benefits to the ecosystem</strong>: Their grazing opens up scrub and reed beds, creating a dynamic
              landscape, thereby benefiting an array of wildlife species, such as birds, amphibians, insects and fish.
              Also, buffalo can carry and distribute more than 200 plant species in their fur and in their digestive
              system.
            </p>
          </>
        ),
      },
      {
        title: 'Tauros',
        description: (
          <>
            <p>
              There are 18 grazing near Sfantu Gheorghe on the Romanian side of the delta.
            </p>
            <p>
              <strong>Benefits to the ecosystem</strong>: Through their grazing, the growing number of Tauros in the
              delta are gradually creating a biodiversity-rich mosaic landscape that benefits other species such as wild
              boar, golden jackal and various rodents.
            </p>
          </>
        ),
      },
    ],
  },
};
