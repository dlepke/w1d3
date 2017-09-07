var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (aLibrary) {
  var libplay = library.playlists;
  for (var i in libplay) {
    console.log(libplay[i].id + ': ' + libplay[i].name + ' - ' + libplay[i].tracks.length + ' tracks');
  }
}
//printPlaylists(library);

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (aLibrary) {
  var libtrack = library.tracks;
  for (var i in libtrack) {
    console.log(libtrack[i].id + ': ' + libtrack[i].name + ' by ' + libtrack[i].artist + ' (' + libtrack[i].album + ')')
  }
}
//printTracks(library)


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var libplay = library.playlists[playlistId];
  var libtrack = library.tracks;
  console.log(libplay.id + ': ' + libplay.name + ' - ' + libplay.tracks.length + ' tracks');
  for (var x = 0; x < libplay.tracks.length; x++) {
    var lpt = libplay.tracks[x];
    console.log(lpt + ': ' + libtrack[lpt].name + ' by ' + libtrack[lpt].artist + ' (' + libtrack[lpt].album + ')');
  }
}
//printPlaylist('p01');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(playlistId + ': ' + library.playlists[playlistId].tracks);
}
//addTrackToPlaylist("t03", "p01");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var uniqueId = uid();
  library.tracks[uniqueId] = {
    id: uniqueId,
    name: name,
    artist: artist,
    album: album
  }
  console.log(library.tracks);
}
//addTrack('hey', 'hi', 'hello')

// adds a playlist to the library

var addPlaylist = function (name) {
  var uniqueId = uid();
  library.playlists[uniqueId] = {
    id: uniqueId,
    name: name,
    tracks: []
  }
  console.log(library.playlists);
}
//addPlaylist('ladygaga');


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  var searchQuery = query.toLowerCase();
  for (var i in library.tracks) {
    var loopTrack = library.tracks[i]
    for (var detail in loopTrack) {
      if (loopTrack[detail].toLowerCase().search(searchQuery) !== -1) {
      console.log(library.tracks[i]);
      }
    }
  }
}

printSearchResults('Woodstock');