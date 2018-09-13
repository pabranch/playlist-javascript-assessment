class Playlist{
  constructor(name){
   this.name=name
   this.songs=[]
  }

  isEmpty(){
     if(this.songs.length === 0)
     return true;
     else
     return false;
  }
  addSong(song){

    this.songs.push(song);

  }
  songNames(){
    // return this.songs.map(song => song.name)

    const arr = [];
    if(this.isEmpty() === true)
      return [];
    else{
     for(let i of this.songs){
        arr.push(i.name)
     }
     return arr;
    }
    
  }
  totalDuration(){
    return this.songs.reduce((acc,ele) => {
       return acc + ele.duration;
    },0);
  }
  swap(song1,song2){
    const indexOfSong1 = this.songs.indexOf(song1)
    const indexOfSong2 = this.songs.indexOf(song2)
    const temp = this.songs[indexOfSong1]
    this.songs[indexOfSong1] = this.songs[indexOfSong2]
    this.songs[indexOfSong2] = temp
  }

  removeSong(song){
    const indexOfSong = this.songs.indexOf(song);
    this.songs.splice(indexOfSong,1);
  }
}

module.exports = Playlist