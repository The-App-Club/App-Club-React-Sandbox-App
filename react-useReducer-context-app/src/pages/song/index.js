import {useContext, useEffect, useReducer, useState} from 'react';
import {AuthContext} from '../../context/auth';
import {SongContext, songInitialState, songReducer} from '../../context/song';

import {getSongInfoList} from '../../plugins/song';

import {SongCardItemList} from '../../components/song/SongCardItemList';
import AddSong from '../../components/song/AddSong';
import {AddSongButton} from '../../components/song/AddSongButton';
import {SongContainer} from '../../components/song/SongContainer';
import {SongLoading} from '../../components/song/SongLoading';
import {SongErrorMessage} from '../../components/song/SongErrorMessage';

export const Home = () => {
  const {state: authState} = useContext(AuthContext);
  const [state, dispatch] = useReducer(songReducer, songInitialState);
  const [isAddSongModalVisible, setAddSongModalVisibility] = useState(false);

  const toggleAddSong = () => {
    setAddSongModalVisibility((isAddSongModalVisible) => {
      return !isAddSongModalVisible;
    });
  };

  useEffect(() => {
    dispatch({
      type: 'FETCH_SONGS_REQUEST',
    });
    (async () => {
      try {
        const resultSongInfoList = await getSongInfoList();
        dispatch({
          type: 'FETCH_SONGS_SUCCESS',
          payload: resultSongInfoList,
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_SONGS_FAILURE',
        });
      }
    })();
  }, [authState.token]);

  return (
    <>
      <SongContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <AddSongButton handleClick={toggleAddSong}>ADD SONG</AddSongButton>
        <AddSong
          isShow={isAddSongModalVisible}
          handleModalClose={toggleAddSong}
        />
      </SongContext.Provider>
      <SongContainer>
        <SongLoading isFetching={state.isFetching}></SongLoading>
        <SongErrorMessage hasError={state.hasError}></SongErrorMessage>
        <SongCardItemList songs={state.songs}></SongCardItemList>
      </SongContainer>
    </>
  );
};

export default Home;
