import {SongCardItem} from './SongCardItem';

const SongCardItemList = ({songs}) => {
  if (songs.length > 0) {
    return songs.map((song, index) => {
      return <SongCardItem key={index} song={song} />;
    });
  }
  return null;
};

export {SongCardItemList};
