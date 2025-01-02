/*   STEP 1   */
export const leagueID = "1180131650126454784"; // your league ID
export const leagueName = "A Game of Inches"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the official website of A Game of Inches.</p>
  <p>This website aims to support the Sleeper app and provide a living, breathing record of our brilliant fantasy league.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
       "managerID": "578560512908898304",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Jonny",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "England", // (optional)
       "bio": "The baddest manager in town. Quite literally.",
       "photo": "/managers/jonny3.png", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Charlie", // Can be anything (usually your rival's name)
         link: 3, // manager array number within this array, or null to link back to all managers page
         image: "/managers/charlie.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 2306, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Youth and swagger over proven ability.",
       "tradingScale": 8, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "578589932973498368",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Harry",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "England", // (optional)
       "bio": "Two-time champion and Saquon fanboy.",
       "photo": "/managers/harry.png", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Ross", // Can be anything (usually your rival's name)
         link: 2, // manager array number within this array, or null to link back to all managers page
         image: "/managers/ross.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 7591, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Studs and more studs. F*** them picks.",
       "tradingScale": 6, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "578975556536672256",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Ross",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "England", // (optional)
       "bio": "Two-time champion, one of which with an asterix.",
       "photo": "/managers/ross.png", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Harry", // Can be anything (usually your rival's name)
         link: 1, // manager array number within this array, or null to link back to all managers page
         image: "/managers/harry.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1479, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Cram as many Chargers players into the lineup as possible.",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "969212775710912512",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Charlie",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Northern Ireland", // (optional)
       "bio": "Original founder - briefly lost love for fantasy football but has come back swinging.",
       "photo": "/managers/charlie.png", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Ross", // Can be anything (usually your rival's name)
         link: 2, // manager array number within this array, or null to link back to all managers page
         image: "/managers/ross.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1234, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "There's no run of bad form that can't resolved by a new team logo.",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "578198399849893888",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Kristof",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "England", // (optional)
       "bio": "OG Flop Boi - sexy team but so far has peaked at 3rd place.",
       "photo": "/managers/kristof.png", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Charlie", // Can be anything (usually your rival's name)
         link: 3, // manager array number within this array, or null to link back to all managers page
         image: "/managers/charlie.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 2315, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "A roster should be as effective on a wall poster as it is on the field.",
       "tradingScale": 7, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "609045409725210624",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Stefan",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Sweden", // (optional)
       "bio": "Swedish millionaire. Ruthless. Probably planning to take over one day.",
       "photo": "/managers/stefan.png", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "tb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Ross", // Can be anything (usually your rival's name)
         link: 2, // manager array number within this array, or null to link back to all managers page
         image: "/managers/ross.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 4892, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "The older the better. F*** them rookies.",
       "tradingScale": 8, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "578933467732029440",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Sam",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "England", // (optional)
       "bio": "Part of the league since inception. Has enough picks to feed a lot of third-world countries.",
       "photo": "/managers/sam.png", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Matt", // Can be anything (usually your rival's name)
         link: 7, // manager array number within this array, or null to link back to all managers page
         image: "/managers/matt.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 8183, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Tank for 2020/21/22/23/24 and then dominate from 2025 onwards.",
       "tradingScale": 6, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "578897887224700928",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Matt",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "England", // (optional)
       "bio": "Long suffering Bears fan. Has patiently built an exciting team.",
       "photo": "/managers/matt.png", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Sam", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/sam.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 559, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Balance experience with electric rookies.",
       "tradingScale": 7, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "578634422664871936",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Jon",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "England", // (optional)
       "bio": "Day 1 member, always contending. No picture of him exists.",
       "photo": "/managers/jon.png", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Age", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/age.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 232, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "You don't win anything with kids.",
       "tradingScale": 4, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "1156248882016407552",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Benjamin",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Italy", // (optional)
       "bio": "New kid on the block. Joined the league in 2024.",
       "photo": "/managers/ben.png", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Kristof", // Can be anything (usually your rival's name)
         link: 4, // manager array number within this array, or null to link back to all managers page
         image: "/managers/kristof.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "You can't be disappointed if you don't set a lineup.",
       "tradingScale": 1, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
