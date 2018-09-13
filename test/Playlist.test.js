const { expect } = require('chai')

var Song = require('../src/Song');
var Playlist = require('../src/Playlist');

describe('Playlist', function() {

  var itHadToBeYou = new Song('It had to be you', 100);
  var butNotForMe = new Song('But Not for Me', 50);
  var autumnInNewYork = new Song('Autumn In New York', 25);

  it("is empty by default", function() {
    var playlist = new Playlist('jazz');
    expect(playlist.name).to.equal('jazz');
    expect(playlist.isEmpty()).to.equal(true);

    var playlist2 = new Playlist('classic rock');
    expect(playlist2.name).to.equal('classic rock');
    expect(playlist2.isEmpty()).to.equal(true);
  });

  // it("allows you to add a song", function() {
  //   var playlist = new Playlist('jazz');
  //
  //   playlist.addSong(itHadToBeYou);
  //
  //   expect(playlist.isEmpty()).to.equal(false);
  //
  //   var playlist2 = new Playlist('classic rock');
  //   expect(playlist2.isEmpty()).to.equal(true);
  // });
  //
  // it("allows you to see all song names in the order they were added", function() {
  //   var playlist = new Playlist('jazz');
  //
  //   expect(playlist.songNames()).to.equal([]);
  //
  //   playlist.addSong(itHadToBeYou);
  //   expect(playlist.songNames()).to.equal(['It had to be you']);
  //
  //   playlist.addSong(butNotForMe)
  //   expect(playlist.songNames()).to.equal([
  //     'It had to be you',
  //     'But Not for Me'
  //   ]);
  // });
  //
  // it("tells you the total duration of the playlist", function() {
  //   var itHadToBeYou = new Song('It had to be you', 100);
  //   var butNotForMe = new Song('But Not for Me', 50);
  //   var autumnInNewYork = new Song('Autumn In New York', 25);
  //
  //   var playlist = new Playlist('jazz');
  //
  //   expect(playlist.totalDuration()).to.equal(0);
  //
  //   playlist.addSong(itHadToBeYou);
  //   expect(playlist.totalDuration()).to.equal(100);
  //
  //   playlist.addSong(butNotForMe);
  //   playlist.addSong(autumnInNewYork);
  //   expect(playlist.totalDuration()).to.equal(175);
  // });
  //
  //
  // it("allows you to swap songs", function() {
  //   var playlist = new Playlist('jazz');
  //
  //   playlist.addSong(itHadToBeYou);
  //   playlist.addSong(butNotForMe);
  //   playlist.addSong(autumnInNewYork);
  //
  //   playlist.swap(itHadToBeYou, autumnInNewYork);
  //   expect(playlist.songNames()).to.equal([
  //     'Autumn In New York',
  //     'But Not for Me',
  //     'It had to be you',
  //   ]);
  //
  //   playlist.swap(butNotForMe, autumnInNewYork);
  //   expect(playlist.songNames()).to.equal([
  //     'But Not for Me',
  //     'Autumn In New York',
  //     'It had to be you',
  //   ]);
  // });
  //
  // it("allows you remove a song from the playlist", function() {
  //   var playlist = new Playlist('jazz');
  //
  //   playlist.addSong(itHadToBeYou);
  //   expect(playlist.isEmpty()).to.equal(false);
  //
  //   playlist.addSong(butNotForMe);
  //
  //   expect(playlist.songNames()).to.equal([
  //     'It had to be you',
  //     'But Not for Me',
  //   ]);

});
