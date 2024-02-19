const list = [
    {
      id: 1,
      Heading: "digital mosaic wall photo booth",
      img: "/digital-engagement/digital-mosaic-wall-photp-booth.png",
      desc: "",
      bookNow: `digital mosaic wall photo booth`,
      target: "/",
    },
    {
      id: 2,
      Heading: "digital photobooth",
      img: "/digital-engagement/digital-photobooth.png",
      desc: "",
      bookNow: "digital photobooth",
  
  
      target: "https://youtu.be/4o0XpbQFDJc",
    },
    {
      id: 3,
      Heading: "online crossword",
      img: "/digital-engagement/online-crossword.png",
      desc: "",
      bookNow: "online crossword",
      target: "https://www.youtube.com/watch?v=cPIxHvY3K2o",
    },
    {
      id: 4,
      Heading: "online chess game",
      img: "/digital-engagement/online-chess-game.png",
      desc: "",
      bookNow: "online chess game",
      target: "/",
    },
    {
      id: 5,
      Heading: "QR Code Based Registration",
      img: "/digital-engagement/qr-code-based-registration.png",
      desc: "",
      bookNow: "QR Code Based Registration",
      target: "https://youtu.be/pD1otredtSY",
    },
    {
      id: 6,
      Heading: "Online Cricket",
      img: "/digital-engagement/online-cricket.png",
      desc: "",
      bookNow: "Online Cricket",
      target: "https://youtu.be/znj9F9XeF3U",
    },
    {
      id: 7,
      Heading: "Online Sudoku",
      img: "/digital-engagement/online-sudoku.png",
      desc: "",
      bookNow: "Online Sudoku",
      target: "https://youtu.be/nb8UL5ZHfys",
    },
    {
      id: 8,
      Heading: "Jigsaw Puzzle Game",
      img: "/digital-engagement/jigsaw-puzzle-game.png",
      desc: "",
      bookNow: "Jigsaw Puzzle Game",
      target: "https://youtu.be/y3pjUx5U_vY",
    },
    {
      id: 9,
      Heading: "Digital Tambola Game",
      img: "/digital-engagement/digital-tambola-game.png",
      desc: "",
      bookNow: "Digital Tambola Game",
      target: "https://youtu.be/gENxYQYVB4Y",
    },
    {
      id: 10,
      Heading: "Text Quiz Game",
      img: "/digital-engagement/text-quize-game.png",
      desc: "",
      bookNow: "Text Quiz Game",
      target: "https://youtu.be/lUiW07szbnk",
    },
    {
      id: 11,
      Heading: "KBC type Quiz Game",
      img: "/digital-engagement/KBC-type-quiz-game.png",
      desc: "",
      bookNow: "KBC type Quiz Game",
      target: "/",
    },
    {
      id: 12,
      Heading: "Photo Quiz Game",
      img: "/digital-engagement/photo-quiz-game.png",
      desc: "",
      bookNow: "Photo Quiz Game",
      target: "/",
    },
    {
      id: 13,
      Heading: "Music Video Booth",
      img: "/digital-engagement/music-video-booth.png",
      desc: "",
      bookNow: "Music Video Booth",
      target: "https://youtu.be/jrtQXnqmUvg",
    },
    {
      id: 14,
      Heading: "Magazine Booth",
      img: "/digital-engagement/magazine-booth.png",
      desc: "",
      bookNow: "Magazine Booth",
      target: "/",
    },
    {
      id: 15,
      Heading: "Digital Video Booth",
      img: "/digital-engagement/digital-video-booth.png",
      desc: "",
      bookNow: "Digital Video Booth",
      target: "https://youtu.be/q5uIGVj4aBE",
    },
    {
      id: 16,
      Heading: "Match Card Game",
      img: "/digital-engagement/match-card-game.png",
      desc: "",
      bookNow: "Match Card Game",
      target: "https://youtu.be/CHdWwhsFjVo",
    },
    {
      id: 17,
      Heading: "Instant Id Print",
      img: "/digital-engagement/instant-id-print.png",
      desc: "",
      bookNow: "Instant Id Print",
      target: "https://youtu.be/pD1otredtSY",
    },
    {
      id: 18,
      Heading: "Registration Microsite",
      img: "/digital-engagement/registration-microsite.png",
      desc: "",
      bookNow: "Registration Microsite",
      target: "/",
    },
    {
      id: 19,
      Heading: "Picture Quiz",
      img: "/digital-engagement/picture-quiz.png",
      desc: "",
      bookNow: "Picture Quiz",
      target: "/",
    },
  ];
  
  //serverside
  // domain/api/products
  //clientside
  //api/products

  
  function handler(req, res) {
    if (req.method === "GET") {
      // status 200 means good   ba3tina object {}
      res.status(200).json({
        status: "success",
        data: list,
        total: list.length,
      });
  
  
  //data:list ( list is the value of data ) data motghyir list haye value 
//array feeya data w ana bhot ism yali bade yeh abel el list
//feene ektob product badal data
    }
   
    // only GET method allowed           the       POST (for fetching data),DELETE ,PUT (for updating data) , PATCH  are not allowed
    else {
        //only    GET    method allowed
        res.status(405).json({
        status: "failed",
        message: "Method not allowed",
      });
    }
  }

  export default handler;
  
  
  
  
  
  