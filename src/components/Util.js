import format from 'date-fns/format';

const formatTime = (duration_ms) => {
  const minutes = Math.floor(duration_ms / 60000);
  const seconds = ((duration_ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export const createSongObj = (song) => {
  let songObj = null;
  if (song) {
    songObj = {
      id: song.track.id,
      name: song.track.name,
      albumName: song.track.album.name,
      albumImg: song.track.album.images[0].url,
      artist: song.track.artists[0].name,
      date: song.added_at ? format(song.added_at, 'YYYY-MM-DD') : format(song.played_at, 'YYYY-MM-DD'),
      length: formatTime(song.track.duration_ms),
      preview_url: song.track.preview_url
    };
  }
  return songObj;
}