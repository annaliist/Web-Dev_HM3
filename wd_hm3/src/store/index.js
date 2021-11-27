import { createStore } from "vuex";

export default createStore({
  state: {
    productList: [
      {id: 1, author: "Heleliis Hõim", date: "September 10, 2021 9:14", image:  "https://s3.amazonaws.com/appforest_uf/f1634322793489x977521909064446500/hoim3.jpg", profile_image: "https://s3.amazonaws.com/appforest_uf/f1630817676815x305382981342536200/heleliis.jpeg", body: "My new exhibition is up @Palo Alto, read about it here: kanvas.ai/heleliis-hoim", counter: 0},
      {id: 2, author: "Pedro Pablo Ramírez Huerta", date: "September 19, 2021 16:23", image: "https://s3.amazonaws.com/appforest_uf/f1634065064732x833241585880476000/IMG_5318.jpg",profile_image: "https://s3.amazonaws.com/appforest_uf/f1634136787650x956409384232855600/Pedro.png",body: "My first exhibition in Estonia. Go have a look! :)", counter: 0},
      {id: 3, author: "Taavi Tulev",date: "September 24, 2021 22:54",image: "https://s3.amazonaws.com/appforest_uf/f1634125405124x214129227983769660/TaaviTulev_Kollasega_30x30cm.png",profile_image: "https://s3.amazonaws.com/appforest_uf/f1634136819907x176553549074317100/taavi.png",body: "Feeling dizzy?", counter: 0},
      {id: 4, author: "Nele Klaas",date: "October 1, 2021 18:04", image: null,profile_image: "https://s3.amazonaws.com/appforest_uf/f1633805520194x996063221501548200/DSCF9031.JPG",body: "Looking for different colored acrylic paint, HMU!", counter: 0},
      {id: 5, author: "Anu Muiste",date: "October 3, 2021 12:12",image: "https://s3.amazonaws.com/appforest_uf/f1630910373601x612557356024048800/360kraadi_110x100.jpg",profile_image: "https://s3.amazonaws.com/appforest_uf/f1630915769702x590430321059811200/Anu%20Musite.jpeg",body: "Painting '360 degrees', 2021.", counter: 0},
      {id: 6, author: "Evelin Zolotko",date: "October 7, 2021 19:47",image: "https://s3.amazonaws.com/appforest_uf/f1633345419602x438426479982952700/A69723C3-885C-45A2-A4CB-BB0567ABE108_1_105_c.jpeg",profile_image: "https://s3.amazonaws.com/appforest_uf/f1631115268304x990804007312452200/IMG_20210824_160513.jpg",body: "I curated my first exhibition this month, thanks for all the support and come check it out @Telliskivi.", counter: 0},
      {id: 7, author: "Lukas John",date: "October 7, 2021 12:08",image: "https://s3.amazonaws.com/appforest_uf/f1632236597014x439282909383711400/Photo%2021.09.2021%2C%2016%2035%2033.jpg",profile_image: "https://s3.amazonaws.com/appforest_uf/f1632235268731x101062805605621540/Photo%2001.10.2020%2C%2021%2059%2045.jpg",body: "First AND LAST attempt with oil pastels lol.", counter: 0},
      {id: 8, author: "Allan Roosileht",date: "October 12, 2021 18:17",image: "https://s3.amazonaws.com/appforest_uf/f1625078055440x701968911409408800/Vinu%CC%88u%CC%88l%20ja%20akru%CC%88u%CC%88l.%20II.jpg",profile_image: "https://s3.amazonaws.com/appforest_uf/f1625173513438x703655536748438000/206889359_867275010807042_5004943300384913687_n.jpg",body: "Personal exhibition 'Vinyl and Acryl' is up at the Solaris gallery.", counter: 0},
      {id: 9, author: "Sandra Sirp",date: "October 18, 2021 16:30",image: "https://s3.amazonaws.com/appforest_uf/f1626547943014x341776883991764100/SIX_2020_After%20void.png",profile_image: "https://s3.amazonaws.com/appforest_uf/f1630222602991x342189816716947460/Sandra%20Sirp_portree_2021.jpg",body: "Felt dark today...", counter: 0},
      {id: 10, author: "Paul Kormashov",date: "October 20, 2021 11:57",image: "https://s3.amazonaws.com/appforest_uf/f1629574628953x709212587583159400/First%20Light%20120%20x%20100.JPG",profile_image: "https://s3.amazonaws.com/appforest_uf/f1629576453209x667812219843980400/Paul.jpg",body: "'First Light' was just sold for 50 000 euros. Dream big!", counter: 0}
    ]
  },
  mutations: {
    like: state => {
      state.productList.forEach(product => {
      product.counter += 1;})},
    reset: state => {
      state.productList.forEach(product => {
      product.counter = 0;})
    }
  },
});
