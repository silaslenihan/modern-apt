export default [
  {
    filename: "AnagramFree.py",
    name: "AnagramFree",
    description: "",
    lang: "python",
    initial:
      'def getMaximumSubset(words):\n\t"""\n\treturn int value that represents\n\tsize of largest anagram-free subset\n\tof values in words, a list of strings\n\t"""\n\t\n\t# you write code here',
    problem:
      'A string X is an anagram of string Y if X can be obtained by arranging\nall characters of Y in some order, without removing any characters and\nwithout adding new characters. For example, each of the strings "baba",\n"abab", "aabb" and "abba" is an anagram of "aabb", and strings "aaab",\n"aab" and "aabc" are not anagrams of "aabb".\n\n\n\nA set of strings is anagram-free if it contains no pair of strings which\nare anagrams of each other. Given a set of strings <codE>words</code>,\nreturn the size of its largest anagram-free subset. Note that the entire\nset is considered a subset of itself.',
    constraints:
      "<ul>\n<li> <code>words</code> will contain between 1 and 50 elements, inclusive\n<li> Each element of <code>words</code> contains between 1 and 50\ncharacters, inclusive\n<li> Each element of <code>words</code> will consist of lowercase\nletters 'a' -- 'z' only\n<li> All elements of <code>words</code> will be distinct.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nwords = ["abcd","abdc","dabc","bacd"]\n\nReturns: 1\n\n\n</code>\nAll of the strings in <code>words</code> are anagrams of each other, so\nno two of them can simultaneously belong to an anagram-free set.\n\n\n<li class="example-even">\n<code>\nwords = ["abcd","abac","aabc","bacd"]\n\nReturns: 2\n\n\n</code>\nOne of the maximum anagram-free subsets is ["abcd","abac"].\n\n<li class="example-odd">\n<code>\nwords = ["aa","aaaaa","aaa","a","bbaaaa","aaababaa"]\n\nReturns: 6\n\n</code>\nNote that strings of different length cannot be anagrams of each other.\n\n<li class="example-even">\n<code>\nwords = ["creation","sentence","reaction","sneak","star","rats","snake"]\n\nReturns: 4\n\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2010, TopCoder, Inc. All rights reserved.",
    formName: "anagramfree",
  },
  {
    filename: "Badges.py",
    name: "Badges",
    description: "",
    lang: "python",
    initial:
      'def findLabel(labels,deeds,needs):\n\t"""\n\treturn string based on parameters\n\tlabels a list of strings\n\tdeeds a list of strings\n\tand needs a list of strings\n\t"""\n\t\n\t# you write code here',
    problem:
      'You are helping to assign badges based on accomplishments.\nThe accomplishments completed by a participant are specified\nin the list of strings <code>deeds</code> where each element\nof <code>deeds</code> is a completed accomplishment.\n\nThe names of badges are specified in the list <code>labels</code>.\nFor each element of <code>labels</code> there is a corresponding\nset of accomplishments in the list <code>needs</code> to earn that\ncorresponding badge, so that earning the badge with name <code>labels[0]</code>\n(the first element of <code>labels</code>) requires completing\neach of the accomplishments in <code>needs[0]</code>. Similarly,\nearning badge with name <code>labels[k]</code> requires\ncompleting each of the accomplishments in <code>needs[k]</code>.\n\nReturn the name of the first badge earned (lowest index), or return the\nstring <code>"nobadge"</code> if no badge is earned. Strings\nin <code>needs</code> are space-delimited words that indicate\nthe accomplishments needed to earn a badge. See examples for details.',
    constraints:
      "<ul>\n<li> There will be no more than 20 strings in\n<code>labels</code></li>\n<LI> The number of strings of <code>labels</code> will be the same\nas the number of strings in <code>needs</code>. </li>\n<li> The string <code>\"nobadge\"</code> will not appear in\n<code>labels</code>. </li>\n<li>Strings in <code>needs</code> consist of space-separated characters.\n<LI>All strings consist only of upper- and lower-case letters 'A'-'Z'\nand 'a'-'z' or spaces in <code>needs</code>.\n</ul>",
    examples:
      "<ol>\n<li class=\"example-odd\"><code>\nlabels = ['wolf', 'bear', 'lion']\ndeeds = [\"fire\", \"camping\", \"spanish\"]\nneeds = [\"fire knots camping\", \"spanish fire internet\", \"fire camping spanish\"]\n\nReturns 'lion'\n</code>\nwolf requires three accomplishments, including knots, which is not in deeds.\nbear requires internet which\nis not in deeds. All three accomplishments to earn lion\nare in deeds.\n\n<li class=\"example-even\">\n<code>\nlabels = ['beginner', 'novice', 'intermediate', 'expert']\ndeeds = ['skip', 'hop', 'wobble']\nneeds = ['skip run walk talk', 'wobble teeter fall skip',\n'skip hop', 'skip hop wobble']\n\nreturns 'intermediate'\n</code>\nAlthough both intermediate and expert badges can be earned, you must\nreturn\nthe first badge (with the lowest index) earned. Since 'talk' is not in\n<tt>deeds</tt> and is required for the 'beginner' badge, that badge is\nnot earned. Similarly neither 'fall' nor 'teeter' are in <tt>deeds</tt>,\nso 'novice' cannot be earned.\n\n<li class=\"example-odd\">\n<code>\nlabels = ['first', 'second', 'third', 'fourth']\ndeeds = ['code', 'talk', 'plan', 'run']\nneeds = ['code talk plan think', 'talk plan run think', 'plan run code think', 'run code talk think']\n\nreturns \"nobadge\"\n\n</code>\nAll the badges require knowing how to think, which is not in <tt>deeds</tt>,\nso no badge can be earned.\n\n<li class=\"example-even\">\n<code>\nlabels = ['first', 'second', 'third', 'fourth']\ndeeds = ['code', 'talk', 'plan', 'run']\nneeds = ['code talk plan think', 'talk plan run ', 'plan run code think', 'run code talk think']\n\nreturns \"second\"\n\n</code>\nOnly the second badge doesn't require thinking.\n</ol>",
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "badges",
  },
  {
    filename: "BagFitter.py",
    name: "BagFitter",
    description: "",
    lang: "python",
    initial:
      'def bags(strength, food):\n\t"""\n\treturn int based on parameters strength, an int\n\tand food a list of Strings\n\t"""',
    problem:
      "You have just begun working as a grocery bagger at a\nfood store. Your job is to place all of a customer's items into bags, so\nthey can be carried from the store. Your manager has instructed you to\nuse as few bags as possible, to minimize the store's overall\ncost. However, for the customer's convenience, you are instructed that\nonly items of the same type can be placed in the same bag. For instance,\na produce item can be bagged with any other produce items, but not with\ndairy items.\n\n\nYou are given <code>food</code>, a list of strings, indicating the type of\neach item that needs to be bagged. You are also given an <code>\nstrength</code>, an int, indicating the maximum number of items that can be\nplaced in each bag (each bag holds the same maximal number of item,\nregardless of the type of item). You are to return an int indicating the minimum\nnumber of bags required to package the customer's items.",
    constraints:
      "<ul>\n<li> <code>strength</code> will be between 1 and 50, inclusive.\n<Li> <code>food</code> will contain between 0 and 50 elements, inclusive.\n<LI> Each element of <code>food</code> will contain between 1 and 50 characters,\ninclusive.\n<LI>Each element of <code>food</code> will contain only the characters 'A'-'Z'.\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nstrength = 2\n\nfood =\n["DAIRY",\n"DAIRY",\n"PRODUCE",\n"PRODUCE",\n"PRODUCE",\n"MEAT"]\n\nReturns: 4\n\n</code>\n\nHere, you have six items. You could put two items in each bag, but you\nwould have to mix item types. The single meat item must get its own\nbag. The two dairy items fit in one bag. The three produce items will\nrequire two bags.\n\n<li class="example-even">\n<code>\nstrength = 3\n\nfood =\n["DAIRY",\n"DAIRY",\n"PRODUCE",\n"PRODUCE",\n"PRODUCE",\n"MEAT"\n]\n\nReturns: 3\n\n</code>\nSimilar to above, but now we have stronger bags. Note again, though,\nthat if we were allowed to mix item types, we could get away with only 2\nbags. But since item types cannot be mixed, we need 3 bags.\n\n\n<li class="example-odd">\n<code>\nstrength = 10\n\nfood = []\n\nReturns: 0\n\n</code>\nThe bags are really strong, but we didn\'t buy anything.\n\n<li class="example-even">\n<code>\nstrength = 5\n\nfood =\n["CANNED",   "CANNED",  "PRODUCE",\n"DAIRY",    "MEAT",    "BREAD",\n"HOUSEHOLD","PRODUCE", "FROZEN",\n"PRODUCE", "DAIRY"\n]\n\nReturns: 7\n\n</code>\nNotice that a customer doesn\'t necessarily pay for the items in any\nparticular order, but the bagger still has to be responsible for\nsorting them out. In this case, though, one bag for each item type\nsuffices.\n\n<li class="example-odd">\n<code>\nstrength = 2\n\nfood =\n["CANNED",   "CANNED",  "PRODUCE",\n"DAIRY",    "MEAT",    "BREAD",\n"HOUSEHOLD","PRODUCE", "FROZEN",\n"PRODUCE", "DAIRY"\n]\n\nReturns: 8\n\n</code>\nAs above, but our produce requires two bags now.\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2006, TopCoder, Inc. All rights reserved.",
    formName: "bagfitter",
  },
  {
    filename: "Bagels.py",
    name: "Bagels",
    description: "",
    lang: "python",
    initial:
      'def bagelCount(orders) :\n\t"""\n\treturn number of bagels needed to fulfill\n\tthe orders in integer list parameter orders\n\t"""\n\t\n\t# you write code here',
    problem:
      "You are in charge of web-based orders for your neighborhood bagel store,\n<em>The Bagel Byte</em>. Each evening you must total the orders to be\npicked up the next day. Some orders are simply for <em>N</em> bagels,\nbut each order of a dozen or more bagels is topped off with an extra\nbagel, the so-called \"baker's dozen\".  This means, for example, that an\norder for 25 bagels actually requires 27 bagels to fulfill since there\nare two extra bagels needed for each dozen in the order. An order for 11\nbagels doesn't require any extra since it's for less than a dozen.\n\nGiven a list of integers representing\nbagel orders determine the number of bagels needed to\nfulfill all the orders.",
    constraints:
      "<ul>\n<LI>  The list <code>orders</code> will contain between 0 and 50\nelements.\n\n<LI> Each element of <code>orders</code> will be between 1 and 60 (no\none orders more than five dozen at-a-time).\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\norders = [1,3,5,7]\n\nReturns:  16\n\n</code>\nNo order is for more than a dozen, return the total of all orders.\n\n<li class="example-even">\n<code>\n\norders = [11,22,33,44,55]\n\nReturns: 175 since 11 + (22+1) +(33+2) + (44+3) + (55+4) = 175\n\n</code>\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "bagels",
  },
  {
    filename: "Blanket.py",
    name: "Blanket",
    description: "",
    lang: "python",
    initial:
      "def order(preferences, size, yarn):\n\t'''\n\tpreferences (list of strings) - the colors the customer prefers by order\n\tof preference\n\tsize (int) - the number of balls of yarn needed\n\tyarn (list of strings) - list of strings of two values where the first is\n\tthe color of yarn and the second is how much yarn is available\n\t\n\tReturn a list of strings of two values where the first element is a color\n\tand the second is how much yarn is needed sorted by the color.\n\t'''\n\treturn []",
    problem:
      "A weaver needs a function to help decide how many yarn balls of each color to use per blanket. <code>preferences</code> is the customer's list of desired colors ordered by preference where index 0 has the most preferred color. <code>size</code> has the number of yarn balls needed for the blanket. <code>yarn</code> is a list of the weaver's stock of colors and yarn balls. Each element is a string with two values separated by whitespace. The first value is a color without any spaces and the second value is the number of yarn balls of that color. <b>It is not the case that all colors in <code>yarn</code> are in <code>preferences</code> and vice versa.</b>\n\nReturn how many yarn balls of each color the weaver should use. The return value should be a list of strings with two values separated by a single whitespace. The first value has the color and the second value has the number of balls to use. <b>This list should be sorted alphabetically by color.</b>\n\nIf there is not enough yarn, return an empty list. If there is enough yarn, distribute how much yarn to use for each color across the available yarn as evenly as possible and when needing to make a choice between colors use the order of <code>preferences</code> by giving the customer more of what they more prefer.\n\nFor example, if the customer's list is ['red', 'green', 'blue'], we need 9 balls of yarn, and there are 10 balls of red and blue yarn but only 2 of green return the list ['blue 3', 'green 2', 'red 4']. In this case, 2 balls were taken per color, 3 more balls were needed but there is not enough green! Since red is preferred over blue, the customer got 2 more red yarn balls and 1 blue one.",
    constraints:
      "<ul>\n<li>All colors in <code>yarn</code> will have at least one ball of yarn.\n<li><code>size</code> > 0\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\npreferences = ['red', 'blue']\nsize = 10\nyarn = ['red 5', 'blue 5']\n\nReturns ['blue 5', 'red 5']\n</code>\n\n\n<li class=\"example-even\">\n<code>\npreferences = ['red', 'blue']\nsize = 10\nyarn = ['red 5', 'blue 1', 'green 10']\n\nReturns []\n# There isn't enough red and blue yarn to fulfill this order so an empty list is returned\n</code>\n\n\n<li class=\"example-odd\">\n<code>\npreferences = ['yellow', 'red', 'blue']\nsize = 7\nyarn = ['red 5', 'blue 5']\n\nReturns ['blue 3', 'red 4']\n# There is no yellow yarn, so the customer only gets red and blue yarn. The customer also gets one more ball of red yarn because they prefer red over blue.\n</code>\n\n\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "blanket",
  },
  {
    filename: "BodyMassIndex.py",
    name: "BodyMassIndex",
    description: "",
    lang: "python",
    initial:
      "def calculateBMI(input):\n\t'''\n\tThe list parameter input contains two integers in the\n\tformat [weight, height], where:\n\t\n\tweight-person's weight (in pounds (lbs)).\n\t\n\theight-person's height (in inches (in)).\n\t\n\tThe function should return an integer that\n\trepresents the calculated BMI.\n\t'''\n\t# you write code here",
    problem:
      "Body mass index (BMI) is a measure of body size, which is often calculated\nby medical professionals. BMI is calculated based on a person's height and\nweight. How this calculation depends on the metrics used.\n\nFor height in inches and weight in pounds, BMI is calculated as:\n<br><br>\n(weight/height<sup>2</sup>) x 703\n</p>\n\nGiven a list of a patient's weight and height, we want to determine a\nperson's BMI. Create the function named <code>calculateBMI</code> that has\none parameter named input, which is a list of integers. The list is in the\nformat [weight, height], where weight is the person's weight, and height\nis a person's height.\n</p>\n\nThis function returns the BMI, based on the input.</p>",
    constraints:
      "<ul>\n<li>The list only contains one weight and one height.\n<li>weight is an integer in the range of 1-800.\n<li>height is an integer in the range of 1-84.\n<li>The BMI returned is an integer value that rounds down to the closest\ninteger.\n</ul>",
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\ninput=[100,60]\n\nReturns: 19\n</code>\n# A person who is 5ft tall and weighs 100 lbs has a BMI of 19.527777777777775.\nHowever, because we\'re only considering the integer portion, only 19 is returned\n\n\n<li class="example-even">\n<code>\ninput=[160,65]\n\nReturns: 26\n</code>\n# A person who is 5ft 5in tall and weighs 160 lbs has a BMI of 26.622485207100592.\nHowever, because we\'re only considering the integer portion, only 26 is returned\n\n\n<li class="example-odd">\n<code>\ninput=[80,50]\n\nReturns: 22\n</code>\n# A person who is 4ft 2in tall and weighs 80 lbs.\n\n\n<li class="example-even">\n<code>\ninput=[325,77]\n\nReturns: 38\n</code>\n# A person who is 6ft 5in tall and weighs 325 lbs.\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; A. Nicki Washington and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "bodymassindex",
  },
  {
    filename: "Bogsquare.py",
    name: "Bogsquare",
    description: "",
    lang: "python",
    initial:
      'def score(word):\n\t"""\n\treturn integer obtained by squaring\n\tlength of String parameter word\n\t"""',
    problem:
      'In some word games the score awarded depends to some\nextent on the length of the word. For example, in Boggle&trade;\nlonger words receive higher scores than shorter words.\n\nIn the game <em>Bogsquare</em> the score of a word is the square\nof the length of the word, e.g., "dog" has a score of 9 and\n"carnivore" has a score of 81.\n\nWrite function  <code>score</code> to return the score\nof a string in Bogsquare.',
    constraints:
      "<ul>\n<li> <code>word</code> is a String of at most 128 characters.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nword = "dog"\n\nreturns 9\n\n</code>\n3*3 = 9\n\n<li class="example-even">\n<code>\nword = "I"\n\nreturns 1\n\n</code>\nOne-letter words don\'t yield a high score.\n\n<li class="example-odd">\n<code>\n\nword = "Antidisestablishmentarianism"\n\nreturn 784\n\n</code>\n28*28=784\n\n<li class="example-even">\n<code>\nword = "ox"\n\nreturns 4\n</code>\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "bogsquare",
  },
  {
    filename: "BookRating.py",
    name: "BookRating",
    description: "",
    lang: "python",
    initial:
      'def calculate(readpages, totalpages, numdays, amazon)\n\t"""\n\treadpages - number of pages read\n\ttotalpages - number of pages in the book\n\tnumdays - number of days read book\n\tamazon - book rating on amazon\n\t\n\tReturn the result of the formula shown.\n\tCalculate the answer as a float, then\n\treturn it as a truncated int\n\t"""\n\treturn 0',
    problem:
      "Terry has created a new book rating system that is based on 1) the number of\npages read (sometimes Terry cannot finish a book) we will call readpages,\n2) the total number of pages in the book, we will call totalpages, 3) the\nnumber of days Terry read the book, we will call numdays, and 4) the rating of\nthe book on amazon, we will call amazon.\nHere is the formula Terry has come up with:\n\n<img src=\"formula.png\">\n\n\nGiven the number of pages read, the total number of\npages in the book, the number of days Terry read the book and the rating of\nthe book on amazon, use Terry's formula to calculate the rating. Terry\ndoesn't like float numbers so after calculating the rating, convert the\nrating to an integer by truncating it",
    constraints:
      "<ul>\n<li><code>readpages > 0</code>\n<li><code>totalpages > 0</code>\n<li><code> numdays > 0</code>\n<li><code>rating > 0.0</code>\n</ul>",
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\nreadpages = 356\ntotalpages = 356\nnumdays = 10\namazon = 4.12\n\nreturns 100\n\nThe calculated value is 100.08483601425343. That value is trucated to the\nint 100.\n</code>\n\n\n\n<li class="example-even">\n<code>\nreadpages = 580\ntotalpages = 580\nnumdays = 50\namazon = 4.89\n\nreturns 20\n</code>\n\n<li class="example-odd">\n<code>\nreadpages = 250\ntotalpages = 267\nnumdays = 42\namazon = 3.1\n\nreturns 22\n\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Susan Rodger and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "bookrating",
  },
  {
    filename: "BordaCount.py",
    name: "BordaCount",
    description: "",
    lang: "python",
    initial:
      'def winners(ballot):\n\t"""\n\treturn list of winners based on votes\n\tin list ballot\n\t"""\n\t\n\t# you write code here\n\treturn []',
    problem:
      'Some voting systems are more "fair" than others. You\'ll\nwrite method <code>winners</code> to return a list\nof the winners using a <em>Borda Count</em> voting scheme\nthat is typically viewed as consensus based.\n(For more information on\nBorda Count and related voting schemes\nsee <a href="https://en.wikipedia.org/wiki/Borda_count">\nthe Wikipedia article</a>).\n\nEach string in parameter <code>ballots</code> represents\nthe ballot, or votes, by one eligible voter. These are\na single-space delimited string of names where the first\nname is the most-preferred candidate for the voter and\nthe last name is the least-preferred candidate. Each voter\nwill cast a ballot with the same number of candidates being\nvoted for. This number, <tt>N</tt>, is the number of votes the\nmost-preferred candidate gets in each ballot. The least-preferred\ncandidate gets one vote. The number of votes decreases\nby one from <tt>N</tt> to <tt>N-1</tt> (second name in a ballot) to\n2 (second to last candidate) and 1.\n\nReturn a list of the candidates with the maximal number of votes. If\nthis is a single candidate, the list will contain one name. If there\nare multiple candidates with the same number of maximal votes\nreturn a list of all the candidates sorted alphabetically by name.',
    constraints:
      "<ul>\n<li><code>ballots</code> will contain between 1 and\n50 strings, inclusive\n</li>\n\nEach string in <code>ballots</code> will be a single-space delimited\nset of names. All strings will consist of lower-case letters only\n</li>\n\n<li>Each string in <code>ballots</code> will contain the same\nnumber of names</li>\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nballots = ["moe curly larry", "moe larry curly", "curly moe larry"]\n\nreturns ["moe"]\n</code>\nmoe gets 3+3+2 = 8 votes, curly gets 2+1+3=6 votes, larry gets 1+2+1=4 votes.\n\n<li class="example-even">\n<code>\nballots = ["chris sam", "sam chris"]\n\nreturns ["chris", "sam\']\n\n</code>\nEach candidate gets 3 votes, return the list of names in alphabetical order.\n\n<li class="example-odd">\n<code>\nballots = ["donald"]\n\nreturns ["donald"]\n\n</code>\nThere is only one candidate who gets any votes.\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and Kristin Stephens-Martinez and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "bordacount",
  },
  {
    filename: "BuyGroceries.py",
    name: "BuyGroceries",
    description: "",
    lang: "python",
    initial:
      "def pickBest(groceries):\n\t'''\n\tGiven the string parameter groceries,\n\twhich contains items and for each\n\titem its cost from a particular store,\n\treturn the total of the cheapest of\n\teach item.\n\t'''\n\t# you write code here",
    problem:
      'You are given a string that contains grocery store items and their cost. You like\nto look around at different stores so some items may appear more than once\nwith possibly a different cost. You want to buy one of each item and you\nwant to pay the smallest amount\npossible for each item, even if you have to purchase the cheapest from\ndifferent stores.\n\n\n\n\n\nWrite function <em>pickBest </em> that has one string parameter named\n<code>groceries</code>, which contains one or more items and their prices.\nAn item is separated by its price with a ":" and multiple items are\nseparated by a comma.\nThis function returns the cheapest total cost (as a decimal number) to purchase one of each item.\n\n For example, suppose that groceries is the following string.\n\n<code>\ngroceries = "peas:3.5,lotion:6.2,peas:3.5,peas:3.1,lotion:6.7"\n</code>\n\n There are two items. The item <em>peas</em> has been found at three stores with the prices:\n3.5, 3.5 and 3.1. The item <em>lotion</em> has been found at two stores\nwith the prices: 6.2 and 6.7. We would buy the cheapest peas at 3.1 and\nthe cheapest lotion at 6.2 for a total cost of 9.3.',
    constraints:
      "<ul>\n<li> <code>groceries </code> is a string of 5 or more characters. It\ncontains several items and their prices. Each item is formed of\nlowercase alphabetic characters, and is followed by a colon, and the\nprice of the item as a decimal number with at least one digit before\nthe decimal and at least one digit after the decimal. An item and its\nprice are separated by other items and their prices by a comma. </li>\n<li> There     are no blanks in <code> groceries</code>   </li>\n<li> <code> groceries</code>  has at least one item, which has exactly\none price with it.\n</li>\n <li> Items may appear more than once in <code> groceries</code>. Each\ntime they appear they have a price with them.\n</li>\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\ngroceries = "peas:3.5,lotion:6.2,peas:3.5,peas:3.1,lotion:6.7"\n\nreturns:  9.3\n\nThe example above.\n</code>\n\n\n<li class="example-even">\n<code>\n\ngroceries = "pretzels:1.5,eggs:4.5,pretzels:2.2,bread:3.0,brownie:2.5,bread:3.3"\n\nreturns: 11.5\n\nThe cheapest prices of the four items are: 1.5, 4.5, 3.0 and 2.5, which sum\nto 11.5.\n\n\n</code>\n\n\n<li class="example-odd">\n<code>\n"peas:9.0"\n\nreturns:  9.0\n\nThere is only one item.\n\n</code>\n\n\n\n<li class="example-even">\n<code>\n"brownie:2.5,brownie:5.4,brownie:4.8,brownie:2.25,brownie:4.5"\n\nreturns: 2.25\n\nThe items are all the same type, the cheapest is 2.25.\n</code>\n\n\n<li class="example-odd">\n<code>\ngroceries = "brownie:2.5,brownie:4.3,bread:4.1,bread:3.3,brownie:1.9,bread:5.6,bread:4.2"\n\nreturns: 5.2\n\nCheapest brownie is 1.9 and cheapest bread is 3.3, so return 1.9 + 3.3 = 5.2\n\n</code>\n\n\n<li class="example-even">\n<code>\n"pretzels:1.5,eggs:4.5,brownie:2.5,bread:3.3"\n\nreturns: 11.8\n\nThere is just one of each item.\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "buygroceries",
  },
  {
    filename: "Calculator.py",
    name: "Calculator",
    description: "",
    lang: "python",
    initial:
      "def toTen(lstOp, lstNum):\n\t'''\n\tlstOp (list of strings) - list of strings representing the\n\toperators +, -, *, /\n\tlstNum (list of ints) - list of integers\n\t\n\tReturn the number of operations it takes to reach 10. If 10 is never\n\treached, return -1. Starting at the beginning of the lists and with the\n\tvalue 0, add ('+'), subtract ('-'), multiply ('*'), or divide ('/') the\n\tcurrent value with the current element in LST_NUM according to the current\n\telement in LST_OP.\n\t'''\n\treturn -1",
    problem:
      "Implement the function toTen that takes two lists: <code>lstOp</code> and <code>lstNum</code>.\n<code>lstOp</code> is a list of math operators as strings: <code>'+'</code> (add), <code>'-'</code> (subtract), <code>'*'</code> (multiply), or <code>'/'</code> (divide).\n<code>lstNum</code> is a list of integers.\nThe ith operator in <code>lstOp</code> should be used with the ith number in <code>lstNum</code>. Starting with the number 0, return the number of operations it takes to reach the value 10. If the code runs out of operators or numbers without reaching 10, return -1.",
    constraints:
      "<ul>\n<li><code>lstOp</code> and <code>lstNum</code>'s lengths are not necessarily the same\n<li><code>lstOp</code> contains only the strings <code>'+'</code>, <code>'-'</code>, <code>'*'</code>, and <code>'/'</code>\n<li><code>lstNum</code> contains only integers\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\nlstOp = ['+']\nlstNum = [10]\n\nReturns 1\n</code>\n\n\n<li class=\"example-even\">\n<code>\nlstOp = ['+', '+']\nlstNum = [5, -5]\n\nReturns -1\n</code>\n# 0 + 5 + -5 = 0, since we've run out operators and numbers and not reached 10, the code returns -1\n\n\n<li class=\"example-odd\">\n<code>\nlstOp = ['-']\nlstNum = [-5, 5]\n\nReturns -1\n</code>\n# 0 - -5 = 5, since we've run out of operators and have not reached 10, the code returns -1\n\n\n<li class=\"example-even\">\n<code>\nlstOp = ['-', '+', '-']\nlstNum = [3, 13, 10]\n\nReturns 2\n</code>\n# 0 - 3 + 13 = 10, since we've reached 10 with only 2 operations, we ignore the rest of the list and return 2\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "calculator",
  },
  {
    filename: "CarrotBoxes.py",
    name: "CarrotBoxes",
    description: "",
    lang: "python",
    initial:
      'def theIndex(carrots,amount):\n\t"""\n\tcarrots is list of integers representing\n\tboxes of carrots, amount is int value.\n\treturn int that is the index/box number\n\tof the box from which the last of\n\tamount carrots are eaten\n\t"""\n\t\n\t# you write code here',
    problem:
      "Rabbit Hanako has N boxes of carrots numbered 0 through N-1. The i-th\nbox contains <code>carrots[i]</code> carrots. (Note that\n<code>carrots</code> is the name of a list that contains information\nabout boxes of the vegetable named <em>carrot</em>.)\n\n\n\nShe decides to eat <code>amount</code> carrots from these boxes. She\nwill eat the carrots one at a time, each time choosing a carrot from the\nbox with the greatest number of carrots. If there are multiple such\nboxes, she will choose the lowest numbered box among them.\n\n\nReturn the number of the box from which she will eat her last carrot.",
    constraints:
      "<ul>\n<li> <code>carrots</code> will contain between 1 and 50 elements, inclusive.\n<li> Each element of <code>carrots</code> will be between 1 and 100, inclusive\n<li> <code>amount</code> will be between 1 and the sum of all\nelements of <codE>carrots</code>, inclusive\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\ncarrots = [5,8]\n\namount = 3\n\nReturns: 1\n</code>\n\nShe will choose three carrots from the box with index 1.\n\n<li class="example-even">\n<code>\ncarrots = [5,8]\n\namount = 4\n\nReturns: 0\n</code>\n\nAfter she chooses three carrots from box 1, both boxes contain 5\ncarrots. She will choose the 4th carrot from the box with\nthe lowest index.\n\n<li class="example-odd">\n<code>\ncarrots = [4,9,5]\n\namount = 18\n\nReturns: 2\n</code>\n\n<li class="example-even">\n<code>\ncarrots = [13, 75, 24, 55]\n\namount = 140\n\nReturns: 0\n</code>\n\n<li class="example-odd">\n<code>\ncarrots = [14,36,52,86,27,97,3,67]\n\namount = 300\n\nReturns: 4\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2010, TopCoder, Inc. All rights reserved.",
    formName: "carrotboxes",
  },
  {
    filename: "CharityDonor.py",
    name: "CharityDonor",
    description: "",
    lang: "python",
    initial:
      'def nameDonor(contributions)\n\t"""\n\tThe parameter contributions is a list of strings,\n\treturn stringthat is name of most\n\tgenerous donor. See description for details.\n\t"""\n\t\n\t# you write code here\n\treturn ""',
    problem:
      'You are given information about donors and their contributions.\nReturn the name of the most generous donor, the donor who has given\nthe most to charity.\n\n\nA donor\nmay give more than once. Determine the name of the\ndonor who has given the largest total amount to charity. If there is more\nthan one donor with the largest amount, return the name that comes first\nin alphabetical order.\n\nFor example, if the donor list is the following you\'ll return "Blue".\n<ol>\n<li> "Sun:70.00"\n<li> "Zebra:80.00"\n<li> "Blue:30.00"\n<li> "Edwards:50.00"\n<li> "Blue:50.00"\n</ol>\n Both "Zebra" and "Blue" gave the most amount, $80.00. Return "Blue"\nas it comes before "Zebra" alphabetically.\n\n\nA donation is represented as a string with the name of the donor first\nfollowed by ":" as the separator, followed by the dollar amount\ngiven. The\ndollar amount will represent a valid float.\n Given a list of donations (a list of strings), return the\nname of the donor with the largest donation. If there is more than one\ndonor with the maximal amount, return the name of the donor\nthat comes first alphabetically.',
    constraints:
      "<ul>\n<li> <code>contributions</code> is a nonempty list of strings.\n\n<li> Each character of the strings in <code>contributions</code> will be a lowercase\nletter 'a'-'z', upper case 'A'-'Z', digits '0'-'9', '.' or a ':'.\n\n<li> The format of each string in <code>contributions</code>\nis  \"name:amount\" where amount is a valid flaot. That is, there will be exactly one  ':' in each string\nof <code>contributions</code>. To the right of the \":\", the\nremaining\ncharacters in the string will be in the format of a valid float.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n["Zack:800.00", "Gregory:900.00"]\n\nReturns "Gregory"\n</code>\n\n<li class="example-even">\n<code>\n["Zack:800.00", "Gregory:800.00"]\n\nReturns: "Gregory"\n</code>\n\n<li class="example-odd">\n<code>\n["Sun:70.00", "Zebra:80.00", "Blue:80.00", "Edwards:50.00"]\n\n\nReturns: "Blue"\n</code>\n\n<li class="example-even">\n<code>\n["Sun:70.00", "Blue:60.00", "Zebra:80.00", "Edwards:50.00"]\n\n\nReturns "Zebra"\n</code>\n\n<li class="example-odd">\n<code>\n["Zack:800.00"]\n\n\nReturns: "Zack"\n</code>\n\n<li class="example-even">\n<code>\n["French:30.00","Zack:10.00", "Tie:20.00", "Zack:10.00", "Mack:20.00",\n"Zack:10.00", "Green:10.00", "Zack:10.00", "Mack:10.00"]\n\nReturns "Zack"\n</code>\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy;  Susan Rodger\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "donor",
  },
  {
    filename: "CodeBreaker.py",
    name: "CodeBreaker",
    description: "",
    lang: "python",
    initial:
      "def compute(phrase, one, two, sep):\n\t'''\n\tGiven the four string parameters\n\tphrase, one, two and sep,\n\treturn a string of the decoded\n\tmessage.\n\t'''\n\t\n\t# you write code here",
    problem:
      'Given a phrase, and three additional letters, your task is to use those\nletters to help you in decoding the phrase, and return the decoded\nmessage. To decode a message, look at each word. 1) If the word starts with\n<code> one</code> then the last letter of the word is part of the message.\n2) If the word contains  <code>two</code> as part of it, then the <strong>third\nletter</strong> of the word is part of the message, if the third letter\nexists. 3) If\nthe word starts or ends with <code>sep</code>, then a dash, \'-\', is part\nof the message.\nIf more than one of 1), 2) or 3) match, use the first such one that matches.\nPut\ntogether those letters that are part of the message in the same order they\nare found in the phrase.\n\n\n\nWrite function <em>compute </em> that has four string parameters <code>phrase</code>,\n<code>one</code>, <code>two</code> and <code>sep</code>.\nThis function returns a string of the decoded message.\n\n\nFor example, assume the phrase is "benny northo mary now beach nary",\none is "n", two\nis "e" and sep is "y".  Then the decoded message adds a letter for each\nword that starts with "n" or "e" and adds a "-" for each word that contains\n"y", based on the first criteria matched. Words that don\'t match any of these criteria are ignored.\n\n<table border=1>\n<tr><th> Word </th> <th> Criteria matched</th> <th> Letter for message</th></tr>\n<tr><td> "benny"</td><td> 2) has "e" in it </td><td>"n" (third letter)</td></tr>\n<tr><td> "northo"</td><td> 1) starts with "n" </td><td>"o" (last letter) </td></tr>\n<tr><td> "mary"</td><td> 3) ends with "y" </td><td>"-" </td></tr>\n<tr><td> "now"</td><td> 1) starts with "n" </td><td>"w" (last letter)</td></tr>\n<tr><td> "beach"</td><td> 2) has "e" in it </td><td>"a" (third letter)</td></tr>\n<tr><td> "nary"</td><td> 1) starts with "n" </td><td>"y" (last\nletter)</td></tr>\n</table>\n\nThis results in this function returning the word "no-way".',
    constraints:
      "<ul>\n<li> phrase is of length 1 or more characters  </li>\n<li> phrase is <strong>only lowercase </strong>alphabetic characters or\nblanks. It starts and ends with an alphabetic character, and if there\nare blanks, there cannot be two adjacent blanks.    </li>\n<li> one, two and sep are each a single lowercase alphabetic character and they\nare all different characters.   </li>\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nphrase =  "benny northo mary now beach nary"\none = "n"\ntwo = "e"\nsep = "y"\n\n\nreturns: "no-way"\n\n(example above)\n</code>\n\n\n<li class="example-even">\n<code>\nphrase =  "tohs mre mill trljk myro"\none = "m"\ntwo = "t"\nsep = "v"\n\n\nreturns: "hello"\n\n"h" from "tohs", "e" from "mre, "l" from "mill", "l" from "trljk" and "o"\nfrom "myro"\n</code>\n\n\n<li class="example-odd">\n<code>\nphrase =  "floss teeth every day forever"\none = "f"\ntwo = "b"\nsep = "h"\n\n\nreturns: "s-r"\n\n"s" from "floss", "-" from "teeth", nothing from "every" or "day", "r" from "forever"\n</code>\n\n\n\n<li class="example-even">\n<code>\n\n\nphrase =  "word"\none = "w"\ntwo = "d"\nsep = "r"\n\n\nreturns: "d"\n\n\n</code>\n\n\n<li class="example-odd">\n<code>\nphrase =  "this is a long story left"\none = "l"\ntwo = "i"\nsep = "s"\n\n\nreturns: "i-g-t"\n\n"i" from "this", "-" from "is", nothing from  "a", "g" from "long", "-"\nfrom "story", and "t" from "left"\n\n</code>\n\n\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "codebreaker",
  },
  {
    filename: "Common.py",
    name: "Common",
    description: "",
    lang: "python",
    initial:
      'def count(a,b):\n\t"""\n\treturn the integer number of characters in common\n\tto Strings a and b as described below\n\t"""\n\t\n\t#you write code here',
    problem:
      "Two strings have a letter in common if it appears in both strings.  The\nposition of letter is not important for it to be counted as common.\nOnce a particular letter is counted as <EM>in common</EM>, it cannot be\ncounted again.  For example, an <EM>o</EM> appearing twice in one word\nbut only once in the other counts only as one letter in common. However,\nan <EM>o</EM> appearing twice in both words counts as two letters in common.\n\n\nWrite a function that takes two strings and returns the number of\nletters they have in common.\n\n\nHint: you will need some way to avoid counting a letter more than once\nif it is in common to both words, creating a list from the characters in\na String may help since lists are mutable and strings are not.",
    constraints:
      "<ul>\n<li>Strings a and b are the same length\n<li>Each string only contains characters in the range 'a'-'z'\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n"horse"\n\n"mirth"\n</code>\n\nReturns:  2\n\nh and r in common.\n<li class="example-even">\n<code>\n"horse"\n\n"short"\n</code>\nReturns:  4\n\nh,o,r, and s in common\n\n\n<li class="example-odd">\n<code>\n"horse"\n\n"seems"\n</code>\nReturns: 2\n\n<li class="example-even">\n<code>\n"horse"\n\n"moose"\n</code>\nReturns: 3\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "common",
  },
  {
    filename: "Cone.py",
    name: "Cone",
    description: "",
    lang: "python",
    initial:
      'def volume(radius,height):\n\t"""\n\treturn volume of a cone in cubic inches\n\tgiven float parameters radius and height in inches\n\t"""\n\t\n\t# you write code here',
    problem:
      "You're helping a group of Geometry students\nby creating a function that returns\nthe volume of a cone given the radius of the\ncone's base and the height of the cone.\nThe formula for a cone's volume is\n\n1/3 * pi * r<sup>2</sup> * h\n\nwhere r is the radius of the base, h is the height of the\ncone, pi is 3.1415926 and 1/3 is 0.33333...",
    constraints:
      "<ul>\n<li> radius is a value greater than 0  </li>\n<li> height is a value greater than 0 </li>\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nradius = 1\nheight = 1\n\nreturns: 1.04719733333\n</code>\npi/3 is about 1.047197\n\n<li class="example-even">\n<code>\nradius = 10\nheight = 10\n\nreturns: 1047.19733333\n</code>\n\n\n<li class="example-odd">\n<code>\nradius = 2\nheight = 3\n\nreturns: 12.566368\n</code>\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "cone",
  },
  {
    filename: "Consensus.py",
    name: "Consensus",
    description: "",
    lang: "python",
    initial:
      "def majorityWinner(voteA, voteB, voteC):\n\t'''\n\tvoteA (int) - Number of votes received by candidate A\n\tvoteB (int) - Number of votes received by candidate B\n\tvoteC (int) - Number of votes received by candidate C\n\t\n\tReturns a string representing which candidate won the majority vote, based\n\ton the three parameters. If there is no majority winner, return \"No one\".\n\t'''\n\treturn ''",
    problem:
      'Winning the majority vote means receiving strictly more than half of the votes. Write a function that determines who won the majority vote among three candidates A, B, or C. If no one won the majority vote, return the string "No one" (note: A, B, C, and N are capitalized).',
    constraints: "<ul>\n<li>Every candidate gets at least one vote.\n</ul>",
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\nvoteA = 6\nvoteB = 3\nvoteC = 1\n\nReturns "A"\n</code>\n\n\n<li class="example-even">\n<code>\nvoteA = 5\nvoteB = 4\nvoteC = 1\n\nReturns "No one"\n# There are a total of 10 votes so a candidate must win 6 or more votes to get a majority\n</code>\n\n\n<li class="example-odd">\n<code>\nvoteA = 1\nvoteB = 1\nvoteC = 1\n\nReturns "No one"\n</code>\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "consensus",
  },
  {
    filename: "CookieCount.py",
    name: "CookieCount",
    description: "",
    lang: "python",
    initial:
      "def countOrders(orders):\n\t'''\n\tThe list parameter orders contains a string in the format\n\t\"name:order:quant:name:order:quant:name:order:quant:name:order:quant\", where:\n\t\n\tname-first name of a person.\n\t\n\torder-the type of cookie ordered.\n\t\n\tquant-the number of boxes requested.\n\t\n\tThe function should return an integer that represents the maximum number of\n\tboxes ordered of any type of cookie.\n\t'''\n\t# you write code here",
    problem:
      'It\'s that time of year, where everyone is ordering Girl Scout Cookies. However, the system can only\nprocess four orders at a time, in the format\n<br><br>\n<i>"name:order:quant:name:order:quant:name:order:quant:name:order:quant"</i>.\n<br>\n\n\nIf anyone is interested in buying more than one type of cookie (e.g., Thin Mints and Samoas), then\nthey must submit a separate order for each type of cookie. Thus, each string may contain the same person\nwith multiple orders.\n</p>\n\nGiven a string representing four orders, we want to determine what is the largest quantity ordered in the submission.\nCreate the function named <code>countOrders</code> that has\none parameter named orders, which is a string in the format <i>name:order:quant</i>.\n</p>\n\nThis function returns the largest order quantity, based on the input.</p>',
    constraints:
      "<ul>\n<li>Each name in a name:order:quant sequence is only one name. However, the same name may be included multiple times in the string.\n<li>Each order in a name:order:quant sequence will contain the name of one type of cookie.\n<li>Each quantity in a name:order:quant sequence must be at least 1 and no more than 50\n<li>Each string includes four orders.\n</ul>",
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\norders="Kim:Thin Mints:2:Erica:Do-si-dos:4:Kim:Thin Mints:6:Karen:Samoas:2"\n\nReturns: 8\n</code>\n# The largest quantity of cookies sold is Thin Mints, as Kim placed two orders of 2 and 6 boxes.\n\n\n<li class="example-even">\n<code>\norders="Teri:Samoas:2:Erica:Samoas:2:Luke:Samoas:2:Karen:Samoas:2"\n\nReturns: 8\n</code>\n# Everyone in this batch ordered 2 boxes of Samoas, totaling 8 boxes for Samoas.\n\n\n<li class="example-odd">\n<code>\norders="Kim:Tagalongs:4:Erica:Do-si-dos:1:Kim:Tagalongs:3:Karen:Tagalongs:2"\n\nReturns: 9\n</code>\n# A total of 9 boxes of Tagalongs were ordered.\n\n\n<li class="example-even">\n<code>\norders="Kim:Thin Mints:10:Kim:Lemonades:4:Kim:Lemonades:10:Kim:Samoas:14"\n\nReturns: 14\n</code>\n# A total of 14 Samoas were ordered.\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; A. Nicki Washington and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "cookiecount",
  },
  {
    filename: "CreateAcronym.py",
    name: "CreateAcronym",
    description: "",
    lang: "python",
    initial:
      'def acronym(phrase):\n\t"""\n\tphrase is a string, zero or more spaces\n\treturn a string: acronym of the string\n\tparameter phrase\n\t"""\n\t\n\t# you write code here',
    problem:
      "Some words are <em>acronyms</em>, e.g., scuba is an acronym for\n<em>self contained underwater breathing apparatus</em>. In this\nproblem you'll determine the acronym for a string. The string\nis a space-separated sequence of words. You'll form the acronym\nby taking the first character of each word in the string and\nconcatenating them to form the acronym. See the examples below for\ndetails.\n\nThe returned acronym has\nno spaces in it. The acronym for \"International Business Machines\" is 'IBM'.\n\n\n\nWrite the method <code>acronym</code> that\nreturns a string that is an acronym of its string parameter\n<code>phrase</code>.",
    constraints:
      "<ul>\n<LI> The length of parameter <code>phrase</code> is greater than zero.\n<li> Each word in <code>phrase</code> is separated by one space from\nother words.\n\n</ul>",
    examples:
      "<ol>\n<LI class=\"example-odd\">\n<code>\nphrase = 'Self Contained Underwater Breathing Apparatus'\n\nReturns: 'SCUBA'\n\n</code>\n\n\n\n<LI class=\"example-even\">\n<code>\nphrase =  'Port Out Starboard Home'\n\nReturns: 'POSH'\n\n</code>\n\n\n<LI class=\"example-odd\">\n\n<code>\nphrase = 'Johnnys Fried Chicken on 7th Avenue is the best!'\n\nReturns: 'JFCo7Aitb'\n\n</code>\n\n\n\n\n<LI class=\"example-even\">\n<code>\n'A B C'\n\n\nReturns: 'ABC'\n</code>\n\n\n</ol>",
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "acronym",
  },
  {
    filename: "DNAcgratio.py",
    name: "DNAcgratio",
    description: "",
    lang: "python",
    initial:
      'def ratio(dna):\n\t"""\n\treturn float that\'s the cg ratio of the\n\tnucleotides in the string parameter dna\n\t"""\n\t\n\t# write code here',
    problem:
      "protein have a relatively high ratio of CG content.  Given a strand of\nDNA determine the percentage of cytosine and guanine nucleotides present\nin the genome.  Your method should return the percentage (between 0.0\nand 1.0) of 'c' (cytosine) and 'g' (guanine) in the genome. For example,\nif half of the nucleotides are either 'c' or 'g' your method should\nreturn 0.5 --- see the examples for more detail.\n\n\nThe DNA strand will contain only cytosine, guanine, thymine, and\nadenine, represented by the characters 'c', 'g', 't', and 'a',\nrespectively.",
    constraints:
      "<ul>\n<LI> The String <code>dna</code> contains only the\ncharacters 'a', 'g', 't', 'c' (lowercase).\n\n<LI> The String <code>dna</code> is between 0 and 1000 characters long\n(inclusive).\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n\n"agatc"\n\nReturns:0.40\n\n</code>\nThere is one guanine and one cytosine for two out of five or 40% (which\nis 0.4)\n\n<li class="example-even">\n<code>\n\n"catatggatatc"\n\nReturns: 0.3333333\n\n</code>\nDon\'t worry about round off problems, if your answer\nis close---within 10<sup>-6</sup>---it will be correct.\n\n<li class="example-odd">\n<code>\n"aattaattttaat"\n\nReturns: 0.0\n\n</code>\n\n<li class="example-even">\n<code>\n\n"cgggggcccgggcgcgcccgggggg"\n\nReturns: 1.0\n\n</code>\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "cgratio",
  },
  {
    filename: "DataLinkingCount.py",
    name: "DataLinkingCount",
    description: "",
    lang: "python",
    initial:
      "def mergeCheck(data1, data2, dataLinking):\n\t'''\n\tdata1 (list of strs): list of two pieces of data A and B separated by a\n\tcolon ':' (ex: 'a1:b1')\n\tdata2 (list of strs): list of two pieces of data C and D separated by a\n\tcolon ':' (ex. 'c1:d1')\n\tdataLinking (list of strs): list of two pieces of data B and C separated\n\tby a colon ':' (ex: 'b1:c1')\n\t\n\tReturn a list of three ints as follows:\n\tIndex 0: The number of elements in data1 that do not have a corresponding\n\tvalue in dataLinking\n\tIndex 1: The number of elements that can be linked across all three data sets\n\tIndex 2: The number of elements in data2 that do not have a corresponding\n\tvalue in dataLinking\n\t'''\n\treturn [0,0,0]",
    problem:
      "A common task when analyzing data is linking multiple data sets together. Sometimes the only way to connect two data sets together is by using a third data set that has information shared with each of the other two data sets.\n</p>\n\nImplement the function mergeCheck that is checking how much data can be linked. It takes three lists: data1, data2, and dataLinking. data1's elements have two pieces of information (A,B) represented in a string and separated by a colon (ex: 'a1:b1'). data2's elements have two pieces of information (C,D), also represented in a string and separated by a colon (ex: 'c1:d1'). dataLinking's elements have two pieces of information (B,C) represented in a string and separated by a colon (ex: 'b1:c1').\n</p>\n\nIf dataLinking has an element where its B value matches a B in data1 and its C value matches a C in data2, we can link all the information together to get something with (A, B, C, D). However, we are also interested in how many elements in data1 do not have a corresponding B value in dataLinking and the same for data2 (the number of elements in data2 that have no corresponding C value in dataLinking).\n</p>\n\nmergeCheck returns a list of three ints (like a \"Venn diagram\") of: (0) how many data1's B values are not in dataLinking, (1) how many elements can be linked across all three lists (a.k.a. there is an element in dataLinking that has a matching B value in data1 and C value in data2), and (2) how many data2's C values are not in dataLinking.\n</p>\n\nAssume that all the information within each column (A, B, C, and D) is unique for all the data sets (ex: data1 has no two elements with the same B value). Note, there is also the potential that there is a value for B in dataLinking that correspondings to data1, but there is no matching value for C in data2 for that B value and vice versa (ex: data1 = ['a1:b1', ...], dataLinking = ['b1:c1', ...], data2 has no element with 'c1' in it). Such cases should not be counted in your output.\n</p>",
    constraints: "<ul>\n<li>All lists have at least one element.\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\ndata1 = ['a1:b1']\ndata2 = ['c1:d1']\ndataLinking = ['b1:c1']\n\nReturns [0, 1, 0]\n# Each list only has one element and they are linked perfectly together to create the single element (a1,b1,c1,d1)\n</code>\n\n\n<li class=\"example-even\">\n<code>\ndata1 = ['a1:b1', 'a2:b2']\ndata2 = ['c1:d1', 'c2:d2']\ndataLinking = ['b1:c1', 'b999:c999']\n\nReturns [1, 1, 1]\n# This has one fully linked element (a1,b1,c1,d1). Note the the element (a2,b2,c2,d2) is not possible because there is no linking\n# information in dataLinking of 'b2:c2'. In fact, dataLinking even has a spurious linking element that can't be used with data1 nor data2. This\n# results in data1's 'a2:b2' counting as an unused element in data1 and data2's 'c2:d2' being counted as an unused element in data2. Hence the\n# result [1,1,1]\n</code>\n\n\n<li class=\"example-odd\">\n<code>\ndata1 = ['a1:b1', 'a2:b2']\ndata2 = ['c1:d1', 'c2:d2']\ndataLinking = ['b1:c1', 'b2:c999']\n\nReturns [0, 1, 1]\n# The first element in the output is 0 because all of data1's B values are in dataLinking. data1's first element is fully linked and 'a2:b2'\n# has a linking element in dataLinking 'b2:c999', but since there is no c999 in data2, this element is not counted in the output at all. The\n# second element is 1 because there is one fully linked element (a1,b1,c1,d1). The third element is 1 because data2's element 'c2:d2'\n# does not have an element in dataLinking with the value c2 after the colon.\n</code>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "datalinkingcount",
  },
  {
    filename: "Decade.py",
    name: "Decade",
    description: "",
    lang: "python",
    initial:
      "def nickname(year):\n\t'''\n\tyear (int) - A year between 1950 and 2019 inclusively\n\t\n\tReturn a string with the nickname of the year in the parameter.\n\t'''\n\treturn ''",
    problem:
      'Write a function nickname that returns a string representing the nickname for the decade in the parameter year. You may assume that year will only be between 1950 and 2019 inclusively. Below is a mapping from each year to its nickname.\n\n\n\n<table cellspacing="0" border="1px solid" cellpadding="5">\n<tr>\n<th>Decade\n<th>Nickname\n</tr>\n<tr>\n<td>1950-1959\n<td>50s\n</tr>\n<tr>\n<td>1960-1969\n<td>60s\n</tr>\n<tr>\n<td>1970-1979\n<td>70s\n</tr>\n<tr>\n<td>1980-1989\n<td>80s\n</tr>\n<tr>\n<td>1990-1999\n<td>90s\n</tr>\n<tr>\n<td>2000-2009\n<td>aughts\n</tr>\n<tr>\n<td>2010-2019\n<td>twenty-tens\n</tr>\n</table>',
    constraints:
      "<ul>\n<li>The int in year is between 1950 and 2019 inclusively.\n</ul>",
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\nyear = 2019\n\nReturns "twenty-tens"\n</code>\n\n\n<li class="example-even">\n<code>\nyear = 2003\n\nReturns "aughts"\n</code>\n\n\n<li class="example-odd">\n<code>\nyear = 1985\n\nReturns "80s"\n</code>\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "decade",
  },
  {
    filename: "EatDrink.py",
    name: "EatDrink",
    description: "",
    lang: "python",
    initial:
      'def winners(data):\n\t"""\n\treturn String list based on String list data\n\t"""\n\t\n\t# you write code here',
    problem:
      'Sometimes contests are based on speed, endurance, quality, or quantity\nand various combinations of these traits. It might be who can\neat the most doughnuts, or who can quaff the most cans of a\nbeverage, or who can solve the most APTs, or who can run the\nmost consecutive sub 75-second 400 meter laps.\n\nIn this problem you\'ll be given data for a contest in which each\ncontestant has performed some task in some number of\nminutes and seconds. The data will be given for all the tasks in the\nformat <tt>"name time"</tt> where name is separated from time\nby one space. The time is in the format <tt>"min:sec"</tt> and\nrepresents how long it took someone to complete\nthe task. The input <code>data</code> is\na list of tasks done in the contest,\neach string in <data>data</code>\nrepresents one task.\n\nReturn a list of contestant names in rank order from winner to\nloser. The winningest contestant has performed the most tasks, or\nif there is a tie with another contestant in number of tasks,\nhas performed the tasks most quickly.  No contestant will have\nperformed the same number of tasks in the same time as any\nother contestant. See the examples for details.',
    constraints:
      "<ul>\n<li> <code>data</code> contains between 1 and 50 (inclusive) Strings\n<li> Each element of <code>data</code> is in the proper format. Time\ndata will have at most two digits for minutes and for seconds,\n(each) and these will each be values between 0 and 59,\ninclusive.\n<LI> No task takes more than one hour to complete.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\ndata = ["owen 2:00", "jeff 1:29", "owen 1:00", "jeff 1:30", "robert 0:21"]\n\nReturns ["jeff", "owen", "robert"]\n\n</code>\njeff and owen have each performed two tasks compared to robert\'s one\ntask. owen\'s total time is 3 minutes, jeff\'s is 2 minutes and\n59 seconds, so jeff is the winner of the contest.\n\n<li class="example-even">\n<code>\ndata = ["tyson 0:11", "usain 0:12", "carl 0:30", "carl 0:20", "usain 0:40", "carl 1:00"]\n\nReturns ["carl", "usain", "tyson"]\n\n</code>\ncarl performed three tasks,  usain two tasks, and tyson one task.\n\n<li class="example-odd">\n<code>\ndata = ["tyson 0:11", "usain 0:12", "carl 0:30", "carl 0:20", "usain 0:40", "carl 1:00" "usain 0:57"]\n\nReturns ["usain", "carl", "tyson"]\n\n</code>\nLike the previous example, but usain has peformed\none more task--his three tasks completed in in\n57+12+40 seconds or 1:49, while carl\'s three tasks\nwere completed in 1:50.\n\n<li class="example-even">\n<code>\ndata = ["kate 4:16", "kate 4:17"]\n\nreturns ["kate"]\n</code>\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "eatdrinkcontest",
  },
  {
    filename: "EatingGood.py",
    name: "EatingGood",
    description: "",
    lang: "python",
    initial:
      'def howMany(meals, restaurant):\n\t"""\n\tParameter meals a list of strings with each in the format\n\t"name:place-ate". Parameter restaurant is a string\n\treturn # unique name values where place-ate == restaurant\n\t"""\n\t\n\t# you write code here\n\treturn 0',
    problem:
      'We want to know how many different people have eaten at a restaurant\nthis past week. The parameter <code>meals</code> has strings\nin the format <code>"name:restaurant"</code> for a period of\ntime. Sometimes a person eats at the same restaurant often.\n\nReturn the number of different people who have eaten at\nthe eating establishment specified by parameter <code>restaurant</code>.\n\nFor example, <code>"John Doe:Moes"</code> shows that John Doe ate one meal at Moes.\n\n\nWrite function <code>howMany</code> that given <code>meals</code>, a\nlist of strings in the format above indicating where each person ate a\nmeal, and <code> restaurant</code>, the name of a restaurant, returns\nthe number of people that ate at least one meal at that restaurant.',
    constraints:
      '<ul>\n<li> <code>meals</code> is a list with 0 or more strings. Each string is\nin the format above, so each string has length at least 3 and\ncontains a colon. The string before the ":" and the string after it\nare at least one character long.\n</li>\n\n <li>\n<code>len(restaurant) &gt;=1 </code>\n</li>\n\n</ul>',
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nmeals = ["Sue:Elmos", "Sue:Elmos", "Sue:Elmos"]\n\nrestaurant = "Elmos"\n\nreturns 1\n\nSue ate at the restaurant three times, so only one unique person ate at the\nrestaurant Elmos.\n</code>\n\n<li class="example-even">\n<code>\nmeals = ["Sue:Elmos", "Joe:Mad Hatter", "Sue:Mad Hatter", "Kristin:Sitar"]\n\nrestaurant = "Mad Hatter"\n\nreturns 2\n\nJoe and Sue ate at the Mad Hatter.\n</code>\n\n<li class="example-odd">\n<code>\nmeals = ["Sue:Elmos", "Joe:Mad Hatter", "Sue:Mad Hatter", "Bill:Elmos",\n"Owen:Elmos", "Joe:Mad Hatter", "Sue:Mad Hatter", "Nora:Elmos",\n"Nora:Sitar", "Joe:Elmos","Mary:Sitar"]\n\nrestaurant = "Mad Hatter"\n\nreturns 2\n\nOnly Joe and Sue ate at the Mad Hatter\n\n</code>\n\n<li class="example-even">\n<code>\nmeals = ["Sue:Elmos", "Joe:Mad Hatter", "Sue:Mad Hatter", "Bill:Elmos", "Kristin:Sitar",\n"Owen:Elmos", "Joe:Mad Hatter", "Sue:Mad Hatter", "Nora:Elmos",\n"Nora:Sitar", "Joe:Elmos", "Mary:Sitar", "Joe:Elmos", "Mary:Sitar", "Kristin:Sitar"]\n\nrestaurant = "Elmos"\n\nreturns 5\n\nFive different people ate at least once at Elmos.\n</code>\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "eatinggood",
  },
  {
    filename: "Emphasize.py",
    name: "Emphasize",
    description: "",
    lang: "python",
    initial:
      'def repeat(word, number):\n\t"""\n\treturn the word with the first part of it repeated\n\tif it is a valid part to repeat. The part to be\n\trepeated must be repeated "number" times.\n\tIf the first letter is not a vowel, and the third\n\tletter is a vowel, then the part to repeat is the\n\tfirst three letters.\n\tIf the first and third letters are not vowels, but\n\tthe second letter is, then the part to repeat is\n\tthe first two letters.\n\tOtherwise there is nothing to repeat.\n\tOnly the first letter of the returned word may be\n\ta capital letter, if the original word started with\n\ta capital letter.\n\t"""\n\t\n\t# you write code here',
    problem:
      'Given a word and a number we want to emphasize the first part of the word\nby repeating the first part "number" times. But there are a few rules about\nwhat you can repeat. Your code should follow these rules.\n\n\n<ul>\n<li> If the first letter starts with a vowel, there is <em>no change</em> to the word.\n</li>\n<li> If none of the first three letters is a vowel, then\nthere is <em>no change</em> to the word.\n</li>\n<li> If the third letter is a vowel, then the first three letters are\nrepeated <tt>number</tt> times.\n</li>\n<li> If the third letter is not a vowel, but the second letter is a vowel,\nthe the first two letters are repeated <tt>number</tt> times.\n</li>\n<li> Only the first letter of the returned word may be a capital letter,\nand then only if the original word started with a capital letter.\n</li>\n\n</ul>\n\nWrite function <code>repeat</code> that given a word and a number returns\nthe word with the first part repeated <tt>number</tt> times\nif the first part is valid (there is a vowel, but the first letter\nis not a vowel, see rules).',
    constraints:
      "<ul>\n<li> <code>word</code> is formed of alphabetic letters and only the\nfirst letter will be a capital letter.\n</li>\n\n <li> There is at least one letter in\n<code>word</code>. Be sure to consider how to handle words that are of\nlength one or two.\n</li>\n\n<li> <code>number </code> is greater than 1\n</li>\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nword = "Chocolate"\n\nnumber = 3\n\nreturns "Chochochocolate"\n</code>\nsince the third letter is a vowel so "cho" is\nrepeated\nthree times\n\n<li class="example-even">\n<code>\nword = "banana"\n\nnumber = 4\n\nreturns "babababanana"\n</code>\nThe second letter is a vowel, so "ba" is repeated four times.\n\n<li class="example-odd">\n<code>\nword = "apple"\n\nnumber = 2\n\nreturns "apple"\n</code>\nStarts with a vowel, so no change.\n\n<li class="example-even">\n<code>\nword = "Foofy"\n\nnumber = 4\n\nreturns "Foofoofoofoofy"\n\n</code>\n\n<li class="example-odd">\n<code>\nword = "stripe"\n\nnumber = 3\n\nreturns "stripe"\n</code>\n\nNeither the second or third letter are a vowel, so no change.\n\n<li class="example-even">\n<code>\nword = "Abercrombie"\n\nnumber = 6\n\nreturns "Abercrombie"\n</code>\n\nStarts with a vowel, so no change.\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "emphasize",
  },
  {
    filename: "ExpenseTracker.py",
    name: "ExpenseTracker",
    description: "",
    lang: "python",
    initial:
      "def expenses(spending, limit):\n\t'''\n\tThis function accepts two parameters:\n\tspending-list parameter of 12 integers that represent\n\tthe total expenses for each month of the year.\n\t\n\tlimit-the maximum amount that can be spent for the year.\n\t\n\tThe function should return a string representing the first\n\tmonth where the total expenses incurred for the year up to\n\tthat month exceed the yearly limit.\n\t'''\n\t# you write code here",
    problem:
      "You are always over your yearly budget at the end of the year.In an\neffort to become more fiscally responsible, you've decided to\ntrack your total amount spent, by month. You also want to understand\nhow much you've spent in total at any point in the year.\n\nGiven a list of your spending by month and a yearly limit, create\nthe function named <code>expenses</code> that has two parameters named\nspending (a list of spending, by month)) and limit(the total amount that\ncan be spent for the year).\n</p>\n\nThis function returns a string that represents the first month where\nthe total amount spent for the year (up through that month) exceeds\nthe yearly limit.</p>",
    constraints:
      '<ul>\n<li>The list named spending should only contain 12 integers.\n<li>Each item in the list named spending should range between 0 and 700.\n<li>The minimum amount that your yearly spending can total is 10.\n<li>The limit must be an integer that is less than the total amount spent\nover the entire year.\n<li>The string returned as the month should have the full month name (no abbreviations\nallowed).\n<li>The string returned as the month should only have the first letter of the\nmonth capitalized (e.g., "January", "February", "March", etc.)\n\n\n\n</ul>',
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\nspending=[10,33,500,0,5,100,210,55,90,100,150,111]\nlimit=600\n\nReturns: "June"\n</code>\n# The first month that the yearly limit (600) is exceeded is in June, when 100 is\nspent for the month, making the total spent through June 648.\n\n\n<li class="example-even">\n<code>\nspending=[0,256,321,100,500,0,350,222,90,0,0,0]\nlimit=1000\n\nReturns: "May"\n</code>\n# The total spent through May is 1177, which exceeds the 1000 yearly limit.\n\n\n<li class="example-odd">\n<code>\nspending=[0,0,0,0,200,0,0,0,0,0,0,0]\nlimit=150\n\nReturns: "May"\n</code>\n\n\n\n<li class="example-even">\n<code>\nspending=[100,100,100,100,100,100,100,100,100,100,100,100]\nlimit=600\n\nReturns: "July"\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; A. Nicki Washington and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "expensetracker",
  },
  {
    filename: "Family.py",
    name: "Family",
    description: "",
    lang: "python",
    initial:
      "def grandchildren(parents, children, person):\n\t'''\n\tparents (list of strings) - list of parent names corresponding to the\n\tchildren list\n\tchildren (list of strings) - list of child names corresponding to the\n\tparents list\n\tperson (string) - a person listed in parents\n\t\n\tReturn the number of grandchildren for the person in the person variable\n\t'''\n\treturn 0",
    problem:
      "You have two lists: <code>parents</code> and <code>children</code>.\nThe ith element in <code>parents</code> is the parent of the ith element in <code>children</code>.\nCount the number of grandchildren (the children of a person's children) for the person in the <code>person</code> variable.\n\nHint: Consider making a helper function that returns a list of a person's children.",
    constraints:
      "<ul>\n<li>There is no incest (two siblings having a child together).\n<li>No one has the same name as another person.\n<li>The person in the person variable is in the parents list.\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\nparents = ['Sanjay', 'Ellie']\nchildren = ['Ellie', 'Nicolas']\nperson =  'Sanjay'\n\nReturns 1\n</code>\n# Sanjay has one child, Ellie. Ellie has one child, Nicolas. Therefore, Sanjay has one grandchild, Nicolas.\n\n\n<li class=\"example-even\">\n<code>\nparents = ['Austin', 'Sanjay', 'Jiayi']\nchildren = ['Emily', 'Emily', 'Sanjay']\nperson =  'Jiayi'\n\nReturns 1\n</code>\n# Jiayi has one child Sanjay. Austin and Sanjay (we do not judge people for the cultural gender of their name) have one child, Emily. Therefore, Jiayi has one grandchild, Emily.\n\n\n<li class=\"example-odd\">\n<code>\nparents = ['Nathan']\nchildren = ['Jachin']\nperson =  'Nathan'\n\nReturns 0\n</code>\n# This just has a single relationship of Nathan is the parent of Jachin. Therefore, there are no grandchildren.\n\n\n<li class=\"example-even\">\n<code>\nparents = ['Isabella', 'Michael', 'Jacob', 'Isabella']\nchildren = ['Ashabur', 'Ashabur', 'Isabella', 'Lydia']\nperson =  'Jacob'\n\nReturns 2\n</code>\n# Jacob has one child, Isabella. Isabella has two children, Ashabur (who’s other parent is Michael) and Lydia (who has no other parent, this is not a complete family tree). Therefore, Jacob has two grandchildren.\n\n\n<li class=\"example-odd\">\n<code>\nparents = ['Junhua', 'Anshul', 'Junhua', 'Anshul', 'Kerry']\nchildren = ['Anshul', 'Jordan', 'Kerry', 'Paul', 'Kai']\nperson =  'Junhua'\n\nReturns 3\n</code>\n# Junhua has two children, Anshula and Kerry. Anshul has two children (Jordan and Paul), while Kerry has one child (Kai). So Junhua has three grandchildren\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "family",
  },
  {
    filename: "FriendScore.py",
    name: "FriendScore",
    description: "",
    lang: "python",
    initial:
      'def highestScore(friends):\n\t"""\n\treturn int based on popularity of\n\tdata in string list friends\n\t"""\n\t\n\t# you write code here',
    problem:
      "You want to determine the most popular person in a social network. To do\nthis, you will count the number of \"2-friends\" that each person\nhas. Person A is called a 2-friend of another person B if they are\nfriends with each other or if there exists some person C who is a friend\nof both A and B. The most popular person is the person with the highest\nnumber of 2-friends. (There might be more than one if multiple people\nall have the maximal number of 2-friends.)\n\nYou are given a list of Strings, <code>friends</code>, where the j-th character\nof the i-th element is 'Y' if person i and person j are friends, and 'N'\notherwise. Return the number of 2-friends of the most popular person in\nthis social network.",
    constraints:
      "<ul>\n<LI> <code>friends</code> will contain between 1 and 50 elements, inclusive.\n\n<LI> Each element of <code>friends</code>\nwill contain exactly N characters 'Y' or\n'N', where N is the number of elements in <code>friends</code>.\n\n\n<LI>    For each i and j,\n<code>friends[i][j]</code> will be equal to <code>friends[j][i]</code>.\n\n<LI> For each i,  <code>friends[i][i]</code> will be equal to 'N'.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n["NNN",\n"NNN",\n"NNN"]\n\nReturns: 0\n\n</code>\nHere, there are 3 people and none of them are friends, so everybody has\nzero 2-friends.\n\n\n<li class="example-even">\n<code>\n["NYY",\n"YNY",\n"YYN"]\n\nReturns: 2\n\n</code>\nEach person has two 2-friends.\n\n\n<li class="example-odd">\n<code>\n["NYNNN",\n"YNYNN",\n"NYNYN",\n"NNYNY",\n"NNNYN"]\n\nReturns: 4\n\n</code>\nPersons 0 and 4 have two 2-friends, persons 1 and 3 have three\n2-friends. Person 2 is the most popular one - four 2-friends.\n\n\n<li class="example-even">\n<code>\n["NNNNYNNNNN",\n"NNNNYNYYNN",\n"NNNYYYNNNN",\n"NNYNNNNNNN",\n"YYYNNNNNNY",\n"NNYNNNNNYN",\n"NYNNNNNYNN",\n"NYNNNNYNNN",\n"NNNNNYNNNN",\n"NNNNYNNNNN"]\n\nReturns: 8\n\n</code>\n<li class="example-odd">\n<code>\n["NNNNYNNNNN",\n"NNNNYNYYNN",\n"NNNYYYNNNN",\n"NNYNNNNNNN",\n"YYYNNNNNNY",\n"NNYNNNNNYN",\n"NYNNNNNYNN",\n"NYNNNNYNNN",\n"NNNNNYNNNN",\n"NNNNYNNNNN"]\n\nReturns: 8\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this\ninformation without the prior written consent of TopCoder, Inc. is\nstrictly prohibited. &copy;2006, TopCoder, Inc. All rights reserved.",
    formName: "friendscore",
  },
  {
    filename: "Gravity.py",
    name: "Gravity",
    description: "",
    lang: "python",
    initial:
      'def falling(time,velo):\n\t"""\n\treturn float indicating\n\tnumber of meters an object has\n\tfallen after being dropped/thrown\n\twith initial velocity given by\n\tfloat parameter velo\n\t(given in meters/second)\n\tand after falling for float parameter\n\ttime seconds\n\t"""\n\t\n\t# you write code here',
    problem:
      "Elphaba has decided to try to defy gravity. She's going to drop or throw\nan object from the top of an infinitely tall building and see\nhow far it falls. She knows exactly what speed she throws the\nobject and has a stop watch she uses to time how long it falls.\n\nWrite function <code>falling</code> that returns the number of\n<em>meters</em> the object has fallen after <code>time</code>\nseconds have elapsed when the object is thrown with\nan initial velocity of <code>velo</code> meters/sec.\n\nIgnore any forces due to friction, air-resistance, etc. The infinitely\ntall building is located in a vacuum. However, the building is on the\nearth, so accelaration due to earth's gravity should be part\nof your calculations.\n\n\nYou can find many resources online that give the equation for how far an\nobject falls when dropped. That equation is <tt>0.5*g*t<sup>2</sup>\n</tt> where t is time in seconds and <b>g</b> is the gravitational\nconstant which is 9.8 meters/seconds<sup>2</sup> (units). When an object\nis thrown the equation is\n<code>\nd = v*t + 0.5*g*t<sup>2</sup>\n\n</code>\nWhere  v is initial velocity in meters/second and t is time in\nseconds. So simply use that equation, and the value of <b>g =\n9.8</b> in solving this problem.",
    constraints:
      "<ul>\n<li> <code>time</code> will be greater than zero and less than\nthe number of seconds in a week.\n\n<li> <code>velo</code> will be non-negative.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\ntime = 3\nvelo = 5\n\nreturns 59.1\n\n</code>\nIf you throw an object at 5 m/sec for 3 seconds it will\nhave fallen 59.1 meters. Note that 5*3 + 0.5*9.8*3*3 = 15 + 44.10 = 59.10\n\n<li class="example-even">\n<code>\ntime = 3\nvelo = 0\n\nreturns 44.1\n\n</code>\nIf you drop the object instead of throwing it the distance\nwill be 44.1 meters.\n\n<li class="example-odd">\n<code>\ntime = 3600\nvelo = 0\n\nreturns 63504000.0\n\n</code>\nAfter an hour a dropped object has traveled 63,504 kilometers or nearly 40,000\nmiles.\n\n<li class="example-even">\n<code>\ntime = 86400\nvelo = 0\n\nreturns 36578304000.0\n\n</code>\nAfter a day the dropped object has traveled more than 22 million miles\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "gravity",
  },
  {
    filename: "Grayscale.py",
    name: "Grayscale",
    description: "",
    lang: "python",
    initial:
      'def convert(r,g,b):\n\t"""\n\treturn float value obtained by\n\tconverting integer r,g,b, into grayscale\n\t"""\n\t\n\t# you write code here',
    problem:
      "Converting color images into grayscale images is a common operation\nusing image/photo software. There are several formula for doing such\na conversion. For this problem you'll use a common <em>luminosity</em>\nbased formula. Given integer Red/Green/Blue values, so-called (r,g,b)\nvalues, return the grayscale value given by the formula:\n<code>\n0.21R + 0.71G + 0.07B\n</code>\nAlthough there are other formulas, this one represents grayscale values\nwell, where the returned values are between 0 and 255.",
    constraints:
      "<ul>\n<li><code>r</code>, <code>g</code>, and <code>b</code> will each be\nbetween 0 and 255 inclusive.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nr = 0\ng = 0\nb = 0\n\nreturns 0\n\n</code>\nBlack is black\n\n<li class="example-even">\n<code>\nr = 255\ng = 255\nb = 255\n\nreturns 252.45\n</code>\nWhite is almost white?\n\n<li class="example-odd">\n<code>\nr = 0\ng = 0\nb = 255\n\nreturns 17.85\n\n</code>\nBlue, blue, my world is blue\n\n<li class="example-even">\n<code>\nr = 1\ng = 1\nb = 1\n\nreturns 0.99\n</code>\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "grayscale",
  },
  {
    filename: "IRVoting.py",
    name: "IRVoting",
    description: "",
    lang: "python",
    initial:
      "def winner3(data):\n\t'''\n\tdata (list of strs): A list of strings, each string represents a voter's\n\tranked preference for the three candidates. Each candidate is separated\n\tby a semicolon \";\"\n\t\n\tImplement instant runoff voting when there are only three candidates to\n\tchoose from. Return the candidate that wins or 'Tie' if there is a tie.\n\t'''\n\treturn ''",
    problem:
      '<a href="https://en.wikipedia.org/wiki/Instant-runoff_voting">Instant-runoff voting</a> is a ranked preferential voting method where every voter strictly ranks the candidates by who they would prefer in the position. Ballots are then initially counted using each voter\'s first choice. If no candidate earns the majority of the votes (strictly greater than half), the candidate with the least votes is removed and all of their votes are distributed based on each of those voter\'s next most preferred candidate.\n</p>\n\nImplement winner3, which returns the winner of an instant-runoff election across three candidates. The input is a list of strings that represent ballots. Each string has all three candidates separated by semicolons (;) in that voter\'s ranking with the most preferred candidate first.\n</p>\n\nIf there is no majority winner for the first round, then the candidate with the least votes has their votes redistributions between the two other candidates. If there is no winner after redistributing the votes, then the function should return "Tie".\n</p>\n\nAssume that if there is no winner in the first round, there will not be a tie for who has the least number of votes.',
    constraints:
      "<ul>\n<li>There is always at least one voter.\n<li>Every string contains all three candidates under consideration and only those candidates\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\ndata = ['Ezekiel;Joyce;Lakia', 'Ezekiel;Joyce;Lakia']\n\nReturns 'Ezekiel'\n# Both voters most preferred Ezekiel and therefore they won\n</code>\n\n\n<li class=\"example-even\">\n<code>\ndata = ['Jackqueline;Mckenzie;Angelena', 'Jackqueline;Mckenzie;Angelena', 'Jackqueline;Angelena;Mckenzie',\n'Mckenzie;Jackqueline;Angelena',\n'Angelena;Jackqueline;Mckenzie']\n\nReturns 'Jackqueline'\n# Three of the five voters ranked Jackqueline as their first choice and therefore they won. Note there was no need to redistribute the\n# votes of the candidate with the least votes, which means it did not matter that there is tie for who has the least votes.\n</code>\n\n\n<li class=\"example-odd\">\n<code>\ndata = ['Caroline;Ezekiel;Mariano', 'Caroline;Ezekiel;Mariano',\n'Ezekiel;Caroline;Mariano', 'Ezekiel;Caroline;Mariano',\n'Mariano;Caroline;Ezekiel']\n\nReturns 'Caroline'\n# Two candidates received 2 votes each, with Mariano receiving only 1 vote (the least). Mariano's vote was redistributed to the next person\n# on that voter's ranking, which is Caroline. This resulted in Caroline getting 3 votes and therefore receiving a majority of the 5 votes in\n# the data set and winning.\n</code>\n\n\n<li class=\"example-even\">\n<code>\ndata = ['Mckenzie;Barney;Isaac', 'Mckenzie;Isaac;Barney', 'Mckenzie;Barney;Isaac',\n'Barney;Mckenzie;Isaac', 'Barney;Isaac;Mckenzie', 'Barney;Mckenzie;Isaac', 'Barney;Isaac;Mckenzie',\n'Isaac;Barney;Mckenzie', 'Isaac;Barney;Mckenzie', 'Isaac;Mckenzie;Barney', 'Isaac;Mckenzie;Barney', 'Isaac;Mckenzie;Barney']\n\nReturns 'Tie'\n\n# In the first round Mckenzie had 3 votes, Barney had 4 votes, and Isaac had 5 votes. Isaac does not win because a majority vote must be\n# more than 6. Mckenzie as the fewest votes, so those votes are redistributed, resulting in both Barney and Isaac having 6 votes each,\n# which is a tie, so \"Tie\" is returned.\n</code>\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "irvoting",
  },
  {
    filename: "InsideCount.py",
    name: "InsideCount",
    description: "",
    lang: "python",
    initial:
      "def howMany(phrase, letter):\n\t'''\n\tGiven string parameters phrase and letter,\n\twhere letter is one character and phrase is a\n\tstring of words separated by a blank, return\n\tthe count of the unique words in phrase\n\tthat have letter in them\n\t'''\n\t\n\t# you write code here",
    problem:
      'Given a phrase of words and a single letter, your task is to determine\nwhich of the words in phrase have this letter as one of their letters, and\nto return the count of the unique words\nin phrase that have letter in them.\n\n\n\nWrite function <em>howMany </em> that has two string parameters\nnamed <code>phrase</code> and  <code>letter</code>.\nThis function returns an integer representing the\ncount of the unique words in phrase that have <code> letter</code> in\nthem.\nIgnore case for <code>phrase</code>, so the words "That", "that", "ThaT" and "THAT" would all be considered\nthe same word. You can assume <code>letter</code> is always lowercase.',
    constraints:
      "<ul>\n<li> phrase is of length 1 or more characters.  </li>\n<li> words in phrase are separated by blanks.</li>\n<li>phrase starts and ends with an alphabetic character, and if there\nare blanks, there cannot be two adjacent blanks.    </li>\n</li>\n<li> phrase is only alphabetic characters, upper or lowercase </li>\n<li> letter is of length 1   </li>\n<li> letter is only an alphabetic character and is lowercase</li>\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nphrase = "Duke CompSci graduates are Jedi Masters of the technology sector"\nletter = "d"\n\nreturns: 3\nThere are three unique words that contain d: Duke, graduates, and Jedi\n</code>\n\n\n<li class="example-even">\n<code>\nphrase = "This is a very long long long test of this phrase"\nletter = "g"\n\nreturns: 1\nThere is only one unique word with "g" in it: long\n</code>\n\n\n<li class="example-odd">\n<code>\nphrase = "How are you how are you how are you now"\nletter = "h"\n\nreturns: 1\n\nThere is just one word with h: how\n\n</code>\n\n\n\n<li class="example-even">\n<code>\nphrase = "How are you how are you how are you now"\nletter = "b"\n\nreturns: 0\n\nThere are no words that have a "b" in them.\n</code>\n\n\n<li class="example-odd">\n<code>\nphrase = "Go go go DUKE"\nletter = "d"\n\nreturns: 1\n\nThere is just one word with a d in it.\n\n</code>\n\n\n<li class="example-even">\n<code>\nphrase = "so"\nletter = "s"\n\nreturns: 1\n\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "insidecount",
  },
  {
    filename: "InterestingParty.py",
    name: "InterestingParty",
    description: "",
    lang: "python",
    initial:
      'def bestInvitation(first,second):\n\t"""\n\treturn int based on string list\n\tparameters first and second\n\t"""\n\t\n\t# you write code here',
    problem:
      "Mr. White is a very versatile person - absolutely everything\nis interesting to him. Perhaps this is why he has many\nfriends. Quite unfortunately, however, none of his friends\nare versatile at all. Each of them is interested only in two\ntopics and refuses to talk about anything else. Therefore,\neach time Mr. White organizes a party, it's a big problem\nfor him to decide whom to invite so that the party is\ninteresting to everybody. Now that Mr. White has a lot of\nexperience in organizing parties, he knows for sure that a\nparty will be interesting if and only if there's a topic\ninteresting to each of the invited friends.\n\n\n\nYou will be given string lists <code>first</code> and\n<code>second</code>. The i-th friend of Mr. White is\ninterested in topics <code>first[i]</code> and\n<code>second[i]</code>. Return the largest number of friends\nthat Mr. White can invite to his party so that the party\nwill be interesting.",
    constraints:
      "<ul>\n<LI><code>first</code> will contain between 1 and 50\nelements, inclusive.\n\n<LI> <code>second</code> will contain the same number of\nelements as <code>first</code>.\n\n<LI>Each element of <code>first</code> and\n<code>second</code> will contain between 1 and 15\ncharacters, inclusive.\n\n<LI>Each character in <code>first</code> and\n<code>second</code> will be a lowercase letter ('a'-'z').\n\n<LI>For each valid i, <code>first</code>[i] will not be\nthe same as <code>second</code>[i].\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nfirst =  ["fishing", "gardening", "swimming", "fishing"]\nsecond = ["hunting", "fishing", "fishing", "biting"]\n\nReturns: 4\n\n</code>\nThis is a very easy case since everybody is interested in\n"fishing".\n\n<li class="example-even">\n<code>\nfirst  = ["variety", "diversity", "loquacity", "courtesy"]\nsecond = ["talking", "speaking", "discussion", "meeting"]\n\nReturns: 1\n\n</code>\nDespite being interested in "talking", "speaking", "meeting"\nand so on, these people have nothing to talk about with each\nother.\n\n<li class="example-odd">\n<code>\nfirst =  ["snakes", "programming", "cobra", "monty"]\nsecond = ["python", "python", "anaconda", "python"]\n\nReturns: 3\n\n</code>\nMr. White can invite friends 0, 1, 3 (0-based) and they will\nhave an interesting evening talking about "python" (or at\nleast Mr. White thinks so).\n\n<li class="example-even">\n<code>\nfirst =  ["t", "o", "p", "c", "o", "d", "e", "r", "s",\n"i", "n", "g", "l", "e", "r", "o", "u", "n",\n"d", "m", "a", "t", "c", "h", "f", "o", "u",\n"r", "n", "i"]\n\nsecond = ["n", "e", "f", "o", "u", "r", "j", "a", "n",\n"u", "a", "r", "y", "t", "w", "e", "n", "t",\n"y", "t", "w", "o", "s", "a", "t", "u", "r",\n"d", "a", "y"]\n\nReturns: 6\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary\nproperty of TopCoder, Inc. Any unauthorized use or\nreproduction of this information without the prior written\nconsent of TopCoder, Inc. is strictly\nprohibited. &copy;2010, TopCoder, Inc. All rights reserved.",
    formName: "interestingparty",
  },
  {
    filename: "Intro.py",
    name: "Intro",
    description: "",
    lang: "python",
    initial:
      "def test(number1, number2):\n\t'''\n\tnumber1 (int)-this will represent an integer\n\tnumber2 (int)-this will represent another integer\n\t\n\t\n\t'''\n\treturn the sum of the two parameters, number1 and number2.",
    problem:
      "<strong>It is important to read/work on this APT in the order you read it to ensure you understand how to upload/test APTs.</strong><br><br>\n\n<i>This section will give a general overview of the problem.</i>\n<br><br>\nThis is just a simple APT designed to get you comfortable uploading/testing APTs. Other APT problems will be more detailed and\nrequire more design. They will also NOT include instructions on how to submit APTs, what to expect, etc. Refer to this as necessary.\n<br><br>\nBased on the specification above, this is a template for an APT function that you'll develop. You will learn more about what all this means in the next lecture discussing\nprogrammer-defined functions. For now, create the exact code (case-specific) in a Python module named Intro.py:\n<xmp>\ndef test(number1, number2):\nsum=number1 + number2\nreturn sum\n</xmp>\n\nThis may not be clear now. However, by next class, it will be. This code creates a function named <i>test</i> that accepts\ntwo integer parameters: <i>number1</i> and <i>number2</i>. It then calculates the sum of these two parameters and\nassigns (stores) it in a variable named <i>sum</i>. The third line returns the value stored in <i>sum</i> back to the\nmain part of your program.\n<br><br>\nCopy this exactly as you see it. This should be the ONLY code in Intro.py.",
    constraints:
      "<i>This section will tell you what constraints your solution should include</i>\n\n<ul>\n<li><i>number1</i> and <i>number2</i> are both integers.\n</ul>",
    examples:
      '<i>This section will give a few examples of what the expected output is, given your program works as it should.\nBefore you upload your code to the APT website, you can always test your code works as it should by adding the following code\n<b><strong>a few lines under</strong> the last line of the function created (it must be aligned with the \'d\' in <i>def</i>,\nnot indented under that.</b> If you don\'t make sure this is correct, then your program won\'t work correctly.\nYou must also be sure to <strong>REMOVE OR COMMENT OUT THE CODE SEGMENT BELOW BEFORE UPLOADING THE APT.</strong>\nRemember, this is only for testing it on your machine first:</i>\n<xmp>\nif __name__ == \'__main__\':\nnum1=5\nnum2=4\nvalue=test(num1, num2)\nprint(value)\n</xmp>\n<br>\n<i> The first line of the code above is where your program knows to begin executing the code. The third line tells the program\nto call (run) the test function and send it two parameters (comma-separated): num1(storing 5) and num2(storing4). This means\nthat eventually, value should store 9 in the fourth line and the fifth line should output 9 to the console (screen).\n<br><br>\nTry to replace num1 and num2 with the values in the examples below and run your code to make sure you get the expected results.\nOnce you\'re certain it\'s correct, delete or comment out this code and save Intro.py again.</i>\n<ol>\n\n<li class="example-odd">\n<code>\nnumber1=5\nnumber2=5\n\nReturns 10\n</code>\n# Since both parameters are integers, the function test should return the sum, which is 10.\n\n\n<li class="example-even">\n<code>\nnumber1=-11\nnumber2=5\n\nReturns -6\n</code>\n# Should return the sum of adding a negative and positive integer, which is -6.\n\n\n<li class="example-odd">\n<code>\nnumber1=200\nnumber2=5\n\nReturns 205\n</code>\n</ol>\n<h2>SUBMITTING YOUR APT</h2>\nOnce you\'ve tested your code on your local machine, remember to comment out or delete the code that you\nadded from the Examples section.\n\n<ol>\n<li class="example-odd">\nGo to the APT-0 link, and select the radio button. Select the correct file to upload from your directory.\nSelect "test/run" to upload and run your code. <br><br>\n\nYou should see in the top-half of the page the name of the problem (intro), language used (python), and name\nof the file uploaded (Intro.py). You should also see the total number of times you\'ve run the APT test, netid,\nand a statement that notes "compile succeeded." This means the program compiled and executed.<br><br>\n\nIn the second-half of the page is "Test Results Follow" with a total # of correct (in this case, 4 out of 4).\nThis means there were 4 tests run on your code, and it passed all 4. The table contains 8 rows. The first four\nrows (numbered 1-4) are a general pass/fail summary of each test. Each of these rows has a green "pass" in the\nsecond column. This means the code you uploaded passed all 4 tests we run. The fifth and sixth rows (numbered 1 and 2)\nhave a third column, which says:<br><br>\ngot<br>\n11<br>\n: 5 6<br><br>\nThis means when we ran your program, the value we got was 11. Because the green "pass" is there, this is the\nexpected value and your test passed.<br><br>\nThe last two rows (numbered 3 and 4) only have a ":" in the third row. This means that you are not shown the\ninput we used to test your program. It is important to remember that some tests we run will not display all\ninfo(input, expected output, and output we got),especially when errors are present in your program.<br><br>\n\nYou should also see your netid in the list under "Logging Results for intro," as well as "logged entry score=1.00000."\nThis means your code passed all tests and received the maximum score (1.0). Your score can range from 0.0-1.0. Your\ncode will receive the same fraction of points as the fraction of tests it passes, with the points rounded down.<br><br>\n\n<li class="example-even">\nChange sum=number1 + number2 to sum=number1 + number1 in your Intro.py file and save. Select the "Back" button in your browser to return\nto the APT upload page. Make sure Intro.py is loaded and the radio button selected, and run your code again.<br><br>\n\n<li class="example-odd">\nYou should now see the second column in all rows says "fail." In addition, the third column includes the expected\nresult (11), what it got when it ran your program(10), and the values we used for the parameters number1 and number2\n(5 and 6, respectively). You may have a combination of tests you pass and fail. Your goal is to pass all tests.\nAll future APTs will have 15-20 tests to pass. Some will show more information than the others to help you\ndebug your program (see #1).<br><br>\n\n<li class="example-even">\nChange your code to now state sum=number1+number0. Upload and run Intro.py again. You should now see all 4 tests failed,\nwith the more detailed test results showing something similar to "runtime exception:NameError: name \'number0\'\nis not defined 5 6" in the last four rows. NameError means a variable or function in your program is undefined. In this\ncase, number0 is undefined and produces the error. This should help you understand how to identify errors that appear\nwhen running any APTs. Remember, NameError is only one type of Python error.<br><br>\n\nChange your code back to the original (correct) statement, sum=number1+number2.<br><br>\n\n<li class="example-odd">\nRename your program to Introo.py. Upload Introo.py and test your program. You should see a line that says:<br><br>\n"upload ok, files moved: Introo.py Wrong file name, expected Intro got Introo"<br><br>\n\nThis indicates the system expected a file named Intro.Py and you didn\'t upload that. Remember that <strong>filenames\nare case-specific</strong>.\n\n<br><br>\nThese are some of the basic results you can see when running your program. The goal is to get all green passes for\nall tests. In addition, you must ACTUALLY write code to implement the solutions. If you try to simply plug in answers\nto pass the test then we will know. More important, you will ultimately hurt yourself in this class. Don\'t take the\neasy (and unethical) route.<br><br>\n\nAll of your attempts are logged in the system. There\'s nothing else for you to do to ensure your highest submission is recorded!\nPlease note that, if you select "check submission grades" from the APT submission page, you will ONLY see the most recent score.\nHowever, please remember we have a log that is tracking ALL of your submissions and scores.',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; A. Nicki Washington and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "intro",
  },
  {
    filename: "IsSpecial.py",
    name: "IsSpecial",
    description: "",
    lang: "python",
    initial:
      'def lovely(ingredients,inedible):\n\t"""\n\treturn int, number of items in\n\tingredients, a string that are edible\n\tusing informaion from  inedible, a string\n\t"""\n\t\n\t# you write code here',
    problem:
      "Some people have dietary restrictions\nbecause of health issues, some because\nof religious issues, and some for ethical, moral,\nor other reasons. You must write the function <code>lovely</code>\nthat determines how many of the individual ingredients in\nsome food/recipe are edible. The String <code>inedible</code>\nis a white-space delimited list of inedible food-stuffs.\nAny ingredient that's not listed in <code>inedible</code> is,\ntherefore, edible.",
    constraints:
      "<ul>\n<li> All characters in <codE>inedible</code> and\n<code>ingredients</code>\nare upper or lower case 'A'-'Z', 'a'-z'\n<li> The number of \"words\" (character sequences separated by whitespace)\nin\n<codE>inedible</code> is fewer than 50, similarly for\n<code>ingredients</code> .\n<li> Each word is separated from another word by exactly one space\nin both\n<codE>inedible</code> and\n<code>ingredients</code> .\n<li>All words in <code>ingredients</code> are distinct.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\ningredients = "honey sugar"\ninedible = "rice milk potato"\n\nreturns: 2\n\n</code>\nEach of the two items in ingredients is edible since neither\nis inedible.\n\n<li class="example-even">\n<code>\ningredients = "pork shrimp marshmallow"\ninedible = "asparagus shrimp lobster crayfish bacon"\n\nreturns: 2\n\n</code>\nshrimp isn\'t edible, but pork and marshmallow are\n\n<li class="example-odd">\n<code>\ningredients = "a e i o u"\ninedible = "b c d f g h j k l m n p q r s t v w x y z"\n\nreturns: 5\n\n</code>\nAll the vowels are edible since only the consonants are inedible\n\n<li class="example-even">\n<code>\ningredients = "stuff"\ninedible = "this that the other stuff nonsense"\n\nreturns: 0\n\n</code>\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "special",
  },
  {
    filename: "LastNameFirst.py",
    name: "LastNameFirst",
    description: "",
    lang: "python",
    initial:
      'def modify(name):\n\t"""\n\tname is a string with zero or more spaces\n\twith one space between each "word"\n\treturn string "last, first MI. MI. MI. ..."\n\twhere MI is middle initial\n\t"""\n\t\n\t# you write code here\n\treturn name',
    problem:
      "Sabrina needs to be able to reorganize names into the last name first and\nshe wants to abbreviate any middle names with the first letter and a\nperiod. She respects middle names that are a single letter and does\n<b>not</b> abbreviate them.\n\n\n\nWrite function <code>modify</code> that given a name returns the name with\nthe last name first, followed by a comma,\nfollowed by the first name (if any), followed by the first letter of\neach remaining/middle name with a period after each letter. If\na middle name is a single letter, do not abbreviate it/follow it by a period.",
    constraints:
      "<ul>\n<li> <code>name</code> will have at least one word\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nname = "Barak Hussein Obama"\n\nreturns "Obama, Barak H."\n</code>\n\n<li class="example-even">\n<code>\nname = "Prince"\n\nreturns "Prince"\n\nThere is only one name.\n</code>\n\n<li class="example-odd">\n<code>\nname = "Thomas Narten"\n\nreturns "Narten, Thomas"\n\nThere is no middle name.\n</code>\n\n<li class="example-even">\n<code>\nname = "Elizabeth Rosemond Hilton Wilding Todd Fisher Burton Warner Fortensky Taylor"\n\nreturns "Taylor, Elizabeth R. H. W. T. F. B. W. F."\n\nAll the middle names are abreviated.\n\n</code>\n\n<li class="example-odd">\n<code>\nname = "Bala X Krish"\n\nreturns "Krish, Bala X"\n\nDon\'t abbreviate one letter words.\n\n</code>\n\n<li class="example-even">\n<code>\nname = "Liz A Bo To Joe"\n\nreturns "Joe, Liz A B. T."\n\nAll the middle names are abreviated except A which was of length 1"\n\n</code>\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "lastnamefirst",
  },
  {
    filename: "Laundry.py",
    name: "Laundry",
    description: "",
    lang: "python",
    initial:
      'def minutesNeeded(m):\n\t"""\n\tReturn integer number of minutes to launder m (integer) loads\n\t"""\n\t\n\t# you write code here',
    problem:
      "Consider the problem of trying to do a number of loads of laundry, given\nonly one washer and one dryer. Washing a load takes 25 minutes, drying a\nload takes 25 minutes, and folding the clothes in a load takes 10\nminutes, for a total of 1 hour per load (assuming that the time to\ntransfer a load is built into the timings given). 10 loads of laundry can be\ndone in 10 hours, 600 minutes, using the method of completing one load\nbefore starting the next one. Though it can be done faster, see examples.&nbsp;\n\nWrite the method, <code>minutesNeeded,</code> that  returns the shortest time needed to do <code>m</code> loads of laundry. In other words, given an\ninteger value representing the number of loads to complete, <code>m</code>, determine the smallest number of minutes\nneeded to complete all loads of laundry.\n</p>",
    constraints: "<ul>\n<LI> The value of <code>m</code> &lt; 10000\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nm = 1\n\nreturns: 60\n\n</code>\n\nYou must wash the laundry, 25 minutes, dry the laundry, 25 more minutes,\nand fold the laundry, 10 more minutes; for a total of 60 minutes.\n\n\n<li class="example-even">\n<code>\n\nm = 2\n\nreturns: 85\n\n</code>\nYou wash the first load of laundry, then dry it, and fold it. While it\nis drying, you start washing the second load of laundry. When it\nfinishes, the first load is done drying, so you can start drying the\nsecond load. You can fold the first load while the second load is\ndrying, but you need ten extra minutes to fold the last load.\n\n\n<li class="example-odd">\n<code>\n\nm = 3\n\nreturns: 110\n\n</code>\nYou wash the first load of laundry, then dry it, and fold it. While it\nis drying, you start washing the second load of laundry. When it\nfinishes, the first load is done drying, so you can start drying the\nsecond load. Since the washer is free again, you can start the last\nload. When the second load finishes drying, the last load is finished\nwashing so you can start it drying. You can fold the first two loads\nwhile the third load is drying, but you need ten extra minutes to fold\nthe last load.\n\n<li class="example-even">\n<code>\n\nm = 12\n\nreturns: 335\n\n</code>\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "laundry",
  },
  {
    filename: "LowerVowels.py",
    name: "LowerVowels",
    description: "",
    lang: "python",
    initial:
      "def lower(phrase):\n\t'''\n\tThis function accepts one parameter, phrase, which is a string.\n\t\n\tThe function should return the number of lowercase vowels in phrase.\n\t'''\n\t# you write code here",
    problem:
      "We are interested in determining the number of lowercase vowels in a given string.\n\n\nCreate the function named <code>lower</code> that contains one parameter\nnamed phrase.\n</p>\n\nThis function returns the number of lowercase vowels present in the string.</p>",
    constraints:
      "<ul>\n<li>The string parameter phrase should contain at least one character.\n<li>The number of lowercase vowels present ranges between 0 and 30.\n<li>Uppercase vowels should not count.\n</ul>",
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\nphrase="Why are you and I still trying to grade?"\n\nReturns: 10\n</code>\n# There are 10 lowercase vowels in phrase. \'I\' is not counted.\n\n\n<li class="example-even">\n<code>\nphrase="Angela, Eric, Eve, and I are the same age."\n\nReturns: 12\n</code>\n# There are 12 lowercase vowels.\n\n\n<li class="example-odd">\n<code>\nphrase="ARE YOU OLD ENOUGH?"\n\nReturns: 0\n</code>\n# There are no lowercase vowels present.\n\n\n<li class="example-even">\n<code>\nphrase="Pass a pencil."\n\nReturns: 4\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; A. Nicki Washington and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "lowervowels",
  },
  {
    filename: "MaxOrder.py",
    name: "MaxOrder",
    description: "",
    lang: "python",
    initial:
      "def forItem(orders, item):\n\t'''\n\torders (list of strs) - list of orders for items in format \"ITEM:QUANTITY\"\n\titem (str) - item of interest in ORDERS\n\t\n\tReturn in a list the largest ordered quantity for ITEM in ORDERS\n\tand how many times that quantity was ordered.\n\t'''\n\treturn [0, 0]",
    problem:
      "Write the function <code>forItem</code> that takes <code>orders</code>, a list of strings that represent orders, and <code>item</code>, a string for a specific item. Each element in <code>orders</code> is a string of the format 'item:quantity' where quantity is an integer. This function then returns the largest quantity ever ordered for the parameter <code>item</code> and how many times the maximum order quantity of <code>item</code> occurs in <code>orders</code>.\n\nIf <code>item</code> is not in <code>orders</code>, return a max quantity of 0 and a count of 0.",
    constraints:
      "<ul>\n<li>The quantity for an order will be a positive integer.\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\norders = ['apple:1']\nitem = 'apple'\n\nReturns [1, 1]\n</code>\n\n\n<li class=\"example-even\">\n<code>\norders = ['banana:4', 'orange:22', 'banana:4', 'banana:3']\nitem = 'banana'\n\nReturns [4, 2]\n</code>\n\n\n<li class=\"example-odd\">\n<code>\norders = ['apple:1', 'banana:2']\nitem = 'orange'\n\nReturns [0, 0]\n# 'orange' is not in orders, therefore it returns a max of 0 and a count of 0\n</code>\n\n\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "maxorder",
  },
  {
    filename: "MedalTable.py",
    name: "MedalTable",
    description: "",
    lang: "python",
    initial:
      'def generate(results):\n\t"""\n\treturn list of strings\n\tbased on data in results, a list of strings\n\t"""\n\t\n\t# you write code here\n\treturn []',
    problem:
      'The Olympic Games will be held, and have been held (and might be being\nheld).  Given the results of the olympic disciplines, generate and\nreturn the medal table.\n\nThe results of the disciplines are given as a <codE>String list</code>\nresults</code>, where each element is in the format "GGG SSS BBB". GGG,\nSSS and BBB are the 3-letter country codes (three capital letters from\n\'A\' to \'Z\') of the countries winning the gold, silver and bronze medal,\nrespectively.\n\nThe medal table is a <code>String list</code> with an element for each\ncountry appearing in results.  Each element has to be in the format "CCO\nG S B" (quotes for clarity), where G, S and B are the number of gold,\nsilver and bronze medals won by country CCO, e.g. "AUT 1 4 1". The\nnumbers should not have any extra leading zeros.\n\nSort the elements by the number of gold medals won in decreasing order.\nIf several countries are tied, sort the tied countries by the number of\nsilver medals won in decreasing order.  If some countries are still\ntied, sort the tied countries by the number of bronze medals won in\ndecreasing order.  If a tie still remains, sort the tied countries by\ntheir 3-letter code in ascending alphabetical order.',
    constraints:
      "<ul>\n<LI> <code>results</code> contains between 1 and 50 elements, inclusive.\n\n<LI>Each element of <code>results</code> is formatted as described in the problem statement.\n\n<LI> No more than 50 different countries appear in <code>results</code>.\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n["ITA JPN AUS", "KOR TPE UKR", "KOR KOR GBR", "KOR CHN TPE"]\n\nReturns:\n[ "KOR 3 1 0",  "ITA 1 0 0",  "TPE 0 1 1",  "CHN 0 1 0",  "JPN 0 1 0",\n"AUS 0 0 1",  "GBR 0 0 1",  "UKR 0 0 1"\n]\n\n</code>\nThese were the results of the archery competitions in Athens, 2004.\n\n<li class="example-even">\n<code>\n["USA AUT ROM"]\n\nReturns: [ "USA 1 0 0",  "AUT 0 1 0",  "ROM 0 0 1" ]\n\n</code>\n\n<li class="example-odd">\n<code>\n["GER AUT SUI", "AUT SUI GER", "SUI GER AUT"]\n\nReturns: [ "AUT 1 1 1",  "GER 1 1 1",  "SUI 1 1 1" ]\n\n</code>\n\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2002,2003,2004,2005,2006 TopCoder, Inc. All rights reserved.",
    formName: "medaltable",
  },
  {
    filename: "MemberCheck.py",
    name: "MemberCheck",
    description: "",
    lang: "python",
    initial:
      'def whosDishonest(club1, club2, club3):\n\t"""\n\treturn sorted list of Strings, the names\n\tthat appear in more than one of the\n\tString lists club1, club2, club3\n\t"""\n\t\n\t# write code here',
    problem:
      "A health club chain allows its members to visit any of its many health\nclub locations an unlimited number of times per day. The only\nconstraining rule is, a customer can only visit one health club\nlocation per day, even though he or she may return to that location\nan unlimited number of times for the rest of that day.\n\nAlthough the honor system has always worked quite well, the club wants\nto run some tests to see how many people really follow the\nrules. You are to write a program that takes the entrance log files\nfrom three different clubs (all logging the same day) and return a\nsorted list of the people who are not honest and went to more than\none health club location in the same day.\n\n\nThe log files are represented as lists of <code>String</code>'s\nwhere each element is the\nmember name of a customer who entered that day. For example, if a\ncustomer showed up three times to one of the club locations that\nday, the member's name would appear three times in the corresponding\nlist of Strings.\n\n<h3>Notes</h3>\n<UL>\n<LI> <code>club1</code>, <code>club2</code>, and <code>club3</code>\nmay contain a different number of elements.\n\n<LI> The same member name can appear multiple times in a single log file.\n<LI> The elements of the returned <code>String</code> list\nshould be sorted in\nlexicographic order (the order they would appear in a dictionary).\n\n<LI> Assume that two people with the same name are in fact the same person.\n</UL>",
    constraints:
      "<ul>\n<LI> <code>club1</code>, <code>club2</code>, and <code>club3</code> each have between 1 and 50 elements,\ninclusive.\n\n<LI> Each element of <code>club1</code>, <code>club2</code>, and <code>club3</code> contains between 1 and 50 characters, inclusive.\n<LI> Each element of <code>club1</code>, <code>club2</code>, and <code>club3</code> consists only of uppercase letters ('A'-'Z').\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n["JOHN","JOHN","FRED","PEG"]\n["PEG","GEORGE"]\n["GEORGE","DAVID"]\n</code>\n\nReturns: <code>[ "GEORGE",  "PEG" ]</code>\n\n"PEG" went to club1 and club2, and "GEORGE" went to club2 and club3.\n\n</code>\n\n<li class="example-even">\n<code>\n["DOUG","DOUG","DOUG","DOUG","DOUG"]\n["BOBBY","BOBBY"]\n["JAMES"]\n</code>\nReturns: <code>[ ]</code>\n\nHere, no one went to more than one club location.\n\n<li class="example-odd">\n<code>\n["BOBBY"]\n["BOB","BOBBY"]\n["BOB"]\n</code>\n\nReturns: <code>[ "BOB",  "BOBBY" ]</code>\n\nNote that "BOB" is sorted before "BOBBY"\n\n<li class="example-even">\n<code>\n["BOBBY","HUGH","LIZ","GEORGE"]\n["ELIZABETH","WILL"]\n["BOB","BOBBY","BOBBY","PAM","LIZ","BOBBY","BOBBY","WILL"]\n</code>\n\nReturns: <code>[ "BOBBY",  "LIZ",  "WILL" ]</code>\n\n<li class="example-odd">\n<code>\n["JAMES","HUGH","HUGH","GEORGE","ELIZABETH","ELIZABETH","HUGH",\n"DAVID","ROBERT","DAVID","BOB","BOBBY","PAM","JAMES","JAMES"]\n["BOBBY","ROBERT","GEORGE","JAMES","PEG","JAMES","DAVID","JOHN","LIZ",\n"SANDRA","GEORGE","JOHN","GEORGE","ELIZABETH","LIZ","JAMES"]\n["ROBERT","ROBERT","ROBERT","SANDRA","PAM","BOB","LIZ","GEORGE"]\n</code>\n\nReturns: <code>[ "BOB","BOBBY","DAVID","ELIZABETH","GEORGE","JAMES","LIZ","PAM","ROBERT", "SANDRA" ]</code>\n\n\n<li class="example-even">\n<code>\n["LIZ","WILL","JAMES"]\n["JOHN","ROBERT","GEORGE","LIZ","PEG","HUGH","BOB","BOBBY","ROBERT","ELIZABETH","DAVID"]\n["PAM","DAVID","SANDRA","GEORGE","JOHN","ROBERT","SANDRA","GEORGE"]\n</code>\n\nReturns: <code>[ "DAVID",  "GEORGE",  "JOHN",  "LIZ",  "ROBERT" ]</code>\n\n<li class="example-odd">\n<code>\n["PEG","ROBERT","PAM","JOHN","DAVID","JOHN","ROBERT",\n"GEORGE","HUGH","WILL","JAMES","JAMES","BOBBY","BOBBY","SANDRA"]\n\n["SANDRA","BOB","PAM","JAMES","WILL","DAVID","BOBBY","GEORGE",\n"WILL","LIZ","BOBBY","ROBERT","WILL","BOB","BOBBY","ELIZABETH","HUGH"]\n\n["WILL","PEG","ELIZABETH","DAVID","HUGH","BOBBY","JOHN","SANDRA","ELIZABETH",\n"ELIZABETH","SANDRA","GEORGE","PAM","ELIZABETH","BOBBY","DAVID","PAM"]\n</code>\n\nReturns:\n<code>\n[ "BOBBY",\n"DAVID",\n"ELIZABETH",\n"GEORGE",\n"HUGH",\n"JAMES",\n"JOHN",\n"PAM",\n"PEG",\n"ROBERT",\n"SANDRA",\n"WILL" ]\n</code>\n\n<li class="example-even">\n<code>\n["AHHOZY","AHHAPLL","ASNV"]\n\n["AHDLTOE","AHUKPJ","AHDENCTPP","AHDENCJ","AHDLNZC","AHDLTOGG","AHHAPMBG",\n"ALE","AHBHA","AHUKP","AHDQMILLP","AHDENEDY","AHDENEE","AHHOHVCX","AHISK",\n"AHW","AQDB","AHUP","AQDBNPU","AGWZUV","AHHOSUW","AHXS","AHDENCP","AHDQM",\n"AHDLTURV","AHBHVV","AHDQMILL","AHDQMD","AHH","AHDLTU","AHISFNO","AHURF",\n"AH","AHHAPNQ","AQPL","AHDXL","AHDLTUGX","AHDLT","AHUKRC","AHDLTUGX",\n"AQDTXYX","AGWZS"]\n\n["AHHAPMFF","AHURA","AHHOZ","AHISKH","AHUPR","AHHAPM","AHUKRHIN","AHHAP",\n"AHDLTMO","AHDLTUJ","AHDQY","AHUK","AHDENEDY","AHWK","AHHOZGJJ","AHXS",\n"AHDLTUREL","AHHOZQNL","AHHOSUWOS"]\n</code>\n\nReturns: <code>[ "AHDENEDY",  "AHXS" ]</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2002, TopCoder, Inc. All rights reserved.",
    formName: "membercheck",
  },
  {
    filename: "Midpoint.py",
    name: "Midpoint",
    description: "",
    lang: "python",
    initial:
      'def getPoint(coordinates):\n\t\'\'\'\n\tThe function accepts one parameter named coordinates, which is a list containing\n\ttwo strings in the format ["x1,y1", "x2,y2"], where:\n\t\n\t"x1,y1" is an (x,y) coordinate pair for the first point\n\t\n\t"x2,y2" is an (x,y) coordinate pair for the second point\n\t\n\tThe function should return a list containing the x and y coordinates of the midpoint in the\n\tformat [x,y].\n\t\'\'\'\n\t# you write code here',
    problem:
      'The midpoint between any two points on the Cartesian plane can be calculated using the formula:\n<br><br>\n\n((x1+x2)/2,  (y1+y2)/2)\n\nwhere (x1, y1) are the coordinates for the first point and (x2, y2) are the coordinates for the second point.\n\nCreate a function named <code>getPoint</code> that has one parameter named coordinates\n(which is a list of two strings in the format ["x1,y1", "x2,y2"]).\n</p>\n\n The function returns a list that contains two doubles [x,y], which correspond to the x and y coordinates of the midpoint.</p>',
    constraints:
      "<ul>\n<li>All coordinates for the two points used to calculate the midpoint are integers between -30 and +30.\n<li>The coordinates of the midpoint are expressed as double values.\n<li>There is no space before or after the comma in each coordinate.\n</ul>",
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\ncoordinates=["2,2", "2,2"]\n\nReturns: [2.0, 2.0]\n</code>\n# The midpoint between two points that are the same is the same as the two points. Note this includes a double\nrepresentation of the midpoint.\n\n\n<li class="example-even">\n<code>\ncoordinates=["-2,2", "2,2"]\n\nReturns: [0.0, 2.0]\n</code>\nThe midpoint occurs at (0.0, 2.0).\n\n\n<li class="example-odd">\n<code>\ncoordinates=["-5,-10", "4,3"]\n\nReturns: [-0.5, -3.5]\n</code>\n\n\n\n<li class="example-even">\n<code>\ncoordinates=["1,0", "-10,-5"]\n\nReturns: [-4.5, -2.5]\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; A. Nicki Washington and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "midpoint",
  },
  {
    filename: "Money.py",
    name: "Money",
    description: "",
    lang: "python",
    initial:
      'def toMillion(principal, contribution, interest):\n\t"""\n\tprincipal (int) -  account starting value\n\tcontribution (int) - yearly contribution\n\tinterest (float) - yearly compounded interest\n\t\n\tReturn the number of years it would take for an account to reach a million\n\tdollars, where the account starts at PRINCIPAL, is compounded yearly at\n\tINTEREST, and CONTRIBUTION is added to the account at the beginning of\n\tevery year.\n\t"""\n\treturn 0',
    problem:
      "You want to figure out how many years it will take a retirement account to reach $1,000,000. The formula to calculate the new value in an account for the following year is below. <code>P</code> is the principal, the current amount in the account. <code>C</code> is for contribution, the amount of money put into the account that year (assume it was put in at the beginning of the year). <code>i</code> is the interest, how much the account grew that year.\n\n\n<code>(P + C) * (1 + i)</code>\n\n\nWrite a function that returns the number of years the account will need to reach $1,000,000 given an initial principal, yearly contribution, and interest. To simplify things, the contribution and interest do not change regardless of how long it takes and fractions of a penny are kept in the account.",
    constraints:
      "<ul>\n<li><code>principal >= 0</code>\n<li><code>contribution >= 0</code>\n<li><code>i > 0</code>\n<li><code>(principal > 0) or (contribution > 0)</code>, so an infinite loop is not possible\n<li>Fractions of a penny are kept in the account\n</ul>",
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\nprincipal = 952380\ncontribution = 1\ninterest = 0.05\n\nReturns 1\n</code>\n# Note: (952380+1)*1.05 = 1000000.05, which is over 1,000,000.\n\n\n<li class="example-even">\n<code>\nprincipal = 863837\ncontribution = 1\ninterest = 0.05\n\nReturns 3\n</code>\n# Note: We conclude the answer is 3 because of the below progression, notice that fractions of a penny are kept.\n<br>\nYear 1: (863837 + 1) * (1 + 0.05) = 907029.9\n<br>\nYear 2: (907029.9 + 1) * (1 + 0.05) = 952382.4450000001\n<br>\nYear 3: (952382.4450000001 + 1) * (1 + 0.05) = 1000002.6172500001\n\n\n<li class="example-odd">\n<code>\nprincipal = 999999\ncontribution = 1\ninterest = 0.03\nReturns 1\n</code>\n# Note: The principal plus contribution result in 1,000,000, but it still takes 1 year, rather than 0.\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "money",
  },
  {
    filename: "MorseLikeCode.py",
    name: "MorseLikeCode",
    description: "",
    lang: "python",
    initial:
      'def decrypt(library,message):\n\t"""\n\treturn String for parameters\n\tlibrary a list of Strings\n\tand message a string\n\t"""\n\t\n\t# you write code here',
    problem:
      'Marge is rather concerned about who her son has been\nspending time with. Aside from all of the time spent at the arcade, they\ncommunicate with each other through encrypted messages. As a concerned\nparent, Marge wants to discover what the boys are talking about.\n\n\nMarge knows parts of the boys\' code <code>library</code>, given as a\nlist of strings. Each\nelement is formatted as "C SEQUENCE" (quotes for clarity), where C is an\nuppercase letter, SEQUENCE consists of only \'-\' and \'.\'  characters, and\nexactly one space separates the two. When writing their message, the\nboys will replace C with SEQUENCE, separating multiple letters with\nspaces. So, if O is represented as "---" and S is represented as "...",\nthen the message "SOS" can be encoded as "... --- ...".\n\n\nMarge has recovered an encoded message that she would like to\ndecode. Unfortunately, she does not have a full copy of the <code>library</code>, so\nthere may be some SEQUENCEs that do not correspond to any entries in the\n<code>library</code>; if this happens, you are to replace it with a \'?\' (Marge is a\nsmart mom, and might be able to figure out what the word is with only\npartial information). You are to return a String containing the decoded\nmessage.',
    constraints:
      "<ul>\n<LI>\t<code>library</code> will contain between 1 and 50 elements, inclusive.\n<LI> Each element of <code>library</code> will contain between 3 and 50\ncharacters, inclusive.\n<LI> Each element of <code>library</code> will be formatted as \"C SEQUENCE\" as\ndescribed in the problem statement.\n<LI> In each element of <code>library</code>, C will be an uppercase letter\n('A'-'Z').\n<LI> In each element of <code>library</code>, SEQUENCE will consist only of '.'\nand '-'.\n<LI> There will be no duplicate SEQUENCEs in <code>library</code>.\n<LI> <code>message</code> will contain between 1 and 50 characters, inclusive.\n<LI> Each character of <code>message</code> will be '-', '.', or a space (' ').\n<LI> There will be no leading, trailing, or consecutive spaces in <code>message</code>.\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nlibrary = ["O ---",\n"S ..."]\nmessage = "... --- ..."\n\nReturns: "SOS"\n\n</code>\nThe example from the problem statement.\n\n<li class="example-even">\n<code>\nlibrary = ["O ---"]\nmessage = "... --- ..."\n\nReturns: "?O?"\n\n</code>\nThis time we don\'t have the S, so we replace the three dashes with\nquestion marks.\n\n<li class="example-odd">\n<code>\n\n</code>\nlibrary =\n["H -",\n"E .",\n"L --",\n"L ..",\n"O -."]\nmessage = "- . -- .. -."\n\nReturns: "HELLO"\n\n\nNote that the clever boys can have multiple ways to encode the same letter.\n\n<li class="example-even">\n<code>\nlibrary = [\n"H -.-.-.-.-.-.-.-.-.-.",\n"I .-.-.-.-.-.-.-.-.-.-",\n"K -.-.-.-.-.",\n"E .-.-.-.-.-"]\nmessage = "-.-.-.-.-.-.-.-.-.-. .-.-.-.-.-.-.-.-.-.-"\n\nReturns: "HI"\n\n</code>\nA long message doesn\'t always mean a long word.\n<li class="example-odd">\n<code>\nlibrary =\n["O ---",\n"S ...",\n"B -...",\n"T -",\n"R .-.",\n"E .",\n"N -.",\n"X -..-",\n"D -.." ]\n\nmessage = "-... --- ... - --- -. .-. . -.. ... --- -..-"\n\nReturns: "BOSTONREDSOX"\n\n</code>\n<li class="exmample=even">\n\n<code>\nlibrary =\n["A --",\n"B -.",\n"N ...-",\n"I --..",\n"F -.-.-."]\n\nmessage = "-. -- -.-.-. -.-.-. --- --.. ...- .-..--."\n\nReturns: "BAFF?IN?"\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this\ninformation without the prior written consent of TopCoder,\nInc. is strictly prohibited. &copy;2010, TopCoder, Inc. All\nrights reserved.\n<br><br>NOTE: Rodger modified the first sentence to remove its bias overtones.",
    formName: "morselike",
  },
  {
    filename: "Moving.py",
    name: "Moving",
    description: "",
    lang: "python",
    initial:
      "def boxes(items, weights, n):\n\t'''\n\titems (list of str) - List of item names\n\tweights (list of int) - List where the kth element is the weight of the\n\tkth item in the list items\n\tn (int) - Number of boxes to pack the items into\n\t\n\tReturn a list of strings where each string represents the items to pack in\n\tthat box.\n\t'''\n\treturn []",
    problem:
      "To make packing faster you've decided to implement the function\n<code>boxes</code> that tells you what item goes in which box and the\norder to put the items in (heaviest first). You have a list of\n<code>items</code> and a parallel list of <code>weights</code>, where\nthe k<sup>th</sup> item in <code>items</code> has the k<sup>th</sup> weight in\n<code>weights</code>. You must use <code>n</code> boxes to pack things.\n\n\nWhen choosing which of <code>n</code> boxes to put an item in, you\nalways choose the <em>lightest/least heavy</em> box, even if it has\nmore items in it. You put items into each box in order of individual\nitems from heaviest to lightest. First put the heaviest item in the\nlightest box, then the next heaviest item in the lightest box, and so\non. See below for tie-breaking information.\n\n\nThe function returns a list of strings, where each string represents a\nsingle box of all the items that go in it, separated by a single\nspace. In each single box (a string) the space-separated items are listed from heavest to\nlightest.  The list of strings returned is in alphabetical order.\n\n\n\nTo create your return value, first sort the items by weight with\nheaviest first, break ties alphabetically. For example, a\n<em>book</em> with\nweight 2, a <em>doll</em> with weight 1, and a\n<em>car</em> with weight 1 would be\nordered <em>book</em>, <em>car</em>, and <em>doll</em>\nbecause the book is the heaviest and although\ncar and doll weigh the same, car comes before doll\nalphabetically. Process these weighted items in order,\nalways putting the next\nheaviest item in the box that is the lightest. If there is more than\none box that is the lightest, use the first one in your list you're returning.",
    constraints:
      "<ul>\n<li><code>len(items) == len(weights)</code>\n<li><code>n <= len(items)</code>\n<Li> There will be no more than 50 elements in the list parameters.\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\nitems = ['pens', 'mug', 'book']\nweights = [1, 3, 2]\nn = 3\n\nReturns ['book', 'mug', 'pens']\n</code>\n# When we order the items by weight we get <code>['mug', 'book', 'pens']</code>, then we put them in our boxes to get the list <code>['mug', 'book', 'pens']</code>, finally we return <code>['book', 'mug', 'pens']</code> because that is in alphabetical order.\n\n\n<li class=\"example-even\">\n<code>\nitems = ['fan', 'ball', 'book']\nweights = [1, 2, 3]\nn = 2\n\nReturns ['ball fan', 'book']\n</code>\n# When we order the items by weight we get <code>['book', 'ball', 'fan']</code>, then we put them in our boxes to get the list <code>['book', 'ball fan']</code>, finally we return <code>['ball fan', 'book']</code> because that is in alphabetical order.\n\n\n<li class=\"example-odd\">\n<code>\nitems = ['barbie', 'bear', 'car', 'ball']\nweights = [1, 1, 1, 1]\nn = 2\n\nReturns ['ball bear', 'barbie car']\n</code>\n# When we order the items by weight we get <code>['ball', 'barbie', 'bear', 'car']</code>, then we put them in our boxes to get the list <code>['ball bear', 'barbie car']</code>, finally we return <code>['ball bear', 'barbie car']</code> because that is in alphabetical order.\n\n<li class=\"example-even\">\n<code>\nitems = ['picture', 'fan', 'bear', 'candle', 'doll']\nweights = [3, 2, 4, 4, 3]\nn = 4\n\nReturns ['bear', 'candle', 'doll fan', 'picture']\n</code>\n# When we order the items by weight we get <code>['bear', 'candle', 'doll', 'picture', 'fan']</code>, then we put them in our boxes to get the list <code>['bear', 'candle', 'doll fan', 'picture']</code>, finally we return <code>['bear', 'candle', 'doll fan', 'picture']</code> because that is in alphabetical order.\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "moving",
  },
  {
    filename: "NotFirst.py",
    name: "NotFirst",
    description: "",
    lang: "python",
    initial:
      "def sortit(letter, words):\n\t'''\n\tletter is a string of one lowercase alphabetic letter\n\twords is a list of words\n\treturn a sorted list of the unique words that\n\tdo not start with letter\n\t'''\n\t# you write code here",
    problem:
      "Write the function named  <code>sortit</code> that has two\nparameters, <code>letter</code> that is a single lowercase alphabetic\nletter,\nand <code>words</code>, a   list of words.\nThis function returns\na sorted list of the unique words that\ndo not start with letter.",
    constraints:
      "<ul>\n<li> letter is a lowercase letter, one of a-z\n<li> words  is a list of 0 or more words, each word is a String of\none or more lowercase letters from a-z   </li>\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nletter = "s"\nwords = ["one", "two", "three"]\n\nreturns: ["one", "three", "two"]\n\nNone of the words start with "s". Note the words returned are sorted.\n</code>\n\n\n<li class="example-even">\n<code>\nletter = "w"\nwords = ["one", "two", "three", "wait", "one", "two", "three", "go"]\n\nreturns: ["go", "one", "three", "two"]\n\nThe sorted list contains only unique words that do not start with w.\n\n</code>\n\n\n<li class="example-odd">\n<code>\nletter = "e"\nwords = ["duke", "devil"]\n\nreturns: ["devil", "duke"]\n\n</code>\n\n\n\n<li class="example-even">\n<code>\nletter = "d"\nwords = ["duke", "devil"]\n\nreturns: []\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "notfirst",
  },
  {
    filename: "Pancakes.py",
    name: "Pancakes",
    description: "",
    lang: "python",
    initial:
      'def minutesNeeded (numCakes, capacity):\n\t"""\n\treturn integer representing time to cook pancakes\n\tbased on integer parameters as described below\n\t"""',
    problem:
      "You're a short-order cook in a pancake restaurant, so you need to cook\npancakes as fast as possible. You have one pan that can fit\n<code>capacity</code> pancakes at a time. Using this pan you must cook\n<code>numCakes</code> pancakes.  Each pancake must be cooked for five\nminutes on each side, and once a pancake starts cooking on a side it has\nto cook for five minutes on that side. However, you can take a pancake\nout of the pan when you're ready to flip it after five minutes and put\nit back in the pan later to cook it on the other side.\n\nWrite the method, <code>minutesNeeded,</code> that returns the shortest\ntime needed to cook <code>numCakes</code> pancakes in a pan that holds\n<code>capacity</code> pancakes at once. See the examples.",
    constraints:
      "<ul>\n<LI>The integer <code>numCakes</code> is a non-negative number less than 1000\n(i.e., <code>0 &le; numCakes &lt; 1000</code>).\n\n<LI>The integer <code>capacity</code> is a positive number less than 101\n(i.e., <code>1 &le; capacity &lt; 101</code>).\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nnumCakes = 0\ncapacity = 4\n\nReturns: 0\n\n</code>\n\nIt takes no time to cook 0 pancakes.\n\n<li class="example-even">\n<code>\nnumCakes = 2\ncapacity = 2\n\nReturns: 10\n\n</code>\nYou cook both pancakes on one side for five minutes, then flip them over\nand cook each on the other side for another five minutes.\n\n<li class="example-odd">\n<code>\nnumCakes = 3\ncapacity = 2\n\nReturns: 15\n\n</code>\nYou cook pancakes 1 and 2 on one side for five minutes, then you take\npancake 2 out of the pan, flip pancake 1 and start cooking pancake\n3. After 10 minutes, pancake 1 is done so you take it out, pancake 3 can\nbe flipped, and you can put pancake 2 back in the pan (since you removed\nthe first pancake). Total time: 15 minutes.\n</code>\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "pancakes",
  },
  {
    filename: "Pangram.py",
    name: "Pangram",
    description: "",
    lang: "python",
    initial:
      "def getStats(sentence):\n\t'''\n\tsentence (str) - a string with a potential pangram in it\n\t\n\tFor all the letters return a list where value at the kth index is the\n\tnumber of letters that occur k times.\n\t'''\n\treturn []",
    problem:
      "Pangrams are sentences where every letter of the alphabet is used at least once. Some even have each letter appear only once. Implement <code>getStats</code> that takes a sentence and returns a list where the value at the k<sup>th</sup> index is the number of letters that appeared k times, e.g., the\nvalue at index 0 is the number of letters that did not appear at all, index 1 is the number of letters that only appeared once, index 2 is the number of letters that only appeared twice, etc.\n\nDo not count upper and lower case letters as different. And the list should only be as long as needed (it shouldn't end with 0's).",
    constraints:
      "<ul>\n<li>The sentence may have punctuation, which should be ignored.\n<li>There are only 26 letters in the alphabet: abcdefghijklmnopqrstuvwxyz\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\nsentence = 'g dd ee www hhh kkk pppp jjjj'\n\nReturns [18, 1, 2, 3, 2]\n</code>\n\n\n<li class=\"example-even\">\n<code>\nsentence = 'Hello and Goodbye'\n\nReturns [16, 6, 3, 1]\n</code>\n\n\n<li class=\"example-odd\">\n<code>\nsentence = 'Mr. Jock, TV quiz PhD., bags few lynx.'\n\nReturns [0, 26]\n</code>\n\n\n<li class=\"example-even\">\n<code>\nsentence = 'The quick brown fox jumps over the lazy dog.'\n\nReturns [0, 20, 4, 1, 1]\n</code>\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "pangram",
  },
  {
    filename: "ParkingViolations.py",
    name: "ParkingViolations",
    description: "",
    lang: "python",
    initial:
      "def amountOwed(ticket, months):\n\t'''\n\tThe following parameters are input to the function:\n\tticket-the original ticket amount.\n\tmonths-the number of months that the fine is late.\n\t\n\t\n\tThe function should return the current amount owed, which includes\n\tthe parking fee plus all late fees.\n\t'''\n\t# you write code here",
    problem:
      "Campus parking has instituted new policies for late parking violations.\nFor every month that a parking ticket remains unpaid, the penalty is\n5% of the current balance owed (including prior months late penalties,\nif applicable).\n\nCreate a function named <code>amountOwed</code> that has two parameters\nnamed ticket (which is the original ticket amount) and months (which is the\nnumber of months that the fine is late).\n</p>\n\nThis function should return the current amount owed for the parking\nviolation, rounding up to the nearest dollar amount (every penny counts!!).</p>",
    constraints:
      "<ul>\n<li>The original parking fine is between 1 and 200 dollars.\n<li>The number of months a ticket can be late is 1 to 24 months.\n\n\n</ul>",
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\nticket=100\nmonth=2\n\nReturns: 111\n</code>\n# The amount owed in fines is $110.25. However, because campus parking rounds up, the\ntotal amount owed is $111.\n\n\n<li class="example-even">\n<code>\nticket=25\nmonth=15\n\nReturns: 52\n</code>\n\n\n\n<li class="example-odd">\n<code>\nticket=50\nmonth=5\n\nReturns: 64\n</code>\n\n\n\n<li class="example-even">\n<code>\nticket=75\nmonth=6\n\nReturns: 101\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; A. Nicki Washington and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "parkingviolations",
  },
  {
    filename: "PickyEater.py",
    name: "PickyEater",
    description: "",
    lang: "python",
    initial:
      "def dinner(foods, willEat, hunger, meal):\n\t'''\n\tfoods (list of strings) - parallel list with willEat of the foods picky\n\teater is willing to eat.\n\twillEat (list of ints) - parallel list with foods of how much of that food\n\tthe picky eater is willing to eat.\n\thunger (int) - how much food the picky eater needs to eat to be full.\n\tmeal (list of strings) - the list and order of the foods given to the picky\n\teater.\n\t\n\tReturn how much food the picky eater still needs to eat to be full.\n\t'''\n\t\n\t# Your code here\n\treturn 0",
    problem:
      "You are serving dinner to a picky eater. Who has only certain foods they are willing to eat that is in the list <code>foods</code>. They are only willing to eat that food a certain number of times, represented in <code>willEat</code>, which is a parallel list to <code>foods</code>. <code>hunger</code> is how much the picky eater wants to eat and <code>meal</code> is the list and order of foods you will offer the picky eater. Each item in the list <code>meal</code> will reduce their hunger by 1 and whether they are willing to eat it by 1.\n\nReturn how hungry the picky eater will be after the meal. If they have enough food return 0. If they did not have enough food return how much more food they need to eat to be full. The function should never return a negative number. The picky eater cannot become overfull.",
    constraints:
      "<ul>\n<li><code>foods</code> is a list of unique strings\n<li><code>willEat<code> is a list of ints\n<li><code>len(foods) == len(willEat)<code>\n<li>The ith item in <code>foods<code> maps to the ith item in <code>willEat<code>\n<li><code>meal<code> is lists of strings that are also in <code>foods<code>\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\nfoods = ['cheerios', 'cheese']\nwillEat = [5, 2]\nhunger = 5\nmeal = ['cheerios', 'cheese', 'cheerios', 'cheese', 'cheese']\n\nReturns 1\n# The picky eater ate the first four items in the list meal but wasn't willing to eat cheese a third time to become full and no more food was offered afterward. So the function returns 1.\n</code>\n\n\n<li class=\"example-even\">\n<code>\nfoods = ['ice cream', 'chocolate', 'broccoli']\nwillEat = [100, 10, 0]\nhunger = 3\nmeal = ['broccoli', 'ice cream', 'ice cream', 'chocolate', 'ice cream']\n\nReturns 0\n# The picky eater skipped broccoli, ate the next three items in the list meal, and was full. Therefore, we return 0.\n</code>\n\n\n<li class=\"example-odd\">\n<code>\nfoods = ['cheese', 'ham', 'applesauce']\nwillEat = [1, 1, 1]\nhunger = 3\nmeal = ['cheese', 'ham', 'cheese', 'ham']\n\nReturns 1\n# The picky eater ate the first 'cheese' and the first 'ham', but was not willing to eat them a second time to become full and 'applesauce' was never offered. So 1 is returned.\n</code>\n\n\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "pickyeater",
  },
  {
    filename: "Pikachu.py",
    name: "Pikachu",
    description: "",
    lang: "python",
    initial:
      'def check(word):\n\t"""\n\treturn String based on parameter\n\tword, a String\n\t"""\n\t\n\t# you write code here',
    problem:
      'Pikachu is a well-known character in the Pokemon anime series. Pikachu\ncan speak, but only 3 syllables: "pi", "ka", and "chu". Therefore\nPikachu can only pronounce strings that can be created as a\nconcatenation of one or more syllables he can pronounce. For example, he\ncan pronounce the words "pikapi" and "pikachu".\n\n\n\nYou are given a String word. Your task is to check whether Pikachu can\npronounce the string. If the string can be produced by concatenating\ncopies of the strings "pi", "ka", and "chu", return\n<tt>"YES"</tt> (quotes for\nclarity). Otherwise, return <tt>"NO"</tt>.',
    constraints:
      "<ul>\n<li> <code>word</code> contains between 1 and 50 characters, inclusive\n<li> each character of <code>word</code> will be a lower-case letter 'a'-'z'\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nword = "pikapi"\n\nReturns: "YES"\n\n</code>\n"pikapi" = "pi" + "ka" + "pi", so Pikachu can say it.\n\n<li class="example-even">\n<code>\nword = "pipikachu"\n\nReturns: "YES"\n\n</code>\nThis time we have "pipikachu" = "pi" + "pi" + "ka" + "chu", so Pikachu\ncan say it as well.\n\n\n<li class="example-odd">\n<code>\n\nword = "pikaqiu"\n\nReturns: "NO"\n\n</code>\nPikachu can\'t say "pikaqiu" since \'q\' does not appear in "pi", "ka", or\n"chu".\n\n<li class="example-even">\n<code>\nword = "chupikachupipichu"\nReturns: "YES"\n\n</code>\n\n<li class="example-odd">\n<code>\nword = "duke"\nReturns: "NO"\n\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2010, TopCoder, Inc. All rights reserved.",
    formName: "pikachu",
  },
  {
    filename: "PopularEnding.py",
    name: "PopularEnding",
    description: "",
    lang: "python",
    initial:
      "def popular(phrase):\n\t'''\n\tphrase is a string of words\n\tReturn the sorted list of unique words that have the most\n\tpopular 3-character ending. Only consider words of length\n\t3 or more. Duplicate words only count once. Break ties with\n\tthe 3-character ending that comes last in alphabetical order.\n\t'''",
    problem:
      "Write the function named  <code>popular</code> that has one\nparameter, <code>phrase</code> is a string of lowercase words.\nThis function returns\na sorted  list of unique words that have the most popular 3-character\nending. Only consider words of length three or more. Duplicate words only\ncount once. Break ties with\nthe 3-character ending that comes last in alphabetical order.",
    constraints:
      "<ul>\n<li> phrase is a string of one or more words, each word is a String of\none or more lowercase letters from a-z   </li>\n<li> words in phrase are separated by one blank </li>\n <LI> Only consider words of length three or more.  </li>\n <LI>\nIf a word appears more than once in phrase, its ending is only\ncounted once. </li>\n <LI>\nIf there is more than one most-popular ending with the same number of\nwords, break ties by choosing the\nthe 3-character ending that comes last in alphabetical order. </li>\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nphrase = "jingle bells in a single line"\n\nreturns: ["jingle", "single"]\n\nThe 3-char endings are "gle", "lls" and "ine". "gle" occurs twice and the\nothers occur just once. The list of words that end in "gle" are returned\nin sorted order.\n\n</code>\n\n\n<li class="example-even">\n<code>\nphrase = "string wider icing order string wider icing order"\n\nreturns: ["icing", "string"]\n\nThere are two endings: "ing" and "der". Ignoring duplicate words, these\nendings both appear twice. "ing" appears later alphabetically, so a sorted\nlist of unique words that end in "ing" is returned.\n</code>\n\n\n<li class="example-odd">\n<code>\nphrase = "bad bad fat cat"\n\nreturns: ["fat"]\n\nThere are three endings: "bad", "fat", and "cat". Each appear just once,\nand "fat" is the last of the endings in alphabetical order. Thus, words\nthat end in "fat" are returned in sorted order, in this case, just one\nword.\n</code>\n\n\n\n<li class="example-even">\n<code>\nphrase = "a b c d go"\n\nreturns: []\n\nThere are no words with at least three characters.\n\n\n</code>\n\n\n<li class="example-odd">\n<code>\nphrase = "a problit for long loud strong song moonlit and sunlit\nby the gong and slit and split"\n\n\nreturns: ["moonlit", "problit", "slit", "split", "sunlit"]\n\nThe endings are: "lit", "for", "ong", "oud", "and", "the". Of those "lit"\noccurs 5 times, "ong" occurs 4 times. Each of "for", "oud", "and", and\n"the" occur just once (ignore duplicate words).\n</code>\n\n\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "popularending",
  },
  {
    filename: "PortManteau.py",
    name: "PortManteau",
    description: "",
    lang: "python",
    initial:
      'def combine(first,flen,second,slen):\n\t"""\n\treturn string that\'s a portmanteau\n\tof strings first and second\n\tusing flen chars from first\n\tand slen chars from second\n\t"""\n\t\n\t# you write code here\n\treturn ""',
    problem:
      "A <em>portmanteau</em> is a word made by combining parts\nof other words. Examples include <em>brunch</em> (from breakfast\nand lunch), <em>jeggings</em> (from jeans and leggings),\n<em>guesstimate</em> (from guess and estimate) and <em>digerati</em>\n(from digital and literati).\n\nWrite a function <code>combine</code> that returns a portmanteau from\ntwo words, <code>first</code> and <code>second</code> that are\nparameters\nto the function. Combine the first <code>flen</code> characters\nof <codE>first</code> with the last <code>slen</code> characters\nof <code>second</code>. See the examples for details.",
    constraints:
      "<ul>\n<li> <code>first</code> and <code>second</code> will\neach contain between 1 and 250 characters.\n<li> <code>flen</code> will be positive and less than or equal to the\nlength of <code>first</code> </li>\n<li> <code>slen</code> will be positive and less than or equal to the\nlength of <code>second</code>\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nfirst = "brain"\nflen = 4\nsecond = "maniac"\nslen = 4\n</code>\nReturns <code>"brainiac"</code> by combining "brai" and "niac"\n\n<li class="example-even">\n<code>\n\n</code>\n\n<li class="example-odd">\n<code>\nfirst = "stay"\nflen = 4\nsecond = "vacation"\nslen = 6\n</code>\nreturns <code>"staycation"</code>\n\n<li class="example-even">\n<code>\nfirst = "emotion"\nflen = 5\nsecond = "icon"\nslen = 3\n</code>\nreturns <code>"emoticon"</code>\n\n\n<li class="example-odd">\n<code>\nfirst = "frappe"\nflen = 3\nsecond = "cappuccino"\nslen = 8\n</code>\n\nreturns <code>"frappuccino"</code>\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "portmanteau",
  },
  {
    filename: "PositiveID.py",
    name: "PositiveID",
    description: "",
    lang: "python",
    initial:
      'def maximumFacts(suspects):\n\t"""\n\treturn int based on information in\n\tparameter results, a list of strings\n\t"""\n\t\n\t# you write code here',
    problem:
      'You are investigating a robbery, and you are sure the robbery was\ncommitted by one of the suspects you have information on. Each element\nof suspects will contain a number of characteristics of that suspect in\na comma separated list. For example, suppose we had the following list\nof suspects:\n<ul>\n<LI> suspect 0: "blond,tall,skinny"\n<LI> suspect 1: "short,skinny,blond,tattooed"\n<LI> suspect 2: "scarred,bald"\n</UL>\n\nYou may assume that if a characteristic is not on the list for a suspect\nthen that characteristic does not apply - so in this case we can be sure\nthat suspect 0 is not "tattooed" or "bald" or anything else other than\nwhat\'s listed. Therefore, if we knew that the culprit was "tattooed", we\nwould know for sure that suspect 1 is the guilty party. However, if we\nknew that the culprit was "skinny" and "blond" we would still be unsure\nwhether suspect 0 or suspect 1 was the robber.\n\nReturn the maximum number of facts we could know such that the facts:\n\n<ol>\n<LI> Are all consistent with at least one of the suspects.\n<LI> Do not uniquely identify the culprit.\n</ol>\nIn the example above, the value is 2. We could know that the suspect is\n"skinny" and "blond" - but if we knew anything more than that about the\nculprit then we would be able to identify the culprit uniquely (or the\nfacts would no longer be consistent with any of the suspects).',
    constraints:
      "<ul>\n<LI> <code>suspects</code> will contain between 1 and 50 elements, inclusive.\n\n<LI>\tEach element of <code>suspects</code>\nwill contain between 1 and 50 characters, inclusive.\n\n<LI> Elements of <code>suspects</code> will contain only lowercase letters ('a'-'z') and commas (',').\n\n<LI>\tEach element of <code>suspects</code> will not have a comma\n(',') as the first or last character.\n\n<LI>\tEach element of <code>suspects</code> will not contain two adjacent commas.\n\n<LI>\tEach element of <code>suspects</code> will not contain the same characteristic more than once.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n\n["blond,tall,skinny",\n"short,skinny,blond,tattooed",\n"scarred,bald"]\n\nReturns: 2\n</code>\nThe example from the problem statement.\n\n\n<li class="example-even">\n<code>\n["gigantic,fluorescent,loud,male"]\n\nReturns: 0\n</code>\n\nThere\'s only one subject, and he should be easy to find. We cannot know\nany facts without being able to make a positive ID.\n\n\n<li class="example-odd">\n<code>\n["medium,average,nondescript",\n"medium,average,nondescript"]\n\nReturns: 3\n</code>\n\nThere\'s no way to tell these two apart - so we could know all 3 facts\nwithout being able to make an ID.\n\n\n<li class="example-even">\n<code>\n["big,tall,loud,happy,male,scarred,tattooed,dirty",\n"short,male,beard,quiet,happy,tanned,handsome",\n"female,pretty,blond,quiet",\n"somnambulistic",\n"happy,tiny,stout,male,tanned,beard,blond"]\n\nReturns: 4\n\n\n\nExplanation:\n\nHere there are five suspects. Compare each suspect with every other suspect\nto see the maximum number of traits in common between any two.\n\nSuspect 1 compared to suspect 2 have two things in common: "happy"\nand "male".\n\nSuspect 1 compared to suspect 3 have nothing in common.\n\nSuspect 1 compared to suspect 4 have nothing in common.\n\nSuspect 1 compared to suspect 5 have "happy", and "male", 2 things in\ncommon.\n\nSuspect 2 compared to suspect 3 have "quiet" in common, 1 thing\n\nSuspect 2 compared to suspect 4 have nothing in common\n\nSuspect 2 compared to suspect 5 have "male", "beard", "happy", and\n"tanned", 4 things.\n\nSuspect 3 compared to suspect 4 have nothing in common.\n\nSuspect 3 compared to suspect 5 have one thing in common, "blond".\n\nSuspect 4 compared to suspect 5 have nothing in common.\n\nThe largest number of items in common between two suspects is 4, between\nsuspect 2 and 5, so return 4.\n\n\n</code>\n\n\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2006, TopCoder, Inc. All rights reserved.\n<br><br>\nSusan Rodger added an explanation to the fourth example April 2021.",
    formName: "positiveid",
  },
  {
    filename: "ReadQuizScore.py",
    name: "ReadQuizScore",
    description: "",
    lang: "python",
    initial:
      'def grade(total, availablePoints, cutOff):\n\t"""\n\treturn a student\'s reading quiz grade as a float percentage based on\n\tthe integer values in total, availablePoints, and cutOff.\n\t"""\n\t\n\t# you write code here\n\treturn 0.0',
    problem:
      "You are a student in a class with reading quizzes. To help you always know your current reading quiz grade you've decided to write a function that will return the percentage score on your reading quizzes!\n\nAn example syllabus is: \"You will receive full credit for the reading quizzes if you earn 75% of the available points. We calculate your reading quiz score by counting up all of the points you earned and divide by 75% of all the points possible.\"\n\nYour function has three parameters. <code>total</code> is the number of points you received on all of the reading quizzes combined. <code>availablePoints</code> is the total number of points across all of the reading quizzes were worth. <code>cutOff</code> is an integer between 0 and 100 representing the percent of points you need to earn full credit. The function's return value is the percentage score and therefore between 0.0 and 100.0 of type float.",
    constraints:
      "<ul>\n<li>The integer <code>total</code> is greater than or equal to 0\n<li>The integer <code>availablePoints</code> is greater than or equal to 0\n<li>The integer <code>cutOff</code> is between 0 and 100 inclusive\n\n</ul>",
    examples:
      '<ol>\n\n<li class="example-odd">\n<code>\ntotal = 60\navailablePoints = 100\ncutOff = 75\n\nReturns 80.0\n\nIn this case, 75% of the points would be 75. You got 60,\nso your score is 60/75 = 80%\n</code>\n\n\n<li class="example-even">\n<code>\ntotal = 6\navailablePoints = 16\ncutOff = 75\n\nReturns 50.0\n\nIn this case, 75% of the points would be 12 points.\nYou got 6 points, which is 50% of the total points\nyou needed to get.\n</code>\n\n\n<li class="example-odd">\n<code>\ntotal = 81\navailablePoints = 100\ncutOff = 80\n\nReturns 100.0\n\nIn this case, the cutoff is 80, meaning you must get at least 80% of the\npoints.  Since the total number of points available is 100, that means you\nmust get at least 80 points. You got 81 points, which is more than 80% of the\npoints, so you get 100%.\n</code>\n\n\n</ol>',
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.\nExplanations of the examples added by Susan Rodger.',
    formName: "readingscore",
  },
  {
    filename: "RemoveMiddle.py",
    name: "RemoveMiddle",
    description: "",
    lang: "python",
    initial:
      'def shorten(name):\n\t"""\n\treturn the name with the middle name(s) removed.\n\tname has at least one word.\n\t"""\n\t\n\t# you write code here',
    problem:
      "Xie needs to be able to shorten names to remove the middle names if there\nare any.\n\n\nWrite function <code>shorten</code> that given a name returns the name with\nall the middle names removed.",
    constraints:
      "<ul>\n<li> <code>name</code> will have at least one word\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nname = "Barak Hussein Obama"\n\nreturns "Barak Obama"\n\nThe middle name is removed.\n</code>\n\n<li class="example-even">\n<code>\nname = "Prince"\n\nreturns "Prince"\n\nThere is no middle name.\n</code>\n\n<li class="example-odd">\n<code>\nname = "Thomas Narten"\n\nreturns "Thomas Narten"\n\nThere is no middle name.\n</code>\n\n<li class="example-even">\n<code>\nname = "Elizabeth Rosemond Hilton Wilding Todd Fisher Burton Warner Fortensky Taylor"\n\nreturns "Elizabeth Taylor"\n\nAll the middle names are removed.\n\n</code>\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "removemiddle",
  },
  {
    filename: "SandwichBar.py",
    name: "SandwichBar",
    description: "",
    lang: "python",
    initial:
      'def whichOrder(available, orders):\n\t"""\n\treturn zero-based index of first\n\tsandwich in orders, list of strings\n\tthat can be made from ingredients\n\tin available, list of strings\n\t"""\n\t\n\t# you write code here',
    problem:
      "It's time to get something to eat and I've come across a sandwich\nbar. Like most people, I prefer certain types of sandwiches. In fact, I\nkeep a list of the types of sandwiches I like.\n\nThe sandwich bar has certain ingredients available. I will list the\ntypes of sandwiches I like in order of preference and buy the first\nsandwich the bar can make for me. In order for the bar to make a\nsandwich for me, it must include all of the ingredients I desire.\n\nGiven <code>available</code>, a list of Strings/ingredients the\nsandwich bar can use, and a <code>orders</code>, a list of Strings\nthat represent the types of\nsandwiches I like, in order of preference (most preferred first), return\nthe 0-based index of the sandwich I will buy. Each element of\n<code>orders</code> represents one type of sandwich I like as a\nspace-separated list of ingredients in the sandwich. If the bar can make\nno sandwiches I like, return -1.",
    constraints:
      "<ul>\n<li>\t<code>available</code>\nwill contain between 1 and 50 elements, inclusive.\n<li>\tEach element of <code>available</code>\nwill contain between 1 and 50 lowercase letters ('a' - 'z'), inclusive.\n<li> <code>orders</ocde> will contain between 1 and 50 elements, inclusive.\n<li> Each element of <code>orders</code> will\ncontain between 1 and 50 lowercase letters ('a' - 'z') and spaces, inclusive.\n\n<li> Each element of <code>orders</code> will represent a list of\ndesired ingredients separated by single spaces, with no leading or\ntrailing spaces.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n\navailable = [ "ham", "cheese", "mustard" ]\n\norders = [ "ham cheese" ]\n\nReturns: 0\n\n</code>\n\nI only like plain ham and cheese sandwiches, and since both ham and cheese are available, I\'ll take that.\n\n\n<li class="example-even">\n<code>\n\n\navailable = [ "cheese", "mustard", "lettuce" ]\n\norders = [ "cheese ham", "cheese mustard lettuce", "ketchup", "beer" ]\n\nReturns: 1\n\n</code>\nThey\'ve run out of ham, but I\'ll consider other options now.\n\n<li class="example-odd">\n<code>\n\navailable = [ "cheese", "cheese", "cheese", "tomato" ]\n\norders = [ "ham ham ham", "water", "pork", "bread", "cheese tomato cheese", "beef" ]\n\nReturns: 4\n\n</code>\nIgnore any duplicate elements in the lists.\n\n<li class="example-even">\n<code>\n\navailable = [ "foo", "bar", "baz", "gazonk", "quux", "bat", "xyzzy",\n"shme", "hukarz", "grault", "waldo", "bleh" ]\n\norders = [ "kalatehas", "spam eggs", "needle haystack", "bleh blarg", "plugh",\n"the best sandwich in the universe" ]\n\nReturns: -1\n\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2005, TopCoder, Inc. All rights reserved.",
    formName: "sandwichbar",
  },
  {
    filename: "ScoreIt.py",
    name: "ScoreIt",
    description: "",
    lang: "python",
    initial:
      'def maxPoints(toss) :\n\t"""\n\treturn int representing the maximal Yahtzee\n\tscore based on rolls in integer list toss\n\t"""',
    problem:
      "This task is about the scoring in the first phase of the die-game\nYahtzee, where five dice are used. The score is determined by the values\non the upward die faces after a roll. The player gets to choose a value,\nand all dice that show the chosen value are considered active. The score\nis simply the sum of values on active dice.\n\n\nSay, for instance, that a player ends up with the die faces showing 2,\n2, 3, 5 and 4. Choosing the value two makes the dice showing 2 active\nand yields a score of 2 + 2 = 4, while choosing 5 makes the one die\nshowing 5 active, yielding a score of 5.\n\n\nThe method has one parameter <code>toss</code>, a five-element integer\nlist, where each element represents the upward face of a die. Return\nthe maximum possible score with these values.",
    constraints:
      "<ul>\n<LI>\n<code>toss</code> will contain exactly 5 elements.\n\n<LI>\nEach element of <code>toss</code> will be between 1 and 6, inclusive.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n\n[ 2, 2, 3, 5, 4 ]\n\nReturns: 5\n\n</code>\nThe example from the text.\n\n<li class="example-even">\n<code>\n\n[ 6, 4, 1, 1, 3 ]\n\nReturns: 6\n\n</code>\nSelecting 1 as active yields 1 + 1 = 2, selecting 3 yields 3, selecting\n4 yields 4 and selecting 6 yields 6, which is the maximum number of\npoints.\n\n<li class="example-odd">\n<code>\n\n[ 5, 3, 5, 3, 3 ]\n\nReturns: 10\n\n</code>\nTwo 5\'s is better than three 3\'s.\n\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. (c)2002, TopCoder, Inc. All rights reserved.",
    formName: "yahtzee",
  },
  {
    filename: "SecretCode.py",
    name: "SecretCode",
    description: "",
    lang: "python",
    initial:
      "def decrypt(message, numbers):\n\t'''\n\tmessage (string) - regular message with 1 or more words\n\tnumbers (list of ints) - list of positive and negative integers\n\t\n\tReturn the secret message hidden in message using the list numbers.\n\t'''\n\treturn ''",
    problem:
      "Write the function <code>decrypt</code> that finds a secret message. It does this by building a string from the words in the string <code>message</code> and a list of positive and negative integers in the list <code>numbers</code>. Build the secret message by indexing into <code>message</code>'s kth word using the kth number in <code>numbers</code>.\n\n\nIf the number cannot index into the word, then do not use that word as part of the secret message. A number is either positive or negative and cannot index into the word if it is >= len(word) or < -1 * len(word).",
    constraints:
      "<ul>\n<li>There is at least one word in <code>message</code>.\n<li>The variable <code>numbers</code> is a list of positive and negative integers and will be the same length as the number of words in message.\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\nmessage = \"the great and terrible monster\"\nnumbers = [1,2,0,2,4]\n\nReturns 'heart'\n</code>\n\n\n<li class=\"example-even\">\n<code>\nmessage = 'roses are red violets are blue'\nnumbers = [0,0,0,-9,3,-1]\n\nReturns 'rare'\n</code>\n\n\n<li class=\"example-odd\">\n<code>\nmessage = 'Hello, it looks as if the bear symbol is all over campus. Why do they like the bear symbol, George?'\nnumbers = [0, 0, 10, -4, 4, 0, 3, 4, 5, -4, -10, 4, 5, -6, -7, 6, 4, 0, 5, 1]\n\nReturns 'Hitrouble'\n# This is \"Hi trouble\" Notice the secret message will have no spaces.\n</code>\n\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "secretcode",
  },
  {
    filename: "SentenceLength.py",
    name: "SentenceLength",
    description: "",
    lang: "python",
    initial:
      'def average(sentenceList):\n\t"""\n\treturns the average sentence length\n\tof all the sentences in sentenceList, a\n\tlist of white-space delimited strings.\n\t"""\n\t\n\t# you write code here\n\treturn 0.0',
    problem:
      "As part of analyzing readability you've been asked to compute\nthe average sentence length of a list of sentences. Each\nsentence is a a white-space delimited string of words. The length\nof a sentence is the number of words in it.\n\nSee the examples for details.",
    constraints:
      "<ul>\n<li> <code>sentenceList</code> will have between\n1 and 50 strings in it, inclusive of 1 and 50.\n<li> Each string in <code>sentenceList</code> will\ncontain between 1 and 50 words, words delimited by\nwhitespace.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nsentenceList = ["the", "cat", "ate", "the", "dog"]\n\nreturns 1.0\n\n</code>\nThere are five sentences, each is one word long, average is 1.0.\n\n<li class="example-even">\n<code>\nsentenceList = ["the cat ate", "the dog"]\n\nreturns 2.5\n\n</code>\nThere are two sentences. One contains three words, the other\ncontains two words. The average is 2.5.\n\n<li class="example-odd">\n<code>\nsentenceList = ["the", "only way", "we can get", "all green is to", "fail"]\n\nreturns 2.2\n\n</code>\nThere are five sentences of length 1, 2, 3, 4, 1.\n\n\n\n<li class="example-even">\n<code>\nsentenceList = ["four score", "and seven years ago", "things were different"]\n\nreturns 3.0\n\n</code>\nThere are three sentences of lengths 2, 4, and 3 (in order that they\nappear\nin <code>sentenceList</code> the average is 9/3 or 3.0\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "sentencelength",
  },
  {
    filename: "SortByFreqs.py",
    name: "SortByFreqs",
    description: "",
    lang: "python",
    initial:
      'def sort(data):\n\t"""\n\treturn list of strings based on\n\tthe list of strings in parameter data\n\t"""',
    problem:
      'The frequency with which data occurs is sometimes an important\nstatistic.  In this problem you are given\na list of strings and must determine how frequently the strings\noccur. Return a list of strings that is sorted (ordered) by\nfrequency. The first element of the returned list is the most\nfrequently occurring string, the last element is the least frequently\noccurring. Ties are broken by listing strings in\nlexicographic/alphabetical order. The returned list contains one\noccurrence of each\nunique string from the list parameter.\n\n\n\nConsider these strings (quotes for clarity, they\'re not part of the strings).\n<code>\n\n["apple", "pear", "cherry", "apple", "pear", "apple", "banana"]\n\n</code>\nThe list returned is:\n<code>\n[ "apple", "pear", "banana", "cherry" ]\n</code>\nsince the most frequently occurring string is\n<code>"apple"</code> which occurs 3 times; the string\n<code>"pear"</code>\noccurs twice and the other strings each occur once so they are\nreturned in alphabetical order.',
    constraints:
      "<ul>\n<LI> <code>data</code> will contain at most 500 elements\n<LI> each element of <code>data</code> will contain at most 50 characters,\nall characters are lowercase.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n\ndata = ["apple", "pear", "cherry", "apple", "pear", "apple", "banana"]\n\nReturns: ["apple", "pear", "banana", "cherry" ]\n</code>\n\nThis is the example given above.\n\n<li class="example-even">\n<code>\ndata = ["a","b","c",d"]\n\nReturns: ["a","b","c",d"]\n</code>\n\n<li class="example-odd">\n<code>\ndata = ["d","c","b","a"]\n\nReturns: ["a","b","c",d"]\n\n</code>\n\n<li class="example-even">\n<code>\n\ndata = ["a","a","a"]\n\nReturns ["a"]\n\n</code>\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "sortbyfreqs",
  },
  {
    filename: "SortCount.py",
    name: "SortCount",
    description: "",
    lang: "python",
    initial:
      "def occurrences(letter, words):\n\t'''\n\tletter is a string of one lowercase alphabetic letter\n\twords is a list of words\n\treturn a sorted list of the unique words by the number of times\n\tletter occurs in each word. Break ties alphabetically.\n\t'''",
    problem:
      "Write the function named  <code>occurrences</code> that has two\nparameters, <code>letter</code> that is a single lowercase alphabetic\nletter,\nand <code>words</code>, a   list of words.\nThis function returns\na sorted list of the unique words in order based on the number of\noccurrence of <code> letter</code>. Ties should be broken alphabetically.",
    constraints:
      "<ul>\n<li> letter is a lowercase letter, one of a-z\n<li> words  is a list of 0 or more words, each word is a String of\none or more lowercase letters from a-z   </li>\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nletter = "e"\nwords = ["one", "two", "three"]\n\nreturns: ["two", "one", "three"]\n\n"two" is first as it has no \'e\', "one" is next as it has one \'e\', and\n"three" is last as it has two \'e\'s.\n</code>\n\n\n<li class="example-even">\n<code>\nletter = "o"\nwords = ["one", "two", "three"]\n\nreturns: ["three", "one", "two"]\n\n"three" is first as it has no "o". Both "one" and "two" have one "o", so\nthey are sorted alphabetically.\n\n</code>\n\n\n<li class="example-odd">\n<code>\nletter = "t"\nwords = ["one", "two", "three", "wait", "one", "two", "three", "go"]\n\nreturns: ["go", "one", "three", "two", "wait"]\n\nBoth "go" and "one" have no "t", they are sorted and come first. The rest of\nthe words all have one "t", they are sorted and come next.\n\n</code>\n\n\n\n<li class="example-even">\n<code>\nletter = "r"\nwords = ["plum", "apple", "lemon", "banana", "kiwi", "apricot", "blueberry", "pear"]\n\nreturns: ["apple", "banana", "kiwi", "lemon", "plum", "apricot", "pear", "blueberry"]\n\nThe words "apricot" and "pear" each have one "r", and "blueberry" has two\n"r"s. The other words come first as they do not have any \'r\'s, followed by\n\'apricot\' and  \'pear\', followed by \'blueberry\'.\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "sortcount",
  },
  {
    filename: "SortWords.py",
    name: "SortWords",
    description: "",
    lang: "python",
    initial:
      "def sortReverse(phrase):\n\t'''\n\tThe string parameter phrase is a string of one or\n\tmore words or combinations of words, numbers, and\n\tsymbols.\n\t\n\tThe function should return a reverse sorted list of the\n\twords in the string.\n\t'''\n\t# you write code here",
    problem:
      "Given a string, we want to sort the words(in reverse order). Create the function named\n<code>sortReverse</code> that has one parameter named phrase, which is a string.\n</p>\n\nThis function returns a sorted list of the words from the string in reverse order.</p>",
    constraints:
      "<ul>\n<li>The string parameter phrase is not empty.\n<li>Words that are repeated in the string should be counted each time they appear.\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\nphrase=\"This is a tester string.\"\n\nReturns: ['tester', 'string.', 'is', 'a', 'This']\n</code>\n# \"tester\" is the largest string in the list. \"This\" is the smallest string in the list lexicographically.\n\n\n<li class=\"example-even\">\n<code>\nphrase=\"This is A tester is string.\"\n\nReturns: ['tester', 'string.', 'is', 'is', 'This', 'A']\n</code>\n# \"tester\" is the largest string in the list. \"A\" is the smallest string. \"is\" appears twice in the list.\n\n\n<li class=\"example-odd\">\n<code>\nphrase=\"What time is it?\"\n\nReturns: ['time', 'it?', 'is', 'What']\n</code>\n\n\n\n<li class=\"example-even\">\n<code>\nphrase=\"ARE YOU OLD ENOUGH?\"\n\nReturns:['YOU', 'OLD', 'ENOUGH?', 'ARE']\n</code>\n\n\n\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; A. Nicki Washington and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "sortwords",
  },
  {
    filename: "SortedFreqs.py",
    name: "SortedFreqs",
    description: "",
    lang: "python",
    initial:
      'def freqs(data):\n\t"""\n\treturn list of int values corresponding\n\tto frequencies of strings in data, a list\n\tof strings\n\t"""',
    problem:
      'The frequency with which data occurs is sometimes\nan important statistic.  In this problem you\'ll determine\nhow frequently strings occur and return a list representing\nthe frequencies of each different/unique string. The list returned\ncontains as many frequencies as there are unique strings.\nThe returned frequencies represent an alphabetic/lexicographic ordering\nof the unique words, so the first frequency is how many times the\nalphabetically first word occurs and the last frequency is the\nnumber of times the alphabetically last word occurs.\n\nConsider these strings (quotes for clarity, they\'re not part of the strings).\n<code>\n\n["apple", "pear", "cherry", "apple", "cherry", "pear", "apple", "banana"]\n\n</code>\nThe list returned is <code>[3,1,2,2]</code> since the alphabetically\nfirst word is <code>"apple"</code> which occurs 3 times; the second word\nalphabetically is <code>"banana"</code> which occurs once, and the other\nwords each occur twice.',
    constraints:
      "<ul>\n<LI> <code>data</code> will contain at most 50 elements\n\n<LI> each element of <code>data</code> will contain at most 50 characters,\nall characters are lowercase.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n\ndata = ["apple", "pear", "cherry", "apple", "cherry", "pear", "apple", "banana"]\n\nReturns: [3,1,2,2]\n</code>\nThis is the example given above.\n\n<li class="example-even">\n<code>\n\ndata = ["a","b","c",d"]\n\nReturns [1,1,1,1]\n\n</code>\n\n<li class="example-odd">\n<code>\n\ndata = ["a","a","a"]\n\nReturns [3]\n\n</code>\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "sortedfreqs",
  },
  {
    filename: "SpecificWords.py",
    name: "SpecificWords",
    description: "",
    lang: "python",
    initial:
      "def countwords(phrase, ending, item):\n\t'''\n\tGiven the three string parameters\n\tphrase, ending and item,\n\treturn the number of words in phrase\n\tthat end in ending and do not contain\n\titem as part of their word.\n\t'''\n\t\n\t# you write code here",
    problem:
      "Given a phrase, your task is to determine the number of words that end\nin ending and do not contain item as part of their word.\n\n\n\nWrite function <em>countwords </em> that has three string parameters <code>phrase</code>,\n<code>ending</code> and\n<code>item</code>.  This function returns an integer representing the\nnumber of words in phrase that end in ending and  does not contain item as\npart of their word.\nYou can assume all words are lowercase.",
    constraints:
      "<ul>\n<li> phrase, ending and item are all of length 1 or more characters  </li>\n<li> ending and item are only lowercase alphabetic characters </li>\n<li> ending and item are different words </li>\n<li> phrase is only lowercase alphabetic characters or\nblanks. It starts and ends with an alphabetic character, and if there\nare blanks, there cannot be two adjacent blanks.    </li>\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nphrase =  "swim trim shop drop swap rim"\nending = "im"\nitem = "sh"\n\n\nreturns: 3\nswim, trim and rim all end in "im", none of them have "sh" in them.\n</code>\n\n\n<li class="example-even">\n<code>\nphrase =  "swim trim shop drop swap rim"\nending = "im"\nitem = "sw"\n\nreturns: 2\n"trim" and "rim" all end in "im", and do not have "sw" in it. "swim" ends in\n"im", but has "sw" as part of it.\n</code>\n\n\n<li class="example-odd">\n<code>\nphrase = "duck"\nending = "uck"\nitem = "d"\n\n\nreturns: 0\n</code>\n\n\n\n<li class="example-even">\n<code>\n\nphrase =  "i am lovely crazy silently happily smilingly funny"\nending = "ly"\nitem = "book"\n\n\nreturns: 4\nlovely, silently, happily, and smilingly all end in "ly" and do not have\n"book" in them.\n</code>\n\n\n<li class="example-odd">\n<code>\n\n\nphrase = "book booklet redbook beautiful butterfly"\nending = "ly"\nitem = "book"\n\n\n\nreturns: 1\n\n</code>\n\n\n<li class="example-even">\n<code>\n\nphrase =  "long song long song some belong and some do not belong"\nending = "ong"\nitem = "son"\n\nreturns: 4\nThere are six words that end in "ong": long, song, long, song, belong,\nand belong. Two of those words have "son" in them: song and song,\nso those two do not count.\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "specificwords",
  },
  {
    filename: "StringSearch.py",
    name: "StringSearch",
    description: "",
    lang: "python",
    initial:
      "def findString(input):\n\t'''\n\tThe string parameter input is comprised of one or\n\tmore words or combinations of words, numbers, and\n\tsymbols.\n\t\n\tThe function should return the number of words in\n\tthe string that end with a vowel.\n\t'''\n\t# you write code here",
    problem:
      "Given a string, we want to identify all the words contained in the\nstring that end with a vowel. Create the function named <code>findString</code>\nthat has one parameter named input, which is a string.\n</p>\n\nThis function returns the number of words in the string that contain end with a vowel.</p>",
    constraints:
      "<ul>\n<li>The string parameter <code>input</code> cannot be empty.\n<li>Words in the original string input that end with a vowel, but also are followed by a symbol\n(e.g., '.' or ',' or ':' or ';' should not be included in the final count.\n<li>Words that are repeated in the string should be counted each time they appear.\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\ninput=\"Hey you.\"\n\nReturns: 0\n</code>\n# The last word is 'you.'. However, because a '.' follows the 'u', then it is not the last character in the\nsubstring. Thus, it is not included, and the count is 0.\n\n\n<li class=\"example-even\">\n<code>\ninput=\"Hey you\"\n\nReturns: 1\n</code>\n# The last word is 'you' and it is the only substring that ends in a vowel.\n\n\n<li class=\"example-odd\">\n<code>\ninput=\"Are you there? I can't hear you\"\n\nReturns: 4\n</code>\n# 'there?' is not included because '?'  is the last character in the substring. Also, 'you'\nappears twice in the sentence, and is thus counted twice.\n\n\n<li class=\"example-even\">\n<code>\ninput=\"cat $13ha FIVE yellow submarine\"\n\nReturns: 3\n</code>\n# '$13ha' is included in the  count because the substring ends in a vowel.\n\n\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; A. Nicki Washington and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "stringsearch",
  },
  {
    filename: "SubstringFreq.py",
    name: "SubstringFreq",
    description: "",
    lang: "python",
    initial:
      "def frequency(text, n):\n\t'''\n\ttext (string) - A string with at least one word\n\tn (int) - the length of the substring\n\t\n\tCounts the appearance of each substring in text and returns the most frequent ones as a list.\n\t'''\n\treturn []",
    problem:
      "Considering all substrings of length <code>n</code> within each word separated by whitespace in <code>text</code>, return an alphabetically sorted list of all the most popular substrings.",
    constraints:
      "<ul>\n<li><code>n</code> is > 0\n<li><code>text</code> is a string with at least one word of length <code>n</code>\n</ul>",
    examples:
      "<ol>\n\n<li class=\"example-odd\">\n<code>\ntext = 'roses are red'\nn = 2\n\nReturns ['re']\n</code>\n\n\n<li class=\"example-odd\">\n<code>\ntext = 'peter piper picked'\nn = 1\n\nReturns ['e', 'p']\n</code>\n\n\n<li class=\"example-even\">\n<code>\ntext = 'the great'\nn = 3\n\nReturns ['eat', 'gre', 'rea', 'the']\n# All the substrings of length 3 happened equally, notice there is no whitespace in any of these substrings\n</code>\n</ol>",
    copyright:
      '<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">\n<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a>\n<br/>\nThis work is copyright &copy; Kristin Stephens-Martinez and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "substringfreq",
  },
  {
    filename: "TeamSplit.py",
    name: "TeamSplit",
    description: "",
    lang: "python",
    initial:
      'def difference(strengths):\n\t"""\n\treturn int based on int list parameter strengths\n\t"""\n\t\n\t# you write code here',
    problem:
      "You want to split some people into two teams to play a game. In order to\nmake the split, you first designate two team captains who take alternate\nturns selecting players for their teams. During each turn, the captain\nselects a single player for his team. Since each captain wants to make\nthe strongest possible team, he will always select the best available\nplayer. The players have strengths, which are given in int list parameter\n<code>strengths</code>, where higher numbers indicate better players. After all the\nplayers have been selected, the team strength is computed as the sum of\nthe strengths of the players on that team.\n\nFor example, if <code>strengths</code>=[5,7,8,4,2], then the first captain selects\nthe player with strength 8 for his team, the second captain gets the\nplayer with strength 7, the first gets the one with strength 5, the\nsecond the one with strength 4, and the last one (strength 2) goes to\nthe first team. The first team now has a total strength 8+5+2=15, and\nthe second team has strength 7+4=11.\n\nReturn the absolute strength difference between the two teams. For the\nexample above you should return 4 (=15-11).",
    constraints:
      "<ul>\n<li>\n<code>strengths</code> will have between 1 and 50 elements, inclusive.\n\n<li>\nEach element of <codE>strengths</code> will be between 1 and 1000, inclusive.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nstrengths = [5,7,8,4,2]\n\nReturns: 4\n\n</code>\nThe example from the problem statement.\n\n<li class="example-even">\n<code>\nstrengths = [100]\n\nReturns: 100\n\n</code>\nA boring game with only one player. The second team has strength 0 (no\nplayers).\n\n<li class="example-odd">\n<code>\nstrengths = [1000,1000]\n\nReturns: 0\n\n</code>\nBoth teams with equal strength.\n\n<li class="example-even">\n<code>\nstrengths = [9,8,7,6]\n\nReturns: 2\n</code>\n\n<li class="example-odd">\n<code>\nstrengths = [1,5,10,1,5,10]\n\nReturns: 0\n</code>\n\n<li class="example-even">\n<code>\nstrengths = [824, 581, 9, 776, 149, 493, 531, 558, 995, 637,\n394, 526, 986, 548, 344, 509, 319,  37, 790, 491,\n479,  34, 776, 321, 258, 851, 711, 365, 763, 355,\n386, 877, 596,  96, 151, 166, 558, 109, 874, 959,\n845, 181, 976, 335, 930,  22,  78, 120, 907, 584]\n\nReturns: 478\n\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2010, TopCoder, Inc. All rights reserved.",
    formName: "teamsplit",
  },
  {
    filename: "Thesaurus.py",
    name: "Thesaurus",
    description: "",
    lang: "python",
    initial:
      'def edit(entry) :\n\t"""\n\tReturn list of String values based on\n\tentry (list of Strings) as\n\tdescribed below\n\t"""\n\t\n\t# you write code here',
    problem:
      "An entry in a Thesaurus is a list of words that are all synonyms. Each\nentry contains no duplicates within it. It is possible that two entries\nmight have some common words, but the editors (who are somewhat cheap)\nhave decided that if any two entries have 2 or more words in common then\nthey should be combined into a single entry.\n\n\nThis editing process may produce new entries which can be combined. The\nfinal Thesaurus must contain no pair of entries that have 2 or more\nwords in common. Of course, each entry must contain no duplicates.\n\n\nCreate a file Thesaurus.py that contains a method edit that is passed\n<code>entry</code> (a list of String values),\nthe entries in the original Thesaurus. The method\nreturns the edited Thesaurus as a list of Strings. Each element of entry has no\nleading or trailing spaces and has its words separated by a single\nspace. Each element of the return should also have no leading or\ntrailing spaces and have its words separated by a single space. In\naddition, the words within each element of the return must be in\nalphabetical order, and the elements in the return must appear in\nalphabetical order.",
    constraints:
      "<ul>\n<LI> entry will contain between 1 and 50 elements inclusive.\n\n<LI> Each element of entry will contain between 1 and 50 characters inclusive.\n\n<LI> Each element of entry will consist of 1 or more \"words\" separated\nby single spaces.\n\n<LI> Each element of entry will contain no leading or trailing spaces.\n\n<LI> Each \"word\" will consist of 1 or more lowercase letters 'a'-'z'\n\n<LI> No element of entry will contain two identical words.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n["ape monkey wrench", "wrench twist strain"]\n\nReturns: [ "ape monkey wrench",  "strain twist wrench" ]\n</code>\nThese two entries have only one common word so they cannot be\ncombined. After rearranging the words within each entry to put the words\ninto alphabetical order, the first entry is first alphabetically.\n\n<li class="example-even">\n<code>\n["ape monkey wrench", "wrench twist strain", "monkey twist frugue"]\n\nReturns: [ "ape monkey wrench",  "frugue monkey twist",  "strain twist wrench" ]\n</code>\nNo entries could be combined, but two had to be arranged, and the order\nwas changed.\n\n<li class="example-odd">\n<code>\n["ape monkey wrench", "wrench twist strain", "monkey twist frugue strain"]\n\nReturns: [ "ape frugue monkey strain twist wrench" ]\n</code>\nThe first two entries could not be combined, but the last two\ncould. After they were combined, the first entry shared both "wrench"\nand "monkey" with the new combined entry, so we ended up with just one\nentry.\n\n\n<li class="example-even">\n<code>\n["point run score","point dot","cut run tear score","cut valley","cute pretty"]\n\nReturns: [ "cut point run score tear",  "cut valley",  "cute pretty",  "dot point" ]\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. (c)2004, TopCoder, Inc. All rights reserved.</em>",
    formName: "thesaurus",
  },
  {
    filename: "TotalWeight.py",
    name: "TotalWeight",
    description: "",
    lang: "python",
    initial:
      'def weight3(ab,ac,bc):\n\t"""\n\treturn float indicating\n\tthe total amount of weight for objects a, b and c.\n\tYou are given the combined weight of a and b\n\ttogether as parameter ab, the combined weight of\n\ta and c together as parameter ac,\n\tand the weight of b and c together with parameter bc.\n\t"""\n\t\n\t# you write code here',
    problem:
      "Given three objects, a, b and c, we can only weigh two of them at a\ntime. You want to determine what the weight of all three of them is.\n\nWrite function <code>weight3</code> that is given the weight of the pairs\nof objects a and b together (parameter ab), a and c together (parameter\nac),\nand b and c together (parameter bc), and returns the total weight\nof all three objects.",
    constraints:
      "<ul>\n<li> <code>ab, ac</code>, and <code>bc</code> will be greater than zero.\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nab = 10\nac = 20\nbc = 24\n\nreturns 27.0\n\n</code>\na must weigh 3, b must weigh 7, and c must weigh 17, so the total weight is 27.\n\n<li class="example-even">\n<code>\n\nab = 1.5\nac = 2.5\nbc = 3\n\nreturns 3.5\n\n</code>\na must weigh .5, b must weigh 1, and c must weigh 2, so the total weight is 3.5.\n\n\n<li class="example-odd">\n<code>\n\nab = 200\nac = 300\nbc = 200\n\nreturns 350.0\n\n</code>\na must weigh 150, b must weigh 50, and c must weigh 150, so the total weight is 350.\n\n\n<li class="example-even">\n<code>\nab = 60\nac = 75\nbc = 85\n\nreturns 110.0\n</code>\na must weigh 25, b must weigh 35, and c must weigh 50, so the total weight is 110\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "totalweight",
  },
  {
    filename: "TrophyShelf.py",
    name: "TrophyShelf",
    description: "",
    lang: "python",
    initial:
      'def countVisible(trophies):\n\t"""\n\treturn two-element int list\n\tbased on trophies, an int list\n\t"""\n\t\n\t# you write code here',
    problem:
      "You have several trophies sitting on a shelf in a straight line. Their\nheights are given in a list of int values, <code>trophies</code>, from left to right. The shelf is\npositioned so that whenever people enter your room, they see it directly\nfrom the left side. In other words, the leftmost trophy is completely\nvisible to the viewer, the next trophy in line is directly behind it,\nand so on.\n\n\n\nUnfortunately, tall trophies near the left side of the shelf might block\nthe view of other trophies. A trophy is visible only if every trophy in\nfront of it (from the viewer's perspective) is strictly shorter than it\nis. You wonder if rotating the shelf 180 degrees would increase the\nnumber of visible trophies.\n\n\n\nReturn a int list containing exactly two elements. The first element\nshould be the number of trophies visible when viewing the shelf directly\nfrom the left side, and the second element should be the number of\ntrophies visible when viewing the shelf directly from the right side.",
    constraints:
      "<ul>\n<li> <code>trophies</code> contains between 1 and 50 elements, inclusive\n<li> Each element of <code>trophies</code> will be between 1 and 100,\ninclusive\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\ntrophies = [1,2,3,4,5]\n\nReturns: [5, 1]\n\n</code>\nWhen viewed from the left, each trophy is taller than all the trophies\nin front of it. However, when viewed from the right, the first trophy\nblocks the view of all the other trophies.\n\n\n<li class="example-even">\n<code>\ntrophies = [5,5,5,5]\n\nReturns: [1,1]\n\n</code>\nSince all trophies have the same height, only the first is visible when\nviewed from each direction.\n\n<li class="example-odd">\n<code>\ntrophies = [1,2,5,2,1]\n\nReturns: [3, 3]\n\n</code>\nThis trophy shelf is symmetric.\n\n<li class="example-even">\n<code>\ntrophies = [1,4,2,5,3,7,1]\n\nReturns: [4,2]\n\n</code>\n\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2010, TopCoder, Inc. All rights reserved.",
    formName: "trophyshelf",
  },
  {
    filename: "TxMsg.py",
    name: "TxMsg",
    description: "",
    lang: "python",
    initial:
      'def getMessage(original):\n\t"""\n\treturn String that is \'textized\' version\n\tof String parameter original\n\t"""\n\t\n\t# you write code here',
    problem:
      "Strange abbreviations are often used to write text messages on\nuncomfortable mobile devices. One particular strategy for encoding texts\ncomposed of alphabetic characters and spaces is the following:\n\n<ul>\n<li> Spaces are maintained, and each word is encoded individually. A word is\na consecutive string of alphabetic characters.\n<li>\nIf the word is composed only of vowels, it is written exactly as in the\noriginal message.\n<li>\nIf the word has at least one consonant, write only the consonants that\ndo not have another consonant immediately before them. Do not\nwrite any vowels.\n<li>\nThe letters considered vowels in these rules are 'a', 'e', 'i', 'o' and\n'u'. All other letters are considered consonants.\n</ul>\n\n\nFor instance, \"ps i love u\" would be abbreviated as \"p i lv u\" while\n\"please please me\" would be abbreviated as \"ps ps m\".  You will be given\nthe original message in the string\nparameter <code>original</code>. Return a string with the\nmessage abbreviated using the described strategy.",
    constraints:
      "<ul>\n<li> <code>original</code> will contain between 1 and 50 characters, inclusive\n<li> Each character of <code>original</code> will be a lower case\nletter 'a'-'z' or a space.\n\n<li>  There will not be two consecutive spaces\nin <code>original</code>.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n"text message"\n\nReturns "tx msg"\n</code>\n\n<li class="example-even">\n<code>\n"ps i love u"\n\nReturns: "p i lv u"\n</code>\n\n<li class="example-odd">\n<code>\n"please please me"\n\nReturns: "ps ps m"\n</code>\n\n<li class="example-even">\n<code>\n"back to the ussr"\n\nReturns "bc t t s"\n</code>\n\n<li class="example-odd">\n<code>\n"aeiou bcdfghjklmnpqrstvwxyz"\n\nReturns: "aeiou b"\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2010, TopCoder, Inc. All rights reserved.",
    formName: "txmsg",
  },
  {
    filename: "VenmoTracker.py",
    name: "VenmoTracker",
    description: "",
    lang: "python",
    initial:
      'def networth(transactions):\n\t"""\n\treturn list of strings based on transactions,\n\twhich is also a list of strings\n\t"""\n\t\n\t# you write code here\n\treturn []',
    problem:
      'You\'ve been asked to help manage reports on how\noften people spend money using Venmo and whether\nthey receive more money than they pay out. The input\nto your program is a list of transactions from Venmo.\nEach transaction has the same form:\n<code>"from:to:amount"</code> where <em>from</em> is\nthe name of the person paying <em>amount</em> dollars\nto the person whose name is <em>to</em>. The value\nof <em>amount</em> will be a valid float\n<b>with at most\ntwo decimal places.</b>\n\nReturn a list of strings that has each person who appears in\nany transaction with the net cash flow through Venmo that\nperson has received. Every cent paid by the person to\nsomeone else is a pay-out and every cent received by\na person is a pay-in. The difference between pay-out and\npay-in is the cash flow received. This will be negative for\neach person who pays out more than they get via pay-in. See the examples\nfor details.\n\nThe list returned should be sorted by name. Strings in the list\nreturned are in the format "name:netflow" where the netflow\nis obtained by using <code>str(val)</code> where val\nis a float representing the net cash flow for that person.\n\n<b>Store money as <code>int</code> values, multiplying by 100\nand dividing by 100 as needed for processing input and output,\nrespectively.</b>',
    constraints:
      "<ul>\n<li>All entries in <code>transactions</code> will be in the correct\nformat, all characters are lower case letters and the amount\nis a valid float with at most two decimal values.</li>\n<li> There will be at most 50 elements of <code>transactions</code></li>\n<li>Each amount in <code>transactions</code> will be greater than 0\nand less than 1000.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\ntransactions: ["owen:susan:10", "owen:robert:10", "owen:drew:10"]\n\nreturns [\'drew:10.0\', \'owen:-30.0\', \'robert:10.0\', \'susan:10.0\']\n</code>\nOwen pays everyone.\n\n<li class="example-even">\n<code>\ntransactions: ["fred:ricky:50", "ricky:fred:20", "fred:ethel:100", "ethel:fred:150.35"]\n\nreturns: [\'ethel:-50.35\', \'fred:20.35\', \'ricky:30.0\']\n</code>\nEthel is out $50.35 after taking in $100, but paying out $150.35. Fred\ngets money from two people, but pays ricky $50. Ricky\npays out $20 and takes in $50, so his  cashflow  in is $30.\n\n<li class="example-odd">\n<code>\ntransactions = ["adam:eve:123"]\n\nreturns [\'adam:-123.0\', \'eve:123.0\']\n</code>\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Owen Astrachan and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "networth",
  },
  {
    filename: "VoteRigging.py",
    name: "VoteRigging",
    description: "",
    lang: "python",
    initial:
      'def minimumVotes(votes):\n\t"""\n\treturns minimum number of votes(int) to change\n\tusing values in votes (integer list)\n\t"""',
    problem:
      "You have used your secret mind-reading device to find out how every\nvoter will vote in the next election. Your mind-reading device also\nrevealed to you that all the voters are prepared to change their vote if\nyou pay them enough.\n\nThe <code>i</code><sup>th</sup> element of <code>votes</code> (list of\nintegers) is the number of people who were originally planning to vote\nfor candidate <code>i</code>. Return the minimum number of votes that\nyou must change to ensure that candidate 0 (your favorite) will have\nmore votes than any other candidate.",
    constraints:
      "<ul>\n<LI> <code>votes</code> will contain between 1 and 50 elements,\ninclusive.\n<LI> Each element of <code>votes</code> will be between\n1 and 100, inclusive.\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\n\n[5, 7, 7]\n\nReturns: 2\n\n</code>\nBuying one vote from each of the other two candidates leaves candidate 0\nwith 7 votes and the others with 6 each.\n\n<li class="example-even">\n<code>\n\n[10, 10, 10, 10]\n\nReturns: 1\n\n</code>\nYou need strictly more votes than all other candidates, so you need to\nbuy one vote.\n\n<li class="example-odd">\n<code>\n\n[1]\n\nReturns: 0\n\n</code>\nIf you are the only candidate, you automatically win.\n\n<li class="example-even">\n<code>\n\n[5, 10, 7, 3, 8]\n\nReturns: 4\n\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this\ninformation without the prior written consent of TopCoder, Inc. is\nstrictly prohibited. (c)2006, TopCoder, Inc. All rights reserved.",
    formName: "voterigging",
  },
  {
    filename: "WhichFirstNames.py",
    name: "WhichFirstNames",
    description: "",
    lang: "python",
    initial:
      "def computeNames(team1, count, team2):\n\t'''\n\tYou have three parameters, team1,\n\tcount, and team2.\n\tThe two string parameters are\n\tnamed team1 and team2, where both\n\tof them are a string of peoples names,\n\twith words separated by blanks.\n\tEach name on a team is exactly two words.\n\tThe count parameter is an integer\n\tand indicates the number of teams. It\n\twill always have the value 2.\n\tThis function returns a string of the\n\tunique first names that are only\n\tin one of the teams. The names should\n\tappear in alphabetical order.\n\t'''\n\t\n\t# you write code here",
    problem:
      'Given the names of players for two teams, your\ntask is to determine the <strong> unique first names\nthat are only on one of the teams. </strong> Those names should be\nreturned in alphabetical order.\nNote that there could be duplicate first names in a team, or between two\nteams.\n\n\n\n\nWrite function <em>computeNames </em> that has three parameters that are two string\nparameters <code>team1</code> and <code>team2</code> and an integer\nparameter <code> count</code>, indicating the number of teams, which will always have the value 2. This function\nreturns a string of the unique first names that appear in only one of the\nteams. Those names are returned in alphabetical order.\n\nThe format of both <code>team1</code>\nand <code>team2</code> is a string of words separated by blanks, with each\nname containing two words that are a first name followed by a last name.\n\n The parameter count will always have the value 2 and is the second\nparameter, between team1 and team2. We are only using this parameter\nbecause the APT tester prints out team1 and team2 without quotation\nmarks. With count printed between them as 2, you can tell where team 1\nends and team2 begins when the APT tester shows you the input.\n\n\n\nFor example, suppose that <code> team1</code> and <code>team2</code> are\nthe following strings (and count will be 2):\n\n<code>\nteam1 = "Joe Smith Wes Smith Joe Wright Craig Wills"\ncount = 2\nteam2 = "Bill Carter Wes Mitchell Craig Smith"\n\n</code>\n\n\n\nThen <code>team1</code> has four players on its  team: Joe Smith, Wes Smith,\nJoe Wright and Craig Wills, and <code>team2</code> has three players on its team:\nBill Carter, Wes Mitchell, and Craig Smith.\n\nThen computeNames for these two teams would return the string "Bill Joe"\nbecause Bill is a first name on team2 and not anyones first name on team1;\nand Joe  is a first name on team1 and is not anyones first name on\nteam2. All the other first names appear on both teams.',
    constraints:
      "<ul>\n<li> <strong> count will always be 2 </strong>. There will always be\ntwo teams. You don't need to do anything to this variable in your\ncode.  </li>\n\n<li> Both <code>team1</code> and <code>team2</code> are a string of 2 or more words,\nseparated by blanks. They both will have an even number of words.\nEach word has at least one letter, its first letter is a capital letter\nand the remaining letters are formed only of lowercase alphabetic\ncharacters. </li>\n<li> Both  <code>team1</code> and <code>team2</code> start with an alphabetic\ncharacter and end with an alphabetic character and cannot have two\nadjacent blanks.</li>\n<li> <code>team1</code> may have the same number or a different number of words\nthan  <code>team2</code> </li>\n<li> There could be duplicate words in team1 or team2 or between the\ntwo.  </li>\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nteam1 = "Joe Smith Wes Smith Joe Wright Craig Wills"\ncount = 2\nteam2 = "Bill Carter Wes Mitchell Craig Smith"\n\nreturns: "Bill Joe"\n\nThe example above.\n</code>\n\n\n<li class="example-even">\n<code>\nteam1 = "Joe Smith Wes Smith Joe Wright Craig Wills"\ncount = 2\nteam2 = "John Pixel Bill Carter Wes Mitchell Craig Smith"\n\n\nreturns: "Bill Joe John"\n\n"John and Bill are both in team2 but not team1, Joe is in team1 but not in\nteam2. The remaining names appear in both teams.\n\nNote: Joe appears more than once, but only one Joe is returned. The names\nreturned  are in alphabetical order.\n</code>\n\n\n<li class="example-odd">\n<code>\n\nteam1 = "Wes Smith"\ncount = 2\nteam2 = "Wes Pixel"\n\nreturns: ""\n\nThere are no first names that appear only on one team.\n</code>\n\n\n\n<li class="example-even">\n<code>\nteam1 = "Wes Smith"\ncount = 2\nteam2 = "John Pixel"\n\n\nreturns: "John Wes"\n\nBoth first names appear only on one team.\n</code>\n\n\n<li class="example-odd">\n<code>\nteam1 = "Mia Borger Sarah Espinosa Mia Harris Jason Rose Frank Taylor Jason Keim"\ncount = 2\nteam2 = "Sarah Yang Hannah Walter Dustin Nicholson Sarah Borger Hannah Kim"\n\n\nreturns: "Dustin Frank Hannah Jason Mia"\n\nSarah is the only name that appears on both teams.\n</code>\n\n\n<li class="example-even">\n<code>\nteam1 = "Annie Yang Thomas Zenker Thomas Wang"\ncount = 2\nteam2 = "Hannah Walter Dustin Nicholson Hannah Borger Sarah Kim"\n\nreturns: "Annie Dustin Hannah Sarah Thomas"\n\nEvery first name is only on one team.\n</code>\n\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "whichfirstnames",
  },
  {
    filename: "WhichSubjects.py",
    name: "WhichSubjects",
    description: "",
    lang: "python",
    initial:
      "def computeSubjects(phrase):\n\t'''\n\tGiven the string phrase, return a phrase\n\tthat includes all the words from phrase that do\n\tnot contain a digit or \"-\" or \":\". Those words must\n\tbe in the same order they were in  phrase.\n\t'''\n\t\n\t# you write code here",
    problem:
      'Given a phrase, your task is to create a new phrase that includes only\nthose\nwords from the original phrase that do not have digits in them nor the\ncharacters ":" or "-".\n\n\nYou might use this method for example to extract out the subjects of the\ncourses that someone is taking. For example if the phrase is:\n\n<code>\n"CompSci 101 TuTh1:25pm Econ 101 MW10:05am"\n</code>\n\nThen you would return the string "CompSci Econ". You would not include words\nthat have digits, ":" or "-", so in this case you would not include any of\nthese words: "101",\n"TuTh1:25pm",  "101", and "MW10:05am".\n\n\n\nWrite function <em>computeSubjects </em> that has one string\nparameter <code>phrase</code>.\nThis function returns a string of the words from phrase, in the same order,\nthat do not have a digit, ":", or "-".\n\nYou may want to consider writing a helper function.',
    constraints:
      '<ul>\n<li> phrase is of length 1 or more characters  </li>\n<li> phrase is <strong>upper or lowercase </strong>alphabetic\ncharacters, digits, ":", "-" or\nblanks.\n <li> Blank is the separator between words in phrase. That means phrase starts and ends with a non-blank character, and if there\nare blanks, there cannot be two adjacent blanks.    </li>\n</ul>',
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nphrase =  "CompSci 101 TuTh1:25pm Econ 101 MW10:05am"\n\n\nreturns: "CompSci Econ"\n\n(example above)\n</code>\n\n\n<li class="example-even">\n<code>\nphrase =  "Math 112 CompSci 101 Bio 201 Chem 101"\n\n\nreturns: "Math CompSci Bio Chem"\n\n\n</code>\n\n\n<li class="example-odd">\n<code>\nphrase =  "CompSci101 Econ101"\n\n\nreturns: ""\n\nBoth words contain a digit, so there are no valid words to return.\n\n</code>\n\n\n\n<li class="example-even">\n<code>\n\n\nphrase =  "153FS NEUROSCI MW10:05 to11:20 Sec01 Languages207 4989"\n\n\nreturns: "NEUROSCI"\n\nNEUROSCI is the only word that does not have a digit or ":" in it.\n\n</code>\n\n\n</ol>',
    copyright:
      '<a rel="license"\nhref="http://creativecommons.org/licenses/by-sa/3.0/"><img\nalt="Creative Commons License" style="border-width:0"\nsrc="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"\n/></a><br />This work\nis copyright &copy; Susan Rodger and\nis licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.',
    formName: "whichsubjects",
  },
  {
    filename: "WordCompositionGame.py",
    name: "WordCompositionGame",
    description: "",
    lang: "python",
    initial:
      'def score(listA,listB,listC):\n\t"""\n\treturn String based on three string list parameters\n\t"""\n\t\n\t# you write code here',
    problem:
      'Three players are playing a game of word composition in which each\nplayer writes down a list of words. After the time expires the scores\nare calculated using the following rules. Each player gains 3 points for\neach unique word that only he has, 2 points for each word that is shared\nwith exactly one other player, and 1 point for each word that is shared\nwith both of the other players.\n\n\nYou will be given three string lists <code>listA</code>,\n<code>listB</code> and <code>listC</code> - the word lists of\nplayerA, playerB and playerC respectively. Your method should return\nscores of playerA, playerB and playerC in the form of the string\n"scoreA/scoreB/scoreC" (quotes for clarity).',
    constraints:
      "<ul>\n\n<LI>\n<code>listA</code>, <code>listB</code> and <code>listC</code> will have between 1 and 50 elements each,\ninclusive.\n<LI>\nEach element of <code>listA</code>, <code>listB</code> and <code>listC</code> will contain between 1 and 20\ncharacters, inclusive.\n<LI> Each element of <code>listA</code>, <code>listB</code> and <code>listC</code> will contain only lowercase\nletters ('a'-'z').\n<P<LI> All elements in <code>listA</code> will be distinct.\n<LI> All elements in <code>listB</code> will be distinct.\n<LI> All elements in <code>listC</code> will be distinct.\n\n</ul>",
    examples:
      '<ol>\n<li class="example-odd">\n<code>\nlistA = ["cat", "dog", "pig", "mouse"]\nlistB = ["cat", "pig"]\nlistC = ["dog", "cat"]\n\nReturns: "8/3/3"\n</code>\n\n<li class="example-even">\n<code>\nlistA = ["mouse"]\nlistB = ["cat", "pig"]\nlistC = ["dog", "cat"]\n\nReturns: "3/5/5"\n</code>\n\n<li class="example-odd">\n<code>\nlistA = ["dog", "mouse"]\nlistB = ["dog", "pig"]\nlistC = ["dog", "cat"]\n\nReturns: "4/4/4"\n</code>\n\n<li class="example-even">\n<code>\nlistA = ["bcdbb","aaccd","dacbc","bcbda","cdedc","bbaaa","aecae"]\nlistB = ["bcdbb","ddacb","aaccd","adcab","edbee","aecae","bcbda"]\nlistC = ["dcaab","aadbe","bbaaa","ebeec","eaecb","bcbba","aecae","adcab","bcbda"]\n\nReturns: "14/14/21"\n</code>\n</ol>',
    copyright:
      "This problem statement is the exclusive and proprietary property of\nTopCoder, Inc. Any unauthorized use or reproduction of this information\nwithout the prior written consent of TopCoder, Inc. is strictly\nprohibited. &copy;2010, TopCoder, Inc. All rights reserved.",
    formName: "wordcomposition",
  },
];
