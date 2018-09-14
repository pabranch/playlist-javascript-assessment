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
    return this.songs.map((song) => song.name)
  }

  totalDuration(){
    return this.songs.reduce((acc, song) => acc += song.duration, 0)
  }

  swap(song1, song2){
    const index1 = this.songs.indexOf(song1)
    const index2 = this.songs.indexOf(song2)

    const temporarySong = this.songs[index1]
    this.songs[index1] = this.songs[index2]
    this.songs[index2] = temporarySong
  }

  removeSong(song){
    this.songs = this.songs.filter((s) => song.name != s.name)
  }
}

module.exports = Playlist
