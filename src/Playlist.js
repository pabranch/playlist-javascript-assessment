class Playlist{
  constructor(name){
    this.name = name
    this.songList = []
  }

  isEmpty(){
    return this.songList.length === 0
  }

  addSong(song){
    this.songList.push(song)
  }

  songNames(){
    return this.songList.map((song) => song.name)
  }

  totalDuration(){
    return this.songList.reduce((acc, {duration}) => acc += duration, 0)
  }

  swap(song1, song2){
    const song1Index = this.songList.indexOf(song1)
    const song2Index = this.songList.indexOf(song2)

    this.songList[song1Index] = song2
    this.songList[song2Index] = song1

    // this.songList = this.songList.map((song, ndx) => {
    //   if (ndx === song1Index) return song2
    //   else if (ndx === song2Index) return song1
    //   else return song
    // })
  }

  removeSong(song){
    this.songList = this.songList.filter((s) => s != song)
  }

}

module.exports = Playlist
