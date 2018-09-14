class Playlist{
  constructor(name) {
    this.name = name
    this.songList = []
    this.duration = 0
  }

  isEmpty() {
    return this.songList.length === 0
  }

  addSong(song) {
    this.songList.push(song)
    this.duration += song.duration
  }

  songNames() {
    return this.songList.map( (song) => song.name )
  }

  totalDuration() {
    return this.duration
  }

  swap(song1, song2)  {
    const index1 = this.songList.indexOf(song1)
    const index2 = this.songList.indexOf(song2)

    this.songList[index1] = song2
    this.songList[index2] = song1
  }

  removeSong(song) {
    this.songList = this.songList
      .filter((s) => s.name !== song.name)
  }
}

module.exports = Playlist
