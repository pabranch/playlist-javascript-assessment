class Playlist{

  constructor(name){
    this.name = name
    this.songs = []
  }

  isEmpty(){
    return this.songs.length == 0
  }

  addSong(song){
    this.songs.push(song)
  }

  songNames(){
    return this.songs.map(v => v.name)
  }

  totalDuration(){
    return this.songs.reduce(
        (acc, song) => {
          acc += song.duration
          return acc
        }, 0)
  }

  swap(song1, song2){
    const ndx1 = this.songs.indexOf(song1)
    const ndx2 = this.songs.indexOf(song2)

    const temp = this.songs[ndx1]
    this.songs[ndx1] = this.songs[ndx2]
    this.songs[ndx2] = temp
  }

  removeSong(song){
    this.songs.splice(this.songs.indexOf(song), 1)
  }
}

module.exports = Playlist
