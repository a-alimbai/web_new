

import { Component } from '@angular/core';

export interface Item {
  link: string,
  name: string,
  description: string,
  images: string[],
  rating: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[] = [
    {
      link: "https://www.amazon.com/AmazonBasics-Puresoft-PU-Padded-Mid-Back-Computer/dp/B081H3Y5NW/ref=sr_1_6?dchild=1&keywords=amazonbasics&pd_rd_r=571bf743-9aad-434d-b843-a818149cace3&pd_rd_w=Ou827&pd_rd_wg=1B6Lh&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=EQ7K1N37WNJNW4F9QJJZ&qid=1614339066&sr=8-6",
      name: "Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black",
      images: ["https://images-na.ssl-images-amazon.com/images/I/51On3noGxGL._SP407,567,0%7C5192Dmun1qL.jphttps://images-na.ssl-images-amazon.com/images/I/712Y-X3h6WL._AC_SL1500_.jpgg,51nAAZhELSL.jpg,41W3jKa99YL.jpg,511QyM3bTuL.jpg,51YFP4x9sML.jpg_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71RCA2errrL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81x0GO6YveL._AC_SL1500_.jpg"],
      description: "Comfortable office chair upholstered in durable polyurethane bonded leather",
      rating: 8425
    },

    {
      link: "https://www.amazon.com/AmazonBasics-60-Inch-Lightweight-Tripod-Bag/dp/B005KP473Q/ref=sr_1_17?dchild=1&keywords=amazonbasics&pd_rd_r=571bf743-9aad-434d-b843-a818149cace3&pd_rd_w=Ou827&pd_rd_wg=1B6Lh&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=EQ7K1N37WNJNW4F9QJJZ&qid=1614339728&sr=8-17",
      name: "AmazonBasics 60-Inch Lightweight Tripod with Bag",
      images: ["https://images-na.ssl-images-amazon.com/images/I/61vjUCzQCaL._AC_SL1484_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61bsaGifvWL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/91ww6wXoArL._AC_SL1500_.jpg"],
      description: "Lightweight tripod with adjustable-height legs and rubber feet",
      rating: 52029
    },

    {
      link: "https://www.amazon.com/AmazonBasics-Wireless-Computer-Mouse-Receiver/dp/B005EJH6Z4/ref=sr_1_38?dchild=1&keywords=amazonbasics&pd_rd_r=571bf743-9aad-434d-b843-a818149cace3&pd_rd_w=Ou827&pd_rd_wg=1B6Lh&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=EQ7K1N37WNJNW4F9QJJZ&qid=1614339728&sr=8-38",
      name: "Amazon Basics Wireless Computer Mouse with USB Nano Receiver - Black",
      images: ["https://images-na.ssl-images-amazon.com/images/I/61LtuGzXeaL._AC_SL1465_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61C0vlJRHxL._AC_SL1465_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61SLOSSHDFL._AC_SL1465_.jpg"],
      description: "Smooth, precise and affordable wireless optical 3-button mouse with USB nano receiver for laptop, desktop and netbook PCs",
      rating: 37538
    },

    {
      link: "https://www.amazon.com/AmazonBasics-Matte-Keyboard-QWERTY-Layout/dp/B07WJ5D3H4/ref=pd_pbp13n_hpb_sims_2?pd_rd_w=zKCLa&pf_rd_p=a0aefcc4-048a-468d-a4bb-24a7e1d03f86&pf_rd_r=MW0FQVFDN9NZV13DYDQS&pd_rd_r=bc9c0a5f-9689-42c2-97d3-506387b34fc5&pd_rd_wg=f9CBE&pd_rd_i=B07WJ5D3H4&psc=1",
      name: "Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)",
      images: ["https://images-na.ssl-images-amazon.com/images/I/81cg9myC9kL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81syciF%2BFRL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81FR7RaZ6XL._AC_SL1500_.jpg"],
      description: "Low-profile Keys Provide a Quiet, Comfortable Typing Experience",
      rating: 257
    },

    {
      link: "https://www.amazon.com/AmazonBasics-Storage-16-Piece-Containers-BPA-Free/dp/B08BS68JZ1/ref=sr_1_50?dchild=1&keywords=amazonbasics&pd_rd_r=571bf743-9aad-434d-b843-a818149cace3&pd_rd_w=Ou827&pd_rd_wg=1B6Lh&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=EQ7K1N37WNJNW4F9QJJZ&qid=1614339728&sr=8-50",
      name: "Amazon Basics Glass Food Storage, 16-Piece Set, 8 Containers and 8 BPA-Free Lids",
      images: ["https://images-na.ssl-images-amazon.com/images/I/81CoitBb9DL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71RAHHfDYwL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/816qJsh06jL._AC_SL1500_.jpg"],
      description: "Heat-resistant up to 580°C (1076°F); can tolerate excessive temperature changes without cracking",
      rating: 11
    },

    {
      link: "https://www.amazon.com/LKXHarleya-Classic-Michelangelo-Sculpture-Figurine/dp/B07F867BSM/ref=sr_1_2?crid=344HSRJSSGHNZ&dchild=1&keywords=sculpture&qid=1614022494&sprefix=sculpture%2Caps%2C360&sr=8-2",
      name: "Michelangelo Statue",
      images: ["https://images-na.ssl-images-amazon.com/images/I/61k--8R0jwL._AC_SL1200_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61bEHLzAKTL._AC_SL1200_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61S2TxfSQIL._AC_SL1200_.jpg"],
      description: "Made of the high-quality resin, the David Sculpture Figurine is durable and fadeless.",
      rating: 666
    },

    {
      link: "https://www.amazon.com/Sullivans-Artificial-Saguaro-Distressed-DOT124/dp/B07N2YT2YF/ref=sr_1_4?dchild=1&keywords=cactus&qid=1614022578&sr=8-4",
      name: "Artificial Succulent Plant",
      images: ["https://images-na.ssl-images-amazon.com/images/I/71sN3QQg3GL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81JQkz0NJdL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81-%2BlZwDBuL._AC_SL1500_.jpg"],
      description: "Natural decor with a realistic feel, great for use in office, home, balcony and with other furniture and room decorations",
      rating: 5.7
    },

    {
      link: "https://www.amazon.com/STATISTICS-COLLEGE-STUDENTS-RESEARCHERS-SECOND/dp/B08RQZJ5GG/ref=sr_1_15?crid=FQRLUANBAE3P&dchild=1&keywords=statistics&qid=1614022121&sprefix=statisti%2Caps%2C363&sr=8-15",
      name: "STATISTICS FOR STUDENTS",
      images: ["https://images-na.ssl-images-amazon.com/images/I/71puiLhGMmL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71nDrQowJGL.jpg"],
      description: "This book was written by a professor of Psychology who taught advanced statistics. It teaches the concepts of Statistics.",
      rating: -5
    },

    {
      link: "https://www.amazon.com/Aurora-World-Pompom-Penguin-White/dp/B00GS228DG/ref=sr_1_7?dchild=1&keywords=penguin&qid=1614021667&sr=8-7",
      name: "Pompom Penguin",
      images: ["https://images-na.ssl-images-amazon.com/images/I/71nE94ukV3L._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81%2BkpTPWDBL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81Rt3iBuP9L._AC_SL1500_.jpg"],
      description: "Amazing mini-size, his tiny little shape and form makes sure he offers a friendly little companion to help really build up your growing collection.",
      rating: 5
    },

    {
      link: "https://www.amazon.com/Nokia-Unlocked-Smartphone-Fingerprint-Assistant/dp/B08JRF9L15/ref=sr_1_4?dchild=1&keywords=nokia+old&qid=1614021949&sr=8-4",
      name: "Nokia 2.4 Android",
      images: ["https://images-na.ssl-images-amazon.com/images/I/61sLvszoETL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71d0f93y02L._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61lziaZsGGL._AC_SL1500_.jpg"],
      description: "Capture detailed shots on the Nokia 2.4 Android Smartphone after dark with its Night Mode advanced image fusion and exposure stacking.",
      rating: 2.7
    },
  ]
  title = 'My store';
}