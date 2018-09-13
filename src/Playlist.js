class Playlist{
  constructor(name){
    this.name = name
    this.songs = []
  }

  isEmpty(){
    return this.songs.length === 0
  }

  addSong(song){
    this.songs.push(song)
  }

  songNames(){
    return this.songs.map(song => song.name)
  }

  totalDuration(){
    return this.songs.reduce((duration, song) => duration + song.duration, 0)
  }

  swap(a, b){
    const indexOfA = this.songs.indexOf(a)
    const indexOfB = this.songs.indexOf(b)

    const temp = this.songs[indexOfA]
    this.songs[indexOfA] = this.songs[indexOfB]
    this.songs[indexOfB] = temp
  }

  remove(songToRemove){
    this.songs = this.songs.filter(song => song != songToRemove)
  }
}

module.exports = Playlist
