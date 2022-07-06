import styled from '@emotion/styled';
import {useContext, useState} from 'react';

import {SongContext} from '../../context/song';
import {AuthContext} from '../../context/auth';

import {addSongInfo} from '../../plugins/song';

import {AddSongModal} from './AddSongModal';
import {AddSongModalForm} from './AddSongModalForm';
import {AddSongModalContainer} from './AddSongModalContainer';
import {AddSongModalContent} from './AddSongModalContent';
import {AddSongModalContentHeader} from './AddSongModalContentHeader';
import {AddSongModalFormItemList} from './AddSongModalFormItemList';
import {AddSongModalFormItemInputTitle} from './AddSongModalFormItemInputTitle';
import {AddSongModalFormItemInputArtist} from './AddSongModalFormItemInputArtist';
import {AddSongModalFormItemInputImageURL} from './AddSongModalFormItemInputImageURL';
import {AddSongErrorMessage} from './AddSongErrorMessage';
import {AddSongModalController} from './AddSongModalController';
import {AddSongModalSubmitButton} from './AddSongModalSubmitButton';
import {AddSongModalCancelButton} from './AddSongModalCancelButton';

const AddSong = ({isShow, handleModalClose}) => {
  const {state, dispatch} = useContext(SongContext);
  const {state: authState} = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const isButtonDisabled =
    title === '' || artist === '' || imageUrl === '' || state.isSongSubmitting;

  const handleSubmit = async (e) => {
    console.log(e);
    dispatch({
      type: 'ADD_SONG_REQUEST',
    });
    const song = {
      title: title,
      imageUrl: imageUrl,
      artist: artist,
    };

    try {
      const resultAddSongInfo = await addSongInfo({song});
      console.log(resultAddSongInfo);
      setArtist('');
      setTitle('');
      setImageUrl('');
      dispatch({
        type: 'ADD_SONG_SUCCESS',
        payload: resultAddSongInfo,
      });
      handleModalClose();
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'ADD_SONG_FAILURE',
      });
    }
  };
  if (!isShow) {
    return null;
  }
  return (
    <AddSongModal>
      <AddSongModalContainer>
        <AddSongModalContent>
          <AddSongModalContentHeader></AddSongModalContentHeader>
          <AddSongModalForm>
            <AddSongModalFormItemList>
              <AddSongModalFormItemInputTitle
                title={title}
                setTitle={setTitle}
              ></AddSongModalFormItemInputTitle>
              <AddSongModalFormItemInputArtist
                artist={artist}
                setArtist={setArtist}
              ></AddSongModalFormItemInputArtist>
              <AddSongModalFormItemInputImageURL
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
              ></AddSongModalFormItemInputImageURL>
            </AddSongModalFormItemList>

            <AddSongErrorMessage
              songHasError={state.songHasError}
            ></AddSongErrorMessage>

            <AddSongModalController>
              <AddSongModalSubmitButton
                handleClick={handleSubmit}
                isButtonDisabled={isButtonDisabled}
                isSongSubmitting={state.isSongSubmitting}
              ></AddSongModalSubmitButton>

              <AddSongModalCancelButton
                handleClick={handleModalClose}
              ></AddSongModalCancelButton>
            </AddSongModalController>
          </AddSongModalForm>
        </AddSongModalContent>
      </AddSongModalContainer>
    </AddSongModal>
  );
};

export default AddSong;
