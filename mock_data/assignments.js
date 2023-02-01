export default [
  {
    id: 1,
    name: "APT-0",
    due: "09/03/2023",
    progress: 0,
    info: "Do all 6",
    apts: [{ name: "Intro", tests: 20, tags: ["Required"], id: "33" }],
  },
  {
    id: 2,
    name: "APT-1",
    due: "09/12/2022",
    progress: 100,
    info: "",
    apts: [
      { name: "Gravity", tests: 100, tags: ["Required"], id: "28" },
      { name: "Bogsquare", tests: 100, tags: ["Required"], id: "6" },
      { name: "Cone", tests: 100, tags: ["Required"], id: "15" },
      { name: "Grayscale", tests: 100, tags: ["Required"], id: "29" },
      { name: "Laundry", tests: 100, tags: ["Lec 4", "Required"], id: "36" },
    ],
  },
  {
    id: 3,
    name: "APT-2",
    due: "09/28/2022",
    progress: 60,
    info: "Think about lecture",
    apts: [
      { name: "ReadQuizScore", tests: 1, tags: ["Required"], id: "54" },
      { name: "RemoveMiddle", tests: 1, tags: ["Required", "Split"], id: "55" },
      {
        name: "PortManteau",
        tests: 0.06666666666666667,
        tags: ["Required", "Slice"],
        id: "52",
      },
      { name: "TotalWeight", tests: 1, tags: ["Required"], id: "69" },
      {
        name: "SentenceLength",
        tests: 0.6666666666666666,
        tags: ["Required", "Loop", "Split", "Count"],
        id: "59",
      },
    ],
  },
  {
    id: 4,
    name: "APT-3",
    due: "10/07/2023",
    progress: 80,
    info: "",
    apts: [
      { name: "DNAcgratio", tests: 1, tags: ["Required"], id: "19" },
      { name: "Pancakes", tests: 1, tags: ["Lec 10", "Required"], id: "46" },
      { name: "Bagels", tests: 1, tags: ["Lec 9", "Required"], id: "3" },
      {
        name: "CreateAcronym",
        tests: 1,
        tags: ["Loop", "Indexing", "Challenge"],
        id: "18",
      },
      { name: "Emphasize", tests: 1, tags: ["Required"], id: "24" },
      { name: "LastNameFirst", tests: 1, tags: ["Required"], id: "35" },
    ],
  },
  {
    id: 5,
    name: "OPTIONAL - NOT FOR CREDIT",
    due: "",
    info: "Use to practice for APT quiz 1",
    apts: [
      { name: "BookRating", tests: 100,tags: [], id: "7" },
      { name: "SpecificWords", tests: 100,tags: [], id: "64" },
      { name: "WhichSubjects", tests: 100,tags: [], id: "75" },
      { name: "CodeBreaker", tests: 100,tags: [], id: "13" },
    ],
  },
  {
    id: 6,
    name: "APT-4",
    due: "10/19/2023",
    progress: 80,
    info: "Complete 5, two are required, plus three more, the others are extra",
    apts: [
      { name: "IsSpecial", tests: 0, tags: [], id: "34" },
      { name: "MorseLikeCode", tests: 0, tags: ["Parallel Lists"], id: "43" },
      {
        name: "Pikachu",
        tests: 0.06666666666666667,
        tags: ["While Loop"],
        id: "50",
      },
      { name: "Calculator", tests: 0.6666666666666666, tags: [], id: "10" },
      {
        name: "Family",
        tests: 0.3333333333333333,
        tags: ["Lec 13", "Challenge"],
        id: "26",
      },
      { name: "TxMsg", tests: 1, tags: ["Lec 12", "Required"], id: "71" },
      { name: "ScoreIt", tests: 0, tags: ["Required"], id: "57" },
    ],
  },
  {
    id: 7,
    name: "APT-5",
    due: "10/28/2023",
    progress: 80,
    info: "Complete 5, others are extra",
    apts: [
      { name: "CarrotBoxes", tests: 100,tags: ["Suggested"], id: "11" },
      { name: "EatingGood", tests: 100,tags: ["Lec 13"], id: "23" },
      { name: "SandwichBar", tests: 100,tags: ["Lec 14"], id: "56" },
      { name: "BagFitter", tests: 100,tags: [], id: "2" },
      { name: "Common", tests: 100,tags: [], id: "14" },
      { name: "VenmoTracker",tests: 100, tags: ["Lec 14"], id: "72" },
    ],
  },
  {
    id: 8,
    name: "APT-6",
    due: "11/09/2023",
    progress: 80,
    info: "Complete 5, others are extra",
    apts: [
      { name: "BordaCount", tests: 100,tags: ["Lab 8"], id: "8" },
      { name: "MemberCheck", tests: 100,tags: [], id: "40" },
      { name: "WordCompositionGame", tests: 100,tags: [], id: "76" },
      { name: "Badges", tests: 100,tags: ["Sets"], id: "1" },
      { name: "SortedFreqs", tests: 100,tags: ["Sorted Sets"], id: "63" },
      { name: "SortByFreqs", tests: 100,tags: ["Sort"], id: "60" },
      { name: "IRVoting", tests: 100,tags: [], id: "30" },
      { name: "AnagramFree", tests: 100,tags: ["Sort", "Challenge"], id: "0" },
    ],
  },
  {
    id: 9,
    name: "APT-7",
    due: "11/19/2023",
    progress: 80,
    info: "Complete 5, two are required, plus do three more, the others are extra",
    apts: [
      { name: "PickyEater", tests: 100,tags: [], id: "49" },
      { name: "CharityDonor", tests: 100,tags: ["Required"], id: "12" },
      { name: "VoteRigging", tests: 100,tags: ["Greedy"], id: "73" },
      { name: "TrophyShelf", tests: 100,tags: [], id: "70" },
      { name: "SubstringFreq", tests: 100,tags: [], id: "66" },
      { name: "Blanket", tests: 100,tags: ["Challenge"], id: "4" },
      { name: "DataLinkingCount", tests: 100,tags: [], id: "20" },
      { name: "SecretCode", tests: 100,tags: [], id: "58" },
      { name: "MedalTable", tests: 100,tags: ["Required"], id: "39" },
    ],
  },
  {
    id: 10,
    name: "OPTIONAL - NOT FOR CREDIT",
    due: "",
    progress: 80,
    info: "",
    apts: [
      { name: "InsideCount", tests: 100,tags: [], id: "31" },
      { name: "WhichFirstNames", tests: 100,tags: [], id: "74" },
      { name: "BuyGroceries", tests: 100,tags: [], id: "9" },
      { name: "NotFirst", tests: 100,tags: [], id: "45" },
      { name: "SortCount", tests: 100,tags: [], id: "61" },
      { name: "PopularEnding", tests: 100,tags: [], id: "51" },
    ],
  },
];
