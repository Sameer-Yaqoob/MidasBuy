/* eslint-disable */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { all, compose, isNil, not } from 'ramda';

const hasAllArgs = all(compose(not, isNil));

/**
 * Calls fetch action creator if and only if all the argument is present.
 */
export default (actionCreator,...args) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (hasAllArgs(args)) {
      dispatch(actionCreator(...args));
    }
  }, [actionCreator, dispatch, ...args]); // eslint-disable-line react-hooks/exhaustive-deps
};
