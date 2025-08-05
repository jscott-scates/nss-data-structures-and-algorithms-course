// ==============================
// Exercise 1: Help Alex Manage Multiple Venue Setlists
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create functions to manage setlists for different venues efficiently

function buildSetlistWithPush(songs) {
  // Start with empty setlist and use push() to add songs one by one
  let setlist = []
  for (let i = 0; i <songs.length; i++){
    setlist.push(songs[i])
  }
  // Return the final setlist
  return setlist
}

function managePerformanceQueue(initialLineup, newOpeners, finishedActs) {
    // Use unshift() to add new opening acts
    initialLineup.unshift(...newOpeners) //use the spread operator to add each item in new openers one at a time. 
    // Use shift() to remove finished acts
    for (let i = 0; i < finishedActs; i++){
        initialLineup.shift()
    }
    // Return the updated lineup
    return initialLineup
}

const songs = ["Thunderstruck", "Hotel California", "Free Bird"];
console.log("Built setlist:", buildSetlistWithPush(songs));

let lineup = ["Alex's Main Set"];
lineup = managePerformanceQueue(lineup, ["Jazz Trio", "Folk Singer"], 1);
console.log("Updated lineup:", lineup);

// ==============================
// Exercise 2: Help Alex Transform and Filter Song Collections
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create venue-specific versions and filter songs by criteria

function createVenueVersions(songs, venueType) {
    // Transform duration and add venue-specific properties
    const durationIncrements = {
        'rock':.5,
        'jazz':1,
        'electronic':2,
        'default':0 
    };
    const increment = durationIncrements[venueType] ?? durationIncrements['default'];
    // Use map() to transform songs for specific venue
    // venueType can be "rock", "jazz", or "electronic"
    const modifiedSongs = songs.map(song => ({
        title: song.title,
        genre: venueType,
        mood: song.mood,
        duration: song.duration + increment
    }));    
    return modifiedSongs
}

function filterSongsForEvent(repertoire, eventType) {
    // eventType can be "wedding", "corporate", "festival"
    // Use filter() to select appropriate songs
     // Return songs matching the event criteria
    if (eventType === "wedding") {
        return repertoire.filter(song =>
            song.mood === "romantic" || song.mood === "peaceful" || song.mood === "spiritual"
        );
    } else if (eventType === "corporate"){
        return repertoire.filter(song => 
        song.mood === "energetic");
    } else if (eventType === "festival"){
        return repertoire.filter(song => 
            song.genre === "rock" && song.mood === "energetic");
    } else {
        return [];
    }
}

const coreSongs = [
  { title: "Wonderwall", genre: "alternative", mood: "nostalgic", duration: 4.2 },
  { title: "At Last", genre: "jazz", mood: "romantic", duration: 3.2 }
];

console.log("Rock versions:", createVenueVersions(coreSongs, "rock"));
console.log("Wedding songs:", filterSongsForEvent(coreSongs, "wedding"));

// ==============================
// Exercise 3: Help Alex Analyze Performance Data
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Process performance data and calculate business metrics

function generatePerformanceReport(performances) {
    // Use forEach() to process each performance and generate detailed report
    // Include venue, date, audience, revenue, and calculated metrics
    performances.forEach((performance, index) => {
        const revenuePerPerson = (performance.revenue / performance.audience).toFixed(2);
        
        console.log(`Performance ${index +1}:`)
        console.log(`Venue: ${performance.venue}`)
        console.log(`Date: ${performance.date}`)
        console.log(`Audience: ${performance.audience}`)
        console.log(`Revenue: ${performance.revenue}`)
        console.log(`Revenue Per Person: ${revenuePerPerson}`)
        console.log("-------------------------------------------")
    })
}

function calculateBusinessMetrics(performances) {
    // Use reduce() to calculate total revenue, average audience, and venue statistics
    let totalRevenue = performances.reduce((accumulator,performance)=> {
        return accumulator + performance.revenue
    },0)

    let avgAudience = performances.reduce((accumulator, performace) => {
        return accumulator + performace.audience
    },0) / performances.length    
    // Return an object with all the calculated metrics
    let metrics = {
        totalRevenue: `Total Revenue: $${totalRevenue}`,
        avgAudience: `Average Audience: ${avgAudience}`,
    }
    return  metrics
}

function extractRecentPerformances(performances, count) {
    // Use slice() to extract the most recent performances
    return performances.slice(-count);
    // Return the specified number of recent performances
    
}

const performances = [
    { venue: "Blue Note", date: "2024-01-05", audience: 85, revenue: 450 },
    { venue: "Jazz Corner", date: "2024-01-12", audience: 45, revenue: 320 },
    { venue: "Electric Underground", date: "2024-01-19", audience: 120, revenue: 680 }
];

generatePerformanceReport(performances);
console.log("Metrics:", calculateBusinessMetrics(performances));
console.log("Recent:", extractRecentPerformances(performances, 2));

// ==============================
// Exercise 4: Help Alex Master Method Chaining and Advanced Array Operations
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Use method chaining and splice() for complex data operations

function createOptimalSetlist(songDatabase, criteria) {
    // Use method chaining: filter by criteria, sort by popularity,
    // map to add performance notes, and limit to top songs
    // criteria: { maxDuration: number, preferredMood: string, maxSongs: number }
    return songDatabase
    .filter(song =>
        song.mood === criteria.preferredMood && 
        song.duration <= criteria.maxDuration
    )
    .sort((a,b) => b.popularity - a.popularity)
    .slice(0, criteria.maxSongs)
    .map(song => ({
        ...song,
        notes: `Prepare intro for ${song.title}`
    }));
}

function restructureFestivalLineup(lineup, changes) {
    // Use splice() to make complex changes to the lineup
    // changes: { removeAt: number, removeCount: number, addActs: array }
    const removed = lineup.splice(
        changes.removeAt,
        changes.removeCount,
        ...changes.addActs
    );
    // Return the removed acts
    return removed;
}

const songDatabase = [
    { title: "Thunderstruck", mood: "energetic", duration: 4.8, popularity: 95 },
    { title: "Hotel California", mood: "mysterious", duration: 6.5, popularity: 98 },
    { title: "Wonderwall", mood: "nostalgic", duration: 4.2, popularity: 92 }
];

const criteria = { maxDuration: 5.0, preferredMood: "energetic", maxSongs: 2 };
console.log("Optimal setlist:", createOptimalSetlist(songDatabase, criteria));

let festivalLineup = ["Opening", "Band A", "Band B", "Headliner", "Closing"];
const changes = { removeAt: 1, removeCount: 2, addActs: ["Jazz Ensemble", "Rock Band"] };
console.log("Removed:", restructureFestivalLineup(festivalLineup, changes));
console.log("New lineup:", festivalLineup);
    


