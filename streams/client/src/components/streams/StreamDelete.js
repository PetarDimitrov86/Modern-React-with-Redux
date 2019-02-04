import React, { Fragment } from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <Fragment>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>Cancel</button>
    </Fragment>
  )

  return (
    <div>
      StreamDelete
      <Modal
        title='Delete Stream'
        content='Are you sure you want to delete this stream?'
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;